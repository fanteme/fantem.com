<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section class="section-top function">
      <div class="container">
        <div class="columns is-multiline is-gapless has-text-centered">
          <div class="column is-12">
            <h2 class="title has-text-weight-normal">{{$t('小身材 大作用')}}</h2> 
          </div>
          <div class="column is-7">
            <div class="columns is-multiline is-mobile">
              <div class="column is-6-mobile is-6-tablet">
                <img :src="`${this.$store.state.cdn}/2018/11/7afc68fab69a2625df94594a44e70914.png`">
                <p class="has-text-weight-light">{{$t('智能嵌入式一路开关')}}</p>
              </div>
              <div class="column is-6-mobile is-6-tablet">
                <img :src="`${this.$store.state.cdn}/2018/11/aa5fd9ac18c55c79d39943626b2ca67e.png`">
                <p class="has-text-weight-light">{{$t('智能嵌入式二路开关')}}</p>
              </div>
              <div class="column is-6-mobile is-6-tablet">
                <img :src="`${this.$store.state.cdn}/2018/11/f4ce85af57797685d61e6f46df937f21.png`">
              </div>
              <div class="column is-6-mobile is-6-tablet">
                <img :src="`${this.$store.state.cdn}/2018/11/9a521d953fbc6ab9844980c989dc1738.png`">
              </div>
            </div>
          </div>
          <div class="column is-5">
            <div class="columns is-multiline is-mobile svgs">
              <div class="column is-6-mobile is-6-tablet">
                <img :src="`${this.$store.state.cdn}/2018/11/987d93d299c71bf3a0091c6466c7885f.svg`">
                <p class="has-text-weight-light">{{$t('能耗监测')}}</p>
              </div>
              <div class="column is-6-mobile is-6-tablet">
                <img :src="`${this.$store.state.cdn}/2018/11/27e7a8379d97d3fdc22d21928a733d5f.svg`">
                <p class="has-text-weight-light">{{$t('自定义场景')}}</p>
              </div>
              <div class="column is-6-mobile is-6-tablet">
                <img :src="`${this.$store.state.cdn}/2018/11/7eca1229afdf31a712b864ae21cc3cd3.svg`">
                <p class="has-text-weight-light">{{$t('易安装')}}</p>
              </div>
              <div class="column is-6-mobile is-6-tablet">
                <img :src="`${this.$store.state.cdn}/2018/11/5ba9a896192f8cd93889352e3b7ca5c9.svg`">
                <p class="has-text-weight-light">{{$t('阻燃PC/ABS材质')}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
    <section class="section-justify monitor has-text-centered">
      <div class="container center">
        <div class="columns is-gapless">
          <div class="column is-5">
            <h2 class="title has-text-weight-normal">{{$t('能耗监测 负载功率监控')}}</h2>
            <p class="has-text-weight-light">{{$t('通过芯片监测内部温度，当产品过载或过热时会自动断开负载，并发出警示消息，让您及时了解家中的用电情况，让您用电更省心。')}}</p>  
          </div>
          <div class="column is-7">
            <img :src="`${this.$store.state.cdn}/2018/11/a886ba08aa5473c961049daa26c27eb7.png`">
          </div>
        </div>
      </div>
    </section>
    <section class="section-justify control has-text-centered">
      <div class="container center">
        <div class="columns is-gapless">
          <div class="column is-7">
            <img :src="`${this.$store.state.cdn}/2018/11/777ccd492973c058e6a0011761e535c7.png`">
          </div>
          <div class="column is-5">
            <h2 class="title has-text-weight-normal">{{$t('自定义场景控制')}}</h2>
            <p class="has-text-weight-light">{{$t('可设置不同的生活场景模式，实现电器设备的智能化控制。每一种模式都是一种享受，每一种氛围都恰到好处。')}}</p>  
          </div>
        </div>
      </div>
    </section>
    <section class="section-top setup has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/126c74f668c6339e35a866dc1876076b.jpg)`}">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <h2 class="title has-text-weight-normal">{{$t('易安装')}}</h2>
            <p class="has-text-weight-light">{{$t('无需改造原有线路，无需替换传统开关，只需要安装在家中普通开关的86底盒内，即可实现灯光的智能化控制，使传统开关智能化。')}}</p> 
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
    &.function
      padding: 90px 0 100px 
      .title
        margin-bottom: 70px
      .svgs
        height: 100%  
        img 
          margin: 25px 0 20px
    &.setup
      padding: 60px 0 0
      height: 700px  
      .title
        margin-bottom: 38px 
  &-justify
    height: 500px
    @media screen and (max-width: 768px) {
      height: 780px
    }  
    .title
      margin-bottom: 38px 
    .is-5
      display: flex
      flex-direction: column
      justify-content: center 
    &.monitor 
      background: #d2ebef
      .is-7
       margin-top: 65px
    &.control
      background: #efd8b9
      .is-7
        margin-top: 65px
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
          title: this.$t('智能嵌入式开关'),
          subtitle: 'OOMI In-Wall Switch',
          content: this.$t('智能嵌入式开关是一款基于Z-Wave无线通讯协议的智能开关设备，安装时无需改造原有线路，亦无需替换家中传统开关，只需要安装在家中普通开关的86底盒内，即可实现灯光的智能化控制，使传统开关智能化，同时也支持外部开关手动控制，并兼备能耗监测的功能。'),
          img: `${this.$store.state.cdn}/2018/11/5f7739fd1d78670377536e72a33b51b7.png`,
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
            value: this.$t('一路开关：10A / 二路开关：5A×2 路')
          },
          {
            column: "is-2",  
            item: this.$t('待机功耗')
          },
          {
            column: "is-4",  
            value: '1W'
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
            item: this.$t('工作环境')
          },
          {
            column: "is-4", 
            value: this.$t('温度：0 – 40℃ / 湿度：20 – 80% RH')
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
            item: this.$t('产品尺寸')
          },
          {
            column: "is-4", 
            value: this.$t('一路开关：42.5× 40 × 20.5mm / 二路开关：44× 40 × 20.5mm')
          }
        ]
      }
    }
  }  
</script>               