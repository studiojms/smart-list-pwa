import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';

const options: InitOptions = {
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  debug: true,
  keySeparator: false,
  fallbackLng: 'en',
  ns: ['commom', 'item'],
  defaultNS: 'commom',
  load: 'currentOnly',
  react: {
    wait: true,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default',
  },
  backend: {
    loadPath: './i18n/locales/{{lng}}/{{ns}}.json',
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(XHR)
  .init(options);

export default i18n;
