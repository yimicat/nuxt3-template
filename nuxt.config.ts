/**
 * Nuxt config
 * @author Yimi by yimicat.com
 * @see https://nuxt.com/docs/api/configuration/nuxt-config
 */
import UnoCSS from 'unocss/vite'
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,

  typescript: {
    // 启用项目启动运行或构建时自动类型检查
    typeCheck: true,
    // 开启严格模式
    strict: true
  },

  modules: ['@nuxt/image', '@nuxtjs/i18n'],

  // @see https://image.nuxt.com/usage/nuxt-img
  image: {
    quality: 100 //图像质量
  },

  // vite 构建工具配置
  vite: {
    plugins: [UnoCSS()],
    css: {
      // css 预处理器配置选项
      preprocessorOptions: {
        // sass 预处理器
        scss: {
          javascriptEnabled: true,
          // 将用于声明全局 sass 变量的文件导入到每个 Vue 文件中的 style 样式模块中
          additionalData: `@import "./assets/styles/var.scss";`
        }
      }
    }
  }
})
