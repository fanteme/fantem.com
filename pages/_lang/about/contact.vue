<template>
  <main>
    <section class="contact">
      <section-banner :banner="contact"></section-banner>
      <div class="container">
        <h3>{{ $t('联系方式') }}</h3>
        <h4>{{ $t('丰唐物联技术（深圳）有限公司') }}</h4>
        <p>
          {{
            $t('公司地址') +
              ': ' +
              $t(
                '广东省深圳市光明新区光明办事处第二工业区白花园路18号 英唐科技产业园 3楼'
              )
          }}
        </p>
        <p>
          {{
            $t('工厂地址') +
              ': ' +
              $t(
                '广东省深圳市光明新区光明办事处第二工业区白花园路18号 英唐科技产业园 3楼'
              )
          }}
        </p>
        <p>{{ $t('邮编') + ': ' + 518000 }}</p>
        <p>
          {{
            $t('服务热线') + ': ' + $t('18902454488（周一至周五 9:00-18：00）')
          }}
        </p>
        <p></p>
        <div class="columns">
          <div class="column">
            <h5>{{ $t('商务合作') }}</h5>
            <p>
              {{ $t('邮箱') + ': ' }}
              <a href="mailto:saleschina@fantem.com?subject=商务合作"
                >saleschina@fantem.com</a
              >
            </p>
          </div>
          <div class="column">
            <h5>{{ $t('市场合作') }}</h5>
            <p>
              {{ $t('邮箱') + ': ' }}
              <a href="mailto:marketing@fantem.com?subject=市场合作"
                >marketing@fantem.com</a
              >
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <iframe
              width="100%"
              height="350"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://surl.amap.com/6CF3pdxZ7Mn"
            ></iframe>
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
  head () {
    return {
      title: '联系我们_丰唐物联_OOMI',
      meta: [
        {
          name: 'keywords',
          content: '丰唐物联,智能家居,智能家居系统,OOMI,OOMI智能家居系统'
        },
        {
          name: 'description',
          content:
            '丰唐物联是一家专注于物联网产品及无线智能家居产品的高端品牌企业，致力于为人们提供安全、节能、便捷和舒适的智慧生活，是行业领先的智能家居产品和系统方案服务提供商。'
        }
      ]
    }
  },
  data () {
    return {
      contact: {
        backgroundimg: '/2018/10/0e5d76afce01f3f58b89a24c74047217.jpg',
        parallax: true
      }
    }
  }
}
</script>
