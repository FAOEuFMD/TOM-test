<template>
  <footer class="w-full bg-primary-800 text-white py-4">
    <div class="p-8">
      <FooterLogo :logoSrc="logoSrc" />
      <div class="flex justify-between items-center mt-6">
        <div class="space-y-3">
          <p>
            European Commission for the Control of Foot-and-Mouth Disease
            <br />
            MOVE FAST strategy. Foot-and-mouth And Similar Transboundary animal
            diseases
          </p>
          <p>www.fao.eufmd.org</p>
          <p>© {{ currentYear }} | EuFMD</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterLogo from "./FooterLogo.vue";
import logoSrc from "@/assets/images/funded_by_eu.png";
export default {
  name: "Footer",
  components: {
    FooterLogo,
  },
  data() {
    return {
      logoSrc,
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
/* Remove existing styles as Tailwind will handle styling */
</style>
