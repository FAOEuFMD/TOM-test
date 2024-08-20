<template>
  <div class="flex items-center">
    <a class="navbar-item" href="/">
      <img
        :src="logoSrc"
        alt="Logo"
        class="logo w-24 h-auto sm:w-20 md:w-24 lg:w-28"
      />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavbarLogo",
  props: {
    logoSrc: {
      type: String,
      required: true,
    },
  },
});
</script>
