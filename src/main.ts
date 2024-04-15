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
    broadcaster: 'socket.io',
    host: "http://localhost:6001",
    // client: io,
    transports: ['websocket'],
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

// const socket = io('http://localhost:6001');

// // Sử dụng socket ở đây, ví dụ:
// socket.on('connect', () => {
//     console.log('Connected to socket.io server');
// });
app.mount('#app')
