import { defineConfig, presetWind3 } from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      flexCenter: 'flex items-center justify-center',
    },
  ],
  presets: [
    presetWind3({
      important: '#app',
    }),
  ],
})
