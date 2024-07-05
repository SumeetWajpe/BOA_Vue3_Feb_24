<template >
    <div class="col-md-3">
    <div class="card" width="250px" height="200px" >
       <router-link :to="{ name: 'coursedetails', params: { id: coursedetails.id } }">
  <img :src="coursedetails.imageUrl" class="card-img-top" :alt="coursedetails.title">
       </router-link>
  <div class="card-body">
    <h5 class="card-title">{{coursedetails.title}}</h5>
    <p class="card-text">₹.{{coursedetails.price}}</p>
    <p class="card-text"> 
      <Rating :numberofstars="coursedetails.rating"/>  
    </p>
    <button class="btn btn-primary" @click="()=>IncrementLikes()">
        {{currLikes}} <i class="fa-solid fa-thumbs-up"></i>
    </button>
    <button class="btn btn-danger mx-1" @click="()=>DeleteProduct()">
      <i class="fa-solid fa-trash"></i>
    </button>
    
  </div>
</div>
    </div>
</template>
<script setup lang="ts">
import Rating from "@/components/Rating.vue";
import type { CourseProps } from '@/types/types';
import { ref } from 'vue'


const props = defineProps<CourseProps>()
let currLikes = ref<number>(props.coursedetails.likes);

const emit = defineEmits(['deletecourse'])

function IncrementLikes(){
     currLikes.value++;
}

function DeleteProduct(){
  // emit the deleteproduct event
  emit('deletecourse',props.coursedetails.id)
}

</script>
<style>
    
</style>