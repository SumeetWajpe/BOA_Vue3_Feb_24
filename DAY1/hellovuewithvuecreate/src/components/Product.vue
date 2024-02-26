<template>
    <h2>{{ details.name }}</h2>
    <h4>{{ details.price }}</h4>
</template>
<script setup>
defineProps({
    details: {
        type: Object,
        required: true
    },

})


</script>
<style></style>