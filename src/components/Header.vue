<template>
  <div class="header">
    <h1>find your movie</h1>
    <div class="searchPanel">
      <input v-model="message" placeholder="Quentin Tarantino">
      <a class="searchButton" @click="search">search</a>
    </div>
    <div>
      <span class="searchBy">search by</span>
      <a class="button left active" @click="onClick">title</a>
      <a class="button right" @click="onClick">gengre</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    message: ''
  }),
  methods: {
    search() {
      console.log('click search!', this);
    },
    onClick() {
      console.log('click!', this);
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  padding: 0 5.3em;
  min-width: 560px;
  text-transform: uppercase;
  margin-bottom: 1em;
}
h1 {
}
.searchButton {
  font-size: 1.2em;
  cursor: pointer;
  background: #555;
  padding: 1.0em 0em;
  width: 18%;
  text-align: center;
  background: #ff6f6f;
  border-radius: 5px;
  color: #fff;
}
input {
  box-sizing: border-box;
  font-size: 2em;
  color: #fff;
  background: #6e6e6e;
  transparent: 0.1;
  width: 80%;
  border:none;
  border-radius: 5px;
  padding: 0 0.6em;
}
.searchPanel {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.5em;
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
.searchBy {
  margin-right: 1em;
}
</style>
