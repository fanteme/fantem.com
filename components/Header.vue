<template>
  <section>
    <header :class="{'isFixed fadeInDown': isFixed}">
      <div class="nav-wrap">
        <nav class="container nav">
          <div class="navbar-wrapper navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-wrapper-left navbar-brand">
              <nuxt-link :to="`/${this.$store.state.locale}`">
                <img :src="`${this.$store.state.cdn}/fantem/logo.svg`" alt="fantem logo">
              </nuxt-link>
            </div>
            <div
              class="navbar-burger is-hidden-tablet"
              data-target="navMenu"
              :class="{'showMenu': isActive}"
              @click="isActive = !isActive"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="navbar-wrapper-right has-text-right is-hidden-mobile">
              <div class="navbar-wrapper-right-menu">
                <ul>
                  <li
                    class="is-inline"
                    v-for="menu in menus"
                    :key="menu.id"
                    @mouseenter="ShowHeader(menu.submenus)"
                  >
                    <nuxt-link :to="menu.link">{{menu.title}}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <div v-show="isActive" class="mobile-list is-hidden-tablet" @touchmove.prevent>
              <ul>
                <li
                  v-for="(menu, key) in menus"
                  :key="key"
                  class="has-text-centered"
                  @click="ShowSubmenu(menu.title)"
                >
                  <nuxt-link
                    v-if="!menu.submenus"
                    class="nav-item"
                    :class="menu.class"
                    :to="menu.link"
                  >{{menu.title}}</nuxt-link>
                  <template v-else>
                    <span
                      :class="{active: showSubmenu && currentIndex == menu.title}"
                    >{{menu.title}}</span>
                    <ul v-if="menu.submenus" v-show="showSubmenu && currentIndex == menu.title">
                      <li v-for="(item, ind) in menu.submenus" :key="ind">
                        <nuxt-link
                          class="nav-item"
                          :class="menu.class"
                          :to="item.link"
                        >{{item.title}}</nuxt-link>
                      </li>
                    </ul>
                  </template>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <section-header
        class="is-hidden-mobile"
        v-if="typeof (secheader) != 'undefined'"
        :secheader="secheader"
      ></section-header>
    </header>
  </section>
</template>
<style lang="stylus">
.fadeInDown {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: fadeInDown;
}

.isFixed {
  position: fixed;
  z-index: 9;
  width: 100%;

  &+main {
    padding-top: 6.75rem;
  }
}

.nav-wrap {
  position: relative;
  z-index: 4;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  >nav.container {
    padding: 0;
  }
}

