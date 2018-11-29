<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section class="section-right lining has-text-white has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/7849b977ef4bbcf49a8baff04f1553d2.jpg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-5 is-offset-7">
            <h2 class="title has-text-weight-normal has-text-white">{{$t('智能插座面板')}}</h2>
            <p class="has-text-weight-light">{{$t('智能插座面板选用优质PC/ABS面板材料，具备防水防尘、耐热抗压的功能，并设有防触电结构模块，保护您与家人的用电安全！然而精彩远不止于此，智能插座面板还具备独特的器材指示灯，RGB灯在工作状态时既能充当小夜灯，又能兼备能耗监测的功能。')}}</p>  
            <img :src="`${this.$store.state.cdn}/2018/11/f8ec2cfc7993c2eec8010cd008dd2778.png`">
          </div>
        </div>
      </div>
    </section>
    <section class="section-top panel has-text-centered theme-background-color">
      <div class="container">
        <div class="columns is-gapless">
          <div class="column">
            <h2 class="title has-text-weight-normal">{{$t('细节彰显高品质，人性化便利面板，把生活变成一种享受！')}}</h2> 
          </div>
        </div>
      </div>
    </section> 
    <section class="section-justify has-text-centered">
      <div class="container-fluid">
        <div class="columns is-gapless is-multiline">
          <div class="column is-6 panels">
            <div class="columns">
              <div class="column is-6 is-offset-5">
                <h2 class="title has-text-weight-normal">{{$t('无边框 大面板')}}</h2>
                <p class="content has-text-weight-light">{{$t('凌越传统边框设计，拒绝繁复，纯粹简约，别具风范。')}}</p>
                <p class="content has-text-weight-light">{{$t('无框的设计与多种装修风格相融，浑然一体，亦能展现雅致品味。')}}</p>
                <img :src="`${this.$store.state.cdn}/2018/11/3156f67b0bea4bf7c5751c50ab40889b.png`">
              </div>
            </div>
          </div>
          <div class="column is-6 craft">
            <div class="columns">
              <div class="column is-6 is-offset-1">
                <h2 class="title has-text-weight-normal">{{$t('高抛光工艺')}}</h2>
                <p class="content has-text-weight-light">{{$t('纯净无暇，赏心悦目，高贵不失典雅，时尚不失奢华。')}}</p>
                <img :src="`${this.$store.state.cdn}/2018/11/81abb22c8477b9fbb50b782843c0c78e.png`">
              </div>
            </div>
          </div>
          <div class="column is-6 safety">
            <div class="columns">
              <div class="column is-6 is-offset-5">
                <h2 class="title has-text-weight-normal">{{$t('安全防护门')}}</h2>
                <p class="content has-text-weight-light">{{$t('为孩子的好奇心护航，')}}</p>
                <p class="content has-text-weight-light">{{$t('防误插保护门设计，有效防止儿童触电危险。')}}</p>
                <img :src="`${this.$store.state.cdn}/2018/11/e18e72f8fefe954e7dbaedf52f3ea700.png`">
              </div>
            </div>       
          </div>
          <div class="column is-6 antiflaming">
            <div class="columns">
              <div class="column is-6 is-offset-1">
                <h2 class="title has-text-weight-normal">{{$t('阻燃PC/ABS材质')}}</h2>
                <p class="content has-text-weight-light">{{$t('防水防尘，耐热抗压，全面阻燃防老化，不褪色，安全可靠。！')}}</p>
                <img :src="`${this.$store.state.cdn}/2018/11/82d967f847d541ab06962ae12b1c272c.png`">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-left control has-text-centered">
      <div class="container" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/fed7ded7096ce2f0187e85ed94947ea9.jpg)`}">
        <div class="columns">
          <div class="column is-5 is-offset-1">
            <h2 class="title has-text-weight-normal has-text-white">{{$t('自定义场景控制')}}</h2>
            <p class="has-text-weight-light  has-text-white">{{$t('可设置不同的生活场景模式，实现电器设备的智能化控制。每一种模式都是一种享受，每一种氛围都恰到好处。')}}</p>  
            <img :src="`${this.$store.state.cdn}/2018/11/c87f64b2fe30c662dcba3ac35e0bb507.png`">
          </div>
        </div>
      </div>
    </section>
    <section class="section-top monitoring has-text-centered"  :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/0a4884bdd926004bef2c621d2974d165.jpg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h2 class="title has-text-weight-normal">{{$t('负载功率监控')}}</h2>
            <p class="has-text-weight-light">{{$t('当产品过载或过热时会自动断开负载，并发出警示消息，让您及时了解家中的用电情况，用电更省心。')}}</p>
          </div>
          <div class="column is-2">
            <img :src="`${this.$store.state.cdn}/2018/11/19a6665db0a105ed376e156352dbca36.svg`">
          </div>
        </div>
      </div>
    </section>
    <section class="section-top timing has-text-centered">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-8 is-offset-2">
            <h2 class="title has-text-weight-normal">{{$t('定时开关 打造智能生活')}}</h2>
          </div>
          <div class="column is-12">
            <div class="columns is-variable is-1">
              <div class="column morning">
                <img :src="`${this.$store.state.cdn}/2018/11/12d4a31160bf55981874bc2136bed90d.jpg`">
                <p class="has-text-weight-light has-text-white center">{{$t('早上7点，开关定时功能开启，面包机自动烤好面包，轻松享受美味早餐；')}}</p>
              </div>
              <div class="column afternoon">
                <p class="has-text-weight-light has-text-white center">{{$t('下午16点，开关定时功能开启，空气净化器启动，远离雾霾，让您拥有更健康的家；')}}</p>
                <img :src="`${this.$store.state.cdn}/2018/11/58baeddc8538e096c061c2c5c32f9856.jpg`">
              </div>
              <div class="column night">
                <img :src="`${this.$store.state.cdn}/2018/11/e2195fcaefaceb5420b88b6affd0dadb.jpg`">
                <p class="has-text-weight-light has-text-white center">{{$t('晚上21点，开关定时功能开启，热水器准备好热水，洗去疲惫，畅想舒心。')}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-left lamp">
      <div class="container" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/7e5f1430d00cd774e2d4f676b3d78503.jpg)`}">
        <div class="columns is-multiline">
          <div class="column is-5 is-offset-1 has-text-centered">
            <h2 class="title has-text-weight-normal has-text-white">{{$t('RGB柔和指示灯')}}</h2>
            <p class="has-text-weight-light has-text-white">{{$t('方便老人、小孩夜晚起床准确找到开关位置，充当小夜灯指明方向，告别摸黑起床的烦恼。')}}</p>  
            <img :src="`${this.$store.state.cdn}/2018/11/8335b93457a236e36e7f8eb43c55ddc9.png`">
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
    &.panel
      padding: 90px 0 
      margin-bottom: 0
    &.monitoring  
      height: 800px
      padding: 85px 0 665px
      img 
        margin-top: 74px
    &.timing  
      margin-top: 75px
      .title
        margin-bottom: 40px
      p
        height: 160px
        padding: 0 35px 
        overflow: hidden
      .morning
        p
          background-color: #f3b592
          margin-top: 2px 
      .afternoon
        p
          background-color: #7fcbc7
          margin-bottom: 8px   
      .night
        p
          margin-top: 2px 
          background-color: #ee9b93    
  &-right
    .title
      margin-bottom: 38px 
    &.lining
      background-position: right
      padding: 100px 0 180px
      img
        margin-top: 70px
  &-left 
    &.control 
      .container
        height: 800px  
        background-position: center 
      .columns
        padding: 90px 0 60px  
      img
        margin-top: 45px   
    &.lamp  
      margin-top: 60px
      .container
        height: 650px
        overflow: hidden
        .columns
          padding-top: 65px
      img
        margin-top: 45px       
  &-justify
      overflow: hidden
      .is-6 
        min-height: 600px
      .title
        margin: 70px 0 33px
        font-size: 36px 
      .content
        margin-bottom: 0 

      .panels
        background-image: linear-gradient( -45deg, #fefefe, #b4cfd8)
        img
          margin-top: 20px
      .craft 
        background-image: linear-gradient( 45deg, #fefefe, #dee0d6)
        img
          margin-top: 47px
      .safety
        background-image: linear-gradient( -135deg, #fefefe, #b4a39c)
        img
          margin-top: 15px
      .antiflaming
        background-image: linear-gradient( 135deg, #fefefe, #c6d6cb) 
        img
          margin-top :28px 
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
          title: this.$t('智能插座面板'),
          subtitle: 'OOMI PowerSocket',
          content: this.$t('智能插座面板是一款支持Z-Wave无线遥控或触摸控制的设备，支持自定义场景控制。产品安装时无需改造原有线路，只需替换传统插座，即可实现电器设备的智能化控制，并具备负载功率监测的功能。'),
          img: `${this.$store.state.cdn}/2018/11/967775d656880ccb4809f9662097b2a8.png`,
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
            value: '10A'
          },
          {
            column: "is-2",  
            item: this.$t('防护等级')
          },
          {
            column: "is-4",  
            value: 'IP20'
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
            item: this.$t('产品尺寸')
          },
          {
            column: "is-4", 
            value: '86 × 86 × 36.4mm'
          }
        ]
      }
    }
  }  
</script>   