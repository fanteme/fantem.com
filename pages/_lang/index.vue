<template>
  <main class="main">
    <banner></banner>
    <feature></feature>
    <application></application>
  </main>
</template>

<script>
import Feature from '~/components/HomeFeature.vue'
import banner from '~/components/Banner.vue'
import application from '~/components/SectionApplication.vue'
export default {
  components: {
    Feature,
    banner,
    application
  },
  head() {
    return { title: this.$t('首页') }
  }
}
</script>
