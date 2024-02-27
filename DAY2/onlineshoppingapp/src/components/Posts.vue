<template>
    <header>
        <h1>All Posts</h1>
    </header>
    <ul class="list-group">
        <li class="list-group-item" v-for="post in   postsData.posts  " :key="post.id">
            <router-link :to="{ name: 'postdetails', params: { id: post.id } }">{{ post.title }}</router-link>
        </li>
    </ul>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import axios from 'axios'
const postsData = reactive({
    posts: []
});
onMounted(async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
    postsData.posts = data
})
</script>

<style scoped></style>