<template>
  <main class="main">
    <solution-header :mode="'hotel'"></solution-header>
    <solution-hero :hero="hero"></solution-hero>
    <section class="solution-main has-text-centered">
      <h1>{{$t('OOMI 智慧酒店')}}</h1>
      <img src="http://cdn.fantem.cn/2018/10/875a667e7e2ba748e826b097a3612d2a.svg">
    </section>
  </main>
</template>

<style lang="stylus">
.solution-main {
  background-color: #f0f4f5;
  padding: 100px 0;

  h1 {
    color: #3e3a39;
    font-size: 36px;

    &:after {
      display: block;
      margin: 8px auto 50px;
      content: '';
      width: 73px;
      height: 2px;
      background-color: #ed7422;
    }
  }
}
</style>

<script>
import SolutionHeader from '~/components/SolutionHeader.vue'
import SolutionHero from '~/components/SolutionHero.vue'
export default {
  components: { SolutionHeader, SolutionHero },
  head() {
    return { title: this.$t('行业方案') + '-' + this.$t('智慧酒店') }
  },
  data() {
    return {
      hero: {
        bg: 'http://cdn.fantem.cn/2018/10/c6a66ba297e1f7aa44f02b2554dedfac.jpg',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="107" height="90" viewBox="0 0 107 90"><g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.754" transform="translate(1 .89)"><path d="M11.2282,88.0516 L11.2282,6.9426 C11.2282,3.3676 14.1252,0.4706 17.7002,0.4706 L65.0652,0.4706 C68.6402,0.4706 71.5372,3.3676 71.5372,6.9426 L71.5372,87.8016"/><polyline points="28.012 87.633 28.012 54.521 53.331 54.521 53.331 87.743"/><path d="M72.3909 20.9527L90.0989 20.9527C93.6739 20.9527 96.5709 23.8497 96.5709 27.4247L96.5709 88.1767M.1335 88.0892L105.1055 88.0892M24.883 17.2545L57.882 17.2545M24.883 34.8919L57.882 34.8919"/></g></svg>`,
        title: this.$t('智慧酒店'),
        description: this.$t(
          'OOMI酒店客房控制系统是利用计算机、通讯、物联网、无线控制等技术，基于客房内的智能网关构成的无线通讯网络，对酒店客房的安防系统、门禁系统、中央空调系统、灯光系统、环境监控系统等进行智能管控，实时反映客房状态、住客需求、服务状况和设备状态等，协助酒店对客房资源进行监控和分析。客控系统的目标是通过智能产品让酒店智能化，为用户创造体验，为酒店创造价值。'
        )
      }
    }
  }
}
</script>