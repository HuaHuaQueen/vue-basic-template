import { createRouter, createWebHashHistory, type Router } from 'vue-router'
import type { App } from 'vue'
import { routes } from '@/plugins/router/routes.ts'

export const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior:() => {
    return { left: 0, top: 0 }
  }
})

export const setupRouter = (app: App) => {
  app.use(router)
}

