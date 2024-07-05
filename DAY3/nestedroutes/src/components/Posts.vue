<template >
    <div>
        
        <header>
            <h1>All Posts</h1>
        </header>
        <main>
            <ul class="list-group">
                <li v-for="post in posts.list" class="list-group-item">
                   <router-link :to="`/postdetails/${post.id}`">
                     {{post.title}}
                   </router-link>
                </li>
            </ul>

        </main>
    </div>
</template>
<script setup lang="ts">
import axios from "axios";
import {onMounted, reactive} from "vue";

// add strong type here
const posts = reactive<any>({
    list:[],error:""
});

onMounted(async () => {
    try {
         const {data} =  await axios.get("https://jsonplaceholder.typicode.com/posts");
        posts.list = data;
    } catch (error:any) {
        posts.error = error?.message
    }
});

</script>
<style>
    
</style>