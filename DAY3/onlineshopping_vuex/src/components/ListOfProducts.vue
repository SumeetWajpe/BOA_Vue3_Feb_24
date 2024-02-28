<template>
    <div class="row">
        <h1>List Of Products</h1>
        <Product v-for="product in products.productList" :details="product" @deleteproduct="handleDeleteProduct"
            :key="product.id" />
    </div>
</template>
<script setup>
import Product from "./Product.vue"
import { reactive } from "vue"
const products = reactive({
    productList: [
    ]
})

function handleDeleteProduct(theid) {
    // dispatch an action
}
</script>