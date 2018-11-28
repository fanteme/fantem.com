<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section
      class="section-top normal"
      :style="{background: `url(${this.$store.state.cdn}/2018/11/3731d8e05428a66bafa29aecb62fd6a6.jpg) no-repeat 25% center/cover`}"
    >
      <div class="container">
        <div class="columns">
          <div class="column is-offset-6 is-6 has-text-centered has-text-white normal">
            <h2 class="content">{{$t('智能嵌入式调光开关')}}</h2>
            <p>{{$t('只需一个智能嵌入式调光开关，便能将传统调光面板智能化！无需改造原有线路，无需更换设备，无需调整格局，只需要安装在家中普通开关的86底盒内，即可实现灯光的智能化控制，智能生活触手可及。')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="columns" style="padding: 40px 0">
          <div class="column">
            <img :src="`${this.$store.state.cdn}/2018/11/23911a16f9cfa261cf0f02e03ed0af4b.png`">
            <h2 class="is-size-3 has-text-weight-bold has-text-centered">{{$t('适用负载')}}</h2>
          </div>
        </div>
      </div>
    </section>
    <section class="section-justify has-text-centered">
      <div class="container-fluid">
        <div class="columns">
          <div class="column is-6 monitor">
            <h2 class="title has-text-weight-normal">{{$t('能耗监测 负载功率监控')}}</h2>
            <p
              class="content has-text-weight-light"
            >{{$t('通过芯片监测内部温度，当产品过载或过热时会自动断开负载，并发出警示消息，让您及时了解家中的用电情况，让您用电更省心。')}}</p>
            <img
              style="padding-top:131px"
              :src="`${this.$store.state.cdn}/2018/11/bdaa5368cf8c3e4b76c4bab62cf63da5.png`"
            >
          </div>
          <div class="column is-6 custom">
            <h2 class="title has-text-weight-normal">{{$t('自定义场景控制')}}</h2>
            <p
              class="content has-text-weight-light"
            >{{$t('可设置不同的生活场景模式，实现电器设备的智能化控制。每一种模式都是一种享受，每一种氛围都恰到好处。')}}</p>
            <img
              style="padding-left: 20%"
              :src="`${this.$store.state.cdn}/2018/11/f2455eafc5fbee1c826c6b0ebc385108.png`"
            >
          </div>
        </div>
      </div>
    </section>
    <section
      class="section-convenience"
      :style="{background: `#e7eef4 url(${this.$store.state.cdn}/2018/11/a34cd4f51160b04eb0918d18aa9d0e97.jpg) no-repeat center/cover`}"
    >
      <div class="container">
        <div class="columns">
          <div class="column is-12 has-text-centered has-text-black">
            <h2 class="content">{{$t('易安装 真便利')}}</h2>
            <p>{{$t('无需改造原有线路，无需替换传统开关，只需要安装在家中普通开关的86底盒内，即可实现灯光的智能化控制，使传统开关智能化。')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-material" style="background: #fff">
      <div class="container">
        <div class="columns">
          <div class="column is-12 has-text-centered has-text-black">
            <h2 class="content">{{$t('阻燃PC/ABS材质')}}</h2>
            <p>{{$t('防水防尘，耐热抗压，全面阻燃防老化，不褪色，安全可靠。')}}</p>
            <img src="http://cdn.fantem.cn/2018/11/8002103cebef9fd8ed6606522a7eb231.jpg">
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
    padding: 40px 0 160px;
  }

  &-justify {
    overflow: hidden;

    .is-6 {
      min-height: 600px;
    }

    .title {
      font-size: 36px;
    }

    .content {
      margin-bottom: 0;
    }

    .monitor {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 5% 6% 0 20%;
      background-image: linear-gradient(-135deg, #fefefe, #b4a39c);
    }

    .custom {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 5% 20% 0 6%;
      background-image: linear-gradient(135deg, #fefefe, #c6d6cb);
    }
  }

  &-convenience {
    min-height: 700px;

    h2 {
      font-size: 36px;
      padding-top: 80px;
    }

    p {
      max-width: 588px;
      margin: 0 auto;
    }
  }

  &-material {
    padding: 80px 0;

    h2 {
      font-size: 36px;
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
        title: this.$t('智能嵌入式调光开关'),
        subtitle: 'OOMI In-Wall Dimmer',
        content: this.$t(
          '智能嵌入式调光开关是一款基于Z-Wave无线通讯协议的智能调光设备，能实现灯光的无线远程控制。该产品不仅能远程控制灯光的开关，还可以根据不同的环境调节灯光的亮度，同时支持外部开关手动控制，另外还具备实时监测功率的功能。'
        ),
        img: `${
          this.$store.state.cdn
        }/2018/11/bdb1e1aaa3435d255ef893aea15fb7d5.png`,
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
          item: this.$t('额定电流')
        },
        {
          column: 'is-4',
          value: '1.2A'
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
          value: '42.5 × 40 × 20.5mm'
        },
        {
          column: 'is-2',
          item: this.$t('适用负载')
        },
        {
          column: 'is-4',
          value: this.$t('白织灯、卤素灯、可调光 LED 灯以及可调光 CFL 灯')
        },
        {
          column: 'is-2',
          item: this.$t('接线方式')
        },
        {
          column: 'is-4',
          value: this.$t('单火或零火模式')
        }
      ]
    }
  }
}
</script>       