<template>
  <section>
    <header :class="{'isFixed fadeInDown': isFixed}">
      <div class="nav-wrap">
        <nav class="container nav">
          <div class="navbar-wrapper navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-wrapper-left navbar-brand">
              <nuxt-link :to="`/${this.$store.state.locale}`">
                <img :src="`${this.$store.state.cdn}/fantem/logo.svg`" alt="fantem logo" />
              </nuxt-link>
            </div>
            <div class="navbar-burger is-hidden-tablet" data-target="navMenu" :class="{'showMenu': isActive}" @click='isActive = !isActive'>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="navbar-wrapper-right has-text-right is-hidden-mobile">
              <div class="navbar-wrapper-right-menu">
                <ul>
                  <li class="is-inline" v-for="menu in menus" :key="menu.id" @mouseenter="ShowHeader(menu.submenus)">
                    <nuxt-link :to="menu.link">{{menu.title}}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
            <div v-show="isActive" class="mobile-list is-hidden-tablet" @touchmove.prevent>
              <ul>
                <li v-for="(menu, key) in menus" :key="key" class="has-text-centered">
                  <nuxt-link class="nav-item" :class="menu.class" :to="menu.link" >
                    {{menu.title}}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>  
      <section-header v-if="typeof (secheader) != 'undefined'" :secheader="secheader"></section-header> 
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

      @media (max-width: 769px) {
        top: 61px;
      }

      ul li a {
        margin: 20px 32px;
        display: inline-block;
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
      products: [
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="42" height="49"><g fill="none" fill-rule="evenodd" stroke="#211613" stroke-linecap="round" stroke-linejoin="round"><path d="M41.137 40.15c0 .934-.76 1.692-1.695 1.692H2.383c-.93 0-1.684-.758-1.684-1.692V3.093c0-.939.754-1.693 1.684-1.693h37.06c.933 0 1.694.754 1.694 1.693V40.15zm-20.221 1.693v6.2m-20.217 0h40.438"/><path d="M35.14 21.622c0 7.859-6.366 14.222-14.229 14.222-7.854 0-14.217-6.363-14.217-14.222 0-7.854 6.363-14.222 14.217-14.222 7.863 0 14.23 6.368 14.23 14.222z"/><path d="M30 21.622c0 5.018-4.062 9.089-9.084 9.089-5.02 0-9.084-4.071-9.084-9.09 0-5.012 4.064-9.083 9.084-9.083A9.083 9.083 0 0 1 30 21.622z"/></g></svg>',
          title: `${this.$t('智能网关')}`
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="50"><path fill="none" stroke="#211613" stroke-linecap="round" stroke-linejoin="round" stroke-width=".882" d="M12 1.7C5.842 1.7.85 6.692.85 12.85S5.842 24 12 24h11.12V12.84A11.13 11.13 0 0 0 12 1.7m35.76 11.14a11.12 11.12 0 1 0-22.23 0V24h11.12c6.143-.011 11.116-4.997 11.11-11.14M.87 37.56a11.12 11.12 0 1 0 22.23 0V26.42H12A11.13 11.13 0 0 0 .88 37.56m35.8-11.14H25.6v11.14c.033 6.111 5.008 11.042 11.12 11.02 6.111-.022 11.05-4.988 11.04-11.1-.011-6.111-4.969-11.06-11.08-11.06"/></svg>',
          title: `${this.$t('智能开关')}`
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="49"><path fill="none" stroke="#040000" stroke-linecap="round" stroke-linejoin="round" d="M8.535 39.629a1.168 1.168 0 0 1-1.133-.88L2.493 19.605l-.076-.183c-.07-.168-.115-.274-.153-.377a13.228 13.228 0 0 1-.856-4.701c0-7.324 5.958-13.282 13.282-13.282S27.972 7.02 27.972 14.344c0 1.769-.355 3.506-1.056 5.163L21.81 38.759c-.136.512-.6.87-1.132.87H8.535zM2.48 19.605H26.9M9.754 43.829h9.872m-8.264 4.553h6.655"/></svg>',
          title: `${this.$t('智能照明')}`
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><g fill="none" fill-rule="evenodd" stroke="#221714"><path d="M48.618 35.773c0 7.151-5.797 12.948-12.948 12.948H13.567C6.415 48.721.618 42.925.618 35.775V13.67C.618 6.52 6.415.723 13.568.723H35.67c7.151 0 12.948 5.798 12.948 12.948v22.103z"/><path d="M43.036 24.722c0 10.172-8.246 18.418-18.418 18.418C14.446 43.14 6.2 34.894 6.2 24.722c0-10.172 8.246-18.418 18.418-18.418 10.172 0 18.418 8.246 18.418 18.418z"/></g></svg>',
          title: `${this.$t('智能传感器')}`
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="41" height="50"><g fill="none" fill-rule="evenodd" stroke="#221714"><path d="M8.228 1.723c3.074-1.334 19.341-1.334 24.833 0 3.116.559 5.011 3.472 5.729 7.236 1.605 3.91 1.777 25.945 0 31.36-1.208 3.727-2.958 6.29-5.729 7.238-3.167 1.72-21.243 1.377-24.833 0-2.779-.173-4.87-3.818-5.73-7.238-1.956-5.243-.922-28.483 0-31.36.541-3.578 3.657-7.107 5.73-7.236z"/><path d="M20.645 25.834a7.226 7.226 0 1 1 0 14.452 7.226 7.226 0 0 1 0-14.452z"/></g></svg>',
          title: `${this.$t('智能辅助类')}`
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="50"><path fill="none" stroke="#221714" d="M24.362.93C11.2.93.572 11.667.572 24.72c0 11.794 8.683 21.666 20.059 23.47v-4.695c0-1.678-1.027-3.17-2.586-3.834-5.83-2.473-9.907-8.262-9.907-14.942 0-8.903 7.247-16.218 16.224-16.218 8.976 0 16.224 7.316 16.224 16.218 0 10.492-8.11 20.414-19.91 23.477 1.202.187 2.427.318 3.68.318 13.162 0 23.794-10.736 23.794-23.795C48.15 11.66 37.524.93 24.362.93z"/></svg>',
          title: `${this.$t('第三方兼容产品')}`
        }
      ],
      support: [
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="50"><path fill="none" stroke="#211613" stroke-linecap="round" stroke-linejoin="round" stroke-width=".882" d="M12 1.7C5.842 1.7.85 6.692.85 12.85S5.842 24 12 24h11.12V12.84A11.13 11.13 0 0 0 12 1.7m35.76 11.14a11.12 11.12 0 1 0-22.23 0V24h11.12c6.143-.011 11.116-4.997 11.11-11.14M.87 37.56a11.12 11.12 0 1 0 22.23 0V26.42H12A11.13 11.13 0 0 0 .88 37.56m35.8-11.14H25.6v11.14c.033 6.111 5.008 11.042 11.12 11.02 6.111-.022 11.05-4.988 11.04-11.1-.011-6.111-4.969-11.06-11.08-11.06"/></svg>',
          title: `${this.$t('服务体系')}`,
          link: 'service',
          class: 'is-offset-2',
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="50"><g fill="none" fill-rule="evenodd" stroke="#221714" stroke-linecap="round" stroke-linejoin="round" transform="translate(0 1)"><rect width="27.52" height="48" x=".82" y=".2" rx="2.88"/><path d="M17 43.1a2.42 2.42 0 1 1-4.84 0 2.42 2.42 0 0 1 4.84 0zM5.17 5.68H24v32.09H5.17z"/></g></svg>',
          title: `${this.$t('APP下载')}`,
          link: 'download'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="40"><g fill="none" fill-rule="evenodd" stroke="#231815" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.154"><path d="M5.72 10.24l3.2-8.34m5.48 8.34l3.2-8.55m5.48 8.55l3.21-8.54m5.47 8.54l3.21-8.54m5.47 8.54l3.21-8.54m-32.02-.37h35.12a1.56 1.56 0 0 1 1.37 1.73v34.3a1.55 1.55 0 0 1-1.37 1.71H2.6a1.56 1.56 0 0 1-1.35-1.71v-36l10.38-.03z"/><path d="M20.45 30.68V17.89l8.47 6.39zM1.25 10.71h46.87"/></g></svg>',
          title: `${this.$t('视频中心')}`,
          link: 'videos'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="49"><g fill="none" fill-rule="evenodd" transform="translate(1)"><ellipse cx="23.51" cy="24.2" stroke="#221714" stroke-linecap="round" stroke-linejoin="round" stroke-width=".979" rx="23.5" ry="23.49"/><path fill="#221714" fill-rule="nonzero" d="M28.12 14.92a5.49 5.49 0 0 1 1.63 4.19 5.7 5.7 0 0 1-1.12 3.42c-.36.43-1.15 1.19-2.39 2.34a6.26 6.26 0 0 0-1.55 1.73 4.34 4.34 0 0 0-.64 2.33v.88H22.2v-.88a5.32 5.32 0 0 1 .55-2.43 10.89 10.89 0 0 1 2.79-3.3 16.77 16.77 0 0 0 1.42-1.46 4.22 4.22 0 0 0 .94-2.57 4.3 4.3 0 0 0-1.12-3.1 4.54 4.54 0 0 0-3.33-1.15 4.27 4.27 0 0 0-3.65 1.61 6.3 6.3 0 0 0-1.12 3.79h-1.82a7.52 7.52 0 0 1 1.7-5 6.14 6.14 0 0 1 5-2.06 6.29 6.29 0 0 1 4.56 1.66zm-3.89 17.83c.31.276.478.676.46 1.09a1.45 1.45 0 0 1-.46 1.09 1.54 1.54 0 0 1-1.09.43 1.63 1.63 0 0 1-1.55-1.52 1.34 1.34 0 0 1 .49-1.09 1.36 1.36 0 0 1 1.06-.42 1.45 1.45 0 0 1 1.09.42z"/></g></svg>',
          title: `${this.$t('常见问题')}`,
          link: 'faq'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="38" height="49"><g fill="none" fill-rule="evenodd" stroke="#221714" stroke-linecap="round" stroke-linejoin="round" stroke-width=".979"><path d="M4.66.7a3.47 3.47 0 0 0-3.37 3.72V44c0 1.69 1.35 3.72 3.37 3.72h28.73A3.47 3.47 0 0 0 36.77 44V12.87L23.25.7H4.66z"/><path d="M34.3 14H22.48V3.51s11.15 9.81 11.82 10.48M6.46 19.47h24.95m-24.95 7.9h24.95m-24.95 7.9h24.95"/></g></svg>',
          title: `${this.$t('使用手册')}`,
          link: 'guide'
        }
      ],
      about: [
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="42" height="49"><g fill="none" fill-rule="evenodd" stroke="#040000" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"><rect width="39.78" height="47" x=".04" y=".12" rx="2.46"/><path d="M13.57 13.4H31.7M13.57 23.62H31.7M13.57 33.85H31.7M10.03 13.4H8.05m1.98 10.23H8.05m1.98 10.22H8.05"/></g></svg>',
          title: `${this.$t('公司简介')}`,
          link: 'service',
          class: 'is-offset-4',
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="49"><g fill="none" fill-rule="evenodd"><path stroke="#040000" stroke-linecap="round" stroke-linejoin="round" d="M12.08 4.19a23.54 23.54 0 0 0-7.51 6.77c.39-.55.8-1.07 1.24-1.58a23.77 23.77 0 0 1 6.27-5.19z"/><path stroke="#040000" stroke-linecap="round" stroke-linejoin="round" d="M14 14.17c.15-.56.31-1.11.48-1.66A40 40 0 0 1 20.02 1.4c-.69.11-1.36.25-2 .41h-.11c-.64.16-1.26.35-1.88.56l-.18.06c-.61.22-1.2.45-1.78.71l-.18.08c-.59.27-1.16.56-1.72.88l-.11.06a23.77 23.77 0 0 0-6.27 5.19c-.44.51-.85 1-1.24 1.58a23.64 23.64 0 0 0-1.9 3.18l11.35.06z"/><path stroke="#040000" stroke-linecap="round" stroke-linejoin="round" d="M4.55 11a22.14 22.14 0 0 0-1.91 3.18A23.64 23.64 0 0 1 4.55 11zm-.03 27.21zm7.67-34.08zm29.37 5.25zM14 14.17H34.45c-.17-.65-.35-1.29-.56-1.92a40.15 40.15 0 0 0-5.26-10.59 23.47 23.47 0 0 0-8.62-.26 40 40 0 0 0-5.54 11.11c-.12.55-.28 1.1-.47 1.66zM16.05 2.4zM18 1.81c.66-.16 1.33-.3 2-.41-.63.11-1.3.25-2 .41zm-3.91 1.36z"/><path stroke="#040000" stroke-linecap="round" stroke-linejoin="round" d="M34.49 14.17h10.22a23.58 23.58 0 0 0-1.89-3.18c-.39-.55-.8-1.07-1.23-1.58a23.6 23.6 0 0 0-4.16-3.83 24.52 24.52 0 0 0-3.23-2c-.56-.27-1.13-.53-1.71-.76h-.09a23.82 23.82 0 0 0-3.66-1.11A40.15 40.15 0 0 1 34 12.3c.14.58.32 1.22.49 1.87zM13.9 46c-.58-.27-1.15-.55-1.7-.87.55.31 1.12.59 1.7.87zm20.21-.32c-.55.28-1.12.53-1.7.76.59-.23 1.15-.44 1.7-.76zm-.18-8.74c.2-.61.38-1.23.55-1.86H14.06c.14.54.29 1.07.46 1.6a39.93 39.93 0 0 0 5.59 11.17 23.7 23.7 0 0 0 3.56.27 23.42 23.42 0 0 0 8.61-1.63 22.88 22.88 0 0 1-3.67 1.11 40 40 0 0 0 5.32-10.66zm3.44 6.78z"/><path stroke="#040000" stroke-linecap="round" stroke-linejoin="round" d="M14.52 36.68c-.17-.53-.32-1.06-.46-1.6H2.65c.25.49.5 1 .77 1.45.33.573.69 1.127 1.08 1.66v.05a23.488 23.488 0 0 0 5.82 5.73c.54.38 1.11.73 1.68 1.06l.14.07c.55.32 1.12.6 1.7.87l.21.1c.58.25 1.16.49 1.76.7l.23.08c.6.2 1.21.39 1.84.54h.18c.65.16 1.31.29 2 .39a39.93 39.93 0 0 1-5.54-11.1zm24.37 5.85c-.47.4-1 .79-1.47 1.16.51-.37 1-.76 1.47-1.16z"/><path stroke="#040000" stroke-linecap="round" stroke-linejoin="round" d="M43.93 36.55c.28-.47.53-1 .77-1.45H34.47a40 40 0 0 1-5.86 12.52 22.88 22.88 0 0 0 3.67-1.11h.12c.58-.23 1.15-.48 1.7-.76a23 23 0 0 0 3.24-2h.05c.51-.37 1-.76 1.47-1.16a23.48 23.48 0 0 0 2.68-2.69c.43-.5.84-1 1.23-1.57v-.05c.46-.6.82-1.16 1.16-1.73zM17.94 47.41zM2.64 35.08c.24.49.5 1 .78 1.45-.27-.47-.52-1-.77-1.45h-.01zm42.09-20.91a24.13 24.13 0 0 0-1.91-3.18 23.58 23.58 0 0 1 1.89 3.18h.02zM15.87 46.79zm-3.81-1.74zm-6.29-5.22c-.43-.5-.83-1-1.22-1.57a23.64 23.64 0 0 0 1.22 1.57z"/><path stroke="#040000" stroke-linecap="round" stroke-linejoin="round" d="M38.91 42.52a23.62 23.62 0 0 0 3.91-4.26c-.39.54-.8 1.07-1.23 1.57a23.48 23.48 0 0 1-2.68 2.69zm2.65-33.14c.43.51.84 1 1.23 1.58-.39-.55-.79-1.07-1.23-1.58zm-7.43-5.81zm9.81 32.96c.28-.47.54-1 .79-1.45-.26.49-.51.98-.79 1.45zm-.01.02zM32.42 2.81c.58.23 1.15.49 1.71.76-.56-.27-1.13-.57-1.71-.76zm-3.75-1.15zm16.06 12.51h-.02m0 20.91h.02"/><path fill="#000" fill-rule="nonzero" d="M1.49 18.46l7.59 10.88h.06V18.46h1.09V31H9L1.37 20h-.05v11H.25V18.46zM21.16 18.46v.95h-7.74V24h7.31v1h-7.31v5.06h8V31h-9.1V18.46zM23.07 18.46l3 11.11h.06l3.07-11.11h1.25l3.08 11.11 3-11.11h1.22L34.19 31h-1.26l-3.08-11-3.08 11h-1.26L21.9 18.45zM46.09 19.21a4.05 4.05 0 0 1 1.41 3h-1.08a3.47 3.47 0 0 0-1.1-2.24 3.81 3.81 0 0 0-2.54-.75 4.53 4.53 0 0 0-2.39.53 1.9 1.9 0 0 0-1 1.77 1.87 1.87 0 0 0 1.18 1.67c.79.328 1.602.599 2.43.81a14.09 14.09 0 0 1 3.23 1.2 2.89 2.89 0 0 1 1.56 2.63 3 3 0 0 1-1.35 2.57 5.88 5.88 0 0 1-3.43.89 5.4 5.4 0 0 1-3.41-1 4.55 4.55 0 0 1-1.58-3.41h1.06a3.72 3.72 0 0 0 1.23 2.64 4.18 4.18 0 0 0 2.69.77 5.12 5.12 0 0 0 2.69-.65 2.07 2.07 0 0 0 1-1.78 2.21 2.21 0 0 0-1.28-2 13.19 13.19 0 0 0-2.76-1 15.19 15.19 0 0 1-2.88-1 2.55 2.55 0 0 1-1.44-2.35 2.78 2.78 0 0 1 1.35-2.5 5.55 5.55 0 0 1 3.13-.81 5 5 0 0 1 3.28 1.01z"/></g></svg>',
          title: `${this.$t('公司动态')}`,
          link: 'download'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="67" height="41"><g fill="none" fill-rule="evenodd" stroke="#040000" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"><ellipse cx="32.49" cy="10.19" rx="10.09" ry="10.07"/><path d="M13.59 39.12c.236-10.266 8.626-18.465 18.895-18.465S51.144 28.854 51.38 39.12M24.57 16.79A8.64 8.64 0 1 1 22.4 8.2m20 .18a8.63 8.63 0 1 1-2 8.41"/><path d="M55.21 39.12h9.69a16.22 16.22 0 0 0-21.4-15.33M9.77 39.12H.07a16.21 16.21 0 0 1 21-15.45"/></g></svg>',
          title: `${this.$t('加入我们')}`,
          link: 'videos'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="48"><g fill="none" fill-rule="evenodd" stroke="#040000" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21.59a38.17 38.17 0 0 0 35.83 25c1 0 1.94 0 2.9-.12a5.82 5.82 0 0 0 4.63-5.69v-5.46a5.58 5.58 0 0 0-5.57-5.57H29.88a5.56 5.56 0 0 0-5.42 4.34A29.52 29.52 0 0 1 13 22.64a5.57 5.57 0 0 0 4.58-5.47V6.27A5.56 5.56 0 0 0 12.01.71H6.42a5.78 5.78 0 0 0-4.26 1.88A5.49 5.49 0 0 0 .75 6.27v5.34A38 38 0 0 0 3 21.59z"/><path stroke-width=".953" d="M29.34.67c9.916.615 17.824 8.515 18.45 18.43m-5.86 1.47a13.83 13.83 0 0 0-14.06-14m-1.48 5.88A8.09 8.09 0 0 1 36 22.06"/></g></svg>',
          title: `${this.$t('联系我们')}`,
          link: 'faq'
        }
      ]
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
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="42" height="49"><g fill="none" fill-rule="evenodd" stroke="#211613" stroke-linecap="round" stroke-linejoin="round"><path d="M41.137 40.15c0 .934-.76 1.692-1.695 1.692H2.383c-.93 0-1.684-.758-1.684-1.692V3.093c0-.939.754-1.693 1.684-1.693h37.06c.933 0 1.694.754 1.694 1.693V40.15zm-20.221 1.693v6.2m-20.217 0h40.438"/><path d="M35.14 21.622c0 7.859-6.366 14.222-14.229 14.222-7.854 0-14.217-6.363-14.217-14.222 0-7.854 6.363-14.222 14.217-14.222 7.863 0 14.23 6.368 14.23 14.222z"/><path d="M30 21.622c0 5.018-4.062 9.089-9.084 9.089-5.02 0-9.084-4.071-9.084-9.09 0-5.012 4.064-9.083 9.084-9.083A9.083 9.083 0 0 1 30 21.622z"/></g></svg>',
              title: `${this.$t('智能网关')}`
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="50"><path fill="none" stroke="#211613" stroke-linecap="round" stroke-linejoin="round" stroke-width=".882" d="M12 1.7C5.842 1.7.85 6.692.85 12.85S5.842 24 12 24h11.12V12.84A11.13 11.13 0 0 0 12 1.7m35.76 11.14a11.12 11.12 0 1 0-22.23 0V24h11.12c6.143-.011 11.116-4.997 11.11-11.14M.87 37.56a11.12 11.12 0 1 0 22.23 0V26.42H12A11.13 11.13 0 0 0 .88 37.56m35.8-11.14H25.6v11.14c.033 6.111 5.008 11.042 11.12 11.02 6.111-.022 11.05-4.988 11.04-11.1-.011-6.111-4.969-11.06-11.08-11.06"/></svg>',
              title: `${this.$t('智能开关')}`
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="49"><path fill="none" stroke="#040000" stroke-linecap="round" stroke-linejoin="round" d="M8.535 39.629a1.168 1.168 0 0 1-1.133-.88L2.493 19.605l-.076-.183c-.07-.168-.115-.274-.153-.377a13.228 13.228 0 0 1-.856-4.701c0-7.324 5.958-13.282 13.282-13.282S27.972 7.02 27.972 14.344c0 1.769-.355 3.506-1.056 5.163L21.81 38.759c-.136.512-.6.87-1.132.87H8.535zM2.48 19.605H26.9M9.754 43.829h9.872m-8.264 4.553h6.655"/></svg>',
              title: `${this.$t('智能照明')}`
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><g fill="none" fill-rule="evenodd" stroke="#221714"><path d="M48.618 35.773c0 7.151-5.797 12.948-12.948 12.948H13.567C6.415 48.721.618 42.925.618 35.775V13.67C.618 6.52 6.415.723 13.568.723H35.67c7.151 0 12.948 5.798 12.948 12.948v22.103z"/><path d="M43.036 24.722c0 10.172-8.246 18.418-18.418 18.418C14.446 43.14 6.2 34.894 6.2 24.722c0-10.172 8.246-18.418 18.418-18.418 10.172 0 18.418 8.246 18.418 18.418z"/></g></svg>',
              title: `${this.$t('智能传感器')}`
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="41" height="50"><g fill="none" fill-rule="evenodd" stroke="#221714"><path d="M8.228 1.723c3.074-1.334 19.341-1.334 24.833 0 3.116.559 5.011 3.472 5.729 7.236 1.605 3.91 1.777 25.945 0 31.36-1.208 3.727-2.958 6.29-5.729 7.238-3.167 1.72-21.243 1.377-24.833 0-2.779-.173-4.87-3.818-5.73-7.238-1.956-5.243-.922-28.483 0-31.36.541-3.578 3.657-7.107 5.73-7.236z"/><path d="M20.645 25.834a7.226 7.226 0 1 1 0 14.452 7.226 7.226 0 0 1 0-14.452z"/></g></svg>',
              title: `${this.$t('智能辅助类')}`
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="50"><path fill="none" stroke="#221714" d="M24.362.93C11.2.93.572 11.667.572 24.72c0 11.794 8.683 21.666 20.059 23.47v-4.695c0-1.678-1.027-3.17-2.586-3.834-5.83-2.473-9.907-8.262-9.907-14.942 0-8.903 7.247-16.218 16.224-16.218 8.976 0 16.224 7.316 16.224 16.218 0 10.492-8.11 20.414-19.91 23.477 1.202.187 2.427.318 3.68.318 13.162 0 23.794-10.736 23.794-23.795C48.15 11.66 37.524.93 24.362.93z"/></svg>',
              title: `${this.$t('第三方兼容产品')}`
            }
          ]
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
          title: this.$t('商务合作'),
          link: `${this.baseUrl}/business`
        },
        {
          title: this.$t('技术支持'),
          link: `${this.baseUrl}/support`,
          submenus: [
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="50"><path fill="none" stroke="#211613" stroke-linecap="round" stroke-linejoin="round" stroke-width=".882" d="M12 1.7C5.842 1.7.85 6.692.85 12.85S5.842 24 12 24h11.12V12.84A11.13 11.13 0 0 0 12 1.7m35.76 11.14a11.12 11.12 0 1 0-22.23 0V24h11.12c6.143-.011 11.116-4.997 11.11-11.14M.87 37.56a11.12 11.12 0 1 0 22.23 0V26.42H12A11.13 11.13 0 0 0 .88 37.56m35.8-11.14H25.6v11.14c.033 6.111 5.008 11.042 11.12 11.02 6.111-.022 11.05-4.988 11.04-11.1-.011-6.111-4.969-11.06-11.08-11.06"/></svg>',
              title: `${this.$t('服务体系')}`,
              link: 'service',
              class: 'is-offset-2',
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="50"><g fill="none" fill-rule="evenodd" stroke="#221714" stroke-linecap="round" stroke-linejoin="round" transform="translate(0 1)"><rect width="27.52" height="48" x=".82" y=".2" rx="2.88"/><path d="M17 43.1a2.42 2.42 0 1 1-4.84 0 2.42 2.42 0 0 1 4.84 0zM5.17 5.68H24v32.09H5.17z"/></g></svg>',
              title: `${this.$t('APP下载')}`,
              link: 'download'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="40"><g fill="none" fill-rule="evenodd" stroke="#231815" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.154"><path d="M5.72 10.24l3.2-8.34m5.48 8.34l3.2-8.55m5.48 8.55l3.21-8.54m5.47 8.54l3.21-8.54m5.47 8.54l3.21-8.54m-32.02-.37h35.12a1.56 1.56 0 0 1 1.37 1.73v34.3a1.55 1.55 0 0 1-1.37 1.71H2.6a1.56 1.56 0 0 1-1.35-1.71v-36l10.38-.03z"/><path d="M20.45 30.68V17.89l8.47 6.39zM1.25 10.71h46.87"/></g></svg>',
              title: `${this.$t('视频中心')}`,
              link: 'videos'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="49"><g fill="none" fill-rule="evenodd" transform="translate(1)"><ellipse cx="23.51" cy="24.2" stroke="#221714" stroke-linecap="round" stroke-linejoin="round" stroke-width=".979" rx="23.5" ry="23.49"/><path fill="#221714" fill-rule="nonzero" d="M28.12 14.92a5.49 5.49 0 0 1 1.63 4.19 5.7 5.7 0 0 1-1.12 3.42c-.36.43-1.15 1.19-2.39 2.34a6.26 6.26 0 0 0-1.55 1.73 4.34 4.34 0 0 0-.64 2.33v.88H22.2v-.88a5.32 5.32 0 0 1 .55-2.43 10.89 10.89 0 0 1 2.79-3.3 16.77 16.77 0 0 0 1.42-1.46 4.22 4.22 0 0 0 .94-2.57 4.3 4.3 0 0 0-1.12-3.1 4.54 4.54 0 0 0-3.33-1.15 4.27 4.27 0 0 0-3.65 1.61 6.3 6.3 0 0 0-1.12 3.79h-1.82a7.52 7.52 0 0 1 1.7-5 6.14 6.14 0 0 1 5-2.06 6.29 6.29 0 0 1 4.56 1.66zm-3.89 17.83c.31.276.478.676.46 1.09a1.45 1.45 0 0 1-.46 1.09 1.54 1.54 0 0 1-1.09.43 1.63 1.63 0 0 1-1.55-1.52 1.34 1.34 0 0 1 .49-1.09 1.36 1.36 0 0 1 1.06-.42 1.45 1.45 0 0 1 1.09.42z"/></g></svg>',
              title: `${this.$t('常见问题')}`,
              link: 'faq'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="38" height="49"><g fill="none" fill-rule="evenodd" stroke="#221714" stroke-linecap="round" stroke-linejoin="round" stroke-width=".979"><path d="M4.66.7a3.47 3.47 0 0 0-3.37 3.72V44c0 1.69 1.35 3.72 3.37 3.72h28.73A3.47 3.47 0 0 0 36.77 44V12.87L23.25.7H4.66z"/><path d="M34.3 14H22.48V3.51s11.15 9.81 11.82 10.48M6.46 19.47h24.95m-24.95 7.9h24.95m-24.95 7.9h24.95"/></g></svg>',
              title: `${this.$t('使用手册')}`,
              link: 'guide'
            }
          ]
        },
        {
          title: this.$t('关于我们'),
          link: `${this.baseUrl}/about`,
          submenus: [
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="42" height="49"><g fill="none" fill-rule="evenodd" stroke="#040000" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"><rect width="39.78" height="47" x=".04" y=".12" rx="2.46"/><path d="M13.57 13.4H31.7M13.57 23.62H31.7M13.57 33.85H31.7M10.03 13.4H8.05m1.98 10.23H8.05m1.98 10.22H8.05"/></g></svg>',
              title: `${this.$t('公司简介')}`,
              link: 'about',
              class: 'is-offset-4',
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="49"><g fill="none" fill-rule="evenodd"><path stroke="#040000" stroke-linecap="round" stroke-linejoin="round" d="M12.08 4.19a23.54 23.54 0 0 0-7.51 6.77c.39-.55.8-1.07 1.24-1.58a23.77 23.77 0 0 1 6.27-5.19z"/><path stroke="#040000" stroke-linecap="round" stroke-linejoin="round" d="M14 14.17c.15-.56.31-1.11.48-1.66A40 40 0 0 1 20.02 1.4c-.69.11-1.36.25-2 .41h-.11c-.64.16-1.26.35-1.88.56l-.18.06c-.61.22-1.2.45-1.78.71l-.18.08c-.59.27-1.16.56-1.72.88l-.11.06a23.77 23.77 0 0 0-6.27 5.19c-.44.51-.85 1-1.24 1.58a23.64 23.64 0 0 0-1.9 3.18l11.35.06z"/><path stroke="#040000" stroke-linecap="round" stroke-linejoin="round" d="M4.55 11a22.14 22.14 0 0 0-1.91 3.18A23.64 23.64 0 0 1 4.55 11zm-.03 27.21zm7.67-34.08zm29.37 5.25zM14 14.17H34.45c-.17-.65-.35-1.29-.56-1.92a40.15 40.15 0 0 0-5.26-10.59 23.47 23.47 0 0 0-8.62-.26 40 40 0 0 0-5.54 11.11c-.12.55-.28 1.1-.47 1.66zM16.05 2.4zM18 1.81c.66-.16 1.33-.3 2-.41-.63.11-1.3.25-2 .41zm-3.91 1.36z"/><path stroke="#040000" stroke-linecap="round" stroke-linejoin="round" d="M34.49 14.17h10.22a23.58 23.58 0 0 0-1.89-3.18c-.39-.55-.8-1.07-1.23-1.58a23.6 23.6 0 0 0-4.16-3.83 24.52 24.52 0 0 0-3.23-2c-.56-.27-1.13-.53-1.71-.76h-.09a23.82 23.82 0 0 0-3.66-1.11A40.15 40.15 0 0 1 34 12.3c.14.58.32 1.22.49 1.87zM13.9 46c-.58-.27-1.15-.55-1.7-.87.55.31 1.12.59 1.7.87zm20.21-.32c-.55.28-1.12.53-1.7.76.59-.23 1.15-.44 1.7-.76zm-.18-8.74c.2-.61.38-1.23.55-1.86H14.06c.14.54.29 1.07.46 1.6a39.93 39.93 0 0 0 5.59 11.17 23.7 23.7 0 0 0 3.56.27 23.42 23.42 0 0 0 8.61-1.63 22.88 22.88 0 0 1-3.67 1.11 40 40 0 0 0 5.32-10.66zm3.44 6.78z"/><path stroke="#040000" stroke-linecap="round" stroke-linejoin="round" d="M14.52 36.68c-.17-.53-.32-1.06-.46-1.6H2.65c.25.49.5 1 .77 1.45.33.573.69 1.127 1.08 1.66v.05a23.488 23.488 0 0 0 5.82 5.73c.54.38 1.11.73 1.68 1.06l.14.07c.55.32 1.12.6 1.7.87l.21.1c.58.25 1.16.49 1.76.7l.23.08c.6.2 1.21.39 1.84.54h.18c.65.16 1.31.29 2 .39a39.93 39.93 0 0 1-5.54-11.1zm24.37 5.85c-.47.4-1 .79-1.47 1.16.51-.37 1-.76 1.47-1.16z"/><path stroke="#040000" stroke-linecap="round" stroke-linejoin="round" d="M43.93 36.55c.28-.47.53-1 .77-1.45H34.47a40 40 0 0 1-5.86 12.52 22.88 22.88 0 0 0 3.67-1.11h.12c.58-.23 1.15-.48 1.7-.76a23 23 0 0 0 3.24-2h.05c.51-.37 1-.76 1.47-1.16a23.48 23.48 0 0 0 2.68-2.69c.43-.5.84-1 1.23-1.57v-.05c.46-.6.82-1.16 1.16-1.73zM17.94 47.41zM2.64 35.08c.24.49.5 1 .78 1.45-.27-.47-.52-1-.77-1.45h-.01zm42.09-20.91a24.13 24.13 0 0 0-1.91-3.18 23.58 23.58 0 0 1 1.89 3.18h.02zM15.87 46.79zm-3.81-1.74zm-6.29-5.22c-.43-.5-.83-1-1.22-1.57a23.64 23.64 0 0 0 1.22 1.57z"/><path stroke="#040000" stroke-linecap="round" stroke-linejoin="round" d="M38.91 42.52a23.62 23.62 0 0 0 3.91-4.26c-.39.54-.8 1.07-1.23 1.57a23.48 23.48 0 0 1-2.68 2.69zm2.65-33.14c.43.51.84 1 1.23 1.58-.39-.55-.79-1.07-1.23-1.58zm-7.43-5.81zm9.81 32.96c.28-.47.54-1 .79-1.45-.26.49-.51.98-.79 1.45zm-.01.02zM32.42 2.81c.58.23 1.15.49 1.71.76-.56-.27-1.13-.57-1.71-.76zm-3.75-1.15zm16.06 12.51h-.02m0 20.91h.02"/><path fill="#000" fill-rule="nonzero" d="M1.49 18.46l7.59 10.88h.06V18.46h1.09V31H9L1.37 20h-.05v11H.25V18.46zM21.16 18.46v.95h-7.74V24h7.31v1h-7.31v5.06h8V31h-9.1V18.46zM23.07 18.46l3 11.11h.06l3.07-11.11h1.25l3.08 11.11 3-11.11h1.22L34.19 31h-1.26l-3.08-11-3.08 11h-1.26L21.9 18.45zM46.09 19.21a4.05 4.05 0 0 1 1.41 3h-1.08a3.47 3.47 0 0 0-1.1-2.24 3.81 3.81 0 0 0-2.54-.75 4.53 4.53 0 0 0-2.39.53 1.9 1.9 0 0 0-1 1.77 1.87 1.87 0 0 0 1.18 1.67c.79.328 1.602.599 2.43.81a14.09 14.09 0 0 1 3.23 1.2 2.89 2.89 0 0 1 1.56 2.63 3 3 0 0 1-1.35 2.57 5.88 5.88 0 0 1-3.43.89 5.4 5.4 0 0 1-3.41-1 4.55 4.55 0 0 1-1.58-3.41h1.06a3.72 3.72 0 0 0 1.23 2.64 4.18 4.18 0 0 0 2.69.77 5.12 5.12 0 0 0 2.69-.65 2.07 2.07 0 0 0 1-1.78 2.21 2.21 0 0 0-1.28-2 13.19 13.19 0 0 0-2.76-1 15.19 15.19 0 0 1-2.88-1 2.55 2.55 0 0 1-1.44-2.35 2.78 2.78 0 0 1 1.35-2.5 5.55 5.55 0 0 1 3.13-.81 5 5 0 0 1 3.28 1.01z"/></g></svg>',
              title: `${this.$t('公司动态')}`,
              link: 'news'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="67" height="41"><g fill="none" fill-rule="evenodd" stroke="#040000" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"><ellipse cx="32.49" cy="10.19" rx="10.09" ry="10.07"/><path d="M13.59 39.12c.236-10.266 8.626-18.465 18.895-18.465S51.144 28.854 51.38 39.12M24.57 16.79A8.64 8.64 0 1 1 22.4 8.2m20 .18a8.63 8.63 0 1 1-2 8.41"/><path d="M55.21 39.12h9.69a16.22 16.22 0 0 0-21.4-15.33M9.77 39.12H.07a16.21 16.21 0 0 1 21-15.45"/></g></svg>',
              title: `${this.$t('加入我们')}`,
              link: 'join'
            },
            {
              icon: '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="48"><g fill="none" fill-rule="evenodd" stroke="#040000" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21.59a38.17 38.17 0 0 0 35.83 25c1 0 1.94 0 2.9-.12a5.82 5.82 0 0 0 4.63-5.69v-5.46a5.58 5.58 0 0 0-5.57-5.57H29.88a5.56 5.56 0 0 0-5.42 4.34A29.52 29.52 0 0 1 13 22.64a5.57 5.57 0 0 0 4.58-5.47V6.27A5.56 5.56 0 0 0 12.01.71H6.42a5.78 5.78 0 0 0-4.26 1.88A5.49 5.49 0 0 0 .75 6.27v5.34A38 38 0 0 0 3 21.59z"/><path stroke-width=".953" d="M29.34.67c9.916.615 17.824 8.515 18.45 18.43m-5.86 1.47a13.83 13.83 0 0 0-14.06-14m-1.48 5.88A8.09 8.09 0 0 1 36 22.06"/></g></svg>',
              title: `${this.$t('联系我们')}`,
              link: 'contact'
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
      this.$store.commit('SHOW_HEADER',this.show)
    }
  }
}
</script>