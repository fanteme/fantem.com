<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section class="section-top function has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/7457ec30c2624e1e502ea6eb68a7b1e9.jpg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-6 is-offset-3">
            <p class="has-text-weight-light">{{$t('OOMI 智能警示器，超低功耗运行，支持现场警报威慑，异常动静及时推送，为您的居家安全保驾护航。')}}</p> 
          </div>
          <div class="column is-12">
            <div class="columns">
              <div class="column is-2 is-offset-3">
                <img :src="`${this.$store.state.cdn}/2018/11/c6fed9145bb1bbff5f00aaf7632c2ffc.svg`">
                <p class="has-text-weight-light">{{$t('声光报警')}}</p>
              </div>
              <div class="column is-2">
                <img :src="`${this.$store.state.cdn}/2018/11/b3848a1662e263a5e605a985f8d16791.svg`">
                <p class="has-text-weight-light">{{$t('定时提醒')}}</p>
              </div>
              <div class="column is-2">
                <img :src="`${this.$store.state.cdn}/2018/11/3375645f87191993c72e366a84d2161f.svg`">
                <p class="has-text-weight-light">{{$t('低功耗')}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-top caution has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/424bcfa16691b11d78914146bb899227.jpg)`}">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <h2 class="title has-text-weight-normal">{{$t('小身材 大保镖')}}</h2>
            <p class="has-text-weight-light">{{$t('内置高响度警报喇叭，配合安防传感器使用可以发出声音警示，警示入侵者的同时也提醒自己和相关安保人员。')}}</p> 
            <div class="icons has-text-centered">
              <ul>
                <li>
                  <div><img :src="`${this.$store.state.cdn}/2018/11/ff14a87d0b763fda83977782d4ec8deb.svg`"></div>
                  <span class="has-text-weight-light">{{$t('智能门窗传感器')}}</span>
                </li>
                <li>
                  <img class="arrow" :src="`${this.$store.state.cdn}/2018/11/4ea37a74e474b040a763d4f9c7cc6ec9.svg`">
                </li>
                <li>
                  <div><img :src="`${this.$store.state.cdn}/2018/11/8cc4d4ee5b7087743c458fd90d6ad05b.svg`"></div>
                  <span class="has-text-weight-light">{{$t('智能家庭网关')}}</span>
                </li>
                <li>
                  <img class="arrow" :src="`${this.$store.state.cdn}/2018/11/4ea37a74e474b040a763d4f9c7cc6ec9.svg`">
                </li>
                <li>
                  <div><img :src="`${this.$store.state.cdn}/2018/11/1605c0dfc95a9cc5247f39ff4cbaa0ef.svg`"></div>
                  <span class="has-text-weight-light">{{$t('智能警示器')}}</span>
                </li>
              </ul>  
            </div>
            <img :src="`${this.$store.state.cdn}/2018/11/0b84d0be4a7b5bd20f3ca3caa4e964a3.png`">
          </div>  
        </div>
      </div>
    </section>
    <section class="section-left normal timing has-text-left" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/6de5802f419390796a312c8b7bbe9421.jpg)`}">
      <div class="container">
        <div class="columns">
          <div class="column is-6 white-background-color">
            <div class="columns">
              <div class="column is-10">
                <h2 class="title has-text-weight-normal">{{$t('联动场景 定时提醒')}}</h2>
                <p class="has-text-weight-light">{{$t('通过提前设置好智能场景，将 OOMI 智能警示器与家中家电及设备联动起来，即可实现 OOMI 智能警示器定时提醒功能。')}}</p>
                <div class="icons has-text-centered">
                  <ul>
                    <li>
                      <div><img :src="`${this.$store.state.cdn}/2018/11/d4145ca52e971216a4df887591cdc472.svg`"></div>
                      <span class="has-text-weight-light">{{$t('智能场景')}}</span>
                    </li>
                    <li>
                      <img class="arrow" :src="`${this.$store.state.cdn}/2018/11/4ea37a74e474b040a763d4f9c7cc6ec9.svg`">
                    </li>
                    <li>
                      <div><img :src="`${this.$store.state.cdn}/2018/11/1605c0dfc95a9cc5247f39ff4cbaa0ef.svg`"></div>
                      <span class="has-text-weight-light">{{$t('智能警示器')}}</span>
                    </li>
                    <li>
                      <img class="arrow" :src="`${this.$store.state.cdn}/2018/11/4ea37a74e474b040a763d4f9c7cc6ec9.svg`">
                    </li>
                    <li>
                      <div><img :src="`${this.$store.state.cdn}/2018/11/b3848a1662e263a5e605a985f8d16791.svg`"></div>
                      <span class="has-text-weight-light">{{$t('定时提醒')}}</span>
                    </li>
                  </ul>  
                </div>
              </div>
            </div>
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
    &.function
      height: 800px
      padding: 80px 0 0
      img 
        margin: 25px 0 10px
    &.caution    
      height: 800px
      padding: 80px 0 0
      .icons
        margin: 55px 0 50px
        ul
          justify-content: center
  &-left
    .title
      margin-bottom: 38px
    &.timing
      height: 700px
      background-repeat: no-repeat 
      background-position: right
      .is-6
        height: 740px
        @media screen and (min-width: 769px) {
          display: flex
          flex-direction: column
          justify-content: center
        }
      .icons
        margin: 55px 0 0
        ul
          justify-content: flex-start
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
        min-height: 750px     
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
          title: this.$t('智能警示器'),
          subtitle: 'OOMI Siren',
          content: this.$t('OOMI 智能警示器是一款基于Z-Wave无线协议的无线声光警示器，配合安防传感器使用可发出声音警示。当安防漏洞出现时，它会发出高音警报，配以闪烁灯光，并及时推送消息，让用户即使了解家中情况。 内置多种音效可供选择，结合电器设备使用还可以实现定时提醒的功能。'),
          img: `${this.$store.state.cdn}/2018/11/0a83b3a01dd8ea23cd5aca2fa5d48328.png`,
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
            item: this.$t('无线距离')
           },
           {
            column: "is-4", 
            value: this.$t('室内 40m')
           },
           {
            column: "is-2",  
            item: this.$t('最大电流')
           },
           {
            column: "is-4",  
            value: '100mA'
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
            item: this.$t('最大功率')
           },
           {
            column: "is-4",  
            value: '7W'
           },
           {
            column: "is-2",  
            item: this.$t('产品尺寸')
           },
           {
            column: "is-4", 
            value: this.$t('92.5 × 65 × 48mm（不含插脚）')
           },
           {
            column: "is-2",  
            item: this.$t('最大音量')
           },
           {
            column: "is-4",  
            value: '105dB'
           },
           {
            column: "is-2",  
            item: this.$t('工作环境')
           },
           {
            column: "is-4", 
            value: this.$t('温度：0 – 40℃ / 湿度：20 – 80% RH')
           }
         ]
      }
    }
  }
</script>