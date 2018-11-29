<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section class="section-mode theme-background-color">
      <div class="container">
        <div class="columns is-multiline">
          <div v-for="(mode, index) in modes" :key="index" class="column is-3 center">
            <div v-if="mode.icon" class="wrap center" v-html="mode.icon"></div>
            <p v-if="mode.more" class="more">{{mode.more}}</p>
            <p v-else class="title has-text-weight-normal">{{mode.txt}}</p>
          </div>
        </div>  
      </div> 
    </section>
    <section class="section-top function tint-background-color has-text-centered" >
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h2 class="title has-text-weight-normal has-text-white">{{$t('小身板，大功能，方寸之间蕴含多种可能')}}</h2>
          </div>
          <div class="column is-10 is-offset-1">
            <p class="content has-text-weight-light has-text-white">{{$t('OOMI Touch智能家庭控制平板，小身板，大功能，方寸之间蕴含多种可能！7英寸的触摸屏操控界面可实现智能家居设备操控、智能场景自定义、监控查询、设备查询、以及能耗监控等功能。另外还具有按键功能自定义、360°红外学习模块功能，可学习家中遥控器，轻松变身万能遥控，从此告别一器一遥控的时代！Touch 能做的远超你所想。')}}</p>
          </div>
          <div class="column is-12">
            <img :src="`${this.$store.state.cdn}/2018/11/97c57060dae96633b0fbb6ce6eb99d59.png`">
          </div>
        </div>
      </div>
    </section>
    <section class="section-top infraredmodes has-text-centered has-text-white" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/7699848710c9b1a174d63dc3a5712d5b.jpg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h2 class="title has-text-weight-normal has-text-white">{{$t('360°红外学习模块，让普通电器变智能')}}</h2>
          </div>
          <div class="column is-8 is-offset-2">
            <p class="content has-text-weight-light">{{$t('学习家中遥控器，轻松变身万能遥控。')}}</p>
            <p class="content has-text-weight-light">{{$t('远程遥控开关，随时随地一键可控，家的温暖就在手上。')}}</p>
          </div>
          <div class="column is-12 center icons">
            <div class="columns is-multiline center">
              <div class="svg column" v-for="(item, index) in infraredmodes" :key="index" v-html="item.icon">
            </div>
            </div>
          </div>
          <div class="column is-12">
            <img :src="`${this.$store.state.cdn}/2018/11/5c1eccd9646a7eabb48ac2b85ba1e0a2.png`">
          </div>
        </div>
      </div>
    </section> 
    <section class="section-top scene has-text-centered">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h2 class="title has-text-weight-normal">{{$t('智能场景自定义')}}</h2>
          </div>
          <div class="column is-10 is-offset-1">
            <p class="content has-text-weight-light">{{$t('可设置不同的生活情景模式，实现电器设备的智能化控制。每一种模式都是一种享受，每一种氛围都恰到好处。')}}</p>
          </div>
        </div>
      </div>
      <div class="container-fluid center">
        <div class="columns is-variable is-1 imgs">
          <div class="column center">
            <img :src="`${this.$store.state.cdn}/2018/11/451a36cf5e50be256c4d1e05cd5a9beb.jpg`">
          </div>
          <div class="column center">
            <img :src="`${this.$store.state.cdn}/2018/11/a61e295ea67b1bb2e62c0a54578fcc81.jpg`">
          </div>
          <div class="column center">
            <img :src="`${this.$store.state.cdn}/2018/11/aa769d2bcd223394ef38d8c5e6f18bc7.jpg`">
          </div>
        </div>
      </div>
    </section>
    <section class="section-top detection brown-radial-gradient has-text-white has-text-centered">
      <div class="container">
        <div class="columns is-multiline is-variable is-0">
          <div class="column is-12">
            <h2 class="title has-text-weight-normal has-text-white">{{$t('能耗监测 负载功率监控')}}</h2>
          </div>
          <div class="column is-10 is-offset-1">
            <p class="content has-text-weight-light">{{$t('当产品过载或过热时会出警示消息，让您及时了解家中家中用电情况，并可对室内OOMI智能节点设备进行查询和控制，让您用电更省心。')}}</p>
          </div>
          <div class="column is-12">
            <img :src="`${this.$store.state.cdn}/2018/11/65b90a0c7983c8a9187a777179cbd532.png`">
          </div>
        </div>
      </div> 
    </section>
    <section class="section-top monitoring has-text-centered">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h2 class="title has-text-weight-normal">{{$t('时刻掌握监控情况')}}</h2>
          </div>
          <div class="column is-8 is-offset-2">
            <p class="content has-text-weight-light">{{$t('可以通过本地存储卡或云录像，将摄像机前发生的一切记录下来，你关心的任何画面都不会错过。')}}</p>
          </div>
          <div class="column is-12">
            <img :src="`${this.$store.state.cdn}/2018/11/098adf45dd2bc12e6c970a414033e11a.jpg`">
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
    color: #3e3a39
    &.tint-background-color
      background: #969eab
    .title
      padding: 95px 0 21px
    .content
      font-size: 16px
      margin: 0
    .icons
      padding: 48px 0 15px
      .svg
        margin: 0 35px
    &.function
      padding-bottom: 60px
      img 
        margin-top: 25px
    &.infraredmodes
      padding-bottom: 52px 
      height: 900px 
      @media screen and (max-width: 1280px) {
        height: auto
      }
    &.scene  
      padding-bottom: 8px 
      .imgs
        margin-top: 65px
    &.detection
      img 
        vertical-align: bottom 
        margin: 13px 0 0
    &.monitoring
      img 
        margin:53px 0 98px     

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
        modes:[
          {
            icon: '<svg width="77" height="82" xmlns="http://www.w3.org/2000/svg"><g stroke="#3E3A39" stroke-width="1.5" fill="none" fill-rule="evenodd"><path d="M4.352 22.937l-3.23-3.191 3.23-3.202M20.054 22.937l3.24-3.191-3.24-3.202M1.121 19.746h22.173M8.977 11.968L12.2 8.772l3.237 3.196M8.977 27.503l3.224 3.205 3.237-3.205M12.201 8.772v21.937M49.49 37.916s20.146 2.765 24.83 10.677c4.683 7.924-3.984 32.638-3.984 32.638H36.137L14.375 54.973a4.146 4.146 0 0 1 .197-5.524c3.98-4.144 10.626-4.198 14.668-.108l7.366 7.437V12.18c0-3.537 2.879-6.399 6.44-6.399 3.56 0 6.444 2.862 6.444 6.4v25.734z"/><path d="M32.286 16.44a11.235 11.235 0 0 1-.817-4.223c0-6.32 5.184-11.449 11.565-11.449 6.388 0 11.566 5.13 11.566 11.45 0 1.476-.283 2.898-.798 4.192"/></g></svg>',
            txt: this.$t('设备操控')
          },
          {
            icon: '<svg width="79" height="82" xmlns="http://www.w3.org/2000/svg"><g stroke="#3E3A39" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M77.927 26.708L39.711.769 1.49 26.708 39.71 52.65z"/><path d="M1.489 41.003L39.71 66.936l38.217-25.933"/><path d="M1.489 55.29L39.71 81.232l38.217-25.94"/></g></svg>',
            txt: this.$t('智能场景自定义')
          },
          {
            icon: '<svg width="83" height="82" xmlns="http://www.w3.org/2000/svg"><g stroke="#3E3A39" stroke-width="1.5" fill="none" fill-rule="evenodd"><path d="M8.101 40.86c0-18.232 14.9-33.014 33.282-33.014 18.383 0 33.287 14.782 33.287 33.014 0 18.231-14.904 33.013-33.287 33.013S8.1 59.09 8.1 40.86z"/><path d="M41.267.769v15.016M.707 41h15.139M41.267 81.231V66.215M81.826 41H66.688M58.986 41s-6.903 6.07-17.72 6.07C30.452 47.07 23.549 41 23.549 41s6.903-6.07 17.719-6.07c10.816 0 17.719 6.07 17.719 6.07z" stroke-linecap="round" stroke-linejoin="round"/><path d="M47.094 40.884c0 3.193-2.61 5.78-5.828 5.78-3.217 0-5.826-2.587-5.826-5.78 0-3.192 2.609-5.78 5.826-5.78 3.219 0 5.828 2.588 5.828 5.78z" stroke-linecap="round" stroke-linejoin="round"/></g></svg>',
            txt: this.$t('监控查询')
          },
          {
            icon: '<svg width="83" height="82" xmlns="http://www.w3.org/2000/svg"><g stroke="#3E3A39" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M69.97 34.913c0 18.858-15.412 34.145-34.423 34.145-19.012 0-34.423-15.287-34.423-34.145C1.124 16.056 16.534.768 35.547.768c19.011 0 34.423 15.288 34.423 34.145zM59.28 59.632l22.963 21.6"/></g></svg>',
            txt: this.$t('设备查询')
          },
          {
            icon: '<svg width="85" height="81" xmlns="http://www.w3.org/2000/svg"><g stroke="#3E3A39" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M.75 49.455l4.428-9.392 5.975 8.498"/><path d="M5.159 40.063c-.006.09-.006.184-.006.28 0 21.674 17.708 39.246 39.557 39.246 21.835 0 39.543-17.572 39.543-39.247 0-21.68-17.708-39.253-39.543-39.253a39.613 39.613 0 0 0-30.086 13.767"/><path d="M31.33 50.744s8.916 6.588 19.98-.313c11.654-7.27 14.29-28.673 14.29-28.673s-24.848-1.506-33.7 3.64c-5.54 3.22-11.001 11.418-4.552 22.335"/><path d="M49.287 33.051s-10.197-.388-21.56 15.183c-3.983 5.46-3.92 13.364-3.92 13.364"/></g></svg>',
            txt: this.$t('能耗监控')
          },
          {
            icon: '<svg width="84" height="83" xmlns="http://www.w3.org/2000/svg"><g stroke="#3E3A39" stroke-width="1.5" fill="none" fill-rule="evenodd"><path d="M60.194 41.986c0 10.098-8.263 18.273-18.434 18.273-10.188-.005-18.438-8.178-18.438-18.28 0-10.091 8.25-18.277 18.438-18.277 10.17 0 18.434 8.192 18.434 18.284"/><path stroke-linecap="round" stroke-linejoin="round" d="M47.978 13.426L41.755 1.09l-6.22 12.335M47.978 69.208l-6.223 12.346-6.22-12.349M13.633 35.15L1.198 41.317l12.435 6.173M69.877 35.155l12.44 6.167-12.44 6.173"/></g></svg>',
            txt: this.$t('按键功能自定义')
          },
          {
            icon: '<svg width="83" height="81" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path stroke="#4C4C4C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M41.26 54.043L29.276 79.589h23.97z"/><path d="M23.97 77.284C10.338 70.862.915 57.08.915 41.114.915 19.01 18.98 1.09 41.26 1.09s40.345 17.92 40.345 40.026c0 15.939-9.396 29.703-22.993 36.138" stroke="#4C4C4C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M28.192 64.063c-8.058-4.526-13.498-13.106-13.498-22.948 0-14.555 11.895-26.355 26.566-26.355s26.566 11.8 26.566 26.355c0 10.33-5.995 19.27-14.72 23.592" stroke="#4C4C4C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M29.914 39.63c.65.339 1.146.792 1.491 1.365a3.52 3.52 0 0 1 .52 1.843c0 1.34-.43 2.42-1.282 3.238-.854.817-2.05 1.225-3.585 1.225-1.097 0-2.06-.315-2.897-.941-.842-.622-1.397-1.861-1.674-3.708h1.71c.107 1.07.385 1.843.842 2.322.452.484 1.164.724 2.131.724.971 0 1.723-.235 2.247-.711.533-.47.797-1.114.797-1.923 0-1.68-.99-2.518-2.973-2.518h-1.038v-1.532h1.011c.77 0 1.384-.2 1.836-.595.452-.396.68-.937.68-1.612 0-.68-.223-1.226-.667-1.64-.447-.412-1.088-.617-1.916-.617-1.535 0-2.408 1-2.61 2.998h-1.755c.264-1.6.752-2.767 1.46-3.49.707-.725 1.692-1.09 2.963-1.09 1.267 0 2.288.357 3.058 1.067s1.151 1.639 1.151 2.78c0 1.146-.497 2.083-1.5 2.816M43.623 36.792H41.89c-.29-1.465-1.097-2.198-2.422-2.198-2.032 0-3.134 1.483-3.299 4.44.766-.745 1.853-1.118 3.255-1.118 1.056 0 2.014.43 2.87 1.292.854.862 1.28 1.99 1.28 3.376 0 1.39-.412 2.53-1.236 3.433-.819.9-1.956 1.35-3.402 1.35-1.447 0-2.548-.533-3.3-1.6-.752-1.07-1.128-2.655-1.128-4.76 0-2.887.394-4.934 1.186-6.147.793-1.217 2.064-1.821 3.82-1.821 1.091 0 1.974.307 2.64.928.672.618 1.156 1.559 1.47 2.825m-4.55 8.949c.896 0 1.581-.293 2.078-.88.492-.585.738-1.327.738-2.22 0-.892-.246-1.643-.738-2.256-.497-.608-1.15-.91-1.988-.91-.828 0-1.536.275-2.122.83-.582.56-.873 1.173-.873 1.843 0 1.084.255 1.955.77 2.612.52.657 1.231.98 2.135.98M50.427 32.97c1.365 0 2.4.612 3.102 1.842.703 1.23 1.048 3.038 1.048 5.428 0 2.385-.34 4.161-1.025 5.32-.685 1.16-1.71 1.741-3.08 1.741s-2.413-.617-3.125-1.843c-.72-1.23-1.075-2.989-1.075-5.276 0-2.292.363-4.064 1.093-5.325.734-1.257 1.75-1.888 3.062-1.888m0 12.773c.95 0 1.607-.417 1.97-1.248.362-.83.546-2.29.546-4.383 0-2.088-.206-3.549-.6-4.37-.403-.826-1.057-1.24-1.965-1.24-1.657 0-2.494 1.92-2.494 5.748 0 1.891.21 3.282.613 4.165.412.884 1.052 1.328 1.93 1.328M57.653 31.002c.663 0 1.227.227 1.683.688.461.458.694 1.022.694 1.692 0 .671-.233 1.226-.703 1.671a2.392 2.392 0 0 1-1.705.666c-.672 0-1.231-.227-1.675-.675-.447-.453-.671-1.013-.671-1.688 0-.666.228-1.23.685-1.679.452-.448 1.016-.675 1.692-.675m0 3.455c.739 0 1.11-.364 1.11-1.1 0-.303-.103-.56-.313-.778a1.064 1.064 0 0 0-.784-.32 1.12 1.12 0 0 0-.796.311 1.039 1.039 0 0 0-.327.786c0 .737.371 1.101 1.11 1.101" fill="#3E3A39"/></g></svg>',
            txt: this.$t('360°红外学习')
          },
          {
            icon: '<svg width="84" height="83" xmlns="http://www.w3.org/2000/svg"><g stroke="#3E3A39" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M22.676 41.284c0-7.21 1.124-14.159 3.2-20.688a69.078 69.078 0 0 1-15.039-5.373c-6.051 7.03-9.713 16.143-9.713 26.112 0 9.935 3.636 19.022 9.652 26.041a69.086 69.086 0 0 1 15.1-5.404 68.154 68.154 0 0 1-3.2-20.688z"/><path d="M10.775 67.377a40.592 40.592 0 0 0 24.746 13.738 68.177 68.177 0 0 1-9.644-19.144 69.15 69.15 0 0 0-15.102 5.406zM35.438 1.569a40.593 40.593 0 0 0-24.6 13.653 69.124 69.124 0 0 0 15.04 5.375 68.221 68.221 0 0 1 9.56-19.028zM62.748 41.284a68.12 68.12 0 0 1-3.354 21.138 69.123 69.123 0 0 1 13.222 4.954c6.016-7.019 9.652-16.106 9.652-26.04 0-9.97-3.661-19.084-9.713-26.113a69.11 69.11 0 0 1-13.161 4.923 68.125 68.125 0 0 1 3.354 21.138z"/><path d="M25.877 20.597a68.149 68.149 0 0 0-3.201 20.688 68.147 68.147 0 0 0 3.201 20.686 69.965 69.965 0 0 1 15.819-1.82c6.118 0 12.047.794 17.698 2.27a68.114 68.114 0 0 0 3.354-21.136 68.115 68.115 0 0 0-3.354-21.138 69.915 69.915 0 0 1-17.698 2.27 69.972 69.972 0 0 1-15.819-1.82zM50.214 80.683a40.595 40.595 0 0 0 22.402-13.307 69.097 69.097 0 0 0-13.223-4.954 68.233 68.233 0 0 1-9.18 18.26z"/><path d="M41.696 60.15c-5.446 0-10.735.643-15.819 1.822a68.191 68.191 0 0 0 9.644 19.144c2.013.304 4.075.462 6.175.462 2.922 0 5.77-.313 8.517-.895a68.173 68.173 0 0 0 9.18-18.26 69.855 69.855 0 0 0-17.697-2.273zM50.3 2.007a68.183 68.183 0 0 1 9.093 18.14 69.123 69.123 0 0 0 13.162-4.925A40.6 40.6 0 0 0 50.3 2.007z"/><path d="M41.696 22.418c6.118 0 12.047-.794 17.697-2.272A68.192 68.192 0 0 0 50.3 2.007a40.996 40.996 0 0 0-14.863-.438 68.221 68.221 0 0 0-9.56 19.028 69.965 69.965 0 0 0 15.819 1.821zM41.696 1.091V81.58M82.268 41.335H1.123"/></g></svg>',
            txt: this.$t('快速入网')
          },
        ],
        infraredmodes:[
          {
            icon: '<svg width="118" height="118" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M57.343 76.837H34.27c-3.457 0-6.27-2.825-6.27-6.297V40.747c0-3.471 2.813-6.295 6.27-6.295h49.46c3.457 0 6.27 2.824 6.27 6.296V70.54c0 3.472-2.813 6.296-6.27 6.296H57.342zM59 76.837v6.453M46.355 83.29h25.29" stroke-width="2"/><path d="M.5 58.87C.5 26.634 26.69.5 59 .5c32.309 0 58.5 26.133 58.5 58.37 0 32.239-26.191 58.372-58.5 58.372C26.69 117.242.5 91.109.5 58.87z"/></g></svg>'
          },
          {
            icon: '<svg width="119" height="118" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M.518 58.87C.518 26.634 26.71.5 59.018.5c32.31 0 58.5 26.133 58.5 58.37 0 32.239-26.19 58.372-58.5 58.372-32.309 0-58.5-26.133-58.5-58.371z"/><path d="M84.798 60.718h-51.56a3.096 3.096 0 0 1-3.096-3.096V35.405a3.096 3.096 0 0 1 3.096-3.096h51.56a3.096 3.096 0 0 1 3.096 3.096v22.217a3.096 3.096 0 0 1-3.096 3.096zM36.113 47.882h45.81M36.113 53.18h45.81M39.164 67.977s2.1 2.035 1.874 4.06c-.263 2.372-2.578 3.734-2.402 6.736.166 2.847 1.586 4.237 1.586 4.237M48.167 70.4s2.1 2.034 1.874 4.06c-.264 2.372-2.58 3.734-2.403 6.736.167 2.847 1.587 4.237 1.587 4.237M57.17 67.977s2.1 2.035 1.873 4.06c-.265 2.372-2.58 3.734-2.403 6.736.167 2.847 1.587 4.237 1.587 4.237M74.821 67.174a1.462 1.462 0 1 1-2.924 0 1.462 1.462 0 0 1 2.924 0zM74.821 77.772a1.462 1.462 0 1 1-2.924 0 1.462 1.462 0 0 1 2.924 0zM73.359 67.14v10.496M69.5 68.557a1.463 1.463 0 1 1-1.463 2.533 1.463 1.463 0 0 1 1.463-2.533zM78.68 73.856a1.463 1.463 0 1 1-1.465 2.534 1.463 1.463 0 0 1 1.464-2.534zM68.74 69.806l9.089 5.248M68.038 73.856a1.462 1.462 0 1 1 1.462 2.532 1.462 1.462 0 0 1-1.462-2.532zM77.217 68.557a1.462 1.462 0 1 1 1.462 2.532 1.462 1.462 0 0 1-1.462-2.532zM68.74 75.14l9.089-5.248" stroke-width="2"/></g></svg>'
          },
          {
            icon: '<svg width="119" height="118" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M1.254 58.87C1.254 26.634 27.445.5 59.755.5c32.31 0 58.5 26.133 58.5 58.37 0 32.239-26.19 58.372-58.5 58.372-32.308 0-58.5-26.133-58.5-58.371z"/><path d="M48.2 36.27v7.849M48.2 58.362v10.174M42.859 50.005h34.336M72.112 89.971H47.398a5.687 5.687 0 0 1-5.688-5.687V33.458a5.688 5.688 0 0 1 5.688-5.688h24.714a5.688 5.688 0 0 1 5.687 5.688v50.826a5.687 5.687 0 0 1-5.688 5.687z" stroke-width="2"/></g></svg>'
          },
          {
            icon: '<svg width="119" height="118" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M.816 58.87C.816 26.634 27.006.5 59.316.5c32.309 0 58.5 26.133 58.5 58.37 0 32.239-26.191 58.372-58.5 58.372-32.31 0-58.5-26.133-58.5-58.371z"/><path d="M74.567 88.66H44.065a3.637 3.637 0 0 1-3.638-3.636V32.719a3.638 3.638 0 0 1 3.638-3.638h30.502a3.637 3.637 0 0 1 3.637 3.637v52.306a3.637 3.637 0 0 1-3.637 3.637z" stroke-width="2"/><path d="M55.627 69.865a3.69 3.69 0 1 1 7.379.001 3.69 3.69 0 0 1-7.38 0z" stroke-width="2"/><path d="M47.195 69.865c0-6.694 5.427-12.12 12.12-12.12 6.694 0 12.121 5.426 12.121 12.12 0 6.694-5.427 12.121-12.12 12.121-6.694 0-12.12-5.427-12.12-12.12zM53.168 42.814a6.148 6.148 0 1 1 12.296 0 6.148 6.148 0 0 1-12.296 0z" stroke-width="2"/></g></svg>'
          },
          {
            icon: '<svg width="119" height="118" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M1.091 58.87C1.091 26.634 27.282.5 59.591.5c32.31 0 58.5 26.133 58.5 58.37 0 32.239-26.19 58.372-58.5 58.372-32.309 0-58.5-26.133-58.5-58.371z"/><path d="M78.16 66.228H41.023c-2.05 0-3.569-1.844-3.116-3.784l7.082-30.315c.33-1.411 1.623-2.413 3.115-2.413h22.974c1.492 0 2.786 1.002 3.116 2.413l7.081 30.315c.453 1.94-1.066 3.784-3.115 3.784zM59.592 66.235V87.94M40.731 88.027h37.72M68.737 66.332v9.106" stroke-width="2"/></g></svg>'
          },
        ],
        banner: {
          title: this.$t('智能家庭控制平板'),
          subtitle: 'OOMI Touch',
          content: this.$t('OOMI Touch智能家庭控制平板 是实现整个OOMI智能家居系统Z-Wave自组网的人机交互的终端设备。通过Touch能控制和设置系统内所有的节点设备，以及设置各种智能场景，并可随时查看系统状态。'),
          img: `${this.$store.state.cdn}/2018/11/544f53047c3a95176a7050dc904b4e93.png`
        },
        parameters: [
          {
            column: "is-2", 
            item: this.$t('电池')
          },
          {
            column: "is-4", 
            value: this.$t('4000mAh，内置可充电锂电池')
           },
           {
            column: "is-2",  
            item: 'USB'
           },
           {
            column: "is-4",  
            value: '5V – 2A'
           },
           {
            column: "is-2",  
            item: 'CPU'
           },
           {
            column: "is-4",  
            value: this.$t('四核处理器')
           },
           {
            column: "is-2",  
            item: this.$t('显示屏')
           },
           {
            column: "is-4",  
            value: this.$t('IPS 7 英寸')
           },
           {
            column: "is-2",  
            item: this.$t('分辨率')
           },
           {
            column: "is-4", 
            value: '1280×800'
           },
           {
            column: "is-2",  
            item: this.$t('内存')
           },
           {
            column: "is-4", 
            value: '(RAM)：2GB'
           },
           {
            column: "is-2",  
            item: this.$t('存储容量')
           },
           {
            column: "is-4", 
            value: '8GB'
           },
           {
            column: "is-2",  
            item: this.$t('操作系统')
           },
           {
            column: "is-4", 
            value: 'Android'
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
            value: this.$t('802.11b/g/n (Wi-Fi)，蓝牙 4.0，NFC')
           },
           {
            column: "is-2",  
            item: this.$t('产品尺寸')
           },
           {
            column: "is-4", 
            value: '222.4 × 112.2 × 10.3mm'
           }
         ]
      }
    }
}
</script>