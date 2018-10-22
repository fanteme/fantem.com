<template>
  <videos></videos>
</template>

<script>
import Videos from '~/pages/_lang/support/videos.vue'
export default {
  components: { Videos },
  head() {
    return { title: this.$t('技术支持') + '-' + this.$t('服务体系') }
  }
}
</script>
