<template>
  <nav class="bg-primary-800 text-white w-full pt-2">
    <div class="flex items-center">
      <router-link to="/">
        <NavbarLogo :logoSrc="logoSrc" />
      </router-link>
    </div>
    <NavbarMenu
      :links="links"
      menuClass="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-7 bg-secondary-500"
    />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarLogo from "../navbar/NavbarLogo.vue";
import NavbarMenu from "../navbar/NavbarMenu.vue";
import logoSrc from "@/assets/images/EuFMD_logo_white.png";

export default defineComponent({
  name: "Navbar",
  components: {
    NavbarLogo,
    NavbarMenu,
  },

  data() {
    return {
      logoSrc,
      links: [
        { name: "welcome", href: "/" },
        { name: "self_assessment", href: "/self-assessment" },
      ],
    };
  },
});
</script>

<style scoped>
nav {
  width: 100%;
}
</style>
