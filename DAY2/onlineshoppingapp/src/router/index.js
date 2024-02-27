import { createRouter, createWebHistory } from "vue-router";
import ListofProducts from "../components/ListOfProducts.vue";
import HelloWorld from "../components/HelloWorld.vue";

const routes = [
  {
    path: "/",
    component: ListofProducts,
  },
  {
    path: "/hello",
    component: HelloWorld,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
