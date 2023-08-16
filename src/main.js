import './assets/main.css'
import 'vant/lib/index.css'

import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import vant from 'vant'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vant)

app.mount('#app')
