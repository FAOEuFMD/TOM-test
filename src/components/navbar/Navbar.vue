<template>
  <nav class="bg-sage-800 text-white w-full py-4 px-4 sm:px-6">
    <div class="container mx-auto flex items-center justify-between">
      <NavbarLogo :logoSrc="logoSrc" />
      <NavbarMenu :links="links" menuClass="flex space-x-4" />
    </div>
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
        { name: "Welcome", href: "/" },
        { name: "Self-assessment", href: "/self-assessment" },
        { name: "Login", href: "/login" },
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
