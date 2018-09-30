import minimist from 'minimist'
const argv = minimist(process.argv.slice(2), {
  alias: {
    H: 'hostname',
    p: 'port'
  },
  string: ['H'],
  unknown: parameter => false
})

const port =
  argv.port ||
  process.env.PORT ||
  process.env.npm_package_config_nuxt_port ||
  '3000'
const host =
  argv.hostname ||
  process.env.HOST ||
  process.env.npm_package_config_nuxt_host ||
  'localhost'

export default {
  env: {
    baseUrl: process.env.BASE_URL || `http://${host}:${port}`
  },
  head: {
    title: '官网首页',
    htmlAttrs: {
      lang: 'zh'
    },
    link: [
      {
        rel: 'dns-prefetch',
        href: 'http://cdn.fantem.cn'
      },
      {
        rel: 'dns-prefecth',
        href: '//api.fantem.cn'
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/bulma@0.7.1/css/bulma.min.css'
      }
    ],
    script: [
      { src: 'https://pv.sohu.com/cityjson?ie=utf-8' },
      {
        src: '/ip2lang.js'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ed7422' },
  router: {
    middleware: 'vue-i18n'
  },
  plugins: ['~/plugins/vue-i18n.js'],
  /*
  ** Build configuration
  */
  generate: {
    dir: 'public',
    routes: [
      '/en',
      '/en/news',
      '/en/products',
      '/en/application',
      '/en/application/security',
      '/en/application/ent',
      '/en/business',
      '/en/support',
      '/en/support/downloads/apps',
      '/en/about',
      '/news/91',
      '/en/news/91',
      '/news/104',
      '/en/news/104',
      '/news/110',
      '/en/news/110',
      '/news/113',
      '/en/news/113',
      '/news/116',
      '/en/news/116',
      '/news/119',
      '/en/news/119',
      '/news/122',
      '/en/news/122',
      '/news/126',
      '/en/news/126',
      '/news/129',
      '/en/news/129',
      '/news/132',
      '/en/news/132',
      '/news/135',
      '/en/news/135',
      '/news/138',
      '/en/news/138',
      '/news/141',
      '/en/news/141',
      '/news/144',
      '/en/news/144',
      '/news/147',
      '/en/news/147',
      '/news/150',
      '/en/news/150',
      '/news/153',
      '/en/news/153',
      '/news/156',
      '/en/news/156',
      '/news/159',
      '/en/news/159',
      '/news/162',
      '/en/news/162',
      '/news/165',
      '/en/news/165',
      '/news/168',
      '/en/news/168',
      '/news/171',
      '/en/news/171',
      '/news/174',
      '/en/news/174',
      '/news/177',
      '/en/news/177',
      '/news/180',
      '/en/news/180',
      '/news/197',
      '/en/news/197',
      '/news/913',
      '/en/news/913',
      '/news/953',
      '/en/news/953'
    ]
  },
  css: ['~/assets/styles/main.styl'],
  modules: [['@nuxtjs/pwa', { workbox: false }], '@nuxtjs/axios'],
  extensions: ['js', 'ts'],
  build: {
    extend(config, ctx) {
      if (ctx.isClient) {
        config.devtool = 'eval-source-map'
      }
      const tsLoader = {
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/], transpileOnly: true }
      }
      config.module.rules.push({
        test: /((client|server)\.js)|(\.tsx?)$/,
        ...tsLoader
      })
      config.module.rules.map(rule => {
        if (rule.loader === 'vue-loader') {
          rule.options.loaders = { ts: tsLoader }
        }
        return rule
      })
      // Add .ts extension in webpack resolve
      if (config.resolve.extensions.indexOf('.ts') === -1) {
        config.resolve.extensions.push('.ts')
      }
    }
  }
}
