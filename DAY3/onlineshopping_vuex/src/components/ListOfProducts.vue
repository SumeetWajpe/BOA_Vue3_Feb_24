<template>
    <div class="row">
        <h1>List Of Products</h1>
        <Product v-for="product in products" :details="product" :key="product.id" />
    </div>
</template>
<script setup>
import Product from "./Product.vue"
import { useStore } from "vuex"
import { computed, onMounted, onUpdated } from "vue"
const store = useStore();
const products = computed(() => store.state.products)
const productCount = computed(() => store.getters.totalProductsCount)

onMounted(() => {
    if (products.value.length == 0) {
        store.dispatch("getProductsAsync")
    }
})

onUpdated(() => {
    console.log(productCount.value)
})

</script>