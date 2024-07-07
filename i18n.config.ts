/**
 * i18n config
 * @author Yimi by yimicat.com
 * @date 2023-01-21 19:35
 */
export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome'
    },
    zh: {
      welcome: '欢迎'
    }
  }
}))
