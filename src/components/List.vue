<template>
  <ul class="list">
    <li v-for="item in items" v-bind:key="item.id">
      <Card
        :name="item.name"
        :genre="item.genre"
        :year="item.year"
        :srcToImg="item.srcToImg"
        v-bind:style="{ display: inline }"
      />
    </li>
  </ul>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "List",
  components: {
    Card
  },
  data: () => ({
    items: [
      {
        id: 1,
        name: "Kill Bill",
        genre: "Action",
        year: "2009",
        srcToImg:
          "https://images-na.ssl-images-amazon.com/images/I/41dBu4DkbVL.jpg"
      },
      {
        id: 2,
        name: "Kill Bill vol.2",
        genre: "Action",
        year: "2010",
        srcToImg:
          "https://images-na.ssl-images-amazon.com/images/I/51Mb4jVLhVL._SY450_.jpg"
      },
      {
        id: 3,
        name: "Four Rooms",
        genre: "Comedy",
        year: "2006",
        srcToImg:
          "https://www.film.ru/sites/default/files/movies/posters/Four-Rooms-3.jpg"
      },
      {
        id: 4,
        name: "Jackie Brown",
        genre: "Trailer",
        year: "2005",
        srcToImg:
          "https://images-na.ssl-images-amazon.com/images/I/91e2jI9N9sL._SL1423_.jpg"
      },
      {
        id: 5,
        name: "Pulp Fiction",
        genre: "Trailer",
        year: "2008",
        srcToImg:
          "https://static.posters.cz/image/750/plakaty/pulp-fiction-cover-i1288.jpg"
      },
      {
        id: 6,
        name: "Reservouir Dogs",
        genre: "Trailer",
        year: "2011",
        srcToImg:
          "https://images-na.ssl-images-amazon.com/images/I/516NwxmclJL.jpg"
      }
    ]
  })
};
</script>

<style scoped lang="scss">
li {
  display: inline-block;
}
</style>
