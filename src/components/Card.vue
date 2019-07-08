<template>
  <div class="card">
    <img v-bind:src="srcToImg" class="poster" />
    <div>
      <span class="posterName">{{ name }}</span>
      <span class="year">{{ year }}</span>
    </div>
    <span class="genre">{{ genre }}</span>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    name: String,
    genre: String,
    year: String,
    srcToImg: String
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
  .posterName {
  }
  .year {
    padding: 0.2em 1em;
    border: 2px solid #f4f4f4;
    border-radius: 5px 5px 5px 5px;
  }
  .genre {
  }
}
</style>
