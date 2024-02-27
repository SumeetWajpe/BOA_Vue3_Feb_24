<template>
    <header>
        <h1>Post Details</h1>
    </header>
</template>

<script setup>
import { useRoute } from "vue-router"

const route = useRoute()
console.log(route.params.id)
</script>

<style scoped></style>