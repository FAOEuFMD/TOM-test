<template>
  <li class="mx-4">
    <router-link :to="link.href" class="text-white hover:text-secondary-400">
      {{ link.name }}
    </router-link>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavbarItem",
  props: {
    link: {
      type: Object as () => { name: string; href: string },
      required: true,
    },
  },
});
</script>

<style scoped></style>
