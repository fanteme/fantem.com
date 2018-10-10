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
      <div class="container-fluid">
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
export default{
  components: { ApplicationHeader, ApplicationHero },
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
        show: [false, false, false, false, false, false, false]
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
