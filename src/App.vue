<script setup lang="ts"></script>

<template>
  <div class="app-container">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/navbar/Navbar.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

#app {
  height: 100%;
  width: 100%;
  max-width: none;
  text-align: left;
  margin: 0;
  padding: 0;
}

.app-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
}
</style>
