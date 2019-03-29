<template>
  <main class="main">
    <application-hero :hero="hero"></application-hero>
    <section class="application-features">
      <p class="caption has-text-centered">{{ $t('智能娱乐 尽在掌握') }}</p>
      <div class="container">
        <div class="columns has-text-centered">
          <div class="column">
            <img :src="`${this.$store.state.cdn}/2019/03/0468f37914be96a2d8156095c12ae050.svg`">
            <p style="padding: 25px 0 10px;">{{ $t('氛围营造') }}</p>
            <p class="has-text-weight-light">{{ $t('灯光随心调节') }}</p>
          </div>
          <div class="column">
            <img :src="`${this.$store.state.cdn}/2019/03/c535c3c6858bd2d4e06683cec1687f36.svg`">
            <p style="padding: 25px 0 10px;">{{ $t('影音控制') }}</p>
            <p class="has-text-weight-light">{{ $t('影音设备尽在掌控') }}</p>
          </div>
          <div class="column">
            <img :src="`${this.$store.state.cdn}/2019/03/69aee01e35ed01726a7163bae9515b5d.svg`">
            <p style="padding: 25px 0 10px;">{{ $t('场景操控') }}</p>
            <p class="has-text-weight-light">{{ $t('场景随心而变，多种娱乐模式自己定义') }}</p>
          </div>
          <div class="column">
            <img :src="`${this.$store.state.cdn}/2019/03/1ea9b30d8738b8f1ed709fb13d2dd574.svg`">
            <p style="padding: 25px 0 10px;">{{ $t('万能遥控器') }}</p>
            <p class="has-text-weight-light">{{ $t('自定义按键功能，控我所控') }}</p>
          </div>
          <div class="column">
            <img :src="`${this.$store.state.cdn}/2019/03/4cb94c652a11066457b674309cc79af1.svg`">
            <p style="padding: 25px 0 10px;">{{ $t('无线操控') }}</p>
            <p class="has-text-weight-light">{{ $t('多种操控方式：touch/手机app/语音控制') }}</p>
          </div>
        </div>
      </div>
      <div
        class="container-fluid"
        :style="{backgroundImage: `url(${$store.state.cdn}/2019/03/be244724f28a359e8f3d3494863132dd.jpg)`, minHeight: '880px'}"
      >
        <p class="caption has-text-centered" style="padding-top: 30px;">{{ $t('智能娱乐 满足所想') }}</p>
      </div>
      <div
        class="container-fluid"
        :style="{backgroundImage: `url(${$store.state.cdn}/2019/03/668fe29376c1b552a7a8fa851f05c986.jpg)`, minHeight: '760px'}"
      >
        <p
          class="caption has-text-centered has-text-white"
          style="padding-top: 30px;margin-top: -50px;"
        >{{ $t('聚会模式 一键开启') }}</p>
        <p
          class="has-text-centered has-text-white"
        >{{ $t('一键开启聚会模式。周末约上三五好友，来家中开启一场久违的Party！在闪烁的温暖灯光下、适宜的音乐中，让老友的情谊更加绵长。')}}</p>
      </div>
      <div
        class="mode"
        :style="{backgroundImage: `url(${$store.state.cdn}/2019/03/b45c4d4b45b32e40bb896402f3137f80.jpg)`}"
      >
        <div class="container has-text-centered">
          <div class="columns">
            <div class="column">
              <div class="item">
                <p class="caption">{{$t('影院模式 即时体验')}}</p>
                <div
                  class="subtitle center is-size-6"
                >{{$t('饭后，坐在客厅一键开启影院模式，影院布帘缓缓降下，窗帘会悄然关闭，灯光自动调节到合适的亮度，投影机开启，美好的影院时光就此开启！')}}</div>
                <img :src="`${this.$store.state.cdn}/2019/03/a06f143c00dda1db9bb5a740baf891df.jpg`">
              </div>
            </div>
            <div class="column">
              <div class="item">
                <p class="caption">{{$t('音乐模式 全景环绕')}}</p>
                <div
                  class="subtitle center is-size-6"
                >{{$t('当您悠闲地坐在露台凝望夕阳西下时，当您在与爱人共进烛光晚餐时，当您在午后的起居室里读着自己心爱的诗集时，当您兴致勃勃的与挚友品鉴美酒时，当您慵懒的地家中泡SPA时…美妙动听的音乐将使您更加陶醉其中。')}}</div>
                <img :src="`${this.$store.state.cdn}/2019/03/3d85ddea2a9f7303c2cb610c169c6045.jpg`">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style lang="stylus">
.application-features {
  font-weight: 600;
  color: #231815;

  .title {
    color: #3e3a39;
    font-size: 36px;
    margin: 50px auto;
  }

  .caption {
    color: #3e3a39;
    font-size: 36px;
    margin: 50px auto;
  }

  .subtitle {
    font-weight: 600;
    color: #231815;
    margin-bottom: 47px;
  }

  img {
    vertical-align: middle;
  }

  .character {
    margin: 30px 0 50px;

    span {
      padding: 0 38px;
    }
  }

  .mode {
    padding: 10px 0 50px;

    .item {
      background: #fff;

      .caption {
        margin-bottom: 20px;
        padding-top: 60px;
      }

      .subtitle {
        padding: 0 20px;
        height: 100px;
      }

      img {
        box-shadow: 3px 3px 5px 0 grey;
      }
    }
  }
}
</style>
<script>
import ApplicationHero from '~/components/ApplicationHero.vue'

export default {
  components: { ApplicationHero },
  head() {
    return {
      title: '娱乐模式_丰唐物联_OOMI',
      meta: [
        {
          name: 'keywords',
          content:
            '娱乐模式,智能家居系统,OOMI智能家居,OOMI大宅系统,OOMI智能家居系统,丰唐物联'
        },
        {
          name: 'description',
          content:
            '丰唐物联技术（深圳）有限公司一直致力于智能家居产品及家居整体智能控制解决方案的研究与实践，提供智能家居整体解决方案，为您轻松打造舒适便利的智能家居生活环境。'
        }
      ]
    }
  },
  data() {
    return {
      hero: {
        bg: `${
          this.$store.state.cdn
        }/2019/03/1fd9cdffc08638bdce86c39034b76a8e.jpg`,
        icon: `${
          this.$store.state.cdn
        }/2019/03/fd00ff5bb0eb013aa049cdff30f1c1cc.svg`,
        title: this.$t('OOMI智能家居系统') + '--' + this.$t('娱乐模式'),
        align: 'has-text-centered',
        titcolor: 'has-text-white',
        subcolor: 'has-text-white',
        detail: this.$t(
          '当您周末与三五好友相聚时，在家中开启一场久违的party时，只需轻轻一键，窗帘关闭，灯光闪烁，音乐适时响起，营造出最适宜的聚会氛围，让朋友的情谊更加绵长。当您闲暇时，在您独处或与家人一起想要欣赏一部温馨的影片，聆听优美的音乐时，只要轻轻一键，灯光自动调暗，窗帘关上，影音播放系统依次启动，投影机及屏幕徐徐下降，空调自动调温。OOMI智能娱乐场景为您提供更加时尚潮流的视听效果，以及更为舒适安逸的观影环境。'
        ),
        detcolor: 'has-text-white'
      }
    }
  }
}
</script>
