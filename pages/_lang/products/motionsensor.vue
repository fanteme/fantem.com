<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section class="section-features has-text-centered center" style="background: #e8eced">
      <div class="container">
        <div class="columns is-multiline is-mobile">
          <div class="column is-10 is-offset-1 content has-text-weight-light">
            <h2 class="title has-text-weight-normal">{{$t('智能三合一传感器')}}</h2>
            {{$t('OOMI智能三合一传感器是一款多功能的传感器设备，集温度、亮度、人体红外监测功能于一体。能轻松将监测到的数据信息报告至网关，以便关联其他智能节点设备做相应响应，为您提供一个舒适的智能生活环境。')}}
          </div>
          <div class="column is-8 is-offset-2">
            <div class="columns is-mobile">
              <div class="column is-4-mobile is-4-fullhd" v-for="(feature, index) in features" :key="index">
                <div v-html="feature.img"></div>
                <p class="sutitle has-text-weight-normal">{{feature.text}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </section>
    <section class="section-product normal has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/9331b21efb15708ec18470fe0b5b1250.jpg)`}">
      <div class="container">
        <div class="columns">
          <div class="column is-10 is-offset-1 normal">
            <p class="subtitle has-text-center">{{$t('OOMI智能三合一传感器，可以搭配其他智能产品实现丰富的玩法，即使家里的无线网络不稳定或中断，智能节点设备也可正常工作！')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-temperature " :style="{background: `#dde6f5 url(${this.$store.state.cdn}/2018/11/da89b965b3451b06a9eb4305ebb647e9.png) no-repeat right 64px top`}">
      <div class="container">
        <div class="columns">
          <div class="column is-10 is-offset-1 normal has-text-centered">
            <h2 class="title has-text-weight-normal">
              {{$t('温度传感器 感知温度变化')}}
            </h2>
            <p class="content has-text-weight-light">
              {{$t('搭配OOMI网关，实时检测温度状态。当温度过高时，传感器向网关发送指令，可联动OOMI智能插座自动打开空调制冷，给您带来舒适的居家环境。')}}
            </p>
            <div class="center" style="postion:relative">
              <img :src="`${$store.state.cdn}/2018/11/93739abfbe700f464ddc06d7313a6bdc.png`">
              <div style="position:absolute;" class="has-text-white">
                <span style="font-size: 150px;line-height:160px;" v-observe-visibility="numberChanging">{{temperature}}</span>
                <span style="position:absolute;font-size: 60px;vertical-align:top">℃</span>
                <div style="display:inline-block;font-size: 22px;width:64px;">{{$t('室内温度')}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
    <section class="section-product normal"  :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/71a64e2e9280796506a75c96462fe7ac.jpg)`}">
      <div class="container" >
        <div class="columns">
          <div class="column is-6 has-text-centered has-text-white normal">
            <h2 class="content has-text-weight-normal has-text-white">{{$t('亮度传感器 光亮完美掌控')}}</h2>
            <p class="has-text-weight-light">{{$t('智能光控感应，总是为您的舒适着想。根据预设灯光阈值，智能识别家居环境中光线的明暗度，自动调节灯光亮度，感受美好生活。')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-product normal"  :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/20e424d452fd09f561239c1235ac2b5f.jpg)`}">
      <div class="container" >
        <div class="columns">
          <div class="column is-12 has-text-centered has-text-white normal">
            <h2 class="content has-text-weight-normal has-text-white">{{$t('人体红外感应器 移动触发场景')}}</h2>
            <p class="has-text-weight-light">{{$t('搭配OOMI智能家居套装，智能探测人或宠物移动，并可在手机上轻松查看室内所有情况。')}}</p>
          </div>
        </div>
      </div>
    </section>
    <product-parameter :parameters="parameters"></product-parameter>    
  </main>  
</template>
<style lang="stylus" scoped>
.section-features {
  padding-bottom: 75px;
  background-size: cover;
  color: #3e3a39;

  .content {
    font-size: 16px;
    line-height: 28px;
    margin: 78px 0 65px 0;
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
    color: #3e3a39;
  }
}

.section-group {
  position: relative;
  overflow: hidden;
  padding: 101px 0 202px 0;

  &:before {
    content: '';
    width: 60%;
    height: 100%;
    position: absolute;
    z-index: 1;
    left: -10%;
    bottom: 0;
    background: #e5b7ac;
    transform: skewX(-10deg);

    @media screen and (max-width: 768px) {
      transform: skewX(0deg);
    }
  }

  &:after {
    content: '';
    width: 60%;
    height: 100%;
    position: absolute;
    z-index: 2;
    right: -10%;
    bottom: 0;
    transform: skewX(-10deg);
    background: #bae0de;

    @media screen and (max-width: 768px) {
      transform: skewX(0deg);
    }
  }

  .container {
    position: relative;
    z-index: 3;

    .content {
      font-size: 20px;
      line-height: 42px;
      margin-bottom: 96px;
      color: #3e3a39;
    }

    .add {
      font-size: 136px;
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
  .subtitle {
    font-size: 28px;
    padding: 65px 0 0 
  }
  &.normal {
    height: 800px;

    @media screen and (max-width: 768px) {
      height: auto;
      min-height: 800px;
    }

    .title {
      font-size: 36px;
      margin: 100px 0 42px;
    }

    .content {
      font-size: 36px;
      padding: 70px 0 0;
      text-align: center;
      margin: 0 0 38px 0;
      color: #3e3a39;
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

.section-temperature {
  padding: 80px 0 110px;
  color: #3e3a39;
  .title  {
    font-size: 36px
  }
  
  p.content {
    padding: 14px 0 40px;
    max-width: 740px;
    margin: 0 auto;
    color: #3e3a39;
  }
}
</style>
<script>
import { FadeTransition } from 'vue2-transitions'
import ProductBanner from '~/components/ProductBanner'
import ProductParameter from '~/components/ProductParameter'

export default {
  components: {
    FadeTransition,
    ProductBanner,
    ProductParameter
  },
  data() {
    return {
      interval: null,
      temperature: 32,
      banner: {
        title: this.$t('智能三合一传感器'),
        subtitle: 'OOMI MotionSensor 3 in 1',
        img: `${
          this.$store.state.cdn
        }/2018/11/399f4340fde8fce3b3834dd2dd06a88d.png`,
        class: 'gray-radial-gradient'
      },
      parameters: [
        {
          column: 'is-2',
          item: this.$t('电源输入')
        },
        {
          column: 'is-4',
          value: 'USB：5V – 1A'
        },
        {
          column: 'is-2',
          item: this.$t('电池')
        },
        {
          column: 'is-4',
          value: 'CR123A 3V 1500mAh'
        },
        {
          column: 'is-2',
          item: this.$t('亮度测量范围')
        },
        {
          column: 'is-4',
          value: '0 LUX – 30000 LUX'
        },
        {
          column: 'is-2',
          item: this.$t('人体移动侦测最大距离')
        },
        {
          column: 'is-4',
          value: '8m'
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
          item: this.$t('无线功能')
        },
        {
          column: 'is-4',
          value: 'Z-Wave Plus'
        },
        {
          column: 'is-2',
          item: this.$t('产品尺寸')
        },
        {
          column: 'is-4',
          value: this.$t('46 × 46 × 62mm（含底座）')
        }
      ],
      features: [
        {
          img:
            '<svg xmlns="http://www.w3.org/2000/svg" width="102" height="102"><g fill="none" fill-rule="evenodd"><path stroke="#F26F21" d="M100.724 51c0 27.462-22.262 49.724-49.724 49.724-27.462 0-49.724-22.262-49.724-49.724C1.276 23.538 23.538 1.276 51 1.276c27.462 0 49.724 22.262 49.724 49.724z"/><path fill="#F26E21" fill-rule="nonzero" d="M51 77.534c-5.804 0-10.507-4.705-10.507-10.51 0-4.736 3.136-8.743 7.448-10.052V37.186c0-1.569 1.37-2.84 3.059-2.84s3.059 1.271 3.059 2.84v19.786a10.505 10.505 0 0 1 7.445 10.053c0 5.804-4.702 10.508-10.504 10.508m7.684-23.553V27.75c0-4.116-3.446-7.467-7.684-7.467-4.238 0-7.684 3.351-7.684 7.467v26.23c-4.561 2.663-7.447 7.556-7.447 13.047 0 8.345 6.788 15.134 15.131 15.134 8.34 0 15.131-6.789 15.131-15.134 0-5.49-2.885-10.384-7.447-13.047"/></g></svg>',
          text: this.$t('温度')
        },
        {
          img:
            '<svg xmlns="http://www.w3.org/2000/svg" width="102" height="102"><g fill="none" fill-rule="evenodd"><path stroke="#F26F21" d="M100.74 51c0 27.462-22.262 49.724-49.723 49.724-27.462 0-49.724-22.262-49.724-49.724 0-27.462 22.262-49.724 49.724-49.724 27.461 0 49.723 22.262 49.723 49.724z"/><path fill="#F26E21" fill-rule="nonzero" d="M66.167 50.448c0 8.363-6.779 15.146-15.15 15.146-8.366 0-15.15-6.783-15.15-15.147 0-8.367 6.784-15.15 15.15-15.15 8.371 0 15.15 6.783 15.15 15.15"/><path fill="#F26E21" fill-rule="nonzero" d="M54.257 25.883a3.24 3.24 0 0 1-3.24 3.235 3.236 3.236 0 1 1 2.29-5.524c.608.607.95 1.43.95 2.29" opacity=".5"/><path fill="#F26E21" fill-rule="nonzero" d="M71.752 33.125a3.24 3.24 0 0 1-5.528 2.29 3.235 3.235 0 0 1 2.288-5.524 3.239 3.239 0 0 1 3.24 3.234" opacity=".6"/><path fill="#F26E21" fill-rule="nonzero" d="M78.994 50.615a3.235 3.235 0 0 1-6.47 0 3.234 3.234 0 0 1 6.47 0" opacity=".7"/><path fill="#F26E21" fill-rule="nonzero" d="M71.752 68.312a3.24 3.24 0 0 1-5.528 2.288 3.235 3.235 0 0 1-.947-2.288c0-1.785 1.45-3.24 3.235-3.24a3.245 3.245 0 0 1 3.24 3.24" opacity=".8"/><path fill="#F26E21" fill-rule="nonzero" d="M54.257 75.36a3.246 3.246 0 0 1-3.24 3.24 3.243 3.243 0 0 1-3.24-3.24 3.235 3.235 0 0 1 3.24-3.235 3.239 3.239 0 0 1 3.24 3.235" opacity=".9"/><path fill="#F26E21" fill-rule="nonzero" d="M36.528 68.312a3.231 3.231 0 0 1-3.235 3.235 3.23 3.23 0 0 1-3.234-3.235 3.237 3.237 0 0 1 3.234-3.24 3.237 3.237 0 0 1 3.235 3.24m-7.013-17.697a3.235 3.235 0 0 1-5.527 2.292 3.237 3.237 0 1 1 5.527-2.292m7.013-18.257a3.231 3.231 0 0 1-3.235 3.232 3.23 3.23 0 0 1-3.234-3.232 3.232 3.232 0 0 1 3.234-3.24 3.232 3.232 0 0 1 3.235 3.24"/></g></svg>',
          text: this.$t('亮度')
        },
        {
          img:
            '<svg xmlns="http://www.w3.org/2000/svg" width="102" height="102"><g fill="none" fill-rule="evenodd"><path stroke="#F26F21" d="M100.754 51c0 27.462-22.262 49.724-49.724 49.724-27.46 0-49.723-22.262-49.723-49.724 0-27.462 22.262-49.724 49.723-49.724 27.462 0 49.724 22.262 49.724 49.724z"/><path fill="#F26E21" fill-rule="nonzero" d="M40.552 36.58a6.4 6.4 0 0 1-6.402-6.402 6.4 6.4 0 0 1 6.402-6.393 6.4 6.4 0 0 1 6.4 6.393 6.4 6.4 0 0 1-6.4 6.402"/><path fill="#F26E21" fill-rule="nonzero" d="M30.025 34.736c3.672 5.15 8.592 5.746 13.89 2.603.358-.216 1.954-1.096 2.308-1.304 8.52-5.06 17.029-3.078 22.731 4.914 2.427 3.4-3.18 6.623-5.578 3.261-2.952-4.125-6.696-5.321-10.795-4.017 2.095 3.648 3.931 7.269 6.523 12.415 2.586 5.143 8.31 9.253 13.803 6.04 3.966-2.32 7.536 3.375 3.588 5.686-7.503 4.385-16.3 1.69-20.787-4.007a4.208 4.208 0 0 1-.5.222c-3.672 1.28-8.475 4.679-9.941 5.888-1.466 1.199-3.985 7.347-5.481 10.43-1.813 3.75-7.663 1.02-5.843-2.743 1.69-3.5 4.536-10.486 6.75-12.258 1.78-1.417 5.235-4.056 8.165-5.557a259.144 259.144 0 0 0-6.218-11.366c-6.923 2.122-13.506-.376-18.194-6.942-2.426-3.4 3.179-6.618 5.58-3.265"/></g></svg>',
          text: this.$t('红外移动检测')
        }
      ]
    }
  },
  watch: {
    temperature(val) {
      if (val == 26) {
        clearInterval(this.interval)
      }
    }
  },
  methods: {
    numberChanging(isVisible, entry) {
      if (isVisible) {
        if (this.temperature > 26) {
          setTimeout(() => this.startChanging(), 300)
        }
      } else {
        this.temperature = 32
      }
    },
    startChanging() {
      this.interval = setInterval(() => {
        this.temperature = this.temperature - 1
      }, 100)
    }
  }
}
</script>