<template>
  <div class="flex items-center ml-4">
    <a href="/" class="block">
      <img
        :src="logoSrc"
        alt="EuFMD logo"
        class="w-24 h-auto sm:w-20 md:w-24 lg:w-28"
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
