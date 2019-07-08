<template>
  <div class="header">
    <div class="title"><b>netflix</b>roulette</div>
    <h1>find your movie</h1>
    <div class="searchPanel">
      <input v-model="message" placeholder="Quentin Tarantino" />
      <a class="searchButton" @click="search">search</a>
    </div>
    <div>
      <span class="searchBy">search by</span>
      <a
        v-bind:class="[searchBy === 'title' ? 'active' : '']"
        class="button left"
        @click="() => toggleFilter('title')"
        >title</a
      >
      <a
        v-bind:class="[searchBy === 'gengre' ? 'active' : '']"
        class="button right"
        @click="() => toggleFilter('gengre')"
        >gengre</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    message: "",
    searchBy: "title"
  }),
  methods: {
    search() {
      console.log("click search!", this.message);
    },
    toggleFilter(searchBy) {
      if (searchBy !== this.searchBy) {
        this.searchBy = searchBy;
        console.log("click!", this.searchBy);
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
  height: 300px;
  text-transform: uppercase;
  padding-top: 2em;

  .title {
    font-size: 1.2em;
    color: #ff3434;
    margin-bottom: 50px;
    cursor: default;
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
h1 {
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
