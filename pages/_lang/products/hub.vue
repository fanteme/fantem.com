<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section class="section-top has-text-centered setting" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/aeaa24dbe11b58e8be8cb5de83f4b0f5.jpg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-8 is-offset-2">
            <p class="has-text-weight-light">{{$t('OOMI Hub虽是个网关，但却又不简单。OOMI Hub可以一键设置不同的生活情景模式，契合不同的情景需求！每一种模式都是一种享受，每一种氛围都恰到好处，生活在随意切换之间。')}}</p>
          </div>
          <div class="column is-12-mobile is-3-tablet">
            <img :src="`${this.$store.state.cdn}/2018/11/fccc141736cb313ef7ed78dd8da85445.png`">
          </div>
        </div>
      </div>
    </section>
    <section class="section-left normal has-text-centered connect theme-background-color" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/e4f48edc9d42679e82160b3b1cd9b430.jpg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-6 theme-background-color">
            <div class="columns is-multiline is-variable is-0">
              <div class="column is-10 is-offset-1">
                <p class="has-text-weight-light">{{$t('OOMI Hub智能家庭网关，小巧而又不简单！其功能强大，可通过连接其他OOMI智能节点设备，为您打造一个智能、安全、温馨的家！')}}</p>
              </div>
              <div class="column is-10 is-offset-1 imgs center">
                <img :src="`${this.$store.state.cdn}/2018/11/46f0c6bfa14ddb8a1e625dfd6b5249f0.svg`">
                <img :src="`${this.$store.state.cdn}/2018/11/2ead7eed7cadfa04507da8200e109006.svg`">
              </div>
              <div class="column is-10 is-offset-1">
                <div class="columns is-multiline is-mobile">
                  <div v-for="(icon, index) in icons" :key="index" class="column is-4-mobile is-3-tablet svg">
                    <div v-html="icon.svg"></div>
                    <span class="has-text-weight-light">{{icon.txt}}</span>
                  </div>
                </div>
              </div>
            </div>   
          </div>
        </div>
      </div>
    </section>
    <section class="section-top infrared-sensors has-text-centered has-text-white" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/9eb91207660f7db5d8edf91a138f8d66.jpg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h2 class="title has-text-white has-text-weight-normal">{{$t('人体红外感应器')}}</h2>
          </div>
          <div class="column is-8 is-offset-2">
            <p class="has-text-weight-light">{{$t('搭配OOMI智能家居套装，智能探测人或宠物移动，在OOMI Touch或手机上可以查看室内所有的运动轨迹，让您及时了解家中状况。')}}</p>
          </div>
          <div class="column is-12">
            <img :src="`${this.$store.state.cdn}/2018/11/54248ecc804575bbc41200c885a884df.png`">
          </div>
        </div>
      </div>
    </section>
    <section class="section-right theme-background-color normal alarm has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/133776d57584357386074a0986104e82.jpg)`}">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-6 theme-background-color">
            <div class="columns">
              <div class="column">
                <h2 class="title has-text-weight-normal">{{$t('声光报警 震慑小偷')}}</h2>
                <p>{{$t('红外人体感应，探测反应灵敏；布防报警声音响亮，有效震慑小偷。')}}</p>
                <div class="columns">
                  <div class="column is-12">
                    <div class="icons has-text-centered">  
                      <ul class="">
                        <li>
                          <div><img :src="`${this.$store.state.cdn}/2018/11/234e18c08678099f02a463a69bdb09c8.svg`"></div>
                          <span class="has-text-weight-light">{{$t('感应门窗开启')}}</span>
                        </li>
                        <li>
                          <img class="arrow" :src="`${this.$store.state.cdn}/2018/11/4ea37a74e474b040a763d4f9c7cc6ec9.svg`">
                        </li>
                        <li>
                          <div><img :src="`${this.$store.state.cdn}/2018/11/f4ebf0c6bc4bf28b581d2f82451b69ce.svg`"></div>
                          <span class="has-text-weight-light">{{$t('发现异常')}}</span>
                        </li>
                        <li>
                          <img class="arrow" :src="`${this.$store.state.cdn}/2018/11/4ea37a74e474b040a763d4f9c7cc6ec9.svg`">
                        </li>
                        <li>
                          <div><img :src="`${this.$store.state.cdn}/2018/11/0557be76d71bdffcc21567b91e91696c.svg`"></div>
                          <span class="has-text-weight-light">{{$t('感应人体移动')}}</span>
                        </li>
                        <li>
                          <img class="arrow" :src="`${this.$store.state.cdn}/2018/11/4ea37a74e474b040a763d4f9c7cc6ec9.svg`">
                        </li>
                        <li>
                          <div><img :src="`${this.$store.state.cdn}/2018/11/1605c0dfc95a9cc5247f39ff4cbaa0ef.svg`"></div>
                          <span class="has-text-weight-light">{{$t('发出报警声音')}}</span>
                        </li>
                      </ul>  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-left full light-operated full has-text-centered has-text-white" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/169654f7639a6eb73cae0bc16dec59dc.jpg)`}">
      <div class="container">
        <div class="columns">
          <div class="column is-6">
            <h2 class="title has-text-white has-text-weight-normal">{{$t('智能光控，亮度随环境改变')}}</h2>
            <p class="has-text-weight-light">{{$t('智能光控感应，总是为您的舒适着想！')}}</p>
            <p class="has-text-weight-light">{{$t('根据预设灯光阙值，智能识别家居环境中光线的明暗度，自动调节灯光亮度，感受美好生活。')}}</p>
            <div class="columns">
              <div class="column is-4 is-offset-2">
                <img :src="`${this.$store.state.cdn}/2018/11/2b1d444ce01ab09f77e8cafabc95e547.png`">
                <p class="has-text-weight-light">{{$t('颜色自定义')}}</p>
              </div>
              <div class="column is-4">
                <img :src="`${this.$store.state.cdn}/2018/11/875a866a73cb1188c75b3a9c59968183.png`">
                <p class="has-text-weight-light">{{$t('亮度自定义')}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-top set-up has-text-centered">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h2 class="title has-text-weight-normal">{{$t('Tap-and-Touch 便捷安装告别繁杂')}}</h2>
          </div>
          <div class="column is-8 is-offset-2">
            <p class="has-text-weight-light">{{$t('OOMI使用自主创新的Tap-and-Touch专利技术，刷新智能家居安装新定义！只需让OOMI Touch轻触其他OOMI产品，便可建立连接，实现OOMI系统对智能家居的全操控。')}}</p>
          </div>
        </div>
        <div class="columns">
          <div class="column is-4">
            <div class="wrap center"><img :src="`${this.$store.state.cdn}/2018/11/cdaaff6c0100a7075c48903fc6abbe7e.svg`"></div>
            <p class="has-text-weight-light">{{$t('轻触')}}</p>
          </div>
          <div class="column is-4">
            <div class="wrap center"><img :src="`${this.$store.state.cdn}/2018/11/728ed9fbae3d43cfdca16656c2ce984e.svg`"></div>
            <p class="has-text-weight-light">{{$t('连接')}}</p>
          </div>
          <div class="column is-4">
            <div class="wrap center"><img :src="`${this.$store.state.cdn}/2018/11/235fe07900a01863e1f2257456a879da.svg`"></div>
            <p class="has-text-weight-light">{{$t('操控')}}</p>
          </div>
        </div>
      </div>
    </section>    
    <product-parameter :parameters="parameters"></product-parameter>
  </main>  
</template>
<style lang="stylus">
.section
  &-top
    color: #3e3a39
    overflow: hidden
    background-size: cover
    .title
      margin: 73px 0 14px
       
    &.setting
      padding: 100px 0 48px
      img 
        margin-top: 31px
    &.infrared-sensors
      padding-bottom: 47px
      img
        margin-top: 42px
    &.set-up
      padding-bottom: 110px
      .wrap
        margin: 56px 0 12px
        height: 200px

  &-right, &-left
    color: #3e3a39  
    background-repeat: no-repeat 
    overflow: hidden
    &:not(.normal)
      background-size: cover
    &:not(.full)  
      @media screen and (max-width: 768px) {
        padding-top: 450px
      }
      @media screen and (max-width: 616px) {
        padding-top: 230px
      }
    &.normal, &.full
      height: 800px
      @media screen and (max-width: 768px) {
        height: auto
        min-height: 800px
      }   
    .title
      margin-bottom: 38px     
    .icons
      ul 
        display: flex
        justify-content: flex-end
        .arrow
          margin: 39px 10px 0 10px
        span 
          display: inline-block
          font-size: 14px
          padding-top :9px  

  &-left
    &.connect
      background-repeat: no-repeat 
      background-position: top right
      .is-6
        padding: 127px 0 120px 
      .svg
        padding: 10px 0
        span 
          font-size: 13px  
      .imgs 
        flex-direction: column 
        padding: 45px 0 35px
    &.light-operated
      padding: 140px 0 0
      img 
        margin-top: 72px
  &-right
    &.alarm
      .is-6
        padding: 109px 0 450px
      .icons
        margin-top: 80px
        ul
          justify-content: center

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
          title: this.$t('智能家庭网关'),
          subtitle: 'OOMI Hub',
          content: this.$t('OOMI Hub 智能家庭网关是OOMI智能家居系统的大脑，基于Z-Wave无线通讯协议，可使家居联动智能生活。OOMI Hub可以实时监测家中的人体移动数据和亮度，还可以和安防、灯光等智能节点设备进行联动！另外，OOMI Hub还具备360°红外学习模块，可学习并取代传统遥控器操控家中家电，让您的家变得智能化。'),
          img: `${this.$store.state.cdn}/2018/11/5fd7dd6c8a6df7809c2840f430a9771d.png`
      },
      parameters: [
        {
          column: "is-2", 
          item: this.$t('电源输入')
        },
        {
          column: "is-4", 
          value: '5V – 2A'
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
          value: this.$t('温度：0 – 40℃ / 湿度：20 – 80% RH ')
        },
        {
          column: "is-2",  
          item: this.$t('无线功能')
        },
        {
          column: "is-4", 
          value: this.$t('Z-Wave Plus, 802.11b/g/n (Wi-Fi), 蓝牙 4.0 ')
        },
        {
          column: "is-2",  
          item: this.$t('产品尺寸')
        },
        {
          column: "is-4", 
          value: '90 x 90x 36.3mm '
        }
      ],
      icons: [
        {
          svg: '<svg width="69" height="70" xmlns="http://www.w3.org/2000/svg"><g stroke="#3E3A39" fill="none" fill-rule="evenodd" stroke-linecap="round"><path d="M28.345 50.38a1.17 1.17 0 0 1-1.134-.879l-4.908-19.145-.076-.183a8.835 8.835 0 0 1-.153-.377 13.228 13.228 0 0 1-.856-4.7c0-7.325 5.958-13.283 13.282-13.283s13.282 5.958 13.282 13.282c0 1.77-.355 3.506-1.056 5.163L41.62 49.51c-.136.512-.6.87-1.132.87H28.345zM22.289 30.357H46.71M29.564 54.58h9.872M31.173 59.134h6.655" stroke-linejoin="round"/><path d="M68.5 35.473c0 18.778-15.222 34-34 34s-34-15.222-34-34 15.222-34 34-34 34 15.222 34 34z"/></g></svg>', 
          txt: this.$t('智能灯泡')
        },
        {
          svg: '<svg width="70" height="70" xmlns="http://www.w3.org/2000/svg"><g stroke="#3E3A39" fill="none" fill-rule="evenodd" stroke-linecap="round"><path d="M55.548 44.115c0 6.435-5.216 11.65-11.65 11.65H26.612c-6.433 0-11.649-5.215-11.649-11.65v-17.28c0-6.439 5.216-11.653 11.65-11.653h17.283c6.435 0 11.651 5.214 11.651 11.652v17.281zM43.724 27.009V37.58M26.79 27.009V37.58"/><path d="M33.387 44.264v-1.852a1.87 1.87 0 1 1 3.74 0v1.852M33.387 44.264h3.74"/><path d="M69.256 35.473c0 18.778-15.222 34-34 34s-34-15.222-34-34 15.222-34 34-34 34 15.222 34 34z"/></g></svg>', 
          txt: this.$t('智能插座')
        },
        {
          svg: '<svg width="70" height="70" xmlns="http://www.w3.org/2000/svg"><g stroke="#3E3A39" fill="none" fill-rule="evenodd" stroke-linecap="round"><path d="M52.9 19.928c-.017.02-.037.038-.055.057M51.801 17.36h.024" stroke-linejoin="round"/><path d="M52.9 19.928c.95-.948.275-2.569-1.063-2.567H19.023a1.903 1.903 0 0 0-1.904 1.904v32.812c0 1.34 1.622 2.014 2.569 1.064l.058-.052L52.9 19.93zM48.387 19.605l-.05.05M47.426 17.36h.021" stroke-linejoin="round"/><path d="M17.118 47.667v.03c0 1.171 1.418 1.761 2.245.93l.051-.044 28.973-28.978c.83-.83.24-2.245-.93-2.245" stroke-linejoin="round"/><path d="M69.231 35.473c0 18.778-15.222 34-34 34s-34-15.222-34-34 15.222-34 34-34 34 15.222 34 34z"/></g></svg>', 
          txt: this.$t('智能门窗传感器')
        },
        {
          svg: '<svg width="70" height="70" xmlns="http://www.w3.org/2000/svg"><g stroke="#3E3A39" fill="none" fill-rule="evenodd"><path d="M69.061 35.474c0 18.778-15.222 34-34 34s-34-15.222-34-34 15.222-34 34-34 34 15.222 34 34z" stroke-linecap="round"/><path d="M48.868 53.31H21.254a4.03 4.03 0 0 1-4.029-4.03V21.668a4.029 4.029 0 0 1 4.03-4.028h27.613a4.029 4.029 0 0 1 4.03 4.028V49.28a4.03 4.03 0 0 1-4.03 4.029z"/><path d="M24.027 35.474c0-6.094 4.94-11.034 11.034-11.034s11.035 4.94 11.035 11.034-4.941 11.034-11.035 11.034-11.034-4.94-11.034-11.034zM35.061 34.394v-4.407M32.801 40.961l-3.115-3.116M36.97 40.961l3.467-2.72"/></g></svg>', 
          txt: this.$t('智能红外传感器')
        },
        {
          svg: '<svg width="69" height="70" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M41.828 57.88H27.171a3.543 3.543 0 0 1-3.542-3.543V16.421a3.541 3.541 0 0 1 3.542-3.542h14.657a3.541 3.541 0 0 1 3.542 3.542v37.916a3.543 3.543 0 0 1-3.542 3.542z" stroke="#3E3A39" stroke-linecap="round"/><path d="M31.23 22.564a3.271 3.271 0 1 1 6.542 0 3.271 3.271 0 0 1-6.542 0z" stroke="#3E3A39" stroke-linecap="round"/><path d="M32.237 46.657a.654.654 0 1 1-1.308-.001.654.654 0 0 1 1.308 0M35.154 46.657a.654.654 0 1 1-1.308 0 .654.654 0 0 1 1.308 0M38.07 46.657a.654.654 0 1 1-1.308-.001.654.654 0 0 1 1.309 0M32.237 48.732a.654.654 0 1 1-1.308 0 .654.654 0 0 1 1.308 0M35.154 48.732a.654.654 0 1 1-1.308.001.654.654 0 0 1 1.308 0M38.07 48.732a.654.654 0 1 1-1.308 0 .654.654 0 0 1 1.309 0M32.237 50.81a.655.655 0 1 1-1.309.003.655.655 0 0 1 1.31-.003M35.154 50.81a.654.654 0 1 1-1.308.004.654.654 0 0 1 1.308-.004M38.07 50.81a.655.655 0 1 1-1.309.002.655.655 0 0 1 1.31-.002" fill="#3E3A39"/><path d="M68.5 35.38c0 18.777-15.222 34-34 34s-34-15.223-34-34c0-18.779 15.222-34 34-34s34 15.221 34 34z" stroke="#3E3A39" stroke-linecap="round"/></g></svg>', 
          txt: this.$t('智能水位传感器')
        },
        {
          svg: '<svg width="70" height="70" xmlns="http://www.w3.org/2000/svg"><g stroke="#3E3A39" fill="none" fill-rule="evenodd" stroke-linecap="round"><path d="M69.256 35.38c0 18.777-15.222 34-34 34s-34-15.223-34-34c0-18.779 15.222-34 34-34s34 15.221 34 34z"/><path d="M28.677 52.608h10.995M34.62 15.131h-1.041v-2.076a.51.51 0 0 1 .51-.51h.02a.51.51 0 0 1 .51.51v2.076zM30.313 15.131v-.489l.431-.516.43.503v.502zM28.677 15.131v43.084h11.017V20.42h2.142v-5.288zM28.725 20.42h11.017" stroke-linejoin="round"/></g></svg>', 
          txt: this.$t('智能窗帘电机')
        },
        {
          svg: '<svg width="70" height="70" xmlns="http://www.w3.org/2000/svg"><g stroke="#3E3A39" fill="none" fill-rule="evenodd"><path d="M69.231 35.38c0 18.777-15.222 34-34 34s-34-15.223-34-34c0-18.779 15.222-34 34-34s34 15.221 34 34z" stroke-linecap="round"/><path d="M46.45 55.68H24.013a2.74 2.74 0 0 1-2.74-2.741V29.038c0-7.709 6.249-13.959 13.959-13.959 7.709 0 13.959 6.25 13.959 13.959v23.901a2.74 2.74 0 0 1-2.741 2.741z"/><path d="M23.83 28.896c0-6.297 5.104-11.402 11.401-11.402S46.633 22.6 46.633 28.896c0 6.297-5.105 11.402-11.402 11.402-6.297 0-11.402-5.105-11.402-11.402zM35.231 19.903v5.031M29.788 29.307l3.557 3.557M40.675 29.307l-3.557 3.557"/></g></svg>', 
          txt: this.$t('智能空调红外传感器')
        },
        {
          svg: '<svg width="70" height="70" xmlns="http://www.w3.org/2000/svg"><g stroke="#3E3A39" fill="none" fill-rule="evenodd"><path d="M24.985 16.83c2.479-1.075 15.599-1.075 20.027 0 2.513.452 4.04 2.8 4.62 5.837 1.294 3.153 1.433 20.924 0 25.29-.974 3.006-2.385 5.074-4.62 5.838-2.554 1.388-17.131 1.11-20.027 0-2.241-.14-3.927-3.08-4.621-5.837-1.577-4.23-.744-22.971 0-25.291.436-2.886 2.949-5.732 4.62-5.836z"/><path d="M34.998 36.276a5.827 5.827 0 1 1 0 11.654 5.827 5.827 0 0 1 0-11.654z"/><path d="M69.061 35.379c0 18.778-15.222 34-34 34s-34-15.222-34-34 15.222-34 34-34 34 15.222 34 34z" stroke-linecap="round"/></g></svg>', 
          txt: this.$t('智能警示器')
        },
        {
          svg: '<svg width="69" height="70" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M68.5 35.283c0 18.778-15.222 34-34 34s-34-15.222-34-34 15.222-34 34-34 34 15.222 34 34z" stroke="#3E3A39" stroke-linecap="round"/><path d="M26.157 36.253a2.538 2.538 0 1 1-5.076 0 2.538 2.538 0 0 1 5.076 0M37.017 36.253a2.538 2.538 0 1 1-5.075 0 2.538 2.538 0 0 1 5.075 0M47.878 36.253a2.538 2.538 0 1 1-5.075 0 2.538 2.538 0 0 1 5.075 0" fill="#3E3A39"/></g></svg>', 
          txt: this.$t('更多设备')
        }
      ]
    }
  }
}
</script>