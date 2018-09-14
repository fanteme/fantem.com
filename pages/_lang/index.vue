<template>
  <main class="main">
    <banner></banner>
    <feature></feature>
  </main>
</template>

<script>
import Banner from '~/components/Banner.vue'
import Feature from '~/components/HomeFeature.vue'
export default {
  components: {
    Banner,
    Feature
  },
  head() {
    return { title: this.$t('首页') }
  }
}
</script>
