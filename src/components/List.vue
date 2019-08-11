<template>
  <div>
    <span v-if="countOfItmes">No films found</span>
    <ul v-else class="list">
      <li v-for="item in items" v-bind:key="item.id">
        <Card v-bind:movie="item" />
      </li>
    </ul>
  </div>
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
  },
  computed: {
    countOfItmes: function() {
      return !this.items.length;
    }
  }
};
</script>

<style scoped lang="scss">
div {
  display: flex;
  min-height: 400px;
  background: #515151;
}
span {
  color: #fff;
  font-size: 2em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.list {
  margin: 0;
}
li {
  display: inline-block;
}
</style>
