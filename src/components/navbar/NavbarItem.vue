<template>
  <li class="navbar-item">
    <a :href="link.href" class="text-white hover:text-gray-400">
      {{ link.name }}
    </a>
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

<style scoped>
.navbar-item {
  margin: 0 1rem;
}
</style>
