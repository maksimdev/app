<template>
  <div class="header">
    <div class="title">
      <b>NETFLIX</b>ROULETTE
      <router-link class="closeButton" to="/">Search</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    isSearchPage: function() {
      return true; //display the button SEARCH when the card is viewing!!!
    },
  }
};
</script>

<style scoped lang="scss">
.header {
  background: #535353;
  padding: 0 5.3em;
  min-width: 560px;
  padding-top: 2em;

  .title {
    font-size: 1.2em;
    color: #ff3434;
    margin-bottom: 50px;
    cursor: default;

    .closeButton {
      float: right;
    }
  }
}
</style>
