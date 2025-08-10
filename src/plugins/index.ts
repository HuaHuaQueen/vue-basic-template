import type { App } from 'vue'
import { setupRouter } from '@/plugins/router'
import { setupPinia } from '@/plugins/pinia'
import { setupI18n } from '@/plugins/i18n'
import { setupPrimevue } from '@/plugins/primevue'

export const setupPlugins = (app: App) => {
  setupPrimevue(app)
  setupRouter(app)
  setupPinia(app)
  setupI18n(app)
}
