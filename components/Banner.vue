<template>
  <section class="slider">
    <agile :slides="slides" :fade="true">
      <div v-for="(slide,i) in slides" :key="i" class="slide">
        <div class="imgwrap" :style="{backgroundImage: `url(${slide.img})`}">
          <div class="contentwrap"></div>
        </div>
      </div>
    </agile>
  </section>
</template>

<script>
import agile from '~/components/Agile.vue'
export default {
  components: {
    agile
  },
  data() {
    return {
      slides: [
        {
          img: `${this.$store.state.cdn}/2018/10/5780cd16e2ed56ed5832ad37f45e4d17.png`,
          icon: `<svg width="76" height="47" viewBox="0 0 76 47" xmlns="http://www.w3.org/2000/svg"><path d="M23.3.3c-12.7 0-23 10.3-23 23s10.3 23 23 23 23-10.3 23-23c0-12.6-10.3-23-23-23zm0 38c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15zm46.7-38c-1.5 1.6-3.5 3.1-5.8 4.5-2.3 1.3-4.5 2.2-6.6 2.7v7.5c4.3-1.2 7.7-3.1 10.5-5.6v36.9h7.5v-46h-5.6z" fill-rule="nonzero" fill="#DADBDB"/></svg>`,
          title: this.$t('技术研发 产品集成')
        },
        {
          img: `${this.$store.state.cdn}/2018/10/5e2911f4ac1bceb7b76f1ee63035f944.png`,
          icon: `<svg width="90" height="47" viewBox="0 0 90 47" xmlns="http://www.w3.org/2000/svg"><path d="M67.4 40.3c1-2.3 3.8-4.9 8.4-8 4.4-3 7.6-5.4 9.4-7.3 2.9-3.2 4.4-6.8 4.4-10.7 0-4-1.4-7.3-4.2-9.8-2.8-2.5-6.4-3.8-10.8-3.8-4.9 0-8.8 1.6-11.8 4.9-2.9 3.1-4.4 7.1-4.4 12.2h7.4c.1-3.5.9-6.3 2.3-8 1.4-1.9 3.5-2.8 6.3-2.8 2.6 0 4.5.6 5.9 1.8 1.3 1.2 2 3 2 5.5s-1 4.9-3 7.1c-1.3 1.3-3.3 3-6.2 5.1-5.2 3.6-8.7 6.4-10.4 8.3-3 3.4-4.5 7.4-4.5 12h31.5v-6.5h-22.3zm-44.2-39.5c-12.7 0-23 10.3-23 23s10.3 23 23 23 23-10.3 23-23-10.3-23-23-23zm0 38c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15z" fill-rule="nonzero" fill="#DADBDB"/></svg>`,
          title: this.$t('客制化解决方案')
        },
        {
          img: `${this.$store.state.cdn}/2018/10/a377e6cc41cfb85dbbc9e5e2d59e3d42.jpg`,
          icon: `<svg width="91" height="47" viewBox="0 0 91 47" xmlns="http://www.w3.org/2000/svg"><path d="M23.2.8c-12.7 0-23 10.3-23 23s10.3 23 23 23 23-10.3 23-23-10.3-23-23-23zm0 38c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15zm64.7-12.6c-1.4-1.6-3.4-2.8-6-3.6 4.9-1.6 7.4-4.8 7.4-9.7 0-3.8-1.4-6.8-4-9-2.7-2.2-6.4-3.2-10.8-3.2-4.3 0-7.9 1.2-10.7 3.7-3 2.5-4.6 6-5 10.4h7.1c.2-2.7 1.1-4.6 2.6-6 1.4-1.3 3.4-1.9 6-1.9 2.5 0 4.5.6 5.8 1.7 1.2 1.1 1.8 2.7 1.8 4.9s-.7 3.8-2 5c-1.4 1.1-3.3 1.7-6 1.7h-3.1v5.5h3.1c2.9 0 5 .6 6.5 1.8 1.5 1.2 2.3 3 2.3 5.6 0 2.1-.7 3.8-2.2 5.3-1.6 1.5-3.8 2.4-6.6 2.4-2.5 0-4.6-.7-6.1-2.2-1.7-1.6-2.6-3.8-2.7-6.6h-7.4c.4 5 2.1 8.8 5.2 11.4 2.8 2.4 6.5 3.5 11.1 3.5 4.8 0 8.7-1.4 11.7-4 2.9-2.6 4.3-6 4.3-10-.1-2.8-.8-5-2.3-6.7z" fill-rule="nonzero" fill="#DADBDB"/></svg>`,
          title: this.$t('OOMI智能家居系统')
        },
        {
          img: `${this.$store.state.cdn}/2018/10/9e2304a8041dab953e412eb40c8e4e76.png`,
          icon: `<svg width="92" height="47" viewBox="0 0 92 47" xmlns="http://www.w3.org/2000/svg"><path d="M23.1.8c-12.7 0-23 10.3-23 23s10.3 23 23 23 23-10.3 23-23-10.3-23-23-23zm0 38c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15zm62.1-7.9v-30.1h-6.9l-22.5 29v7.2h22.2v9.9h7.2v-9.9h6.8v-6h-6.8v-.1zm-7.2 0h-16.1l15.9-20.6h.2v20.6z" fill-rule="nonzero" fill="#DADBDB"/></svg>`,
          title: this.$t('最新动态')
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
$height = 700px;

.slider {
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 32rem;
  height: $height;
  margin-bottom: 90px;

  @media (max-width: 600px) {
    height: 32rem;
  }

  .agile {
    .imgwrap {
      min-height: 32rem;
      height: $height;
      position: relative;
      background-size: cover;
      background-position: 50%;

      @media (max-width: 600px) {
        height: 32rem;
      }
    }
  }
}
</style>
