import { createI18n } from 'vue-i18n'
import en from './locals/en.json'
import es from './locals/es.json'

const messages = { en, es }

const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'en',
  messages,
})

export default i18n
