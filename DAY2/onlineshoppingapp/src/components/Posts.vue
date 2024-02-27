<template>
    <header>
        <h1>All Posts</h1>
    </header>
</template>

<script setup>
import { onMounted } from 'vue'
import axios from 'axios'
onMounted(async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(data)
})
</script>

<style scoped></style>