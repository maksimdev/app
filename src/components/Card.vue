<template>
  <router-link
    class="card"
    :to="{ path: `/overview/${movie.id}`, params: { id: movie.id } }"
  >
    <img v-bind:src="movie.poster_path" class="poster" />
    <div>
      <span class="posterName">{{ movie.title }}</span>
      <span class="year">{{ movie.release_date }}</span>
    </div>
    <span class="genre">{{ allGenres }}</span>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: {
    movie: Object
  },
  computed: {
    allGenres: function() {
      return this.movie.genres.join(", ");
    }
  }
};
</script>

<style scoped lang="scss">
.card {
  display: flex;
  width: 20em;
  flex-direction: column;
  background: #515151;
  color: #f4f4f4;
  padding: 1em;
  text-decoration: none;
  &:hover {
    background: #515170;
  }

  div {
    display: flex;
    justify-content: space-between;
  }
  .poster {
    height: 25em;
    margin-bottom: 2em;
  }
  .year {
    height: 1em;
    white-space: nowrap;
    padding: 0.1em 0.5em;
    border: 2px solid #f4f4f4;
    border-radius: 5px 5px 5px 5px;
  }
  .genre {
    margin-top: 0.5em;
  }
}
</style>
