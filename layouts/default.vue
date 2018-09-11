<template>
  <nuxt/>
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$store.state.locale
      }
    }
  }
}
</script>
