<template>
    <div class="col-sm-6 col-md-3 g-2">
        <div class="card">
            <img height="200px" width="300px" class="card-img-top" :src="details.imageUrl" :alt="details.name">
            <div class="card-body">
                <Rating :noOfStars="details.rating" />
                <h5 class="card-title">{{ details.name }}</h5>
                <p class="card-text">₹.{{ details.price }}</p>
                <!-- <button class="btn btn-primary" @click="incrementLikes">{{ details.likes }}
                    <i class="fa-regular fa-thumbs-up"></i>
                </button> -->
                <button class="btn btn-primary" @click="incrementLikes">{{ count }}
                    <i class="fa-regular fa-thumbs-up"></i>
                </button>
                <button class="btn btn-danger mx-1" @click="deleteProduct">
                    <i class="fa-solid fa-trash"></i>
                </button>

            </div>
        </div>
    </div>
</template>
<script setup>
import Rating from "./Rating.vue"
import { ref } from 'vue'

const props = defineProps({
    details: {
        type: Object,
        required: true
    },

})

const emit = defineEmits(["deleteproduct"])
const count = ref(props.details.likes);

function incrementLikes() {
    console.log("Within incrementLikes !")
    // props.details.likes += 1
    // console.log(props.details.likes)
    count.value += 1
}

function deleteProduct() {
    emit('deleteproduct')
}


</script>
<style scoped>
.product-card {
    border: 2px solid gray;
    border-radius: 5px;

}
</style>