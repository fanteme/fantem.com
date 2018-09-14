<template>
  <section class="application">
    <div class="container-fluid has-text-centered">
      <h2 class="caption">{{$t('应用场景')}}</h2>
      <div class="columns">
        <div class="column" :style="{backgroundImage: `url(${$store.state.cdn}/fantem/application-security-and-protection.jpg)`}">
          <h2 class="caption">{{$t('安防模式')}}</h2>
          <p class="subtittle">{{$t('安防策略提前设置 用户一键操作即可')}}</p>
          <nuxt-link class="more" to="/">{{$t('进一步了解')}}</nuxt-link>
        </div>
      </div>
      <div class="columns">
        <div class="column" :style="{backgroundImage: `url(${$store.state.cdn}/fantem/application-environment.jpg)`}">
          <h2 class="caption has-text-white">{{$t('娱乐模式')}}</h2>
          <p class="subtittle has-text-white">{{$t('轻松营造各种娱乐氛围')}}</p>
          <nuxt-link class="more" to="/">{{$t('进一步了解')}}</nuxt-link>
        </div>
        <div class="column" :style="{backgroundImage: `url(${$store.state.cdn}/fantem/application-energy.jpg)`}">
          <h2 class="caption">{{$t('节能模式')}}</h2>
          <p class="subtittle">{{$t('释放家中遥控器 远程控制 能耗监测')}}</p>
          <nuxt-link class="more" to="/">{{$t('进一步了解')}}</nuxt-link>
        </div>
      </div>
      <div class="columns">
        <div class="column" :style="{backgroundImage: `url(${$store.state.cdn}/fantem/application-health.jpg)`}">
          <h2 class="caption">{{$t('健康模式')}}</h2>
          <p class="subtittle">{{$t('家居安全护航，家庭健康保障')}}</p>
          <nuxt-link class="more" to="/">{{$t('进一步了解')}}</nuxt-link>
        </div>
        <div class="column" :style="{backgroundImage: `url(${$store.state.cdn}/fantem/application-scenes.jpg)`}">
          <h2 class="caption">{{$t('场景')}}</h2>
          <p class="subtittle">{{$t('DIY 专属你的场景模式!')}}</p>
          <nuxt-link class="more" to="/">{{$t('进一步了解')}}</nuxt-link>
      </div>
    </div>  
  </div>  
  </section>  
</template>
<style lang="stylus">
  .application
    .container-fluid
      padding-top: 60px
      >h2 
        margin: 0 0 32px 0
        position: relative
        &:after
          content: ''
          height: 2px
          width: 73px
          color: #ed7422
          position: absolute
          bottom: 20px
    .column
      height: 650px 
      padding-top: 60px
      margin: 5px
      background-position: center
      background-size: cover        
    .caption
      font-size: 36px
      line-height: 44px 
    .subtittle
      font-size: 18px
      line-height: 22px
      margin: 17px 0 12px 
    .more
      color: #ee7623  
</style>