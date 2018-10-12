<template>
  <main>
    <application-header></application-header>
    <application-hero :hero="hero"></application-hero>
    <section class="application-features">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="subtitle has-text-centered has-text-black is-size-6 marginT">{{$t('OOMI场景模式能充分满足您在生活中的各类需求，借助OOMI一系列智能节点设备打造出各种可调整、灵活性强、支持多场景应用的智能家居场景模式。OOMI系列智能节点设备功能的组合，不仅能帮您大大减少传统家居繁琐的单设备操作所带来的麻烦，同时也省去不必要的生活成本。另外，您可以通过OOMI智能控制平板、OOMI PRO APP或场景控制面板，根据您自己的需求和使用习惯，联动不同的OOMI智能节点设备，自行设置不同的场景模式！')}}</div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class=" columns is-gapless">
          <div class="column modeA is-multiline center positionR" @mouseover="showText(0)" @mouseleave="hideText(0)" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/10/6882d05aa030fd1a518ae995114aa6ac.jpg)`}">
            <h4 class="has-text-white center ">{{$t('起床模式')}}</h4>
            <transition enter-active-class="fadeInUp" leave-active-class="fadeOutDown">
              <div v-show="show[0]" class="text has-text-centered animated">{{$t('在模拟日出的灯光下起床，窗帘缓缓拉开，阳光洒入室内，温度自动调节至体感最舒适的温度。当您走进浴室及厨房时灯光自动打开，伴随着自己喜欢的音乐享受着早餐，用美好的心情迎接新的一天。')}}</div>
            </transition>
          </div>
          <div class="column modeA is-multiline center positionR" @mouseover="showText(1)" @mouseleave="hideText(1)" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/10/334ec0d82a86a8a8e386e8bd87103f0c.jpg)`}">
            <h4 class="has-text-white center">{{$t('睡眠模式')}}</h4>
            <transition enter-active-class="fadeInUp" leave-active-class="fadeOutDown">
              <div v-show="show[1]" class="text has-text-white has-text-centered animated">{{$t('轻触“睡眠模式”，家中的灯光逐渐变暗，起夜灯开启，家门自动上锁，电子设备自动断电，自动调节至适合睡眠的温度，安防系统也会随之进入布防状态，轻松享受安全睡梦状态。')}}</div>
            </transition>
          </div>
          <div class="column modeA is-multiline  center positionR" @mouseover="showText(2)" @mouseleave="hideText(2)" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/10/5a9a08afc5678b9d9934da2f33935fa9.jpg)`}">
            <h4 class="has-text-white center">{{$t('影院模式')}}</h4>
            <transition enter-active-class="fadeInUp" leave-active-class="fadeOutDown">
              <div v-show="show[2]" class="text has-text-white has-text-centered animated">{{$t('饭后，坐在客厅一键开启电影模式，影院布帘缓缓降下，窗帘会悄然关闭，灯光自动调节到合适的亮度，投影机开启，美好的影院时光就此开启！')}}</div>
            </transition>
          </div>
        </div>
      </div>
      <div class="container-flu id">
        <div class="columns is-multiline">
          <div class="column is-7" @mouseover="showText(3)" @mouseleave="hideText(3)">
            <div class="modeB center positionR" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/10/9ea31318e6cd053bd0cb0972a1484d52.jpg)`}">
              <h4 class="has-text-white center ">{{$t('会客模式')}}</h4>
              <transition enter-active-class="fadeInUp" leave-active-class="fadeOutDown">
                <div v-show="show[3]" class="text has-text-centered has-text-white animated fadeInUp">{{$t('客厅灯光打开并自动调节至预设亮度，营造一个适合会谈的舒适环境，更人性化的懂得您所有的需求。')}}</div>
              </transition>
            </div>
          </div>
          <div class="column is-5" @mouseover="showText(4)" @mouseleave="hideText(4)">
            <div class="modeB center positionR" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/10/2c8695801381298e043ec39729af632f.jpg)`}"> 
              <h4 class="has-text-white center ">{{$t('离家模式')}}</h4>
              <transition enter-active-class="fadeInUp" leave-active-class="fadeOutDown">
                <div v-show="show[4]" class="text has-text-centered animated fadeInUp">{{$t('只需一键点击，即可离家。点击离家模式按钮，自动关闭家中门窗及灯光。门磁、红外人体感应器、摄像头等自动打开，监控实时工作并设置安防报警，让您开启轻松工作。')}}</div>
              </transition>
            </div>
          </div>
      
          <div class="column is-5" @mouseover="showText(5)" @mouseleave="hideText(5)">
            <div class="modeB center positionR" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/10/2c8695801381298e043ec39729af632f.jpg)`}">
              <h4 class="has-text-white center ">{{$t('回家模式')}}</h4>
              <transition enter-active-class="fadeInUp" leave-active-class="fadeOutDown">
                <div v-show="show[5]" class="text has-text-centered has-text-white animated fadeInUp">{{$t('回家路上已为您自动调节好了温度、新风，窗帘开启。打开家门，智能安防系统关闭并触发开启预设好的智能场景，灯光、空调自动开启，窗帘缓缓拉开，窗户也自动推开换气，家中一切已做好迎接您的准备，回家即享舒适。')}}</div>
              </transition>
            </div>
          </div>
          <div class="column is-7"  @mouseover="showText(6)" @mouseleave="hideText(6)">
            <div class="modeB center positionR" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/10/5a9a08afc5678b9d9934da2f33935fa9.jpg)`}"> 
              <h4 class="has-text-white center ">{{$t('聚会模式')}}</h4>
              <transition enter-active-class="fadeInUp" leave-active-class="fadeOutDown">
                <div v-show="show['6']" class="text has-text-centered has-text-white animated">{{$t('窗帘关闭，灯光闪烁，周末邀上三五好友，来家中开启一场久违的Party，在闪烁的温暖灯光下，让老友情谊更加绵长。')}}</div>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <application-suit :suit="suit"></application-suit>
      <application-products :products="products"></application-products>
    </section>
  </main>
</template>
<style lang="stylus">
  .application-features
    font-weight: 600
    color: #231815

    .title 
      color: #3e3a39
      font-size: 36px
      margin: 50px auto

    .caption, h4 
      color: #3e3a39
      font-size: 36px
      margin: 50px auto

      &:after 
        display: block
        margin: 0 auto
        content: ''
        margin-top: 8px
        width: 73px
        height: 2px
        background-color: #ed7422
    h4 
      background: rgba(231,108,38,0.6)
      border-radius: 50%
      width: 178px
      height: 178px 
      flex-direction: column 

      &:after
        background-color: #fff 
    .subtitle
        font-weight: 600
        color: #231815
        margin-bottom: 47px

    .marginT
      margin-top: 60px    
    .modeA
      min-height: 900px
      border-bottom: 22px solid #edf1f2

    .modeB
      min-height: 685px
      overflow hidden

    .positionR
      position: relative
    .text
      position: absolute
      bottom: 47px 
      padding: 0 40px 

</style>

<script>
import ApplicationHeader from '~/components/ApplicationHeader.vue'
import ApplicationHero from '~/components/ApplicationHero.vue'
import ApplicationSuit from '~/components/ApplicationSuit.vue'
import ApplicationProducts from '~/components/ApplicationProducts.vue'

export default {
  components: { ApplicationHeader, ApplicationHero, ApplicationSuit, ApplicationProducts },
  data() {
    return {
        hero: {
          bg:   `${this.$store.state.cdn}/2018/10/befa44773cf80f3d742d9fcca7d3fc3d.jpg`,
          isnum: 'is-10',
          isalgin: '',
          isoffset: 'is-offset-1',
          title: this.$t('OOMI智能家居') + '—— ' + this.$t('场景模式'),
          titalign: 'has-text-left',
          titcolor: 'dark',
          subtitle: '',
          subalign: 'has-text-centered',
          subcolor: 'has-text-white',
          detail: '',
          detalign: 'has-text-centered',
          detcolor: 'has-text-white'
        },
        show: [false, false, false, false, false, false, false],
        suit:{
          title: this.$t('场景模式 套装选择'),
          subtitle: this.$t('场景模式套装选择（适用于有网络的小户型家庭）'),
          character: [this.$t('多元交互体验'), this.$t('联动其他智能设备'), this.$t('随心拓展配件')],
          item:[
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="42" height="49"><g fill="none" fill-rule="evenodd" stroke="#E76C26"><path d="M40.938 39.929c0 .934-.761 1.692-1.695 1.692H2.184c-.93 0-1.684-.758-1.684-1.692V2.872c0-.94.754-1.693 1.684-1.693h37.059c.934 0 1.695.754 1.695 1.693v37.057zM20.717 41.62v6.2m-20.217 0h40.438"/><path d="M34.94 21.4c0 7.859-6.364 14.222-14.228 14.222-7.854 0-14.217-6.363-14.217-14.222 0-7.854 6.363-14.222 14.217-14.222 7.864 0 14.229 6.368 14.229 14.222z"/><path d="M29.8 21.4c0 5.018-4.061 9.088-9.083 9.088-5.02 0-9.084-4.07-9.084-9.088 0-5.013 4.064-9.084 9.084-9.084A9.083 9.083 0 0 1 29.8 21.4z"/></g></svg>',
              title: `${this.$t('智能网关')}X1`
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="75" height="43"><g fill="none" fill-rule="evenodd" stroke="#E76C26"><path d="M1.067 41.585h72.458V1.415H1.067z"/><path d="M22.958 34.233h43.17V8.766h-43.17zM6.13 9.424h7.852M6.049 33.576h7.847m.085-12.079a3.926 3.926 0 1 1-7.852.001 3.926 3.926 0 0 1 7.853-.001z"/></g></svg>',
              title: `${this.$t('智能操控面板')}X1`
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="49"><g fill="none" fill-rule="evenodd" stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round"><path d="M47.036 4.484c1.223-1.22.353-3.308-1.371-3.306H3.414A2.451 2.451 0 0 0 .963 3.63V45.88c0 1.725 2.089 2.593 3.307 1.37l.077-.067L47.036 4.484z"/><path d="M.962 40.201v.04c0 1.506 1.826 2.266 2.891 1.196l.066-.058L41.223 4.067c1.07-1.067.308-2.89-1.198-2.888"/></g></svg>',
              title: `${this.$t('智能门窗传感器')}X1`
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="49"><path fill="none" stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round" d="M7.959 39.407a1.17 1.17 0 0 1-1.134-.88L1.917 19.385l-.076-.183c-.07-.17-.115-.275-.153-.377a13.237 13.237 0 0 1-.856-4.702C.832 6.799 6.79.84 14.114.84s13.282 5.959 13.282 13.282c0 1.769-.355 3.507-1.056 5.163l-5.107 19.252c-.135.513-.6.87-1.131.87H7.959zM1.903 19.383h24.422M9.178 43.607h9.872m-8.264 4.553h6.655"/></svg>',
              title: `${this.$t('智能灯泡')}X1`
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="49" height="49"><defs><path id="a" d="M0 49h1139.349V0H0z"/></defs><g fill="none" fill-rule="evenodd" transform="translate(-346)"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><path stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round" d="M366.481 6.177a1.89 1.89 0 0 0 0 2.667 1.89 1.89 0 0 0 2.666 0 1.888 1.888 0 0 0 .001-2.667 1.89 1.89 0 0 0-2.667 0zm-6.915 6.916a1.89 1.89 0 0 0 0 2.666 1.89 1.89 0 0 0 2.666 0 1.888 1.888 0 0 0 0-2.666 1.889 1.889 0 0 0-2.666 0zm-6.986 6.985a1.889 1.889 0 0 0 0 2.668c.734.734 1.93.734 2.666-.002a1.887 1.887 0 0 0 0-2.663 1.888 1.888 0 0 0-2.666-.003zm34.085 6.21a1.886 1.886 0 0 0-.001 2.665 1.89 1.89 0 0 0 2.667.001 1.89 1.89 0 0 0-.001-2.666 1.887 1.887 0 0 0-2.665 0zm-6.916 6.915a1.886 1.886 0 0 0-.001 2.666 1.89 1.89 0 0 0 2.667 0 1.886 1.886 0 0 0-2.666-2.666zm-6.988 6.988a1.887 1.887 0 0 0 0 2.665 1.888 1.888 0 0 0 2.666.001 1.889 1.889 0 0 0 0-2.667 1.886 1.886 0 0 0-2.666.001z" mask="url(#b)"/><path stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round" d="M357.594 24.7l17.677-17.676L368.748.5l-17.677 17.678c-5.444 5.443-5.445 14.27 0 19.716a13.88 13.88 0 0 0 3.817 2.706c-2.495-5.188-1.595-11.6 2.706-15.9zm13.193 13.194c-4.3 4.3-10.71 5.2-15.899 2.706a13.91 13.91 0 0 0 2.706 3.816c5.445 5.446 14.272 5.445 19.716 0l17.678-17.676-6.524-6.523-17.677 17.677z" mask="url(#b)"/></g></svg>',
              title: `${this.$t('智能灯带')}X1`
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="49"><g fill="none" fill-rule="evenodd" stroke="#E76C26" stroke-linecap="round"><path d="M47.582 34.05c0 7.439-6.03 13.467-13.47 13.467H14.13C6.693 47.517.662 41.489.662 34.05V14.072C.662 6.629 6.693.6 14.13.6h19.982c7.44 0 13.47 6.028 13.47 13.47V34.05zm-13.67-19.777v12.222M14.332 14.273v12.222"/><path d="M21.961 34.221v-2.14a2.162 2.162 0 1 1 4.323 0v2.14m-4.323 0h4.323"/></g></svg>',
              title: `${this.$t('智能插座')}X1`
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="49"><path fill="none" stroke="#E76C26" stroke-linecap="round" d="M39.928 47.817H7.785A7.247 7.247 0 0 1 .54 40.571V8.428a7.247 7.247 0 0 1 7.246-7.246h32.143a7.247 7.247 0 0 1 7.246 7.246v32.143a7.247 7.247 0 0 1-7.246 7.246zM.54 24.501h46.635H.54zM23.86 1.182v46.635V1.182z"/></svg>',
              title: `${this.$t('智能场景面板')}X1`
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="47"><g fill="none" fill-rule="evenodd" stroke="#E76C26"><path d="M42.394 46.336H5.365a4.322 4.322 0 0 1-4.321-4.322V4.985A4.322 4.322 0 0 1 5.365.665h37.029a4.322 4.322 0 0 1 4.322 4.32v37.03a4.323 4.323 0 0 1-4.322 4.321zM23.88 22.116v-5.642 5.642zm-2.894 8.41l-3.989-3.99 3.989 3.99zm5.338 0l4.439-3.483-4.439 3.483z"/><path d="M9.752 23.5c0-7.803 6.325-14.128 14.128-14.128 7.802 0 14.128 6.325 14.128 14.128 0 7.802-6.326 14.128-14.128 14.128-7.803 0-14.128-6.326-14.128-14.128z"/></g></svg>',
              title: `${this.$t('智能红外传感器')}X1`
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="99" height="30"><g fill="none" fill-rule="evenodd" stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round" stroke-width=".75"><path d="M85.928 28.842V5.364M5.9 16.152v2.223H.887a.511.511 0 0 1-.511-.51v-1.202c0-.282.229-.51.51-.51h5.015zM5.901 25.348H4.857l-1.102-.919 1.073-.92h1.073z"/><path d="M5.901 28.842h92V5.317H17.194V.743H5.901zM17.194 28.739V5.214"/></g></svg>',
              title: `${this.$t('智能窗帘电机')}X1`
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="49"><g fill="none" fill-rule="evenodd" stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round"><path d="M46.891 48.5H1.297V22.9c0-2.56 1.22-7.66 4.394-11.177 2.56-2.84 6.387-4.231 9.052-4.943 2.71-.721 6.242-.963 8.187-1.058 2.546-.12 8.357.56 8.357.56 5.312.997 8.151 2.247 10.68 4.694 3.265 3.164 4.924 8.219 4.924 10.63V48.5z"/><path d="M8.514 41.329a1.867 1.867 0 1 1-3.735 0 1.87 1.87 0 0 1 1.867-1.87 1.87 1.87 0 0 1 1.868 1.87zm5.586 0a1.795 1.795 0 1 1-3.59.001 1.795 1.795 0 0 1 3.59-.001zm5.658 0a1.795 1.795 0 1 1-1.794-1.796c.99 0 1.794.805 1.794 1.796zm5.66 0a1.797 1.797 0 1 1-3.594-.001 1.797 1.797 0 0 1 3.593.001zm5.657 0a1.794 1.794 0 1 1-3.59 0 1.795 1.795 0 1 1 3.59 0zm5.66 0a1.796 1.796 0 1 1-3.593 0 1.796 1.796 0 0 1 3.592 0zM41.046 48.5h5.562v-9.451h-5.562zM46.891 20.892V.5"/></g></svg>',
              title: `${this.$t('智能马达控制器')}X1`
            }
          ],
          img: `${this.$store.state.cdn}/2018/10/97021227ed08b8940ec88e3baa998709.png`,
          detail: this.$t('（*配件产品可以随心拓展，以上套装仅供参考）')          
        },
        products: {
          title: this.$t('场景模式控制相关产品'),
          character: [this.$t('智能网关'), this.$t('智能灯光控制'), this.$t('智能开关插座')],
          list: [
            {
              item:[
                {
                  img: `${this.$store.state.cdn}/2018/09/64f0bd13c54a37aaeff495ae5807d27c.png`,
                  title: this.$t('Cube智能家庭网关')
                },
                {
                  img: `${this.$store.state.cdn}/2018/09/22d3cd935c86ba20c1e426e907b31df8.png`,
                  title: this.$t('Hub智能家庭网关')
                },
                {
                  img: `${this.$store.state.cdn}/2018/09/2eacc02d2d200f0bd16fa07bde18b177.png`,
                  title: this.$t('智能操控平板')
                }
              ]
            }
          ]
        }     
    }
  },
  methods:{
    showText(idx){
      this.$set(this.show,idx,true)
    },
    hideText(idx){
      this.$set(this.show,idx,false)
    }
  }
}

</script>
