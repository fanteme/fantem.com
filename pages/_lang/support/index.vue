<template>
  <Service></Service>
</template>

<script>
import Service from '~/pages/_lang/support/service.vue'
export default {
  components: { Service },
  head() {
    return {
      title: '技术支持_OOMI智能家居系统_智能家居解决方案',
      meta: [
        {
          name: 'keywords',
          content: '智能家居系统,智能家居解决方案,OOMI智能家居系统,OOMI大宅系统'
        },
        {
          name: 'description',
          content:
            'OOMI智能家居加盟提供搭建营销平台、渠道渗透支持、品牌提升政策、服务、技术支持、商务培训、解决方案，助力合作伙伴打造过硬团队，迅速应对变化的市场需求。'
        }
      ]
    }
  }
}
</script>
