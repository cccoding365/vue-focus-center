import { createApp } from 'vue'
import { createPinia } from 'pinia'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

import App from './App.vue'
import router from './router'

import './assets/main.css'

import SvgIcon from './components/SvgIcon'

const app = createApp(App)

app.component('svg-icon', SvgIcon)

app.use(pinia)
app.use(router)

app.mount('#app')
