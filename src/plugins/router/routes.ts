import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/404/index.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/404/index.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    redirect: '/auth/login',
    component: () => import('@/views/auth/index.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/auth/component/login/index.vue'),
        meta: {
          title: 'auth.login.title'
        }
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/auth/component/register/index.vue'),
        meta: {
          title: 'auth.register.title'
        }
      },
      {
        path: 'forgot',
        name: 'ForgotPassword',
        component: () => import('@/views/auth/component/forgot/index.vue'),
        meta: {
          title: 'auth.forgot.title'
        }
      }
    ]
  }
]
