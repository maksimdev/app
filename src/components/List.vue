<template>
  <ul class="list">
    <li v-for="item in items" v-bind:key="item.id">
      <Card
        :name="item.name"
        :genre="item.genre"
        :year="item.year"
        :srcToImg="item.srcToImg"
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
