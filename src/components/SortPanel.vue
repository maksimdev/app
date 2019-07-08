<template>
  <div class="SortPanel">
    <span class="result"><slot /> movie found</span>
    <div>
      <span class="sortBy">sort by</span>
      <a
        v-bind:class="[filter === 'releaseDate' ? 'active' : '']"
        class="button left"
        @click="() => toggleFilter('releaseDate')"
        >release date</a
      >
      <a
        v-bind:class="[filter === 'raiting' ? 'active' : '']"
        class="button right"
        @click="() => toggleFilter('raiting')"
        >raiting</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SortPanel",
  data: () => ({
    filter: "releaseDate"
  }),
  methods: {
    toggleFilter(filter) {
      if (filter !== this.filter) {
        this.filter = filter;
        this.$emit("filter", {
          filter: this.filter
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.SortPanel {
  min-width: 565px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background: #6e6e6e;
  color: #f4f4f4;
  text-transform: uppercase;
  padding: 0 5em;
}
.result {
  font-weight: bold;
}
.button {
  cursor: pointer;
  background: #555;
  padding: 0.6em 1.2em;
}
.right {
  border-radius: 0px 5px 5px 0px;
}
.left {
  border-radius: 5px 0px 0px 5px;
}
.active {
  cursor: default;
  background: #ff6f6f;
}
a {
  color: #fff;
}
.sortBy {
  margin-right: 1em;
}
</style>
