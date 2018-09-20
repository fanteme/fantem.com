<template>
  <main class="main">
    <section class="business">
      <section class="hero">
        <div class="hero-content center" :style="{backgroundImage: `url(${$store.state.cdn}/fantem/business-banner.jpg)`}">
          <div class="container-fluid has-text-centered">
            <h1 class="title">
              合作共赢 协同智能
            </h1>
            <h2 class="subtitle">
              虚位以待 丰唐物联期待与您携手
            </h2>
          </div>
        </div>
      </section>
      <div class="business-why">
        <div class="container">
          <div class="title has-text-centered">选择丰唐物联的理由</div>
          <div class="columns">
            <div class="column business-why-l">
              <ul>
                <li v-for="(reason, key) in reasonsL" :key="key" class="center">
                  <div class="svgicon" v-html="reason.img"></div>
                  <div class="business-why-item">
                    <p v-text="reason.title"></p>
                    <span v-text="reason.text"></span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="column business-why-r">
              <ul>
                <li v-for="(reason, key) in reasonsR" :key="key" class="center">
                  <div class="svgicon" v-html="reason.img"></div>
                  <div class="business-why-item">
                    <p v-text="reason.title"></p>
                    <span v-text="reason.text"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>  
        </div> 
      </div>
      <div class="business-b2b">
        <div class="container">
          <div class="title has-text-centered">项目合作</div>
          <div class="business-b2b-container">
            <ul class="columns is-wrap">
              <li class="column">
                <iframe height='100%' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='/map/partners.html'></iframe>
                <div>
                  <p>友好交互</p>
                  <span>多年智能家居行业经验累积的客户反馈，更理解客户需求，更重视用户体验，从而设计出更友好的交互。</span>
                </div>
              </li>
              <li class="column" v-for="(item, key) in b2b" :key="key">
                <figure><img :src="item.img"></figure>
                <div>
                  <p v-text="item.title"></p>
                  <span v-text="item.text"></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="stylus">
.business {
  &-why {
    background-repeat: no-repeat;
    background-position: 50% 50%;
    position: relative;
    padding: 30px 0;

    .svgicon {
      svg {
        width: 3rem;
        height: 3rem;

        * {
          fill: #fff;
          stroke: #f26f21;
          stroke-width: 2;
        }
      }
    }

    &-item {
      margin: 0 1.5rem;

      p {
        font-size: 18px;
        margin: 15px 0 10px;
      }
    }
  }

  &-b2b {
    position: relative;
    padding: 30px 0;
    background: rgb(255, 255, 255);

    &-container {
      ul li {
        display: flex;
        flex-direction: column;

        figure {
          overflow: hidden;

          img {
            margin-right: 20px;
            transition: all 0.5s;
            vertical-align: top;

            &:hover {
              transform: scale(1.2);
            }
          }
        }

        p {
          font-size: 18px;
          margin: 15px 0;
        }
      }
    }
  }
}
</style>

