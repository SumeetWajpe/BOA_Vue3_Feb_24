<template>
    <div class="product-card">
        <img height="200px" width="350px" :src="details.imageUrl" alt="">
        <h2>{{ details.name }}</h2>
        <h4>{{ details.price }}</h4>
    </div>
</template>
<script setup>
defineProps({
    details: {
        type: Object,
        required: true
    },

})


</script>
<style scoped>
.product-card {
    border: 2px solid gray;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;
}
</style>