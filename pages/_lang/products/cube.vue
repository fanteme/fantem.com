<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section class="section-top">
      <div class="container-fluid">
        <div class="columns is-gapless">
          <div class="column is-4 center">
            <img :src="`${this.$store.state.cdn}/2018/11/7736ede9af6bfbc6b6e2f03bf066cec4.jpg`">
          </div>
          <div class="column is-4 center">
            <img :src="`${this.$store.state.cdn}/2018/11/eb4931303d709d9ced0cd7f51db95bf0.jpg`">
          </div>
          <div class="column is-4 center">
            <img :src="`${this.$store.state.cdn}/2018/11/e4b138bd009d5fb9774f77d120cf5789.jpg`">
          </div>
        </div>
      </div>
    </section>
    <section class="section-top features theme-background-color has-text-centered">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h2 class="title has-text-weight-normal">{{$t('Cube智能家庭网关，')}}</h2>
            <h2 class="title has-text-weight-normal">{{$t('五大特色功能为您的智能家居生活添色加彩')}}</h2>
          </div>
        </div>
      </div>
    </section>
    <section class="theme-background-color">
      <div class="container has-text-centered">
        <div class="columns is-gapless">
          <div class="column">
            <h3 class="icon-title center has-text-weight-normal">
              <strong class="has-text-weight-normal has-text-centered">01</strong>
              <span>{{$t('夜视监控摄像头')}}</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
    <section
      class="section-justify infrared"
      :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/e6b5635dd52f042307579f5019c715b9.jpg)`}"
    >
      <div class="container-fluid">
        <div class="columns is-gapless">
          <div class="column white-background-color is-6 has-text-centered">
            <img
              v-if="$store.state.locale == 'en'"
              :src="`${this.$store.state.cdn}/2019/03/504602474aeed4b6132341088279e4e2.png`"
            >
            <img
              v-else
              :src="`${this.$store.state.cdn}/2019/03/4c70575515d1c905aba9f75bf9cc5164.png`"
            >
          </div>
          <div class="column is-6 has-text-white">
            <h3 class="title has-text-white has-text-weight-normal">{{$t('高清红外夜视，再黑也能拍清楚')}}</h3>
            <p class="content has-text-weight-light">{{$t('24小时全天候总览全家，即便深夜也能清晰捕捉家中情况。')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="section-right monitoring has-text-centered full"
      :style="{backgroundImage: `url(${this.$store.state.cdn}/2019/03/80106244f9336604bdf26e75cb48a2c6.jpg)`}"
    >
      <div class="container">
        <div class="columns">
          <div class="column">
            <h3 class="has-text-white has-text-weight-normal">{{$t('移动端实时查看，时刻掌握监控情况')}}</h3>
            <p
              class="content has-text-white has-text-weight-light"
            >{{$t('摄像机实时监测家中情况，在安防模式或离家模式下，一旦家中出现异动，它会立即向用户手机推送报警消息，时刻捍卫用户的家居安全。')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-top temperature dark has-text-centered">
      <div class="container">
        <div class="columns is-gapless is-multiline">
          <div class="column is-12">
            <h3 class="icon-title center has-text-weight-normal has-text-white">
              <strong class="has-text-weight-normal has-text-white">02</strong>
              <span>{{$t('温湿度传感器')}}</span>
            </h3>
            <h4 class="has-text-white">{{$t('实时检测温湿度状态，温湿度异常提醒，实时监测室内温湿度变化')}}</h4>
          </div>
          <div class="column is-12">
            <div class="chart">
              <img :src="`${this.$store.state.cdn}/2018/11/8d428b1137703ac1485db4132f2cab84.png`">
              <img
                class="trend"
                :src="`${this.$store.state.cdn}/2018/11/1cee87054b724b200c8adfc385a30a90.png`"
              >
            </div>
          </div>
          <div class="column is-12">
            <div class="chart">
              <img :src="`${this.$store.state.cdn}/2018/11/fb1e3f5fb0a84e749c57152d0439ca1f.png`">
              <img
                class="trend"
                :src="`${this.$store.state.cdn}/2018/11/e5a1930074943fb6b5a7a3309371b894.png`"
              >
            </div>
          </div>
          <div class="column is-12">
            <div class="columns has-text-centered">
              <div class="column comments center is-3 is-offset-3 has-text-white">
                <i></i>
                {{$t('全天湿度')}}
              </div>
              <div class="column comments center is-3 has-text-white">
                <i class="red"></i>
                {{$t('全天温度')}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-right refused-dry">
      <div class="columns is-desktop is-gapless">
        <div class="column center">
          <img :src="`${this.$store.state.cdn}/2019/03/a6a0fed3ccd1056fd3acb83269f48b1d.jpg`">
        </div>
        <div class="column center theme-background-color">
          <div
            class="center"
            style="flex-direction:column;justify-content:space-around;height:100%;margin:0 10%;padding:5% 0;"
          >
            <h3>{{$t('联动智能设备 创造舒适生活环境')}}</h3>
            <h3 class="title orange has-text-weight-normal">{{$t('拒绝湿度失衡')}}</h3>
            <p
              class="has-text-weight-light"
            >{{$t('当传感器检测到室内环境过于干燥/潮湿时，Cube智能家庭网关可通过联动智能插座，打开与其相连的加湿器/除湿器，将室内湿度调至适宜水平。')}}</p>
            <div class="icons has-text-centered">
              <ul>
                <li>
                  <img
                    :src="`${this.$store.state.cdn}/2018/11/c5e9683e8e83a7f2587e9e19b34bcf65.svg`"
                  >
                  <p class="has-text-weight-light">{{$t('检测空气质量')}}</p>
                </li>
                <li>
                  <img
                    class="arrow"
                    :src="`${this.$store.state.cdn}/2019/03/4ea37a74e474b040a763d4f9c7cc6ec9.svg`"
                  >
                </li>
                <li>
                  <img
                    :src="`${this.$store.state.cdn}/2019/03/4ea37a74e474b040a763d4f9c7cc6ec9.svg`"
                  >
                  <p class="has-text-weight-light">{{$t('分析数据')}}</p>
                </li>
                <li>
                  <img
                    class="arrow"
                    :src="`${this.$store.state.cdn}/2019/03/4ea37a74e474b040a763d4f9c7cc6ec9.svg`"
                  >
                </li>
                <li>
                  <img
                    :src="`${this.$store.state.cdn}/2018/11/3eae16ccd55a877bf82560fe4fc7f3f6.svg`"
                  >
                  <p class="has-text-weight-light">{{$t('联动插座设备')}}</p>
                </li>
                <li>
                  <img
                    class="arrow"
                    :src="`${this.$store.state.cdn}/2019/03/4ea37a74e474b040a763d4f9c7cc6ec9.svg`"
                  >
                </li>
                <li>
                  <img
                    :src="`${this.$store.state.cdn}/2018/11/82b1849a9dfbed0621a6a75a41dac135.svg`"
                  >
                  <p class="has-text-weight-light">{{$t('开启加湿器')}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-left refused-hot">
      <div class="columns is-desktop is-gapless">
        <div class="column center theme-background-color">
          <div
            class="center"
            style="flex-direction:column;justify-content:space-around;height:100%;margin:0 10%;padding:5% 0;"
          >
            <h3 class="title orange has-text-weight-normal">{{$t('拒绝极端室温')}}</h3>
            <p
              class="has-text-weight-light"
            >{{$t('当温度过高/过低时，传感器可联动OOMI智能空调红外转换器自动开启空调制冷/制热模式，时刻维持恒温舒适的家居环境。')}}</p>
            <div class="icons has-text-centered">
              <ul>
                <li>
                  <img
                    :src="`${this.$store.state.cdn}/2018/11/0898c31a461b7eed9749ab14588abdb9.svg`"
                  >
                  <p class="has-text-weight-light">{{$t('检测室内温度')}}</p>
                </li>
                <li>
                  <img
                    class="arrow"
                    :src="`${this.$store.state.cdn}/2019/03/4ea37a74e474b040a763d4f9c7cc6ec9.svg`"
                  >
                </li>
                <li>
                  <img
                    :src="`${this.$store.state.cdn}/2019/03/4ea37a74e474b040a763d4f9c7cc6ec9.svg`"
                  >
                  <p class="has-text-weight-light">{{$t('分析数据')}}</p>
                </li>
                <li>
                  <img
                    class="arrow"
                    :src="`${this.$store.state.cdn}/2019/03/4ea37a74e474b040a763d4f9c7cc6ec9.svg`"
                  >
                </li>
                <li>
                  <img
                    :src="`${this.$store.state.cdn}/2018/11/241b8ace1dc74dfdebb6733cbdaa242c.svg`"
                  >
                  <p class="has-text-weight-light">{{$t('联动遥控设备')}}</p>
                </li>
                <li>
                  <img
                    class="arrow"
                    :src="`${this.$store.state.cdn}/2019/03/4ea37a74e474b040a763d4f9c7cc6ec9.svg`"
                  >
                </li>
                <li>
                  <img
                    :src="`${this.$store.state.cdn}/2018/11/96cbe9cf0ed15f1f023519683ef84f45.svg`"
                  >
                  <p class="has-text-weight-light">{{$t('开启空调')}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="column">
          <img :src="`${this.$store.state.cdn}/2019/03/11a9497f93cb8ea5a6427eddf5470d9c.jpg`">
        </div>
      </div>
    </section>
    <section class="section-top light gray-radial-gradient has-text-centered">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h3 class="icon-title center has-text-weight-normal">
              <strong class="has-text-weight-normal">03</strong>
              <span>{{$t('亮度传感器')}}</span>
            </h3>
            <h3>{{$t('智能光控，光亮随环境改变')}}</h3>
          </div>
          <div class="column is-6 is-offset-3">
            <p class="has-text-weight-light">{{$t('智能识别家居环境光线明暗度，可结合预设的智能场景自动调节灯光亮度。')}}</p>
          </div>
          <div class="column is-12">
            <img :src="`${this.$store.state.cdn}/2019/03/4f3df5e82c80d968c5560148ac0222a5.jpg`">
          </div>
        </div>
      </div>
    </section>
    <section class="section-top has-text-centered">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h3 class="icon-title center has-text-weight-normal">
              <strong class="has-text-weight-normal">04</strong>
              <span>{{$t('人体红外感应器')}}</span>
            </h3>
            <p class="has-text-weight-light">{{$t('能探测到物体的移动，并可在OOMI智能家庭操控平板上查看物体移动的相关信息。')}}</p>
          </div>
          <div class="column is-12">
            <img :src="`${this.$store.state.cdn}/2019/03/80ed112a77c0d574a7fae73fca406169.png`">
          </div>
        </div>
      </div>
    </section>
    <section class="section-top voice has-text-centered theme-background-color">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h3 class="icon-title center has-text-weight-normal">
              <strong class="has-text-weight-normal">05</strong>
              <span>{{$t('扬声器与麦克风')}}</span>
            </h3>
            <h3 class="subtitle">{{$t('双向语音对讲，高保真音质，方便在外远程查看的同时，进行语音沟通。')}}</h3>
          </div>
        </div>
      </div>
      <div
        class="container-fluid dialog"
        :style="{backgroundImage: `url(${this.$store.state.cdn}/2019/03/aa6393ab78424ada63f07c7e40ba4c8e.jpg)`}"
      ></div>
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
            <img :src="`${this.$store.state.cdn}/2019/03/5d0e6affddbdd02f92b8a16e3ca762f2.png`">
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style lang="stylus" scoped>
.icon-title {
  color: #3e3a39;
  font-size: 28px;
  padding: 55px 0;
  vertical-align: middle;

  strong {
    width: 124px;
    height: 124px;
    font-size: 74px;
    border: 1px solid #626161;
    border-radius: 8px;
    margin-right: 30px;
  }

  span {
    line-height: 54px;
    border-bottom: 1px solid #ebb08d;
  }

  &.has-text-white {
    span {
      border-bottom-color: #663014;
    }

    strong {
      border-color: #fff;
    }
  }
}

.section {
  &-top {
    background-position: center;

    &.dark {
      background: #020106;
    }

    &.features {
      padding: 50px 0;

      .title {
        margin: 0 0 10px;
      }
    }

    .easy-shuttle {
      max-height: 800px;
      overflow: hidden;

      img {
        margin-top: 14px;
      }

      .title {
        padding-top: 70px;
        margin-bottom: 0;
      }

      .content {
        margin: 30px 0 70px;
      }

      img {
        vertical-align: bottom;
      }
    }

    h4 {
      font-size: 20px;
    }

    h3 {
      font-size: 28px;
    }

    .title {
      color: #3e3a39;
      font-size: 36px;
    }

    .content {
      color: #3e3a39;
      margin-bottom: 0;
    }

    &.temperature {
      padding-bottom: 80px;

      h4 {
        margin: 30px 0 70px;
      }

      .chart {
        position: relative;
        display: inline-block;
        margin-bottom: 40px;

        .trend {
          position: absolute;
          bottom: 30px;
          left: 58px;
        }
      }

      .comments {
        i {
          width: 100px;
          display: inline-block;
          height: 2px;
          background: #03f8eb;
          margin-right: 25px;

          &.red {
            background: #d73526;
          }
        }
      }
    }

    &.light {
      padding-bottom: 36px;
      .has-text-weight-light {
        margin: 20px 0 20px;
      }

      img {
        vertical-align: bottom;
      }
    }

    &.voice {
      .subtitle {
        margin-bottom: 50px;
      }

      .dialog {
        height: 720px;
      }
    }
  }

  &-right, &-left {
    background-repeat: no-repeat;

    img {
      vertical-align: top;
    }

    &:not(.normal) {
      background-size: cover;
    }

    &.normal {
      padding: 60px 0;

      @media screen and (max-width: 768px) {
        height: auto;
        min-height: 800px;
      }
    }

    h3 {
      font-size: 28px;
    }

    .title {
      margin: 0;

      &.orange {
        color: #f26f21;
      }
    }
  }

  &-left {
    .icons {
      ul {
        justify-content: flex-start;
      }
    }
  }

  &-right {
    &.monitoring {
      min-height: 800px;

      .columns {
        padding: 30px 0 0;

        @media screen and (max-width: 1280px) {
          padding: 100px 0;
        }
      }
    }
  }

  &-justify {
    overflow: hidden;

    &.infrared {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top right;

      @media screen and (max-width: 768px) {
        padding-bottom: 60px;
        background-position: bottom right;
      }
    }

    img {
      margin: 100px 0 90px;

      @media screen and (max-width: 768px) {
        margin: 40px 0;
      }
    }

    .title {
      margin: 80px 0 0 50px;
    }

    .content {
      margin: 20px 0 0 50px;
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
      banner: {
        title: this.$t('Cube智能家庭网关'),
        subtitle: this.$t('OOMI 智能家居设备操控中心'),
        content: this.$t(
          'Cube智能家庭网关是 OOMI 智能家居系统的大脑，具备多种功能：红外夜视监控摄像头即时了解家中情况；温度、湿度、亮度、人体红外感应器全面感知家中环境；360°红外学习模块精简家中遥控器。智能家庭网关Cube面面俱到，全方位覆盖您的智能家居生活。'
        ),
        img: `${
          this.$store.state.cdn
        }/2018/11/62a6f722acec28ea609bddfd2de7cb29.png`,
        class: 'gray-radial-gradient'
      },
      parameters: [
        {
          name: this.$t('电源输入'),
          value: this.$t('DC 5V 2A')
        },
        {
          name: this.$t('摄像头'),
          value: this.$t('720P，具备红外夜视功能')
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
          name: this.$t('无线距离'),
          value: this.$t('室内 40m')
        },
        {
          name: this.$t('无线功能'),
          value: this.$t('Z-Wave Plus, 802.11b/g/n (Wi-Fi), 蓝牙 4.0')
        },
        {
          name: this.$t('产品尺寸'),
          value: this.$t('80*85*82mm (不含底座)')
        }
      ]
    }
  }
}
</script>
