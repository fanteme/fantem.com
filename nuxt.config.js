import utils from './utils'

export default {
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
        href: '/css/bulma.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/video-js.min.css'
      }
    ],
    script: [
      {
        src: '/js/nav2lang.js'
      },
      {
        src: '/js/intersection-observer.js'
      },
      {
        innerHTML:
          process.env.NODE_ENV === 'production'
            ? `var _hmt = _hmt || [];
				(function() {
				  var hm = document.createElement("script");
				  hm.src = "https://hm.baidu.com/hm.js?e3707bd6a84972cbcd8c9355d9c91c0e";
				  var s = document.getElementsByTagName("script")[0]; 
				  s.parentNode.insertBefore(hm, s);
				})();`
            : ''
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
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
    '~/plugins/vue-wow',
    { src: '~/plugins/vue-scrollmagic', ssr: false }
  ],
  /*
   ** Build configuration
   */
  generate: {
    dir: 'public',
    routes: utils.routes
  },
  css: ['~/assets/styles/main.styl'],
  modules: ['@nuxtjs/pwa', '@nuxtjs/axios']
}
