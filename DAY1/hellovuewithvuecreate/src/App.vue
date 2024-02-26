<script setup>
import Product from "./components/Product.vue"

const productList = [
  { name: "MacBook Pro", price: 300000 },
  { name: "MacBook Air", price: 200000 },

]

</script>

<template>
  <header>
    <div>
      <div v-for="product in productList">
        <Product :details="product" />
      </div>


      <!-- <Product /> -->


    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
