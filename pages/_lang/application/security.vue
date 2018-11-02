<template>
  <main class="main">
    <application-hero :hero="hero"></application-hero>
    <section class="application-advantage">
      <div class="container">
        <p class="caption has-text-centered">{{$t('八大优势 稳定可靠')}}</p>
        <div class="columns is-multiline">
          <div class="column is-3 has-text-centered" v-for="(feature, index) in features" :key="index">
            <div class="item">
              <p class="svg" v-html="feature.svg"></p>
              <p class="txt" :title="feature.txt">{{feature.txt}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container-fluid">
      <div class="video">
        <video v-if="$store.state.locale == 'zh'" class="video-bg" autoplay muted loop>
          <source :src="`${this.$store.state.cdn}/2018/10/24aec23f6ebd496946466b9d5a1040f4.mp4`" type="video/mp4" />
          <source :src="`${this.$store.state.cdn}/2018/10/e7e51e94be4f329ccaf8098ebaa5a699.webm`" type="video/webm" />
        </video>
        <video v-else class="video-bg" autoplay muted loop>
          <source :src="`${this.$store.state.cdn}/2018/10/cb582bed11b7af621226669e6fdb052b.mp4`" type="video/mp4" />
          <source :src="`${this.$store.state.cdn}/2018/10/66d880c1448ae8ea2ed7001ceca92a48.webm`" type="video/webm" />
        </video>
      </div>
    </div>
    <section class="application-features">
      <div class="columns is-gapless is-multiline">
        <div class="column is-6">
          <div class="columns is-multiline">
            <div class="column is-12">
              <img src="http://cdn.fantem.cn/2018/09/48ea83b56b20ea741e68a0b43c98131d.jpg">
            </div>
            <div class="column is-12 has-text-right description">
              <h2>{{$t('智能防护——智能红外传感器')}}</h2>
              <p>{{$t('红外人体感应，5米/120°超大范围探测，监测家中异动，智能探测人或宠物移动。智能声光报警，有效震慑外来入侵者，手机上轻松查看室内所有情况。')}}</p>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="columns is-multiline">
            <div class="column is-12 description">
              <h2>{{$t('防盗报警——门磁')}}</h2>
              <p>{{$t('无线门磁被触碰打开，会发生警报，您的手机会收到报警信息提醒，提醒您家里有不速之客到来，并且主机会收到信号，现场高分贝蜂鸣威慑，有效震慑外来之客！')}}</p>
            </div>
            <div class="column is-12">
              <img src="http://cdn.fantem.cn/2018/09/903286e99f9e2098a3738b9078a72091.jpg">
            </div>
          </div>
        </div>
        <div class="column is-12">
          <div class="columns is-gapless">
            <div class="column">
              <img src="http://cdn.fantem.cn/2018/09/71efe471ff9925e69bbae4d49ac0e318.jpg">
            </div>
            <div class="column center">
              <span>
                <h2>{{$t('安全管家——智能有害气体传感器')}}</h2>
                <p>{{$t('红稳定监测到可能影响您与家人身体健康的空气污染物的存在，例如CO、PM2.5、VOC等。当传感器检测到气体浓度高于设定的浓度值，会有声音和灯光闪动双重提醒并发送通知至手机上，及时警示，让您在第一时间内掌握家中空气质量，及时作出相关防护措施。')}}</p>
              </span>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="columns is-multiline">
            <div class="column is-12 has-text-right description">
              <h2>{{$t('贴心助手——智能水位传感器')}}</h2>
              <p>{{$t('实时水体感应，兼具水位控制和漏水浸漫提醒功能。可通过手机APP实现预设安防场景，一旦监测水位达到预设高度，立即远程提示报警，让您即时知晓，并采取应对措施。同时也可联动智能机械手自动关闭水阀，让你在外也能远程操控，让您省心、放心。')}}</p>
            </div>
            <div class="column is-12">
              <img src="http://cdn.fantem.cn/2018/09/a25bf67ffd8be418b1d5fae30ca0fd76.jpg">
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="columns is-multiline">
            <div class="column is-12">
              <img src="http://cdn.fantem.cn/2018/09/7551ef81a179ce612faefedfef83fa6c.jpg">
            </div>
            <div class="column is-12 description">
              <h2>{{$t('一键操作——智能安防控制')}}</h2>
              <p>{{$t('一键设置撤防模式、居家模式、离家模式。支持门锁、门磁、智能人体红外传感器、智能有害气体传感器、智能摄像头等多种安防设备的组合与联动。做到一键离家的同时切断家中灯光和非必要电器的电源，且布防工作开始；回家时一键撤防，满足您对家庭安全的所有需求！')}}</p>
            </div>
          </div>
        </div>
        <div class="column is-12">
          <div class="columns is-gapless">
            <div class="column center has-text-right">
              <span>
                <h2>{{$t('一键操作——智能安防控制')}}</h2>
                <p>{{$t('出厂前己提前设置好布防、撤防模式')}}</p>
              </span>
            </div>
            <div class="column">
              <img src="http://cdn.fantem.cn/2018/09/2cfb4598ce3738398fab70848d3760c2.jpg">
            </div>
          </div>
        </div>
      </div>
      <application-suit :suit="suit"></application-suit>
    </section>
  </main>
</template>

<style lang="stylus">
.application-advantage {
  padding: 50px 0;

  .caption {
    color: #3e3a39;
    font-size: 36px;
    margin-bottom: 50px;

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
            height: 50px;
          }

          &.txt {
            &:before {
              display: block;
              margin: 0 auto;
              content: '';
              margin: 8px auto;
              width: 141px;
              height: 1px;
              background-color: #848484;
            }

            color: #231815;
            font-size: 18px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
      }
    }
  }
}

