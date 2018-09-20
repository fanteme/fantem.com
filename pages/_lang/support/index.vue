<template>
  <main class="main supports">
    <section class="hero">
      <div class="hero-content center" style="background-image: url(http://cdn.fantem.cn/fantem/banner/hero.jpg)">
        <div class="container-fluid has-text-centered">
          <h1 class="title">
            您的满意 是我们至高的荣誉
          </h1>
          <h2 class="subtitle">
            诚信 创新 持久 共赢
          </h2>
        </div>
      </div>
    </section>
    <section class="info">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-one-third-tablet">
            <h2 class="caption">
              <i class="fa fa-download"></i>下载中心
            </h2>
            <ul>
              <li>
                <a :href="`${$store.state.cdn}/${$store.state.apkFilename}?t=${new Date().getTime()}`">
                  <i class="fa fa-android"></i>OomiPro安卓版
                </a>
              </li>
              <li>
                <a href="//itunes.apple.com/cn/app/oomi-pro/id1311087767" target="_blank">
                  <i class="fa fa-apple"></i>OomiPro苹果版
                </a>
              </li>
              <li>
                <a :href="`${$store.state.cdn}/com.fantem.apk?t=${new Date().getTime()}`">
                  <i class="fa fa-android"></i>FantemNet安卓版
                </a>
              </li>
            </ul>
          </div>
          <div class="column is-one-third-tablet">
            <h2 class="caption">
              <i class="fa fa-play-circle"></i>视频中心
            </h2>
            <ul>
              <li>
                <nuxt-link to="/videos#APP使用">
                  <i class="fa fa-mobile"></i>APP使用
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/videos#产品使用">
                  <i class="fa fa-book"></i>产品使用
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/videos#出入网操作">
                  <i class="fa fa-wifi"></i>出入网操作
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/videos#开关接线">
                  <i class="fa fa-plug"></i>开关接线
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/videos#场景设置">
                  <i class="fa fa-sliders"></i>场景设置
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/videos#第三方兼容">
                  <i class="fa fa-cubes"></i>第三方兼容
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="column is-one-third-tablet">
            <h2 class="caption">
              <i class="fa fa-file"></i>文档中心
            </h2>
            <ul>
              <li>
                <nuxt-link to="/faq">
                  <i class="fa fa-question-circle"></i>FAQ 常见问题
                </nuxt-link>
              </li>
              <li>
                <a :href="`${$store.state.cdn}/Oomi%20Brochure-CN%202018-v4.pdf?t=${new Date().getTime()}`" target="_blank">
                  <i class="fa fa-file-pdf-o"></i>宣传彩页
                </a>
              </li>
              <li>
                <a :href="`${$store.state.cdn}/fantem/%E4%BF%9D%E4%BF%AE%E5%8D%A1%20V1.pdf?t=${new Date().getTime()}`" target="_blank">
                  <i class="fa fa-file-pdf-o"></i>保修卡
                </a>
              </li>
              <li>
                <nuxt-link to="/user-guide">
                  <i class="fa fa-link"></i>使用手册
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="stylus">
.supports {
  .info {
    padding: 3rem 0;

    .caption {
      font-size: 1.5rem;
      padding-bottom: 0.75rem;
      color: #f79f24;

      i {
        padding-right: 0.75rem;
        color: #f79f24;
      }
    }

    ul {
      li {
        padding: 0.625rem;

        &+li {
        }
      }

      .fa {
        padding-right: 0.5rem;

        &-apple {
          color: #000;
        }
      }
    }
  }
}
</style>

<script>
export default {
  head() {
    return {
      title: this.$t('技术支持')
    }
  }
}
</script>
