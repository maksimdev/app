<template>
  <div class="moviesCard">
    {{ $route.params.id }}
    <img v-bind:src="movieForOverview.poster_path" class="poster" />
    <div class="info">
      <div class="header">
        <span class="title">{{ movieForOverview.title }}</span>
        <div class="raiting">{{ movieForOverview.vote_average }}</div>
      </div>
      <div class="timeline">
        <span class="dateTime">{{ movieForOverview.release_date }} </span> year
        <span class="dateTime">{{ movieForOverview.runtime }} </span> min
      </div>
      <div class="description">{{ movieForOverview.overview }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

const defaultMovie = {
  poster_path: "",
  title: "",
  vote_average: "",
  release_date: "",
  runtime: "",
  overview: ""
};

export default {
  name: "Overview",
  computed: {
    ...mapState(["movies"]),
    movieForOverview: function() {
      console.log('A: ', this.$router.params ? this.$router.params.id : '!!!');
      //TypeError: Cannot read property 'id' of undefined
      return this.movies.find((m) => (m.id === this.$router.params.id)) || defaultMovie;
    }
  }
};
</script>

<style scoped lang="scss">
.moviesCard {
  display: flex;

  .poster {
    height: 25em;
    margin-bottom: 2em;
  }

  .info {
    margin-left: 2em;

    .header {
      display: flex;
      padding: 2em 0;

      .title {
        margin-right: 1em;
        font-size: 2.5em;
        color: #fff;
      }

      .raiting {
        border: 2px solid #fff;
        border-radius: 50%;
        padding: 1em;
        color: #a1e66f;
        font-size: 1em;
      }
    }

    .timeline {
      font-size: 1em;

      .dateTime {
        font-size: 1.5em;
        color: #f65262;
      }
    }

    .description {
      margin-top: 2em;
      color: #fff;
    }
  }
}
</style>
