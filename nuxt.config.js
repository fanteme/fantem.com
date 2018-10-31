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
        href: 'http://cdn.fantem.cn/libs/css/bulma.min.css'
      }
    ],
    script: [
      {
        src: '/js/nav2lang.js'
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
  plugins: [
    '~/plugins/vue-i18n.js',
    '~/plugins/vue-observe-visibility',
    '~/plugins/vue-video-player',
    { src: '~/plugins/vue-scrollmagic', ssr: false }
  ],
  /*
  ** Build configuration
  */
  generate: {
    dir: 'public',
    routes: [
      '/en',
      '/en/about/news',
      '/en/products',
      '/en/application',
      '/en/application/security',
      '/en/application/ent',
      '/en/application/eco',
      '/en/application/health',
      '/en/application/scene',
      '/en/solution',
      '/en/solution/villa',
      '/en/solution/hotel',
      '/en/solution/community',
      '/en/solution/education',
      '/en/solution',
      '/en/business',
      '/en/support',
      '/en/support/downloads/apps',
      '/en/support/service',
      '/en/support/app',
      '/en/support/videos',
      '/en/support/faq',
      '/en/support/guide',
      '/en/about',
      '/en/about/company',
      '/en/about/join',
      '/en/about/contact',
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
