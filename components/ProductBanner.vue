<template>
  <section class="productbanner center" :class="[banner.class]">
    <div class="container">
      <div class="columns">
        <div class="column is-5">
          <h1 class="title has-text-weight-normal">{{banner.title}}</h1>
          <h4 class="subtitle has-text-weight-light">{{banner.subtitle}}</h4>
          <p class="content has-text-weight-light">{{banner.content}}</p>
        </div>
        <div class="column is-7 has-text-right">
          <u-animate-container>
            <u-animate
              name="fadeInDown"
              delay="0s"
              duration="1.5s"
              :iteration="1"
              :offset="0"
              animateClass="animated"
              :begin="false"
            >
              <img :src="banner.img">
            </u-animate>
          </u-animate-container>
        </div>
      </div>
    </div>
  </section>
</template> 
<style lang="stylus">
.productbanner {
  background-color: #eaeeef;
  background-repeat: no-repeat;
  min-height: 775px;
  color: #3e3a39;

  .is-5 {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    color: #e76c26;
    font-size: 50px;
  }

  .subtitle {
    font-size: 37px;
    margin: 28px 0 62px;
    color: #3e3a39;
  }

  .content {
    font-size: 16px;
    line-height: 28px;
  }

  &.black {
    background-size: cover;
    background-position: center;
    background-image: url('http://cdn.fantem.cn/2019/03/f1a535dee2c194439d48988e78169788.png'); // cdn.fantem.cn/2019/03/f1a535dee2c194439d48988e78169788.png)

    .subtitle, .content {
      color: #fff;
    }
  }
}
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