<template>
  <main class="main">
    <solution-header></solution-header>
    <solution-hero :hero="hero"></solution-hero>
    <section class="solution-main has-text-centered">
      <h1>OOMI {{$t('智慧别墅')}}</h1>
      <img src="http://cdn.fantem.cn/2018/10/bba36e53c70803848b6bb45d3d775cbe.svg">
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
    return { title: this.$t('行业方案') + '-' + this.$t('智慧别墅') }
  },
  data() {
    return {
      hero: {
        bg: 'http://cdn.fantem.cn/2018/10/5a65914423170c25871d24ba193757e4.jpg',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="99" height="89"><g fill="none" fill-rule="evenodd" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.754"><path d="M21.03 6.021v27.114M7.518 49.577L48.163.928l43.095 47.32"/><path d="M12.835 87.061V61.806l36.657-40.939 36.449 40.142v26.052"/><path d="M39.847 87.061V60.743h19.082v26.318M1.28 87.925h96.216"/></g></svg>`,
        title: this.$t('智慧别墅'),
        description: this.$t(
          'OOMI智能家居大宅系统为智慧别墅提供完美解决方案，既可以通过云平台远程管理，也可以本地化管理，实现对智能健康、智能语音、智能安防、智能灯光、智能家电、智能娱乐、智能环境管理；系统采用独有的强大级联方案，支持多网关级联，跨网关场景联动，系统稳定可靠，彻底解决无线产品在别墅中应用的难题，通过一个账号集中管控，也可以使用不同账号进行分级管控，满足家庭所有成员使用。在功能和性能的设计方面始终贯穿“以人为本”的理念，使人们能够充分感受到智能家居系统给日常生活带来的舒适，安全，信息化等方面的享受。'
        )
      }
    }
  }
}
</script>