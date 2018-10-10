export const state = () => ({
  locales: ['en', 'zh'],
  locale: 'zh',
  fallbackLocale: 'zh',
  cdn: 'http://cdn.fantem.cn',
  api: 'http://api.fantem.cn/wp-json/wp/v2'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}
