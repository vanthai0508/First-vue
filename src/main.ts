// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import PusherPlugin from './plugins/pusher.js'
import Pusher from 'pusher-js';
import Echo from 'laravel-echo';

import App from './App.vue'
import router from './router/index'
import { getAccessToken } from "./utils/authenticate.js";

const app = createApp(App)

app.use(createPinia())
app.use(router)

declare global {
    interface Window {
        Pusher:any;
        Echo:any;
    }
}

window.Pusher = Pusher;

window.Echo = new Echo({
    authEndpoint : import.meta.env.VITE_AUTH_ENDPOINT,
    broadcaster: import.meta.env.VITE_BROAD_CASTER,
    key: import.meta.env.VITE_KEY,
    cluster: import.meta.env.VITE_CLUSTER,
    forceTLS: true,
    auth: {
        headers: {
            Authorization: 'Bearer ' + getAccessToken(),
        },
    },
});

app.mount('#app')
