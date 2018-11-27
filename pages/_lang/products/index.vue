<template>
  <main class="main">
    <section class="products">
      <div class="hero">
        <div class="hero-body" :style="{backgroundImage: `url(${$store.state.cdn}/2018/11/2fa06259d4a02a920c57fb13baa961a9.jpg)`}">
        </div>
      </div>
      <div class="container">
        <div class="OomiProducts">
          <div id="gateway" class="caption  has-text-centered">{{$t('智能网关')}}</div>
          <div class="columns is-gapless">
            <div  class="column is-8">
              <nuxt-link :to="`/${this.$store.state.locale}/products/touch`">
                <div class="img-wrap">
                  <img :src="`${this.$store.state.cdn}/2018/10/0fc8cb72096f67de319ee559bc53c677.png`" alt="">
                </div>
              </nuxt-link>  
            </div>
            <div  class="column is-4 center">
              <nuxt-link :to="`/${this.$store.state.locale}/products/touch`">
                <div class="content-wrap">
                  <h3>{{$t('智能操控平板')}}</h3>
                  <span>{{$t('OOMI智能家居设备操作中心')}}</span>
                </div>
              </nuxt-link>  
            </div>          
          </div>
          <div class="columns">
            <div class="column">
              <nuxt-link :to="`/${this.$store.state.locale}/products/cube`">
                <div class="img-wrap">
                  <img :src="`${this.$store.state.cdn}/2018/10/36f5d4fea4f4f1c26f68c37bfa70a026.png`" alt="">
                </div>
                <div class="content-wrap">
                  <h3>{{$t('Cube智能家庭网关')}}</h3>
                  <span>{{$t('OOMI智能家居设备控制中心')}}</span>
                </div>
              </nuxt-link>
            </div>
            <div class="column">
              <nuxt-link :to="`/${this.$store.state.locale}/products/hub`">
                <div class="img-wrap">
                  <img :src="`${this.$store.state.cdn}/2018/10/9e1d66d8ffa3fd5772ab668eb99331fc.png`" alt="">
                </div>
                <div class="content-wrap">
                  <h3>{{$t('Hub智能家庭网关')}}</h3>
                  <span>{{$t('OOMI智能家居设备控制中心')}}</span>
                </div>
              </nuxt-link>
            </div>
          </div>  
          <div id="switch" class="caption  has-text-centered">{{$t('智能开关')}}</div>
          <div class="columns is-multiline">
            <div class="column is-6">
              <nuxt-link :to="`/${this.$store.state.locale}/products/plug`">
                <div class="img-wrap">
                  <img :src="`${this.$store.state.cdn}/2018/10/8c936b8a72123f791a051e1958ef7897.png`" alt="">
                </div>
                <div class="content-wrap">
                  <h3>{{$t('智能插座')}}</h3>
                  <span>{{$t('常规家电无线远程定时智能操控')}}</span>
                </div> 
              </nuxt-link>
            </div>
            <div class="column is-6">
              <nuxt-link :to="`/${this.$store.state.locale}/products/powersocket`">
                <div class="img-wrap">
                  <img :src="`${this.$store.state.cdn}/2018/10/0952af6e1b9c16c925f74052f688714b.png`" alt="">
                </div>
                <div class="content-wrap">
                  <h3>{{$t('智能插座面板')}}</h3>
                  <span>{{$t('无线远程智能控制电源开关')}}</span>
                </div>
              </nuxt-link>
            </div> 
            <div class="column is-6">
              <nuxt-link :to="`/${this.$store.state.locale}/products/mote`">
                <div class="img-wrap">
                  <img :src="`${this.$store.state.cdn}/2018/10/5e5ae9abb6a1b0ce07be45c1b76bea75.png`" alt="">
                </div>
                <div class="content-wrap"> 
                  <h3>{{$t('智能场景面板')}}</h3>
                  <span>{{$t('无线便携式自定义操控开关')}}</span>
                </div>  
              </nuxt-link>             
            </div> 
            <div class="column is-6" @click="previewProduct(464)">
              <div class="img-wrap"> 
                <img :src="`${this.$store.state.cdn}/2018/10/141890ba007ea3450083a6e4adf637a0.png`" alt="">
              </div>  
              <div class="content-wrap">
                <h3>{{$t('智能开关')}}</h3>
                <span>{{$t('无线远程智能场景触摸控制')}}</span>
              </div>  
            </div>
            <div class="column is-6" @click="previewProduct(458)">
              <div class="img-wrap"> 
                <img :src="`${this.$store.state.cdn}/2018/10/eba1ec6bd9e7ab3ceca229a4084896eb.png`" alt="">
              </div>
              <div class="content-wrap"> 
                <h3>{{$t('智能窗帘电机')}}</h3>
                <span>{{$t('无线遥控与远程操控二合一')}}</span>
              </div>             
            </div>  
            <div class="column is-6" @click="previewProduct(462)">
              <div class="img-wrap"> 
                <img :src="`${this.$store.state.cdn}/2018/10/439124df4d5c053206878fa9ee9e721e.png`" alt="">
              </div>
              <div class="content-wrap"> 
                <h3>{{$t('智能嵌入式开关')}}</h3>
                <span>{{$t('无线远程智能控制灯光')}}</span>
              </div> 
            </div>
            <div class="column is-6" @click="previewProduct(466)">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/10/67ccdc28db8f9a5a37326dec3bb6f731.png`" alt="">
              </div>
              <div class="content-wrap">
                <h3>{{$t('智能嵌入式调光开关')}}</h3>
                <span>{{$t('无线远程智能控制灯光与亮度调节')}}</span>
              </div>
            </div>
            <div class="column is-6">
              <nuxt-link :to="`/${this.$store.state.locale}/products/shutter`">
                <div class="img-wrap">
                  <img :src="`${this.$store.state.cdn}/2018/10/5e9170adb6e8bdb4cb53268f1f569458.png`" alt="">
                </div>
                <div class="content-wrap">
                  <h3>{{$t('智能马达控制器')}}</h3>
                  <span>{{$t('无线远程交流电机控制')}}</span>
                </div>
              </nuxt-link>   
            </div>
          </div>
          <div id="light" class="caption  has-text-centered">{{$t('智能照明')}}</div>
          <div class="columns">
            <div class="column" @click="previewProduct(488)">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/10/d91f2c8f481bc4acb44c64c341624fe7.png`" alt="">
              </div>
              <div class="content-wrap">
                <h3>{{$t('智能灯泡')}}</h3>
                <span>{{$t('智能语音联动 调节灯泡颜色、亮度、颜色灰度')}}</span>
              </div>             
            </div>
            <div class="column">
              <nuxt-link :to="`/${this.$store.state.locale}/products/colorstrip`">
                <div class="img-wrap center is-multiline">
                  <img :src="`${this.$store.state.cdn}/2018/10/3a31cea49aa01e84f3e92cf25abee67e.png`" alt="">
                </div>
                <div class="content-wrap"> 
                  <h3>{{$t('智能灯带')}}</h3>
                  <span>{{$t('1600万无极变色 长度任意裁剪')}}</span>  
                </div> 
              </nuxt-link>   
            </div>
          </div>
          <div id="sensor" class="caption  has-text-centered">{{$t('智能传感器')}}</div>
          <div class="columns is-multiline">
            <div class="column is-6-tablet is-6-fullhd">
              <nuxt-link :to="`/${this.$store.state.locale}/products/door&window`">
                <div class="img-wrap">
                  <img :src="`${this.$store.state.cdn}/2018/10/e95ad8faff6f05c47e7a16685b1bd9b3.png`" alt="">
                </div>
                <div class="content-wrap">
                  <h3>{{$t('智能门窗传感器')}}</h3>
                  <span>{{$t('实时监测门窗柜体等物品开启/关闭状态')}}</span>
                </div>
              </nuxt-link>
            </div>
            <div class="column is-6-tablet is-6-fullhd">
              <nuxt-link :to="`/${this.$store.state.locale}/products/watersensor`">
                <div class="img-wrap">
                  <img :src="`${this.$store.state.cdn}/2018/10/3f2bec3082cc8a74843e3df4bfb63588.png`" alt="">
                </div>
                <div class="content-wrap">
                  <h3>{{$t('智能水位传感器')}}</h3>
                  <span>{{$t('感知水位溢出与漏水状态')}}</span>
                </div>
              </nuxt-link>
            </div>
            <div class="column is-6-tablet is-6-fullhd">
              <nuxt-link :to="`/${this.$store.state.locale}/products/multisensor`">
                <div class="img-wrap">
                  <img :src="`${this.$store.state.cdn}/2018/10/d70a537d7672355de18b8effec9b5001.png`" alt="">
                </div>
                <div class="content-wrap">
                  <h3>{{$t('智能六合一传感器')}}</h3>
                  <span>{{$t('多功能传感设备')}}</span>
                  <span>{{$t('集红外移动监测、震动、紫外线、亮度、温度、湿度感知于一体')}}</span>
                </div>             
              </nuxt-link>
            </div>  
            <div class="column is-6-tablet is-6-fullhd">
              <nuxt-link :to="`/${this.$store.state.locale}/products/motionsensor`">
                <div class="img-wrap">
                  <img :src="`${this.$store.state.cdn}/2018/10/5a9adf7ada73b4fbebcc96950264bc2a.png`" alt="">
                </div>
                <div class="content-wrap">
                  <h3>{{$t('智能三合一传感器')}}</h3>
                  <span>{{$t('多功能传感设备')}}</span>
                  <span>{{$t('集红外移动监测、亮度、温度感知于一体')}}</span>
                </div>
              </nuxt-link>
            </div>
          </div>
          <div id="auxiliary" class="caption has-text-centered">{{$t('智能辅助类')}}</div>
          <div class="columns is-gapless">
            <div class="column is-8">
              <nuxt-link :to="`/${this.$store.state.locale}/products/infinitydock`">
                <div class="img-wrap">
                  <img :src="`${this.$store.state.cdn}/2018/10/27db8c27766c4c6b4dff615ebf0e0e2c.png`" alt="">
                </div>
              </nuxt-link>  
            </div>
            <div class="column is-4 center has-text-left">
              <nuxt-link :to="`/${this.$store.state.locale}/products/infinitydock`">
                <div class="content-wrap">
                  <h3>{{$t('智能充电底座')}}</h3>
                  <span>{{$t('智能操控平板即时充电续航')}}</span>
                </div>
              </nuxt-link>  
            </div>
          </div>
          <div class="columns is-multiline">
            <div class="column is-6-tablet is-6-fullhd">
              <nuxt-link :to="`/${this.$store.state.locale}/products/watersensordock`">
                <div class="img-wrap">
                  <img :src="`${this.$store.state.cdn}/2018/10/a3793ecf4046132d34f46b02a91e67a1.png`" alt="">
                </div>
                <div class="content-wrap">
                  <h3>{{$t('智能水位传感器底座')}}</h3>
                  <span>{{$t('OOMI智能水位传感器持续供电续航')}}</span>
                </div>
              </nuxt-link>    
            </div>
            <div class="column is-6-tablet is-6-fullhd" @click="previewProduct(486)">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/10/d4ec42815ba57a023fc28d596471c36b.png`" alt="">
              </div>  
              <div class="content-wrap">
                <h3>{{$t('智能中继器')}}</h3>
                <span>{{$t('增强Z-Wave信号 杜绝信号盲区')}}</span>
              </div>
            </div>
            <div class="column is-6-tablet is-6-fullhd" @click="previewProduct(482)">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/10/45d1cb63fdfda346832b1c1068839fec.png`" alt="">
              </div>
              <div class="content-wrap">
                <h3>{{$t('智能警示器')}}</h3>
                <span>{{$t('无线声光警示器 防范于未然')}}</span>
              </div>
            </div>
            <div class="column is-6-tablet is-6-fullhd">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/10/de5322230c57b2555ea260610b64c415.png`" alt="">
              </div>
              <div class="content-wrap">
                <h3>{{$t('智能多功能警示器')}}</h3>
                <span>{{$t('无线声光警示器 安防漏洞即时警报')}}</span>
              </div>
            </div>
            <div class="column is-6-tablet is-6-fullhd">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/10/015c865b905c9538339bef5eaa3dd0e9.png`" alt="">
              </div>
              <div class="content-wrap">
                <h3>{{$t('智能红外转换器')}}</h3>
                <span>{{$t('普通家电轻松转换智能设备')}}</span>
              </div>
            </div>
            <div class="column is-6-tablet is-6-fullhd" @click="previewProduct(484)">
              <div class="img-wrap">
                <img :src="`${this.$store.state.cdn}/2018/10/bcb33af07107428248c0ee7288334c5e.png`" alt="">
              </div>
              <div class="content-wrap">
                <h3>{{$t('智能空调红外转换器')}}</h3>
                <span>{{$t('直插式空调控制设备 轻松实现空调智能化')}}</span>
              </div>
            </div>
          </div>
        </div> 
        <div class="thirdProducts has-text-centered">
          <div id="thirdProducts" class="caption">{{$t('第三方兼容产品')}}</div>
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
      <section class="previewProduct">
        <div class="modal" :class="{'is-active': isActive}">
          <div class="modal-background" @click="closeModal"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title" v-text="currentProduct.title.rendered"></p>
              <button class="delete" aria-label="close" @click="closeModal"></button>
            </header>
            <section class="modal-card-body">
              <img v-if="currentProduct.image" class="productImage" :src="`${$store.state.cdn}/${currentProduct.image}`">
              <div class="specification" v-html="currentProduct.content.rendered">
              </div>
            </section>
            <footer class="modal-card-foot">
            </footer>
          </div>
        </div>
    </section>
    </section>
  </main>
