<template>
  <div class="w-full h-full relative inline-block hover:bg-accent-500">
    <select
      v-model="selectedLocale"
      @change="updateLocale"
      class="w-full h-full text-center bg-primary-500 hover:bg-accent-500 px-4 py-4 text-xl text-gray-100 appearance-none focus:outline-none leading-tight transition duration-300 ease-in-out cursor-pointer"
    >
      <option v-for="locale in locales" :key="locale.code" :value="locale.code">
        {{ $t(`${locale.name}`) }}
      </option>
    </select>
    <div
      class="pointer-events-none absolute inset-y-0 right-28 lg:right-5 flex items-center justify-center px-4 text-gray-100"
    >
      <svg
        class="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getSupportedLocales } from "./../../i18n/supportedLocales";

export default defineComponent({
  name: "LocaleSwitcher",
  data() {
    return {
      selectedLocale: this.$i18n.locale,
      locales: getSupportedLocales(),
    };
  },
  methods: {
    updateLocale() {
      this.$i18n.locale = this.selectedLocale;
      // Additional logic for changing locale if needed
    },
  },
});
</script>

<style></style>
