import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../public/en/translation.json";
import ru from "../public/ru/translation.json";
import kz from "../public/kz/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      kz: { translation: kz },
    },
    lng: "en", // язык по умолчанию
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
