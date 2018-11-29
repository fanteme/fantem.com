<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section class="section-left control has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/150d9e9ff0031736b9b20d7f4235f919.jpg)`}">
      <div class="container">
        <div class="columns">
          <div class="column is-6">
            <h2 class="title has-text-weight-normal">{{$t('智能红外转换器')}}</h2>
            <p class="content has-text-weight-light">{{$t('智能红外转换器可实现传统红外设备智能化控制。它内置红外学习模块及海量红外码库，支持云端红外码库更新，兼容市场上绝大多数家电品牌，能够学习和发射红外信号，与OOMI设备进行Z-Wave沟通，使用户能通过手机遥控红外家电，还可与其他设备进行联动，令用户享受到智能家居带来的便捷生活。')}}</p>
            <div class="columns imgs">
              <div class="column is-4">
                <img :src="`${this.$store.state.cdn}/2018/11/f04f9454fb837e8a7df66bca3fa6dffe.svg`">
                <p class="has-text-weight-light">{{$t('云端码库')}}</p>
              </div>
              <div class="column is-4">
                <img :src="`${this.$store.state.cdn}/2018/11/e87b8ce5e4e5060968f67d069945a9f5.svg`">
                <p class="has-text-weight-light">{{$t('万能遥控')}}</p>
              </div>
              <div class="column is-4">
                <img :src="`${this.$store.state.cdn}/2018/11/4d07ac3fc96c153edab8db8f5e6b306e.svg`">
                <p class="has-text-weight-light">{{$t('360°红外学习')}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-top infrared has-text-centered theme-background-color">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-8 is-offset-2">
            <h2 class="title has-text-weight-normal">{{$t('内置海量红外码库')}}</h2>
            <p class="has-text-weight-light">{{$t('拥有海量红外码库，支持市面上主流品牌家电，操作简单，让家居生活更加便捷。')}}</p> 
          </div>
          <div class="column is-12">
            <img :src="`${this.$store.state.cdn}/2018/11/b9ff2569c292f281a081f4d047989e18.png`">
          </div>
        </div>
      </div>
    </section>
     <section class="section-top study has-text-centered">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-8 is-offset-2">
            <h2 class="title has-text-weight-normal">{{$t('360°红外学习功能')}}</h2>
            <p class="has-text-weight-light">{{$t('具备360°红外学习功能模块，可学习和发射红外信号，与OOMI系列产品通过Z-Wave互联互通，从而将家中红外设备纳入OOMI智能家居系统体系，实现OOMI对红外娱乐设备的智能管控，精简家中遥控器。')}}</p> 
          </div>
        </div>
        <div class="columns">
          <div class="column is-3">
            <img :src="`${this.$store.state.cdn}/2018/11/b7896e06cd7b7d07bdbe384fe4d00a9c.jpg`">
            <p class="has-text-weight-light">{{$t('下载OOMI APP')}}</p>
          </div>
          <div class="column is-3">
            <img :src="`${this.$store.state.cdn}/2018/11/97fb33b7527ce519c04c58c63af6d35e.jpg`">
            <p class="has-text-weight-light">{{$t('接通电源')}}</p>
          </div>
          <div class="column is-3">
            <img :src="`${this.$store.state.cdn}/2018/11/82c21c5db7ceb86408ad5dce47391fd9.jpg`">
            <p class="has-text-weight-light">{{$t('添加智能红外转换器')}}</p>
          </div>
          <div class="column is-3">
            <img :src="`${this.$store.state.cdn}/2018/11/7bf0d7ce31d4ea5a0f2f7ec7c5356552.jpg`">
            <p class="has-text-weight-light">{{$t('点对点红外学习或匹配品牌家电红外码库')}}</p>
          </div>
        </div>
      </div>
    </section>
    <product-parameter :parameters="parameters"></product-parameter>   
  </main>
</template>    
<style lang="stylus" scoped>
.section
  &-left
    .title 
      margin-bottom: 38px
    &.control
      height: 950px
      padding: 90px 0 0
      @media screen and (max-width: 768px) {
        height: auto
        padding-bottom: 60px 
      }
      img 
        margin: 25px 0 10px 
  &-top
    .title 
      margin-bottom: 38px
    &.infrared
      height: 900px 
      padding: 80px 0 0
    &.study
      padding: 90px 0 95px
      img 
        margin: 25px 0 10px 
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
          title: this.$t('智能红外转换器'),
          subtitle: 'OOMI IR Blaster',
          content: this.$t('插式空调控制设备，无需改装，即插即用。支持 Z-Wave 和OOMI 智能家居系统无线远程控制，具有能源监测、智能中继器、红外指令学习的功能，能够轻松实现红外类家用电器智能化。'),
          img: `${this.$store.state.cdn}/2018/11/300832c032d8c5708de39c8b32afa3d1.png`,
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
            item: this.$t('待机功耗')
           },
           {
            column: "is-4", 
            value: '0.8W'
           },
           {
            column: "is-2",  
            item: this.$t('工作环境')
           },
           {
            column: "is-4", 
            value: this.$t('温度：0 – 40℃  湿度：20 – 80% RH')
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
            item: this.$t('产品尺寸')
           },
           {
            column: "is-4", 
            value: '46 × 46 × 36mm '
           }, 
           {
            column: "is-2",  
            item: this.$t('无线功能')
           },
           {
            column: "is-4", 
            value: 'Z-Wave Plus'
           }
         ]
      }
    }
  }
</script>