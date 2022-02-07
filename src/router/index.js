import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MainPage from "../views/MainPage.vue";
import Detail from "../views/Detail.vue";
import Search from "../views/Search.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/MainPage",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/Detail",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/Search",
    name: "Search",
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
