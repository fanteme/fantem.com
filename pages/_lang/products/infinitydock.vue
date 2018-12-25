<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section class="section-top charge has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/98b8c3b9691558bca15086d8461fa1f1.jpg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h2 class="title has-text-weight-normal">{{$t('无线充电')}}</h2>
            <P class="content has-text-weight-light">{{$t('无线时代 | 随放随充 | 放下即充')}}</P>
          </div>
          <div class="column">
            <div class="columns imgs">
              <div class="column has-text-right-tablet is-2 is-offset-3"><img :src="`${this.$store.state.cdn}/2018/11/7b445954639e562ef7b158d8b502d847.svg`"></div>
              <div class="column center is-2"><img :src="`${this.$store.state.cdn}/2018/11/5c841f82d77d2db628d884f2aad4f779.svg`"></div>
              <div class="column has-text-left-tablet is-2"><img :src="`${this.$store.state.cdn}/2018/11/23e78e6546f2204b4db39de9a1aa8680.svg`"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-top smart-stay has-text-centered gray-radial-gradient">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h2 class="title has-text-weight-normal">{{$t('充满断电 智能休眠')}}</h2>
          </div>
          <div class="column is-6 is-offset-3">
            <p class="has-text-weight-light">{{$t('防过充，平板寿命更长久!具备过流保护、短路保护、过温保护、过冲保护功能，给您一个安全的充电模式。')}}</p>  
          </div>
          <div class="column is-12">
            <img :src="`${this.$store.state.cdn}/2018/11/77102cf92125e8887c2204d91cb06c6e.png`">
          </div>
        </div>
      </div>
    </section> 
    <product-parameter :parameters="parameters"></product-parameter>   
  </main>
</template>
<style lang="stylus" scoped>
&.section
  &-top
    &.charge
      padding: 81px 0 230px 
      background-position: center 
      background-repeat: no-repeat 
      height: 800px
      @media screen and (max-width: 768px) {
        padding: 81px 0 80px 
      }   
      .imgs
        margin: 220px 0 0
        @media screen and (max-width: 768px) {
         margin: 100px 0 0
        }  
    &.smart-stay
      padding: 81px 0 50px 
      height: 815px
      img 
        margin: 30px 0 0 
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
          title: this.$t('智能充电底座'),
          subtitle: 'OOMI Infinity Dock',
          content: this.$t('OOMI智能底座(与 OOMI Touch 搭配使用) OOMI Infinity Dock 可为 OOMI Touch 即时充电，为其保驾护航。OOMI智能底座是通过触点接触对Touch进 行充电的HID设备，拥有NFC和USB通讯接口。此外，在进行相关配置后，可 通过Touch触碰触发用户自定义的场景模式。'),
          img: `${this.$store.state.cdn}/2018/11/18b21e2969ab62cda4b10c326b06b167.png`,
          class: 'gray-radial-gradient'
        },
        parameters: [
          {
            column: "is-2", 
            item: this.$t('USB端口')
          },
          {
            column: "is-4", 
            value: 'DC5V 2A'
          },
          {
            column: "is-2", 
            item: this.$t('产品尺寸')
          },
          {
            column: "is-4", 
            value: '221 * 109 * 39.9mm'
          } 
         ]
      }
    }
  }
</script>      