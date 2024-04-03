import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index'
// import axios from './axios';

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(axios, {
//     baseURL: 'https://localhost:80/',
// })

app.mount('#app')
