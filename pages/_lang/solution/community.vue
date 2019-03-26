<template>
  <main class="main">
    <solution-hero :hero="hero"></solution-hero>
    <section class="solution-main has-text-centered">
      <h1>OOMI {{$t('智慧小区')}}</h1>
      <img src="http://cdn.fantem.cn/2018/10/3f3b31226b407af9fd31b51d3acd1db3.svg">
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
    return {
      title: '智慧小区_丰唐物联_OOMI',
      meta: [
        {
          name: 'keywords',
          content:
            '智慧小区,智能家居系统,OOMI智能家居,OOMI大宅系统,OOMI智能家居系统,丰唐物联'
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
      hero: {
        bg: 'http://cdn.fantem.cn/2018/10/9e0c68eac1a61163c81c1ecd79f3e366.jpg',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="105" height="90" viewBox="0 0 105 90"><path fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.754" d="M62.5166 87.4969L20.0346 87.4969 20.0346 2.3459C20.0346 1.0689 21.0696.0339 22.3466.0339L60.2036.0339C61.4806.0339 62.5166 1.0689 62.5166 2.3459L62.5166 87.4969zM87.7891 87.4969L62.9061 87.4969 62.9061 36.2679 84.9841 36.2679C86.5331 36.2679 87.7891 37.5239 87.7891 39.0729L87.7891 87.4969zM.4326 87.8092L102.2656 87.8092M31.748 22.524L50.803 22.524M31.748 43.7653L50.803 43.7653M68.6074 54.0734L82.8984 54.0734M68.6074 70.0043L82.8984 70.0043M31.748 65.0062L50.803 65.0062M9.2012 86.9659L9.2012 73.4239M15.2744 63.3492C15.2744 68.8222 12.5554 73.2582 9.2014 73.2582 5.8464 73.2582 3.1284 68.8222 3.1284 63.3492 3.1284 57.8762 5.8464 53.4402 9.2014 53.4402 12.5554 53.4402 15.2744 57.8762 15.2744 63.3492z" transform="translate(1 .91)"/></svg>`,
        title: this.$t('智慧小区'),
        description: this.$t(
          'OOMI智慧小区管理系统，是利用物联网技术、无线控制技术、移动互联网技术，基于数字对讲系统、智能家居、物联网，实现家庭灯光控制、家电控制、影音控制、窗帘控制、环境监测、安防管理、访客来访、呼梯功能，为住户打造一个“安全、舒适、便捷”的小区住宅生活环境。智慧小区管理系统目标是通过智能产品使家庭智能化，为用户创造体验，锻造具有“智能、舒适、高效与安全”特性的现代智慧小区。'
        )
      }
    }
  }
}
</script>