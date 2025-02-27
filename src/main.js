import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './route'

import 'primeicons/primeicons.css'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'




const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
createApp(App).use(pinia).use(router).mount('#app')
