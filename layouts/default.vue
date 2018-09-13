<template>
  <div class="wrapper">
    <div style="display: none">
      <img :src="`${$store.state.cdn}/fantem/wechat-share.jpg`" />
    </div>
    <page-header/>
    <nuxt/>
  </div>
</template>

<script>
import PageHeader from '~/components/Header.vue'
export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$store.state.locale
      },
      titleTemplate: this.$t('head.titleTemplate'),
      meta: [
        {
          name: 'keywords',
          content: this.$t('head.meta.keywords')
        },
        {
          name: 'description',
          content: this.$t('head.meta.description')
        }
      ]
    }
  },
  components: {
    PageHeader
  }
}
</script>
