<template>
  <main class="main">
    <section class="service">
      <section-banner :banner="service"></section-banner>
      <div class="service-wrap">
         <div class="container">
          <h2 class="has-text-centered caption">{{$t('服务体系')}}</h2>
          <p class="has-text-centered">{{$t('7年智能家居服务应用经验，专注智能家居设备的创新与研发，为用户提供整体智能家居解决方案，以及为代理商、社区、企业、酒店等提供技术支撑的服务。')}}</p>
          <div class="center">
          <img v-if="`${this.$store.state.locale}` == 'en'" :src="`${$store.state.cdn}/2018/11/d7106c25c509d45db3482e0f9b0d1157.svg`">
          <img v-else :src="`${$store.state.cdn}/2018/11/88b08579739d464149c22c63833bcd6f.svg`">
          </div> 
        </div>
      </div>
    </section>
  </main>  
</template>

<style lang="stylus">
  .service
    color: #3e3a39
    background: #edf1f2
    padding: 0 0 123px 0
    .caption
      font-size: 36px
      line-height: 44px
      margin: 58px 0 26px 0

    p
      font-size: 18px
      line-height: 28px
      margin: 22px 0 48px
        
</style>

<script>
import SectionBanner from '~/components/SectionBanner'
  export default {
    components: {
      SectionBanner
    },
    head() {
      return { title: this.$t('技术支持') + '-' + this.$t('服务体系') }
    },
    data() {
      return {
        service: {
          backgroundimg: '/2018/11/dc6abdc493187acb22de55cc62226959.jpg',
          parallax: true,
          height: '540px'
        }
      }
    }
  }
</script>