<template>
  <main class="main">
    <section class="join">
      <section-banner :banner="join"></section-banner>
    </section>
  </main>
</template>
<style lang="stylus">
.join {
  background: #edf1f2;
  padding-bottom: 26px;
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
      title: '加入我们_OOMI_丰唐物联',
      meta: [
        {
          name: 'keywords',
          content: '丰唐物联,智能家居,智能家居系统,OOMI,OOMI智能家居系统'
        },
        {
          name: 'description',
          content:
            '丰唐物联是一家专注于物联网产品及无线智能家居产品的高端品牌企业，致力于为人们提供安全、节能、便捷和舒适的智慧生活，是行业领先的智能家居产品和系统方案服务提供商。'
        }
      ]
    }
  },
  data() {
    return {
      join: {
        backgroundimg: '/2018/10/554875d42cd8e4352d5dde4e47b1c59c.jpg',
        title: this.$t('加入丰唐物联 共创智慧之家'),
        buttontxt: this.$t('加入我们'),
        link: 'https://jobs.51job.com/all/co3309046.html',
        height: '640px',
        parallax: true
      }
    }
  }
}
</script>