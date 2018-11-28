const fs = require('fs')
const path = require('path')

const pages = path.join(__dirname + '/pages/_lang')
let routes = []

async function readDir(path) {
  const files = await fs.readdirSync(path)
  await files.forEach(async file => {
    const stat = await fs.statSync(path + '/' + file)
    if (stat.isDirectory()) {
      await readDir(path + '/' + file)
    } else {
      if (/^(_|\.)/.test(file)) return
      routes.push(
        (path + '/' + file)
          .replace(/\S+\/_lang/, '/en')
          .replace(/.vue$/, '')
          .replace(/\/index$/, '')
      )
    }
  })
}
const news = [
  '/en/about/news',
  '/about/news/91',
  '/en/about/news/91',
  '/about/news/104',
  '/en/about/news/104',
  '/about/news/110',
  '/en/about/news/110',
  '/about/news/113',
  '/en/about/news/113',
  '/about/news/116',
  '/en/about/news/116',
  '/about/news/119',
  '/en/about/news/119',
  '/about/news/122',
  '/en/about/news/122',
  '/about/news/126',
  '/en/about/news/126',
  '/about/news/129',
  '/en/about/news/129',
  '/about/news/132',
  '/en/about/news/132',
  '/about/news/135',
  '/en/about/news/135',
  '/about/news/138',
  '/en/about/news/138',
  '/about/news/141',
  '/en/about/news/141',
  '/about/news/144',
  '/en/about/news/144',
  '/about/news/147',
  '/en/about/news/147',
  '/about/news/150',
  '/en/about/news/150',
  '/about/news/153',
  '/en/about/news/153',
  '/about/news/156',
  '/en/about/news/156',
  '/about/news/159',
  '/en/about/news/159',
  '/about/news/162',
  '/en/about/news/162',
  '/about/news/165',
  '/en/about/news/165',
  '/about/news/168',
  '/en/about/news/168',
  '/about/news/171',
  '/en/about/news/171',
  '/about/news/174',
  '/en/about/news/174',
  '/about/news/177',
  '/en/about/news/177',
  '/about/news/180',
  '/en/about/news/180',
  '/about/news/197',
  '/en/about/news/197',
  '/about/news/913',
  '/en/about/news/913',
  '/about/news/953',
  '/en/about/news/953'
]

export default {
  routes: async () => {
    await readDir(pages)
    return news.concat(routes)
  }
}
