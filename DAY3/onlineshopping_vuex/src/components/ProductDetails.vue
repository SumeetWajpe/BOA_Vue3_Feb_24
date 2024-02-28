<template>
    <div className="row m-2">
        <div className="col-md-9">
            <img width="100%" :src="product?.imageUrl" :alt="product?.title" />
        </div>
        <div className="col-md-3">
            <h1>{{ product?.name }}</h1>
            <Rating :noOfStars="product?.rating || 0" />


            <p>₹.{{ product?.price }}</p>
            <button class="btn btn-primary" @click="incrementLikes">{{ product?.likes }}
                <i class="fa-regular fa-thumbs-up"></i>
            </button>

            <p>{{ product?.description }}</p>
        </div>
    </div>
</template>

<script setup>
import Rating from "./Rating.vue"
import { useRoute } from "vue-router"
import axios from "axios"
import { useStore } from "vuex"
import { computed, onMounted, ref } from "vue"
const store = useStore();
const products = computed(() => store.state.products)
const route = useRoute();
let product = ref();
onMounted(() => {
    const index = products.value.findIndex(p => p.id === +route.params.id);
    product.value = products.value[index];
})
</script>

<style scoped></style>