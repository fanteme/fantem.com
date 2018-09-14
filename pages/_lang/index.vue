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
    return { title: this.$t('首页') }
  },
  async asyncData({ app, store }) {
    const { data } = await app.$axios.get(
      `${store.state.api}/posts?categories=news&per_page=3&_embed`
    )
    return {
      news: data
    }
  }
}
</script>
