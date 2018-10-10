<template>
  <section id="section-feature">
    <div class="columns">
      <div class="column">
        <div class="container has-text-centered">
          <p class="title">Tap-and-Touch {{$t('专利技术')}}</p>
          <p class="subtitle">{{$t('让组网设置超乎想象的简单')}}</p>
          <p class="content">
            {{$t('OOMI使用自主创新的Tap-and-Touch专利技术，刷新智能家居安装新定义：只需让OOMI Touch轻触其他OOMI产品，便可建立链接，实现OOMI系统对智能家居的全操控。智能家居生活，从触碰开始。')}}            
          </p>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="container columns" style="margin: 0 auto">
        <div class="column">
          <div class="num center">1</div>
          <figure class="center">
            <img :src="`${this.$store.state.cdn}/2018/09/e7a9735acc6dd7a9317aeea45a1a282f.png`">
          </figure>
          <p class="text has-text-centered">{{$t('轻触')}}</p>
        </div>
        <div class="column">
          <div class="num center">2</div>
          <figure class="center">
            <img :src="`${this.$store.state.cdn}/2018/09/59183cc0661d8b7f96f0e8480597b5d5.png`">
          </figure>
          <p class="text has-text-centered">{{$t('连接')}}</p>
        </div>
        <div class="column">
          <div class="num center">3</div>
          <figure class="center">
            <img :src="`${this.$store.state.cdn}/2018/09/50e8679226119dd5527d8aa56ac4890e.png`">
          </figure>
          <p class="text has-text-centered">{{$t('操控')}}</p>
        </div>
      </div>
    </div>
    <div class="gap"></div>
    <div class="columns">
      <div class="column">
        <div class="container has-text-centered">
          <p class="title">OOMI3.0{{$t('大宅系统')}}</p>
          <p class="subtitle">{{$t('让组网设置超乎想象的简单')}}</p>
          <p class="content">
            {{$t('OOMI大宅系统涵盖健康、语音、安防、灯光、家电、娱乐、环境七大类产品，采用边缘计算技术，可脱离云服务区独立运行，确保在网络中断的情况下智能家居系统依然可以正常工作。该系统运行稳定，将彻底解决无线产品在别墅、复式、大平台中应用的稳定性难题。OOMI系统支持多网关协同工作，支持跨网关场景联动。用户通过一个账号即可集中管控，也可以使用不同的账号进行分级管控，满足了所有家庭成员的使用以及大型系统的应用。')}}            
          </p>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="container columns" style="margin: 0 auto">
        <div class="column is-10">
          <div class="center">
            <img :src="`${this.$store.state.cdn}/2018/09/c3bd8a49f94e8f1f641e78eb0e6a8d90.png`">
          </div>
        </div>
        <div class="column is-2 center">
          <div class="one-account">
            <img :src="`${this.$store.state.cdn}/2018/09/1d695774a486ac7d2ea4158f86c3f7ab.png`">
            <p class="text has-text-centered">{{$t('一个账号，集中控制！')}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="gap"></div>
  </section>
</template>

<style lang="stylus">
#section-feature {
  background: radial-gradient(circle at top, #fff 50%, #ffe3cd) 0 0 / 100% 100% no-repeat;

  .gap {
    height: 11px;
    background-color: #f0f4f5;
  }

  > .columns {
    &:nth-child(1), &:nth-child(4) {
      padding-top: 60px;
    }

    &:nth-child(2), &:nth-child(5) {
      padding: 38px 0;
    }

    .title {
      color: #3e3a39;
      font-size: 36px;
      font-weight: normal;

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

    .subtitle {
      color: #3e3a39;
      font-size: 20px;
      padding-top: 23px;
    }

    .content {
      max-width: 71%;
      margin: 0 auto;
      font-size: 16px;
    }

    .num {
      width: 42px;
      height: 42px;
      color: #e66c25;
      font-size: 24px;
      font-weight: 500;
      border: 1px solid #dadbdb;
      border-radius: 50%;
    }

    figure {
      height: 280px;
    }

    .text {
      color: #3e3a39;
      font-size: 20px;
    }
  }
}
</style>
