import { createRouter, createWebHistory } from "vue-router";
import ListofProducts from "../components/ListOfProducts.vue";
import Posts from "../components/Posts.vue";
import PostDetails from "../components/PostDetails.vue";
import ProductDetails from "../components/ProductDetails.vue";

const routes = [
  {
    path: "/",
    component: ListofProducts,
  },
  {
    path: "/productdetails/:id",
    name: "productdetails",
    component: ProductDetails,
  },
  {
    path: "/posts",
    component: Posts,
  },
  {
    path: "/postdetails/:id",
    name: "postdetails",
    component: PostDetails,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