.navbar {
  box-shadow: none;

  &-brand {
    margin-left: 0 !important;
  }

  &-wrapper {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 769px) {
      height: 3.8rem;
    }

    &-left {
      img {
        width: 85px;

        @media (max-width: 769px) {
          width: 60px;
          margin-left: 15px;
        }
      }
    }

    &-right {
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex-grow: 1;

      &-menu {
        padding-left: calc(100vw * 0.25);

        ul {
          display: flex;
          justify-content: space-between;
        }
      }
    }

    .mobile-list {
      position: fixed;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      background: #fff;
      box-shadow: 0 10px 60px rgba(29, 29, 31, 0.07);
      width: 100%;
      height: 100vh;
      z-index: 9;
      top: 108px;
      overflow-y: auto;

      @media (max-width: 769px) {
        top: 61px;
      }

      ul {
        width: 100%;

        li {
          .active {
            color: #ed7422;
          }

          .nav-item {
            line-height: 48px;
          }

          span {
            display: inline-block;
            line-height: 48px;
          }

          ul {
            li {
              border-bottom: 1px solid #ccc;
              background: rgba(0, 0, 0, 0.06);

              a {
                line-height: 32px;
              }
            }
          }
        }
      }
    }
  }

  &-burger {
    position: relative;
    cursor: pointer;
    transition: 0.4s;

    &.showMenu {
      transform: rotate(90deg);

      span {
        &:first-child {
          margin-top: 0;
          transform: rotate(45deg) translate(4px, 6px);
        }

        &:nth-child(2) {
          transform: scaleX(0);
        }

        &:last-child {
          margin-top: 0;
          transform: rotate(-45deg) translate(1px, -3px);
        }
      }
    }

    &:hover span {
      background-image: linear-gradient(100deg, #f26f21 33%, #f37825 48%, #f59031 72%, #f9b443 100%);
    }

    span {
      position: absolute;
      display: block;
      background-color: #343434;
      width: 1.25rem;
      height: 1.5px;
      left: 50%;
      top: 50%;
      margin-left: - @width * 0.5;
      transition: 0.4s;

      &:first-child {
        margin-top: -6px;
      }

      &:nth-child(2) {
        margin-top: -1px;
      }

      &:nth-child(3) {
        margin-top: 4px;
      }
    }
  }
}
</style>
<script>
import SectionHeader from '~/components/SectionHeader'
export default {
  components: {
    SectionHeader
  },
  data() {
    return {
      isActive: false,
      isFixed: false,
      show: true,
      secheader: [],
      showSubmenu: false,
      currentIndex: ''
    }
  },
  watch: {
    $route() {
      this.isActive = false
    }
  },
  computed: {
    baseUrl() {
      return this.$store.state.locale == this.$store.state.fallbackLocale
        ? ''
        : `/${this.$store.state.locale}`
    },
    menus() {
      return [
        {
          title: this.$t('首页'),
          link: `${this.baseUrl}/`
        },
        {
          title: this.$t('产品中心'),
          link: `${this.baseUrl}/products`,
          submenus: [
            {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="42" height="49"><g fill="none" fill-rule="evenodd" stroke="#211613" stroke-linecap="round" stroke-linejoin="round"><path d="M41.137 40.15c0 .934-.76 1.692-1.695 1.692H2.383c-.93 0-1.684-.758-1.684-1.692V3.093c0-.939.754-1.693 1.684-1.693h37.06c.933 0 1.694.754 1.694 1.693V40.15zm-20.221 1.693v6.2m-20.217 0h40.438"/><path d="M35.14 21.622c0 7.859-6.366 14.222-14.229 14.222-7.854 0-14.217-6.363-14.217-14.222 0-7.854 6.363-14.222 14.217-14.222 7.863 0 14.23 6.368 14.23 14.222z"/><path d="M30 21.622c0 5.018-4.062 9.089-9.084 9.089-5.02 0-9.084-4.071-9.084-9.09 0-5.012 4.064-9.083 9.084-9.083A9.083 9.083 0 0 1 30 21.622z"/></g></svg>',
              title: `${this.$t('智能网关')}`,
              link: `${this.baseUrl}/products/#gateway`
            },
            {
              icon:
                '<svg width="29" height="49" xmlns="http://www.w3.org/2000/svg"><g stroke="#211613" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M28.5 3.5a3 3 0 0 0-3-3h-21a3 3 0 0 0-3 3v42a3 3 0 0 0 3 3h21a3 3 0 0 0 3-3v-42z"/><path d="M24 29a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V29z"/></g></svg>',
              title: `${this.$t('智能开关')}`,
              link: `${this.baseUrl}/products/#switch`
            },
            {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="49"><path fill="none" stroke="#040000" stroke-linecap="round" stroke-linejoin="round" d="M8.535 39.629a1.168 1.168 0 0 1-1.133-.88L2.493 19.605l-.076-.183c-.07-.168-.115-.274-.153-.377a13.228 13.228 0 0 1-.856-4.701c0-7.324 5.958-13.282 13.282-13.282S27.972 7.02 27.972 14.344c0 1.769-.355 3.506-1.056 5.163L21.81 38.759c-.136.512-.6.87-1.132.87H8.535zM2.48 19.605H26.9M9.754 43.829h9.872m-8.264 4.553h6.655"/></svg>',
              title: `${this.$t('智能照明')}`,
              link: `${this.baseUrl}/products/#light`
            },
            {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><g fill="none" fill-rule="evenodd" stroke="#221714"><path d="M48.618 35.773c0 7.151-5.797 12.948-12.948 12.948H13.567C6.415 48.721.618 42.925.618 35.775V13.67C.618 6.52 6.415.723 13.568.723H35.67c7.151 0 12.948 5.798 12.948 12.948v22.103z"/><path d="M43.036 24.722c0 10.172-8.246 18.418-18.418 18.418C14.446 43.14 6.2 34.894 6.2 24.722c0-10.172 8.246-18.418 18.418-18.418 10.172 0 18.418 8.246 18.418 18.418z"/></g></svg>',
              title: `${this.$t('智能传感器')}`,
              link: `${this.baseUrl}/products/#sensor`
            },
            {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="41" height="50"><g fill="none" fill-rule="evenodd" stroke="#221714"><path d="M8.228 1.723c3.074-1.334 19.341-1.334 24.833 0 3.116.559 5.011 3.472 5.729 7.236 1.605 3.91 1.777 25.945 0 31.36-1.208 3.727-2.958 6.29-5.729 7.238-3.167 1.72-21.243 1.377-24.833 0-2.779-.173-4.87-3.818-5.73-7.238-1.956-5.243-.922-28.483 0-31.36.541-3.578 3.657-7.107 5.73-7.236z"/><path d="M20.645 25.834a7.226 7.226 0 1 1 0 14.452 7.226 7.226 0 0 1 0-14.452z"/></g></svg>',
              title: `${this.$t('智能辅助类')}`,
              link: `${this.baseUrl}/products/#auxiliary`
            },
            {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="50"><path fill="none" stroke="#221714" d="M24.362.93C11.2.93.572 11.667.572 24.72c0 11.794 8.683 21.666 20.059 23.47v-4.695c0-1.678-1.027-3.17-2.586-3.834-5.83-2.473-9.907-8.262-9.907-14.942 0-8.903 7.247-16.218 16.224-16.218 8.976 0 16.224 7.316 16.224 16.218 0 10.492-8.11 20.414-19.91 23.477 1.202.187 2.427.318 3.68.318 13.162 0 23.794-10.736 23.794-23.795C48.15 11.66 37.524.93 24.362.93z"/></svg>',
              title: `${this.$t('第三方兼容产品')}`,
              link: `${this.baseUrl}/products/#thirdProducts`
            }
          ]
        },
        {
          title: this.$t('应用场景'),
          link: `${this.baseUrl}/application`,
          submenus: [
            {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="40" viewBox="0 0 36 40"><g fill="none" fill-rule="evenodd" stroke="#040000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".781" transform="translate(1)"><path d="M17.31.39C17.31.39 11.67 7.72.39 6L.39 24.81C.39 24.81.69 31.62 8.85 35.58 12.91 37.58 15.13 37.45 17.31 39.39M17.31.39C17.31.39 23 7.72 34.23 6L34.23 24.81C34.23 24.81 33.92 31.62 25.77 35.58 21.71 37.58 19.48 37.45 17.31 39.39"/><path d="M8.57,19.2 L6.39,19.2 L17.31,10.3 L21.24,13.59 L24.23,16.05 L28.22,19.2 L26.05,19.2 M26.05,19.2 L26.05,27.55 C25.9818681,28.1506486 25.453088,28.5912987 24.85,28.55 L9.77,28.55 C9.16519834,28.5966294 8.63319762,28.1532955 8.57,27.55 L8.57,19.2"/></g></svg>',
              title: `${this.$t('安防模式')}`,
              link: `${this.baseUrl}/application/security`,
              class: 'is-offset-2'
            },
            {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="41" viewBox="0 0 56 41"><g fill="none" fill-rule="evenodd" stroke="#040000" stroke-linecap="round" stroke-linejoin="round" transform="translate(0 1)"><path d="M43.7708,27.7072 L43.6078,27.7842 L43.3868,27.8892 C42.5588,28.2832 41.6728,28.4822 40.7538,28.4822 C38.7628,28.4822 36.9428,27.5732 35.7618,25.9882 L27.8568,15.4642 L20.0188,25.9892 C19.0178,27.3202 17.5538,28.1862 15.8988,28.4242 C15.6218,28.4632 15.3298,28.4822 15.0088,28.4822 C14.0968,28.4822 13.2138,28.2832 12.3848,27.8892 L12.0008,27.7072"/><path d="M10.6182 26.6796L10.3382 26.3616C9.5382 25.4496 9.0222 24.3246 8.8462 23.1086 8.6182 21.4616 9.0432 19.8146 10.0432 18.4736L20.7852 4.1796 20.7952 4.1696 20.8342 4.1136 23.2962.8406C23.4602.6246 23.7112.4996 23.9852.4996 24.1712.4996 24.3492.5586 24.4982.6696L27.8862 3.2206 31.2762.6676C31.4222.5586 31.6002.4996 31.7862.4996 32.0612.4996 32.3122.6246 32.4772.8416L34.9592 4.1436 34.9852 4.1696 45.7292 18.4756C46.7282 19.8146 47.1532 21.4616 46.9252 23.1116 46.7502 24.3246 46.2332 25.4496 45.4332 26.3616L45.1542 26.6796M10.5723 26.6274L12.0913 27.7504M11.3096 27.1935L4.2246 36.6665M.5001 34.0407L7.7231 39.4837M44.5343 27.2099L51.6183 36.6829M55.3438 34.0568L48.1208 39.4998M43.7708 27.7072C43.7708 27.7072 44.2598 27.4932 45.1538 26.6792"/></g></svg>',
              title: `${this.$t('娱乐模式')}`,
              link: `${this.baseUrl}/application/ent`
            },
            {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="38" viewBox="0 0 40 38"><g fill="none" fill-rule="evenodd" stroke="#040000" stroke-linecap="round" stroke-linejoin="round"><path d="M7.3991,27.4684 C7.3991,27.4684 15.5741,33.5544 25.7191,27.1784 C36.4051,20.4634 38.8221,0.6894 38.8221,0.6894 C38.8221,0.6894 16.0371,-0.7016 7.9211,4.0514 C2.8411,7.0264 -2.1669,14.6004 3.7471,24.6864"/><path d="M23.8642,11.1229 C23.8642,11.1229 14.5142,10.7649 4.0942,25.1499 C0.4422,30.1929 0.50014503,37.4959 0.50014503,37.4959"/></g></svg>',
              title: `${this.$t('节能模式')}`,
              link: `${this.baseUrl}/application/eco`
            },
            {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="43" height="41" viewBox="0 0 43 41"><g fill="none" fill-rule="evenodd" stroke="#221714" transform="translate(0 1)"><path stroke-linecap="round" stroke-linejoin="round" d="M30.789,0.4999 C29.05,0.4999 27.3,0.9349 25.73,1.7659 C24.177,2.5819 22.784,3.7909 21.702,5.2539 L21.494,5.5349 L21.286,5.2539 C20.203,3.7909 18.81,2.5819 17.259,1.7659 C15.689,0.9349 13.94,0.4999 12.198,0.4999 C5.747,0.4999 0.5,6.2479 0.5,13.3129 C0.5,17.5409 2.4,20.5199 3.925,22.9159 C8.39,29.9199 19.638,38.6529 20.116,39.0199 C20.522,39.3339 20.999,39.4999 21.493,39.4999 C21.989,39.4999 22.466,39.3339 22.871,39.0199 C23.347,38.6529 34.587,29.9359 39.061,22.9159 C40.588,20.5199 42.486,17.5409 42.486,13.3129 C42.486,6.2479 37.24,0.4999 30.789,0.4999 Z"/><polyline points="8.912 21.662 13.125 21.608 17.899 12.224 23.469 26.555 28.685 21.662 34.077 21.662"/></g></svg>',
              title: `${this.$t('健康模式')}`,
              link: `${this.baseUrl}/application/health`
            },
            {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="40" viewBox="0 0 48 40"><g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><polygon stroke="#040000" points="30.661 23.887 20.354 31.167 20.354 23.887 20.354 16.608"/><g stroke="#221714"><polyline points="8.486 16.608 8.486 30.502 8.486 31.047 8.486 39.495 20.057 39.495 19.755 39.5 27.751 39.5 28.053 39.495 39.627 39.495 39.627 16.842"/><polyline points="47.61 23.084 24.058 .5 .5 23.084"/></g></g></svg>',
              title: `${this.$t('场景模式')}`,
              link: `${this.baseUrl}/application/scene`
            }
          ]
        },
        {
          title: this.$t('行业方案'),
          link: `${this.baseUrl}/solution`,
          submenus: [
            {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="55" height="49"><g fill="none" fill-rule="evenodd" stroke="#040000" stroke-linecap="round" stroke-linejoin="round"><path d="M11.566 3.067v15.017M4.082 27.191L26.593.246l23.869 26.209"/><path d="M7.027 47.951V33.963L27.33 11.289l20.187 22.233v14.429"/><path d="M21.988 47.951V33.374h10.568v14.577M.627 48.43h53.29"/></g></svg>',
              title: `${this.$t('智慧别墅')}`,
              link: `${this.baseUrl}/solution/villa`,
              class: 'is-offset-4'
            },
            {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="57" height="48"><g fill="none" fill-rule="evenodd" stroke="#211613" stroke-linecap="round" stroke-linejoin="round"><path d="M6.673 46.235V4.787a3.39 3.39 0 0 1 3.39-3.389h24.801a3.389 3.389 0 0 1 3.39 3.389v41.597"/><path d="M15.462 47.039V29.7h13.257v17.397M38.7 12.123h9.273a3.389 3.389 0 0 1 3.389 3.389v30.723M.864 47.278h54.967M13.823 10.186h17.28m-17.28 9.236h17.28"/></g></svg>',
              title: `${this.$t('智慧酒店')}`,
              link: `${this.baseUrl}/solution/hotel`
            },
            {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="49"><path fill="none" stroke="#211613" stroke-linecap="round" stroke-linejoin="round" d="M33.956 47.49h-22.57V3.332a2.312 2.312 0 0 1 2.311-2.313h17.946a2.312 2.312 0 0 1 2.313 2.313V47.49zm13.428 0h-13.22V20.271H44.58a2.805 2.805 0 0 1 2.805 2.805V47.49zm-46.413.166h54.105M17.608 12.97h10.124M17.609 24.255h10.124m9.46 5.477h7.593m-7.593 8.464h7.593M17.61 35.54h10.124M5.629 47.208v-7.196m3.227-5.352c0 2.908-1.445 5.265-3.227 5.265-1.782 0-3.227-2.357-3.227-5.265 0-2.908 1.445-5.265 3.227-5.265 1.782 0 3.227 2.357 3.227 5.265z"/></svg>',
              title: `${this.$t('智慧小区')}`,
              link: `${this.baseUrl}/solution/community`
            },
            {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="49"><g fill="none" fill-rule="evenodd" stroke="#040000" stroke-linecap="round" stroke-linejoin="round"><path d="M28.5 31.489L.596 16.555 28.989 1.132l26.077 14.934z"/><path d="M11.107 22.185v18.61a6.748 6.748 0 0 0 6.748 6.749H39.91a6.748 6.748 0 0 0 6.747-6.748v-19.82m5.926-2.675v19.113"/></g></svg>',
              title: `${this.$t('智慧教育')}`,
              link: `${this.baseUrl}/solution/education`
            }
          ]
        },
        {
          title: this.$t('商务合作'),
          link: `${this.baseUrl}/business`
        },
        {
          title: this.$t('技术支持'),
          link: `${this.baseUrl}/support`,
          submenus: [
            {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="50"><path fill="none" stroke="#211613" stroke-linecap="round" stroke-linejoin="round" stroke-width=".882" d="M12 1.7C5.842 1.7.85 6.692.85 12.85S5.842 24 12 24h11.12V12.84A11.13 11.13 0 0 0 12 1.7m35.76 11.14a11.12 11.12 0 1 0-22.23 0V24h11.12c6.143-.011 11.116-4.997 11.11-11.14M.87 37.56a11.12 11.12 0 1 0 22.23 0V26.42H12A11.13 11.13 0 0 0 .88 37.56m35.8-11.14H25.6v11.14c.033 6.111 5.008 11.042 11.12 11.02 6.111-.022 11.05-4.988 11.04-11.1-.011-6.111-4.969-11.06-11.08-11.06"/></svg>',
              title: `${this.$t('服务体系')}`,
              link: `${this.baseUrl}/support/service`,
              class: 'is-offset-2'
            },
            {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="50"><g fill="none" fill-rule="evenodd" stroke="#221714" stroke-linecap="round" stroke-linejoin="round" transform="translate(0 1)"><rect width="27.52" height="48" x=".82" y=".2" rx="2.88"/><path d="M17 43.1a2.42 2.42 0 1 1-4.84 0 2.42 2.42 0 0 1 4.84 0zM5.17 5.68H24v32.09H5.17z"/></g></svg>',
              title: `${this.$t('APP下载')}`,
              link: `${this.baseUrl}/support/app`
            },
            {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="40"><g fill="none" fill-rule="evenodd" stroke="#231815" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.154"><path d="M5.72 10.24l3.2-8.34m5.48 8.34l3.2-8.55m5.48 8.55l3.21-8.54m5.47 8.54l3.21-8.54m5.47 8.54l3.21-8.54m-32.02-.37h35.12a1.56 1.56 0 0 1 1.37 1.73v34.3a1.55 1.55 0 0 1-1.37 1.71H2.6a1.56 1.56 0 0 1-1.35-1.71v-36l10.38-.03z"/><path d="M20.45 30.68V17.89l8.47 6.39zM1.25 10.71h46.87"/></g></svg>',
              title: `${this.$t('视频中心')}`,
              link: `${this.baseUrl}/support/videos`
            },
            {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path fill="#221714" stroke="#211714" d="M25.15,36.3 C24.5148725,36.3 24,35.7851275 24,35.15 C24,34.5148725 24.5148725,34 25.15,34 C25.7851275,34 26.3,34.5148725 26.3,35.15 C26.3,35.7851275 25.7851275,36.3 25.15,36.3 Z M25.1,35.8 C25.3761424,35.8 25.6,35.5761424 25.6,35.3 C25.6,35.0238576 25.3761424,34.8 25.1,34.8 C24.8238576,34.8 24.6,35.0238576 24.6,35.3 C24.6,35.5761424 24.8238576,35.8 25.1,35.8 Z M25.1,13.7 C27,13.7 28.5,14.3 29.4,15.4 C30.5,16.4 31,17.8 31,19.5 C31,20.7 30.6,21.8 29.9,22.8 C29.6,23.3 28.8,24 27.6,25.1 C26.8,25.8 26.3,26.4 26,26.9 C25.5,27.7 25.3,28.5 25.3,29.4 L25.3,30.5 L24.1,30.5 L24.1,29.4 C24.1,28.6 24.2,27.9 24.6,27.2 C25.1,26.2 25.9,25.2 27.1,24.1 C28.1,23.2 28.7,22.6 29,22.2 C29.7,21.3 30,20.4 30,19.5 C30,18.1 29.6,16.9 28.8,16.1 C27.9,15.2 26.7,14.8 25.1,14.8 C23.3,14.8 22,15.4 21.1,16.6 C20.3,17.6 19.9,19 19.8,20.7 L18.6,20.7 C18.7,18.7 19.2,17.1 20.2,15.9 C21.4,14.4 23,13.7 25.1,13.7 Z M24.9,0.8 C11.7,0.8 0.9,11.6 0.9,24.8 C0.9,38 11.7,48.8 24.9,48.8 C38.1,48.8 48.9,38 48.9,24.8 C48.9,11.6 38.2,0.8 24.9,0.8 Z M24.9,47.8 C12.2,47.8 1.9,37.5 1.9,24.8 C1.9,12.1 12.2,1.8 24.9,1.8 C37.6,1.8 47.9,12.1 47.9,24.8 C47.9,37.5 37.6,47.8 24.9,47.8 Z"/></svg>',
              title: `${this.$t('常见问题')}`,
              link: `${this.baseUrl}/support/faq`
            },
            {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="38" height="49"><g fill="none" fill-rule="evenodd" stroke="#221714" stroke-linecap="round" stroke-linejoin="round" stroke-width=".979"><path d="M4.66.7a3.47 3.47 0 0 0-3.37 3.72V44c0 1.69 1.35 3.72 3.37 3.72h28.73A3.47 3.47 0 0 0 36.77 44V12.87L23.25.7H4.66z"/><path d="M34.3 14H22.48V3.51s11.15 9.81 11.82 10.48M6.46 19.47h24.95m-24.95 7.9h24.95m-24.95 7.9h24.95"/></g></svg>',
              title: `${this.$t('使用手册')}`,
              link: `${this.baseUrl}/support/guide`
            }
          ]
        },
        {
          title: this.$t('关于我们'),
          link: `${this.baseUrl}/about`,
          submenus: [
            {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="42" height="49"><g fill="none" fill-rule="evenodd" stroke="#040000" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"><rect width="39.78" height="47" x=".04" y=".12" rx="2.46"/><path d="M13.57 13.4H31.7M13.57 23.62H31.7M13.57 33.85H31.7M10.03 13.4H8.05m1.98 10.23H8.05m1.98 10.22H8.05"/></g></svg>',
              title: `${this.$t('公司简介')}`,
              link: `${this.baseUrl}/about/company`,
              class: 'is-offset-4'
            },
            {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="49"><g fill="none" fill-rule="evenodd"><path stroke="#040000" stroke-linecap="round" stroke-linejoin="round" d="M12.08 4.19a23.54 23.54 0 0 0-7.51 6.77c.39-.55.8-1.07 1.24-1.58a23.77 23.77 0 0 1 6.27-5.19z"/><path stroke="#040000" stroke-linecap="round" stroke-linejoin="round" d="M14 14.17c.15-.56.31-1.11.48-1.66A40 40 0 0 1 20.02 1.4c-.69.11-1.36.25-2 .41h-.11c-.64.16-1.26.35-1.88.56l-.18.06c-.61.22-1.2.45-1.78.71l-.18.08c-.59.27-1.16.56-1.72.88l-.11.06a23.77 23.77 0 0 0-6.27 5.19c-.44.51-.85 1-1.24 1.58a23.64 23.64 0 0 0-1.9 3.18l11.35.06z"/><path stroke="#040000" stroke-linecap="round" stroke-linejoin="round" d="M4.55 11a22.14 22.14 0 0 0-1.91 3.18A23.64 23.64 0 0 1 4.55 11zm-.03 27.21zm7.67-34.08zm29.37 5.25zM14 14.17H34.45c-.17-.65-.35-1.29-.56-1.92a40.15 40.15 0 0 0-5.26-10.59 23.47 23.47 0 0 0-8.62-.26 40 40 0 0 0-5.54 11.11c-.12.55-.28 1.1-.47 1.66zM16.05 2.4zM18 1.81c.66-.16 1.33-.3 2-.41-.63.11-1.3.25-2 .41zm-3.91 1.36z"/><path stroke="#040000" stroke-linecap="round" stroke-linejoin="round" d="M34.49 14.17h10.22a23.58 23.58 0 0 0-1.89-3.18c-.39-.55-.8-1.07-1.23-1.58a23.6 23.6 0 0 0-4.16-3.83 24.52 24.52 0 0 0-3.23-2c-.56-.27-1.13-.53-1.71-.76h-.09a23.82 23.82 0 0 0-3.66-1.11A40.15 40.15 0 0 1 34 12.3c.14.58.32 1.22.49 1.87zM13.9 46c-.58-.27-1.15-.55-1.7-.87.55.31 1.12.59 1.7.87zm20.21-.32c-.55.28-1.12.53-1.7.76.59-.23 1.15-.44 1.7-.76zm-.18-8.74c.2-.61.38-1.23.55-1.86H14.06c.14.54.29 1.07.46 1.6a39.93 39.93 0 0 0 5.59 11.17 23.7 23.7 0 0 0 3.56.27 23.42 23.42 0 0 0 8.61-1.63 22.88 22.88 0 0 1-3.67 1.11 40 40 0 0 0 5.32-10.66zm3.44 6.78z"/><path stroke="#040000" stroke-linecap="round" stroke-linejoin="round" d="M14.52 36.68c-.17-.53-.32-1.06-.46-1.6H2.65c.25.49.5 1 .77 1.45.33.573.69 1.127 1.08 1.66v.05a23.488 23.488 0 0 0 5.82 5.73c.54.38 1.11.73 1.68 1.06l.14.07c.55.32 1.12.6 1.7.87l.21.1c.58.25 1.16.49 1.76.7l.23.08c.6.2 1.21.39 1.84.54h.18c.65.16 1.31.29 2 .39a39.93 39.93 0 0 1-5.54-11.1zm24.37 5.85c-.47.4-1 .79-1.47 1.16.51-.37 1-.76 1.47-1.16z"/><path stroke="#040000" stroke-linecap="round" stroke-linejoin="round" d="M43.93 36.55c.28-.47.53-1 .77-1.45H34.47a40 40 0 0 1-5.86 12.52 22.88 22.88 0 0 0 3.67-1.11h.12c.58-.23 1.15-.48 1.7-.76a23 23 0 0 0 3.24-2h.05c.51-.37 1-.76 1.47-1.16a23.48 23.48 0 0 0 2.68-2.69c.43-.5.84-1 1.23-1.57v-.05c.46-.6.82-1.16 1.16-1.73zM17.94 47.41zM2.64 35.08c.24.49.5 1 .78 1.45-.27-.47-.52-1-.77-1.45h-.01zm42.09-20.91a24.13 24.13 0 0 0-1.91-3.18 23.58 23.58 0 0 1 1.89 3.18h.02zM15.87 46.79zm-3.81-1.74zm-6.29-5.22c-.43-.5-.83-1-1.22-1.57a23.64 23.64 0 0 0 1.22 1.57z"/><path stroke="#040000" stroke-linecap="round" stroke-linejoin="round" d="M38.91 42.52a23.62 23.62 0 0 0 3.91-4.26c-.39.54-.8 1.07-1.23 1.57a23.48 23.48 0 0 1-2.68 2.69zm2.65-33.14c.43.51.84 1 1.23 1.58-.39-.55-.79-1.07-1.23-1.58zm-7.43-5.81zm9.81 32.96c.28-.47.54-1 .79-1.45-.26.49-.51.98-.79 1.45zm-.01.02zM32.42 2.81c.58.23 1.15.49 1.71.76-.56-.27-1.13-.57-1.71-.76zm-3.75-1.15zm16.06 12.51h-.02m0 20.91h.02"/><path fill="#000" fill-rule="nonzero" d="M1.49 18.46l7.59 10.88h.06V18.46h1.09V31H9L1.37 20h-.05v11H.25V18.46zM21.16 18.46v.95h-7.74V24h7.31v1h-7.31v5.06h8V31h-9.1V18.46zM23.07 18.46l3 11.11h.06l3.07-11.11h1.25l3.08 11.11 3-11.11h1.22L34.19 31h-1.26l-3.08-11-3.08 11h-1.26L21.9 18.45zM46.09 19.21a4.05 4.05 0 0 1 1.41 3h-1.08a3.47 3.47 0 0 0-1.1-2.24 3.81 3.81 0 0 0-2.54-.75 4.53 4.53 0 0 0-2.39.53 1.9 1.9 0 0 0-1 1.77 1.87 1.87 0 0 0 1.18 1.67c.79.328 1.602.599 2.43.81a14.09 14.09 0 0 1 3.23 1.2 2.89 2.89 0 0 1 1.56 2.63 3 3 0 0 1-1.35 2.57 5.88 5.88 0 0 1-3.43.89 5.4 5.4 0 0 1-3.41-1 4.55 4.55 0 0 1-1.58-3.41h1.06a3.72 3.72 0 0 0 1.23 2.64 4.18 4.18 0 0 0 2.69.77 5.12 5.12 0 0 0 2.69-.65 2.07 2.07 0 0 0 1-1.78 2.21 2.21 0 0 0-1.28-2 13.19 13.19 0 0 0-2.76-1 15.19 15.19 0 0 1-2.88-1 2.55 2.55 0 0 1-1.44-2.35 2.78 2.78 0 0 1 1.35-2.5 5.55 5.55 0 0 1 3.13-.81 5 5 0 0 1 3.28 1.01z"/></g></svg>',
              title: `${this.$t('公司动态')}`,
              link: `${this.baseUrl}/about/news`
            },
            {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="67" height="41"><g fill="none" fill-rule="evenodd" stroke="#040000" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"><ellipse cx="32.49" cy="10.19" rx="10.09" ry="10.07"/><path d="M13.59 39.12c.236-10.266 8.626-18.465 18.895-18.465S51.144 28.854 51.38 39.12M24.57 16.79A8.64 8.64 0 1 1 22.4 8.2m20 .18a8.63 8.63 0 1 1-2 8.41"/><path d="M55.21 39.12h9.69a16.22 16.22 0 0 0-21.4-15.33M9.77 39.12H.07a16.21 16.21 0 0 1 21-15.45"/></g></svg>',
              title: `${this.$t('加入我们')}`,
              link: `${this.baseUrl}/about/join`
            },
            {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="48"><g fill="none" fill-rule="evenodd" stroke="#040000" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21.59a38.17 38.17 0 0 0 35.83 25c1 0 1.94 0 2.9-.12a5.82 5.82 0 0 0 4.63-5.69v-5.46a5.58 5.58 0 0 0-5.57-5.57H29.88a5.56 5.56 0 0 0-5.42 4.34A29.52 29.52 0 0 1 13 22.64a5.57 5.57 0 0 0 4.58-5.47V6.27A5.56 5.56 0 0 0 12.01.71H6.42a5.78 5.78 0 0 0-4.26 1.88A5.49 5.49 0 0 0 .75 6.27v5.34A38 38 0 0 0 3 21.59z"/><path stroke-width=".953" d="M29.34.67c9.916.615 17.824 8.515 18.45 18.43m-5.86 1.47a13.83 13.83 0 0 0-14.06-14m-1.48 5.88A8.09 8.09 0 0 1 36 22.06"/></g></svg>',
              title: `${this.$t('联系我们')}`,
              link: `${this.baseUrl}/about/contact`
            }
          ]
        }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      let scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop
      if (scrollTop > 80) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    })
  },
  methods: {
    ShowHeader(val) {
      this.secheader = val
      this.$store.commit('SHOW_HEADER', this.show)
    },
    ShowSubmenu(val) {
      this.currentIndex = val
      this.showSubmenu = !this.showSubmenu
    }
  }
}
</script>