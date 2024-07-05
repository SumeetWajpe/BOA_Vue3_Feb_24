<template>
    <div class="row">
        <Course v-for="course in courses.courselist" :coursedetails="course"
            @deletecourse="(theCourseId: number) => DeleteCourseHandler(theCourseId)" :key="course.id" />
    </div>
</template>
<script setup lang="ts">
import Course from "@/components/Course.vue";
import type { CourseModel } from '@/types/types';
import axios from "axios";
import { onMounted, reactive } from "vue";
type CourseType = {
    courselist: CourseModel[]
}

const courses = reactive<CourseType>({
    courselist: []
});

onMounted(async () => {
    try {
        const { data } = await axios.get("http://localhost:3500/courses");
        courses.courselist = data;
    } catch (error) {
        console.log(error)
    }
});






function DeleteCourseHandler(theCourseId: number) {
    // console.log("Deleting..",theCourseId)
    courses.courselist = courses.courselist.filter((course: CourseModel) => course.id !== theCourseId)
}


</script>
<style></style>