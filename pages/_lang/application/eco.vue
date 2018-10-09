<template>
  <main>
    <application-header :mode="'eco'"></application-header>
    <application-hero :hero="hero"></application-hero>
    <section class="application-features">
      <div class="container">
        <p class="caption has-text-centered">{{$t('智能节能 定时开启')}}</p>
        <div class="subtitle has-text-centered is-size-6">{{$t('OOMI智能家居节点设备支持定时开关的功能，您可以关闭没有必要长期待机的家电，智能控制厨卫家电，定时供断电，绿色节能且环保。')}}</div>      
        <div class="columns"><div class="column"><img :src="`${this.$store.state.cdn}/2018/10/188d4736ccb47a7d1fb3f32b35852c1a.jpg`" alt=""></div></div>
      </div>
      <div class="sectionA boderT" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/10/1fd2ee7a11164225c00ba9b779a9a232.jpg)`}">
        <div class="container">
          <div class="columns">
            <div class="column is-offset-7">
              <p class="caption has-text-centered">{{$t('一键离家 智能红外感应')}}</p>
              <div class="subtitle has-text-centered is-size-6">{{$t('一键离家：只需一键点击，即可离家，并且自动关闭家中的灯光及电器；智能红外感应：人来灯亮，人走灯灭，智能感应人体移动。')}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="sectionB" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/10/714ca8b5423d0367f8d90b0ae3f0a676.jpg)`}">
        <div class="container">
          <div class="columns is-left">
            <div class="column is-half">
              <p class="caption has-text-centered has-text-white">{{$t('智慧节能 能耗检测')}}</p>
              <div class="subtitle has-text-centered is-size-6 has-text-white">{{$t('实时监控家用电器工作状态及能耗，支持实际功率检测和用电量查询，使用OOMI智能家居系统就能轻松知晓。让您清楚了解家电的用电情况，更科学的使用电器，减少不必要的待机时间，节能又环保。')}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="sectionC marginT">
        <div class="container">
          <div class="columns">
            <div class="column is-6">
              <p class="caption has-text-centered">{{$t('远程开关 一键可控')}}</p>
              <div class="subtitle has-text-centered is-size-6">{{$t('手机远程遥控，随时随地一键可控。各类电器的电源、开关状态在手机上一目了然！每当离开家或许要出差时，再也不用为关灯或者电器断电问题担心，通过OOMI APP，在手机上可以随时查看，控制电源开关，一键操作，安心无忧。')}}</div>
              <div class="group has-text-centered">
                <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66"><g fill="none" fill-rule="evenodd" stroke="#E76C26"><path d="M65.073 32.786c0 17.832-14.455 32.287-32.286 32.287C14.955 65.073.5 50.618.5 32.786.5 14.956 14.955.5 32.787.5c17.83 0 32.286 14.455 32.286 32.286z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M25.158 18.267v4.905m0 8.9v6.358M21.82 26.85h21.458m-3.185 24.975H24.664a3.561 3.561 0 0 1-3.561-3.562V16.517a3.561 3.561 0 0 1 3.561-3.562h15.429a3.562 3.562 0 0 1 3.562 3.562v31.746a3.562 3.562 0 0 1-3.562 3.562z"/></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66"><g fill="none" fill-rule="evenodd" stroke="#E76C26"><path d="M65.496 32.786c0 17.832-14.455 32.287-32.286 32.287C15.38 65.073.923 50.618.923 32.786.923 14.956 15.38.5 33.21.5s32.286 14.455 32.286 32.286z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M23.166 51.636h20.113m-26.66-22.038c0-9.17 7.433-16.604 16.603-16.604 9.17 0 16.604 7.434 16.604 16.604 0 9.17-7.434 16.604-16.604 16.604-9.17 0-16.604-7.434-16.604-16.604zM33.221 46.2v5.432"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M30.25 29.278a3.31 3.31 0 0 1 2.267-2.677l.022-.024s-.497-.72-.2-2.124c.258-1.22.585-2.82.661-3.357.24-1.684-1.194-4.779-5.031-3.734-3.838 1.045-5.501 4.885-5.669 6.747-.173 1.921.38 3.71 1.771 5.017 1.539 1.45 4.759 1.993 6.097 1.43.052-.022.097-.046.14-.07a3.272 3.272 0 0 1-.058-1.208zm4.523 3.55a3.308 3.308 0 0 1-3.452-.624l-.031-.006s-.376.79-1.74 1.235c-1.186.386-2.735.903-3.238 1.105-1.58.634-3.542 3.423-.718 6.225 2.824 2.8 6.98 2.32 8.677 1.535 1.75-.81 3.022-2.183 3.46-4.042.486-2.058-.653-5.118-1.81-5.995a1.411 1.411 0 0 0-.131-.087c-.29.27-.627.498-1.017.655zm.813-5.691a3.31 3.31 0 0 1 1.185 3.302l.01.03s.872-.07 1.94.89c.927.834 2.15 1.916 2.576 2.25 1.338 1.05 4.735 1.356 5.749-2.49 1.015-3.846-1.48-7.206-3.008-8.282-1.577-1.111-3.402-1.525-5.231-.976-2.025.609-4.106 3.125-4.286 4.566a1.09 1.09 0 0 0-.01.156c.378.117.745.295 1.075.554z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M30.25 29.278a3.32 3.32 0 1 1 6.573.94 3.32 3.32 0 0 1-6.573-.94z"/></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="67" height="66"><g fill="none" fill-rule="evenodd" stroke="#E76C26"><path d="M65.92 32.786c0 17.832-14.455 32.287-32.286 32.287-17.83 0-32.287-14.455-32.287-32.287C1.347 14.956 15.803.5 33.634.5S65.92 14.955 65.92 32.786z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M46.102 44.643H20.744a3.875 3.875 0 0 1-3.876-3.875V24.683a3.875 3.875 0 0 1 3.876-3.875h25.358a3.874 3.874 0 0 1 3.875 3.875v16.085a3.875 3.875 0 0 1-3.875 3.875zm-12.68.183v3.335m-8.835-.02h17.671"/></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66"><g fill="none" fill-rule="evenodd" stroke="#E76C26"><path d="M65.344 32.786c0 17.832-14.455 32.287-32.286 32.287C15.227 65.073.771 50.618.771 32.786.771 14.956 15.227.5 33.058.5s32.286 14.455 32.286 32.286z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M43.748 37.144H23.31c-1.128 0-1.964-1.017-1.714-2.084l3.896-16.683c.182-.776.893-1.328 1.714-1.328H39.85c.822 0 1.533.552 1.715 1.329l3.898 16.682c.248 1.067-.587 2.084-1.715 2.084zm-10.22.003v11.944m-10.379.049h20.76M38.561 37.2v5.012"/></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="67" height="66"><g fill="none" fill-rule="evenodd" stroke="#E76C26"><path d="M65.768 32.786c0 17.832-14.455 32.287-32.286 32.287-17.832 0-32.287-14.455-32.287-32.287C1.195 14.956 15.65.5 33.482.5c17.83 0 32.286 14.455 32.286 32.286z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M44.916 38.169H23.155a3.096 3.096 0 0 1-3.097-3.096v-7.56a3.096 3.096 0 0 1 3.096-3.095h21.762a3.096 3.096 0 0 1 3.097 3.096v7.559a3.096 3.096 0 0 1-3.096 3.096zM22.95 31.956h22.173m-22.173 2.565h22.173m-20.696 7.162s1.017.984.907 1.965c-.128 1.148-1.25 1.807-1.163 3.26.08 1.379.768 2.05.768 2.05m3.845-6.103s1.017.985.907 1.966c-.128 1.148-1.248 1.807-1.163 3.26.08 1.378.768 2.05.768 2.05m3.845-8.448s1.017.984.907 1.965c-.128 1.148-1.249 1.807-1.163 3.26.081 1.379.768 2.05.768 2.05m8.032-7.664a.708.708 0 1 1-1.416 0 .708.708 0 0 1 1.416 0zm0 5.13a.708.708 0 1 1-1.416 0 .708.708 0 0 1 1.416 0zm-.707-5.147v5.08m-1.868-4.394a.707.707 0 1 1-.705 1.226.707.707 0 0 1 .705-1.226zm4.443 2.565a.709.709 0 0 1-.708 1.226.709.709 0 0 1 .708-1.226zm-4.811-1.96l4.399 2.54m-4.739-.58a.709.709 0 1 1 .708 1.229.709.709 0 0 1-.708-1.229zm4.443-2.565a.709.709 0 0 1 .708 1.226.709.709 0 0 1-.708-1.226z"/><path d="M38.74 45.15l4.4-2.54"/></g></svg>
                <span class="">... ...</span>
              </div>
            </div>
            <div class="column is-6 center"><img :src="`${this.$store.state.cdn}/2018/10/0cc6d02bfc23b49520bba6bce878b871.png`" alt=""></div>
          </div>
        </div>
      </div>
      <div class="container has-text-centered">
        <div class="columns is-centered">
          <div class="column is-11">
            <p class="caption">{{$t('组网简单 轻松拓展')}}</p>
            <div class="subtitle is-size-6">{{$t('组网设置超乎想象的简单！OOMI 使用自主创新的 Tap - and - Touch 专利技术，只需让 OOMI Touch 轻触其他 OOMI 产品，便可建立连接，实现 OOMI 系统对智能家电的全操控！且系统最大可支持232个节点设备，可轻松拓展新设备。')}}</div>
          </div>
        </div>
        <div class="columns"><div class="column center"><img :src="`${this.$store.state.cdn}/2018/10/f7982857ba3d7308dcb34e648d711321.jpg`" alt=""></div></div>
      </div>
      <div class="sectionD">

      </div>
    </section>
  </main>
</template>
<style lang="stylus">
  .application-features
    font-weight: 600
    color: #231815

    .caption 
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
    .subtitle
      font-weight: 600
      color: #231815
      margin-bottom: 47px
    
    .sectionA
      min-height: 800px
      margin-top: 33px

      &.boderT
        border-top: 12px solid #edf1f2

    .sectionB
      min-height: 860px 
    .sectionC
      background: #edf1f2
      padding: 70px 0
      &.marginT
        margin-top: 60px
      svg
        vertical-align: middle 
      span 
        color #e77636 
    .sectionD
      background: #edf1f2
      height: 75px
</style>


<script>
import ApplicationHeader from '~/components/ApplicationHeader.vue'
import ApplicationHero from '~/components/ApplicationHero.vue'
export default{
  components: { ApplicationHeader, ApplicationHero },
  data() {
    return {
        hero: {
          bg:   `${this.$store.state.cdn}/2018/10/8da7523e7a042f1ba690592ad6e50ec3.jpg`,
          title: this.$t('OOMI智能家居系统') + '—— ' + this.$t('节能模式'),
          subtitle: '',
          detail: this.$t(
          'OOMI智能家居系统支持家用电器远程无线智能操控，能让您轻松控制家里的电器，并监控电器的工作状态及能耗，实时检测家中的用电情况，分析各类电器的耗电量，根据您的用电数据，从源头优化用电组合，为您科学节省能源，让生活更便捷，更加环保，为您节约每一分钱！'
        )
        }  
    }
  }
}

</script>