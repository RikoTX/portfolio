import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../public/config/en/translation.json";
import ru from "../public/config/ru/translation.json";
import kz from "../public/config/kz/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      kz: { translation: kz },
    },
    lng: "en", 
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
