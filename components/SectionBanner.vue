<template>
  <main class="main">
    <section class="hero sectionbanner" :style="{height:banner.height}">
        <div class="hero-body center" :class="{'parallax':banner.parallax}" :style="{backgroundImage: `url(${$store.state.cdn + banner.backgroundimg})`}">
          <div class="container-fluid has-text-centered">
            <div v-html="banner.icon"></div>
            <h2 class="caption has-text-weight-semibold">
              {{banner.title}}
            </h2>
            <p class="subtitle">{{banner.subtitle}}</p>
            <a v-if="banner.buttontxt" class="button">{{banner.buttontxt}}</a>
          </div>
        </div>
      </div>
      
    </section>
  </main>  
</template>
<style lang="stylus" scope>
  .sectionbanner
    color: #fff
    padding-bottom: 24px
    box-sizing: content-box

    .parallax
      background-attachment: fixed
      background-position: center
      background-repeat: no-repeat
      background-size: cover

    .center   
   
      .caption
        font-size: 36px
        line-height: 44px
        margin: 35px 0
      .subtitle
        color: #fff 
        font-size: 28px 
        margin: 49px 0 73px 0 
      .button 
        width: 240px
        height: 57px
        font-size: 18px
        color: #fff
        background: #e76c26
        border: none
</style>
<script>
  export default {
    props: {
      banner: {
        type: Object
      }
    }
  }
</script>