<template>
    <main class="main">
      <section class="company">
        <section-banner :banner="company"></section-banner>
        <section class="container">
          <h2 class="has-text-centered caption">{{$t('丰唐物联')}}</h2>
          <div class="columns has-text-centered feature">
            <div class="column">
              <h1>{{$t('2011年')}}</h1>
              <p>{{$t('公司成立')}}</p>
            </div>
            <div class="column">
              <h1>{{$t('300+专利')}}</h1>
              <p>{{$t('产品发展历程')}}</p>
            </div>
            <div class="column">
              <h1>{{$t('100+产品')}}</h1>
              <p>{{$t('产品多样化')}}</p>
            </div>
            <div class="column">
              <h1>{{$t('7年+研发')}}</h1>
              <p>{{$t('技术的积累和沉淀')}}</p>
            </div>
          </div>
          <div class="columns">
            <div class="column content">
              <p>{{$t('丰唐物联技术(深圳)有限公司是一家集设计研发、生产、销售于一体，专注于物联网产品及无线智能家居系统的高端品牌企业。公司成立于 2011年，是美国 Aeon Labs LLC 与中国 YITOA 英唐智控(股票代码: 300131)强强联合的高新技术企业。')}}</p>
              <p>{{$t('丰唐物联在美国加州硅谷拥有一支顶尖的研发团队，掌握了多项物联网前沿技术，目前已拥有100多项专利技术，并以每年推出10多款新品的速度，快速满足用户的高品质需求。我们产品的设计在满足用户舒适生活的同时也突出产品的时尚感、科技感，并且安装便捷，操作简单，能够实现对灯光、窗帘、空调、影音等家电全方位智能控制。我们的产品不仅适用于追求高品质生活的家庭用户，同样适用于酒店、办公场所等商业用户。我们的客户遍布美洲、欧洲、澳大利亚等全球各地，得到上百万国际用户的认可。')}}</p>
            </div>
          </div>
          <h2 class="has-text-centered caption">{{$t('荣誉资质')}}</h2>
          <div class="columns is-multiline has-text-centered  is-mobile">
            <div class="column is-6-mobile is-3-tablet">
              <figure class="center">
                <img :src="`${$store.state.cdn}/2018/10/5b054c2325e666de8a9e6c3d2369c2ac.svg`">
              </figure>
              <p>{{$t('国家级高新技术企业')}}</p>
            </div>
            <div class="column is-6-mobile is-3-tablet">
              <figure class="center">
                <img :src="`${$store.state.cdn}/2018/10/444be13a8a86d7ce634a716705cca6f0.svg`">
              </figure>  
              <p>{{$t('Z-wave联盟理事单位')}}</p>
            </div>
            <div class="column is-6-mobile is-3-tablet">
              <figure class="center">
                <img :src="`${$store.state.cdn}/2018/10/b1a6b6a33a58b590a6acbf33e72ec935.svg`">
              </figure>    
              <p>{{$t('国家物联网基础标准工作组成员')}}</p>
            </div>
            <div class="column is-6-mobile is-3-tablet">
              <figure class="center">
                <img :src="`${$store.state.cdn}/2018/10/23c3fea68581604cbe29371f33c403f3.svg`">
              </figure>    
              <p>{{$t('ISO9001质量管理体系认证')}}</p>
            </div>
            <div class="column is-6-mobile is-3-tablet">
              <figure class="center">
                <img :src="`${$store.state.cdn}/2018/10/1be35d01feb0e335c96f79ff357c9cd1.svg`">
              </figure>  
              <p>{{$t('中国智能家居产业联盟理事单位')}}</p>
            </div>
            <div class="column is-6-mobile is-3-tablet">
              <figure class="center">
                <img :src="`${$store.state.cdn}/2018/10/3a8e2080f483524a72e5f91cc4453506.svg`">
              </figure>  
              <p>{{$t('知识产权管理体系认证')}}</p>
            </div>
            <div class="column is-6-mobile is-3-tablet">
              <figure class="center">
                <img :src="`${$store.state.cdn}/2018/10/094e318410119c5806bf4ad418514956.svg`">
              </figure>  
              <p>{{$t('深圳市知识产权优势企业')}}</p>
            </div>
            <div class="column is-6-mobile is-3-tablet">
              <figure class="center">
                <img :src="`${$store.state.cdn}/2018/10/ec202cfffc88305159681027240a59a0.svg`">
              </figure>  
              <p>{{$t('广东省守合同重信用企业')}}</p>
            </div>
            <div class="column is-6-mobile is-3-tablet">
              <figure class="center">
                <img :src="`${$store.state.cdn}/2018/10/ae3d09b1e0be7f0b5c1881587d14987b.svg`">
              </figure>  
              <p>{{$t('中国智能家居十大口碑品牌')}}</p>
            </div>
            <div class="column is-6-mobile is-3-tablet">
              <figure class="center">
                <img :src="`${$store.state.cdn}/2018/10/adbf7123a4d69a37ba20205dce8ecc65.svg`">
              </figure>  
              <p>{{$t('慧聪网“十大智能家居品牌”')}}</p>
            </div>
            <div class="column is-6-mobile is-3-tablet">
              <figure class="center">
                <img :src="`${$store.state.cdn}/2018/10/ff1b4255ed1259cb30d8a63853aadb06.svg`">
              </figure>  
              <p>{{$t('智能家居海外市场开拓品牌奖')}}</p>
            </div>
            <div class="column is-6-mobile is-3-tablet">
              <figure class="center">
                <img :src="`${$store.state.cdn}/2018/10/5b481eeb034d642e9bd62886b3a16862.svg`">
              </figure>  
              <p>{{$t('中国智能建筑行业最具影响力品牌')}}</p>
            </div>
            <div class="column is-6-mobile is-3-tablet">
              <figure class="center">
                <img :src="`${$store.state.cdn}/2018/10/2ea91c935d25455f015ceebf141ca491.svg`">
              </figure>
              <p>{{$t('中国国际高新技术成果交易会“优秀产品奖”')}}</p>
            </div>
            <div class="column is-6-mobile is-3-tablet">
              <figure class="center">
                <img :src="`${$store.state.cdn}/2018/10/9c2854e5d910d8424d0938083d2cf9c9.svg`">
              </figure>  
              <p>{{$t('HCFT智能硬件供应链大会智能家居先锋奖')}}</p>
            </div>
            <div class="column is-6-mobile is-3-tablet">
              <figure class="center">
                <img :src="`${$store.state.cdn}/2018/10/7b4f054cf4d0890ba276eab440dde375.svg`">
              </figure>  
              <p>{{$t('中国智慧城市技术与应用产品博览会“最佳解决方案奖”')}}</p>
            </div>
            <div class="column is-6-mobile is-3-tablet">
              <figure class="center">
                <img :src="`${$store.state.cdn}/2018/10/8985891f7788e2a8f4fd4ba6d5a49ea7.svg`">
              </figure>  
              <p>Samrt Home CES INNOVATION AWARDS</p>
            </div>
            <div class="column is-6-mobile is-3-tablet">
              <figure class="center">
                <img :src="`${$store.state.cdn}/2018/10/709e467a6f0fc64bea86054e16aa902c.svg`">
              </figure>  
              <p>BEST BLOG DOMADOO AWARD CES 2017</p>
            </div>
            <div class="column is-6-mobile is-3-tablet">
              <figure class="center">
                <img :src="`${$store.state.cdn}/2018/10/aaae9f17868ad7a7351211c1fbcb42f0.svg`">
              </figure>  
              <p>CE Week Best In Show GOLD AWARDS</p>
            </div>
          </div>
          <h2 class="has-text-centered caption">{{$t('合作伙伴')}}</h2>
          <div class="columns  has-text-centered is-multiline is-mobile">
            <div class="column is-half-mobile is-2-tablet">
              <img :src="`${$store.state.cdn}/2018/10/465d39de9c617aee8673205dfd7293c0.svg`">
            </div>
            <div class="column is-half-mobile is-2-tablet">
              <img :src="`${$store.state.cdn}/2018/10/a7d8963641e474ab5584826ff376ff1d.svg`">
            </div>
            <div class="column is-half-mobile is-2-tablet">
              <img :src="`${$store.state.cdn}/2018/10/60b3b0858d80e70c59bf7105ed85d1cb.svg`">
            </div>
            <div class="column is-half-mobile is-2-tablet">
              <img :src="`${$store.state.cdn}/2018/10/851e88916ff9033f96b036387a2429ef.svg`">
            </div>
            <div class="column is-half-mobile is-2-tablet">
              <img :src="`${$store.state.cdn}/2018/10/910a525b6ab7627d4c8340f659967b6c.svg`">
            </div>
            <div class="column is-half-mobile is-2-tablet">
              <img :src="`${$store.state.cdn}/2018/10/b066403c3af5bfdab6cfd782ff1a807e.svg`">
            </div>
            <div class="column is-half-mobile is-2-tablet">
              <img :src="`${$store.state.cdn}/2018/10/d5e050dda5092776fd06f9b3984171da.svg`">
            </div>
            <div class="column is-half-mobile is-2-tablet">
              <img :src="`${$store.state.cdn}/2018/10/063da15344b8ef76271860e6104cef2f.svg`">
            </div>
            <div class="column is-half-mobile is-2-tablet">
              <img :src="`${$store.state.cdn}/2018/10/1c96d95534a47b1425ea34a27d7c3650.svg`">
            </div>
            <div class="column is-half-mobile is-2-tablet">
              <img :src="`${$store.state.cdn}/2018/10/3f456d69a9f7624c2d6edbd0283b9a3a.svg`">
            </div>
            <div class="column is-half-mobile is-2-tablet">
              <img :src="`${$store.state.cdn}/2018/10/f8b534988989929fcc0ca10bac567692.svg`">
            </div>
            <div class="column is-half-mobile is-2-tablet">
              <img :src="`${$store.state.cdn}/2018/10/b06c17f81e75051187cb2d75092d8d5b.svg`">
            </div>
            <div class="column is-half-mobile is-2-tablet">
              <img :src="`${$store.state.cdn}/2018/10/9da82b15694b85b7fec1fb4ea712ae7d.svg`">
            </div>
            <div class="column is-half-mobile is-2-tablet">
              <img :src="`${$store.state.cdn}/2018/10/b45695a236ebf7e3aac5a74dbf4bdfe6.svg`">
            </div>
            <div class="column is-half-mobile is-2-tablet">
              <img :src="`${$store.state.cdn}/2018/10/a6e812bfa504b8d4aecf4718cb21cd4c.svg`">
            </div>
          </div>
        </section>
      </section>  
    </main>
</template>

<style lang="stylus" scoped>
.company
  background: #edf1f2
  padding-bottom: 90px

  .caption 
    color: #3e3a39
    font-size: 36px
    margin: 36px 0 50px 
  .feature
    h1 
      font-size: 42px
    p 
      font-size: 18px
      margin: 4px 0 0 0      

  .content
    margin: 25px 0
  .center
    height: 65px  

</style>
<script>
import SectionBanner from '~/components/SectionBanner'
  export default {
    components: {
      SectionBanner
    },
    head() {
      return {
       title: this.$t('关于丰唐物联') + '-' + this.$t('公司简介')
      }
    },
    data() {
      return {
        company: {
          backgroundimg: '/2018/11/fa9f711c39e0f237b914b771b8ecf6a9.jpg',
          parallax: true,
          height: '540px'
        }
      }
    }
  }
</script>