// @ts-nocheck
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import polish from "./polish.json";
import english from "./english.json";

const i18nInstance = i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: english,
      pl: polish,
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    react: {
      bindI18n: "added loaded languageChanged",
      bindI18nStore: "added",
      useSuspense: false,
    }
  });

export default i18nInstance;
