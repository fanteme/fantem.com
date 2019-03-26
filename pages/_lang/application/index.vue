<template>
  <security></security>
</template>

<script>
import Security from '~/pages/_lang/application/security.vue'
export default {
  components: { Security },
  head() {
    return {
      title: '应用场景_智能家居控制系统_智能场景模式_智能情景面板_智能情景开关',
      meta: [
        {
          name: 'keywords',
          content:
            '智能情景,智能场景,起床模式,睡眠模式,离家模式,回家模式,会客模式,娱乐模式,影院模式,聚会模式'
        },
        {
          name: 'description',
          content:
            '丰唐物联技术（深圳）有限公司拥有行业先进的智能家居控制系统，致力于为人们提供安全、节能、便捷和舒适的智慧生活，是领先的智能家居产品和系统方案服务提供商。'
        }
      ]
    }
  }
}
</script>