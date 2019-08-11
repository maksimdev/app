<template>
  <div id="app">
    <Header />
    <SortPanel v-on:filter="onFilter">{{ countOfFilms }}</SortPanel>
    <List v-bind:items="movies" />
    <Footer />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import Header from "./components/Header.vue";
import SortPanel from "./components/SortPanel.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    SortPanel,
    List,
    Footer
  },
  created() {
    this.$store.dispatch("GET_MOVIES");
  },
  computed: {
    ...mapState(["movies"]),
    ...mapGetters([
      "countOfFilms",
      "moviesSortedByReleaseDate",
      "moviesSortedByRaiting"
    ])
  },
  methods: {
    onFilter: function(data) {
      if (data.filter === "raiting") {
        this.$store.commit("SET_MOVIES", this.moviesSortedByReleaseDate);
      }
      if (data.filter === "releaseDate") {
        this.$store.commit("SET_MOVIES", this.moviesSortedByRaiting);
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Geneva, Arial, Helvetica, sans-serif;
}
</style>
