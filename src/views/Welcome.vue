<template>
  <div class="universal-container">
    <h1 class="text-2xl font-bold mb-4 text-accent-950 self-start w-full">
      {{ $t("welcome.header") }}
    </h1>
    <p class="text-lg mb-6 text-accent-950 text-justify">
      {{ $t("welcome.description") }}
    </p>
    <div class="relative w-full pt-[56.25%] overflow-hidden">
      <iframe
        class="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/hvK72zj-6sA?autoplay=0&rel=0&showinfo=0&modestbranding=1&controls=1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
