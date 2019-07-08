<template>
  <div id="app">
    <Header />
    <SortPanel @filter="onFilter">{{ countOfFilms }}</SortPanel>
    <List :items="filteredResult.length ? filteredResult : mockedDataFromBE" />
    <Footer />
  </div>
</template>

<script>
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
  computed: {
    countOfFilms: function() {
      return this.filteredResult.length;
    },
    sortByReleaseDate: function() {
      return this.mockedDataFromBE.sort((filmOne, filmTwo) => {
        if (+filmOne.year < +filmTwo.year) {
          return -1;
        }
        if (+filmOne.year > +filmTwo.year) {
          return 1;
        }
        return 0;
      });
    },
    sortByRaiting: function() {
      return this.mockedDataFromBE.sort((filmOne, filmTwo) => {
        if (+filmOne.raiting < +filmTwo.raiting) {
          return -1;
        }
        if (+filmOne.raiting > +filmTwo.raiting) {
          return 1;
        }
        return 0;
      });
    }
  },
  methods: {
    onFilter: function(data) {
      if (data.filter === "raiting") {
        this.filteredResult = this.sortByRaiting;
      }
      if (data.filter === "releaseDate") {
        this.filteredResult = this.sortByReleaseDate;
      }
    }
  },
  data: () => ({
    mockedDataFromBE: [
      {
        id: 1,
        name: "Kill Bill",
        genre: "Action",
        year: "2009",
        raiting: 1,
        srcToImg:
          "https://images-na.ssl-images-amazon.com/images/I/41dBu4DkbVL.jpg"
      },
      {
        id: 2,
        name: "Kill Bill vol.2",
        genre: "Action",
        year: "2010",
        raiting: 2,
        srcToImg:
          "https://images-na.ssl-images-amazon.com/images/I/51Mb4jVLhVL._SY450_.jpg"
      },
      {
        id: 3,
        name: "Four Rooms",
        genre: "Comedy",
        year: "2006",
        raiting: 5,
        srcToImg:
          "https://www.film.ru/sites/default/files/movies/posters/Four-Rooms-3.jpg"
      },
      {
        id: 4,
        name: "Jackie Brown",
        genre: "Trailer",
        year: "2005",
        raiting: 3,
        srcToImg:
          "https://images-na.ssl-images-amazon.com/images/I/91e2jI9N9sL._SL1423_.jpg"
      },
      {
        id: 5,
        name: "Pulp Fiction",
        genre: "Trailer",
        year: "2008",
        raiting: 0,
        srcToImg:
          "https://static.posters.cz/image/750/plakaty/pulp-fiction-cover-i1288.jpg"
      },
      {
        id: 6,
        name: "Reservouir Dogs",
        genre: "Trailer",
        year: "2011",
        raiting: 4,
        srcToImg:
          "https://images-na.ssl-images-amazon.com/images/I/516NwxmclJL.jpg"
      }
    ],
    filteredResult: []
  })
};
</script>

<style lang="scss">
#app {
  font-family: Geneva, Arial, Helvetica, sans-serif;
}
</style>
