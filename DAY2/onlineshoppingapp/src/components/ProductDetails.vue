<template>
    <div className="row m-2">
        <div className="col-md-9">
            <img width="100%" :src="productData.product?.imageUrl" :alt="productData.product?.title" />
        </div>
        <div className="col-md-3">
            <h1>{{ productData?.product?.name }}</h1>
            <Rating :noOfStars="productData?.product?.rating || 0" />


            <p>₹.{{ productData.product?.price }}</p>
            <button class="btn btn-primary" @click="incrementLikes">{{ productData.product?.likes }}
                <i class="fa-regular fa-thumbs-up"></i>
            </button>

            <p>{{ productData?.product?.description }}</p>
        </div>
    </div>
</template>

<script setup>
import Rating from "./Rating.vue"
import { useRoute } from "vue-router"
import { reactive, onMounted } from "vue"
import axios from "axios"
const route = useRoute()


const productData = reactive({
    product: {}
});

onMounted(async () => {
    const { data } = await axios.get(`http://localhost:3000/products/${route.params.id}`)
    productData.product = data
})
</script>

<style scoped></style>