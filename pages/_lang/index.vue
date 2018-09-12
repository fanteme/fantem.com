<template>
  <main class="main">
    <banner></banner>
  </main>
</template>

<script>
import banner from '~/components/Banner.vue'
export default {
  components: {
    banner
  },
  head() {
    return { title: this.$t('page.home.title') }
  }
}
</script>
