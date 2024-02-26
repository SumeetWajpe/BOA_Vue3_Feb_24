<template>
    <h2>{{ name }}</h2>
    <h4>{{ price }}</h4>
</template>
<script setup>
defineProps({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})


</script>
<style></style>