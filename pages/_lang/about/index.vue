<template>
  <company></company>
</template>
<script>
  import Company from '~/pages/_lang/about/company'
  export default {
    components: {
      Company
    },
    head() {
      return { title: this.$t('关于丰唐物联') + '-' + this.$t('公司简介') }
    }
  }
</script>