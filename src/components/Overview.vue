<template>
  <div class="moviesCard">
    <img v-bind:src="movie.poster_path" class="poster" />
    <div class="info">
      <div class="header">
        <span class="title">{{ movie.title }}</span>
        <div class="raiting">{{ movie.vote_average }}</div>
      </div>
      <div class="timeline">
        <span class="dateTime">{{ movie.release_date }} </span> year
        <span class="dateTime">{{ movie.runtime }} </span> min
      </div>
      <div class="description">{{ movie.overview }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overview",
  props: {
    movie: Object
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
