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
    return {
      title: '关于我们_OOMI智能家居系统_智能家居解决方案',
      meta: [
        {
          name: 'keywords',
          content:
            '丰唐物联,OOMI,OOMI智能家居系统,OOMI大宅系统,智能家居解决方案,智能家居系统,智能家居代理,智能家居招商加盟'
        },
        {
          name: 'description',
          content:
            '丰唐物联技术（深圳）有限公司是一家集设计研发、生产、销售于一体，提供智能家居整体解决方案，是一家专注于物联网产品及无线智能家居产品的高端品牌企业。'
        }
      ]
    }
  }
}
</script>