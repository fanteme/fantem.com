<template>
  <main class="main">
    <application-header :mode="'security'"></application-header>
    <application-hero :hero="hero"></application-hero>
    <section class="application-features">
      <div class="container">
        <p class="caption has-text-centered">{{$t('八大优势 稳定可靠')}}</p>
        <div class="columns is-multiline">
          <div class="column is-3 has-text-centered" v-for="(feature, index) in features" :key="index">
            <div class="item">
              <p class="svg" v-html="feature.svg"></p>
              <p class="txt">{{feature.txt}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="stylus">
.application-features {
  .caption {
    color: #3e3a39;
    font-size: 36px;
    margin: 50px auto;

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
    .column {
      .item {
        padding: 50px 0;
        box-shadow: 0 0 5px 1px #848484;

        p {
          &.svg {
            &:after {
              display: block;
              margin: 0 auto;
              content: '';
              margin: 8px auto;
              width: 141px;
              height: 1px;
              background-color: #848484;
            }
          }

          &.txt {
            color: #231815;
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>

<script>
import ApplicationHeader from '~/components/ApplicationHeader.vue'
import ApplicationHero from '~/components/ApplicationHero.vue'
export default {
  components: { ApplicationHeader, ApplicationHero },
  head() {
    return { title: this.$t('应用场景') + '-' + this.$t('安防模式') }
  },
  data() {
    return {
      hero: {
        bg: 'http://cdn.fantem.cn/2018/09/e838aa40ff7687a92f5adb146b0f3fb9.jpg',
        title: this.$t('OOMI智能家居系统') + '—— ' + this.$t('安防模式'),
        subtitle: this.$t('家的安全，亲人的安全，一直是我们的渴望。'),
        detail: this.$t(
          '您可以通过智能操控平板 Oomi Touch 或手机，随时随地观察室内外的闭路监控点的影像，并可通过本地储存卡或云录像查看较早前发生的影像。另外，Oomi 智能安防系统拥有多重防线的布防，一旦发现入侵者，将触发智能安防系统并自动报警，及时通知主人或相关安保人员，及时阻止违法犯罪行为的发生，保障个人的利益不受侵害。同时，Oomi智能安防系统不仅仅局限于提供防范的功能，还包括火灾、煤气泄漏的监测以及老人、小孩意外事态的急救报警等人性化的功能。'
        )
      },
      features: [
        {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="61" height="50"><g fill="none" fill-rule="evenodd" stroke="#231815"><path d="M55.437 9.322h-9.332L42.192 1.5H19.219L15.55 9.322H6.3A4.798 4.798 0 0 0 1.5 14.118v29.67a4.797 4.797 0 0 0 4.8 4.791h49.137a4.796 4.796 0 0 0 4.797-4.79v-29.67a4.797 4.797 0 0 0-4.797-4.797z"/><path d="M44.275 27.517c0 7.394-6.003 13.401-13.407 13.401-7.402 0-13.405-6.007-13.405-13.4 0-7.407 6.003-13.4 13.405-13.4 7.404 0 13.407 5.993 13.407 13.4z"/></g></svg>`,
          txt: this.$t('全屋监控')
        },
        {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="55" height="49"><g fill="none" fill-rule="evenodd" stroke="#221714" stroke-linecap="round" stroke-linejoin="round"><path d="M24.856 17.83a8.54 8.54 0 1 1-.311 13.079m-13.123 8.764l3.534 3.534 2.286-1.366a6.525 6.525 0 0 1 5.932-.383 6.503 6.503 0 0 1 3.813 4.42l.66 2.622h4.999l.65-2.582a6.507 6.507 0 0 1 3.838-4.43c.019-.008.039-.015.058-.024a6.523 6.523 0 0 1 5.85.417l2.32 1.387 3.535-3.534-1.366-2.286a6.525 6.525 0 0 1-.407-5.874l.024-.058a6.501 6.501 0 0 1 4.419-3.813l2.622-.66v-4.999l-2.581-.65a6.503 6.503 0 0 1-4.454-3.896 6.523 6.523 0 0 1 .417-5.85l1.387-2.32-3.534-3.535-2.286 1.366a6.527 6.527 0 0 1-5.875.407l-.058-.024a6.504 6.504 0 0 1-3.812-4.42L32.732.5h-4.998l-.65 2.581a6.505 6.505 0 0 1-3.838 4.43c-.02.008-.04.016-.058.025a6.52 6.52 0 0 1-5.85-.418l-2.321-1.387-3.534 3.535"></path><path stroke-width="2" d="M24.663 24.994H1M15.529 14.691l9.772 10.362-9.772 11.849"></path></g></svg>`,
          txt: this.$t('强大的兼容性')
        },
        {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="57" height="49"><path fill="none" stroke="#231815" d="M4.371 46.92H8.93V23.132l.6-.035c1.498-.088 2.944.536 3.946 1.653 2.36 2.63 3.572 5.213 4.572 7.302 1.923 4.017 3.066 8.69 4.355 12.717a4.529 4.529 0 0 0 4.319 3.14s13.912.506 18.512 0c6.97-.766 9.592-2.02 9.592-2.02 1.911-.658 1.952-3.346.063-4.063l-21.63-8.22a8.654 8.654 0 0 1-4.057-3.184s-6.086-11.524-8.776-15.02C14.48 7.673 9.78 2.22 9.78 2.22a2.819 2.819 0 0 0-4.528-.156A19.576 19.576 0 0 0 1.6 19.054l1.185 4.674L4.371 46.92z"/></svg>`,
          txt: this.$t('简单时尚 便捷百搭')
        },
        {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="49" height="49"><g fill="none" fill-rule="evenodd" stroke="#221714" stroke-linecap="round" stroke-linejoin="round"><path d="M.5 22.437h21.941V.5H.5zM.5 48.5h21.941V26.563H.5zM26.419 48.5h21.937V26.563H26.419zM48.004 11.404c0 5.827-4.723 10.557-10.552 10.557-5.83 0-10.554-4.73-10.554-10.557S31.622.85 37.452.85c5.829 0 10.552 4.727 10.552 10.554z"/></g></svg>`,
          txt: this.$t('随意DIY 情景模式')
        },
        {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="56" height="46"><defs><path id="a" d="M.9.5h41.371V1H.9z"/></defs><g fill="none" fill-rule="evenodd"><path stroke="#231815" stroke-linecap="round" stroke-linejoin="round" d="M41.119 45.377V26.743c0-6.861-5.562-12.422-12.422-12.422h-2.22c-6.861 0-12.422 5.56-12.422 12.422v18.634h27.064z"/><g transform="translate(6 44.877)"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><path stroke="#231815" stroke-linecap="round" stroke-linejoin="round" d="M.9.5h41.371" mask="url(#b)"/></g><path stroke="#231815" stroke-linecap="round" stroke-linejoin="round" d="M27.586.5v5.983M.5 27.585h5.983m42.205.001h5.983M42.508 12.664l4.231-4.23m-34.074 4.229L8.434 8.432"/></g></svg>`,
          txt: this.$t('入侵异动 报警通知')
        },
        {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="66" height="48"><g fill="none" fill-rule="evenodd"><path stroke="#231815" stroke-linecap="round" stroke-linejoin="round" d="M37.45 21.058h-3.08L49.831 8.139l5.568 4.775 4.243 3.57 5.653 4.574h-3.082M62.213 21.058v12.137c0 .823-.756 1.488-1.696 1.488H39.151c-.94 0-1.701-.665-1.701-1.488V21.058m-14.015-6.962v30.808c0 .965-.782 1.748-1.747 1.748H2.248A1.748 1.748 0 0 1 .5 44.904V8.246c0-.965.782-1.747 1.747-1.747H14.45"/><path stroke="#231815" stroke-linecap="round" stroke-linejoin="round" d="M20.5 14.245v24.219c0 .724-.588 1.312-1.313 1.312H4.748a1.311 1.311 0 0 1-1.31-1.313v-27.8c0-.725.586-1.312 1.31-1.312h9.701"/><path fill="#231815" d="M10.913 43.247a1.053 1.053 0 1 0 2.107.001 1.053 1.053 0 0 0-2.107 0"/><path stroke="#231815" stroke-linecap="round" stroke-linejoin="round" d="M23.806 14.096h-8.988V3.823"/><path stroke="#231815" stroke-linecap="round" stroke-linejoin="round" d="M14.817 3.822V1.501h14.119v12.594h-5.13M35.729 14.096l-6.792-3.474V4.974L35.729 1.5z"/></g></svg>`,
          txt: this.$t('系统可实时监测设备状态')
        },
        {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="59" height="46"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M28.08 21.446c-1.617 8.231-6.914 14.12-11.834 13.154-4.928-.962-7.615-8.417-6-16.653 1.617-8.23 6.925-14.119 11.836-13.152 4.917.962 7.613 8.406 5.997 16.651zm27.605 4.357c1.478.91 2.55 3.713 2.14 5.762-.4 2.006-1.587 4.464-4.143 4.495M24.642 6.015l31.042 19.787m-37.297 8.799l35.299 1.459m-9.137 1.156v7.722M.837 29.523L5.7 26.726M.5 14.444l5.529.971M6.414.5l2.8 4.85"/></svg>`,
          txt: this.$t('可实现远程喊话震慑匪徒')
        },
        {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="49" height="49"><path fill="none" stroke="#221714" stroke-linecap="round" stroke-linejoin="round" d="M24.5 15.144v18.712M15.144 24.5h18.712m-9.356 24c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"/></svg>`,
          txt: this.$t('系统最大可支持232个节点设备')
        }
      ]
    }
  }
}
</script>