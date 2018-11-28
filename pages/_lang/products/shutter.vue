<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section class="section-top operation has-text-centered">
      <div class="container">
        <div class="columns">
          <div class="column is-10 is-offset-1">
            <h2 class="title has-text-weight-normal">{{$t('智能马达控制器')}}</h2>
            <p
              class="has-text-weight-light"
            >{{$t('智能马达控制器体积小巧，安装简单，它可以配合电机，应用于窗帘、投影幕布、遮阳帘等设备，实现远程操控和场景联动，让生活更智能。另外还具备过载、过热保护和功率实时检测的功能，让您放心使用！')}}</p>
            <div class="icons has-text-centered">
              <ul>
                <li>
                  <div>
                    <img
                      :src="`${this.$store.state.cdn}/2018/11/8cc4d4ee5b7087743c458fd90d6ad05b.svg`"
                    >
                  </div>
                  <span class="has-text-weight-light">{{$t('发送指令')}}</span>
                </li>
                <li>
                  <img
                    class="arrow"
                    :src="`${this.$store.state.cdn}/2018/11/4ea37a74e474b040a763d4f9c7cc6ec9.svg`"
                  >
                </li>
                <li>
                  <div>
                    <img
                      :src="`${this.$store.state.cdn}/2018/11/5ba9a896192f8cd93889352e3b7ca5c9.svg`"
                    >
                  </div>
                  <span class="has-text-weight-light">{{$t('接受指令')}}</span>
                </li>
                <li>
                  <img
                    class="arrow"
                    :src="`${this.$store.state.cdn}/2018/11/4ea37a74e474b040a763d4f9c7cc6ec9.svg`"
                  >
                </li>
                <li>
                  <div>
                    <img
                      :src="`${this.$store.state.cdn}/2018/11/e066e3fbeac4ea41afbb5b9f1f47d636.svg`"
                    >
                  </div>
                  <span class="has-text-weight-light">{{$t('联动普通电机')}}</span>
                </li>
                <li>
                  <img
                    class="arrow"
                    :src="`${this.$store.state.cdn}/2018/11/4ea37a74e474b040a763d4f9c7cc6ec9.svg`"
                  >
                </li>
                <li>
                  <div>
                    <img
                      :src="`${this.$store.state.cdn}/2018/11/2fa83936d69a0e1493ea711575914984.svg`"
                    >
                  </div>
                  <span class="has-text-weight-light">{{$t('实现操控需求')}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="columns is-variable is-1">
          <div class="column">
            <img :src="`${this.$store.state.cdn}/2018/11/ac9b2acdc8df886f781429a02a03c68b.jpg`">
          </div>
          <div class="column">
            <img :src="`${this.$store.state.cdn}/2018/11/446a10e33d9c0feb29a1503ea364de14.jpg`">
          </div>
          <div class="column">
            <img :src="`${this.$store.state.cdn}/2018/11/a60183b5787ee58c7bfcb0242fc64180.jpg`">
          </div>
        </div>
      </div>
    </section>
    <section
      class="section-left protection has-text-centered"
      :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/1f9ff495e31d88b835ccb45bd3e7adc4.jpg)`}"
    >
      <div class="container">
        <div class="columns">
          <div class="column is-5 is-offset-1">
            <h2 class="title has-text-weight-normal has-text-white">{{$t('保护功能')}}</h2>
            <p
              class="has-text-weight-light has-text-white"
            >{{$t('具有堵载、过载、欠载、电流不平衡、接地、漏电、缺相、过压及过负荷等多种综合保护功能，保障智能马达控制器系统安全可靠的运行。')}}</p>
            <img :src="`${this.$store.state.cdn}/2018/11/13b3d454c95cf966fea9c248f7adf453.png`">
          </div>
        </div>
      </div>
    </section>
    <section
      class="section-right monitoring has-text-centered"
      :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/00e828382b397f8618b2cbe1ee066a8d.jpg)`}"
    >
      <div class="container">
        <div class="columns">
          <div class="column is-5 is-offset-7">
            <h2 class="title has-text-weight-normal has-text-white">{{$t('负载功率监控')}}</h2>
            <p
              class="has-text-weight-light has-text-white"
            >{{$t('当产品过载或过热时会自动断开负载，并发出警示消息，让您及时了解当前设备运行状况，让您用电更省心。')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="section-left timing has-text-centered"
      :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/b0999dd367be77e20de40164869e9b19.jpg)`}"
    >
      <div class="container">
        <div class="columns">
          <div class="column is-5 is-offset-1">
            <h2 class="title has-text-weight-normal">{{$t('定时设置 场景联动')}}</h2>
            <p class="has-text-weight-light">{{$t('智能产品联动使用，适合窗帘、投影幕布、遮阳帘等设备使用。')}}</p>
            <p class="has-text-weight-light">{{$t('（需搭配具备OOMI网关功能的设备，联动使用）')}}</p>
          </div>
        </div>
      </div>
    </section>
    <product-parameter :parameters="parameters"></product-parameter>
  </main>
</template> 
<style lang="stylus" scoped>
.section {
  &-top {
    .title {
      margin-bottom: 35px;
    }

    &.operation {
      padding: 75px 0 0;

      .icons {
        justify-content: center;
        margin: 45px 0 13px;
      }
    }
  }

  &-left {
    background-position: center;

    .title {
      margin-bottom: 43px;
    }

    &.protection {
      height: 750px;
      padding: 95px 0 67px;

      img {
        margin-top: 70px;
      }
    }

    &.timing {
      height: 800px;
      padding: 75px 0 0;
    }
  }

  &-right {
    background-position: center;

    .title {
      margin-bottom: 43px;
    }

    &.monitoring {
      height: 750px;
      padding: 95px 0 0;
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
        title: this.$t('智能马达控制器'),
        subtitle: 'OOMI In-wall Shutter',
        content: this.$t(
          '智能马达控制器，是一款基于Z-Wave无线通讯协议的智能交流电机无线远程控制的设备，能实现无线远程控制电机的正转、反转或停止，也可通过外接面板开关进行手动控制。'
        ),
        img: `${
          this.$store.state.cdn
        }/2018/11/9af50a2eda19bb36d3af7d22185e034d.png`,
        class: 'gray-radial-gradient'
      },
      parameters: [
        {
          column: 'is-2',
          item: this.$t('额定电压')
        },
        {
          column: 'is-4',
          value: '250V ～ 50Hz'
        },
        {
          column: 'is-2',
          item: this.$t('最大电流')
        },
        {
          column: 'is-4',
          value: '2.5A'
        },
        {
          column: 'is-2',
          item: this.$t('待机功耗')
        },
        {
          column: 'is-4',
          value: '1W'
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
          item: this.$t('工作环境')
        },
        {
          column: 'is-4',
          value: this.$t('温度：0 – 40℃ / 湿度：20 – 80% RH')
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
          value: '44 × 40 × 20.5mm'
        }
      ]
    }
  }
}
</script>       