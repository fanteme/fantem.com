<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section class="section-top featrue has-text-centered has-text-white" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/816358ce1b5b0d30f0f2365fea444efd.jpg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-10 is-offset-2">
            <div class="columns is-multiline center">
              <div class="column is-4">
                <img :src="`${this.$store.state.cdn}/2018/11/14891ecc4e1d8b01d99a733774120193.svg`">
                <p class="subtitle has-text-weight-light orange">{{$t('LED柔和指示灯')}}</p>
                <span class="has-text-weight-light">{{$t('温柔指引 用心呵护 LED柔和指示光，柔和光圈易辨识，不刺眼。方便老人、小孩夜晚起床准确找到开关位置，指明方向，告别摸黑起床的烦恼。')}}</span>
              </div>
              <div class="column is-4">
                <img :src="`${this.$store.state.cdn}/2018/11/0a934f26432f08e1f8314cfe43ab2857.svg`">
                <p class="subtitle has-text-weight-light orange">{{$t('无边框 极简工艺美学')}}</p>
                <span class="has-text-weight-light">{{$t('无曲边极简工艺美学，轻奢优雅。无框的设计与多种装修风格相融，浑然一体，亦能展现雅致品味。')}}</span>
              </div>
              <div class="column is-4">
                <img :src="`${this.$store.state.cdn}/2018/11/e308ba84b1456338c72ef347942ffc80.svg`">
                <p class="subtitle has-text-weight-light orange">{{$t('个性化场景设定')}}</p>
                <span class="has-text-weight-light">{{$t('单一按键可控制单场景，也可组合多场景。还可设置不同的生活情景模式，实现电器设备的智能化控制。每一种模式都是一种享受，每一种氛围都恰到好处。')}}</span>
              </div>
              <div class="column is-4">
                <img :src="`${this.$store.state.cdn}/2018/11/3de79f2d4c455408c9657b3c23c4da21.svg`">
                <p class="subtitle has-text-weight-light orange">{{$t('一键开关窗帘')}}</p>
                <span class="has-text-weight-light">{{$t('如同手机触摸屏般的触摸手感，晶透顺滑，触摸灵敏，反应迅速稳定。')}}</span>
              </div>
              <div class="column is-4">
                <img :src="`${this.$store.state.cdn}/2018/11/964e509c56e7b0197bd3b158f0bfb26e.svg`">
                <p class="subtitle has-text-weight-light orange">{{$t('玻璃面板 历久弥新')}}</p>
                <span class="has-text-weight-light">{{$t('玻璃面板易清洁，防水防尘，历久弥新。内在配置，让您倾心，外在颜值，也足够吸引。')}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-right life has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/65d61db44479ba9b2f2672fbef7d7ca0.jpg)`}">
      <div class="container">
        <div class="columns is-multiline center">
          <div class="column is-4 is-offset-7">
            <h2 class="title has-text-weight-normal has-text-white">{{$t('智能生活 轻松实现')}}</h2>
            <p class="has-text-weight-light has-text-white">{{$t('无需改线或重新布线，直接替换普通翘板按键开关，并通过连接OOMI智能家庭网关，联动OOMI相关智能节点设备，即可实现对电器设备的智能控制！真正做到安装灵活、省钱省力，让您轻松实现智能家居生活！')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-right linkage has-text-right" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/c170ed1f4c9489b9007fed92d6a83ea0.jpg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-6 is-offset-6">
            <h2 class="title has-text-weight-normal has-text-white">{{$t('多设备智能联动')}}</h2>
            <p class="has-text-weight-light has-text-white">{{$t('早上7点：定时开灯，叫你起床。清晨，用灯光引导你的身体慢慢苏醒；')}}</p>
            <p class="has-text-weight-light has-text-white">{{$t('晚上19点：下班回家，打开房门，灯光自动为您亮起，让您享受美妙的夜晚；')}}</p>
            <p class="has-text-weight-light has-text-white">{{$t('晚上22点：伸手一按OOMI智能场景面板即可关灯，再也不用跑到墙边去按开关。')}}</p>z

          </div>
        </div>
      </div>
    </section>
    <section class="section-top control has-text-centered has-text-white" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/61b3161fe1ae850ff902d88366290d32.jpg)`}">
      <div class="container">
        <div class="columns center">
          <div class="column is-8 is-offset-2">
            <p class="has-text-weight-light">{{$t('通过按键及无线命令可以控制开关，在保留传统开关功能的同时，还能实现智能远程操控，以及新增场景控制的功能！另外，其开关面板上的RGB 灯圈在显示其工作状态的同时，也保障了在夜间使用的方便性。')}}</p> 
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
    &.featrue
      padding: 105px 0 115px
      img 
        margin: 25px 0 10px
      .center
        align-items: stretch
      .subtitle
        font-size: 20px 
        margin-bottom: 18px
    &.control
      .columns
        height: 855px   
  &-right
    background-position: right 
    .title 
      margin-bottom: 38px
    &.life
      .columns
        height: 850px
    &.linkage 
      height: 855px
      padding: 75px 0 0
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
          title: this.$t('智能开关'),
          subtitle: 'OOMI WallSwitch',
          content: this.$t('智能开关 OOMI WallSwitch包含智能单火一路 / 二路开关、智能零火一路 / 二路 / 四路开关 、OOMI 智能触摸开关，是一款基于Z-Wave无线遥控和触摸控制的设备，可通过按键及无线命令控制开关。'),
          img: `${this.$store.state.cdn}/2018/11/6c48652b05b443ab65c33f36d7a4b30f.png`
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
            item: this.$t('待机功耗')
          },
          {
            column: "is-4",  
            value: this.$t('1.0W( 零火一路 / 一路 / 四路开关 )')
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
            value: '86 × 86 × 35mm '
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
            item: this.$t('产品颜色')
          },
          {
            column: "is-4", 
            value: this.$t('黑白两色')
          },
          {
            column: "is-2",  
            item: this.$t('最大电流')
          },
          {
            column: "is-4",  
            value: this.$t('3A( 单火一 、 二路 )  / 10A( 零火一路 )  / 8A×2 路 ( 零火二路 )  / 4A×4 路 ( 零火四路 ) ')
          }
        ]
      }
    }
  }  
</script>                   