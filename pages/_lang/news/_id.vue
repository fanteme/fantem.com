<template>
  <main class="main">
    <section class="hero">
      <div class="hero-content center" :style="{backgroundImage: `url(${$store.state.cdn}/fantem/news-detail-banner.jpg)`}">
        <div class="container-fluid has-text-centered">
          <h1 class="title">
            {{$t('合作共赢 协同智能')}}
          </h1>
          <h2 class="subtitle">
            {{$t('虚位以待 丰唐物联期待与您携手')}}
          </h2>
        </div>
      </div>
    </section>
    <section class="container news-detail">
      <div class="columns">
        <div class="column is-10">
          <nav class="breadcrumb is-small" aria-label="breadcrumbs">
            <ul>
              <li><nuxt-link :to="`/${this.$store.state.locale}`">{{$t('首页')}}</nuxt-link></li>
              <li><nuxt-link :to="`/${this.$store.state.locale}/news`">{{$t('新闻')}}</nuxt-link></li>
            </ul>
          </nav>
          <div class="title" v-text="news.title.rendered"></div>
          <p>{{getDate(news.date)}}</p>
          <div class="content" v-html="news.content.rendered">
          </div>
          <div class="do-element-share do-3qlj3 share">
            <div class="do-element-share-content">
              <div class="bdsharebuttonbox">
                <label>分享：</label>
                <a class="bds_sqq do-share-li" title="分享到QQ好友" data-cmd="sqq"><span class="do-share-icon icon-qq"></span></a>
                <a class="bds_weixin do-share-li" title="分享到微信" data-cmd="weixin"><span class="do-share-icon icon-weixin"></span></a>
                <a class="bds_qzone do-share-li" title="分享到QQ空间" data-cmd="qzone"><span class="do-share-icon icon-kongjian"></span></a>
                <a class="bds_tsina do-share-li" title="分享到新浪微博" data-cmd="tsina"><span class="do-share-icon icon-weibo"></span></a>
                <a class="bds_huaban do-share-li" title="分享到花瓣" data-cmd="huaban"><span class="do-share-icon icon-huaban"></span></a>
                <a class="bds_fbook do-share-li" title="分享到facebook" data-cmd="fbook"><span class="do-share-icon icon-facebook"></span></a>
                <a class="bds_twi do-share-li" title="分享到twitter" data-cmd="twi"><span class="do-share-icon icon-twitter"></span></a></div>
              </div>
            </div>
        </div>
        <div class="column is-2 is-hidden-mobile">
          <div :class="{'isFixed fadeFromRight': isFixed}">
            <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
            <p>{{$t('扫一扫在手机上阅读本文章')}}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="stylus">
.newsinner {
  padding: 30px 0;
}

.news-detail {
  padding: 30px 0;

  .fadeFromRight {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: fadeFromRight;

    @keyframes fadeFromRight {
      0% {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
      }

      100% {
        opacity: 1;
        transform: none;
      }
    }
  }

  .isFixed {
    position: fixed;
    z-index: 9;
    width: 100%;
    top: 8rem;
  }

  .breadcrumb {
    ul {
      li {
        a {
          font-size: 16px;
          color: #333;
        }
      }

      &.is-active {
        a {
          color: #666;
        }
      }
    }
  }

  p {
    color: #888;
  }

  .content {
    padding: 30px 0;
  }

  .columns {
    .column {
      &:nth-child(2) {
        border-left: 1px solid #eee;
      }
    }
  }

  .share {
    .do-share-li {
      display: inline-block;
      height: auto;
      float: none;
      background: none;
      padding: 0;
      margin: 0 0 12px 0;
      margin-right: 8px;

      &:hover {
        color: #333;
        opacity: 0.8;
      }

      .do-share-icon {
        border-radius: 20px;
        padding: 6px;
        color: white;
        font-size: 16px;
        z-index: -1;
        position: relative;

        &.icon-twitter {
          background-color: #1cb2e8;
        }

        &.icon-qq {
          background-color: #5ac7f9;
        }

        &.icon-weixin {
          background-color: #49d5b2;
        }

        &.icon-kongjian {
          background-color: #fecc31;
        }

        &.icon-weibo {
          background-color: #ff5549;
        }

        &.icon-huaban {
          background-color: #ee4c59;
        }

        &.icon-facebook {
          background-color: #3b5999;
        }
      }
    }
  }
}
</style>

<script>
import QrcodeVue from 'qrcode.vue'
export default {
  data() {
    return {
      size: 200,
      isFixed: false,
      news: {
        title: {},
        content: {}
      }
    }
  },
  computed: {
    value() {
      if (process.browser) {
        return location.href
      }
    },
    title() {
      return this.news.title
    }
  },
  mounted() {
    this.initShare()
    window.addEventListener('scroll', () => {
      let scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop
      if (scrollTop > 520) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    })
    this.getContent()
  },
  methods: {
    initShare() {
      if (process.browser) {
        window._bd_share_config = {
          common: {
            bdSnsKey: {},
            bdText: '',
            bdMini: '2',
            bdPic: '',
            bdStyle: '0',
            bdSize: '16'
          },
          share: {}
        }
        ;[
          ((document.getElementsByTagName('head')[0] || body).appendChild(
            document.createElement('script')
          ).src =
            '/static/api/js/share.js?v=89860593.js?cdnversion=' +
            ~(-new Date() / 36e5))
        ]
      }
    },
    async getContent() {
      let { data } = await this.$axios.get(
        `${this.$store.state.api}/posts?include=${this.$route.params.id}`
      )
      this.news = data[0]
    },
    getDate(val) {
      const date = new Date(val)
      const month =
        date.getMonth() + 1 > 9
          ? date.getMonth() + 1
          : '0' + `${date.getMonth() + 1}`
      const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
      return date.getFullYear() + '-' + month + '-' + day
    }
  },
  components: {
    QrcodeVue
  }
}
</script>
