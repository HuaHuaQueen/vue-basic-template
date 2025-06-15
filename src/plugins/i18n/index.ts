import { createI18n } from 'vue-i18n'

import enLocale from '@/plugins/i18n/lang/en.ts'
import zhCnLocale from '@/plugins/i18n/lang/zh-cn.ts'
import type { App } from 'vue'
import { pinia } from '@/plugins/pinia'

const messages = {
  'zh-cn': {
    ...zhCnLocale
  },
  en: {
    ...enLocale
  }
}
// 创建 i18n 实例
export const i18n = createI18n({
  locale: 'zh-cn', // 设置默认语言
  messages
})

export const setupI18n = (app: App) => {
  app.use(i18n)
}

