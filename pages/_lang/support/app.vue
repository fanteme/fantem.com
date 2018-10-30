<template>
  <main class="main">
    <section class="app">
      <div class="container">
        <div class="columns download">
          <div class="column is-7 has-text-centered">
            <img :src="`${this.$store.state.cdn}/2018/10/917821c3812524b594aad9a5f99e7abd.png`">
          </div>
          <div class="column is-5 has-text-centered">
            <img :src="`${this.$store.state.cdn}/2018/10/fdc02fcd26b7ab19b3809b22b2bbd040.png`">
            <p class="caption">OOMI Pro</p>
            <img class="img" width="300" :src="`${this.$store.state.cdn}/2018/10/b44f2d1f08a2a16a23d6a792bafdfb2d.svg`" alt="">
            <a :href="`${this.$store.state.cdn}/com.fantem.phonecn.apk?t=1540785268431`" class="button"><i class="fa fa-android fa-2x"></i>Android{{$t('下载')}}</a>
            <a href="//itunes.apple.com/cn/app/oomi-pro/id1311087767" class="button"><i class="fa fa-apple fa-2x"></i>App store{{$t('下载')}}</a>
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
        
      .img
        margin: 35px 0 65px 
      .button
        font-size: 16px
        height: 46px
        margin: 0 35px 0
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
  }
</script>