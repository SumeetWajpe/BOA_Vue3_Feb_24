<script setup>
import Product from "./components/Product.vue"

const productList = [
  { name: "MacBook Pro", price: 300000, imageUrl: "https://www.zdnet.com/a/img/2023/11/06/ff2ab50d-93b8-4954-96e5-7176557f03b5/dsc02399-enhanced-nr.jpg" },
  { name: "MacBook Air", price: 200000, imageUrl: "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-100982979/100982979.jpg" },
  { name: "iPhone", price: 100000, imageUrl: "https://images.macrumors.com/t/ui4nZwmG_LjE6Sx-trb4zTIlK9M=/1600x900/smart/article-new/2023/09/iPhone-15-General-Feature-Black.jpg" },
  { name: "Apple Watch", price: 30000, imageUrl: "https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-hero-230912_Full-Bleed-Image.jpg.large.jpg" },
  { name: "iPod", price: 3000, imageUrl: "https://www.cnet.com/a/img/resize/c4dcbc39b278e6cd33e947dc50181b2c7ae2af91/hub/2016/05/10/2c982d4c-9aab-4e9b-a0ba-514c12c338ba/apple-ipod-shuffle-5614-007.jpg?auto=webp&fit=crop&height=675&width=1200" },
]

</script>

<template>
  <div v-for="product in productList">
    <Product :details="product" />
  </div>


  <!-- <Product /> -->
</template>

<style scoped></style>
