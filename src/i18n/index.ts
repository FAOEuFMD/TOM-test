import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import es from "./locales/es.json";
import it from "./locales/it.json";
import ru from "./locales/ru.json";
import sr from "./locales/sr.json";

const messages = {
  en,
  es,
  it,
  ru,
  sr,
};

export default createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
});
