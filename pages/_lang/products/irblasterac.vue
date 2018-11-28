<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section class="section-top trouble has-text-centered theme-background-color">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-6 is-offset-3">
            <h2 class="title has-text-weight-normal">{{$t('您是否也有这些烦恼？')}}</h2>
          </div>
          <div class="column is-12">
            <div class="columns is-variable is-0 imgs">
              <div class="column">
                <img :src="`${this.$store.state.cdn}/2018/11/397951ede5970ba49241e5ec3039e87f.jpg`"> 
                <p class="has-text-weight-light">{{$t('出门忘关空调')}}</p>
              </div>
              <div class="column">
                <img :src="`${this.$store.state.cdn}/2018/11/e1035d8b98455d7ee21a631f8bc25735.jpg`"> 
                <p class="has-text-weight-light">{{$t('常常被冻醒')}}</p>
              </div>   
              <div class="column">
                <img :src="`${this.$store.state.cdn}/2018/11/caec473812e0357a3203b63a5b3ffca7.jpg`"> 
                <p class="has-text-weight-light">{{$t('找不到遥控器')}}</p>
              </div>   
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <h2 class="title has-text-weight-normal">{{$t('智能空调红外转换器帮您解决')}}</h2>
            <p class="has-text-weight-light">{{$t('智能空调红外转换器能够通过内置的红外学习模块，学习发射红外信号，同时能与OOMI设备通过Z-Wave沟通联动，从而实现OOMI智能家居系统对传统空调的智能控制。')}}</p> 
          </div>
        </div>
        <div class="column is-12">
            <div class="columns">
              <div class="column is-2 is-offset-2">
                <img :src="`${this.$store.state.cdn}/2018/11/4abbbaba91f28cfbb57fa0a5a8343f89.svg`">
                <p class="has-text-weight-light">{{$t('远程监控')}}</p>
              </div>
              <div class="column is-2">
                <img :src="`${this.$store.state.cdn}/2018/11/987d93d299c71bf3a0091c6466c7885f.svg`">
                <p class="has-text-weight-light">{{$t('能耗监测')}}</p>
              </div>
              <div class="column is-2">
                <img :src="`${this.$store.state.cdn}/2018/11/ea8371ec0c943de50db687d9b63b2b7b.svg`">
                <p class="has-text-weight-light">{{$t('信号增强')}}</p>
              </div>
              <div class="column is-2">
                <img :src="`${this.$store.state.cdn}/2018/11/4d07ac3fc96c153edab8db8f5e6b306e.svg`">
                <p class="has-text-weight-light">{{$t('360°红外学习')}}</p>
              </div>
            </div>
          </div>
      </div>
    </section>
    <section class="section-right normal study" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/3e57dbbe38441f324a1b54c37dc976f8.jpg)`}">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-6 white-background-color center">
            <div class="columns is-multiline">
              <div class="column is-10 is-offset-2">
                <h2 class="title has-text-weight-normal has-text-right">{{$t('360°红外学习功能')}}</h2>
                <p class="has-text-weight-light has-text-right">{{$t('具备360°红外学习功能模块，可学习及发射空调红外信号，与OOMI设备通过Z-Wave沟通，精简家中空调遥控器，实现传统空调智能化控制。')}}</p>
              </div>
              <div class="column is-10 is-offset-2">
                <p class="has-text-weight-light orange">{{$t('① 接通电源，红外学习')}}</p>
                <img :src="`${this.$store.state.cdn}/2018/11/7aefe0daecb872d20f987be2aac3fe97.jpg`">
              </div>
              <div class="column is-10 is-offset-2">
                <p class="has-text-weight-light orange">{{$t('② 连接空调，固定安装好空调红外转换器')}}</p>
                <img :src="`${this.$store.state.cdn}/2018/11/f4298b908536e02050d0015bb006e27b.jpg`">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-top control has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/3dcc3d80ea8a6d8b26d74e82313c8461.jpg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-6 is-offset-3">
            <h2 class="title has-text-weight-normal">{{$t('传统空调秒变智能空调')}}</h2>
            <p class="has-text-weight-light">{{$t('通过手机APP或Touch远程控制空调设备，家的温度就在手中。')}}</p> 
          </div>
        </div>
      </div>
    </section>
    <product-parameter :parameters="parameters"></product-parameter>   
  </main>
</template>    
<style lang="stylus" scoped>
.section
  &-top
    .title
      margin-bottom: 38px 
    &.trouble
      padding: 105px 0 100px
      .imgs
        margin-bottom: 80px 
        img 
          margin-bottom: 25px
      .is-2
        img 
          margin: 25px 0 10px
    &.control
      height: 800px
      padding-top: 100px   
  &-right
    .title
      margin-bottom: 38px   
    &.study
      background-repeat: no-repeat
      background-position: left top
      height: 950px
      .is-6
        @media screen and (min-width: 769px) {
          height: 1050px
        }
        @media screen and (max-width: 768px) {
          padding: 90px 0 
        }
    &:not(.full)  
      @media screen and (max-width: 768px) {
        padding-top: 350px
        background-position: top
        background-size: contain
      }
      @media screen and (max-width: 616px) {
        padding-top: 230px
      }
    &.normal
      @media screen and (max-width: 768px) {
        height: auto    
      }     
</style>
<script>
import ProductBanner from "~/components/ProductBanner"
import ProductParameter from '~/components/ProductParameter'
  export default {
    components: {
      ProductBanner,ProductParameter
    },
    data() {
      return {
        banner: {
          title: this.$t('智能空调红外转换器'),
          subtitle: 'OOMI IR Blaster AC',
          content: this.$t('直插式空调控制设备，无需改装，即插即用。支持 Z-Wave 和OOMI 智能家居系统无线远程控制，同时具有能源监测、智能中继器、红外指令学习的功能，能够轻松实现空调智能化。'),
          img: `${this.$store.state.cdn}/2018/11/a7cc31b9942b2890187accc1d1cc665b.png`,
          class: 'gray-radial-gradient'
        },
        parameters: [
          {
            column: "is-2", 
            item: this.$t('额定电压')
          },
          {
            column: "is-4", 
            value: '220V ～ 50Hz'
           },
           {
            column: "is-2",  
            item: this.$t('最大电流')
           },
           {
            column: "is-4",  
            value: '16mA'
           },
           {
            column: "is-2",  
            item: this.$t('工作环境')
           },
           {
            column: "is-4", 
            value: this.$t('温度：0 – 40℃  湿度：20 – 80% RH')
           },
           {
            column: "is-2",  
            item: this.$t('无线距离')
           },
           {
            column: "is-4", 
            value: this.$t('室内 40m')
           },
           {
            column: "is-2",  
            item: this.$t('产品尺寸')
           },
           {
            column: "is-4", 
            value: '78.5× 55 × 59mm '
           }, 
           {
            column: "is-2",  
            item: this.$t('无线功能')
           },
           {
            column: "is-4", 
            value: 'Z-Wave Plus'
           },    
           {
            column: "is-2",  
            item: this.$t('注意')
           },
           {
            column: "is-4",  
            value: this.$t('适合 3P 以下的空调')
           }
         ]
      }
    }
  }
</script>