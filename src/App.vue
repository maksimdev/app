<template>
  <div id="app">
    <Header />
    <SortPanel result="7" />
    <List />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SortPanel from "./components/SortPanel.vue";
import List from "./components/List.vue";

export default {
  name: "app",
  components: {
    Header,
    SortPanel,
    List
  }
};
</script>

<style lang="scss">
#app {
  font-family: Geneva, Arial, Helvetica, sans-serif;
}
</style>
