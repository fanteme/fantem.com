<template>
  <header :class="{'isFixed fadeInDown': isFixed}">
    <nav class="container nav">
      <div class="navbar-wrapper navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-wrapper-left navbar-brand">
          <nuxt-link :to="`${this.$store.state.locale}/`">
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
              <li class="is-inline" v-for="menu in menus" :key="menu.id">
                <nuxt-link :to="menu.link">{{menu.title}}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div v-show="isActive" class="mobile-list is-hidden-tablet" @touchmove.prevent>
          <ul>
            <li v-for="(menu, key) in menus" :key="key" class="has-text-centered">
              <nuxt-link class="nav-item" :class="menu.class" :to="menu.link">
                {{menu.title}}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>   
</template>
<style lang="stylus">
.fadeInDown {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: fadeInDown;
}

header {
  position: relative;
  z-index: 2;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  >nav.container {
    padding: 0;
  }

  &.isFixed {
    position: fixed;
    z-index: 9;
    width: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

    &+main {
      padding-top: 6.75rem;
    }
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
export default {
  data() {
    return {
      isActive: false,
      isFixed: false
    }
  },
  computed: {
    menus() {
      return [
        {
          title: this.$t('首页'),
          link: `${this.$store.state.locale}/`
        },
        {
          title: this.$t('产品中心'),
          link: `${this.$store.state.locale}/products`
        },
        {
          title: this.$t('应用场景'),
          link: `${this.$store.state.locale}/application`
        },
        {
          title: this.$t('行业方案'),
          link: `${this.$store.state.locale}/solution`
        },
        {
          title: this.$t('商务合作'),
          link: `${this.$store.state.locale}/business`
        },
        {
          title: this.$t('技术支持'),
          link: `${this.$store.state.locale}/support`
        },
        {
          title: this.$t('关于我们'),
          link: `${this.$store.state.locale}/about`
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
  }
}
</script>