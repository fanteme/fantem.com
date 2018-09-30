<template>
  <security></security>
</template>

<script>
import Security from '~/pages/_lang/application/security.vue'
export default {
  components: { Security },
  head() {
    return { title: this.$t('应用场景') + '-' + this.$t('安防模式') }
  }
}
</script>