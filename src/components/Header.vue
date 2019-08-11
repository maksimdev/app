<template>
  <div class="header">
    <div class="title">
      <b>NETFLIX</b>ROULETTE
      <a v-if="movieExist" v-on:click="closeOverview" class="closeButton">
        Search
      </a>
    </div>
    <Overview v-if="movieExist" v-bind:movie="movieOverview" />
    <div v-else class="search">
      <h1>find your movie</h1>
      <div class="searchPanel">
        <input
          v-model="queryString"
          v-on:keyup.enter="search"
          placeholder="Quentin Tarantino"
        />
        <a class="searchButton" v-on:click="search">search</a>
      </div>
      <div>
        <span class="searchBy">SEARCH BY</span>
        <a
          v-bind:class="[searchBy === 'title' ? 'active' : '']"
          class="button left"
          v-on:click="() => toggleFilter('title')"
        >
          title
        </a>
        <a
          v-bind:class="[searchBy === 'genres' ? 'active' : '']"
          class="button right"
          v-on:click="() => toggleFilter('genres')"
        >
          gengre
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Overview from "./Overview";

export default {
  name: "Header",
  components: {
    Overview
  },
  data: () => ({
    queryString: "",
    searchBy: "title"
  }),
  computed: {
    ...mapState(["overview"]),
    movieExist: function() {
      return this.overview.title;
    },
    movieOverview: function() {
      return this.overview;
    }
  },
  methods: {
    search() {
      this.$store.dispatch("SEARCH_MOVIES", {
        queryString: this.queryString,
        searchBy: this.searchBy
      });
    },
    closeOverview() {
      this.$store.commit("REMOVE_MOVIE_FROM_OVERVIEW");
    },
    toggleFilter(searchBy) {
      if (searchBy !== this.searchBy) {
        this.searchBy = searchBy;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  background: #535353;
  padding: 0 5.3em;
  min-width: 560px;
  padding-top: 2em;

  .title {
    font-size: 1.2em;
    color: #ff3434;
    margin-bottom: 50px;
    cursor: default;

    .closeButton {
      float: right;
    }
  }

  .searchButton {
    font-size: 1.2em;
    cursor: pointer;
    background: #555;
    padding: 1em 0em;
    width: 18%;
    text-align: center;
    background: #ff6f6f;
    border-radius: 5px;
    color: #fff;
  }
}

input {
  box-sizing: border-box;
  font-size: 2em;
  color: #fff;
  background: #6e6e6e;
  transparent: 0.1;
  width: 80%;
  border: none;
  border-radius: 5px;
  padding: 0 0.6em;
}
.search {
  height: 300px;
}
.searchPanel {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.5em;
}
.button {
  cursor: pointer;
  background: #6e6e6e;
  padding: 0.6em 1.2em;
}
.right {
  border-radius: 0px 5px 5px 0px;
}
.left {
  border-radius: 5px 0px 0px 5px;
}
.active {
  cursor: default;
  background: #ff6f6f;
}
a {
  color: #fff;
}
.searchBy {
  margin-right: 1em;
}
</style>
