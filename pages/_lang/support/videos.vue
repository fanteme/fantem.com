<template>
  <main class="main">
    <section class="videos">
      <div class="container-fluid is-hidden-mobile">
        <div class="video">
          <video class="video-bg" autoplay muted loop>
            <source
              :src="`${this.$store.state.cdn}/fantem/videos/%E8%A7%86%E9%A2%91%E4%B8%AD%E5%BF%83800PX.mp4`"
              type="video/mp4"
            >
            <source
              :src="`${this.$store.state.cdn}/fantem/videos/%E8%A7%86%E9%A2%91%E4%B8%AD%E5%BF%83800PX.webm`"
              type="video/webm"
            >
          </video>
        </div>
      </div>
      <div class="container">
        <div class="field has-addons has-addons-centered" v-if="videos.length"></div>
        <div v-for="(category, index) in categories" :key="index">
          <h2 :id="category" v-if="videos.length" class="caption">{{category}}</h2>
          <div class="columns is-multiline">
            <div
              class="column is-full-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd"
              v-for="(video, index) in video[category]"
              :key="index"
            >
              <img :src="video.source+video.poster">
              <i class="fa fa-play-circle-o" @click="showModal(video)"></i>
              <div class="subtitle has-text-centered" v-text="video.title.rendered"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="modal" v-if="showvideo" :class="{'is-active': showvideo}">
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
.videos {
  padding-bottom: 23px;
  background: #edf1f2;
  color: #3e3a39;

  .caption {
    font-size: 36px;
    line-height: 44px;
    margin: 58px 0 26px 0;
  }

  .subtitle {
    font-size: 16px;
  }

  .is-one-quarter-fullhd {
    position: relative;

    .modal {
      display: block !important;
    }

    .fa-play-circle-o {
      font-size: 60px;
      position: absolute;
      top: 44%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: rgba(255, 255, 255, 0.95);
      cursor: pointer;

      &:hover {
        color: rgba(255, 255, 255, 0.65);
      }
    }
  }

  .video {
    display: grid;
    overflow: hidden;

    .video-bg {
      grid-area: var(--fullGrid);
      min-width: 100%;
      object-fit: cover;
    }
  }
}
</style>

<script>
import videojs from '~/components/Video'
export default {
  head() {
    return {
      title: this.$t('技术支持') + '-' + this.$t('视频中心')
    }
  },
  components: {
    videojs
  },
  data() {
    return {
      video: {},
      categories: [
        '组网教程',
        '产品添加/删除',
        // '出入网操作',
        '开关接线',
        '高级操作',
        '第三方兼容'
      ],
      showvideo: false,
      option: {
        title: {}
      }
    }
  },
  methods: {
    getVideosByCategory(category) {
      return this.videos.filter(element => {
        return element['category'] === category
      })
    },
    closeModal() {
      this.showvideo = false
    },
    showModal(val) {
      this.option = val
      this.option.autoplay = true
      this.showvideo = true
    }
  },
  async asyncData({ app, store }) {
    const { data } = await app.$axios.get(
      `${store.state.api}/sp_html5video?per_page=30`
    )
    return {
      videos: data
    }
  },
  async mounted() {
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

