const fs = require('fs')
const path = require('path')
const axios = require('axios')


const pages = path.join(__dirname , '/pages/_lang')
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
async function newspath() {
  const { data } = await axios.get('https://api.fantem.cn/wp-json/wp/v2/getnewsid')
  data.push('/page/training', '/en/page/training')
  return data
}

export default {
  routes: async () => {
    await readDir(pages)
    const news = await newspath()
    return news.concat(routes)
  }
}

