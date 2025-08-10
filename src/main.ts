import { createApp } from 'vue'

import App from '@/App.vue'

import 'virtual:svg-icons-register';
import 'uno.css'
import '@/styles/base.scss'
import { setupPlugins } from '@/plugins'

const app = createApp(App)

setupPlugins(app)
app.provide('APP_INFO', readonly(APP_INFO))
app.mount('#app')
