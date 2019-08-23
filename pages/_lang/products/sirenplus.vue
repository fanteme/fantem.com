<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section class="section-top protect has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/f69c925aab1b3bb5637ad82b0fbe5430.jpg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-8 is-offset-2">
            <p class="has-text-weight-light">{{$t('OOMI 智能多功能警示器，超低功耗运行，支持现场警报威慑、智能门铃、紧急按钮及异常动静及时推送功能，为您的居家安全保驾护航。')}}</p> 
          </div>
          <div class="column is-6 is-offset-3">
            <div class="columns">
              <div class="column is-3">
                <img :src="`${this.$store.state.cdn}/2018/11/c6fed9145bb1bbff5f00aaf7632c2ffc.svg`">
                <p class="has-text-weight-light">{{$t('声光报警')}}</p>
              </div>
              <div class="column is-3">
                <img :src="`${this.$store.state.cdn}/2018/11/69529c80e08e3a652770001be6cb788b.svg`">
                <p class="has-text-weight-light">{{$t('门铃功能')}}</p>
              </div>
              <div class="column is-3">
                <img :src="`${this.$store.state.cdn}/2018/11/987d93d299c71bf3a0091c6466c7885f.svg`">
                <p class="has-text-weight-light">{{$t('低功耗')}}</p>
              </div>
              <div class="column is-3">
                <img :src="`${this.$store.state.cdn}/2018/11/5e2c8b1e8baa9f9a6b358a7678aae90c.svg`">
                <p class="has-text-weight-light">{{$t('紧急按钮')}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     <section class="section-top function has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/561c4e99b47faaacc634750f6048fd06.jpg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-8 is-offset-2">
            <h2 class="title has-text-weight-normal">{{$t('小身材 大保镖')}}</h2>
            <p class="has-text-weight-light">{{$t('内置高响度警报喇叭，配合安防传感器使用时，可在探测到安防漏洞或隐患时发出声音警示，警示入侵者的同时也提醒自己和相关安保人员。')}}</p> 
            <div class="icons has-text-centered">
              <ul>
                <li>
                  <div><img :src="`${this.$store.state.cdn}/2018/11/0557be76d71bdffcc21567b91e91696c.svg`"></div>
                  <span class="has-text-weight-light">{{$t('智能六合一传感器')}}</span>
                </li>
                <li>
                  <img class="arrow" :src="`${this.$store.state.cdn}/2019/03/4ea37a74e474b040a763d4f9c7cc6ec9.svg`">
                </li>
                <li>
                  <div><img :src="`${this.$store.state.cdn}/2018/11/8cc4d4ee5b7087743c458fd90d6ad05b.svg`"></div>
                  <span class="has-text-weight-light">{{$t('智能家庭网关')}}</span>
                </li>
                <li>
                  <img class="arrow" :src="`${this.$store.state.cdn}/2019/03/4ea37a74e474b040a763d4f9c7cc6ec9.svg`">
                </li>
                <li>
                  <div><img :src="`${this.$store.state.cdn}/2018/11/1605c0dfc95a9cc5247f39ff4cbaa0ef.svg`"></div>
                  <span class="has-text-weight-light">{{$t('智能警示器')}}</span>
                </li>
              </ul>  
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-top guarantee has-text-centered">
      <div class="container">
        <div class="columns is-multiline is-gapless">
          <div class="column is-12">
            <h2 class="title has-text-weight-normal">{{$t('一机多用 缔造智能安全新生活')}}</h2>
            <p class="has-text-weight-light">{{$t('可用作智能门铃或紧急按钮，白天访客提醒，晚上防盗报警！让您夜晚可以安心入睡，给您的睡眠增加多一份保障。')}}</p> 
          </div>
        </div>  
      </div>
      <div class="container-fluid wraper">
        <div class="columns is-gapless">
          <div class="column">
            <img :src="`${this.$store.state.cdn}/2018/11/7451aebe27701fa275c1331746b709c1.jpg`">
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
    &.protect
      height: 800px
      padding: 60px 0 0
      img 
        margin: 25px 0 10px
    &.function
      height: 640px 
      padding: 75px 0 0
      .icons
        margin-top: 25px
        ul
          justify-content: center
    &.guarantee
      padding: 85px 0 0
      .wraper
        margin-top: 40px
        img 
          vertical-align: bottom 
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
          title: this.$t('智能多功能警示器'),
          subtitle: 'OOMI Siren Plus',
          content: this.$t('OOMI 智能多功能警示器是一款基于Z-Wave无线协议的无线声光多功能警示器，内置多种音效可供用户选择。当安防漏洞出现时，它能发出高音警报，配以闪烁灯光，并及时推送消息，让用户即时知晓家中状况。 此外，它亦可作为智能门铃或紧急按钮使用。'),
          img: `${this.$store.state.cdn}/2018/11/4d520c656cff5321e6efa4ccef4bedab.png`,
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
            value: this.$t('92.5mm 长 ×65mm 宽 ×48mm 高（不含插脚）•  遥控器：81mm 长  ×35mm 宽 ×14mm 高')
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