<template>
    <div class="col-sm-6 col-md-3 g-2">
        <div class="card">

            <router-link :to="{ name: 'productdetails', params: { id: details.id } }">
                <img height="200px" width="300px" class="card-img-top" :src="details.imageUrl" :alt="details.name">
            </router-link>
            <div class="card-body">
                <Rating :noOfStars="details.rating" />
                <h5 class="card-title">{{ details.name }}</h5>
                <p class="card-text">₹.{{ details.price }}</p>
                <p v-if="details.quantity == 0" :class="[{ 'text-danger': details.quantity == 0 }, 'card-text']">
                    Out of Stock
                </p>
                <p v-else :class="{ 'text-success': details.quantity !== 0 }">
                    Available
                </p>
                <button class="btn btn-primary" @click="incrementLikesHandler">{{ details.likes }}
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
import { useStore } from "vuex"
import { computed } from "vue"
const store = useStore();

const incrementLikes = (id) => store.dispatch("incrementLikes", id)

const props = defineProps({
    details: {
        type: Object,
        required: true
    },

})

function incrementLikesHandler() {
    incrementLikes(props.details.id)
}

function deleteProduct() {

}


</script>
<style scoped>
.product-card {
    border: 2px solid gray;
    border-radius: 5px;

}
</style>