var lang = (navigator.language || navigator.browserLanguage).toLowerCase()
if (!/zh/.test(lang)) {
  if (!/^\/en/.test(location.pathname)) {
    location.href =
      location.origin +
      '/en' +
      location.pathname +
      location.search +
      location.hash
  }
}
