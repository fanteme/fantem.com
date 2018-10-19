<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column is-8"> 
          <section class="columns is-multiline is-mobile">
              <ul class="column is-half-mobile" :key="index" v-for="(menu, index) of menus">
                <h2 class="caption">{{menu.title}}</h2>
                <li v-for="(item, index) of menu.menus" :key="index">
                  <nuxt-link :to="item.link" v-text="item.title"></nuxt-link>
                </li>
              </ul>
            </section>
        </div>
        <div class="column is-4 contact has-text-right has-text-left-mobile">
          <ul>
            <li class="tel has-text-weight-semibold">400-880-3757</li>
            <li class="wechat-mp">
              <div class="qrcode">
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
          ©2018 {{$t('丰唐物联技术（深圳）有限公司')}}<a target="_blank" href="http://www.miitbeian.gov.cn" class="icp">粤ICP备14021056号-1</a>
        </div>
        <div class="column has-text-right">
          <ul class="is-inline-flex link">
            <li><a @click.prevent="switchLang('zh')">中文</a></li>
            <li><span>|</span></li>
            <li><a @click.prevent="switchLang('en')">ENG</a></li>
          </ul>  
        </div>
      </div>
    </div>
    <div class="go2top center" v-show="isDisplay2Top" :title="$t('返回顶部')">
      <svg @click="go2top" width="22" height="23" viewBox="0 0 22 23" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M21 12.5c-.3 0-.5-.1-.7-.3l-9-9.2-9 9.2c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l9.7-9.9c.4-.4 1.1-.4 1.4 0l9.7 9.9c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3z" id="Shape" fill="#3E3A39"/><path d="M17.4 22.5h-12.4c-.6 0-1-.4-1-1s.4-1 1-1h12.4c.6 0 1 .4 1 1s-.5 1-1 1z" fill="#EE7623"/></g></svg>
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
        margin-bottom: 20px;
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

  .go2top {
    width: 50px;
    height: 50px;
    cursor: pointer;
    border: 1px solid #e2e2e2;
    border-radius: 50%;
    box-shadow: 1px 1px 9px -4px;
    position: fixed;
    right: 48px;
    bottom: 96px;
  }
}
</style>

<script>
import QrcodeVue from 'qrcode.vue'
export default {
  components: {
    QrcodeVue
  },
  data: () => ({
    isDisplay2Top: false
  }),
  computed: {
    baseUrl() {
      return this.$store.state.locale == this.$store.state.fallbackLocale
        ? ''
        : `/${this.$store.state.locale}`
    },
    menus() {
      return [
        {
          title: this.$t('关于丰唐物联'),
          menus: [
            {
              title: this.$t('公司简介'),
              link: `${this.baseUrl}/`
            },
            {
              title: this.$t('加入我们'),
              link: `${this.baseUrl}/`
            },
            {
              title: this.$t('联系我们'),
              link: `${this.baseUrl}/`
            }
          ]
        },
        {
          title: this.$t('产品及服务'),
          menus: [
            {
              title: this.$t('产品中心'),
              link: `${this.baseUrl}/products`
            },
            {
              title: this.$t('应用场景'),
              link: `${this.baseUrl}/application`
            },
            {
              title: this.$t('行业方案'),
              link: `${this.baseUrl}/solution`
            },
            {
              title: this.$t('服务体系'),
              link: `${this.baseUrl}/`
            }
          ]
        },
        {
          title: this.$t('商务合作'),
          menus: [
            {
              title: this.$t('经销商合作'),
              link: `${this.baseUrl}/`
            },
            {
              title: this.$t('项目合作'),
              link: `${this.baseUrl}/`
            },
            {
              title: this.$t('典型案例'),
              link: `${this.baseUrl}/`
            }
          ]
        },
        {
          title: this.$t('技术支持'),
          menus: [
            {
              title: this.$t('APP下载'),
              link: `${this.baseUrl}/`
            },
            {
              title: this.$t('常见问题'),
              link: `${this.baseUrl}/`
            },
            {
              title: this.$t('视频中心'),
              link: `${this.baseUrl}/`
            }
          ]
        }
      ]
    }
  },
  methods: {
    switchLang(locale) {
      if (/^\/en/.test(this.$route.path)) {
        if (locale == 'en') {
          return
        }
        this.$router.push({
          path: this.$route.path.replace(/^\/en/, '/zh'),
          params: { lang: locale }
        })
      } else {
        if (locale == 'zh') {
          return
        }
        this.$router.push({
          path: this.$route.path.replace(/^\//, '/en/'),
          params: { lang: locale }
        })
      }
    },
    go2top() {
      let timer = setInterval(() => {
        let oTop = document.documentElement.scrollTop || document.body.scrollTop
        let speed = Math.floor(-oTop / 10)
        document.documentElement.scrollTop = document.body.scrollTop =
          oTop + speed
        if (oTop === 0) {
          clearInterval(timer)
        }
      }, 30)
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      let scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop
      let clientHeight = document.documentElement.clientHeight
      if (scrollTop > clientHeight) {
        this.isDisplay2Top = true
      } else {
        this.isDisplay2Top = false
      }
    })
  }
}
</script>