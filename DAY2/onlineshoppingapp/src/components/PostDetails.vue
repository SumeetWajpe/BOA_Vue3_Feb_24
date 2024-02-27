<template>
    <header>
        <h1>Post Details for {{ postData?.post?.id }}</h1>
    </header>
    <main class="border border-2 p-2">
        <p>User Id : {{ postData?.post?.userId }} </p>
        <p>Title : {{ postData?.post?.title }} </p>
        <p>Body : {{ postData?.post?.body }} </p>

    </main>
</template>

<script setup>
import { useRoute } from "vue-router"
import { reactive, onMounted } from "vue"
import axios from "axios"

const route = useRoute()
const postData = reactive({
    post: {}
});

onMounted(async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    postData.post = data
})
</script>

<style scoped></style>