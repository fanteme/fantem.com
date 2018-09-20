<template>
  <div class="wrapper">
    <div style="display: none">
      <img :src="`${$store.state.cdn}/fantem/wechat-share.jpg`" />
    </div>
    <page-header/>
    <nuxt/>
    <page-footer/>
  </div>
</template>

<style lang="stylus">
.hero {
  height: 540px;
  margin: 0 !important;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  @media (max-width: 1280px) {
    height: 420px;
  }

  @media (max-width: 768px) {
    height: 360px;
  }

  &-content {
    flex-direction: column;
    height: 100%;

    &>.container-fluid {
      width: 100%;
      padding: 1.2rem 0;
      background: rgba(255, 255, 255, 0.35);

      .subtitle {
        margin-top: 1rem;
        font-size: 1.75rem;
      }
    }
  }
}
</style>

<script>
import PageHeader from '~/components/Header.vue'
import PageFooter from '~/components/Footer.vue'
export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$store.state.locale
      },
      titleTemplate: this.$t('head.titleTemplate'),
      meta: [
        {
          name: 'keywords',
          content: this.$t('head.meta.keywords')
        },
        {
          name: 'description',
          content: this.$t('head.meta.description')
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: this.$t('head.link.fontAwesome')
        },
        {
          rel: 'stylesheet',
          href: this.$t('head.link.animate')
        }
      ],
      script: [
        {
          src: this.$t('head.script.smoothScroll')
        }
      ]
    }
  },
  components: {
    PageHeader,
    PageFooter
  }
}
</script>
