import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from './plugins/axios'
import App from './App.vue'
import router from './router'
import { piniaReset } from '@/plugins/piniaPlugin'
import { i18nInstance, loadLocale } from '@/plugins/i18n'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaReset)

app.use(pinia)
app.use(router)
app.use(axios)
loadLocale('zh-tw')
app.use(i18nInstance)

app.mount('#app')
