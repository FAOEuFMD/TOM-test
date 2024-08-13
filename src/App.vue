<script setup lang="ts"></script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
// Any app-level setup code goes here
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  background-color: #f5f5f5;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
}

body {
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  overflow: hidden;
}
</style>
