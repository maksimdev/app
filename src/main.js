import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";
import Routes from "./router";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
