<template>
  <main class="main">
    <section-header :secheader="secheader"></section-header>
    <section class="videos">
      <div class="container-fluid">
        <div class="video">
          <video class="video-bg" autoplay muted loop>
            <source src="http://cdn.fantem.cn/fantem/videos/%E8%A7%86%E9%A2%91%E4%B8%AD%E5%BF%83800PX.mp4" type="video/mp4" />
            <source src="http://cdn.fantem.cn/fantem/videos/%E8%A7%86%E9%A2%91%E4%B8%AD%E5%BF%83800PX.webm" type="video/webm" />
          </video>
        </div>
      </div>
      <div class="container">
        <div class="field has-addons has-addons-centered" v-if="videos.length">
        </div>
        <div v-for="(category, index) in categories" :key="index">
          <h2 :id="category" v-if="videos.length" class="caption">{{category}}</h2>
          <div class="columns is-multiline">
            <div class="column is-full-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd" v-for="(video, index) in video[category]" :key="index">
              <img :src="video.source+video.poster"/>
              <i class="fa fa-play-circle-o" @click="showModal(video)"></i>
              <div class="subtitle has-text-centered" v-text="video.title.rendered"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="modal" :class="{'is-active': showvideo}">
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{option.category}}>{{option.title.rendered}}</p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <videojs :options="option"></videojs>
      </div>
    </div>
  </main>
</template>
<style lang="stylus">
.videos
  padding-bottom: 23px
  background: #edf1f2
  color: #3e3a39
  .caption
    font-size: 36px
    line-height: 44px
    margin: 58px 0 26px 0
  .subtitle
    font-size: 16px
  .is-one-quarter-fullhd
    position: relative
    .modal
      display: block !important
    .fa-play-circle-o
      font-size: 60px
      position: absolute
      top: 44%
      left: 50%
      transform: translate(-50%, -50%)
      color: rgba(255,255,255,0.95)
      cursor: pointer
      &:hover
        color: rgba(255,255,255,0.65)
  .video
    display: grid
    overflow: hidden  
    .video-bg
      grid-area: var(--fullGrid)
      min-width: 100%
      object-fit: cover
</style>


