<template>
  <div class="SortPanel">
    <span class="result">{{ result }} movie found</span>
    <div>
      <span class="sortBy">sort by</span>
      <a class="button left active" @click="onClick">release date</a>
      <a class="button right" @click="onClick">raiting</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SortPanel",
  props: {
    result: String
  },
  methods: {
    onClick() {
      console.log("click!", this);
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
