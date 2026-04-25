import { createApp } from 'vue'

/* mio ñamñam */
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './assets/styles/global.css'

const savedLanguage = localStorage.getItem('userLanguage')
if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
  i18n.global.locale = savedLanguage
}

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
