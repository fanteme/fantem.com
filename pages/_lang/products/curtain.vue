<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section
      class="section-features has-text-centered center"
      :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/ac3eb9673935e7ad3819d6034ff98621.jpg)`}"
    >
      <div class="container">
        <div class="columns is-multiline is-mobile">
          <div class="column is-12 content">
            <h2 class="title has-text-white has-text-weight-normal">{{$t('智能窗帘电机 聪明贴心的窗帘管家')}}</h2>
          </div>
          <div
            class="column is-4-mobile is-2-desktop"
            v-for="(feature, index) in features"
            :key="index"
            :class="{'is-offset-3-desktop': index==0}"
          >
            <div v-html="feature.img"></div>
            <p class="sutitle has-text-weight-normal orange">{{feature.text}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-group one has-text-centered">
      <div class="container">
        <div class="columns">
          <div class="column is-5-desktop has-text-white">
            <h2 class="content">{{$t('一键开启窗帘 开合自如')}}</h2>
            <p class="has-text-weight-light">{{$t('随开随关，控制自如。只需轻轻一按OOMI智能场景面板，即可打开或者关闭窗帘，开合自如，享受科技的温暖。')}}</p>
            <p class="has-text-weight-light">{{$t('（需搭配具备OOMI网关功能的设备，联动使用）')}}</p>
            <img :src="`${$store.state.cdn}/2018/11/2ffe4043986e412df282c790f4b548af.png`">
          </div>
        </div>
      </div>
    </section>
    <section
      class="section-product normal"
      :style="{background: `url(${this.$store.state.cdn}/2018/11/a8364c347c72c02b3dea68bad9e5897c.jpg) no-repeat 80% center/cover`}"
    >
      <div class="container">
        <div class="columns">
          <div class="column is-10 is-offset-1 has-text-centered has-text-white normal">
            <h2 class="content has-text-weight-normal">{{$t('定时设置 场景联动')}}</h2>
            <p class="has-text-weight-light">{{$t('智能产品联动使用，可根据个人作息习惯和需要，设定窗帘定时开关。阳光如约照进房间，叫醒睡眼惺忪的你。')}}</p>
            <p class="has-text-weight-light">{{$t('（需搭配具备OOMI网关功能的设备，联动使用）')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-group two has-text-right">
      <div class="container">
        <div class="columns">
          <div class="column is-offset-7 is-5-desktop">
            <svg width="146" height="145" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#F26F21" fill="none" fill-rule="evenodd">
                <path
                  d="M89.448 107.102H55.705M55.698 38.717h34.338M55.714 72.91l34.238-.148M73.631 38.864v68.237"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                ></path>
                <path d="M55.698 33.886h34.338" stroke-width="2.47" stroke-linejoin="round"></path>
                <path
                  d="M55.696 115.556c-.714-1.938-2.132-3.258-3.766-3.258-.977 0-1.87.477-2.585 1.274-.644.72-1.496.72-2.14 0-.715-.797-1.609-1.274-2.585-1.274-1.035 0-1.977.535-2.71 1.421-.61.735-1.504.735-2.113 0-.733-.886-1.676-1.42-2.71-1.42-1.52 0-2.852 1.14-3.606 2.858v-83.17c.754-1.719 2.087-2.86 3.605-2.86 1.035 0 1.978.536 2.71 1.422.61.736 1.504.735 2.114 0 .733-.886 1.675-1.422 2.71-1.422.976 0 1.87.477 2.584 1.274.645.72 1.497.72 2.141 0 .714-.797 1.608-1.274 2.585-1.274 1.634 0 3.052 1.321 3.766 3.26v83.17M112.202 115.556c-.715-1.938-2.134-3.258-3.767-3.258-.976 0-1.87.477-2.585 1.274-.644.72-1.496.72-2.14 0-.714-.797-1.609-1.274-2.584-1.274-1.036 0-1.978.535-2.711 1.421-.61.735-1.504.735-2.113 0-.733-.886-1.676-1.42-2.71-1.42-1.52 0-2.852 1.14-3.607 2.858v-83.17c.755-1.719 2.088-2.86 3.606-2.86 1.035 0 1.978.536 2.711 1.422.61.736 1.504.735 2.113 0 .733-.886 1.675-1.422 2.71-1.422.976 0 1.87.477 2.585 1.274.644.72 1.496.72 2.14 0 .714-.797 1.609-1.274 2.585-1.274 1.633 0 3.052 1.321 3.767 3.26v83.17M40.784 31.356v28.753M48.254 31.128v20.413M104.828 31.356v28.753M97.359 31.128v20.413"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M144.682 72.342c0 39.4-32.164 71.342-71.84 71.342C33.164 143.684 1 111.743 1 72.342 1 32.94 33.165 1 72.841 1c39.677 0 71.841 31.94 71.841 71.342z"
                  stroke-width="2"
                ></path>
              </g>
            </svg>
            <h2 class="content has-text-weight-normal">{{$t('自定义停位点 尽在掌握')}}</h2>
            <p class="has-text-weight-light">{{$t('可控时代，窗帘随您的心情而动。通过场景面板开关按钮，可让窗帘停在指定的位置。')}}</p>
            <p class="has-text-weight-light">{{$t('（需搭配具备OOMI网关功能的设备，联动使用）')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-group three">
      <div class="container">
        <div class="columns">
          <div class="column is-5-desktop">
            <svg width="146" height="146" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#F26F21" stroke-width="2" fill="none" fill-rule="evenodd">
                <path
                  d="M144.682 72.84c0 39.677-32.164 71.842-71.84 71.842-39.677 0-71.843-32.165-71.843-71.841C1 33.164 33.165 1 72.841 1c39.677 0 71.841 32.164 71.841 71.84z"
                ></path>
                <path
                  d="M94.238 127.182c13.02-11.996 21.138-29.198 21.138-48.308 0-19.09-8.142-36.277-21.138-48.271"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M81.7 114.656A48.485 48.485 0 0 0 97.357 78.88c0-14.138-6.03-26.868-15.655-35.75M69.987 101.608c6.124-5.643 9.96-13.735 9.96-22.723 0-8.982-3.828-17.066-9.942-22.708M48.629 65.192c-2.018.803-4.33-.719-5.166-3.406-.836-2.69.125-5.514 2.145-6.317 2.017-.81 4.33.718 5.168 3.404.835 2.688-.125 5.518-2.147 6.32z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M42.072 29.019c15.203 4.194 11.639 20.067 13.987 27.844 2.266 7.502 9.533 6.503 10.974 7.445 1.743 1.139.36 5.092-1.492 6.889l3.954 8.266-17.97-1.438s3.234 5.57 14.195 9.704c0 0-9.74 12.938-23.648 12.04"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            <h2 class="content has-text-weight-normal">{{$t('语音控制 言听“机 ”从')}}</h2>
            <p class="has-text-weight-light">{{$t('能听能说，自在交互。搭配天猫精灵，声音控制开关，让家居更简单。')}}</p>
            <p class="has-text-weight-light">{{$t('（需搭配具备OOMI网关功能的设备，联动使用）')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-product normal" style="background: #dcdcdc">
      <div class="container">
        <div class="columns">
          <div class="column is-12 has-text-centered normal">
            <h2 class="title has-text-weight-normal">{{$t('高品质铝材 匠心之作')}}</h2>
            <p class="has-text-weight-light">{{$t('OOMI智能窗帘电机通过国家CCC认证，外壳采用高品质铝材，耐高温、耐冲击、防腐能力强，历久弥新。')}}</p>
            <div class="center" style="postion:relative">
              <img :src="`${$store.state.cdn}/2018/11/50a94cfc6425333135caca5de745e644.png`">
            </div>
          </div>
        </div>
      </div>
    </section>
    <product-parameter :parameters="parameters"></product-parameter>
  </main>
</template>
<style lang="stylus" scoped>
.section-features {
  padding-bottom: 100px;
  background-size: cover;

  .content {
    font-size: 16px;
    line-height: 28px;
    margin: 78px 0 0 0;
  }

  .title {
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 38px;
    color: #3e3a39;
  }
  .sutitle {
    font-size: 25px;
    line-height: 36px;
    margin-top: 12px;
  }
}

.section-group {
  position: relative;
  overflow: hidden;
  padding: 101px 0 202px 0;

  svg {
    margin-bottom: 75px;
  }
  

  &.one {
    &:before {
      content: '';
      width: 60%;
      height: 100%;
      position: absolute;
      z-index: 1;
      left: -10%;
      bottom: 0;
      background: #e3d4b7;
      transform: skewX(-10deg);

      @media screen and (max-width: 768px) {
        transform: skewX(0deg);
      }
    }

    &:after {
      content: '';
      width: 61%;
      height: 100%;
      position: absolute;
      z-index: 2;
      right: -10%;
      bottom: 0;
      transform: skewX(-10deg);
      background: url('http://cdn.fantem.cn/2018/11/1813d545b4f18b2a8a16471c7d2bb10b.jpg') no-repeat center / cover;

      @media screen and (max-width: 768px) {
        transform: skewX(0deg);
      }
    }
  }

  &.two {
    &:before {
      content: '';
      width: 60%;
      height: 100%;
      position: absolute;
      z-index: 1;
      left: -10%;
      bottom: 0;
      background: url('http://cdn.fantem.cn/2018/11/9156440b52e29185d054a37470809d39.jpg') no-repeat center / cover;
      transform: skewX(-10deg);

      @media screen and (max-width: 768px) {
        transform: skewX(0deg);
      }
    }

    &:after {
      content: '';
      width: 61%;
      height: 100%;
      position: absolute;
      z-index: 2;
      right: -10%;
      bottom: 0;
      transform: skewX(-10deg);
      background: #ffffff;

      @media screen and (max-width: 768px) {
        transform: skewX(0deg);
      }
    }
  }

  &.three {
    &:before {
      content: '';
      width: 60%;
      height: 100%;
      position: absolute;
      z-index: 1;
      left: -10%;
      bottom: 0;
      background: #ffffff;
      transform: skewX(10deg);

      @media screen and (max-width: 768px) {
        transform: skewX(0deg);
      }
    }

    &:after {
      content: '';
      width: 61%;
      height: 100%;
      position: absolute;
      z-index: 2;
      right: -10%;
      bottom: 0;
      transform: skewX(10deg);
      background: url('http://cdn.fantem.cn/2018/11/a9e925a3503d1db757826af24176711f.jpg') no-repeat center / cover;

      @media screen and (max-width: 768px) {
        transform: skewX(0deg);
      }
    }
  }

  .container {
    position: relative;
    z-index: 3;

    .content {
      font-size: 36px;
      line-height: 42px;
      margin-bottom: 38px;
    }
  }
}

.section-product {
  background-repeat: no-repeat;
  overflow: hidden;

  &:not(.normal) {
    background-size: contain;
  }

  &:not(.full) {
    @media screen and (max-width: 768px) {
      padding-top: 450px;
    }

    @media screen and (max-width: 616px) {
      padding-top: 230px;
    }
  }

  &.normal {
    height: 800px;

    @media screen and (max-width: 768px) {
      height: auto;
      min-height: 800px;
    }

    .title {
      font-size: 36px;
      margin: 100px 0 38px;
      color: #3e3a39;
    }

    .content {
      font-size: 36px;
      padding: 70px 0 0;
      text-align: center;
      margin: 0 0 38px 0;
    }

    img {
      margin: 75px 0 120px 0;
    }
  }

  .column {
    position: relative;

    &.left {
      .arrow {
        align-items: flex-start;
      }

      &:after {
        content: '';
        width: 0;
        height: 0;
        border-color: transparent #fff;
        border-width: 700px 0 0 300px;
        border-style: solid;
        position: absolute;
        z-index: 1;
        right: -300px;
        bottom: 0;

        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }

    &.right {
      .arrow {
        align-items: flex-end;
      }

      &:before {
        content: '';
        width: 0;
        height: 0;
        border-color: #fff transparent;
        border-width: 0 0 700px 300px;
        border-style: solid;
        position: absolute;
        z-index: 1;
        left: -300px;
        bottom: 0;

        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }

    .arrow {
      padding: 158px 0 203px 0;
      background: #fff;
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media screen and (max-width: 1280px) {
        padding: 100px 0;
      }

      @media screen and (max-width: 1080px) {
        padding: 60px 0;
      }

      @media screen and (max-width: 768px) {
        padding: 40px 0;
      }

      .title {
        font-size: 36px;
        margin: 45px 0;
        color: #3e3a39;
      }

      .content {
        font-size: 16px;
        line-height: 24px;
      }
    }
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
      banner: {
        title: this.$t('智能窗帘电机'),
        subtitle: 'OOMI Fantem Curtain',
        content: this.$t(
          'OOMI智能窗帘电机能无线远程控制窗帘的开关以及闭合，或控制窗帘移动至导轨的任意位置。完美的契合了多种场合及不同场景，从简约商务到温馨家居，贴心满足您的需求。'
        ),
        img: `${
          this.$store.state.cdn
        }/2018/11/c8bdcdc74dcd4234e326a49b72ae6827.png`
      },
      parameters: [
        {
          column: 'is-2',
          item: this.$t('额定电压')
        },
        {
          column: 'is-4',
          value: '220V ～ 50Hz'
        },
        {
          column: 'is-2',
          item: this.$t('额定扭矩')
        },
        {
          column: 'is-4',
          value: '1.2N·m'
        },
        {
          column: 'is-2',
          item: this.$t('单开速度')
        },
        {
          column: 'is-4',
          value: '14cm/s'
        },
        {
          column: 'is-2',
          item: this.$t('待机功耗')
        },
        {
          column: 'is-4',
          value: '0.8W'
        },
        {
          column: 'is-2',
          item: this.$t('工作环境')
        },
        {
          column: 'is-4',
          value: this.$t('温度：0 – 40℃ / 湿度：20 – 80% RH')
        },
        {
          column: 'is-2',
          item: this.$t('无线距离')
        },
        {
          column: 'is-4',
          value: this.$t('室内 40m')
        },
        {
          column: 'is-2',
          item: this.$t('产品尺寸')
        },
        {
          column: 'is-4',
          value: '360 × 70.6 × 50.3mm'
        },
        {
          column: 'is-2',
          item: this.$t('无线功能')
        },
        {
          column: 'is-4',
          value: 'Z-Wave Plus'
        }
      ],
      features: [
        {
          img:
            '<svg width="102" height="102" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M101.243 50.748c0 27.887-22.608 50.495-50.495 50.495C22.86 101.243.252 78.635.252 50.748.252 22.86 22.86.252 50.748.252c27.887 0 50.495 22.608 50.495 50.496z" stroke="#FFF" stroke-width=".5"/><path d="M27.118 61.979V24.668c0-3.107 2.522-5.628 5.62-5.628H71.3a5.631 5.631 0 0 1 5.628 5.628V63.02a5.631 5.631 0 0 1-5.628 5.628h-6.892M52.023 19.075V56.93M44.909 43.848H76.98M27.293 43.848h7.619" stroke="#373737" stroke-width=".979"/><path d="M44.758 55.223s15.141 2.1 18.662 8.11c3.52 6.02-2.995 24.796-2.995 24.796H34.722L18.367 68.18a3.174 3.174 0 0 1 .147-4.196 7.647 7.647 0 0 1 11.023-.083l5.538 5.65V35.673c0-2.687 2.163-4.86 4.84-4.86 2.675 0 4.843 2.173 4.843 4.86v19.55z" stroke="#373737" stroke-width=".979"/><path d="M31.828 38.91a8.63 8.63 0 0 1-.614-3.21c0-4.8 3.896-8.697 8.692-8.697 4.8 0 8.692 3.898 8.692 8.698a8.68 8.68 0 0 1-.6 3.185" stroke="#373737" stroke-width=".979"/><path d="M27.118 61.979V24.668c0-3.107 2.522-5.628 5.62-5.628H71.3a5.631 5.631 0 0 1 5.628 5.628V63.02a5.631 5.631 0 0 1-5.628 5.628h-6.892M52.023 19.075V56.93M44.909 43.848H76.98M27.293 43.848h7.619" stroke="#FFF"/><path d="M44.758 55.223s15.141 2.1 18.662 8.11c3.52 6.02-2.995 24.796-2.995 24.796H34.722L18.367 68.18a3.174 3.174 0 0 1 .147-4.196 7.647 7.647 0 0 1 11.023-.083l5.538 5.65V35.673c0-2.687 2.163-4.86 4.84-4.86 2.675 0 4.843 2.173 4.843 4.86v19.55z" stroke="#FFF"/><path d="M31.828 38.91a8.63 8.63 0 0 1-.614-3.21c0-4.8 3.896-8.697 8.692-8.697 4.8 0 8.692 3.898 8.692 8.698a8.68 8.68 0 0 1-.6 3.185" stroke="#FFF"/></g></svg>',
          text: this.$t('一键开关窗帘')
        },
        {
          img:
            '<svg width="102" height="102" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M101.72 50.748c0 27.887-22.608 50.495-50.495 50.495C23.337 101.243.73 78.635.73 50.748.73 22.86 23.337.252 51.225.252c27.887 0 50.495 22.608 50.495 50.496z" stroke-width=".5"/><path d="M47.31 54.707h6.18M50.323 70.74v-8.928M50.46 70.77l4.984 2.337M50.4 58.922v-4.273M38.543 70.753c0-6.552 5.309-11.862 11.857-11.862 6.55 0 11.86 5.31 11.86 11.862 0 6.548-5.31 11.857-11.86 11.857-.434 0-.865-.024-1.29-.07M30.847 54.923l-8.005.036V18.885h26.274l-.027 6.732c.124 15.442-9.946 29.217-18.242 29.306z" stroke-width=".979"/><path d="M22.843 81.85V54.96l8.538-.054c.164.185 2.444 3.386 3.809 8.452.85 3.15 1.398 12.496.872 12.712-1.14.47-2.837.26-3.073.37-.175.082.062 2.548-.294 4.062-.21.896-2.521 1.76-4.91 1.842-2.39.083-4.942-.493-4.942-.493zM30.858 67.654s1.208 3.96 2.13 8.787M71.175 54.923l8.003.036V18.885H52.904l.029 6.732c-.123 15.442 9.945 29.217 18.242 29.306z" stroke-width=".979"/><path d="M79.178 81.85V54.96l-8.537-.054c-.165.185-2.443 3.386-3.81 8.452-.849 3.15-1.396 12.496-.871 12.712 1.14.47 2.837.26 3.073.37.175.082-.063 2.548.293 4.062.21.896 2.522 1.76 4.91 1.842 2.39.083 4.942-.493 4.942-.493zM71.164 67.654s-1.208 3.96-2.131 8.787M62.272 70.74c0 6.556-5.314 11.87-11.87 11.87-6.557 0-11.872-5.314-11.872-11.87 0-6.557 5.315-11.871 11.871-11.871 6.557 0 11.87 5.314 11.87 11.87z" stroke-width=".979"/></g></svg>',
          text: this.$t('定时设置')
        },
        {
          img:
            '<svg width="103" height="102" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M102.187 50.748c0 27.887-22.608 50.495-50.495 50.495-27.887 0-50.495-22.608-50.495-50.495C1.197 22.86 23.805.252 51.692.252c27.887 0 50.495 22.608 50.495 50.496z" stroke="#FFF" stroke-width=".5"/><path d="M72.911 36.308c0-5.577-4.676-10.091-10.445-10.096M78.34 36.307c.001-8.468-7.108-15.333-15.874-15.338M84.251 36.31c-.003-11.622-9.751-21.036-21.785-21.037" stroke="#373737" stroke-width="1.16"/><path d="M72.911 36.308c0-5.577-4.676-10.091-10.445-10.096M78.34 36.307c.001-8.468-7.108-15.333-15.874-15.338M84.251 36.31c-.003-11.622-9.751-21.036-21.785-21.037" stroke="#FFF" stroke-width=".979"/><path d="M67.838 82.848a3.375 3.375 0 0 1-3.375 3.374H38.966a3.374 3.374 0 0 1-3.376-3.374V34.52a3.375 3.375 0 0 1 3.376-3.375h25.497a3.376 3.376 0 0 1 3.375 3.375v48.327z" stroke="#231815" stroke-width="1.16"/><path d="M54.55 80.246a2.836 2.836 0 1 1-5.672 0 2.836 2.836 0 0 1 5.671 0zM40.685 74h22.06V37.565h-22.06z" stroke="#231815" stroke-width="1.16"/><path d="M67.838 82.848a3.375 3.375 0 0 1-3.375 3.374H38.966a3.374 3.374 0 0 1-3.376-3.374V34.52a3.375 3.375 0 0 1 3.376-3.375h25.497a3.376 3.376 0 0 1 3.375 3.375v48.327z" stroke="#FFF" stroke-width=".979"/><path d="M54.55 80.246a2.836 2.836 0 1 1-5.672 0 2.836 2.836 0 0 1 5.671 0zM40.685 74h22.06V37.565h-22.06z" stroke="#FFF" stroke-width=".979"/></g></svg>',
          text: this.$t('联动操控')
        }
      ]
    }
  }
}
</script>