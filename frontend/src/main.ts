import { createApp } from "vue";
import "./assets/styles/global.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import i18n from "./i18n";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(i18n);

if (!import.meta.env.VITE_API_URL) {
  throw new Error("VITE_API_URL is not defined in the environment variables.");
}

app.mount("#app");