<script>
export default {
  head() {
    return { title: this.$t('商务合作') }
  },
  data() {
    return {
      reasonsL: [
        {
          title: '家居安防',
          text:
            '人体红外，网络摄像监控，声光报警，多种配件，全面关注家居安全，让您全无后顾之忧。',
          img:
            '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="46" viewBox="0 0 40 46"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><g id="XMLID_1_"><path id="XMLID_5_" class="st0" d="M20 .5s-6.5 8.5-19.5 6.4v21.7s.3 7.9 9.8 12.4c4.7 2.3 7.2 2.2 9.8 4.4"/><path id="XMLID_4_" class="st0" d="M20 .5s6.5 8.5 19.5 6.4v21.7s-.3 7.9-9.8 12.4c-4.7 2.3-7.3 2.2-9.8 4.4"/><path id="XMLID_3_" class="st0" d="M9.9 22.2h-2.5l12.6-10.3 4.6 3.8 3.4 2.9 4.6 3.6h-2.5"/><path id="XMLID_2_" class="st0" d="M30.1 22.2v9.6c0 .7-.6 1.2-1.4 1.2h-17.4c-.8 0-1.4-.5-1.4-1.2v-9.6"/></g></svg>'
        },
        {
          title: '节能环保',
          text:
            '智能监测家电实时用电功耗，根据环境和模式自由调节家居温度亮度，更节能，更环保，就是属于你的屋秘。',
          img:
            '<svg xmlns="http://www.w3.org/2000/svg" width="48.5" height="46" viewBox="0 0 48.5 46"><style type="text/css">.st0{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><g id="XMLID_1_"><path id="XMLID_6_" class="st0" d="M.5 28.2l2.5-5.4 3.4 4.9"/><path id="XMLID_5_" class="st0" d="M3 22.8v.2c0 12.4 10.1 22.5 22.5 22.5s22.5-10.1 22.5-22.5-10.1-22.5-22.5-22.5c-6.9 0-13 3.1-17.1 7.9"/><g id="XMLID_2_"><path id="XMLID_4_" class="st0" d="M17.9 29s5.1 3.8 11.4-.2c6.6-4.2 8.1-16.4 8.1-16.4s-14.1-.9-19.2 2.1c-3.2 1.8-6.3 6.5-2.6 12.8"/><path id="XMLID_3_" class="st0" d="M28.1 18.8s-5.8-.2-12.3 8.7c-2.3 3.1-2.2 7.7-2.2 7.7"/></g></g></svg>'
        },
        {
          title: '轻松组网',
          text:
            '独有Tap-and-Touch专利技术，提供轻松触碰组网体验。只需轻轻一碰，五分钟完成整套设置。',
          img:
            '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49"><style type="text/css">.st0{fill:none;stroke:#040000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><g id="XMLID_1_"><path id="XMLID_12_" class="st0" d="M13.2 24.5c0-4.3.7-8.4 1.9-12.3-3.1-.8-6.1-1.9-8.9-3.3-3.6 4.2-5.7 9.6-5.7 15.6 0 5.9 2.2 11.3 5.7 15.5 2.8-1.4 5.8-2.5 8.9-3.2-1.2-3.9-1.9-8-1.9-12.3z"/><path id="XMLID_11_" class="st0" d="M6.2 40c3.7 4.3 8.8 7.3 14.6 8.2-2.5-3.4-4.4-7.3-5.7-11.4-3.1.7-6.1 1.8-8.9 3.2z"/><path id="XMLID_10_" class="st0" d="M20.8.8c-5.8.9-10.9 3.9-14.6 8.1 2.8 1.4 5.8 2.5 8.9 3.2 1.3-4.1 3.3-7.9 5.7-11.3z"/><path id="XMLID_9_" class="st0" d="M37 24.5c0 4.4-.7 8.6-2 12.6 2.7.7 5.3 1.7 7.8 3 3.6-4.2 5.7-9.6 5.7-15.5s-2.2-11.4-5.7-15.6c-2.5 1.2-5.1 2.2-7.8 2.9 1.3 3.9 2 8.2 2 12.6z"/><path id="XMLID_8_" class="st0" d="M15.1 12.1c-1.2 3.9-1.9 8-1.9 12.3 0 4.3.7 8.4 1.9 12.3 3-.7 6.1-1.1 9.4-1.1 3.6 0 7.1.5 10.5 1.4 1.3-4 2-8.2 2-12.6s-.7-8.6-2-12.6c-3.3.9-6.8 1.4-10.5 1.4-3.2 0-6.4-.4-9.4-1.1z"/><path id="XMLID_7_" class="st0" d="M29.5 48c5.3-1.1 9.9-4 13.3-7.9-2.5-1.2-5.1-2.2-7.8-3-1.3 3.9-3.1 7.6-5.5 10.9z"/><path id="XMLID_6_" class="st0" d="M24.5 35.7c-3.2 0-6.4.4-9.4 1.1 1.3 4.1 3.2 8 5.7 11.4 1.2.2 2.4.3 3.7.3 1.7 0 3.4-.2 5-.5 2.3-3.3 4.2-7 5.4-10.9-3.3-.9-6.8-1.4-10.4-1.4z"/><path id="XMLID_5_" class="st0" d="M29.6 1c2.3 3.3 4.1 7 5.4 10.9 2.7-.7 5.3-1.7 7.8-2.9-3.4-4-8-6.8-13.2-8z"/><path id="XMLID_4_" class="st0" d="M24.5 13.2c3.6 0 7.1-.5 10.5-1.4-1.3-3.8-3.1-7.5-5.4-10.8-1.6-.4-3.3-.5-5.1-.5-1.3 0-2.5.1-3.7.3-2.4 3.4-4.4 7.2-5.7 11.3 3 .7 6.2 1.1 9.4 1.1z"/><path id="XMLID_3_" class="st0" d="M24.5.5v48"/><path id="XMLID_2_" class="st0" d="M48.5 24.5h-48"/></g></svg>'
        }
      ],
      reasonsR: [
        {
          title: '友好交互',
          text:
            '多年智能家居行业经验累积的客户反馈，更理解客户需求，更重视用户体验，从而设计出更友好的交互。',
          img:
            '<svg xmlns="http://www.w3.org/2000/svg" width="45.8" height="46" viewBox="0 0 45.8 46"><style type="text/css">.st0{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><g id="XMLID_1_"><g id="XMLID_5_"><path id="XMLID_7_" class="st0" d="M22.8 35.2v10.3h-22.3v-22.3h10.3"/><path id="XMLID_6_" class="st0" d="M12.8 18.9v-18.4h32.5v32.5h-19.2"/></g><g id="XMLID_2_"><path id="XMLID_4_" class="st0" d="M14.8 31.2l16.2-16.4"/><path id="XMLID_3_" class="st0" d="M22.8 14.8h8.2l.1 8.1"/></g></g></svg>'
        },
        {
          title: '无线连接',
          text:
            '无需布线，无需更换原有设备，Z-Wave，红外，蓝牙，WiFi完美配合，轻松实现家居智能化升级。',
          img:
            '<svg xmlns="http://www.w3.org/2000/svg" width="50.9" height="46" viewBox="0 0 50.9 46"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st1{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><g id="XMLID_1_"><g id="XMLID_6_"><path id="XMLID_8_" class="st0" d="M5 26.1h-4.5l22.6-18.4 8.1 6.8 6.2 5.1 8.2 6.5h-4.5"/><path id="XMLID_7_" class="st0" d="M41.1 26.1v17.3c0 1.2-1.1 2.1-2.5 2.1h-31.1c-1.4 0-2.5-.9-2.5-2.1v-17.3"/></g><g id="XMLID_2_"><path id="XMLID_5_" class="st1" d="M45.4 17.8c.1-3.2-1-6.4-3.5-8.9-2.4-2.4-5.7-3.6-8.9-3.5"/><path id="XMLID_4_" class="st1" d="M50.4 18.2c-.1-4.5-1.9-8.9-5.3-12.3-3.4-3.4-7.8-5.2-12.3-5.3"/><path id="XMLID_3_" class="st1" d="M41.2 17.5c.1-2-.6-4.1-2.1-5.7s-3.6-2.3-5.7-2.1"/></g></g></svg>'
        },
        {
          title: '多方兼容',
          text:
            '不只是Z-Wave，不止是Oomi，更多第三方配件兼容，更多第三方平台对接，打造开放的Oomi。',
          img:
            '<svg xmlns="http://www.w3.org/2000/svg" width="49.3" height="41.8" viewBox="0 0 49.3 41.8"><style type="text/css">.st0{fill:none;stroke:#000000;stroke-miterlimit:10;}</style><g id="XMLID_1_"><path id="XMLID_13_" class="st0" d="M19.4 5c0 2.5-2 4.5-4.5 4.5h-9.9c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5h10c2.4 0 4.4 2 4.4 4.5z"/><path id="XMLID_12_" class="st0" d="M48.8 5c0 2.5-2 4.5-4.5 4.5h-22.2c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5h22.2c2.5 0 4.5 2 4.5 4.5z"/><path id="XMLID_11_" class="st0" d="M19.4 20.9c0 2.5-2 4.5-4.5 4.5h-9.9c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5h10c2.4 0 4.4 2 4.4 4.5z"/><path id="XMLID_10_" class="st0" d="M48.8 20.9c0 2.5-2 4.5-4.5 4.5h-22.2c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5h22.2c2.5 0 4.5 2 4.5 4.5z"/><path id="XMLID_9_" class="st0" d="M19.4 36.8c0 2.5-2 4.5-4.5 4.5h-9.9c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5h10c2.4 0 4.4 2 4.4 4.5z"/><path id="XMLID_8_" class="st0" d="M48.8 36.8c0 2.5-2 4.5-4.5 4.5h-22.2c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5h22.2c2.5 0 4.5 2 4.5 4.5z"/><path id="XMLID_7_" class="st0" d="M19.4 5c0 2.5-2 4.5-4.5 4.5h-9.9c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5h10c2.4 0 4.4 2 4.4 4.5z"/><path id="XMLID_6_" class="st0" d="M48.8 5c0 2.5-2 4.5-4.5 4.5h-22.2c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5h22.2c2.5 0 4.5 2 4.5 4.5z"/><path id="XMLID_5_" class="st0" d="M19.4 20.9c0 2.5-2 4.5-4.5 4.5h-9.9c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5h10c2.4 0 4.4 2 4.4 4.5z"/><path id="XMLID_4_" class="st0" d="M48.8 20.9c0 2.5-2 4.5-4.5 4.5h-22.2c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5h22.2c2.5 0 4.5 2 4.5 4.5z"/><path id="XMLID_3_" class="st0" d="M19.4 36.8c0 2.5-2 4.5-4.5 4.5h-9.9c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5h10c2.4 0 4.4 2 4.4 4.5z"/><path id="XMLID_2_" class="st0" d="M48.8 36.8c0 2.5-2 4.5-4.5 4.5h-22.2c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5h22.2c2.5 0 4.5 2 4.5 4.5z"/></g></svg>'
        }
      ],
      b2b: [
        {
          title: '无线连接',
          text:
            '无需布线，无需更换原有设备，Z-Wave，红外，蓝牙，WiFi完美配合，轻松实现家居智能化升级。',
          img: 'https://picsum.photos/800/435?image=0'
        },
        {
          title: '多方兼容',
          text:
            '不只是Z-Wave，不止是Oomi，更多第三方配件兼容，更多第三方平台对接，打造开放的Oomi。',
          img: `${this.$store.state.cdn}/fantem/business-building.jpg`
        }
      ]
    }
  }
}
</script>