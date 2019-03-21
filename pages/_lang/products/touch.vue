<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section class="section-top function tint-background-color has-text-centered">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h2 class="title has-text-weight-normal has-text-white">{{$t('小身板，大功能，方寸之间蕴含多种可能')}}</h2>
          </div>
          <div class="column is-10 is-offset-1">
            <p
              class="content has-text-weight-light has-text-white"
            >{{ $t('OOMI Touch智能家庭控制平板，小身板，大功能，方寸之间蕴含多种可能！7英寸的触摸屏操控界面可实现智能家居设备操控、智能场景自定义、监控查询、设备查询、以及能耗监控等功能。另外它还具有物理按键自定义，可结合OOMI 系列网关，学习并精简家中遥控器，轻松变身万能遥控，从此告别一器一遥控的时代！') }}</p>
          </div>
          <div class="column is-12">
            <img :src="`${this.$store.state.cdn}/2018/11/97c57060dae96633b0fbb6ce6eb99d59.png`">
          </div>
        </div>
      </div>
    </section>
    <section
      class="section-top infraredmodes has-text-centered has-text-white"
      :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/7699848710c9b1a174d63dc3a5712d5b.jpg)`}"
    >
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h2 class="title has-text-weight-normal has-text-white">{{ $t('精简家中遥控器 告别一器一摇控的累赘时代') }}</h2>
          </div>
          <div class="column is-8 is-offset-2">
            <p
              class="content has-text-weight-light"
            >{{ $t('可与OOMI Cube或OOMI Hub智能家庭网关相结合，通过物理按键自定义功能，学习遥控器按键，从而精简家中遥控器，变身家居万能遥控，让家居控制尽在掌握中。') }}</p>
          </div>
          <div class="column is-12 center icons">
            <div class="columns is-multiline center">
              <div class="svg column" v-for="(item, index) in infraredmodes" :key="index">
                <span v-html="item.icon"></span>
                <p>{{ item.name }}</p>
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
            <p
              class="content has-text-weight-light"
            >{{ $t('支持场景及智能场景自定义。用户可根据个人生活习惯或喜好在触摸屏上设置各种场景及智能场景，实现一键开启预设场景或特定条件自动触发智能场景的功能，享受智能家居带来的便捷、舒适生活。') }}</p>
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
            <h2 class="title has-text-weight-normal has-text-white">{{ $t('能耗监控查询功能') }}</h2>
          </div>
          <div class="column is-10 is-offset-1">
            <p
              class="content has-text-weight-light"
            >{{ $t('长按屏幕上节点设备图标，即可实时查询家中对应设备能耗情况，让用户清晰了解家中用电情况。') }}</p>
          </div>
          <div class="column is-12">
            <img :src="`${this.$store.state.cdn}/2019/03/167f0cc3db003a1fce43dae4accda180.jpg`">
          </div>
        </div>
      </div>
    </section>
    <section class="section-top monitoring has-text-centered">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h2 class="title has-text-weight-normal">{{ $t('监控视频查看功能') }}</h2>
          </div>
          <div class="column is-8 is-offset-2">
            <p
              class="content has-text-weight-light"
            >{{ $t('支持监控视频查看功能，用户可左滑屏幕主页，进入监控页面，实时查看家中情况。') }}</p>
          </div>
          <div class="column is-12">
            <img :src="`${this.$store.state.cdn}/2018/11/098adf45dd2bc12e6c970a414033e11a.jpg`">
          </div>
        </div>
      </div>
    </section>
    <section class="parameter">
      <div class="container">
        <h2 class="title has-text-centered">{{ $t('产品参数') }}</h2>
        <div class="columns">
          <div class="column is-7">
            <div class="columns is-mobile" v-for="(parameter, index) in parameters" :key="index">
              <div class="column">{{ parameter.name }}</div>
              <div class="column">{{ parameter.value }}</div>
            </div>
          </div>
          <div class="column center is-5">
            <img :src="`${this.$store.state.cdn}/2019/03/a46a7d915127467ac4983c2c4d37c4c0.png`">
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style lang="stylus" scoped>
.section {
  &-top {
    color: #3e3a39;

    &.tint-background-color {
      background: #969eab;
    }

    .title {
      padding: 95px 0 21px;
    }

    .content {
      font-size: 16px;
      margin: 0;
    }

    .icons {
      padding: 48px 0 15px;

      .svg {
        margin: 0 35px;
      }
    }

    &.function {
      padding-bottom: 60px;

      img {
        margin-top: 25px;
      }
    }

    &.infraredmodes {
      padding-bottom: 52px;
      height: 900px;

      @media screen and (max-width: 1280px) {
        height: auto;
      }
    }

    &.scene {
      padding-bottom: 8px;

      .imgs {
        margin-top: 65px;
      }
    }

    &.detection {
      img {
        vertical-align: bottom;
        margin: 13px 0 0;
      }
    }

    &.monitoring {
      img {
        margin: 53px 0 98px;
      }
    }
  }
}

.parameter {
  background: #eaeeef;
  padding: 60px 0;

  .container>.columns {
    margin: 30px 0;
    padding: 20px 0;
    border-top: 1px solid #c5c6c6;
    border-bottom: 1px solid #c5c6c6;
  }
}
</style>
<script>
import ProductBanner from '~/components/ProductBanner'
import ProductParameter from '~/components/ProductParameter'
export default {
  components: {
    ProductBanner,
    ProductParameter
  },
  data() {
    return {
      infraredmodes: [
        {
          icon:
            '<svg width="118" height="118" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M57.343 76.837H34.27c-3.457 0-6.27-2.825-6.27-6.297V40.747c0-3.471 2.813-6.295 6.27-6.295h49.46c3.457 0 6.27 2.824 6.27 6.296V70.54c0 3.472-2.813 6.296-6.27 6.296H57.342zM59 76.837v6.453M46.355 83.29h25.29" stroke-width="2"/><path d="M.5 58.87C.5 26.634 26.69.5 59 .5c32.309 0 58.5 26.133 58.5 58.37 0 32.239-26.191 58.372-58.5 58.372C26.69 117.242.5 91.109.5 58.87z"/></g></svg>',
          name: this.$t('电视')
        },
        {
          icon:
            '<svg width="119" height="118" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M.518 58.87C.518 26.634 26.71.5 59.018.5c32.31 0 58.5 26.133 58.5 58.37 0 32.239-26.19 58.372-58.5 58.372-32.309 0-58.5-26.133-58.5-58.371z"/><path d="M84.798 60.718h-51.56a3.096 3.096 0 0 1-3.096-3.096V35.405a3.096 3.096 0 0 1 3.096-3.096h51.56a3.096 3.096 0 0 1 3.096 3.096v22.217a3.096 3.096 0 0 1-3.096 3.096zM36.113 47.882h45.81M36.113 53.18h45.81M39.164 67.977s2.1 2.035 1.874 4.06c-.263 2.372-2.578 3.734-2.402 6.736.166 2.847 1.586 4.237 1.586 4.237M48.167 70.4s2.1 2.034 1.874 4.06c-.264 2.372-2.58 3.734-2.403 6.736.167 2.847 1.587 4.237 1.587 4.237M57.17 67.977s2.1 2.035 1.873 4.06c-.265 2.372-2.58 3.734-2.403 6.736.167 2.847 1.587 4.237 1.587 4.237M74.821 67.174a1.462 1.462 0 1 1-2.924 0 1.462 1.462 0 0 1 2.924 0zM74.821 77.772a1.462 1.462 0 1 1-2.924 0 1.462 1.462 0 0 1 2.924 0zM73.359 67.14v10.496M69.5 68.557a1.463 1.463 0 1 1-1.463 2.533 1.463 1.463 0 0 1 1.463-2.533zM78.68 73.856a1.463 1.463 0 1 1-1.465 2.534 1.463 1.463 0 0 1 1.464-2.534zM68.74 69.806l9.089 5.248M68.038 73.856a1.462 1.462 0 1 1 1.462 2.532 1.462 1.462 0 0 1-1.462-2.532zM77.217 68.557a1.462 1.462 0 1 1 1.462 2.532 1.462 1.462 0 0 1-1.462-2.532zM68.74 75.14l9.089-5.248" stroke-width="2"/></g></svg>',
          name: this.$t('空调')
        },
        {
          icon:
            '<svg width="119" height="118" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M1.254 58.87C1.254 26.634 27.445.5 59.755.5c32.31 0 58.5 26.133 58.5 58.37 0 32.239-26.19 58.372-58.5 58.372-32.308 0-58.5-26.133-58.5-58.371z"/><path d="M48.2 36.27v7.849M48.2 58.362v10.174M42.859 50.005h34.336M72.112 89.971H47.398a5.687 5.687 0 0 1-5.688-5.687V33.458a5.688 5.688 0 0 1 5.688-5.688h24.714a5.688 5.688 0 0 1 5.687 5.688v50.826a5.687 5.687 0 0 1-5.688 5.687z" stroke-width="2"/></g></svg>',
          name: this.$t('冰箱')
        },
        {
          icon:
            '<svg width="119" height="118" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M.816 58.87C.816 26.634 27.006.5 59.316.5c32.309 0 58.5 26.133 58.5 58.37 0 32.239-26.191 58.372-58.5 58.372-32.31 0-58.5-26.133-58.5-58.371z"/><path d="M74.567 88.66H44.065a3.637 3.637 0 0 1-3.638-3.636V32.719a3.638 3.638 0 0 1 3.638-3.638h30.502a3.637 3.637 0 0 1 3.637 3.637v52.306a3.637 3.637 0 0 1-3.637 3.637z" stroke-width="2"/><path d="M55.627 69.865a3.69 3.69 0 1 1 7.379.001 3.69 3.69 0 0 1-7.38 0z" stroke-width="2"/><path d="M47.195 69.865c0-6.694 5.427-12.12 12.12-12.12 6.694 0 12.121 5.426 12.121 12.12 0 6.694-5.427 12.121-12.12 12.121-6.694 0-12.12-5.427-12.12-12.12zM53.168 42.814a6.148 6.148 0 1 1 12.296 0 6.148 6.148 0 0 1-12.296 0z" stroke-width="2"/></g></svg>',
          name: this.$t('音响')
        },
        {
          icon:
            '<svg width="119" height="118" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M1.091 58.87C1.091 26.634 27.282.5 59.591.5c32.31 0 58.5 26.133 58.5 58.37 0 32.239-26.19 58.372-58.5 58.372-32.309 0-58.5-26.133-58.5-58.371z"/><path d="M78.16 66.228H41.023c-2.05 0-3.569-1.844-3.116-3.784l7.082-30.315c.33-1.411 1.623-2.413 3.115-2.413h22.974c1.492 0 2.786 1.002 3.116 2.413l7.081 30.315c.453 1.94-1.066 3.784-3.115 3.784zM59.592 66.235V87.94M40.731 88.027h37.72M68.737 66.332v9.106" stroke-width="2"/></g></svg>',
          name: this.$t('风扇')
        }
      ],
      banner: {
        title: this.$t('智能家庭控制平板'),
        subtitle: this.$t('OOMI 智能家居设备操控中心'),
        content: this.$t(
          '智能家庭控制平板Touch 是实现整个OOMI智能家居系统Z-Wave自组网的人机交互终端设备。用户可以通过智能家庭控制平板Touch控制和设置系统内的所有智能节点设备、设置各种智能场景，还可随时查看系统及设备的工作状态。'
        ),
        img: `${
          this.$store.state.cdn
        }/2018/11/544f53047c3a95176a7050dc904b4e93.png`
      },
      parameters: [
        {
          name: this.$t('电池'),
          value: this.$t('4000mAh，内置可充电锂电池')
        },
        {
          name: this.$t('USB端口'),
          value: this.$t('DC 5V 2A')
        },
        {
          name: this.$t('CPU'),
          value: this.$t('四核处理器')
        },
        {
          name: this.$t('显示屏'),
          value: this.$t('IPS 7 英寸')
        },
        {
          name: this.$t('分辨率'),
          value: this.$t('1280×800')
        },
        {
          name: this.$t('内存（RAM)'),
          value: this.$t('2GB')
        },
        {
          name: this.$t('存储容量'),
          value: this.$t('8GB')
        },
        {
          name: this.$t('操作系统'),
          value: this.$t('Android')
        },
        {
          name: this.$t('工作温度'),
          value: this.$t('0 – 40℃')
        },
        {
          name: this.$t('工作湿度'),
          value: this.$t('20 – 80% RH')
        },
        {
          name: this.$t('无线功能'),
          value: this.$t('802.11b/g/n (Wi-Fi)，蓝牙 4.0，NFC')
        },
        {
          name: this.$t('产品尺寸'),
          value: this.$t('222.5*112*10mm')
        }
      ]
    }
  }
}
</script>