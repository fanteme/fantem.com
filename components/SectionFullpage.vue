<template>
  <div class="pinContainer" ref="pin">
    <section v-for="(section,index) in panels" :key="index" class="panel" :class="`panel-${index}`">
      <transition name="accordion-fade-slide" mode="out-in">
        <div class="center">
          <div class v-if="section.src">
            <div class="content has-text-centered">{{section.content}}</div>
            <div class="center imgs">
              <img class="house" :class="section.class" :src="section.src">
              <div class="has-text-centered">
                <img :src="section.img">
                <p>{{section.text}}</p>
              </div>
            </div>
          </div>
          <div v-else-if="section.svg" class="has-text-centered" :class="section.class">
            <div class="content has-text-center">{{section.content}}</div>
            <div class="wrap" v-if="$store.state.locale == 'en'">
              <img :src="section.svgen">
            </div>
            <div class="wrap" v-else>
              <img :src="section.svg">
            </div>
          </div>
          <div v-else-if="section.imgs" class="has-text-centered">
            <div class="content has-text-center">{{section.content}}</div>
            <img class="img" :src="section.imgs">
          </div>
          <div class="has-text-centered" v-else-if="section.groups">
            <div class="content has-text-center">{{section.content}}</div>
            <div class="center">
              <div v-for="(item,index) in section.groups" :key="index">
                <img class="img" :src="item.src">
              </div>
            </div>
          </div>
        </div>
      </transition>
    </section>
  </div>
