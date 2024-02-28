<script setup>
defineProps({
  msg: {
    type: String,
    required: false
  }
})

const text = ref('')
</script>

<template>
  <div class="greetings">
    <!-- <h2 class="green">{{ msg }}</h2> -->
    <h2 class="green">Hello World !</h2>
    <label for="txtMsg">
      Message :
    </label>
    <input type="text" v-model="text">

  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
