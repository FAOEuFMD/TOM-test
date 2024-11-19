import { createI18n } from "vue-i18n";
import bg from "./locales/bg.json";
import en from "./locales/en.json";
import es from "./locales/es.json";
import it from "./locales/it.json";
import ru from "./locales/ru.json";
import srb from "./locales/srb.json";

const messages = {
  bg,
  en,
  es,
  it,
  ru,
  srb,
};

export default createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
});
