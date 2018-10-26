<template>
  <join></join>
</template>
<script>
  import Join from '~/pages/_lang/about/contact'
  export default {
    components: {
      Join
    },
    head() {
      return { title: this.$t('关于丰唐物联') + '-' + this.$t('加入我们') }
    }
  }
</script>