<script setup>
import NavBar from "./components/NavBar.vue"
</script>

<template>
  <div>
    <!-- <a href="/">Home</a> |
    <a href="/hello">Hello World</a> -->

    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/hello">Hello World</router-link> -->

    <NavBar />

  </div>
  <!-- One one default router, multiple named routerview -->
  <router-view></router-view>
</template>

<style scoped></style>
