<template>
  <main class="main">
    <section class="app">
      <div class="container">
        <div class="columns download">
          <div class="column is-6-tablet is-7-desktop has-text-centered">
            <img :src="`${this.$store.state.cdn}/2018/10/917821c3812524b594aad9a5f99e7abd.png`">
          </div>
          <div class="column is-6-tablet is-5-desktop has-text-centered">
            <img class="icon" :src="`${this.$store.state.cdn}/2018/10/fdc02fcd26b7ab19b3809b22b2bbd040.png`">
            <p class="caption">OOMI Pro</p>
            <img class="img" width="300" :src="`${this.$store.state.cdn}/2018/10/b44f2d1f08a2a16a23d6a792bafdfb2d.svg`" alt="">
            <div class="columns">
              <div class="column center">
                <img width="120" :src="`${this.$store.state.cdn}/2018/11/d4df1b7c19c06e0ce431b3f77a9a76dc.png`" alt="">
                <a @click.stop="downloadApk" :href="apk.acf.fileurl" class="button"><i class="fa fa-android fa-2x"></i>Android{{$t('下载')}}</a>
              </div>
              <div class="column center">
                <img width="120" :src="`${this.$store.state.cdn}/2018/11/987690a5531bf967e0cf8e408357edaf.png`" alt="">
                <a href="//itunes.apple.com/cn/app/oomi-pro/id1311087767" class="button"><i class="fa fa-apple fa-2x"></i>App store{{$t('下载')}}</a>
              </div>  
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="video">
          <video class="video-bg" autoplay muted loop>
            <source :src="`${this.$store.state.cdn}/fantem/video/OOMI%20APP_800PX.mp4`" type="video/mp4" />
            <source :src="`${this.$store.state.cdn}/fantem/video/OOMI%20APP_800PX.webm`" type="video/webm" />
          </video>
        </div>
      </div>
      <div id="modal" class="modal" :class="{'is-active': isActive}" @click="isActive=!isActive">
        <div class="modal-background"></div>
        <div class="modal-content">
          <p style="color: white;font-size: 20px;text-align: center">点击右上角... <br/>在浏览器中打开</p>
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
      </div>
    </section>  
  </main>
</template>
<style lang="stylus">
  .app
    .download
      padding: 82px 0 60px
      .caption
        font-size: 36px
        line-height: 44px
        margin: 23px 0 0 0
      .icon
        margin-top: 15px
        width: auto
        height: auto
      .img
        margin: 35px 0 25px
      .center
        flex-direction: column 
      .button
        font-size: 16px
        height: 46px
        margin: 10px 35px 0
        background: #ed7422
        color: #fff
        border: none
        i 
          margin-right: 8px
</style>
<script>
  export default {
    head() {
      return { title: this.$t('技术支持') +'-'+ 'app'+this.$t('下载') }
    },
    data() {
      return {
        isActive: false,
        apk: {
          acf: {
            fileurl: ''
          }
        }
      }
    },
    methods: {
      downloadApk() {
        let ua = navigator.userAgent.toLowerCase()
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
          this.isActive = true
        }
      }
    },
    async mounted() {
      let { data } = await this.$axios.get(
        `${this.$store.state.api}/apk?per_page=1`
      )
      this.apk = data[0]
    }
  }
</script>