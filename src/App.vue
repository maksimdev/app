<template>
  <div id="app">
    <Header />
    <SortPanel @filter="onFilter">{{ countOfFilms }}</SortPanel>
    <List :items="movies" />
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
    this.$store.dispatch('GET_MOVIES');
  },
  computed: {
    ...mapState(['movies']),
    ...mapGetters(['countOfFilms']),
    sortByReleaseDate: function() {
      return this.$store.state.movies.sort((filmOne, filmTwo) => {
        if (new Date(filmOne.release_date) < new Date(filmTwo.release_date)) {
          return 1;
        }
        if (new Date(filmOne.release_date) > new Date(filmTwo.release_date)) {
          return -1;
        }
        return 0;
      });
    },
    sortByRaiting: function() {
      return this.$store.state.movies.sort((filmOne, filmTwo) => {
        if (filmOne.vote_average < filmTwo.vote_average) {
          return -1;
        }
        if (filmOne.vote_average > filmTwo.vote_average) {
          return 1;
        }
        return 0;
      });
    }
  },
  methods: {
    onFilter: function(data) {
      if (data.filter === "raiting") {
        this.$store.state.movies = this.sortByRaiting;
      }
      if (data.filter === "releaseDate") {
        this.$store.state.movies = this.sortByReleaseDate;
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
