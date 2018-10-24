var userAgent = navigator.userAgent
var isIE =
  userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1
if (isIE) {
  location = '/update-browser-web.html'
}
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
