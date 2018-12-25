<template>
  <section class="application" :style="{backgroundImage: `url(${$store.state.cdn}/2018/12/0d9792dafd8981b219a3c1cfd5e1af56.jpg)`}">
    <div class="container has-text-left">
      <h2 class="caption has-text-centered">{{$t('应用场景')}}</h2>
      <div class="columns is-multiline is-gapless">
        <div class="column is-6 security">
          <nuxt-link :to="`${baseUrl}/application/security`">
            <div class="wrap" :style="{backgroundImage: `url(${$store.state.cdn}/2018/12/efc319901fe8d3f0c2b637132350edb2.jpg)`}">
              <h2 class="caption">{{$t('安防模式')}}<svg width="12" height="20" xmlns="http://www.w3.org/2000/svg"><path stroke="#3E3A39" stroke-width="2" d="M1 1l9.47 9L1 19" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"/></svg></h2>
              <p class="subtitle">{{$t('安防策略提前设置 用户一键操作即可')}}</p>
            </div>
          </nuxt-link>  
        </div>
        <div class="column is-6">
          <div class="columns is-multiline is-gapless">
            <div class="column is-12">
              <nuxt-link :to="`${baseUrl}/application/ent`">
                <div class="wrap" :style="{backgroundImage: `url(${$store.state.cdn}/2018/12/dc732f52b4a023c27b617e696ea233fa.jpg)`}">
                  <h2 class="caption has-text-white">{{$t('娱乐模式')}}<svg width="12" height="20" xmlns="http://www.w3.org/2000/svg"><path stroke="#fff" stroke-width="2" d="M1 1l9.47 9L1 19" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"/></svg></h2>
                  <p class="subtitle has-text-white">{{$t('轻松营造各种娱乐氛围')}}</p>
                </div>
              </nuxt-link>
            </div>
            <div class="column is-12">
              <nuxt-link :to="`${baseUrl}/application/health`">
                <div class="wrap" :style="{backgroundImage: `url(${$store.state.cdn}/2018/12/03d53ff1bfe01b7ab7b59928801c3766.jpg)`}">
                  <h2 class="caption has-text-white">{{$t('健康模式')}}<svg width="12" height="20" xmlns="http://www.w3.org/2000/svg"><path stroke="#fff" stroke-width="2" d="M1 1l9.47 9L1 19" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"/></svg></h2>
                  <p class="subtitle has-text-white">{{$t('家居安全护航，家庭健康保障')}}</p>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <nuxt-link :to="`${baseUrl}/application/eco`">
            <div class="wrap" :style="{backgroundImage: `url(${$store.state.cdn}/2018/12/883b4b2f160df141aabcf906b3990eae.jpg)`}">
              <h2 class="caption">{{$t('节能模式')}}<svg width="12" height="20" xmlns="http://www.w3.org/2000/svg"><path stroke="#3E3A39" stroke-width="2" d="M1 1l9.47 9L1 19" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"/></svg></h2>
              <p class="subtitle">{{$t('释放家中遥控器 远程控制 能耗监测')}}</p>
            </div>
          </nuxt-link>
        </div>
        <div class="column is-6">
          <nuxt-link :to="`${baseUrl}/application/scene`">
            <div class="wrap" :style="{backgroundImage: `url(${$store.state.cdn}/2018/12/c0be9cb1ee6245e168db88a1401a2216.jpg)`}">
              <h2 class="caption">{{$t('场景')}}<svg width="12" height="20" xmlns="http://www.w3.org/2000/svg"><path stroke="#3E3A39" stroke-width="2" d="M1 1l9.47 9L1 19" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"/></svg></h2>
              <p class="subtitle">{{$t('DIY 专属你的场景模式!')}}</p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>  
  </section>  
</template>
<style lang="stylus">
.application {
  background-size: cover;
  .container {
    padding: 60px 0 30px;
   
    >h2 {
      margin: 0 0 32px 0;
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
  .is-6,.is-12 {
    margin: 6px 
    .wrap {
      height: 320px;
      margin: 6px;
      background-position: bottom;
      background-size: cover;
    }
    &.security {
      .wrap {
         height: 652px; 
      }
    } 
    a {
      transition: all .2s linear;
      height: 100%;
      display: block;
      &:hover {
        transform: translate3d(0,-3px,0);
      } 
    } 
  }
  .wrap {
    height: 100%; 
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-shadow: 5px 5px 10px rgba(0,0,0,.2);
    .caption {
      font-size: 28px;
      color: #3e3a39;
      svg {
        margin-left: 32px;
      }
    }
  }

  .caption {
    font-size: 36px;
    line-height: 44px;
  }

  .subtitle {
    font-size: 18px;
    line-height: 22px;
    margin: 7px 0 38px;
  }
}
</style>
<script>
export default {
  computed: {
    baseUrl() {
      return this.$store.state.locale == this.$store.state.fallbackLocale
        ? ''
        : `/${this.$store.state.locale}`
    }
  }
}
</script>
