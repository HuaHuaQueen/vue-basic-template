import { createRouter, createWebHashHistory, type Router } from 'vue-router'
import type { App } from 'vue'
import { routes } from '@/plugins/router/routes.ts'

export const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export const setupRouter = (app: App) => {
  app.use(router)
}

