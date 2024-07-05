<template>
    <div className="row m-2">
        <div className="col-md-9">
            <img width="100%" :src="courseData?.course?.imageUrl" :alt="courseData?.course?.title" />
        </div>
        <div className="col-md-3">
            <h1>{{ courseData?.course?.title }}</h1>
            <Rating :numberofstars="courseData?.course?.rating || 0" />


            <p>₹.{{ courseData?.course?.price }}</p>
            <button class="btn btn-primary">
              {{ courseData?.course?.likes }}  <i class="fa-regular fa-thumbs-up"></i>
            </button>

            <p>{{ courseData?.course?.description }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router"
import { reactive, onMounted } from "vue";
import Rating from "@/components/Rating.vue";

import axios from "axios"
const route = useRoute()


const courseData = reactive({
    course: {id:0,title:"",price:0,likes:0,rating:0,imageUrl:"",description:""}
});

onMounted(async () => {
    const { data } = await axios.get(`http://localhost:3500/courses/${route.params.id}`)
    courseData.course = data
})
</script>
<style>
    
</style>