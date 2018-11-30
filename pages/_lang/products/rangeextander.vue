<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section class="section-left signal has-text-centered"  :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/76bc8667115659c5d9c0faef1392abaa.jpg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-6 is-offset-1">
            <h2 class="title has-text-weight-normal">{{$t('智能中继器，信号死角终结者！')}}</h2>
          </div>
          <div class="column is-6 is-offset-1">
            <div class="columns">
              <div class="column is-4">
                <img :src="`${this.$store.state.cdn}/2018/11/cdd2ae7178c5aad910722d1370bbbebe.svg`">
                <p class="has-text-weight-light">{{$t('信号增强')}}</p>
              </div>
              <div class="column is-4">
                <img :src="`${this.$store.state.cdn}/2018/11/cc25827e2fcc1fed87849a51cab4f8af.svg`">
                <p class="has-text-weight-light">{{$t('信号中转')}}</p>
              </div>
              <div class="column is-4">
                <img :src="`${this.$store.state.cdn}/2018/11/cf706d55cd1194236477425940112ac6.svg`">
                <p class="has-text-weight-light">{{$t('即插即用')}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-top signal has-text-centered has-text-white">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <h2 class="title has-text-weight-normal has-text-white">{{$t('信号覆盖 拒绝盲区')}}</h2>
            <p class="has-text-weight-light">{{$t('智能中继器能有效解决Z-Wave无线通讯协议的信号盲区，如洗手间、卧室等存在Z-Wave覆盖盲区。将OOMI智能中继器放在合适的位置，即可轻松实现Z-Wave信号全覆盖。')}}</p> 
            <img :src="`${this.$store.state.cdn}/2018/11/44b865a154d35f7b4e172da9b0b32752.png`">
          </div>
        </div>
      </div>
    </section>
    <product-parameter :parameters="parameters"></product-parameter>
  </main>  
</template> 
<style lang="stylus">
.section
  &-left 
    &.signal
      height: 800px 
      padding: 90px 0 0
      img 
        margin: 25px 0 10px
      .title
        margin-bottom: 38px  
  &-top
    &.signal
      background-color: #4d565b
      padding: 90px 0 105px
      img 
        margin-top: 70px 
      .title
        margin-bottom: 38px  
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
          title: this.$t('智能中继器'),
          subtitle: 'OOMI Range Extender',
          content: this.$t('智能中继器是一款支持Z-Wave无线通讯协议的信号中继设备，可以增加 OOMI 智能家居系统的信号强度，对信号进行放大中转，并延伸其信号的可覆盖距离，提高网关和节点的通讯距离和稳定性。'),
          img: `${this.$store.state.cdn}/2018/11/c0306a4bc01986518f6c97aad1ee1e33.png`,
          class: 'gray-radial-gradient'
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
            item: this.$t('发射功率')
          },
          {
            column: "is-4",  
            value: '7dBm '
          },
          {
            column: "is-2",  
            item: this.$t('待机功耗')
          },
          {
            column: "is-4",  
            value: '1W'
          },
          {
            column: "is-2",  
            item: this.$t('无线距离')
          },
          {
            column: "is-4", 
            value: this.$t('室内 40m')
          },
          {
            column: "is-2",  
            item: this.$t('工作环境')
          },
          {
            column: "is-4", 
            value: this.$t('温度：0 – 40℃ / 湿度：20 – 80% RH')
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
            item: this.$t('产品尺寸')
          },
          {
            column: "is-4", 
            value: this.$t('46 × 46 × 38mm(不含插脚）')
          }
        ]
      }
    }
  }  
</script>               