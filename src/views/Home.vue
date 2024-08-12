<template>
  <div class="home">
    <h1>Welcome to the Home Page</h1>
    <p>
      This is a simple example of a Vue 3 component with TypeScript and the
      Composition API.
    </p>
    <button @click="incrementCounter">Click me! ({{ counter }})</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Define a reactive counter variable
const counter = ref(0);

// Define a method to increment the counter
const incrementCounter = () => {
  counter.value++;
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

h1 {
  color: #42b983;
}

button {
  font-size: 1.2em;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
