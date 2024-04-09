import Pusher from 'pusher-js'
export default (app, { apiKey, ...options }) => {
    // const Pusher = require('pusher-js')
    app.config.globalProperties.$pusher = new Pusher(apiKey, options)
  }