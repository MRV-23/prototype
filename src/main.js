import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'

import '@fortawesome/fontawesome-free/js/all'

createApp(App).use(store).use(router).mount('#app')
