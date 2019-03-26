<template>
  <main class="main">
    <banner></banner>
    <feature></feature>
    <application></application>
    <news :news="news"></news>
  </main>
</template>

<script>
import Banner from '~/components/Banner.vue'
import Feature from '~/components/HomeFeature.vue'
import Application from '~/components/SectionApplication.vue'
import News from '~/components/HomeNews.vue'
export default {
  components: {
    Banner,
    Feature,
    Application,
    News
  },
  head() {
    return {
      title: '丰唐物联_智能家居_智能家居系统_智能家居解决方案',
      meta: [
        {
          name: 'keywords',
          content:
            '丰唐物联,OOMI,大宅系统,OOMI智能家居系统,智能家居,智能家居系统,智能家居公司,智能家居解决方案,OOMI3.0大宅系统'
        },
        {
          name: 'description',
          content:
            '丰唐物联技术（深圳）有限公司集设计研发、生产、销售于一体，提供智能家居整体解决方案，是一家专注物联网产品及无线智能家居产品的高端品牌企业。'
        }
      ]
    }
  },
  async asyncData({ app, store }) {
    const { data } = await app.$axios.get(
      `${store.state.api}/posts?categories=news&per_page=9&_embed`
    )
    return {
      news: data
    }
  }
}
</script>
