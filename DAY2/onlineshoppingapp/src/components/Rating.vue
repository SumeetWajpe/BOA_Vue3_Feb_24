<template>
    <span v-for="star in noOfStars" style="color: orange;">
        <i class="fa-solid fa-star"></i>
    </span>
</template>

<script setup>
defineProps({
    noOfStars: {
        type: Number,
        required: true
    }
})
</script>