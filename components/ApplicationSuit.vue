<template>
  <section class="suit">
      <div class="container has-text-centered">
        <p class="caption has-text-centered">{{suit.title}}</p>
        <div class="is-size-6">{{suit.subtitle}}</div>
        <div class="is-size-5 character">
          <ul class="center">
            <li  v-for="(item,index) in suit['character']" :key="index">{{index==0? '':'|'}}<span>{{item}}</span></li>
          </ul> 
        </div>
        <div class="columns">
          <div class="column" v-for="(item, key) in suit.item" :key="key">
            <div class="list center" v-html="item.icon"></div>
            <p class="is-size-7">{{item.title}}</p>
          </div>
          <div class="column" v-if="suit.group">
            <div class="group list center">
              <span v-for="(icon, value) in suit.group.icon" :key="value" v-html="icon"></span>
            </div>
            <p class="is-size-7">{{suit.group.title}}</p>
          </div>
        </div>
        <img :src="suit.img" alt="">
        <div class="is-size-5">{{suit.detail}}</div>
      </div>
  </section>
</template>
<style lang="stylus">
  .suit
   .list
      min-height: 80px
      box-shadow: none
    .group
      justify-content: space-around  

      svg
        margin: 0 7px          

</style>
<script>
  export default {
    props: {
      suit: {
        type: Object,
        required: true
      }
    }
  }
</script>

