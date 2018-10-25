<template>
  <main class="main">
    <section class="join">
      <section-banner :banner="join"></section-banner>
    </section>
  </main>  
</template>
<style lang="stylus">
  .join  
    background: #edf1f2
    padding-bottom: 26px
</style>
<script>
import SectionBanner from '~/components/SectionBanner'
import { join } from 'path';
  export default {
    components: {
      SectionBanner
    },
    data() {
      return {
        join: {
          backgroundimg: '/2018/10/554875d42cd8e4352d5dde4e47b1c59c.jpg',
          title: this.$t('加入丰唐物联  共创智慧之家'),
          buttontxt: this.$t('加入我们'),
          height: '640px',
          parallax: true
        }
      }
      
    }
  }
</script>