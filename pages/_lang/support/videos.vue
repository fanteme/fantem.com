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
          <h2 :id="category" v-if="category.videos" class="caption">{{ $t(category.name) }}</h2>
          <div class="columns is-multiline">
            <div
              class="column is-full-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd"
              v-for="(video, index) in category.videos"
              :key="index"
            >
              <img :src="video.acf.source+video.acf.poster">
              <i class="fa fa-play-circle-o" @click="showModal(video)"></i>
              <div class="subtitle has-text-centered">{{ $t(video.title.rendered) }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="modal" v-if="showVideo" :class="{'is-active': showVideo}">
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{option.category}}>{{option.title.rendered}}</p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <videojs :options="option.acf"></videojs>
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
  components: {
    videojs
  },
  head() {
    return {
      title: '视频中心_丰唐物联_OOMI',
      meta: [
        {
          name: 'keywords',
          content:
            '智能家居系统,OOMI智能家居,OOMI大宅系统,OOMI智能家居系统,丰唐物联'
        },
        {
          name: 'description',
          content:
            '丰唐物联技术（深圳）有限公司一直致力于智能家居产品及家居整体智能控制解决方案的研究与实践，提供智能家居整体解决方案，为您轻松打造舒适便利的智能家居生活环境。'
        }
      ]
    }
  },
  data() {
    return {
      videos: [],
      categories: [],
      showVideo: false,
      option: {
        title: {}
      }
    }
  },
  methods: {
    showModal(val) {
      this.option = val
      this.option.autoplay = true
      this.showVideo = true
    },
    closeModal() {
      this.showVideo = false
    },
    async getVideos() {
      const { data } = await this.$axios.get(
        `${this.$store.state.api}/video?per_page=30`
      )
      this.videos = data
    },
    async getVideoCategories() {
      let { data } = await this.$axios.get(
        `${this.$store.state.api}/video_cat?per_page=10`
      )
      this.categories = data.sort((x, y) =>
        Number(x.description) > Number(y.description) ? 1 : -1
      )
    },
    getVideosByCategory(category) {
      return this.videos.filter(element => {
        return element['video_cat'].includes(category.id)
      })
    }
  },
  async created() {
    await this.getVideoCategories()
    await this.getVideos()
    this.categories.forEach(category => {
      const videos = this.getVideosByCategory(category)
      this.$set(category, 'videos', videos)
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

