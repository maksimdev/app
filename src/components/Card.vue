<template>
  <div class="card">
    <img v-bind:src="srcToImg" class="poster" />
    <div>
      <span class="posterName">{{ name }}</span>
      <span class="year">{{ year }}</span>
    </div>
    <span class="genre">{{ allGenres }}</span>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    name: String,
    genres: Array,
    year: String,
    srcToImg: String
  },
  computed: {
    allGenres: function() {
      return this.genres.join(', ');
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

  div {
    display: flex;
    justify-content: space-between;
  }
  .poster {
    width: 100%;
    height: 25em;
    margin-bottom: 2em;
  }
  .posterName {}
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
