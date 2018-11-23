<template>
  <section class="section-parameter">
      <div class="container">
      <div class="columns is-multiline">
        <div class="column is-12 has-text-centered">
          <h2 class="title has-text-weight-normal">{{$t('产品参数')}}</h2>
        </div>
        <div class="column is-12">
          <div class="columns is-multiline content">
            <div v-for="(parameter, index) in parameters" :class="parameter.column" :key="index" class="column">
              <span class="has-text-white" v-if="index%2 == 0">{{parameter.item}}</span>
              <span v-else>{{parameter.value}}</span>
            </div>
          </div>
        </div>     
      </div>
    </div>
  </section>  
</template>
<style lang="stylus">
  .section
    &-parameter
      background: #eaeeef
      padding-bottom: 80px
      .container
        overflow: hidden
        .title
          color: #3e3a39
          font-size: 36px
          padding: 80px 0 30px
          border-bottom: 1px solid #e88d58
        .content
          background: #fff  
          margin-top: 20px
          padding-bottom: 12px
          .column
            padding-top: 14px
            padding-bottom: 14px 
        .is-2
          background: #979898
          text-align: center 
        .is-4
          background: #fff
          color: #727171
</style>
<script>
  export default {
    props: {
      parameters: {
        type: Array
      }
    }
  }
</script>