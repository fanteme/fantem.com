<template>
  <main>
    <section class="banner center">
      <div class="container">
        <div class="columns">
          <div class="column is-5">
            <h1 class="title has-text-weight-normal">{{$t('智能六合一传感器')}}</h1>
            <h4 class="subtitle has-text-weight-light">Oomi Multisensor</h4>
            <p class="content has-text-weight-light">{{$t('Oomi Multisensor能将监测到的数据报告给网关，以便关联其他智能节点设备做出相应响应，为您提供一个智能的舒适生活环境。')}}</p> 
          </div>
          <div class="column is-7 has-text-right">
            <u-animate-container>
              <u-animate
                name="fadeInDown"
                delay="0s"
                duration="1.5s"
                :iteration="1"
                :offset="0"
                animateClass="animated"
                :begin="false" 
              >
                <img :src="`${$store.state.cdn}/2018/11/34692619268a091497f51aa43d0344ae.png`"/>
              </u-animate>
            </u-animate-container>  
          </div>
        </div>
      </div>     
    </section>
    <section class="section-features has-text-centered center" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/320bcf5d7180736199198684c011b577.jpg)`}">
      <div class="container">
        <div class="columns is-multiline is-mobile">
          <div class="column is-12 content  has-text-weight-light has-text-white">{{$t('Oomi Multisensor智能六合一传感器是一款多功能的传感器设备，集温度、湿度、亮度、紫外线、震动、红外移动监测于一体。')}}</div>
          <div class="column is-4-mobile is-2-fullhd" v-for="(feature, index) in features" :key="index">
            <div v-html="feature.img"></div>
            <p class="title has-text-weight-normal">{{feature.text}}</p>
          </div>
        </div>
      </div>    
    </section> 
    <section class="section-group center has-text-centered">
      <div class="container">
        <div class="columns is-multiline is-mobile">
          <div class="column is-12 content">{{$t('智能六合一传感器，搭配OOMI智能网关使用，实时监测家中一切异常，给您带来一个温暖、舒适、安全的家')}}</div>
          <div class="column is-12-mobile is-5-fullhd has-text-right-desktop-only"><img :src="`${$store.state.cdn}/2018/11/f10061cf836c0d9ab52bf37f140ac504.png`"></div>
          <div class="column is-12-mobile is-2-fullhd add has-text-white center">+</div>
          <div class="column is-12-mobile is-5-fullhd has-text-left-desktop-only"><img :src="`${$store.state.cdn}/2018/11/ae5fb1f6eb0c76ce0ca1209b51dd0d0a.png`"></div>
        </div>
      </div>
    </section>
    <section class="section-detection has-text-centered">
      <div class="container">
        <div class="columns is-gapless is-multiline is-mobile">
          <div class="column is-12">
            <h2 class="title has-text-white has-text-weight-normal">{{$t('联动智能设备，改善室内环境舒适度')}}</h2>
          </div>
          <div class="column is-12 has-text-white content has-text-weight-light">
            {{$t('实时检测温湿度状态，温湿度异常提醒，实时监测室内温湿度变化。')}}
          </div>
          <div class="column is-12" v-observe-visibility="ShowdeTection">
            <fade-transition>
              <div v-show="showdetection">
                <img :src="`${$store.state.cdn}/2018/11/2f23b118f2c552f86e1036f2c7289220.png`">
              </div>
            </fade-transition>
            <u-animate-container v-if="showdetection">
              <u-animate
                name="fadeIn"
                delay="0.3s"
                duration="1.5s"
                :iteration="1"
                :offset="0"
                animateClass="animated"
                :begin="false" 
              >
                <img :src="`${$store.state.cdn}/2018/11/633988233be08ffde0be2bc200db0d6b.svg`">
                <img :src="`${$store.state.cdn}/2018/11/8bc4ab8e7527abf19a3eb3ddd47de3dc.svg`">
              </u-animate>
            </u-animate-container>
          </div>
        </div>
      </div>
    </section>
    <section class="section-product" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/0af5784311d82d135586bce21f79ee7e.jpg)`}">
      <div class="container">
        <div class="columns">
          <div class="column right is-5 is-offset-7 has-text-right">
            <div class="arrow">
              <img :src="`${$store.state.cdn}/2018/11/49c206a477de26c11f8eeb1e44a361c1.svg`">
              <h2 class="title has-text-weight-normal">{{$t('湿度传感器 缔造舒适环境')}}</h2>
              <p class="content has-text-weight-light">{{$t('当传感器检测到空气过于干燥时，传感器向网关发送指令，通过联动OOMI智能插座可以打开与其相连的加湿器，改善空气湿度。')}}</p>
            </div>
            
          </div>
        </div>
      </div> 
    </section> 
    <section class="section-product center" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/093f6674fcf9bfd0a281915f8a1f3138.jpg)`,backgroundPosition: 'top right'}">
      <div class="container">
        <div class="columns">
          <div class="column left is-5 has-text-left">
            <div class="arrow">
              <img :src="`${$store.state.cdn}/2018/11/a2ba9b22b58c06dc39018bb75df7afe9.svg`">
              <h2 class="title has-text-weight-normal">{{$t('温度传感器 温度随时知晓')}}</h2>
              <p class="content has-text-weight-light">{{$t('实时检测温度状态，当温度过高时，传感器向网关发送指令，可联动OOMI智能插座自动打开空调制冷，给您带来舒适的居家环境。')}}</p>
            </div>
          </div>
        </div>
      </div> 
    </section>
    <section class="center has-text-centered section-light" >
      <div class="container" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/aa95e498a18fb63b9c7a88f70acb68eb.jpg)`}">
        <div class="columns is-multiline is-gapless">
          <u-animate-container v-if="showlight">
              <u-animate
                name="fadeIn"
                delay="0.3s"
                duration="1.5s"
                :iteration="1"
                :offset="0"
                animateClass="animated"
                :begin="false" 
              >
            <div class="column is-12 bgimg" v-show="showlight"></div>
            </u-animate>
          </u-animate-container>
          <div class="column has-text-white" v-observe-visibility="ShowLight">
            <h2 class="title has-text-weight-normal">{{$t('亮度传感器 光线完美掌握')}}</h2>
            <p class="content has-text-weight-light">{{$t('智能光控感应，总是为您的舒适着想。')}}</p>
            <p class="content has-text-weight-light">{{$t('根据预设灯光阙值，智能识别家居环境中光线的明暗度，自动调节灯光亮度，感受美好生活。')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-product normal center full" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/668f62794c8d646241686832a5468613.jpg)`}">
      <div class="container">
        <div class="columns">
          <div class="column is-6 has-text-white normal">
            <h2 class="title has-text-white has-text-weight-normal">{{$t('震动传感器 危险及时告知')}}</h2>
            <p class="content has-text-weight-light">{{$t('家中动静一手掌握。当感知到异常震动，或物品倾斜跌落时，会将异常情况上报给网关，同时远程推送提醒消息至手机上，让您及时知晓和应对。')}}</p>
            <div class="center"><img :src="`${$store.state.cdn}/2018/11/ded72b04acafb6772574bee841d528c9.png`"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-product normal"  :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/324ef8b7d5263a4fc14dd41af6bee23b.jpg)`,backgroundPosition: 'top right'}">
      <div class="container">
        <div class="columns">
          <div class="column is-6 ">
            <h2 class="title has-text-weight-normal">{{$t('人体红外感应器 移动触发场景')}}</h2>
            <p class="content has-text-weight-light">{{$t('搭配OOMI智能家居套装，智能探测人或宠物移动，小夜灯自动点亮，并可在手机上轻松查看室内所有情况。')}}</p>
            <div class="center"><img :src="`${$store.state.cdn}/2018/11/e26869ad7aba2fec367be9847fc53de9.png`"></div>
          </div>
        </div>
      </div>
    </section>    
    <section class="section-product normal"  :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/e5bf70d0a8ac9c0e5cc42fc345633747.jpg`}">
      <div class="container" >
        <div class="columns">
          <div class="column is-6 is-offset-6 has-text-right normal">
            <h2 class="title has-text-weight-normal">{{$t('紫外线传感器 宜居生活细节')}}</h2>
            <p class="content has-text-weight-light">{{$t('高灵敏度紫外线传感器，有效探测太阳光紫外线强度。搭配OOMI智能窗帘电机，可根据紫外线强度来调整窗帘开合，为您打造宜居生活细节。')}}</p>
            <div class="center"><img :src="`${$store.state.cdn}/2018/11/3f24e09dc0f4f72d21e766ac9484278e.png`"></div>
          </div>
        </div>
      </div>
    </section>     
  </main>  
</template>
<style lang="stylus">
  .banner
    background: #eaeeef 
    min-height: 775px
    color: #3e3a39
    .is-5
      display: flex 
      flex-direction: column
      justify-content: center  
    .title
      color: #e76c26
      font-size: 50px
    .subtitle
      font-size: 37px
      margin: 28px 0 62px
      color: #3e3a39
    .content
      font-size: 16px
      line-height: 28px   
  .section-features
    padding-bottom: 75px
    background-size: cover 
    .content
      font-size: 16px
      line-height: 28px 
      margin: 78px 0 94px 0
    .title
      font-size: 25px
      line-height: 36px 
      margin-top: 12px
      color: #e76c26
  .section-group
    position: relative
    overflow: hidden
    padding: 101px 0 202px 0
    
    &:before
      content: ''
      width :60%
      height:100%
      position: absolute
      z-index: 1 
      left: -10%
      bottom: 0
      background: #e5b7ac
      transform:skewX(-10deg)
      @media screen and (max-width: 768px) {
        transform:skewX(0deg)
      }
    &:after
      content: ''
      width:60%
      height:100%
      position: absolute
      z-index: 2
      right: -10%
      bottom: 0
      transform:skewX(-10deg)
      background: #bae0de  
      @media screen and (max-width: 768px) {
        transform:skewX(0deg)
      }
      
    .container
      position: relative
      z-index: 3
      .content
        font-size: 20px
        line-height: 42px
        margin-bottom: 96px
        color: #3e3a39  
      .add
        font-size: 136px
          
  .section-detection
    background: #000 
    .title
      font-size: 36px
      margin: 90px 0 37px
    .content
      font-size: 16px
    .column
      position: relative

      section
        position: absolute
        top: 80px   

  .section-product
    background-repeat: no-repeat
    overflow hidden
    color: #3e3a39
    &:not(.normal)
      background-size: contain
    &:not(.full)  
      @media screen and (max-width: 768px) {
        padding-top: 450px
      }
      @media screen and (max-width: 616px) {
        padding-top: 230px
      }
    &.normal
      height: 800px
      @media screen and (max-width: 768px) {
        height: auto
        min-height: 800px
      }
      .title
        font-size: 36px
        margin: 100px 0 42px
      .content
        font-size: 16px
        margin: 0 0 8px 0  
      img 
        margin: 75px 0 120px 0  
    .column
      position: relative
      &:not(.has-text-white)
        background: #fff
      &.left
        .arrow
          align-items: flex-start
        &:after
          content: ''
          width: 0
          height: 0
          border-color: transparent #fff
          border-width: 700px 0 0 300px
          border-style: solid
          position: absolute
          z-index: 1 
          right: -300px
          bottom:0
          @media screen and (max-width: 768px) {
            display: none
          }

      &.right
        .arrow
          align-items: flex-end   
        &:before
          content: ''
          width: 0
          height: 0
          border-color: #fff transparent
          border-width: 0 0 700px 300px
          border-style: solid
          position: absolute
          z-index: 1 
          left: -300px
          bottom: 0 
          @media screen and (max-width: 768px) {
            display: none
          }    
      .arrow
        padding: 158px 0 203px 0 
        background: #fff
        position: relative 
        z-index: 2
        display: flex;
        flex-direction: column
        justify-content: center
        
        @media screen and (max-width: 1280px ) {
          padding: 100px 0
        }

        @media screen and (max-width: 1080px ) {
          padding: 60px 0
        }
        @media screen and (max-width: 768px ) {
          padding: 40px 0
        }
    
        .title
          font-size: 36px
          margin: 45px 0
          color: #3e3a39
        .content
          font-size: 16px
          line-height: 24px   

  .section-light
    background: #eaeeef
    padding: 22px 0 23px 
    .columns
      min-height: 800px
      position: relative
     .bgimg
        position: absolute
        height: 100%
        width: 100%
        top:0
        left: 0
        z-index: 1
        background-image: url(http://cdn.fantem.cn/2018/11/c99a1cf2fb5a8d5d542b18828d286390.jpg)
      .has-text-white
        position:relative
        z-index: 2 
      .title
        color: #fff
        font-size: 36px
        padding: 91px 0 37px
      .content
        font-size: 16px
        margin: 0 8px 0   

</style>
<script>
import {FadeTransition} from 'vue2-transitions'
  export default {
    components: {
      FadeTransition
    },
    data() {
      return {
        showdetection: true,
        showlight: true,
        features: [
          {
            img: '<svg width="101" height="101" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M50.25 19.55c4.109 0 7.451 3.25 7.451 7.24v25.434c4.423 2.582 7.221 7.327 7.221 12.651 0 8.092-6.585 14.675-14.672 14.675-8.089 0-14.672-6.583-14.672-14.675 0-5.324 2.798-10.069 7.221-12.65V26.79c0-3.99 3.342-7.24 7.451-7.24z"/><path d="M53.216 55.126V35.94c0-1.521-1.328-2.754-2.966-2.754-1.637 0-2.966 1.233-2.966 2.754v19.186c-4.181 1.269-7.221 5.154-7.221 9.747 0 5.628 4.559 10.19 10.187 10.19 5.626 0 10.185-4.562 10.185-10.19 0-4.593-3.038-8.478-7.22-9.747z"/><path d="M100.25 50.25c0 27.614-22.386 50-50 50s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50z" stroke-width=".5"/></g></svg>',
            text: this.$t('温度')
          },
          {
            img: '<svg width="102" height="101" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M71.874 59.615c0 11.007-9.232 19.936-20.626 19.936-11.39 0-20.621-8.93-20.621-19.936 0-11.002 20.62-40.064 20.62-40.064s20.627 29.062 20.627 40.064z"/><path d="M51.136 55.163c2.633 0 3.872.884 5.313 1.906 1.468 1.037 3.126 2.218 6.304 2.218 2.489 0 4.027-1.081 5.26-1.954v-.003c.044.375.065.744.065 1.11 0 8.697-7.546 15.77-16.825 15.77-9.28 0-16.827-7.073-16.827-15.77 0-.336.017-.66.055-.99 1.198.829 2.686 1.837 5.038 1.837 3.172 0 4.833-1.181 6.298-2.218 1.44-1.022 2.683-1.906 5.319-1.906z"/><path d="M101.25 50.25c0 27.614-22.386 50-50 50s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50z" stroke-width=".5"/></g></svg>',
            text: this.$t('湿度')
          },
          {
            img: '<svg width="101" height="101" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M49.422 19.55v8.985c0 1.625-.455 2.88-1.37 3.768-.913.89-2.157 1.332-3.73 1.332-1.574 0-2.805-.443-3.692-1.332-.889-.888-1.334-2.143-1.334-3.768V19.55h1.752v9.06c0 1.17.28 2.043.838 2.628.557.584 1.395.874 2.511.874 1.068 0 1.866-.29 2.4-.874.532-.585.797-1.459.797-2.628v-9.06h1.828zM60.387 19.55h1.826L57.57 33.482h-1.751L51.174 19.55h1.905l2.815 8.832c.254.865.533 1.928.837 3.198.154-.915.43-2.002.839-3.272l2.817-8.758z" fill="#FFF"/><path d="M50.146 46.652V79.55M50.146 79.55l4.568-4.568M45.58 74.982l4.569 4.568M25.272 23.484c3.646 9.883 13.37 16.97 24.828 16.97 11.456 0 21.182-7.087 24.818-16.97M76.346 34.41l6.67 6.253M59.309 47.328l2.485 9.38M24.154 34.41l-6.67 6.253M41.191 47.328l-2.482 9.38M20.287 74.168l6.222-1.75M18.545 67.946l1.744 6.222M38.05 42.719L20.289 74.168M20.287 74.168l6.222-1.75M18.545 67.946l1.744 6.222M80.213 74.168l-6.222-1.75M81.955 67.946l-1.744 6.222M62.45 42.719l17.762 31.449M80.213 74.168l-6.222-1.75M81.955 67.946l-1.744 6.222" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round"/><path d="M100.25 50.25c0 27.614-22.386 50-50 50s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50z" stroke="#FFF" stroke-width=".5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>',
            text: this.$t('紫外线')
          },
          {
            img: '<svg xmlns="http://www.w3.org/2000/svg" width="101" height="101"><g fill="none" fill-rule="evenodd"><path stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" d="M66.1551,52.3405 C66.1551,61.1215 59.0391,68.2425 50.2501,68.2425 C41.4671,68.2425 34.3451,61.1215 34.3451,52.3405 C34.3451,43.5575 41.4671,36.4355 50.2501,36.4355 C59.0391,36.4355 66.1551,43.5575 66.1551,52.3405 Z"/><path fill="#FFF" d="M53.6516,26.5532 C53.6516,28.4302 52.1236,29.9492 50.2496,29.9492 C48.3706,29.9492 46.8486,28.4302 46.8486,26.5532 C46.8486,24.6712 48.3706,23.1552 50.2496,23.1552 C52.1236,23.1552 53.6516,24.6712 53.6516,26.5532" opacity=".5"/><path fill="#FFF" d="M72.0181,34.156 C72.0181,36.036 70.4911,37.555 68.6171,37.555 C66.7421,37.555 65.2211,36.036 65.2211,34.156 C65.2211,32.279 66.7421,30.76 68.6171,30.76 C70.4911,30.76 72.0181,32.279 72.0181,34.156" opacity=".6"/><path fill="#FFF" d="M79.6209,52.517 C79.6209,54.399 78.0989,55.918 76.2249,55.918 C74.3509,55.918 72.8289,54.399 72.8289,52.517 C72.8289,50.643 74.3509,49.124 76.2249,49.124 C78.0989,49.124 79.6209,50.643 79.6209,52.517" opacity=".7"/><path fill="#FFF" d="M72.0181,71.0959 C72.0181,72.9729 70.4911,74.4919 68.6171,74.4919 C66.7421,74.4919 65.2211,72.9729 65.2211,71.0959 C65.2211,69.2219 66.7421,67.6949 68.6171,67.6949 C70.4911,67.6949 72.0181,69.2219 72.0181,71.0959" opacity=".8"/><path fill="#FFF" d="M53.6516,78.4943 C53.6516,80.3683 52.1236,81.8963 50.2496,81.8963 C48.3706,81.8963 46.8486,80.3683 46.8486,78.4943 C46.8486,76.6173 48.3706,75.0983 50.2496,75.0983 C52.1236,75.0983 53.6516,76.6173 53.6516,78.4943" opacity=".9"/><path fill="#FFF" d="M35.0388 71.0959C35.0388 72.9729 33.5228 74.4919 31.6428 74.4919 29.7628 74.4919 28.2468 72.9729 28.2468 71.0959 28.2468 69.2219 29.7628 67.6949 31.6428 67.6949 33.5228 67.6949 35.0388 69.2219 35.0388 71.0959M27.6765 52.517C27.6765 54.399 26.1545 55.918 24.2805 55.918 22.4015 55.918 20.8795 54.399 20.8795 52.517 20.8795 50.643 22.4015 49.124 24.2805 49.124 26.1545 49.124 27.6765 50.643 27.6765 52.517M35.0388 33.3505C35.0388 35.2245 33.5228 36.7435 31.6428 36.7435 29.7628 36.7435 28.2468 35.2245 28.2468 33.3505 28.2468 31.4675 29.7628 29.9495 31.6428 29.9495 33.5228 29.9495 35.0388 31.4675 35.0388 33.3505"/><path stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M100.25,50.25 C100.25,77.864 77.864,100.25 50.25,100.25 C22.636,100.25 0.25,77.864 0.25,50.25 C0.25,22.636 22.636,0.25 50.25,0.25 C77.864,0.25 100.25,22.636 100.25,50.25 Z"/></g></svg>',
            text: this.$t('亮度')
          },
          {
            img: '<svg width="101" height="101" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M29.006 27.706c-2.931 0-5.306 2.459-5.312 5.496M19.236 33.198c.006-5.538 4.39-10.044 9.77-10.044M71.495 78.603c2.93 0 5.312-2.457 5.318-5.495M81.263 73.11c-.006 5.539-4.39 10.045-9.769 10.045M35.606 31.3h29.777c3.779 0 6.875 3.095 6.875 6.869v29.77c0 3.783-3.096 6.879-6.875 6.879H35.606c-3.773 0-6.87-3.096-6.87-6.878V38.169c0-3.774 3.097-6.87 6.87-6.87z"/><path d="M50.497 35.806c9.531 0 17.248 7.723 17.248 17.248 0 9.534-7.717 17.258-17.248 17.258-9.53 0-17.255-7.724-17.255-17.258 0-9.525 7.724-17.248 17.255-17.248zM35.636 69.509a1.443 1.443 0 1 1-2.887-.005 1.443 1.443 0 0 1 2.887.005zM67.745 36.352c0 .803-.647 1.45-1.44 1.45a1.447 1.447 0 1 1 0-2.894c.793 0 1.44.647 1.44 1.444z"/><path d="M100.25 50.25c0 27.614-22.386 50-50 50s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50z" stroke-width=".5"/></g></svg>',
            text: this.$t('震动')
          },
          {
            img: '<svg width="102" height="101" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M39.793 37.145c-3.867 0-7-3.132-7-7 0-3.855 3.133-6.99 7-6.99 3.865 0 6.997 3.135 6.997 6.99 0 3.868-3.132 7-6.997 7z"/><path d="M28.282 35.129c4.015 5.63 9.394 6.282 15.186 2.846.393-.236 2.138-1.2 2.524-1.426 9.317-5.532 18.62-3.365 24.855 5.373 2.654 3.717-3.478 7.242-6.099 3.566-3.227-4.511-7.322-5.818-11.803-4.392 2.291 3.988 4.298 7.947 7.132 13.574 2.828 5.623 9.087 10.117 15.092 6.604 4.337-2.536 8.24 3.69 3.924 6.217-8.205 4.794-17.823 1.848-22.729-4.381a4.632 4.632 0 0 1-.547.242c-4.015 1.4-9.267 5.116-10.87 6.439-1.603 1.31-4.357 8.033-5.993 11.404-1.98 4.1-8.378 1.116-6.388-3 1.848-3.825 4.96-11.466 7.38-13.402 1.946-1.55 5.725-4.435 8.928-6.076a283.925 283.925 0 0 0-6.799-12.43c-7.57 2.322-14.767-.41-19.892-7.59-2.654-3.716 3.474-7.235 6.1-3.568z"/><path d="M101.25 50.25c0 27.614-22.386 50-50 50s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50z" stroke-width=".5"/></g></svg>',
            text: this.$t('红外移动检测')
          }
        ]
      }
    },
    methods: {
      ShowdeTection (isVisible, entry) {
        this.showdetection = isVisible
      },
      ShowLight (isVisible, entry) {
        this.showlight = isVisible
      }
    }
  }       
</script>