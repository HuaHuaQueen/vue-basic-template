import { defaultSettings } from '@/default.ts'
import { pinia } from '@/plugins/pinia'

export const useSettingsStore = defineStore('settings', () => {

  const theme = useStorage('theme', defaultSettings.theme)

  const language = useStorage('language', defaultSettings.language)

  function toggleTheme() {
  }

  function toggleLanguage() {
  }

  return {
    theme,
    language,
    toggleTheme,
    toggleLanguage
  }
})

export function useSettingsStoreHook() {
  return useSettingsStore(pinia)
}
