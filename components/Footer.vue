<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column  is-8"> 
          <section class="columns">
              <ul class="column" :key="index" v-for="(menu, index) of menus">
                <h2 class="caption">{{menu.title}}</h2>
                <li v-for="(item, index) of menu.menus" :key="index">
                  <nuxt-link :to="item.link" v-text="item.title"></nuxt-link>
                </li>
              </ul>
            </section>
        </div>
        <div class="column is-4 contact has-text-right">
          <ul>
            <li class="tel has-text-weight-semibold">400-880-3757</li>
            <li class="wechat-mp">
              <div class="fa fa-qrcode">
                <qrcode-vue value="http://weixin.qq.com/r/fHVZQa3EsPDPreki9yBu" :size="85" level="H"></qrcode-vue>
              </div>
              <span>{{$t('关注我们')}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="columns">
        <div class="column"><hr/></div>
      </div>
      <div class="columns">
        <div class="column has-text-left company">
          {{$t('©2018 丰唐物联技术（深圳）有限公司')}}<a target="_blank" href="http://www.miitbeian.gov.cn" class="icp">粤ICP备14021056号-1</a>
        </div>
        <div class="column has-text-right">
          <ul class="is-inline-flex link">
            <li><nuxt-link to="/">中文</nuxt-link></li><li><span>|</span></li><li><nuxt-link to="/en">ENG</nuxt-link></li>
          </ul>  
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="stylus">
footer.footer {
  padding: 4rem 1.5rem 3rem;
  background: #fff;

  .company {
    font-size: 12px;
    color: #3e3a39;

    .icp {
      margin-left: 22px;
    }
  }

  .column {
    font-size: 14px;
    line-height: 24px; 

    .caption {
      color: #3e3a39;
      font-size: 16px;
      line-height: 26px;
      margin-bottom: 20px;
    }

    &.contact {
      .tel {
        color: #ee7623;
        font-size: 28px;
      }

      .fa-qrcode {
        margin: 10px 0;
      }

      .wechat-mp {
        span {
          padding: 0 15px 0;
        }
      }
    }

    hr {
      background-color: #ef853e;
      height: 1px;
      margin: 5px 0;
    }

    .link {
      padding-right: 8px;

      li {
        padding: 0 6px;

        span {
          color: #ef853e;
        }
      }
    }
  }
}
</style>

<script>
import QrcodeVue from 'qrcode.vue'
export default {
  components: {
    QrcodeVue
  },
  computed: {
    menus() {
      return [
        {
          title: this.$t('关于丰唐物联'),
          menus: [
            {
              title: this.$t('公司简介'),
              link: `${this.$store.state.locale}/`
            },
            {
              title: this.$t('加入我们'),
              link: `${this.$store.state.locale}/`
            },
            {
              title: this.$t('联系我们'),
              link: `${this.$store.state.locale}/`
            }
          ]
        },
        {
          title: this.$t('产品及服务'),
          menus: [
            {
              title: this.$t('产品中心'),
              link: `${this.$store.state.locale}`
            },
            {
              title: this.$t('应用场景'),
              link: `${this.$store.state.locale}`
            },
            {
              title: this.$t('行业方案'),
              link: `${this.$store.state.locale}`
            },
            {
              title: this.$t('服务体系'),
              link: `${this.$store.state.locale}`
            }
          ]
        },
        {
          title: this.$t('商务合作'),
          menus: [
            {
              title: this.$t('经销商合作'),
              link: `${this.$store.state.locale}`
            },
            {
              title: this.$t('项目合作'),
              link: `${this.$store.state.locale}`
            },
            {
              title: this.$t('典型案例'),
              link: `${this.$store.state.locale}`
            }
          ]
        },
        {
          title: this.$t('技术支持'),
          menus: [
            {
              title: this.$t('下载中心'),
              link: `${this.$store.state.locale}`
            },
            {
              title: this.$t('APP下载'),
              link: `${this.$store.state.locale}`
            },
            {
              title: this.$t('常见问题'),
              link: `${this.$store.state.locale}`
            },
            {
              title: this.$t('视频中心'),
              link: `${this.$store.state.locale}`
            },
            {
              title: this.$t('关注我们'),
              link: `${this.$store.state.locale}`
            }
          ]
        }
      ]
    }
  }
}
</script>