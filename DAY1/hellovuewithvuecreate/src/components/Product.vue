<template>
    <div class="col-sm-6 col-md-3 g-2">
        <div class="card">
            <img height="200px" width="300px" class="card-img-top" :src="details.imageUrl" :alt="details.name">
            <div class="card-body">
                <h5 class="card-title">{{ details.name }}</h5>
                <p class="card-text">₹.{{ details.price }}</p>
                <p class="card-text">{{ details.rating }}</p>
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>

            </div>
        </div>
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