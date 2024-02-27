import { createRouter, createWebHistory } from "vue-router";
import ListofProducts from "../components/ListOfProducts.vue";
import Posts from "../components/Posts.vue";

const routes = [
  {
    path: "/",
    component: ListofProducts,
  },
  {
    path: "/posts",
    component: Posts,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
