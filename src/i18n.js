import { createI18n } from "vue-i18n";
import en from "./locales/en";

const messages = {
  en: en,
  zh: {
    auth: {
      login: "こんにちは、世界",
    },
  },
};

// 2. Create i18n instance with options
const i18n = createI18n({
  locale: "en", // set locale
  fallbackLocale: "zh", // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
});

export default i18n;
