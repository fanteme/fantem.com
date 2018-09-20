if (!/^[1-6][0-7][0-3]\d0[0-4]$/.test(returnCitySN.cid)) {
  if (!/^\/en/.test(location.pathname)) {
    location.href =
      location.origin +
      '/en' +
      location.pathname +
      location.search +
      location.hash
  }
}
