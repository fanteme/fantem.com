<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section class="section-top discolor has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/db4774d37ca9335c5a955b0fc5bb3424.jpg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-8 is-offset-2">
            <p class="has-text-weight-light has-text-white">{{$t('照明之外，光的魔术师！超乎想象的灵活柔性带状光源，绚丽多彩的灯光颜色。OOMI智能灯带长度在1 – 5m间，可根据需求剪裁。1600万无极变色，柔和均匀的灯光，打造出绚烂多彩的氛围，完美匹配任意场合，无论温馨抑或浪漫。')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-top setup has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/fe2ab9006f425bdf26e6134568a5e0d8.jpg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-6 is-offset-3">
            <h2 class="has-text-weight-normal title">{{$t('可撕背胶无损安装 简单方便')}}</h2>
            <p class="has-text-weight-light content">{{$t('对于细节我们无限追求，OOMI智能灯带定制了带易撕贴的专用3M背胶和离型纸，一切只为简单，可暗藏在吊顶、墙面或地面，让家居空间更出彩。')}}</p>
          </div>
          <div class="column is-12">
            <p class="has-text-weight-light">{{$t('3M背胶和离型纸')}}</p>
            <img :src="`${this.$store.state.cdn}/2018/11/e3f14045cb39443af4125f7b78b9f89d.png`">
          </div>
        </div>
      </div>
    </section>
    <section class="section-top illumination has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/47a0e190929ee408b13add025b6356d9.jpg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-6 is-offset-3">
            <h2 class="has-text-weight-normal title has-text-white">{{$t('DIY专属照明氛围')}}</h2>
            <p class="has-text-weight-light has-text-white">{{$t('OOMI智能灯带柔性带状的结构设计可以置放在家中任意角落，实现多种预设场景任意切换。其灯带提供的高效能优质光线能够有效切换家居照明基调，为家居营造不同氛围。')}}</p>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="columns imgs">
          <div class="column">
            <img :src="`${this.$store.state.cdn}/2018/11/5b7e1d903cae23712656611c704c31d8.jpg`">
          </div>
          <div class="column">
            <img :src="`${this.$store.state.cdn}/2018/11/0b8ab94f29ac6b682a766bb4eabb685e.jpg`">
          </div>
          <div class="column">
            <img :src="`${this.$store.state.cdn}/2018/11/4b232a7d1efe295db069e09a7e1477cd.jpg`">
          </div>
          <div class="column">
            <img :src="`${this.$store.state.cdn}/2018/11/f20082d4a2bf3cba5f2c124ffe588649.jpg`">
          </div>
        </div>       
      </div>
    </section>
    <section class="section-top control has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/dd8d418e4e92de338ae428f6b51c9719.jpg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-6 is-offset-3">
            <h2 class="has-text-weight-normal title">{{$t('调色温 为生活添质感')}}</h2>
            <p class="has-text-weight-light">{{$t('可调色温控制以及灯光强度，绚丽多彩的灯光颜色随您选择，感受流光溢彩的氛围，让生活更有质感！')}}</p>
          </div>
          <div class="column is-12">
            <div class="columns is-multiline">
              <div class="column is-5">
                <div class="wrap-color center" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/67e402d6ac52c8c1ccf588466897e376.png)`}">
                  <p>{{$t('灯光颜色')}}</p>
                </div>
              </div>
            </div>
            <div class="columns is-multiline">
              <div class="column is-5">
                <div class="wrap-strength center" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/b39e89a93512f9fd887137876b2a0421.png)`}">
                  <p class="center">{{$t('灯光强度')}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-top Preferences has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/3336a89055b00bb436bb3ea244c88846.jpg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-6 is-offset-3">
            <h2 class="has-text-weight-normal title">{{$t('智能设备联动 多场景预设')}}</h2>
            <p class="has-text-weight-light">{{$t('OOMI智能灯带通过Oomi智能家居系统能轻松实现智能节点设备之间的联动，随心制造专属您的光线氛围，随心切换场景照明，为家居环境营造出不同的氛围，每一个时刻都会更加美妙自然。')}}</p>
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
      margin-bottom: 34px 
    &.discolor
      padding: 83px 0 620px
      max-height: 780px
    &.setup
      padding: 83px 0 95px 
      max-height: 780px 
      .content
        margin-bottom: 25px
    &.illumination
      padding: 83px 0 175px 
      .imgs
        margin-top: 95px
    &.control
      padding: 83px 0 95px 
      max-height: 780px     
      .wrap
        &-color
          width: 256px
          height: 256px
          margin: 50px auto 0
        &-strength
          width: 314px
          height: 51px
          margin: 30px auto 0

    &.Preferences
      padding: 83px 0 550px
      max-height: 780px 

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
          title: this.$t('智能灯带'),
          subtitle: 'OOMI Colorstrip',
          content: this.$t('OOMI智能灯带是一款基于Z-Wave无线通讯协议的智能LED灯带，能实现不同颜色、亮度和颜色灰度之间的变换，可营造出适合身心的灯光环境，同时支持各种场景和智能场景设置。'),
          class: 'black'
      },
      parameters: [
        {
          column: "is-2", 
          item: this.$t('电源输入')
        },
        {
          column: "is-4", 
          value: '12V-2A'
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
          item: this.$t('最大功率')
        },
        {
          column: "is-4", 
          value: '24W'
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
          item: this.$t('待机功耗')
        },
        {
          column: "is-4", 
          value: '0.8W'
        },
        {
          column: "is-2",  
          item: this.$t('产品尺寸')
        },
        {
          column: "is-4", 
          value: this.$t('控制器：49.5 × 49.5 × 22mm  灯带：5000 × 10 × 0.3mm')
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