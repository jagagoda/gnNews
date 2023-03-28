import * as i18n from "i18next";
import { initReactI18next } from "react-i18next";

import polish from "./polish.json";
import english from "./english.json";

const i18nInstance = i18n.createInstance();

i18nInstance
  .use(initReactI18next)
  .init({
    resources: {
      us: english,
      pl: polish,
    },
    lng: "us",
    fallbackLng: "us",
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
