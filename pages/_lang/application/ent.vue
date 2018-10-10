<template>
  <main class="main">
    <application-header></application-header>
    <application-hero :hero="hero"></application-hero>
    <section class="application-features">
      <p class="caption has-text-centered">{{$t('智能娱乐 满足所想')}}</p>
      <div class="container-fluid">
        <div class="columns">
          <div class="column"><img :src="`${this.$store.state.cdn}/2018/09/0a4de4e96dd47bbf2bdbb47f9ef0edce.jpg`" alt=""></div>
        </div>
      </div>
      <p class="caption has-text-centered">{{$t('聚会模式 一键开启')}}</p>
      <div class="subtitle has-text-centered is-size-6">{{$t('一键开启聚会模式。周末约上三五好友，来家中开启一场久违的Party！在闪烁的温暖灯光下、适宜的音乐中，让老友的情谊更加绵长。')}}</div>
      <div class="container-fluid">
        <div class="columns is-gapless">
          <div class="column"><img :src="`${this.$store.state.cdn}/2018/09/22445f1310f66155120c4a1fb56baf96.jpg`" alt=""></div>
        </div>
      </div>
      <div class="mode" :style="{backgroundImage: `url(${$store.state.cdn}/2018/09/6e2488db67f477e5d315de1952b2ef0e.jpg)`}">
          <div class="container has-text-centered">
            <div class="columns">
              <div class="column">
                <div class="item">
                  <p class="caption">{{$t('影院模式 即时体验')}}</p>
                  <div class="subtitle center is-size-6">{{$t('饭后，坐在客厅一键开启影院模式，影院布帘缓缓降下，窗帘会悄然关闭，灯光自动调节到合适的亮度，投影机开启，美好的影院时光就此开启！')}}</div>
                  <img :src="`${this.$store.state.cdn}/2018/09/74dd4a6bfb02757c8e65cc904aebee4c.jpg`" alt="">
                </div>
              </div>
              <div class="column">
                <div class="item">
                  <p class="caption">{{$t('音乐模式 全景环绕')}}</p>
                  <div class="subtitle center is-size-6">{{$t('当您悠闲地坐在露台凝望夕阳西下时，当您在与爱人共进烛光晚餐时，当您在午后的起居室里读着自己心爱的诗集时，当您兴致勃勃的与挚友品鉴美酒时，当您慵懒的地家中泡SPA时…美妙动听的音乐将使您更加陶醉其中。')}}</div>
                  <img :src="`${this.$store.state.cdn}/2018/09/27a369bcd3c83c44a71424fa6fda7ddf.jpg`" alt="">
                </div>
              </div>
            </div>
          </div>
      </div> 
      <application-suit :suit="suit"></application-suit>
      <div class="products">
        <div class="container has-text-centered is-clearfix">
          <p class="title">{{$t('娱乐模式控制相关产品')}}</p>
          <div class="is-size-5 character"><span>{{$t('智能网关')}}</span>|<span>{{$t('智能灯光控制')}}</span>|<span>{{$t('智能开关插座')}}</span></div>
          <div class="columns">
            <div class="column">
              <div class="products-wrap">
                <div class="products-bg"><img :src="`${this.$store.state.cdn}/2018/09/64f0bd13c54a37aaeff495ae5807d27c.png`" alt=""></div>
                <span>{{$t('Cube智能家庭网关')}}</span>
              </div>
              
            </div>
            <div class="column">
              <div class="products-wrap">
                <div class="products-bg"><img :src="`${this.$store.state.cdn}/2018/09/22d3cd935c86ba20c1e426e907b31df8.png`" alt=""></div>
                <span>{{$t('Hub智能家庭网关')}}</span>
              </div>
              
            </div>
            <div class="column">
              <div class="products-wrap">
                <div class="products-bg"><img :src="`${this.$store.state.cdn}/2018/09/2eacc02d2d200f0bd16fa07bde18b177.png`" alt=""></div>
                <span>{{$t('智能操控平板')}}</span>
              </div>
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

    img 
      vertical-align: middle     

    .character
      margin: 30px 0 50px 
      span
        padding: 0 38px

    .mode
      padding: 140px 0 160px
      border-top: 12px solid #edf1f2  
      .item
        background: #fff
        padding: 50px 60px 56px
        .caption
          margin-bottom: 0 
        .subtitle
          margin-top: 50px
          height: 100px

    .products
      margin-top: 65px
      background: #edf1f2
      padding: 0 0 75px 0
      
      .container
        overflow: hidden
      .columns 
        .column

          .products-wrap
            position: relative
            background: #fff 
            border: 1px solid #8c8b8b
            height: 360px

          .products-bg
            display: flex
            justify-content: center
            align-items: center
            height: 100%

          img 
            vertical-align: middle

          span 
            position: absolute
            font-size: 16px
            font-weight: 600
            bottom: 24px
            width: 100%
            left: 0  
            color: #3e3a39      
