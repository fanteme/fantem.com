<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section class="section-top role has-text-centered has-text-white" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/e1196891b2e860aa20470cefe0c4bb2a.jpg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h2 class="title has-text-weight-normal has-text-white">{{$t('小身材 大作用')}}</h2>
          </div>
          <div class="column is-6 is-offset-3">
            <P class="has-text-weight-light">{{$t('内置高响度警报喇叭，配合智能水位传感器使用可探测漏水相关信息，并发出声音警示，及时提醒您作出相应的应对措施。')}}</p> 
          </div>
        </div>
      </div>
    </section>
    <section class="section-top charge has-text-centered has-text-white" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/8b6ad4a6239bd8bb68f2d57570dd7992.jpg)`}">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h2 class="title has-text-weight-normal has-text-white">{{$t('充满断电 智能休眠')}}</h2>
          </div>
          <div class="column is-6 is-offset-3">
            <P class="has-text-weight-light">{{$t('防过充，平板寿命更长久！具备过流保护、短路保护、过温保护、过冲保护功能，给您一个安全的充电模式。')}}</p>  
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
    &.role,&.charge
      background-position: center 
      padding: 105px 0 690px 
      @media screen and ( max-width: 1280px) {
        padding: 65px 0 590px 
      }
    .title
      margin-bottom: 13px
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
          title: this.$t('智能水位传感器底座'),
          subtitle: 'Oomi Water Sensor Dock',
          content: this.$t('OMI Water sensor Dock智能水位传感器底座可为Oomi Watersensor智能水位传感器持续供电，还能通过探针线扩大其探测范围。当探针线中的两个触角探测到漏水时，设备会发出警报。'),
          img: `${this.$store.state.cdn}/2018/11/f1b41c5568e89fa7d0c5bcedd0cb2038.png`,
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
            value: this.$t('103.5mm 长 ×38mm 宽 ×32.4mm 高')
          } 
         ]
      }
    }
  }
</script>      