<template >
    
        <span v-for="star in numberofstars" :key="star">
            <i class="fa-solid fa-star" style="color: orange;"></i>
        </span>
    
</template>
<script setup lang="ts">
import type {RatingProps} from "@/types/types"

    defineProps<RatingProps>()
</script>
<style>
    
</style>