</template>

<style lang="stylus">
.products {
  background: #f0f4f5;
  color: #231815;

  i, .hero {
    height: 701px;
  }

  .hero-body {
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
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
      &:not(.is-gapless) {
        margin: -6px;
      }

      .column {
        cursor: pointer;
        padding: 6px;
        background: #fff;
        background-clip: content-box;

        .img-wrap {
          background: radial-gradient(white, #e8e8e8);

          img {
            vertical-align: middle;
          }
        }

        .content-wrap {
          padding: 36px 49px;

          h3 {
            font-size: 24px;
            color: #3e3a39;
          }

          span {
            font-size: 16px;
            color: #727171;
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

  .previewProduct {
    .modal-card-body {
      .productImage {
        height: 12rem;
        box-shadow: 1px 1px 5px #ccc;
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
      isActive: false,
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
      thirdProducts: [],
      currentProduct: {
        title: {},
        content: {}
      }
    }
  },
  async mounted() {
    let { data } = await this.$axios.get(
      `${
        this.$store.state.api
      }/posts?categories=44&per_page=40&_embed&order=asc`
    )
    this.thirdProducts = data
    this.initSmoothScroll()
  },
  methods: {
    initSmoothScroll() {
      new SmoothScroll('a[href*="#"]', {
        header: 'header'
      })
    },
    async previewProduct(val) {
      let { data } = await this.$axios.get(
        `${this.$store.state.api}/posts?categories=39&include=${val}`
      )
      this.currentProduct = data[0]
      this.openModal()
    },
    openModal() {
      this.isActive = true
    },
    closeModal() {
      this.isActive = false
    }
  }
}
</script>
