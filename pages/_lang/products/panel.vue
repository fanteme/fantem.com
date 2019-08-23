<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section class="section-right linkage has-text-center" :style="{backgroundImage: `url(${this.$store.state.cdn}/2019/08/dae5c5fba1d90e58c943382c2424e9b8.jpeg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-8 is-offset-2">
            <h2 class="title has-text-weight-normal has-text-white center">{{$t('电容式触碰 柔和指示灯')}}</h2>
            <p class="has-text-weight-light has-text-centered has-text-white">{{$t('拥有高灵敏的电容式触碰设计，响应极快，毫秒之间。还有通透的LED柔和白色指示光，柔和光圈简洁白色，不刺眼。半夜起床时也准确找到开关位置，柔和白光指明方向，专为夜起浅睡眠的人群制作。')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-top featrue has-text-centered has-text-white" :style="{backgroundImage: `url(${this.$store.state.cdn}/2019/08/8fa64a1331b5ce2030a7326746827ecf.jpeg)`}">
      <div class="container">
      <h2 class="title has-text-white has-text-weight-normal has-text-right ">{{$t('精雕细琢 极简工艺美学')}}</h2>
        <div class="columns is-multiline">
          <div class="column is-6 is-offset-6">
            <div class="columns is-multiline center">
              <div class="column is-6">
                <img class="panelSvg" :src="`${this.$store.state.cdn}/2019/08/1711efaedc1c2f52bebd7d84b26c1371.svg`">
                  <p class="subtitle has-text-weight-light">{{$t('')}}</p>
                  <span class="has-text-weight-light has-text-black">{{$t('钢化玻璃面板透亮典雅，坚固耐摔。')}}</span>
              </div>
              <div class="column is-6">
                <img class="panelSvg" :src="`${this.$store.state.cdn}/2019/08/6f92035cf15bf9d4d848f8caaa3ef9db.svg`">
                  <p class="subtitle has-text-weight-light">{{$t('')}}</p>
                  <span class="has-text-weight-light has-text-black">{{$t('防止灰尘，有效阻挡灰尘颗粒。')}}</span>
              </div>
              <div class="column is-6">
                <img class="panelSvg" :src="`${this.$store.state.cdn}/2019/08/e15954d53b30dbb7a365496e52c73fb6.svg`">
                  <p class="subtitle has-text-weight-light">{{$t('')}}</p>
                  <span class="has-text-weight-light has-text-black">{{$t('防止水滴，即使湿手触碰也不怕。')}}</span>
              </div>
              <div class="column is-6">
                <img class="panelSvg" :src="`${this.$store.state.cdn}/2019/08/75b9e2f8d679bd2db0a149dc96468270.svg`">
                  <p class="subtitle has-text-weight-light">{{$t('')}}</p>
                  <span class="has-text-weight-light has-text-black">{{$t('采用PC110阻燃材质，耐热抗压，全面阻燃防老化。')}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-right life has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2019/08/c6d9a3e894e1e6fd21992a32b3ff4741.jpeg)`}">
      <div class="container">
        <div class="columns is-multiline center">
         <div class="column is-5 is-offset-7">
           <h2 class="title has-text-weight-normal has-text-white">{{$t('个性化场景设定')}}</h2>
           <p class="has-text-weight-light has-text-white">{{$t('按键可短按长按都有不同的场景模式，还可设置不同的生活情景模式，实现电器设备的智能化控制。变化多样的模式设置，为你量身定制。')}}</p>
         </div>
        </div>
      </div>
    </section>
    <section class="section-right life has-text-right" :style="{backgroundImage: `url(${this.$store.state.cdn}/2019/08/7a0008f8948e63f106c9dc3d67a47b8d.jpeg)`}">
      <div class="container">
        <div class="columns is-multiline center">
          <div class="column is-5 is-offset-7">
            <h2 class="title has-text-weight-normal has-text-orange ">{{$t('极简操作 智慧生活')}}</h2>
            <p class="has-text-weight-light has-text-orange">
               {{$t('无需改线或重新布线，直接替换普通翘板按键开关，并通过连接OOMI智能家庭网关，联动OOMI相关智能节点设备，还有远程OOMI APP控制更可让您不在家也能了解其状态。无曲边极简工艺美学，展现出轻奢优雅。边框电镀铬拉丝但边缘毫无刮手感觉，历经多次打磨，极致贴合，匠心工艺只为做到最好。 满足你对智能家居生活的所有需求，达到你想要的预期效果。')}}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-right life has-text-right" :style="{backgroundImage: `url(${this.$store.state.cdn}/2019/08/c014ebd01c77c9cded927080181beb2b.jpg)`}">
      <div class="container">
        <div class="columns is-multiline center">
          <div class="column is-5 is-offset-8">
            <h2 class="title has-text-weight-normal has-text-white ">{{$t('多种方式智能联动')}}</h2>
            <p class="has-text-weight-light has-text-white">{{$t('清晨时刻，定时开灯，叫你起床。早上用柔和的灯光让你在睡梦中慢慢苏醒；')}}</p>
            <p class="has-text-weight-light has-text-white">{{$t('傍晚时刻，疲惫一天的你，下班回家，灯光自动为您开启回家模式，让您放松身体享受自在时光；')}}</p>
            <p class="has-text-weight-light has-text-white">{{$t('深夜时刻，睡意朦胧之时，伸手一按OOMI智能场景面板即可关灯，或者用远程控制也可关灯，让您安然入眠。')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-right life has-text-right" :style="{backgroundImage: `url(${this.$store.state.cdn}/2019/08/1e0f17d9d793d8f5341c7f6b7e362099.jpg)`}">
      <div class="container">
        <div class="columns is-multiline center">
          <div class="column is-4 is-offset-8">
            <h2 class="title has-text-weight-normal has-text-white">{{$t('智能生活 不至于此')}}</h2>
            <p class="has-text-weight-light has-text-white">{{$t('通过按键及无线命令可以控制开关，在保留传统开关功能的同时，还能实现智能远程操控，以及新增场景控制的功能！NFC碰触点印在开关面板的保护膜上，可通过OOMI Touch触碰控制。其面板背灯还代表了不同的设置状态，让人一目了然。')}}</p>
          </div>
        </div>
      </div>
    </section>
    <product-parameter :parameters="parameters"></product-parameter>
  </main>
</template>
<style lang="stylus" scoped>
.panelSvg{
    width: 100px;
    height: 100px;
}
.section
  &-top
    &.featrue
      padding: 110px 0 115px
      img
         margin: 55px 0 10px
      .center
        align-items: stretch
      .subtitle
        font-size: 20px
        margin-bottom: 18px
    &.control
      .columns
        height: 855px
  &-right
    background-position: right
    .title
      margin-bottom: 38px
    &.life
      .columns
        height: 850px
    &.linkage
      height: 855px
      padding: 75px 0 0
      .columns
        height: 850px
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
        banner: {
        title: this.$t('智能触控面板(S系列)'),
        subtitle: 'OOMI Touch Panel',
        content: this.$t('智能触控面板（s系列）OOMI Touch Panel包含智能零火单火一路 / 二路 / 四路。智能触控面板是一款基于Z-WAVE无线通讯协议的智能控制面板，能识别单击、长按和长按释放等控制动作，让你随心所欲进行你想要的控制。'),
        img: `${this.$store.state.cdn}/2019/08/f1b82da5e322e2867517bb9c1eeb3295.png`
      },
      parameters: [
        {
          column: "is-2",
          item: this.$t('额定电压')
        },
        {
          column: "is-4",
          value: '220V ～ 50Hz'
        },
        {
          column: "is-2",
          item: this.$t('待机功耗')
        },
        {
          column: "is-4",
          value: this.$t('1.0W( 零火一路 / 一路 / 四路开关 )')
        },
        {
          column: "is-2",
          item: this.$t('工作环境')
        },
        {
          column: "is-4",
          value: this.$t('温度：-10 – 40℃ / 湿度：20 – 80% RH')
        },
        {
          column: "is-2",
          item: this.$t('无线距离')
        },
        {
          column: "is-4",
          value: this.$t('室内 40m , 室外 120m')
        },
        {
          column: "is-2",
          item: this.$t('产品尺寸')
        },
        {
          column: "is-4",
          value: this.$t('86 × 86 × 30mm(一/二路) 86 × 86 × 32mm(四路)')
        },
        {
          column: "is-2",
          item: this.$t('无线功能')
        },
        {
          column: "is-4",
          value: 'Z-Wave Plus'
        },
        {
          column: "is-2",
          item: this.$t('产品颜色')
        },
        {
          column: "is-4",
          value: this.$t('白色')
        },
        {
          column: "is-2",
          item: this.$t('最大电流')
        },
        {
          column: "is-4",
          value: this.$t('10A × 1 路 ( 零火一路 )  / 8A × 2 路 ( 零火二路 )  / 4A × 4 路 ( 零火四路 )')
        }
      ]
    }
  }
}
</script>
