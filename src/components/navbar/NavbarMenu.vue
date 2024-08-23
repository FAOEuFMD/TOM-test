<template>
  <ul :class="['list-none p-0 m-0', menuClass]">
    <li
      v-for="link in links"
      :key="link.name"
      class="col-span-1 flex items-center justify-center p-4 shadow-sm hover:bg-accent-500 focus:outline-none transition duration-300 ease-in-out"
    >
      <router-link
        :to="link.href"
        class="text-xl text-gray-100 hover:text-gray-50"
        >{{ $t(`navbar_links.${link.name}`) }}</router-link
      >
    </li>
    <li class="hidden lg:block lg:col-span-1 xl:col-span-3"></li>
    <li
      class="col-span-1 flex items-center justify-center p-4 shadow-sm hover:bg-accent-500 focus:outline-none transition duration-300 ease-in-out"
    >
      <router-link to="/login" class="text-xl text-gray-100 hover:text-gray-50">
        {{ $t("navbar_links.login_register") }}
      </router-link>
    </li>
    <li>
      <LocaleSwitcher></LocaleSwitcher>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import LocaleSwitcher from "./LocaleSwitcher.vue";

interface Link {
  name: string;
  href: string;
}

export default defineComponent({
  name: "NavbarMenu",
  components: {
    LocaleSwitcher,
  },
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
