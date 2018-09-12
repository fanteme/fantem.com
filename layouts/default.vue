<template>
  <nuxt/>
</template>

<script>
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
  }
}
</script>
