<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section class="section-right full interaction has-text-right has-text-white" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/4b8ac3cae3d1b86533767bcab3cce6fa.jpg)`}">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h3 class="title has-text-weight-normal has-text-white">{{$t('感应门窗开合状态')}}</h3>
            <p class="content has-text-weight-light">{{$t('门窗传感器通过主体与磁铁之间的感应，判断门窗开关状态')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-top interaction has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/ab79945a341f9c6a5637b738507ff42d.jpg)`}">
      <div class="container">
        <div class="columns is-gapless">
          <div class="column">
            <h3 class="title has-text-weight-normal">{{$t('岂止于门窗，更可感应家中所有动态，实现全屋智能化！')}}</h3>
            <p class="content has-text-weight-light">{{$t('搭配OOMI Cube网关，实时感应门窗开关状态！多种应用场景，只有你想不到，没有用不到！')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-top steward has-text-centered">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h3 class="title has-text-weight-normal">{{$t('智能管家 为安全护航')}}</h3>
          </div>
          <div class="column is-8 is-offset-2">
            <p class="content has-text-weight-light">{{$t('安装好门窗感应器，设置并开启布防模式，当监测到异常或有人闯入时会推送提醒，并触动安防系统，同时OOMI Cube摄像头会开始录像。')}}</p>
          </div>  
          <div class="column is-12">  
            <div class="icons has-text-centered">
              <ul>
                <li>
                  <div><img :src="`${this.$store.state.cdn}/2018/11/44f7ed78236bfe5f455575846efdbac1.svg`"></div>
                  <span class="has-text-weight-light">{{$t('检测门窗异常开启')}}</span>
                </li>
                <li>
                  <img class="arrow" :src="`${this.$store.state.cdn}/2018/11/4ea37a74e474b040a763d4f9c7cc6ec9.svg`">
                </li>
                <li>
                  <div><img :src="`${this.$store.state.cdn}/2018/11/ff14a87d0b763fda83977782d4ec8deb.svg`"></div>
                  <span class="has-text-weight-light">{{$t('报告网关')}}</span>
                </li>
                <li>
                  <img class="arrow" :src="`${this.$store.state.cdn}/2018/11/4ea37a74e474b040a763d4f9c7cc6ec9.svg`">
                </li>
                <li>
                  <div><img :src="`${this.$store.state.cdn}/2018/11/8cc4d4ee5b7087743c458fd90d6ad05b.svg`"></div>
                  <span class="has-text-weight-light">{{$t('开启摄像头录像')}}</span>
                </li>
                <li>
                  <img class="arrow" :src="`${this.$store.state.cdn}/2018/11/4ea37a74e474b040a763d4f9c7cc6ec9.svg`">
                </li>
                <li>
                  <div><img :src="`${this.$store.state.cdn}/2018/11/de874843cfab88051652b9ab2c432c89.svg`"></div>
                  <span class="has-text-weight-light">{{$t('手机APP/Touch查看')}}</span>
                </li>
              </ul>  
            </div>
            <img :src="`${this.$store.state.cdn}/2018/11/7d0742fa616865c7901a5330d63b1944.png`">
          </div>
        </div>
      </div>
    </section>
    <section class="section-left full scene has-text-left" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/5a72d5499ac293d3b897c774c945cf97.jpg)`}">
      <div class="container">
        <div class="columns">
          <div class="column is-5">
            <h3 class="title has-text-weight-normal">{{$t('智能场景联动 给您舒适的家')}}</h3>
            <p class="content has-text-weight-light">{{$t('将门窗传感器安装在门上，结合OOMI智能家居节点设备设置智能场景。当您夜晚下班回家，打开门的同时，窗帘拉开，灯光自动亮起，家中已做好迎接您的准备。')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-left full electric has-text-left" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/952db1a051cf28c322158fac87aa600b.jpg)`}">
      <div class="container">
        <div class="columns">
          <div class="column is-5">
            <h3 class="title has-text-weight-normal">{{$t('低电量提醒 智能更贴心')}}</h3>
            <p class="content has-text-weight-light">{{$t('低电时向手机发送提示，及时通知，做好充电准备。')}}</p>
            <img :src="`${this.$store.state.cdn}/2018/11/89e6c5f2a1a3f8df7fa33a91685488a2.svg`">
          </div>
        </div>
      </div>
    </section>
    <product-parameter :parameters="parameters"></product-parameter>  
  </main>
</template>
<style lang="stylus">
.section
  &-top
    background-size: cover
    background-position: center
    &.interaction
      padding: 136px 0 575px 
    &.steward  
      padding: 72px 0 58px
      .icons
        margin: 20px 0 80px 
        ul 
          justify-content: center
    .title
      margin-bottom: 38px    
           
  &-right, &-left
    background-repeat: no-repeat
    background-position: center
    &.full
      height: 800px
      @media screen and (max-width: 768px) {
        height: auto
        min-height: 680px
      }   
    .title
      margin-bottom: 38px     
  &-left    
    &.scene
      padding: 120px 0 530px
      @media screen and (max-width:768px) {
        padding: 60px 0 330px
      }
    &.electric
      padding: 108px 0 110px
      height: 620px
      @media screen and (max-width:768px) {
        padding: 50px 0 50px
        height: auto
        min-height: 550px
      }
  &-right
    &.interaction
      padding: 103px 0 590px
      @media screen and (max-width:768px) {
        padding: 50px 0 390px
      }
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
          title: this.$t('智能门窗感应器'),
          subtitle: 'OOMI Door/Window Sensor',
          content: this.$t('智能门窗传感器可用于监测门窗等的开启 / 关闭状态并报告至网关，以便关联其他设备做相应响应，并且可以与其他设备联动，根据自己的喜好设置智能场景。'),
          img: `${this.$store.state.cdn}/2018/11/8000cfde5dc3cf9ecddb76f0f74f9809.png`,
          class: 'gray-radial-gradient'
        },
        parameters: [
          {
            column: "is-2", 
            item: this.$t('电池')
          },
          {
            column: "is-4", 
            value: this.$t('400mAh 可充电锂电池')
           },
           {
            column: "is-2",  
            item: 'USB'
           },
           {
            column: "is-4",  
            value: '400mAh'
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
            value: this.$t('温度：0 – 40℃ / 湿度：20 – 80% RH ')
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
            value: '72 × 72 × 9mm'
           }
         ],
      }
    }
  }
</script>