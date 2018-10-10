<template>
  <section class="products">
      <div class="container has-text-centered is-clearfix">
        <p class="title">{{products.title}}</p>
        <div class="is-size-5 character">
          <ul class="center">
            <li  v-for="(item,index) in products['character']" :key="index">{{index==0? '':'|'}}<span>{{item}}</span></li>
          </ul> 
        </div>  
        <div class="columns" v-for="(item,value) in products.list" :key="value">
          <div class="column" v-for="(item,key) in item.item" :key="key">
            <div class="products-wrap">
              <div class="products-bg"><img :src="item.img" alt=""></div>
              <span>{{item.title}}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<style lang="stylus">
  .products
    margin-top: 65px
    background: #edf1f2
    padding: 0 0 75px 0
    
    .container
      overflow: hidden
    .columns 
      .column

        .products-wrap
          position: relative
          background: #fff 
          border: 1px solid #8c8b8b
          height: 360px

        .products-bg
          display: flex
          justify-content: center
          align-items: center
          height: 100%

        img 
          vertical-align: middle

        span 
          position: absolute
          font-size: 16px
          font-weight: 600
          bottom: 24px
          width: 100%
          left: 0  
          color: #3e3a39      
</style>
<script>
export default {
  props: {
    products: {
      type: Object,
      required: true
    }
  }

  }
  </script>
  
  
  