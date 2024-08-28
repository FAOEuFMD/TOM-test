<template>
  <div
    class="content-container h-full mx-auto max-w-7xl md:max-w-5xl px-4 mt-12 md:mt-16 lg:mt-24 xl:mt-16 pb-4 md:pb-8 lg:pb-12"
  >
    <h1 class="h1">Welcome to TOM</h1>
    <p class="subheader">
      TOM is a training management system that enables countries to oversee the
      individual training and development of their veterinary professionals and
      enhance veterinary capacity. It serves as a competency framework, offering
      recognition to veterinarians, and operates as a web-based tool for
      monitoring training completion within veterinary services.
    </p>
    <div class="iframe-wrapper mt-4 md:mt-8 lg:mt-6">
      <iframe
        class="iframe"
        src="https://www.youtube.com/embed/hvK72zj-6sA?autoplay=0&rel=0&showinfo=0&modestbranding=1&controls=1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-y: scroll; /* Enable scrolling */
  scrollbar-width: none; /* For Firefox */
}

.iframe-wrapper {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
}

.iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
