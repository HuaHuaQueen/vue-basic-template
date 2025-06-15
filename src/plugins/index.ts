import type { App } from 'vue'
import { setupRouter } from '@/plugins/router'
import { setupPinia } from '@/plugins/pinia'
import { setupI18n } from '@/plugins/i18n'

export const setupPlugins = (app: App) => {
  setupRouter(app)
  setupPinia(app)
  setupI18n(app)
}
