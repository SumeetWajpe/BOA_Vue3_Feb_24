<template>
    <div>
        <p>Count : {{ count }} </p>
        <button @click="incrementCount">+</button>
        <button @click="incrementCountBy">+2</button>
        <button @click="incrementCountBy5">+5</button>


    </div>
</template>

<script setup>
import { useStore } from "vuex"
import { computed } from "vue"
const store = useStore();
const count = computed(() => store.state.count);
const incrementCount = () => store.dispatch("incrementCount")
const incrementCountBy = () => store.dispatch("incrementCountBy", 2)
const incrementCountBy5 = () => store.dispatch("incrementCountBy", 5)


</script>

<style scoped></style>