<script>
import videojs from '~/components/Video'
import SectionHeader from '~/components/SectionHeader'
export default {
  head() {
    return { title: this.$t('技术支持') +''+ this.$t('视频中心') }
  },
  components: {
    videojs,SectionHeader
  },
  data() {
    return {
      video: {},
      videos: [],
      categories: [
        'APP使用',
        '产品使用',
        '出入网操作',
        '开关接线',
        '场景设置',
        '第三方兼容'
      ],
      showvideo: false,
      option: {
        title: {}
      },
      secheader: [
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="50"><path fill="none" stroke="#211613" stroke-linecap="round" stroke-linejoin="round" stroke-width=".882" d="M12 1.7C5.842 1.7.85 6.692.85 12.85S5.842 24 12 24h11.12V12.84A11.13 11.13 0 0 0 12 1.7m35.76 11.14a11.12 11.12 0 1 0-22.23 0V24h11.12c6.143-.011 11.116-4.997 11.11-11.14M.87 37.56a11.12 11.12 0 1 0 22.23 0V26.42H12A11.13 11.13 0 0 0 .88 37.56m35.8-11.14H25.6v11.14c.033 6.111 5.008 11.042 11.12 11.02 6.111-.022 11.05-4.988 11.04-11.1-.011-6.111-4.969-11.06-11.08-11.06"/></svg>',
          title: `${this.$t('服务体系')}`,
          link: 'service',
          class: 'is-offset-2',
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="50"><g fill="none" fill-rule="evenodd" stroke="#221714" stroke-linecap="round" stroke-linejoin="round" transform="translate(0 1)"><rect width="27.52" height="48" x=".82" y=".2" rx="2.88"/><path d="M17 43.1a2.42 2.42 0 1 1-4.84 0 2.42 2.42 0 0 1 4.84 0zM5.17 5.68H24v32.09H5.17z"/></g></svg>',
          title: `${this.$t('APP下载')}`,
          link: 'download'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="40"><g fill="none" fill-rule="evenodd" stroke="#231815" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.154"><path d="M5.72 10.24l3.2-8.34m5.48 8.34l3.2-8.55m5.48 8.55l3.21-8.54m5.47 8.54l3.21-8.54m5.47 8.54l3.21-8.54m-32.02-.37h35.12a1.56 1.56 0 0 1 1.37 1.73v34.3a1.55 1.55 0 0 1-1.37 1.71H2.6a1.56 1.56 0 0 1-1.35-1.71v-36l10.38-.03z"/><path d="M20.45 30.68V17.89l8.47 6.39zM1.25 10.71h46.87"/></g></svg>',
          title: `${this.$t('视频中心')}`,
          link: 'videos'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="49"><g fill="none" fill-rule="evenodd" transform="translate(1)"><ellipse cx="23.51" cy="24.2" stroke="#221714" stroke-linecap="round" stroke-linejoin="round" stroke-width=".979" rx="23.5" ry="23.49"/><path fill="#221714" fill-rule="nonzero" d="M28.12 14.92a5.49 5.49 0 0 1 1.63 4.19 5.7 5.7 0 0 1-1.12 3.42c-.36.43-1.15 1.19-2.39 2.34a6.26 6.26 0 0 0-1.55 1.73 4.34 4.34 0 0 0-.64 2.33v.88H22.2v-.88a5.32 5.32 0 0 1 .55-2.43 10.89 10.89 0 0 1 2.79-3.3 16.77 16.77 0 0 0 1.42-1.46 4.22 4.22 0 0 0 .94-2.57 4.3 4.3 0 0 0-1.12-3.1 4.54 4.54 0 0 0-3.33-1.15 4.27 4.27 0 0 0-3.65 1.61 6.3 6.3 0 0 0-1.12 3.79h-1.82a7.52 7.52 0 0 1 1.7-5 6.14 6.14 0 0 1 5-2.06 6.29 6.29 0 0 1 4.56 1.66zm-3.89 17.83c.31.276.478.676.46 1.09a1.45 1.45 0 0 1-.46 1.09 1.54 1.54 0 0 1-1.09.43 1.63 1.63 0 0 1-1.55-1.52 1.34 1.34 0 0 1 .49-1.09 1.36 1.36 0 0 1 1.06-.42 1.45 1.45 0 0 1 1.09.42z"/></g></svg>',
          title: `${this.$t('常见问题')}`,
          link: 'faq'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="38" height="49"><g fill="none" fill-rule="evenodd" stroke="#221714" stroke-linecap="round" stroke-linejoin="round" stroke-width=".979"><path d="M4.66.7a3.47 3.47 0 0 0-3.37 3.72V44c0 1.69 1.35 3.72 3.37 3.72h28.73A3.47 3.47 0 0 0 36.77 44V12.87L23.25.7H4.66z"/><path d="M34.3 14H22.48V3.51s11.15 9.81 11.82 10.48M6.46 19.47h24.95m-24.95 7.9h24.95m-24.95 7.9h24.95"/></g></svg>',
          title: `${this.$t('使用手册')}`,
          link: 'guide'
        }
      ]
    }
  },
  methods: {
    getVideosByCategory(category) {
      return this.videos.filter(element => {
        return element['category'] === category
      })
    },
    closeModal(){
      this.showvideo = false
    },
    showModal(val){
      this.option = val
      console.log(val)
      this.option.autoplay = true
      this.showvideo = true
    }
  },
  async mounted() {
    let { data } = await this.$axios.get(
      'http://api.fantem.cn/wp-json/wp/v2/sp_html5video?per_page=30'
    )
    this.videos = data
    await this.categories.forEach(category => {
      const videos = this.getVideosByCategory(category)
      this.$set(this.video, category, videos)
    })
  },
  watch: {
    keywords: function(val) {
      this.searchVideos = this.videos.filter(item => {
        const title = item.title.rendered
        if (val) {
          let reg = new RegExp(val, 'i')
          if (title.search(reg) != -1) {
            return item
          }
        } else {
          return
        }
      })
    }
  }
}
</script>

