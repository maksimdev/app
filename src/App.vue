<template>
  <div id="app">
    <Header msg="MESSAGE!"/>
    <SortPanel result="7" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SortPanel from "./components/SortPanel.vue";

export default {
  name: "app",
  components: {
    Header,
    SortPanel
  }
};
</script>

<style lang="scss">
#app {
  font-family: Geneva, Arial, Helvetica, sans-serif;
}
</style>
