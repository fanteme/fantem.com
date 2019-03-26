<template>
  <main class="main">
    <section class="service">
      <section-banner :banner="service"></section-banner>
      <div class="service-wrap">
        <div class="container">
          <h2 class="has-text-centered caption">{{$t('服务体系')}}</h2>
          <p
            class="has-text-centered"
          >{{$t('7年智能家居服务应用经验，专注智能家居设备的创新与研发，为用户提供整体智能家居解决方案，以及为代理商、社区、企业、酒店等提供技术支撑的服务。')}}</p>
          <div class="center">
            <img
              v-if="`${this.$store.state.locale}` == 'en'"
              :src="`${$store.state.cdn}/2019/03/d08ac4e550aca7e5acf0fe9e3baf28ab.svg`"
            >
            <img v-else :src="`${$store.state.cdn}/2019/03/a55009b8c5e610c3b5abc94ec0b9db8c.svg`">
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="stylus">
.service {
  color: #3e3a39;
  background: #edf1f2;
  padding: 0 0 123px 0;

  .caption {
    font-size: 36px;
    line-height: 44px;
    margin: 58px 0 26px 0;
  }

  p {
    font-size: 18px;
    line-height: 28px;
    margin: 22px 0 48px;
  }
}
</style>

<script>
import SectionBanner from '~/components/SectionBanner'
export default {
  components: {
    SectionBanner
  },
  head() {
    return {
      title: '服务体系_智能家居系统_智能安防系统_智能照明系统_智能家电系统',
      meta: [
        {
          name: 'keywords',
          content:
            '智能家居系统,智能安防系统,智能照明系统,智能家电系统,智能场景系统,智能影音系统,智能娱乐系统,智能环境系统,智能门窗系统'
        },
        {
          name: 'description',
          content:
            'OOMI智能家居系统包含了智能交互中心，涵盖了智能控制中心、智能照明系统、智能安防系统、智能影音系统、智能环境系统、智能娱乐系统、能源管理系统、门窗遮阳系统等。'
        }
      ]
    }
  },
  data() {
    return {
      service: {
        backgroundimg: '/2018/11/4c646eb26112c37f1d847391d0a6579d.jpg',
        parallax: true,
        height: '540px'
      }
    }
  }
}
</script>