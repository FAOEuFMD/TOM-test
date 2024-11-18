<template>
  <div class="flex items-center ml-4">
    <img
      :src="logoSrc"
      alt="European Union logo"
      class="w-24 h-auto sm:w-20 md:w-24 lg:w-28"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterLogo",
  props: {
    logoSrc: {
      type: String,
      required: true,
    },
  },
});
</script>
