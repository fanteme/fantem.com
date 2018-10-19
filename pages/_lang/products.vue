<template>
  <main class="main">
    <section class="products">
      <div class="hero">
        <div class="hero-body" :style="{backgroundImage: `url(${$store.state.cdn}/2018/09/c69c7c58a2886d65d7f901c466150327.jpg)`}">
        </div>
      </div>
      <div class="container">
        <div class="OomiProducts">
          <div class="caption  has-text-centered">{{$t('智能网关')}}</div>
          <div class="columns is-gapless">
            <div  class="column is-8">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/09/2eacc02d2d200f0bd16fa07bde18b177.png`" alt="">
              </div>
            </div>
            <div  class="column is-4 center">
              <div class="content-wrap">
                <h3>{{$t('智能操控平板')}}</h3>
                <span>{{$t('OOMI 智能家居总控制系统')}}</span>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/09/64f0bd13c54a37aaeff495ae5807d27c.png`" alt="">
              </div>
              <div class="content-wrap">
                <h3>{{$t('Cube智能家庭网关')}}</h3>
                <span>{{$t('OOMI 智能家居总控制系统')}}</span>
              </div>
            </div>
            <div class="column">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/09/22d3cd935c86ba20c1e426e907b31df8.png`" alt="">
              </div>
              <div class="content-wrap">
                <h3>{{$t('Hub智能家庭网关')}}</h3>
                <span>{{$t('OOMI 智能家居总控制系统')}}</span>
              </div>
            </div>
          </div>  
          <div class="caption  has-text-centered">{{$t('智能开关')}}</div>
          <div class="columns is-multiline">
            <div class="column is-6">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/09/25b018f3166e7a68bfbbbaec44723d95.png`" alt="">
              </div>
              <div class="content-wrap">
                <h3>{{$t('智能插座')}}</h3>
                <span>{{$t('OOMI 智能家居总控制系统')}}</span>
              </div> 
            </div>
            <div class="column is-6">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/09/1859e57be3e13c338b158a923b56f2e3.png`" alt="">
              </div>
              <div class="content-wrap">
                <h3>{{$t('智能插座面板')}}</h3>
                <span>{{$t('OOMI 智能家居总控制系统')}}</span>
              </div>
            </div> 
            <div class="column is-6">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/09/9b365fe5ecfb304906a19025e30e6124.png`" alt="">
              </div>
              <div class="content-wrap"> 
                <h3>{{$t('智能场景面板')}}</h3>
                <span>{{$t('OOMI 智能家居总控制系统')}}</span>
              </div>               
            </div> 
            <div class="column is-6">
              <div class="img-wrap"> 
                <img :src="`${this.$store.state.cdn}/2018/09/8e3dc3d98d0036c446d502608a569a19.png`" alt="">
              </div>  
              <div class="content-wrap">
                <h3>{{$t('智能开关')}}</h3>
                <span>{{$t('OOMI 智能家居总控制系统')}}</span>
              </div>  
            </div>
            <div class="column is-6">
              <div class="img-wrap"> 
                <img :src="`${this.$store.state.cdn}/2018/09/fe7d5be8caf5b7427dcfbc05bd1a1ba0.png`" alt="">
              </div>
              <div class="content-wrap"> 
                <h3>{{$t('智能窗帘电机')}}</h3>
                <span>{{$t('OOMI 智能家居总控制系统')}}</span>
              </div>             
            </div>  
            <div class="column is-6">
              <div class="img-wrap"> 
                <img :src="`${this.$store.state.cdn}/2018/09/032662676f0e55ff0626d3ed6ad870bc.png`" alt="">
              </div>
              <div class="content-wrap"> 
                <span>{{$t('智能嵌入式开关')}}</span>
                <span>{{$t('OOMI 智能家居总控制系统')}}</span>
              </div> 
            </div>
            <div class="column is-6">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/09/10f3c0b49e624649089b415c32a6c60c.png`" alt="">
              </div>
              <div class="content-wrap">
                <h3>{{$t('智能嵌入式调光开关')}}</h3>
                <span>{{$t('OOMI 智能家居总控制系统')}}</span>
              </div>
            </div>
            <div class="column is-6">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/09/7647e1fe72a6dccff8be7683d4fe1dea.png`" alt="">
              </div>
              <div class="content-wrap">
                <h3>{{$t('智能马达控制器')}}</h3>
                <span>{{$t('OOMI 智能家居总控制系统')}}</span>
              </div>
            </div>
          </div>
          <div class="caption  has-text-centered">{{$t('智能照明')}}</div>
          <div class="columns">
            <div class="column">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/09/8746ed8f009dfe8b4ae3f11598d97095.png`" alt="">
              </div>
              <div class="content-wrap">
                <h3>{{$t('智能灯泡')}}</h3>
                <span>{{$t('OOMI 智能家居总控制系统')}}</span>
              </div>             
            </div>
            <div class="column">
              <div class="img-wrap center is-multiline">
                <img :src="`${this.$store.state.cdn}/2018/09/9e5ea51c22cd713c92e8081a1d242f5d.png`" alt="">
              </div>
              <div class="content-wrap"> 
                <h3>{{$t('智能灯带')}}</h3>
                <span>{{$t('OOMI 智能家居总控制系统')}}</span>  
              </div>    
            </div>
          </div>
          <div class="caption  has-text-centered">{{$t('智能传感器')}}</div>
          <div class="columns is-multiline">
            <div class="column is-6-tablet is-6-fullhd">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/09/a4acb7303be7891cf0323c947cf0fee4.png`" alt="">
              </div>
              <div class="content-wrap">
                <h3>{{$t('智能门窗传感器')}}</h3>
                <span>{{$t('OOMI 智能家居总控制系统')}}</span>
              </div>
            </div>
            <div class="column is-6-tablet is-6-fullhd">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/09/a6a8cfe81ee3a2f17f07fc7bb0bb045a.png`" alt="">
              </div>
              <div class="content-wrap">
                <h3>{{$t('智能水位传感器')}}</h3>
                <span>{{$t('OOMI 智能家居总控制系统')}}</span>
              </div>
            </div>
            <div class="column is-6-tablet is-6-fullhd">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/09/0216ea952322227da3b75aa236000477.png`" alt="">
              </div>
              <div class="content-wrap">
                <h3>{{$t('智能六合一传感器')}}</h3>
                <span>{{$t('OOMI 智能家居总控制系统')}}</span>
              </div>             
            </div>
            <div class="column is-6-tablet is-6-fullhd">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/09/a2f1f8d305e21144bf435881349a0185.png`" alt="">
              </div>
              <div class="content-wrap">
                <h3>{{$t('智能三合一传感器')}}</h3>
                <span>{{$t('OOMI 智能家居总控制系统')}}</span>
              </div>
            </div>
          </div>
          <div class="caption has-text-centered">{{$t('智能辅助类')}}</div>
          <div class="columns is-gapless">
            <div class="column is-8">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/09/d144eff17b4b68a6ce4b91d615963efb.png`" alt="">
              </div>
            </div>
            <div class="column is-4 center has-text-left">
              <div class="content-wrap">
                <h3>{{$t('智能充电底座')}}</h3>
                <span>{{$t('OOMI 智能家居总控制系统')}}</span>
              </div>
            </div>
          </div>
          <div class="columns is-multiline">
            <div class="column is-6-tablet is-6-fullhd">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/09/feb1d4e816f5b3b59b7eb461450c545e.png`" alt="">
              </div>
              <div class="content-wrap">
                <h3>{{$t('智能水位传感器底座')}}</h3>
                <span>{{$t('OOMI 智能家居总控制系统')}}</span>
              </div>
            </div>
            <div class="column is-6-tablet is-6-fullhd">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/09/e9c400297fcdfa64d36fcb0d731c88ad.png`" alt="">
              </div>
              <div class="content-wrap">
                <h3>{{$t('智能警示器')}}</h3>
                <span>{{$t('OOMI 智能家居总控制系统')}}</span>
              </div>
            </div>
            <div class="column is-6-tablet is-6-fullhd">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/09/851f4d86cfb68af25834d4a5bc58d4f1.png`" alt="">
              </div>
              <div class="content-wrap">
                <h3>{{$t('智能多功能警示器')}}</h3>
                <span>{{$t('OOMI 智能家居总控制系统')}}</span>
              </div>
              
              
            </div>
            <div class="column is-6-tablet is-6-fullhd">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/09/1db3700512c69e605a1a5a8548b62817.png`" alt="">
              </div>
              <div class="content-wrap">
                <h3>{{$t('智能红外转换器')}}</h3>
                <span>{{$t('OOMI 智能家居总控制系统')}}</span>
              </div>
            </div>
            <div class="column is-6-tablet is-6-fullhd">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/09/45413eac9bff4d07f28b0fb313615aeb.png`" alt="">
              </div>
              <div class="content-wrap">
                <h3>{{$t('智能空调红外转换器')}}</h3>
                <span>{{$t('OOMI 智能家居总控制系统')}}</span>
              </div>
            </div>
            <div class="column is-6-tablet is-6-fullhd">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/09/cdf1fb635598a9d0b5b9eaff0b07c4d1.png`" alt="">
              </div>  
              <div class="content-wrap">
                <h3>{{$t('智能中继器')}}</h3>
                <span>{{$t('OOMI 智能家居总控制系统')}}</span>
              </div>
            </div>
          </div>
        </div> 
        <div class="thirdProducts has-text-centered">
          <div class="caption">{{$t('第三方兼容产品')}}</div>
          <div class="tabs is-centered">
            <ul>
              <li class="is-active">{{$t('语控')}}</li>
              <li>{{$t('安全')}}</li>
              <li>{{$t('健康')}}</li>
              <li>{{$t('娱乐')}}</li>
            </ul>
          </div>
          <div class="columns is-multiline is-variable is-7">   
            <div class="column is-4-tablet is-one-third-desktop is-one-quarter-widescreen is-2-fullhd" v-for="(product, index) in thirdProducts" :key="index">
              <div class="item center">
                <img :src="product._embedded['wp:featuredmedia'][0].source_url" v-if="product._embedded['wp:featuredmedia']">
                <img src="https://picsum.photos/640/400/?random" v-else>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="stylus">
