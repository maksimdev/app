<template>
  <div id="app">
    <Header />
    <SortPanel result="7" />
    <Card name="Villi Vodka and an alcohol factory" genre="Action" year="2009" srcToImg="https://images-na.ssl-images-amazon.com/images/I/41dBu4DkbVL.jpg" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SortPanel from "./components/SortPanel.vue";
import Card from "./components/Card.vue";

export default {
  name: "app",
  components: {
    Header,
    SortPanel,
    Card
  }
};
</script>

<style lang="scss">
#app {
  font-family: Geneva, Arial, Helvetica, sans-serif;
}
</style>
