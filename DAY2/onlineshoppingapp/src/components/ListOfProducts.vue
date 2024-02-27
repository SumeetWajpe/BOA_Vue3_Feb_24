<template>
    <div class="row">
        <Product v-for="product in products.productList" :details="product" @deleteproduct="handleDeleteProduct" />
    </div>
</template>
<script setup>
import Product from "./Product.vue"
import { reactive } from "vue"
const products = reactive({
    productList: [
        { id: 1, name: "MacBook Pro", quantity: 10, price: 300000, rating: 5, likes: 300, imageUrl: "https://www.zdnet.com/a/img/2023/11/06/ff2ab50d-93b8-4954-96e5-7176557f03b5/dsc02399-enhanced-nr.jpg" },
        { id: 2, name: "MacBook Air", quantity: 100, price: 200000, rating: 3, likes: 200, imageUrl: "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-100982979/100982979.jpg" },
        { id: 3, name: "iPhone", quantity: 0, price: 100000, rating: 4, likes: 100, imageUrl: "https://images.macrumors.com/t/ui4nZwmG_LjE6Sx-trb4zTIlK9M=/1600x900/smart/article-new/2023/09/iPhone-15-General-Feature-Black.jpg" },
        { id: 4, name: "Apple Watch", quantity: 30, price: 30000, rating: 4, likes: 500, imageUrl: "https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-hero-230912_Full-Bleed-Image.jpg.large.jpg" },
        { id: 5, name: "iPod", quantity: 50, price: 3000, rating: 5, likes: 300, imageUrl: "https://www.cnet.com/a/img/resize/c4dcbc39b278e6cd33e947dc50181b2c7ae2af91/hub/2016/05/10/2c982d4c-9aab-4e9b-a0ba-514c12c338ba/apple-ipod-shuffle-5614-007.jpg?auto=webp&fit=crop&height=675&width=1200" },
    ]
})

function handleDeleteProduct(theid) {
    console.log("Within handleDeleteProduct !", theid)
    products.productList = products.productList.filter(p => p.id !== theid)
}
</script>