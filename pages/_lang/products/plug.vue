<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section class="section-top boderB remote-control has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/25b22aa90b7c298a3d9213f858134815.jpg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h2 class="title has-text-weight-normal">{{$t('智能插座给您带来全新的智能家居生活体验，让普通电器变智能！')}}</h2>
          </div>
          <div class="column is-8 is-offset-2">
            <h3 class="subtitle has-text-weight-normal">{{$t('手机远程遥控 让普通电器变智能')}}</h3>
            <p class="content has-text-weight-light">{{$t('远程开关，随时随地一键可控，家的温暖就在手掌边。各类电器的电源、开关状态一目了然，通过OOMI APP可随时查看，一键操作，控制电源开关，安心无忧。')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-top timing has-text-centered">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-10 is-offset-1">
            <h2 class="title has-text-weight-normal">{{$t('定时开关 联动OOMI智能设备 打造智能生活')}}</h2>
          </div>
          <div class="column is-12">
            <div class="columns is-variable is-1">
              <div class="column is-4">
                <img :src="`${this.$store.state.cdn}/2018/11/4104c7cd265c5bbabd8112fb90bb5f60.jpg`">
                <div class="center wrap">
                  <p class="has-text-weight-light has-text-white">{{$t('早上7点，开关定时功能开启，面包机自动烤好面包，轻松享受美味早餐；')}}</p>
                </div>
              </div>
              <div class="column is-4">
                <img :src="`${this.$store.state.cdn}/2018/11/83fe7ca646a0a6d97cf19b712c82c827.jpg`">
                <div class="center wrap">
                  <p class="has-text-weight-light has-text-white">{{$t('下午16点，开关定时功能开启，空气净化器启动，远离雾霾，让您拥有更健康的家；')}}</p>
                </div>
              </div>
              <div class="column is-4">
                <img :src="`${this.$store.state.cdn}/2018/11/52d1efcb1dc2ca5eb39c9ed13889f599.jpg`">
                <div class="center wrap">
                  <p class="has-text-weight-light has-text-white">{{$t('晚上21点，开关定时功能开启，热水器准备好热水，洗去疲惫，畅想舒心。')}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-justify  has-text-centered">
      <div class="container-fluid">
        <div class="columns is-multiline">
          <div class="column is-6 space-saving">
            <div class="columns">
              <div class="column is-6 is-offset-5">
                <h2 class="title has-text-weight-normal">{{$t('更小巧 更节约空间')}}</h2>
                <p class="content has-text-weight-light">{{$t('通过合理的尺寸设计，优化内部结构，使智能插座在一个插排上可同时使用多个，互不干扰。')}}</p>
                <img :src="`${this.$store.state.cdn}/2018/11/f2c71ac51b9ffb025fb673cfc2ed02d1.png`">
              </div>
            </div>
          </div>
          <div class="column is-6 safety" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/e159c0767303c433e561ee4295d42e8a.jpg)`}">
            <div class="columns">
              <div class="column is-6 is-offset-1">
                <h2 class="title has-text-weight-normal">{{$t('多重安全保护 尽享智能生活')}}</h2>
                <p class="content has-text-weight-light">{{$t('儿童安全门设计，提供防触电保护，即便是宝宝的小手指也伸不进去，犹如一块安全盾牌；')}}</p>
              </div>
            </div>
          </div>
          <div class="column is-6 detection">
            <div class="columns">
              <div class="column is-6 is-offset-5">
                <h2 class="title has-text-weight-normal">{{$t('能耗监测 高温提醒')}}</h2>
                <p class="content has-text-weight-light">{{$t('通过芯片监测内部温度，实时监控使用较大功率电器时智能插座的内部温度， 当温度过高时提醒用户或及时切断电源，减少危险的发生')}}</p>
                <img :src="`${this.$store.state.cdn}/2018/11/fac90224770c2a013bd89bc29e05ee89.png`">
              </div>
            </div>       
          </div>
          <div class="column is-6 antiflaming">
            <div class="columns">
              <div class="column is-6 is-offset-1">
                <h2 class="title has-text-weight-normal">{{$t('阻燃PC/ABS外壳')}}</h2>
                <p class="content has-text-weight-light">{{$t('采用PC/ABS高温阻燃材料，能有效阻燃防燃烧，符合国家安全标准，并且通过国家CCC认证，让您使用电器更放心！')}}</p>
                <img :src="`${this.$store.state.cdn}/2018/11/b8f4c55c87daf88c50deae3473cb12df.png`">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  
    <section class="section-top safety has-text-centered">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-10 is-offset-1">
            <h2 class="title has-text-weight-normal">{{$t('优质锡磷青铜 保证用电安全')}}</h2>
          </div>
          <div class="column is-8 is-offset-2">
            <p class="content has-text-weight-light">{{$t('使用优质锡磷青铜，作为内部重要的导电结构材料，具备弹性好、导电性强、耐磨损的特性，可最大限度避免因长时间通电而造成的发热、着火等安全问题。')}}</p>
          </div>
          <div class="column is-12">
            <img :src="`${this.$store.state.cdn}/2018/11/edbab46dd4c841764c39027dc5e19ca3.png`">
          </div>
        </div>
      </div>
    </section>
     <section class="section-left full electric-leakage has-text-left" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/9e6f6b8ea185e55885a42eff59c19ca5.jpg)`}">
      <div class="container">
        <div class="columns">
          <div class="column is-6">
            <h2 class="title has-text-weight-normal">{{$t('贴心接地保护 远离漏电担忧')}}</h2>
            <p class="content has-text-weight-light">{{$t('每一个转化插口均配有地极，在支持的国家都能将电器安全的接地，有效避免漏电而导致的触电或电器损坏等问题的发生。')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-right full desktop has-text-right" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/99efe8ba15f671e9888d1d47419d69c8.jpg)`}">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h2 class="title has-text-weight-normal">{{$t('您的桌面伴侣')}}</h2>
            <p class="content has-text-weight-light">{{$t('精工品质，内外兼修，品质工艺，时尚潮流。')}}</p>
            <p class="content has-text-weight-light">{{$t('用电也能时尚，生活如此便捷。')}}</p>
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
    &.remote-control
      padding: 65px 0 648px
      max-height: 900px 
      .title
        margin-bottom: 18px
      .subtitle
        font-size: 28px
        margin-bottom: 15px
    &.timing
      padding: 80px 0 8px
      .title
        margin-bottom: 45px
      .is-4
        position: relative
        transition: all 0.5s
        overflow: hidden 
        &:hover
          .wrap 
            opacity: 1 
        img 
          vertical-align: bottom  
        .wrap
          position: absolute 
          background-color: rgba(231,108,38,0.5)
          width: calc(100% - 10px)
          height: 106px
          bottom: 12px
          left: 5px
          opacity: 0 
          p 
            margin: 0 38px 
    &.safety
      padding: 80px 0 68px
      .title
        margin-bottom: 18px
      img 
        margin-top: 35px  
  &-justify
    overflow: hidden
    .is-6 
      height: 600px
      overflow: hidden
    .title
      margin: 70px 0 33px
      font-size: 36px  
    .space-saving
      background-image: linear-gradient( -45deg, #fefefe, #c8c5c8)
      img
        margin-top :37px
    .safety 
      background-position:center 
    .detection
      background-image: linear-gradient( -135deg, #fefefe, #b4a39c )
      img
        margin-top: 25px
    .antiflaming
      background-image: linear-gradient( 135deg, #fefefe, #c6d6cb) 
      img
        margin-top :45px 
  &-left, &-right
    background-position: center 
    background-repeat: no-repeat       

  &-left
    &.electric-leakage
      padding: 249px 0 330px
      @media screen and (max-width: 1280px) {
       padding: 129px 0 230px
      }
  &-right
    &.desktop
      padding: 103px 0 490px  
      @media screen and (max-width: 1280px) {
       padding: 169px 0 430px
      }
      .content
        margin: 0    


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
          title: this.$t('智能插座'),
          subtitle: 'OOMI Plug',
          content: this.$t('智能插座是一款支持Z-Wave无线遥控或手按Z-Wave按键控制的设备,体积小巧，可使常规家电实现无线智能操控，并且具备信号中继和负载功率实时监测的功能。'),
          img: `${this.$store.state.cdn}/2018/11/8948824b803f91b655f005b714aac097.png`
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
            item: this.$t('待机功耗')
          },
          {
            column: "is-4",  
            value: '0.8W'
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
            value: '63 × 63 × 61.5mm'
          }
        ]
      }
    }
  }  
</script>


