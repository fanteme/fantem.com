<template>
  <villa></villa>
</template>

<script>
import Villa from '~/pages/_lang/solution/villa.vue'
export default {
  components: { Villa },
  head() {
    return {
      title: '行业方案_智慧生活_智慧家居_智慧生活应用解决方案',
      meta: [
        {
          name: 'keywords',
          content:
            '智慧家电,智慧酒店,智慧小区,智慧教育,智慧别墅,智慧出行,智慧环境,智慧安防'
        },
        {
          name: 'description',
          content:
            '丰唐物联技术（深圳）有限公司是一家专注于物联网产品及无线智能家居产品的高端品牌企业，提供可落地的智慧生活应用解决方案，是行业领先的智能家居产品和系统方案服务提供商。'
        }
      ]
    }
  }
}
</script>