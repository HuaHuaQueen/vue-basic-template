import type { App } from 'vue'
import { setupRouter } from '@/plugins/router'
import { setupPinia } from '@/plugins/pinia'
import { setupI18n } from '@/plugins/i18n'

function setupProvide(app: App){
  app.provide('APP_INFO', readonly(APP_INFO))
}

export const setupPlugins = (app: App) => {
setupProvide(app)
  setupRouter(app)
  setupPinia(app)
  setupI18n(app)
}
