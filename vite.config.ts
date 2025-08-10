import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import UnoCSS from 'unocss/vite'
import { name, version, author, description } from './package.json'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'

const pathSrc: string = path.resolve(__dirname, 'src')

const APP_INFO = {
  name,
  version,
  author,
  description
}
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env: Record<string, string> = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      vueJsx(),
      UnoCSS(),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia', '@vueuse/core', 'vue-i18n'],
        vueTemplate: true, // 是否在 vue 模板中自动导入
        // 自动导入图标组件
        resolvers: [IconsResolver({})],
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        eslintrc: {
          enabled: true, // 是否自动生成 eslint 规则，建议生成之后设置 false
          filepath: './.eslintrc-auto-import.json' // 指定自动导入函数 eslint 规则的文件
        },
        dts: path.resolve(pathSrc, 'types', 'auto-imports.d.ts') // 指定自动导入函数TS类型声明文件路径
      }),
      Components({
        resolvers: [
          PrimeVueResolver(),
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['prime'] // element-plus图标库，其他图标库 https://icon-sets.iconify.design/
          })
        ],
        dts: path.resolve(pathSrc, 'types', 'components.d.ts') // 指定自动导入组件TS类型声明文件路径
      }),
      Icons({
        // 自动安装图标库
        autoInstall: true
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      })
    ],
    resolve: {
      alias: {
        '@': pathSrc
      }
    },
    server: {
      open: true, // 是否在服务器启动时自动打开浏览器
      port: Number(env.VITE_APP_PORT), // 服务器端口,
      [env.VITE_APP_BASE_API]: {
        target: env.VITE_APP_TARGET,
        changeOrigin: true,
        rewrite: (path: string) => path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), '')
      }
    },
    define: {
      APP_INFO: JSON.stringify(APP_INFO)
    }
  }
})