</style>


<script>
import ApplicationHeader from '~/components/ApplicationHeader.vue'
import ApplicationHero from '~/components/ApplicationHero.vue'
import ApplicationSuit from '~/components/ApplicationSuit.vue'

export default{
  components: { ApplicationHeader, ApplicationHero, ApplicationSuit},
  data() {
    return {
        hero: {
          bg:   `${this.$store.state.cdn}/2018/09/5d00b77bdb215e4a2bc2979c1efd050f.jpg`,
          isnum: 'is-12',
          isalgin: '',
          isoffset: 'is-offset-0',
          title: this.$t('OOMI智能家居') + '—— ' + this.$t('娱乐模式'),
          titalign: 'has-text-centered',
          titcolor: 'has-text-white',
          subtitle: '',
          subalign: 'has-text-centered',
          subcolor: 'has-text-white',
          detail: this.$t(
          '当您周末与三五好友相聚时，在家中开启一场久违的party时，只需轻轻一键，窗帘关闭，灯光闪烁，音乐适时响起，营造出最适宜的聚会氛围，让朋友的情谊更加绵长。当您闲暇时，在您独处或与家人一起想要欣赏一部温馨的影片，聆听优美的音乐时，只要轻轻一键，灯光自动调暗，窗帘关上，影音播放系统依次启动，投影机及屏幕徐徐下降，空调自动调温。OOMI智能娱乐场景为您提供更加时尚潮流的视听效果，以及更为舒适安逸的观影环境。'
        ),
          detalign: 'has-text-centered',
          detcolor: 'has-text-white'
        },
        suit:{
          title: this.$t('娱乐模式 套装选择'),
          subtitle: this.$t('娱乐模式套装选择（适用于有网络的小户型家庭）'),
          character: [this.$t('多元交互体验'), this.$t('联动其他智能设备'), this.$t('随心拓展配件')],
          item:[
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="42" height="49"><g fill="none" fill-rule="evenodd" stroke="#E76C26"><path d="M40.938 39.929c0 .934-.761 1.692-1.695 1.692H2.184c-.93 0-1.684-.758-1.684-1.692V2.872c0-.94.754-1.693 1.684-1.693h37.059c.934 0 1.695.754 1.695 1.693v37.057zM20.717 41.62v6.2m-20.217 0h40.438"/><path d="M34.94 21.4c0 7.859-6.364 14.222-14.228 14.222-7.854 0-14.217-6.363-14.217-14.222 0-7.854 6.363-14.222 14.217-14.222 7.864 0 14.229 6.368 14.229 14.222z"/><path d="M29.8 21.4c0 5.018-4.061 9.088-9.083 9.088-5.02 0-9.084-4.07-9.084-9.088 0-5.013 4.064-9.084 9.084-9.084A9.083 9.083 0 0 1 29.8 21.4z"/></g></svg>',
              title: this.$t('智能网关X1')
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="75" height="43"><g fill="none" fill-rule="evenodd" stroke="#E76C26"><path d="M1.067 41.585h72.458V1.415H1.067z"/><path d="M22.958 34.233h43.17V8.766h-43.17zM6.13 9.424h7.852M6.049 33.576h7.847m.085-12.079a3.926 3.926 0 1 1-7.852.001 3.926 3.926 0 0 1 7.853-.001z"/></g></svg>',
              title: this.$t('智能操控面板X1')
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="49"><path fill="none" stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round" d="M7.959 39.407a1.17 1.17 0 0 1-1.134-.88L1.917 19.385l-.076-.183c-.07-.17-.115-.275-.153-.377a13.237 13.237 0 0 1-.856-4.702C.832 6.799 6.79.84 14.114.84s13.282 5.959 13.282 13.282c0 1.769-.355 3.507-1.056 5.163l-5.107 19.252c-.135.513-.6.87-1.131.87H7.959zM1.903 19.383h24.422M9.178 43.607h9.872m-8.264 4.553h6.655"/></svg>',
              title: this.$t('智能灯泡X1')
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="49" height="49"><defs><path id="a" d="M0 49h1139.349V0H0z"/></defs><g fill="none" fill-rule="evenodd" transform="translate(-346)"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><path stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round" d="M366.481 6.177a1.89 1.89 0 0 0 0 2.667 1.89 1.89 0 0 0 2.666 0 1.888 1.888 0 0 0 .001-2.667 1.89 1.89 0 0 0-2.667 0zm-6.915 6.916a1.89 1.89 0 0 0 0 2.666 1.89 1.89 0 0 0 2.666 0 1.888 1.888 0 0 0 0-2.666 1.889 1.889 0 0 0-2.666 0zm-6.986 6.985a1.889 1.889 0 0 0 0 2.668c.734.734 1.93.734 2.666-.002a1.887 1.887 0 0 0 0-2.663 1.888 1.888 0 0 0-2.666-.003zm34.085 6.21a1.886 1.886 0 0 0-.001 2.665 1.89 1.89 0 0 0 2.667.001 1.89 1.89 0 0 0-.001-2.666 1.887 1.887 0 0 0-2.665 0zm-6.916 6.915a1.886 1.886 0 0 0-.001 2.666 1.89 1.89 0 0 0 2.667 0 1.886 1.886 0 0 0-2.666-2.666zm-6.988 6.988a1.887 1.887 0 0 0 0 2.665 1.888 1.888 0 0 0 2.666.001 1.889 1.889 0 0 0 0-2.667 1.886 1.886 0 0 0-2.666.001z" mask="url(#b)"/><path stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round" d="M357.594 24.7l17.677-17.676L368.748.5l-17.677 17.678c-5.444 5.443-5.445 14.27 0 19.716a13.88 13.88 0 0 0 3.817 2.706c-2.495-5.188-1.595-11.6 2.706-15.9zm13.193 13.194c-4.3 4.3-10.71 5.2-15.899 2.706a13.91 13.91 0 0 0 2.706 3.816c5.445 5.446 14.272 5.445 19.716 0l17.678-17.676-6.524-6.523-17.677 17.677z" mask="url(#b)"/></g></svg>',
              title: this.$t('智能灯带X1')
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><g fill="none" fill-rule="evenodd" stroke="#E76C26" stroke-linecap="round"><path d="M49.335 35.722c0 7.61-6.169 13.778-13.78 13.778H15.111c-7.609 0-13.778-6.167-13.778-13.778v-20.44C1.333 7.669 7.502 1.5 15.111 1.5h20.444c7.611 0 13.78 6.168 13.78 13.783v20.439zM35.349 15.488v12.504m-20.03-12.504v12.504"/><path d="M23.123 35.897v-2.19a2.212 2.212 0 1 1 4.423 0v2.19m-4.423 0h4.423"/></g></svg>',
              title: this.$t('智能插座X1')
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="49"><path fill="none" stroke="#E76C26" stroke-linecap="round" d="M39.928 47.817H7.785A7.247 7.247 0 0 1 .54 40.571V8.428a7.247 7.247 0 0 1 7.246-7.246h32.143a7.247 7.247 0 0 1 7.246 7.246v32.143a7.247 7.247 0 0 1-7.246 7.246zM.54 24.501h46.635H.54zM23.86 1.182v46.635V1.182z"/></svg>',
              title: this.$t('智能场景面板X1')
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="99" height="30"><g fill="none" fill-rule="evenodd" stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round" stroke-width=".75"><path d="M85.928 28.842V5.364M5.9 16.152v2.223H.887a.511.511 0 0 1-.511-.51v-1.202c0-.282.229-.51.51-.51h5.015zM5.901 25.348H4.857l-1.102-.919 1.073-.92h1.073z"/><path d="M5.901 28.842h92V5.317H17.194V.743H5.901zM17.194 28.739V5.214"/></g></svg>',
              title: this.$t('智能窗帘电机X1')
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="49"><g fill="none" fill-rule="evenodd" stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round"><path d="M46.891 48.5H1.297V22.9c0-2.56 1.22-7.66 4.394-11.177 2.56-2.84 6.387-4.231 9.052-4.943 2.71-.721 6.242-.963 8.187-1.058 2.546-.12 8.357.56 8.357.56 5.312.997 8.151 2.247 10.68 4.694 3.265 3.164 4.924 8.219 4.924 10.63V48.5z"/><path d="M8.514 41.329a1.867 1.867 0 1 1-3.735 0 1.87 1.87 0 0 1 1.867-1.87 1.87 1.87 0 0 1 1.868 1.87zm5.586 0a1.795 1.795 0 1 1-3.59.001 1.795 1.795 0 0 1 3.59-.001zm5.658 0a1.795 1.795 0 1 1-1.794-1.796c.99 0 1.794.805 1.794 1.796zm5.66 0a1.797 1.797 0 1 1-3.594-.001 1.797 1.797 0 0 1 3.593.001zm5.657 0a1.794 1.794 0 1 1-3.59 0 1.795 1.795 0 1 1 3.59 0zm5.66 0a1.796 1.796 0 1 1-3.593 0 1.796 1.796 0 0 1 3.592 0zM41.046 48.5h5.562v-9.451h-5.562zM46.891 20.892V.5"/></g></svg>',
              title: this.$t('智能马达控制器X1')
            }
          ],
          group: {
            title: this.$t('智能一、二、四路开关'),
            icon:[
              '<svg xmlns="http://www.w3.org/2000/svg" width="46" height="47"><g fill="none" fill-rule="evenodd" stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round" stroke-width=".75"><path d="M40.675 46H5.38a4.852 4.852 0 0 1-4.852-4.852V5.852A4.852 4.852 0 0 1 5.38 1h35.296a4.852 4.852 0 0 1 4.852 4.852v35.296A4.852 4.852 0 0 1 40.675 46z"/><path d="M26.683 27.293h-7.311a1.655 1.655 0 0 1-1.656-1.656v-7.31c0-.915.74-1.657 1.656-1.657h7.31c.916 0 1.656.742 1.656 1.656v7.311c0 .915-.74 1.656-1.655 1.656z"/></g></svg>',
              '<svg xmlns="http://www.w3.org/2000/svg" width="47" height="47"><g fill="none" fill-rule="evenodd" stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round" stroke-width=".75"><path d="M41.395 46l-35.293-.003a4.851 4.851 0 0 1-4.851-4.853l.003-35.292A4.852 4.852 0 0 1 6.106 1l35.293.003a4.852 4.852 0 0 1 4.851 4.853l-.003 35.292A4.852 4.852 0 0 1 41.395 46z"/><path d="M27.404 37.157h-7.31a1.656 1.656 0 0 1-1.656-1.657l.001-7.31c0-.914.741-1.656 1.656-1.656l7.31.001c.915 0 1.656.742 1.655 1.656v7.31c0 .915-.74 1.656-1.656 1.656zm.002-16.692h-7.31a1.657 1.657 0 0 1-1.656-1.656l.001-7.31c0-.915.741-1.656 1.655-1.656h7.311c.914 0 1.655.742 1.655 1.656v7.311c0 .914-.742 1.655-1.656 1.655z"/></g></svg>',
              '<svg xmlns="http://www.w3.org/2000/svg" width="47" height="47"><g fill="none" fill-rule="evenodd" stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round" stroke-width=".75"><path d="M41.122 46H5.826a4.851 4.851 0 0 1-4.85-4.853V5.852A4.85 4.85 0 0 1 5.825 1h35.296a4.852 4.852 0 0 1 4.852 4.852v35.295A4.852 4.852 0 0 1 41.122 46z"/><path d="M18.883 37.158H11.57a1.655 1.655 0 0 1-1.655-1.656V28.19c0-.914.74-1.656 1.655-1.656h7.312c.914 0 1.655.742 1.655 1.656v7.31c0 .916-.741 1.657-1.655 1.657zm0-16.694H11.57a1.655 1.655 0 0 1-1.655-1.655V11.5c0-.916.74-1.657 1.655-1.657h7.312c.914 0 1.655.741 1.655 1.656v7.311c0 .914-.741 1.655-1.655 1.655zm16.494 16.694h-7.311a1.655 1.655 0 0 1-1.656-1.656V28.19c0-.914.741-1.656 1.656-1.656h7.311c.915 0 1.655.742 1.655 1.656v7.31c0 .916-.74 1.657-1.655 1.657zm0-16.694h-7.311a1.655 1.655 0 0 1-1.656-1.655V11.5c0-.916.741-1.657 1.656-1.657h7.311c.915 0 1.655.741 1.655 1.656v7.311c0 .914-.74 1.655-1.655 1.655z"/></g></svg>'
            ]
          },
          img: `${this.$store.state.cdn}/2018/09/0124b52a5e2795a23032715df84c8608.png`,
          detail: this.$t('（*配件产品可以随心拓展，以上套装仅供参考）')
          
        }  
    }
  }
}

</script>