.video-bg {
  vertical-align: top
}

.application-house {
  min-height: 800px;
  background-image: url('http://cdn.fantem.cn/2018/10/6a30d3abad116ce50785703c28933535.jpg');

  .caption {
    color: #3e3a39;
    font-size: 36px;
    font-weight: bold;
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
}

.application-features {
  .columns {
    .column {
      &.center {
        span {
          margin: 0 70px;
        }

        &.has-text-right {
          span {
            display: block;
            width: 100%;
          }
        }
      }

      p {
        color: #231815;
      }

      h2 {
        color: #3e3a39;
        font-size: 36px;
        margin-bottom: 50px;
        position: relative;

        &:after {
          position: absolute;
          display: block;
          left: 0;
          content: '';
          width: 73px;
          height: 2px;
          background-color: #ed7422;
        }
      }

      &.description {
        padding: 30% 70px 20%;
      }

      &.has-text-right {
        h2:after {
          left: initial;
          right: 0;
        }
      }
    }
  }

  .title {
    color: #3e3a39;
    font-size: 36px;
    margin: 50px auto;
  }

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

  .subtitle {
    font-weight: 600;
    color: #231815;
    margin-bottom: 47px;
  }

  img {
    vertical-align: middle;
  }

  .character {
    margin: 30px 0 50px;

    span {
      padding: 0 38px;
    }
  }
}
</style>

<script>
import ApplicationHero from '~/components/ApplicationHero.vue'
import ApplicationSuit from '~/components/ApplicationSuit.vue'

export default {
  components: {
    ApplicationHero,
    ApplicationSuit
  },
  head() {
    return { title: this.$t('应用场景') + '-' + this.$t('安防模式') }
  },
  data() {
    return {
      hero: {
        bg: 'http://cdn.fantem.cn/2018/09/e838aa40ff7687a92f5adb146b0f3fb9.jpg',
        isnum: 'is-12',
        isalgin: '',
        isoffset: 'is-offset-0',
        title: this.$t('OOMI智能家居') + '—— ' + this.$t('安防模式'),
        titalign: 'has-text-centered',
        titcolor: 'has-text-white',
        subtitle: this.$t('家的安全，亲人的安全，一直是我们的渴望。'),
        subalign: 'has-text-centered',
        subcolor: 'has-text-white',
        detail: this.$t(
          '您可以通过智能操控平板 Oomi Touch 或手机，随时随地观察室内外的闭路监控点的影像，并可通过本地储存卡或云录像查看较早前发生的影像。另外，Oomi 智能安防系统拥有多重防线的布防，一旦发现入侵者，将触发智能安防系统并自动报警，及时通知主人或相关安保人员，及时阻止违法犯罪行为的发生，保障个人的利益不受侵害。同时，Oomi智能安防系统不仅仅局限于提供防范的功能，还包括火灾、煤气泄漏的监测以及老人、小孩意外事态的急救报警等人性化的功能。'
        ),
        detalign: 'has-text-centered',
        detcolor: 'has-text-white'
      },
      features: [
        {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="61" height="50"><g fill="none" fill-rule="evenodd" stroke="#ee7623"><path d="M55.437 9.322h-9.332L42.192 1.5H19.219L15.55 9.322H6.3A4.798 4.798 0 0 0 1.5 14.118v29.67a4.797 4.797 0 0 0 4.8 4.791h49.137a4.796 4.796 0 0 0 4.797-4.79v-29.67a4.797 4.797 0 0 0-4.797-4.797z"/><path d="M44.275 27.517c0 7.394-6.003 13.401-13.407 13.401-7.402 0-13.405-6.007-13.405-13.4 0-7.407 6.003-13.4 13.405-13.4 7.404 0 13.407 5.993 13.407 13.4z"/></g></svg>`,
          txt: this.$t('全屋监控')
        },
        {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="55" height="49"><g fill="none" fill-rule="evenodd" stroke="#ee7623" stroke-linecap="round" stroke-linejoin="round"><path d="M24.856 17.83a8.54 8.54 0 1 1-.311 13.079m-13.123 8.764l3.534 3.534 2.286-1.366a6.525 6.525 0 0 1 5.932-.383 6.503 6.503 0 0 1 3.813 4.42l.66 2.622h4.999l.65-2.582a6.507 6.507 0 0 1 3.838-4.43c.019-.008.039-.015.058-.024a6.523 6.523 0 0 1 5.85.417l2.32 1.387 3.535-3.534-1.366-2.286a6.525 6.525 0 0 1-.407-5.874l.024-.058a6.501 6.501 0 0 1 4.419-3.813l2.622-.66v-4.999l-2.581-.65a6.503 6.503 0 0 1-4.454-3.896 6.523 6.523 0 0 1 .417-5.85l1.387-2.32-3.534-3.535-2.286 1.366a6.527 6.527 0 0 1-5.875.407l-.058-.024a6.504 6.504 0 0 1-3.812-4.42L32.732.5h-4.998l-.65 2.581a6.505 6.505 0 0 1-3.838 4.43c-.02.008-.04.016-.058.025a6.52 6.52 0 0 1-5.85-.418l-2.321-1.387-3.534 3.535"></path><path stroke-width="2" d="M24.663 24.994H1M15.529 14.691l9.772 10.362-9.772 11.849"></path></g></svg>`,
          txt: this.$t('强大的兼容性')
        },
        {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="57" height="49"><path fill="none" stroke="#ee7623" d="M4.371 46.92H8.93V23.132l.6-.035c1.498-.088 2.944.536 3.946 1.653 2.36 2.63 3.572 5.213 4.572 7.302 1.923 4.017 3.066 8.69 4.355 12.717a4.529 4.529 0 0 0 4.319 3.14s13.912.506 18.512 0c6.97-.766 9.592-2.02 9.592-2.02 1.911-.658 1.952-3.346.063-4.063l-21.63-8.22a8.654 8.654 0 0 1-4.057-3.184s-6.086-11.524-8.776-15.02C14.48 7.673 9.78 2.22 9.78 2.22a2.819 2.819 0 0 0-4.528-.156A19.576 19.576 0 0 0 1.6 19.054l1.185 4.674L4.371 46.92z"/></svg>`,
          txt: this.$t('简单时尚 便捷百搭')
        },
        {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="49" height="49"><g fill="none" fill-rule="evenodd" stroke="#ee7623" stroke-linecap="round" stroke-linejoin="round"><path d="M.5 22.437h21.941V.5H.5zM.5 48.5h21.941V26.563H.5zM26.419 48.5h21.937V26.563H26.419zM48.004 11.404c0 5.827-4.723 10.557-10.552 10.557-5.83 0-10.554-4.73-10.554-10.557S31.622.85 37.452.85c5.829 0 10.552 4.727 10.552 10.554z"/></g></svg>`,
          txt: this.$t('随意DIY 情景模式')
        },
        {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="56" height="46"><defs><path id="a" d="M.9.5h41.371V1H.9z"/></defs><g fill="none" fill-rule="evenodd"><path stroke="#ee7623" stroke-linecap="round" stroke-linejoin="round" d="M41.119 45.377V26.743c0-6.861-5.562-12.422-12.422-12.422h-2.22c-6.861 0-12.422 5.56-12.422 12.422v18.634h27.064z"/><g transform="translate(6 44.877)"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><path stroke="#231815" stroke-linecap="round" stroke-linejoin="round" d="M.9.5h41.371" mask="url(#b)"/></g><path stroke="#ee7623" stroke-linecap="round" stroke-linejoin="round" d="M27.586.5v5.983M.5 27.585h5.983m42.205.001h5.983M42.508 12.664l4.231-4.23m-34.074 4.229L8.434 8.432"/></g></svg>`,
          txt: this.$t('入侵异动 报警通知')
        },
        {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="66" height="48"><g fill="none" fill-rule="evenodd"><path stroke="#ee7623" stroke-linecap="round" stroke-linejoin="round" d="M37.45 21.058h-3.08L49.831 8.139l5.568 4.775 4.243 3.57 5.653 4.574h-3.082M62.213 21.058v12.137c0 .823-.756 1.488-1.696 1.488H39.151c-.94 0-1.701-.665-1.701-1.488V21.058m-14.015-6.962v30.808c0 .965-.782 1.748-1.747 1.748H2.248A1.748 1.748 0 0 1 .5 44.904V8.246c0-.965.782-1.747 1.747-1.747H14.45"/><path stroke="#ee7623" stroke-linecap="round" stroke-linejoin="round" d="M20.5 14.245v24.219c0 .724-.588 1.312-1.313 1.312H4.748a1.311 1.311 0 0 1-1.31-1.313v-27.8c0-.725.586-1.312 1.31-1.312h9.701"/><path fill="#ee7623" d="M10.913 43.247a1.053 1.053 0 1 0 2.107.001 1.053 1.053 0 0 0-2.107 0"/><path stroke="#ee7623" stroke-linecap="round" stroke-linejoin="round" d="M23.806 14.096h-8.988V3.823"/><path stroke="#ee7623" stroke-linecap="round" stroke-linejoin="round" d="M14.817 3.822V1.501h14.119v12.594h-5.13M35.729 14.096l-6.792-3.474V4.974L35.729 1.5z"/></g></svg>`,
          txt: this.$t('系统可实时监测设备状态')
        },
        {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="59" height="46"><path fill="none" stroke="#ee7623" stroke-linecap="round" stroke-linejoin="round" d="M28.08 21.446c-1.617 8.231-6.914 14.12-11.834 13.154-4.928-.962-7.615-8.417-6-16.653 1.617-8.23 6.925-14.119 11.836-13.152 4.917.962 7.613 8.406 5.997 16.651zm27.605 4.357c1.478.91 2.55 3.713 2.14 5.762-.4 2.006-1.587 4.464-4.143 4.495M24.642 6.015l31.042 19.787m-37.297 8.799l35.299 1.459m-9.137 1.156v7.722M.837 29.523L5.7 26.726M.5 14.444l5.529.971M6.414.5l2.8 4.85"/></svg>`,
          txt: this.$t('可实现远程喊话震慑匪徒')
        },
        {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="49" height="49"><path fill="none" stroke="#ee7623" stroke-linecap="round" stroke-linejoin="round" d="M24.5 15.144v18.712M15.144 24.5h18.712m-9.356 24c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"/></svg>`,
          txt: this.$t('系统最大可支持232个节点设备-分到达看来是大驾光临克己复礼看')
        }
      ],
      suit: {
        title: this.$t('安防模式 套装选择'),
        subtitle: this.$t('安防模式套装选择（适用于有网络的小户型家庭）'),
        character: [
          this.$t('多元交互体验'),
          this.$t('入侵远程报警'),
          this.$t('随心拓展配件')
        ],
        item: [
          {
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" width="42" height="49"><g fill="none" fill-rule="evenodd" stroke="#E76C26"><path d="M40.938 39.929c0 .934-.761 1.692-1.695 1.692H2.184c-.93 0-1.684-.758-1.684-1.692V2.872c0-.94.754-1.693 1.684-1.693h37.059c.934 0 1.695.754 1.695 1.693v37.057zM20.717 41.62v6.2m-20.217 0h40.438"/><path d="M34.94 21.4c0 7.859-6.364 14.222-14.228 14.222-7.854 0-14.217-6.363-14.217-14.222 0-7.854 6.363-14.222 14.217-14.222 7.864 0 14.229 6.368 14.229 14.222z"/><path d="M29.8 21.4c0 5.018-4.061 9.088-9.083 9.088-5.02 0-9.084-4.07-9.084-9.088 0-5.013 4.064-9.084 9.084-9.084A9.083 9.083 0 0 1 29.8 21.4z"/></g></svg>',
            title: `${this.$t('智能网关')}X1`
          },
          {
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" width="75" height="43"><g fill="none" fill-rule="evenodd" stroke="#E76C26"><path d="M1.067 41.585h72.458V1.415H1.067z"/><path d="M22.958 34.233h43.17V8.766h-43.17zM6.13 9.424h7.852M6.049 33.576h7.847m.085-12.079a3.926 3.926 0 1 1-7.852.001 3.926 3.926 0 0 1 7.853-.001z"/></g></svg>',
            title: `${this.$t('智能操控面板')}X1`
          },
          {
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="49"><g fill="none" fill-rule="evenodd" stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round"><path d="M47.143 4.485c1.223-1.222.353-3.31-1.371-3.306H3.522A2.452 2.452 0 0 0 1.07 3.63V45.88c0 1.724 2.089 2.593 3.308 1.37l.076-.068L47.143 4.485z"/><path d="M1.07 40.201v.04c0 1.506 1.825 2.265 2.89 1.196l.067-.058L41.33 4.067C42.4 3 41.639 1.177 40.133 1.18"/></g></svg>',
            title: `${this.$t('智能门窗传感器')}X1`
          },
          {
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" width="41" height="49"><g fill="none" fill-rule="evenodd" stroke="#E76C26"><path d="M8.266 1.5C11.34.166 27.608.166 33.099 1.5c3.116.56 5.01 3.473 5.73 7.236 1.604 3.91 1.776 25.946 0 31.361-1.21 3.726-2.958 6.291-5.73 7.237-3.167 1.722-21.243 1.377-24.833 0-2.78-.172-4.87-3.817-5.73-7.237-1.955-5.243-.922-28.483 0-31.36.54-3.579 3.657-7.107 5.73-7.237z"/><path d="M20.683 25.613a7.226 7.226 0 1 1 0 14.45 7.226 7.226 0 1 1 0-14.45z"/></g></svg>',
            title: `${this.$t('智能警示器')}X1`
          },
          {
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="49"><g fill="none" fill-rule="evenodd" stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round"><path d="M1.136 19.886c0-10.345 8.386-18.73 18.73-18.73 10.344 0 18.73 8.385 18.73 18.73 0 10.344-8.386 18.729-18.73 18.729-10.344 0-18.73-8.385-18.73-18.729z"/><path d="M12.567 19.886a7.3 7.3 0 1 1 14.599 0 7.3 7.3 0 0 1-14.599 0zm19.609 20.67c3.542 3.542 1.899 7.289-3.111 7.288l-18.541-.003c-5.008-.001-6.65-3.747-3.108-7.29"/></g></svg>',
            title: `${this.$t('智能摄像头')}X1`
          },
          {
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" width="37" height="49"><g fill="none" fill-rule="evenodd" stroke="#E76C26"><path d="M7.51 1.686c2.738-1.188 17.222-1.188 22.11 0 2.775.498 4.462 3.09 5.102 6.442 1.428 3.482 1.582 27.775 0 32.596-1.076 3.318-2.633 5.6-5.101 6.444-2.82 1.533-18.913 1.226-22.11 0-2.474-.153-4.336-3.4-5.102-6.444-1.741-4.668-.821-30.034 0-32.596C2.89 4.943 5.665 1.8 7.51 1.686z"/><path d="M8.92 4.555c2.39-1.038 15.04-1.038 19.308 0 2.423.435 3.896 2.699 4.455 5.626 1.247 3.04 1.381 19.799 0 24.01-.94 2.897-2.3 4.89-4.455 5.627-2.463 1.339-16.516 1.07-19.308 0-2.16-.134-3.787-2.97-4.455-5.627-1.52-4.077-.718-21.773 0-24.01.42-2.782 2.843-5.526 4.455-5.626z"/><path d="M18.635 21.15a4.921 4.921 0 1 1 0 9.842 4.921 4.921 0 0 1 0-9.842z"/></g></svg>',
            title: `${this.$t('智能燃气传感器')}X1`
          },
          {
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" width="54" height="45"><g fill="none" fill-rule="evenodd" stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round"><path d="M53.149 6.524s-5.566 4.574-26.288 4.574C5.668 11.098.706 6.524.706 6.524V1.376h52.443v5.148z"/><path d="M41.665 10.138V29.34H12.19V10.138"/><path d="M24.827 15.57h4.2c.847 0 1.533.687 1.533 1.532v4.2c0 .846-.686 1.534-1.533 1.534h-4.2a1.533 1.533 0 0 1-1.532-1.534v-4.2c0-.845.686-1.532 1.532-1.532zm16.754 27.091s-9.054.964-14.653.964c-5.768 0-14.654-.964-14.654-.964v-9.633H41.58v9.633zm-3.001-13.32v3.687m-23.305 0V29.34"/></g></svg>',
            title: `${this.$t('智能烟雾传感器')}X1`
          },
          {
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="47"><g fill="none" fill-rule="evenodd" stroke="#E76C26"><path d="M42.394 46.336H5.365a4.322 4.322 0 0 1-4.321-4.322V4.985A4.322 4.322 0 0 1 5.365.665h37.029a4.322 4.322 0 0 1 4.322 4.32v37.03a4.323 4.323 0 0 1-4.322 4.321zM23.88 22.116v-5.642 5.642zm-2.894 8.41l-3.989-3.99 3.989 3.99zm5.338 0l4.439-3.483-4.439 3.483z"/><path d="M9.752 23.5c0-7.803 6.325-14.128 14.128-14.128 7.802 0 14.128 6.325 14.128 14.128 0 7.802-6.326 14.128-14.128 14.128-7.803 0-14.128-6.326-14.128-14.128z"/></g></svg>',
            title: `${this.$t('智能红外传感器')}X1`
          },
          {
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="47"><g fill="none" fill-rule="evenodd" stroke="#E76C26"><path d="M19.037 46H4.38a3.544 3.544 0 0 1-3.542-3.542V4.542A3.542 3.542 0 0 1 4.38 1h14.657a3.541 3.541 0 0 1 3.542 3.542v37.916A3.543 3.543 0 0 1 19.037 46z"/><path d="M8.438 10.684a3.27 3.27 0 1 1 6.54 0 3.27 3.27 0 0 1-6.54 0zm1.008 24.093a.653.653 0 1 1-1.307 0 .653.653 0 0 1 1.307 0zm2.916 0a.653.653 0 1 1-1.307 0 .653.653 0 0 1 1.307 0zm2.918 0a.654.654 0 1 1-1.31-.001.654.654 0 0 1 1.31 0zm-5.834 2.076a.653.653 0 1 1-1.306 0 .653.653 0 0 1 1.306 0zm2.916 0a.653.653 0 1 1-1.306 0 .653.653 0 0 1 1.306 0zm2.918 0a.654.654 0 0 1-1.31 0 .653.653 0 0 1 1.31 0zM9.446 38.93a.654.654 0 1 1-1.307.003.654.654 0 0 1 1.307-.003zm2.916 0a.654.654 0 1 1-1.307.003.654.654 0 0 1 1.307-.003zm2.918 0a.655.655 0 1 1-1.31 0 .655.655 0 0 1 1.31 0z"/></g></svg>',
            title: `${this.$t('智能水位传感器')}X1`
          }
        ],
        img: `${
          this.$store.state.cdn
        }/2018/10/fdb1cab84938c699a3c954ce06440cee.png`,
        detail: this.$t('（*配件产品可以随心拓展，以上套装仅供参考）')
      }
    }
  }
}
</script>