</template>
<style lang="stylus">
.pinContainer {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;

  .panel {
    height: 110vh;
    width: 100%;
    position: absolute;
    top: 30px;
    left: 0px;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: #fff;

    @media screen and (max-width: 667px) {
      top: 70px;
    }

    svg {
      width: 720px;

      @media screen and (max-width: 1360px) {
        width: 580px;
      }

      @media screen and (max-width: 1024px) {
        width: 400px;
      }

      @media screen and (max-width: 667px) {
        width: 280px;
      }

      @media screen and (max-width: 414px) {
        width: 200px;
      }
    }

    .house {
      @media screen and (max-width: 1024px) {
        width: 450px;
      }

      @media screen and (max-width: 667px) {
        width: 350px;
      }

      @media screen and (max-width: 414px) {
        width: 200px;
      }
    }

    .img {
      width: 290px;

      @media screen and (max-width: 1360px) {
        width: 170px;
      }

      @media screen and (max-width: 1024px) {
        width: 150px;
      }

      @media screen and (max-width: 667px) {
        width: 80px;
      }
    }
  }

  .imgs {
    .house {
      @media screen and (max-width: 1360px) {
        width: 520px;
      }

      @media screen and (max-width: 1024px) {
        width: 400px;
      }

      @media screen and (max-width: 667px) {
        width: 350px;
      }
    }
  }

  .content {
    width: 55%;
    margin: 0 auto 50px;

    @media screen and (max-width: 667px) {
      width: 95%;
    }

    @media screen and (max-width: 667px) {
      font-size: 14px;
    }

    @media screen and (max-width: 414px) {
      font-size: 12px;
    }
  }

  p {
    @media screen and (max-width: 667px) {
      font-size: 14px;
    }

    @media screen and (max-width: 414px) {
      font-size: 12px;
    }
  }
}
</style>
<script>
export default {
  mounted() {
    this.$nextTick(this.pinContainerScene)
  },
  data() {
    return {
      panels: [
        {
          id: 1,
          src: `${
            this.$store.state.cdn
          }/2019/03/a74d31b6923f3bc8116ce81ae99ce4dd.svg`,
          img: `${
            this.$store.state.cdn
          }/2018/11/d21286962129d1f984388a2b032484fb.png`,
          text: this.$t('一个账号，集中管理！')
        },
        {
          id: 2,
          content: this.$t(
            'OOMI3.0大宅系统涵盖健康、语音、安防、灯光、家电、娱乐、环境七大类产品，采用边缘计算技术，可脱离云服务区独立运行，确保在网络中断的情况下智能家居系统依然可以正常工作。'
          ),
          src: `${
            this.$store.state.cdn
          }/2019/03/a74d31b6923f3bc8116ce81ae99ce4dd.svg`,
          class: 'svg'
        },
        {
          id: 3,
          content: this.$t(
            '下班回家，推开门，一切都已经为您准备好了！灯光自动亮起，室内空调恰好调到最舒适的温度，电视已经为您自动播放您喜欢的节目了！OOMI智能家居，让科技温暖家。'
          ),
          svg: `${
            this.$store.state.cdn
          }/2019/03/18186969f449eab8afdbcf73655b5dbf.svg`,
          svgen: `${
            this.$store.state.cdn
          }/2019/03/9773658239e8fbcc7d3bea0393df9133.svg`,
          class: 'svg'
        },
        {
          id: 4,
          content: this.$t(
            '当烟雾浓度达到报警预设值时，智能烟雾传感器将发出声光报警信号，提醒您及时采取有效措施，排除险情；智能水位传感器能探测漏水信息，轻松防范水患，亦可联动智能机械手自动关闭水阀。'
          ),
          svg: `${
            this.$store.state.cdn
          }/2019/03/85aa258a543436324a00e509d516ece6.svg`,
          svgen: `${
            this.$store.state.cdn
          }/2019/03/de27ddc1110829429100bd95bf8cef22.svg`,
          class: 'svg'
        },
        {
          id: 5,
          content: this.$t(
            '夜晚，氤氲在柔和的灯光下，来场犒劳身心的沐浴，1600万种灯光颜色和3种白光应景随心，找回夜晚的宁静，空气中弥漫的，都是罗曼蒂克的味道。'
          ),
          svg: `${
            this.$store.state.cdn
          }/2019/03/aa4a63bb25ddac7c8c536fd07786a2c7.svg`,
          svgen: `${
            this.$store.state.cdn
          }/2019/03/169011e6c80cef8e745e36e613dd27b8.svg`,
          class: 'svg'
        },
        {
          id: 6,
          content: this.$t(
            '让光线随您的生活律动。早晨开启“起床模式”模拟日出光线，伴随柔和的音乐唤醒睡眼惺忪的您；夜晚开启“睡眠模式”模拟日落光线，营造舒适的入睡氛围，让身体跟随自然的节奏律动，您的作息，OOMI懂！'
          ),
          svg: `${
            this.$store.state.cdn
          }/2019/03/1190ddfb71f20c7033307baef2c03b0e.svg`,
          svgen: `${
            this.$store.state.cdn
          }/2019/03/0f1e1692bd82b0e0fc6b867e2ab01912.svg`,
          class: 'svg'
        },
        {
          id: 7,
          content: this.$t(
            '通过一个账号即可集中管控，也可以使用不同的账号进行分级管控，满足了所有家庭成员的使用以及大型系统的应用。'
          ),
          imgs: `${
            this.$store.state.cdn
          }/2018/11/96c5994f1a4f08d50bb452a23e055786.png`
        },
        {
          id: 8,
          content: this.$t(
            '通过一个账号即可集中管控，也可以使用不同的账号进行分级管控，满足了所有家庭成员的使用以及大型系统的应用。'
          ),
          groups: [
            {
              src: `${
                this.$store.state.cdn
              }/2018/11/da7a88976f45f7e995c10e8ae59335f7.png`,
              class: 'fadeInLeft'
            },
            {
              src: `${
                this.$store.state.cdn
              }/2018/11/96c5994f1a4f08d50bb452a23e055786.png`,
              class: 'fadeInUp'
            },
            {
              src: `${
                this.$store.state.cdn
              }/2018/11/e9d64f19770f0359aa0338fcf6cfbf96.png`,
              class: 'fadeInRight'
            }
          ]
        }
      ],
      options: {
        duration: 1200,
        easing: [1, 0, 0, 1],
        preloaderEnabled: false,
        overlay: false,
        dotNavEnabled: false,
        parallax: false
      }
    }
  },
  methods: {
    pinContainerScene() {
      const Length = this.panels.length

      // Create a new Timeline (equivalent to new TimelineMax())
      const tl = new this.$gsap.TimelineMax()

      for (var i = 0; i < Length; i++) {
        // For each panel in this.panels array:
        let animFrom, animOutLetters
        switch (
          i // Set animFrom value, depending on the index i of the item
        ) {
          case 0:
            animFrom = { y: '-25%', scale: '1.3', 'z-index': '101' }
            animOutLetters = { y: '-8%', scale: '1.1', 'z-index': '1' }
            break // First panel is already visible on page load, so no animation
          case 1:
            animFrom = { y: '-5%', scale: '1.3', 'z-index': '100' } // Second panel comes from the left
            animOutLetters = { y: '-8%', scale: '1.3', 'z-index': '2' }
            break
          case 2:
            animFrom = { y: '-5%', scale: '1.3', 'z-index': '99' } // Third one comes from the right
            animOutLetters = { y: '-8%', scale: '1', 'z-index': '3' }
            break
          case 3:
            animFrom = { y: '-5%', scale: '1.3', 'z-index': '98' } // Finally, the last one comes from the top
            animOutLetters = { y: '-8%', scale: '1', 'z-index': '4' }
            break
          case 4:
            animFrom = { y: '-5%', scale: '1.3', 'z-index': '97' } // Finally, the last one comes from the top
            animOutLetters = { y: '-8%', scale: '1', 'z-index': '5' }
            break
          case 5:
            animFrom = { y: '-5%', scale: '1.3', 'z-index': '96' } // Finally, the last one comes from the top
            animOutLetters = { y: '-8%', scale: '1', 'z-index': '6' }
            break
          case 6:
            animFrom = { y: '-5%', scale: '1.3', 'z-index': '95' } // Finally, the last one comes from the top
            animOutLetters = { y: '-8%', scale: '1.3', 'z-index': '7' }
            break
          case 7:
            animFrom = { y: '-5%', scale: '1.3', 'z-index': '90' } // Finally, the last one comes from the top
            animOutLetters = { y: '-8%', scale: '1.3', 'z-index': '8' }
            break
        }
        if (i >= 0) {
          // For each panel except the one whom index is 0, create the tween and add it to the tl timeline
          tl.fromTo(`section.panel-${i}`, 100, animFrom, animOutLetters)
        }
      }

      // create scene and set its params
      const scene = new this.$scrollmagic.Scene({
        triggerElement: '.pinContainer',
        triggerHook: 'onLeave',
        duration: `${Length * 40}%` // each panel animation will last 200% of the screen's height
      })
        .setPin('.pinContainer')
        .setTween(tl)

      // Add scene to ScrollMagic controller by emiting an 'addScene' event on vm.$ksvuescr (which is our global event bus)
      this.$ksvuescr.$emit('addScene', 'pinContainerScene', scene)

      // TAAAAAAADAAAAAAAAAAAA
    }
  },
  destroyed() {
    // Destroy ScrollMagic when our component is removed from DOM
    // this.$ksvuescr.$emit('destroy')
  }
}
</script>

