<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section class="section-top control has-text-centered theme-background-color">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-8 is-offset-2">
            <h2 class="title has-text-weight-normal">{{$t('OOMI 智能场景面板')}}</h2>
            <p class="has-text-weight-light">{{$t('强大综合结构优化升级，触摸更顺畅，反应更灵敏。作为设备操控开关，智能场景面板既能对灯光进行操控，也可以触发个性化场景，另外按键的功能还可以进行自定义设置。')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-top application has-text-centered has-text-white" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/5a5ece84def9ff815c87d1ac549a8b63.jpg)`}">
      <div class="container">
        <div class="columns is-gapless">
          <div class="column center">
            <div class="wrap" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/80935062a5276a9b6f46574309bfd048.png)`}">
              <ul>
                <li class="center has-text-weight-light">{{$t('聚会')}}</li>
                <li class="center has-text-weight-light">{{$t('影院')}}</li>
                <li class="center has-text-weight-light">{{$t('睡眠')}}</li>
                <li class="center has-text-weight-light">{{$t('起床')}}</li>
              </ul>  
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-left operation gray-radial-gradient">
      <div class="container">
        <div class="columns is-multiline center">
          <div class="column is-6">
            <h2 class="title has-text-weight-normal">{{$t('电容屏触摸开关')}}</h2>
            <p class="has-text-weight-light">{{$t('如同手机触摸屏般的触摸手感，晶透顺滑，触摸灵敏，反应迅速稳定。')}}</p>  
          </div>
          <div class="column is-6 center">
            <img :src="`${this.$store.state.cdn}/2018/11/f7c59e7811c2f08b4d8e96ff5ec7ee96.png`">
          </div>
        </div>
      </div>
    </section>
    <section class="section-right glass has-text-white has-text-right" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/1c13580aaaecf3ae6ce3f37a0eb4a141.jpg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-6 is-offset-6">
            <h2 class="title has-text-weight-normal has-text-white">{{$t('玻璃面板 历久弥新')}}</h2>
            <p class="has-text-weight-light">{{$t('玻璃面板易清洁，防水防尘，历久弥新。内在配置让您倾心，外在颜值也足够吸引。')}}</p>  
          </div>
        </div>
      </div>
    </section>
    <section class="section-left normal has-text-white setting" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/10e0430480b2c406971b6a54a87b0a4e.jpg)`}">
      <div class="container-fluid">
        <div class="columns is-multiline">
          <div class="column is-5 wrap-content">
            <div class="columns">
              <div class="column is-7 is-offset-5">
                <h2 class="title has-text-weight-normal has-text-white">{{$t('个性化场景设定')}}</h2>
                <p class="has-text-weight-light">{{$t('单一按键可控制单场景，也可组合多场景。可设置不同的生活场景模式，实现电器设备的智能化控制。每一种模式都是一种享受，每一种氛围都恰到好处。')}}</p>  
              </div>
            </div>  
          </div>
        </div>
      </div>
    </section>
    <section class="section-right normal has-text-white lamp" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/86b39d9241b5161c86e748d930525721.jpg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-4 is-offset-8">
            <h2 class="title has-text-weight-normal has-text-white has-text-centered">{{$t('LED柔和指示灯')}}</h2>
            <p class="has-text-weight-light has-text-centered">{{$t('温柔指引 用心呵护。')}}</p>  
            <p class="has-text-weight-light has-text-centered">{{$t('LED柔和指示光，柔和光圈易辨识，不刺眼。方便老人、小孩夜晚起床准确找到开关位置，指明方向，告别摸黑起床的烦恼。')}}</p>  
            <p class="has-text-weight-light has-text-white subtitle">{{$t('墙面安装：')}}</p>
            <img :src="`${this.$store.state.cdn}/2018/11/150f1508938b3fffde0649dab89bf251.png`">
          </div>
        </div>
      </div>
    </section>
    <section class="section-left normal has-text-white craft" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/6595aeca86cb77ce12a7f10c158d902e.jpg)`}">
      <div class="container-fluid">
        <div class="columns is-multiline">
          <div class="column is-5 wrap-content">
            <div class="columns">
              <div class="column is-7 is-offset-5">
                <h2 class="title has-text-weight-normal has-text-white">{{$t('无边框 极简工艺美学')}}</h2>
                <p class="has-text-weight-light">{{$t('无曲边极简工艺美学，轻奢优雅。无框的设计与多种装修风格相融，浑然一体，亦能展现雅致品味。')}}</p>  
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
    &.control
      padding: 60px 0 65px
      .title
        margin-bottom: 38px
    &.application
      height: 1000px
      .column
        height: 1000px
        .wrap
          max-width: 451px
          height: 448px
          ul
            li 
              float: left
              width: 220px
              height: 224px 
              font-size: 38px
   &-right, &-left 
    background-repeat: no-repeat 
    background-position: center
    &:not(.normal)
      background-size: cover
    &:not(.full)  
      @media screen and (max-width: 768px) {
        padding-top: 450px
      }
      @media screen and (max-width: 616px) {
        padding-top: 230px
      }
    &.normal 
      @media screen and (max-width: 768px) {
        height: auto
        min-height: 550px
      }            
  &-left    
    .title
      margin-bottom: 38px
    &.operation
      padding: 105px 0 190px
    &.setting,&.craft
      padding: 133px 0
      background-position: right
      height: 600px
      @media screen and (max-width: 1280px) {
        padding: 63px 0
        background-position: center
      }  
      @media screen and (max-width: 768px) {
        padding: 43px 0
      } 
      .wrap-content
        padding: 90px 0 100px
    &.craft
      .wrap-content
        background: rgb(144,173,172)
     &.setting
      .wrap-content
        background: rgb(211,172,140)

  &-right
    &.glass
      height: 600px
      padding: 113px 0 390px 
      background-position: center
    &.lamp
      height: 800px
      padding: 105px 0 110px   
      .subtitle
        font-size: 20px
        margin-top: 60px

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
          title: this.$t('智能场景面板'),
          subtitle: 'OOMI Mote',
          content: this.$t('OOMI 智能场景面板是一款基于Z-Wave无线协议的智能控制面板，内置可充电电池，超长续航！智能场景面板支持无线操控，体积小巧可随身携带，也可固定安装。'),
          img: `${this.$store.state.cdn}/2018/11/854f1acd79022b986d7a167755e684de.png`,
          class: 'gray-radial-gradient'
      },
      parameters: [
        {
          column: "is-2", 
          item: this.$t('电池')
        },
        {
          column: "is-4", 
          value: this.$t('640mAh 可充电锂电池')
        },
        {
          column: "is-2",  
          item: 'USB'
        },
        {
          column: "is-4", 
          value: '5V – 1A'
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
          item: this.$t('无线功能')
        },
        {
          column: "is-4", 
          value: 'Z-Wave Plus'
        },
        {
          column: "is-2",  
          item: this.$t('工作环境')
        },
        {
          column: "is-4", 
          value: this.$t('温度：0 – 40℃ / 湿度：20 – 80% RH')
        },
        {
          column: "is-2",  
          item: this.$t('产品尺寸')
        },
        {
          column: "is-4", 
          value: this.$t('76.8 × 76.8 × 11mm（含底座）')
        }
      ]
    }
  }
}
</script>        