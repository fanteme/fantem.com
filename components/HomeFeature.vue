<template>
  <section id="section-feature">
    <div id="tap-and-touch" class="container">
      <div class="columns">
        <div class="column">
          <div class="has-text-centered animated" :class="{'fadeInDown': isVisible}">
            <p class="title">Tap-and-Touch {{$t('专利技术')}}</p>
            <p class="subtitle">{{$t('让组网设置超乎想象的简单')}}</p>
            <p class="content">
              {{$t('OOMI使用自主创新的Tap-and-Touch专利技术，刷新智能家居安装新定义：只需让OOMI Touch轻触其他OOMI产品，便可建立链接，实现OOMI系统对智能家居的全操控。智能家居生活，从触碰开始。')}}            
            </p>
          </div>
        </div>
      </div>
      <div v-observe-visibility="(isVisible, entry) => visibilityChanged(isVisible, entry)"></div>
      <div class="columns">
        <div class="column animated" :class="{'fadeInLeft': isVisible}">
          <div class="num center">1</div>
          <figure class="center">
            <img :src="`${this.$store.state.cdn}/2018/10/0529dc3b6b109a78d4e0c27c5c0b27be.svg`">
          </figure>
          <p class="text has-text-centered">{{$t('轻触')}}</p>
        </div>
        <div class="column animated" :class="{'fadeInUp': isVisible}">
          <div class="num center">2</div>
          <figure class="center">
            <img :src="`${this.$store.state.cdn}/2018/10/5312ddbef202fea6084d45299c678b8c.svg`">
          </figure>
          <p class="text has-text-centered">{{$t('连接')}}</p>
        </div>
        <div class="column animated" :class="{'fadeInRight': isVisible}">
          <div class="num center">3</div>
          <figure class="center">
            <img :src="`${this.$store.state.cdn}/2018/10/02b1270f21f6b18211e7ca0417d544e6.svg`">
          </figure>
          <p class="text has-text-centered">{{$t('操控')}}</p>
        </div>
      </div>
    </div>
    <div class="gap"></div>
    <div id="oomi3-big-house" class="container">
      <div class="columns">
        <div class="column">
          <div class="container has-text-centered">
            <p class="title">OOMI3.0{{$t('大宅系统')}}</p>
            <p class="subtitle">{{$t('让组网设置超乎想象的简单')}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="fluid-container">
      <div class="columns">
        <div class="column">
          <section-fullpage></section-fullpage>
        </div>
      </div>
    </div>
    <div class="gap"></div>
  </section>
</template>

<script>
import SectionFullpage from '~/components/SectionFullpage.vue'

export default {
  components: {
    SectionFullpage
  },
  data: () => ({
    isVisible: false
  }),
  methods: {
    visibilityChanged(isVisible, entry, key) {
      this.isVisible = isVisible
    }
  }
}
</script>


<style lang="stylus">
#section-feature {
  // background: radial-gradient(circle at top, #fff 50%, #ffe3cd) 0 0 / 100% 100% no-repeat;

  .gap {
    height: 11px;
    background-color: #f0f4f5;
  }

  .container {
    .columns {
      padding: 20px 0;

      &:nth-child(1) {
        padding-top: 60px;
      }

      &:nth-child(2) {
        padding-bottom: 60px;
      }
    }

    &.oomi3 {
    }

    .title {
      color: #3e3a39;
      font-size: 36px;
      font-weight: normal;

      &:after {
        display: block;
        margin: 0 auto;
        content: '';
        margin-top: 8px;
        width: 73px;
        height: 2px;
        background-color: #ed7422;
      }
    }

    .subtitle {
      color: #3e3a39;
      font-size: 20px;
      padding-top: 23px;
    }

    .content {
      max-width: 71%;
      margin: 0 auto;
      font-size: 16px;
    }

    .num {
      width: 42px;
      height: 42px;
      color: #e66c25;
      font-size: 24px;
      font-weight: 500;
      border: 1px solid #dadbdb;
      border-radius: 50%;
    }

    figure {
      height: 280px;
    }

    .text {
      color: #3e3a39;
      font-size: 20px;
    }
  }
}
</style>
