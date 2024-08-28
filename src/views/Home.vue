<template>
  <div class="home">
    <h1 class="h1 text-primary-600">Welcome to TOM</h1>
    <p class="subheader">
      A training management system for veterinary professionals by the EuFMD
    </p>
    <iframe
      class="iframe"
      src="https://www.youtube.com/embed/hvK72zj-6sA?autoplay=0&rel=0&showinfo=0&modestbranding=1&controls=1"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.iframe {
  width: 560px;
  height: 315px;
  margin-top: 20px;
}
</style>
