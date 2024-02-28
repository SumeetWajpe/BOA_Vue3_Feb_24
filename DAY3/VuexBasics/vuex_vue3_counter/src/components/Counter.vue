<template>
    <div>
        <p>Count : {{ count }} </p>
        <button @click="incrementCount">+</button>
    </div>
</template>

<script setup>
import { useStore } from "vuex"
import { computed } from "vue"
const store = useStore();
const count = computed(() => store.state.count);
const incrementCount = () => store.dispatch("incrementCount")
</script>

<style scoped></style>