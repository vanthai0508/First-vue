// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Pusher from 'pusher-js';
import Echo from 'laravel-echo';
import io from 'socket.io-client';
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
        io:any;
    }
}

window.Pusher = Pusher;

window.io = io
window.Echo = new Echo({
    broadcaster: import.meta.env.VITE_BROAD_CASTER,
    host: import.meta.env.VITE_HOST,
    auth: {
        headers: {
            Authorization: 'Bearer ' + getAccessToken(),
        },
    },

    // Pusher
    // authEndpoint : import.meta.env.VITE_AUTH_ENDPOINT,
    // key: import.meta.env.VITE_KEY,
    // cluster: import.meta.env.VITE_CLUSTER,
    // forceTLS: true,
    
});

app.mount('#app')
