<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section class="section-right" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/52fa3a752b1a712bd7fa53e63c2007a2.jpg)`}">
      <div class="container">
        <div class="columns">
          <div class="column is-12-tablet is-offset-0-tablet is-7-desktop is-offset-5-desktop">
            <p class="content has-text-centered">{{$t('OOMI WaterSensor智能水位传感器，智能探测漏水信息，并向智能家居系统发出反馈，让您即刻收到通知，采取应对措施，轻松防患水患，不怕水溢浸家。')}}</p>
            <div class="">
              <p class="title has-text-weight-normal"><i><img :src="`${this.$store.state.cdn}/2018/11/6704fd518c1b61dbc7df8df6b4e345c2.svg`"></i>{{$t('请勿泡置水中！')}}</p>
              <div class="mark">
                <img :src="`${this.$store.state.cdn}/2018/11/88673649e4ae21667bd18fa1b8bd1132.png`">
                <img :src="`${this.$store.state.cdn}/2018/11/0702ad1657cbd50184ee89c7e0448a49.png`">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-top blue-linear-gradient has-text-centered">
      <div class="container">
        <div class="columns is-gapless">
          <div class="column">
            <h2 class="title has-text-weight-normal">{{$t('漏水检测 新型居家智能')}}</h2>
            <p class="content has-text-weight-light">{{$t('采用先进检测模块，实时水体感应，当积水漫过探针两级，即向网关发送无线报警信号，即时知晓。')}}</p>
            <img :src="`${this.$store.state.cdn}/2018/11/29c99a1bcfe62dc45ffceba51d1e40a7.png`">
          </div>
        </div>
      </div>
    </section>
    <section class="section-top gray-radial-gradient has-text-centered">
      <div class="container">
        <div class="columns is-gapless">
          <div class="column">
            <h2 class="title has-text-weight-normal">{{$t('分体设计 灵活应对水患')}}</h2>
            <p class="content has-text-weight-light">{{$t('传感器主体与探测头独立分离设计，免受潮环境影响，兼具水位控制和漏水浸漫提醒功能。')}}</p>
            <img :src="`${this.$store.state.cdn}/2018/11/4e36d1b5f7d39889b0c1937f157a9ca7.png`">
          </div>
        </div>
      </div>
    </section>
    <section class="section-justify black">
      <div class="container">
        <div class="columns is-gapless">
          <div class="column is-7">
            <img :src="`${this.$store.state.cdn}/2018/11/cd673dc678c7d14a2dc50a308f1e31c5.png`">
          </div>
          <div class="column is-5 has-text-white has-text-centered">
            <h2 class="title has-text-white has-text-weight-normal">{{$t('远程掌控 异常状况及时提醒')}}</h2>
            <p class="content has-text-weight-light">{{$t('通过手机APP实现预设安防场景，一旦监测水位达到预设高度，立即远程提示报警。')}}</p>
            <div class="animte">
              <img :src="`${this.$store.state.cdn}/2018/11/c2942f349f27e5ab966f009f6e963e64.svg`">
            </div>
            <img class="app" :src="`${this.$store.state.cdn}/2018/11/e0ebf9cfbb5b6411a093090064a2833f.png`">
          </div>
        </div>
      </div>
    </section>     
    <section class="section-top has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/d4d7b1ddb0fb4a67f15dfbf20df405f2.jpg)`}">
      <div class="container">
        <div class="columns is-gapless">
          <div class="column">
            <h2 class="title has-text-weight-normal">{{$t('智能联动 远程控制')}}</h2>
            <p class="content has-text-weight-light">{{$t('联动智能机械手自动关闭水阀，让你在外也能远程操控，让您省心、放心。')}}</p>
            <div class="columns is-multiline">
              <div class="column is-12">
                <img :src="`${this.$store.state.cdn}/2018/11/3278a4fc25ce6270c9f167fda5767150.svg`">  
              </div>
              <div class="column is-10 is-offset-2">
                <img :src="`${this.$store.state.cdn}/2018/11/1c424ceebb917945f14105e234f17e4c.png`">
              </div>
            </div>
          </div>
        </div> 
      </div>
    </section>
     <section class="section-justify gray-linear-gradient">
      <div class="container">
        <div class="columns is-gapless">
          <div class="column is-7 center">
            <img :src="`${this.$store.state.cdn}/2018/11/43fddcca2b33d7441a0378d61343b0fb.png`">
          </div>
          <div class="column is-5 has-text-right">
            <h2 class="title has-text-weight-normal">{{$t('低功耗 续航更长久')}}</h2>
            <p class="content has-text-weight-light">{{$t('采用高性能、低功耗微处理器，超长续航，避免频繁更换电池。')}}</p>
          </div>
        </div>
      </div>
    </section>    
  </main>  
</template>
<style lang="stylus">
.section
  &-right
    position: relative
    background-size: cover
    .container
      padding-bottom: 65px  
      .content
        color: #3e3a39
        font-size: 22px
        line-height: 40px
        margin: 106px 0 95px
      .title
        color: #e76c26
        font-size: 26px
        margin-left: 15px 
        i 
          margin-right: 20px 
      .mark
        img 
          margin: 0 15px  
  &-top
    color: #3e3a39
    @media screen and (min-width: 1028px) {
      min-height: 800px
    }
    &.blue-linear-gradient
      background-image: linear-gradient(to bottom, white, #b2d6ee)
    &.gray-radial-gradient
      background-image: radial-gradient( #fafafb, #d3d7da)
    .title
      color: #3e3a39
      font-size: 36px
      padding: 129px 0 0
    .content
      font-size: 16px  
      margin-bottom: 80px
    img 
      vertical-align: bottom
  &-justify
    &.gray-linear-gradient
      background-image: linear-gradient(to bottom, #e9ecfb, #dee0f5)
    &.black
      background: #3d3d3d
    .is-5
      position: relative
      .animte
        position: absolute 
        z-index: 1
        bottom: 100px
        width: 100%
      .app 
        position: relative
        z-index: 2 
        margin-top: 120px
        vertical-align: bottom 
    .is-7
      img 
        margin-top: 32px   
    .title
      margin: 90px 0 35px 
    .content
      color: #3e3a39   
</style>
<script>
import ProductBanner from "~/components/ProductBanner"
  export default {
    components: {
      ProductBanner
    },
    data() {
      return {
         banner: {
          title: this.$t('智能水位传感器'),
          subtitle: 'OOMI WaterSensor',
          content: this.$t('OOMI智能水位传感器 是一款基于Z-Wave无线通讯协议的智能水位传感设备，能精确地感知到水位溢出或漏水的存在，同时通知网关触发智能场景或蜂鸣警示，让您即刻收到通知，采取应对措施。亦可联动智能机械手自动关闭水阀，让你在外也能远程操控，让您省心、放心。'),
          img: `${this.$store.state.cdn}/2018/11/07b0ddcb4058f54781d8eb0db7b1bcff.png`
        },
      }
    }
  }
</script>