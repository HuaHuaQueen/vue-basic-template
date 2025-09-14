import { defaultSettings } from '@/default.ts'
import { pinia } from '@/plugins/pinia'

export const useSettingsStore = defineStore('settings', () => {
  const appearance = useStorage('appearance', defaultSettings.appearance)

  const language = useStorage('language', defaultSettings.language)

  function toggleAppearance() {}

  function toggleLanguage() {}

  return {
    appearance,
    language,
    toggleAppearance,
    toggleLanguage,
  }
})

export function useSettingsStoreHook() {
  return useSettingsStore(pinia)
}
