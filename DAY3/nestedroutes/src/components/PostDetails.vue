<template>
    <div>
        <h2>Post Details for {{route.params.id}}</h2>
        <h3>
            Title : {{thePost?.data.title}}
        </h3>
         <h3>
            User Id : {{thePost?.data.userId}}
        </h3>
         <h3>
            Body : {{thePost?.data.body}}
        </h3>
    </div>
</template>
<script setup lang="ts">
import {useRoute} from "vue-router"
import axios from "axios";
import {onMounted, reactive} from "vue";

 const route =  useRoute();
   console.log(route.params.id);

// add strong type here
const thePost = reactive<any>({
    data:{}
});

onMounted(async () => {
    try {
         const {data} =  await axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
        thePost.data = data;
    } catch (error) {
        console.log(error)
    }
});

  
</script>
<style >
    
</style>