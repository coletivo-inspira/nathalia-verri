import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importe os arquivos de tradução diretamente
import translationEN from './locales/en/translation.ts';
import translationPT from './locales/pt/translation.ts';

// Os recursos de tradução
const resources = {
  en: {
    translation: translationEN,
  },
  pt: {
    translation: translationPT,
  },
};

i18n
  .use(LanguageDetector) // Detecta o idioma do usuário
  .use(initReactI18next) // Passa a instância do i18n para o react-i18next
  .init({
    resources,
    supportedLngs: ['pt', 'en'],
    fallbackLng: 'pt', // Idioma padrão caso o do navegador não seja suportado
    debug: process.env.NODE_ENV === 'development',

    interpolation: {
      escapeValue: false, // React já protege contra XSS
    },
  });

export default i18n;