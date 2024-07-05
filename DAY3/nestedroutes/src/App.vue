<script setup lang="ts">
import Navbar from "@/components/Navbar.vue"
</script>

<template>
  <div class="container">
    <!-- <a href="/"> Home </a> | <a href="/posts">Posts</a> -->
    <!-- <router-link to="/"> Courses </router-link> |
    <router-link to="/posts"> Posts </router-link> -->
    <Navbar />
      <router-view></router-view>
    
  </div>
</template>

<style scoped></style>
