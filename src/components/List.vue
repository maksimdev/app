<template>
  <ul class="list">
    <li v-for="item in items" v-bind:key="item.id">
      <Card
        :name="item.title"
        :genres="item.genres"
        :year="item.release_date"
        :srcToImg="item.poster_path"
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
  props: {
    items: Array
  }
};
</script>

<style scoped lang="scss">
.list {
  min-height: 400px;
  margin: 0;
  background: #515151;
}
li {
  display: inline-block;
}
</style>
