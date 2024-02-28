<template>
    <div>
        <p>Count : {{ count }} </p>
        <button>+</button>
    </div>
</template>

<script setup>
import { useStore } from "vuex"
import { computed } from "vue"
const store = useStore();
const count = store.state.count;
</script>

<style scoped></style>