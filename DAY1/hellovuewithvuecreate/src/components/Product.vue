<template>
    <div class="col-sm-6 col-md-4 g-2">
        <img height="200px" width="300px" :src="details.imageUrl" alt="">
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

}
</style>