import { createApp } from 'vue'

import App from './App.vue'

import 'virtual:svg-icons-register';
import 'uno.css'
import { setupPlugins } from '@/plugins'
const app = createApp(App)

setupPlugins(app)
app.mount('#app')
