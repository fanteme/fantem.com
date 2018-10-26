<template>
  <main class="main">
    <solution-hero :hero="hero"></solution-hero>
    <section class="solution-main has-text-centered">
      <h1>OOMI {{$t('智慧教育')}}</h1>
      <img src="http://cdn.fantem.cn/2018/10/fb0ad1e0e2171eec47785bb39fe01b79.svg">
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
import SolutionHero from '~/components/SolutionHero.vue'
export default {
  components: { SolutionHero },
  head() {
    return { title: this.$t('行业方案') + '-' + this.$t('智慧教育') }
  },
  data() {
    return {
      hero: {
        bg: 'http://cdn.fantem.cn/2018/10/2641de09c8564729fc00864d019cc004.jpg',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="105" height="90" viewBox="0 0 105 90"><g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.754" transform="translate(1 1.1)"><polygon points="52.637 57.17 .186 29.099 53.557 .108 102.574 28.179"/><path d="M19.9448 39.6808L19.9448 74.6638C19.9448 81.6688 25.6238 87.3478 32.6288 87.3478L74.0828 87.3478C81.0878 87.3478 86.7658 81.6688 86.7658 74.6638L86.7658 37.4108M97.9037 32.3815L97.9037 68.3075"/></g></svg>`,
        title: this.$t('智慧教育'),
        description: this.$t(
          'OOMI智慧校园管理系统，是利用物联网技术、云计算、移动互联网技术，基于智能家居、物联网，实现教室和宿舍的灯光控制、投影控制、窗帘控制、空调控制、环境监测、安防管理，实现远程控制、自定义设置场景、时间段管理，与其它子系统进行数据对接，为学校管理部门提供有效依据数据，打造智慧校园，给老师和学生们带来方便、快捷、舒适的智慧教学体验。'
        )
      }
    }
  }
}
</script>