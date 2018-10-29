<template>
  <main>
    <section class="contact">
      <section-banner :banner="contact"></section-banner>
      <div class="container">
        <h3>{{$t('联系方式')}}</h3>
        <h4>{{$t('丰唐物联技术（深圳）有限公司')}}</h4>
        <p>{{$t('公司地址') + ': ' + $t('深圳市南山区科技园科技南五道英唐大厦5楼')}}</p>
        <p>{{$t('工厂地址') + ': ' + $t('广东省深圳市光明新区光明办事处第二工业区白花园路18号 英唐科技产业园')}}</p>
        <p>{{$t('邮编') + ': ' + 518000}}</p>
        <p>{{$t('服务热线') + ': ' + $t('400-880-3757（周一至周五 9:00-18：00）')}}</p>
        <p></p>
        <div class="columns">
          <div class="column">
            <h5>{{$t('商务合作')}}</h5>
            <p>{{$t('邮箱') + ": "}}<a href="mailto:saleschina@fantem.com?subject=商务合作">saleschina@fantem.com</a></p>
          </div>
          <div class="column">
            <h5>{{$t('市场合作')}}</h5>
            <p>{{$t('邮箱') + ": "}}<a href="mailto:marketing@fantem.com?subject=市场合作">marketing@fantem.com</a></p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <iframe width='100%' height='350' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='http://www.google.cn/maps/embed?pb=!1m18!1m12!1m3!1d3685.183871143453!2d113.94425131540099!3d22.534783940035815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403ee04b9b0bc07%3A0x756b906bd375f3fd!2z6Iux5ZSQ5aSn5Y6m!5e0!3m2!1szh-CN!2scn!4v1537494459852'></iframe>
          </div>
        </div>
      </div>
    </section> 
  </main>
</template>
<style lang="stylus" scoped>
.contact {
  color: #3e3a39;
  background: #edf1f2;
  padding-bottom: 49px;

  h3 {
    font-size: 36px;
    line-height: 44px;
    margin-top: 25px;

    &:after {
      display: block;
      content: '';
      margin-top: 8px;
      width: 73px;
      height: 2px;
      background-color: #ed7422;
    }
  }

  h4 {
    margin: 48px 0 31px 0;
    font-size: 24px;
  }

  p {
    font-size: 16px;
    line-height: 24px;

    a {
      color: #e76c26;
    }
  }

  h5 {
    font-size: 18px;
    margin: 28px 0 14px 0;
  }
}
</style>
<script>
import SectionBanner from '~/components/SectionBanner'
export default {
  components: {
    SectionBanner
  },
  head() {
    return {
      title: this.$t('关于丰唐物联') + '-' + this.$t('联系我们')
    }
  },
  data() {
    return {
      contact: {
        backgroundimg: '/fantem/about-banner.jpg',
        parallax: true
      }
    }
  }
}
</script>