import { createI18n } from 'vue-i18n'

import enLocale from '@/plugins/i18n/lang/en.ts'
import zhCnLocale from '@/plugins/i18n/lang/zh-cn.ts'
import type { App } from 'vue'
import {  useSettingsStoreHook } from '@/plugins/pinia/modules/setttings.ts'
import { defaultSettings } from '@/default.ts'

const settingsStore = useSettingsStoreHook()
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
  locale: settingsStore.language, // 设置默认语言
  messages,
  legacy: false, // 使用 Composition API
  globalInjection: true, // 全局注入 $t 方法
  fallbackLocale: defaultSettings.language // 回调语言
})

export const setupI18n = (app: App) => {
  app.use(i18n)
}

