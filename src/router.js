import Search from "./components/Search.vue";
import Overview from "./components/Overview.vue";

export default [
  { path: "/", component: Search },
  { path: "/overview/:id", name: "overview", props: true, component: Overview }
];
