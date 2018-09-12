export const state = () => ({
  locales: ['en', 'zh'],
  locale: 'zh',
  cdn: 'http://cdn.fantem.cn'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}
