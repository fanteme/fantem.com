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
    title: 'fantem.com'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  mode: 'spa',
  router: {
    middleware: 'vue-i18n'
  },
  plugins: ['~/plugins/vue-i18n.js'],
  /*
  ** Build configuration
  */
  generate: {
    dir: 'public'
  },
  css: ['~/assets/styles/main.styl'],
  modules: [['@nuxtjs/pwa', { workbox: false }]],
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
