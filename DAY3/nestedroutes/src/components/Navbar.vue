<template>
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Online Training</router-link> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active"  to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/posts">Posts</router-link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
</template>
<script setup lang="ts">

</script>
<style>
    
</style>