<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section class="section-top lamplight has-text-white" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/8342595bf511ef7afa3618b6b5990a16.jpg)`}">
      <div class="container">
        <div class="columns is-gapless has-text-centered center">
          <div class="column is-6 is-offset-3">
            <p>{{$t('1600万+光色自由切，生活不重样！把灯光作为看不见的装饰品，轻触间完成室内风格的变化！')}}</p> 
          </div>
        </div>
      </div>
    </section> 
    <section class="section-right colour-modulation normal has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/10538a818be95261e2a75930941332e0.jpg)`}">
      <div class="container">
        <div class="columns">
          <div class="column is-5 is-offset-7 white-background-color">
            <h2 class="title has-text-weight-normal">{{$t('调色温 为生活添质感')}}</h2>
            <p class="has-text-weight-light">{{$t('不变的白光带来的是逃不脱的呆板，可调色温以及灯光强度。清醒白光，悠闲暖光随您选择！不呆板才顺心，让生活更有质感！')}}</p>  
            <img :src="`${this.$store.state.cdn}/2018/11/4b0ccc6e609f02eedbfb772726e4c196.png`">
            <p>{{$t('色温')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-top control has-text-centered has-text-white" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/b23752a42df53d49384119536819743d.jpg)`}">
      <div class="container">
        <div class="columns is-gapless">
          <div class="column">
            <h2 class="title has-text-weight-normal has-text-white">{{$t('智能控制 声音就是指挥师')}}</h2>
            <p class="has-text-weight-light">{{$t('OOMI Bulb智能灯泡支持智能语音控制，让您一步迈入智能照明时代。您可以通过天猫精灵语音助手，控制灯的开关。')}}</p> 
          </div>
        </div>
      </div>
    </section>
    <section class="section-justify customization has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/05ff58484979038b59261efcf90efad3.jpg)`}">
      <div class="container">
        <div class="columns is-gapless">
          <div class="column is-7">
            <img :src="`${this.$store.state.cdn}/2018/11/46a6574b4df4d68344973cffad76bb00.png`">
          </div>
        </div>
        <div class="columns">
          <div class="column is-5 is-offset-7">
            <h2 class="title has-text-weight-normal has-text-white">{{$t('定制专属灯光')}}</h2>
            <p class="has-text-weight-light has-text-white">{{$t('通过场景预设，一键开启您所需要的灯光氛围，不管是开启派对或是放松小憩，都可以帮您即刻实现您想要的氛围！')}}</p>  
          </div>
        </div>
      </div>
    </section>
    <section class="section-top linkage has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/0347a176049997204349e53fae18fd88.jpg)`}">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <h2 class="title has-text-weight-normal">{{$t('智能场景联动')}}</h2>
            <p class="has-text-weight-light">{{$t('提前预设智能场景，多设备联动，一键切换您想要的生活情境模式，简单至上，为您营造舒适美好的智能家居生活场景。')}}</p> 
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
      margin-bottom: 35px 
    &.lamplight
      .columns
        height: 860px
    &.control
      height: 800px
      padding-top: 70px 
    &.linkage
      height: 750px
      padding-top: 70px

  &-right
    &.colour-modulation
      background-position: left  
      .column
        padding: 80px 0 250px
        @media screen and (max-width: 768px) {
          padding: 80px 0 100px
          background-size: contain
        }
      img 
        margin-top: 120px  
  &-right, &-left 
    background-repeat: no-repeat 
    .title
      margin-bottom: 35px 

    &:not(.full)  
      @media screen and (max-width: 768px) {
        padding-top: 450px
         background-position: top center
      }
      @media screen and (max-width: 616px) {
        padding-top: 280px
      }
    &.normal
      height: 780px
      @media screen and (max-width: 768px) {
        height: auto
        min-height: 800px
      }
  &-justify
    &.customization
      height: 800px
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
          title: this.$t('智能灯泡'),
          subtitle: 'OOMI Bulb',
          content: this.$t('OOMI Bulb智能灯泡是一款基于Z-Wave无线通讯协议的智能LED灯泡，能实现任意颜色、亮度、颜色灰度之间的变换，还能与其他智能节点设备联动，同时也支持各种智能场景的设置。'),
          img: `${this.$store.state.cdn}/2018/11/a129899f7ee47d176ebe4a02802696ad.png`,
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
            item: this.$t('使用寿命')
          },
          {
            column: "is-4",  
            value: '30000h'
          },
          {
            column: "is-2",  
            item: this.$t('最大电流')
          },
          {
            column: "is-4",  
            value: '50mA'
          },
          {
            column: "is-2",  
            item: this.$t('色温')
          },
          {
            column: "is-4", 
            value: '2200K – 6500K'
          },
          {
            column: "is-2",  
            item: this.$t('最大功率')
          },
          {
            column: "is-4",  
            value: '9W'
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
            item: this.$t('最大亮度')
          },
          {
            column: "is-4", 
            value: '750 lumens'
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
            value: this.$t('Φ69.7mm×142.9mm 长')
          }
        ]
      }
    }
  }  
</script>           