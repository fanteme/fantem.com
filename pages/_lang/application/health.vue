<template>
  <main>
    <application-header :mode="'health'"></application-header>
    <application-hero :hero="hero"></application-hero>
    <section class="application-features">  
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-10">
            <div class="subtitle has-text-centered has-text-black is-size-6 marginT">{{$t('OOMI智能健康场景系统可以实时快速、高效监测家里空气中漂浮的PM2.5、CO、VOC、甲醛、燃气等有害气体浓度，自动打开空净、新风系统进行优化空气。结合OOMI智能家居系统来控制温度、湿度之间的协调统一，为您提供一个“恒温、恒湿、恒氧、恒净”的家居环境，给您一个绿色的智能健康的生活空间。')}}</div>      
          </div>
        </div>
      </div>
      <div class="sectionA" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/10/1b0d24d69595d8fe0e77a629e2ab31a9.jpg)`}">
        <div class="container">
          <p class="caption has-text-centered has-text-white">{{$t('净化空气 安全守护')}}</p>
        </div>
      </div>
      <div class="sectionB center">
        <div class="container">
          <div class="columns">
            <div class="column center">
              <img :src="`${this.$store.state.cdn}/2018/10/bb4acd88227b951fa5c4a5e2e3918bd6.png`" alt="">
            </div>
            <div class="column">
              <p class="caption has-text-centered">{{$t('全面检测——智能有害气体传感器')}}</p>
              <div class="subtitle has-text-centered is-size-6">{{$t('稳定监测到可能影响您与家人身体健康的空气污染物的存在，具备良好的灵敏度和出色的重复性，避免其他气体干扰。当有害气体浓度超出预设值会触发警报，您的手机会收到预警信息提醒，提醒您及时作出相应的措施。')}}</div> 
              <div class="group">
                <ul class="center">
                  <li class="center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70"><g fill="none" fill-rule="evenodd" stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round"><path stroke-dasharray=".5 6" stroke-width="2" d="M15.93 19.456h37.21"/><path stroke-dasharray="15 10" stroke-width="2" d="M15.93 29.912h37.21"/><path stroke-dasharray=".5 6" stroke-width="2" d="M15.93 40.368h37.21"/><path stroke-dasharray="15 10" stroke-width="2" d="M15.93 50.823h37.21"/><path d="M68.568 35.14c0 18.797-15.237 34.034-34.034 34.034C15.737 69.174.5 53.937.5 35.14.5 16.343 15.737 1.106 34.534 1.106c18.797 0 34.034 15.237 34.034 34.034z"/></g></svg>
                    <span>{{$t('PM2.5')}}</span>
                  </li>
                  <li class="center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70"><g fill="none" fill-rule="evenodd"><path stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round" d="M68.961 34.534c0 18.797-15.238 34.034-34.034 34.034C16.13 68.568.893 53.331.893 34.534.893 15.737 16.13.5 34.927.5c18.796 0 34.034 15.237 34.034 34.034z"/><path stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.966 49.121h36.748s7.055-3.326 4.09-11.207c-3.004-7.993-12.846-7.46-12.846-7.46s-1.33-10.02-11.438-10.396c-13.406-.5-12.166 12.061-12.166 12.061s-6.455 1.527-7.68 6.582c-1.698 7.018 3.292 10.42 3.292 10.42zm27.12-29.175c3.635 1.688 3.635 6.491 3.635 6.491s4.284-.779 6.751 2.207"/><path fill="#E76C26" d="M33.154 42.794c-.41.205-1.243.41-2.308.41-2.729 0-4.562-1.807-4.562-4.935 0-3.332 2.101-5.153 4.82-5.153 1.127 0 1.82.244 2.088.385l-.32 1.218a4.029 4.029 0 0 0-1.718-.36c-1.896 0-3.307 1.283-3.307 3.833 0 2.41 1.256 3.755 3.282 3.755.666 0 1.345-.14 1.768-.345l.257 1.192zm2.512-4.614c0 1.986.897 3.807 2.589 3.807 1.718 0 2.602-1.783 2.602-3.871 0-1.872-.82-3.794-2.577-3.794-1.806 0-2.614 1.935-2.614 3.858m6.755-.116c0 3.41-1.833 5.14-4.217 5.14-2.5 0-4.101-2.025-4.101-4.986 0-3.09 1.716-5.114 4.229-5.114 2.602 0 4.089 2.14 4.089 4.96"/></g></svg>
                    <span>{{$t('CO')}}</span>
                  </li>
                  <li class="center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70"><g fill="none" fill-rule="evenodd" stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round"><path d="M69.354 35.336c0 18.796-15.238 34.034-34.035 34.034-18.796 0-34.034-15.238-34.034-34.034 0-18.797 15.238-34.034 34.034-34.034 18.797 0 34.035 15.237 34.035 34.034z"/><path stroke-width="2" d="M34.851 28.74v-8.26c0-2.585-1.493-3.2-3.316-1.367l-9.58 9.627h-3.232a2.547 2.547 0 0 0-2.547 2.547v8.098a2.547 2.547 0 0 0 2.547 2.547h3.232l9.58 9.628c1.823 1.833 3.316 1.217 3.316-1.37V28.74zm14.194 19.527a17.773 17.773 0 0 0 5.418-12.795c0-5.021-2.078-9.555-5.418-12.796m-6.755 4.047c2.866 1.858 4.768 5.079 4.768 8.749 0 3.67-1.902 6.892-4.768 8.75"/></g></svg>
                    <span>{{$t('VOC')}}</span>
                  </li>
                  <li class="center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70"><g fill="none" fill-rule="evenodd" stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round"><path d="M68.747 35.003c0 18.796-15.237 34.034-34.034 34.034C15.916 69.037.679 53.8.679 35.003S15.916.97 34.713.97c18.797 0 34.034 15.238 34.034 34.034z"/><path stroke-width="2" d="M36.226 37.119a5.906 5.906 0 1 1-11.812-.001 5.906 5.906 0 0 1 11.812 0zm-9.42-14.984a3.856 3.856 0 1 1-7.712 0 3.856 3.856 0 0 1 7.712 0zM21.88 47.871a3.857 3.857 0 1 1-7.714-.001 3.857 3.857 0 0 1 7.714.002zm33.38-10.167a5.906 5.906 0 1 1-11.812 0 5.906 5.906 0 0 1 11.813 0z"/><path d="M24.56 25.503l3.368 6.442m-1.756 9.223l-5.125 4.685m15.18-8.734l7.513.536"/></g></svg>
                    <span>{{$t('甲醛')}}</span>
                  </li>
                  <li class="center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70"><g fill="none" fill-rule="evenodd"><path stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round" d="M69.14 34.771c0 18.797-15.237 34.034-34.035 34.034-18.795 0-34.033-15.237-34.033-34.034C1.072 15.975 16.31.737 35.105.737c18.798 0 34.035 15.238 34.035 34.034z"/><path fill="#E76C26" d="M29.224 58.95S9.834 48.086 26.06 29.11c0 0 3.024 1.65 2.566 4.033 0 0 13.476-14.208 6.509-22.55 0 0 14.667 2.291 9.166 28.692 0 0 3.667-1.008 3.667-3.483 0 0 8.158 8.525-4.126 22.367 0 0 1.376-5.134-1.466-8.617 0 0-.366 6.6-3.85 7.425 0 0-6.05-8.89.093-19.617 0 0-14.667 7.792-9.396 21.588"/></g></svg>
                    <span>{{$t('燃气')}}</span>
                  </li>
                </ul>  
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sectionC borderB" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/10/079f9965526e6d217fb66dae76dbeed2.jpg)`}">
        <div class="container">
          <div class="columns">
            <div class="column is-offset-5">
              <p class="caption has-text-centered">{{$t('鲜氧通风——新风系统')}}</p>
              <div class="subtitle has-text-centered is-size-6">{{$t('氧气置换结合深层净化，带来每秒新鲜空气！持续送风让清新的空气充盈在每个角落，同时将脏空气挤出室外，并阻挡外部污染或灰尘进入，使室内空气变得无味、无菌、不闷有氧。具备快速除醛、净化雾霾、除尘抑菌、较少灰尘、去异味、恒氧清新等功能，还您一个清新的家。')}}</div> 
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">
            <p class="caption has-text-centered">{{$t('知冷暖 懂干湿——智能温湿度传感器')}}</p>
            <div class="subtitle has-text-centered is-size-6">{{$t('您可以随时了解家中环境情况，通过预设OOMI智能场景联动智能电器节点设备，开启空调、电热器、加湿器、除湿机等设备，给您一个舒适的家居环境。')}}</div> 
          </div>
        </div>  
      </div>
      <div><img :src="`${this.$store.state.cdn}/2018/10/29ce0aacb0a017b6f4b65d42e8b13b23.jpg`" alt=""></div>
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
      overflow: hidden

    .marginT
      margin-top: 67px 

    .sectionB
      background: #edf1f2 
      min-height: 738px 

      .group
        margin-top: 120px 
        ul
          display: flex

          li 
            flex-direction: column 
            margin: 0 23px 
    .sectionC
      min-height: 800px
    .borderB
      border-bottom: 12px solid #edf1f2

</style>

<script>
import ApplicationHeader from '~/components/ApplicationHeader.vue'
import ApplicationHero from '~/components/ApplicationHero.vue'
export default{
  components: { ApplicationHeader, ApplicationHero },
  data() {
    return {
        hero: {
          bg:   `${this.$store.state.cdn}/2018/10/caf9338ab4ad7701cdd85eaa4f4c4802.jpg`,
          title: this.$t('OOMI智能家居系统') + '—— ' + this.$t('健康模式'),
          subtitle: '',
          detail: this.$t(
          'OOMI智能家居系统支持家用电器远程无线智能操控，能让您轻松控制家里的电器，并监控电器的工作状态及能耗，实时检测家中的用电情况，分析各类电器的耗电量，根据您的用电数据，从源头优化用电组合，为您科学节省能源，让生活更便捷，更加环保，为您节约每一分钱！'
        )
        }  
    }
  }
}

</script>
