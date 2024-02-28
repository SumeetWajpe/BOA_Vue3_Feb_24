<template>
    <div>
        <h1>Async Component Example !</h1>
        <Suspense>
            <template #default>
                <DynamicComponent />
            </template>
            <template #fallback>
                <img src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif" alt="">
            </template>
        </Suspense>
    </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue"

const DynamicComponent = defineAsyncComponent(() => import("./HelloWorld.vue"))
</script>

<style scoped></style>