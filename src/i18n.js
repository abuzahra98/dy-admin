// src/i18n.js
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

const app = createApp();
app.use(createI18n({
  locale: 'en',
  messages: {
    en: {
      message: {
        hello: 'Hello, World!',
      },
    },
    fr: {
      message: {
        hello: 'Bonjour le monde!',
      },
    },
  },
}));

export default app;
