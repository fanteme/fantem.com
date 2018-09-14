<template>
  <main class="main">
    <banner></banner>
    <application></application>
  </main>
</template>

<script>
import banner from '~/components/Banner.vue'
import application from '~/components/SectionApplication.vue'
export default {
  components: {
    banner,
    application
  },
  head() {
    return { title: this.$t('首页') }
  }
}
</script>