.products {
  background: #f0f4f5;
  color: #231815;i

  .hero {
    height: 701px;
  }

  .hero-body {
    background-attachment: fixed;
    background-repeat: no-repeat;
  }

  .caption {
    font-size: 36px;
    line-height: 44px;
    margin: 35px 0;
  }

  .OomiProducts {
    >h2 {
      margin: 50px 0 32px 0;

      &:after {
        display: block;
        margin: 0 auto;
        content: '';
        margin-top: 8px;
        width: 73px;
        height: 2px;
        background-color: #ed7422;
      }
    }

    .columns {
      &:not(.is-gapless){
        margin: -6px;
      }
      .column {
        padding: 6px;
        .img-wrap {
          background: radial-gradient(white, #e8e8e8);
          img {
            vertical-align: middle;
          }
        }
        .content-wrap {
          background: #fff;
          padding: 36px 49px;

          h3 {
            font-size: 24px;
            color: #3e3a39;
          }
          span {
            font-size: 16px;
            color: #727171
          }
        }
        
      }
    }
    .is-gapless {
      margin-bottom: 12px;
      .column {
        background: #fff;
      }
    }
  }

  .thirdProducts {
    padding-bottom: 105px;

    .tabs {
      ul {
        border: none;

        li {
          padding: 0 42px;
          font-size: 18px;
          color: #3e3a39;
        }
      }
    }

    .column {
      .item {
        margin: 10px 0;
        background: #fff;
        height: 110px;

        img {
          width: 105px;
        }
      }
    }
  }
}
</style>

<script>
export default {
  head() {
    return { title: this.$t('产品中心') }
  },
  data() {
    return {
      categories: [
        {
          name: this.$t('网关类'),
          slug: 'gateway'
        },
        {
          name: this.$t('开关类'),
          slug: 'switch'
        },
        {
          name: this.$t('传感类'),
          slug: 'sensor'
        },
        {
          name: this.$t('辅助类'),
          slug: 'auxiliary'
        }
      ],
      thirdProducts: []
    }
  },
  async mounted() {
    let { data } = await this.$axios.get(
      `${
        this.$store.state.api
      }/posts?categories=44&per_page=40&_embed&order=asc`
    )
    this.thirdProducts = data
  }
}
</script>
