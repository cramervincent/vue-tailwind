import { createApp } from 'vue'

import '/src/assets/style/style.scss'
import App from './App.vue'
import router from './router/routes'


createApp(App)
.use(router)
.mount('#app')
