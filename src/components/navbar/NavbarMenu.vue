<template>
  <ul :class="['list-none p-0 m-0', menuClass]">
    <li v-for="link in links" :key="link.name">
      <a :href="link.href" class="hover:text-sage-300">{{ link.name }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Link {
  name: string;
  href: string;
}

export default defineComponent({
  name: "NavbarMenu",
  props: {
    links: {
      type: Array as PropType<Link[]>,
      required: true,
    },
    menuClass: {
      type: String,
      default: "",
    },
  },
});
</script>
