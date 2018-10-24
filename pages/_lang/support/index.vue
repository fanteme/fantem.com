<template>
  <Service></Service>
</template>

<script>
import Service from '~/pages/_lang/support/service.vue'
export default {
  components: { Service },
  head() {
    return { title: this.$t('技术支持') + '-' + this.$t('服务体系') }
  }
}
</script>
