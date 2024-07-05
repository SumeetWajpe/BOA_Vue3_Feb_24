<template>
    <div>

        <input type="text" v-model="user.username"> <br>
        <input type="text" v-model="user.password">


        <!-- <router-link to="/dashboard" class="btn btn-primary">
            Login
        </router-link> -->

        <button class="btn btn-primary" @click="() => Login()">
            Login
        </button>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { reactive } from "vue"
const user = reactive({ username: "", password: "" });
const router = useRouter();
function Login() {

    if (user.username == "sumeet") {
        router.push("/dashboard")
    }

}
</script>
<style></style>