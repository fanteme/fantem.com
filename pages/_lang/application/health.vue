<template>
  <main>
    <application-hero :hero="hero"></application-hero>
    <section class="application-features">
      <div
        class="sectionA"
        :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/10/1b0d24d69595d8fe0e77a629e2ab31a9.jpg)`}"
      >
        <div class="container">
          <p class="caption has-text-centered has-text-white">{{$t('净化空气 安全守护')}}</p>
        </div>
      </div>
      <div class="sectionB center">
        <div class="container">
          <div class="columns">
            <div class="column center">
              <img
                :src="`${this.$store.state.cdn}/2018/10/bb4acd88227b951fa5c4a5e2e3918bd6.png`"
                alt
              >
            </div>
            <div class="column">
              <p class="caption has-text-centered">{{$t('全面检测——智能有害气体传感器')}}</p>
              <div
                class="subtitle has-text-centered is-size-6"
              >{{$t('稳定监测到可能影响您与家人身体健康的空气污染物的存在，具备良好的灵敏度和出色的重复性，避免其他气体干扰。当有害气体浓度超出预设值会触发警报，您的手机会收到预警信息提醒，提醒您及时作出相应的措施。')}}</div>
              <div class="group">
                <ul class="center">
                  <li class="center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70">
                      <g
                        fill="none"
                        fill-rule="evenodd"
                        stroke="#E76C26"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke-dasharray=".5 6" stroke-width="2" d="M15.93 19.456h37.21"></path>
                        <path stroke-dasharray="15 10" stroke-width="2" d="M15.93 29.912h37.21"></path>
                        <path stroke-dasharray=".5 6" stroke-width="2" d="M15.93 40.368h37.21"></path>
                        <path stroke-dasharray="15 10" stroke-width="2" d="M15.93 50.823h37.21"></path>
                        <path
                          d="M68.568 35.14c0 18.797-15.237 34.034-34.034 34.034C15.737 69.174.5 53.937.5 35.14.5 16.343 15.737 1.106 34.534 1.106c18.797 0 34.034 15.237 34.034 34.034z"
                        ></path>
                      </g>
                    </svg>
                    <span>{{$t('PM2.5')}}</span>
                  </li>
                  <li class="center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70">
                      <g fill="none" fill-rule="evenodd">
                        <path
                          stroke="#E76C26"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M68.961 34.534c0 18.797-15.238 34.034-34.034 34.034C16.13 68.568.893 53.331.893 34.534.893 15.737 16.13.5 34.927.5c18.796 0 34.034 15.237 34.034 34.034z"
                        ></path>
                        <path
                          stroke="#E76C26"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.966 49.121h36.748s7.055-3.326 4.09-11.207c-3.004-7.993-12.846-7.46-12.846-7.46s-1.33-10.02-11.438-10.396c-13.406-.5-12.166 12.061-12.166 12.061s-6.455 1.527-7.68 6.582c-1.698 7.018 3.292 10.42 3.292 10.42zm27.12-29.175c3.635 1.688 3.635 6.491 3.635 6.491s4.284-.779 6.751 2.207"
                        ></path>
                        <path
                          fill="#E76C26"
                          d="M33.154 42.794c-.41.205-1.243.41-2.308.41-2.729 0-4.562-1.807-4.562-4.935 0-3.332 2.101-5.153 4.82-5.153 1.127 0 1.82.244 2.088.385l-.32 1.218a4.029 4.029 0 0 0-1.718-.36c-1.896 0-3.307 1.283-3.307 3.833 0 2.41 1.256 3.755 3.282 3.755.666 0 1.345-.14 1.768-.345l.257 1.192zm2.512-4.614c0 1.986.897 3.807 2.589 3.807 1.718 0 2.602-1.783 2.602-3.871 0-1.872-.82-3.794-2.577-3.794-1.806 0-2.614 1.935-2.614 3.858m6.755-.116c0 3.41-1.833 5.14-4.217 5.14-2.5 0-4.101-2.025-4.101-4.986 0-3.09 1.716-5.114 4.229-5.114 2.602 0 4.089 2.14 4.089 4.96"
                        ></path>
                      </g>
                    </svg>
                    <span>{{$t('CO')}}</span>
                  </li>
                  <li class="center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70">
                      <g
                        fill="none"
                        fill-rule="evenodd"
                        stroke="#E76C26"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          d="M69.354 35.336c0 18.796-15.238 34.034-34.035 34.034-18.796 0-34.034-15.238-34.034-34.034 0-18.797 15.238-34.034 34.034-34.034 18.797 0 34.035 15.237 34.035 34.034z"
                        ></path>
                        <path
                          stroke-width="2"
                          d="M34.851 28.74v-8.26c0-2.585-1.493-3.2-3.316-1.367l-9.58 9.627h-3.232a2.547 2.547 0 0 0-2.547 2.547v8.098a2.547 2.547 0 0 0 2.547 2.547h3.232l9.58 9.628c1.823 1.833 3.316 1.217 3.316-1.37V28.74zm14.194 19.527a17.773 17.773 0 0 0 5.418-12.795c0-5.021-2.078-9.555-5.418-12.796m-6.755 4.047c2.866 1.858 4.768 5.079 4.768 8.749 0 3.67-1.902 6.892-4.768 8.75"
                        ></path>
                      </g>
                    </svg>
                    <span>{{$t('VOC')}}</span>
                  </li>
                  <li class="center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70">
                      <g
                        fill="none"
                        fill-rule="evenodd"
                        stroke="#E76C26"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          d="M68.747 35.003c0 18.796-15.237 34.034-34.034 34.034C15.916 69.037.679 53.8.679 35.003S15.916.97 34.713.97c18.797 0 34.034 15.238 34.034 34.034z"
                        ></path>
                        <path
                          stroke-width="2"
                          d="M36.226 37.119a5.906 5.906 0 1 1-11.812-.001 5.906 5.906 0 0 1 11.812 0zm-9.42-14.984a3.856 3.856 0 1 1-7.712 0 3.856 3.856 0 0 1 7.712 0zM21.88 47.871a3.857 3.857 0 1 1-7.714-.001 3.857 3.857 0 0 1 7.714.002zm33.38-10.167a5.906 5.906 0 1 1-11.812 0 5.906 5.906 0 0 1 11.813 0z"
                        ></path>
                        <path
                          d="M24.56 25.503l3.368 6.442m-1.756 9.223l-5.125 4.685m15.18-8.734l7.513.536"
                        ></path>
                      </g>
                    </svg>
                    <span>{{$t('甲醛')}}</span>
                  </li>
                  <li class="center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70">
                      <g fill="none" fill-rule="evenodd">
                        <path
                          stroke="#E76C26"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M69.14 34.771c0 18.797-15.237 34.034-34.035 34.034-18.795 0-34.033-15.237-34.033-34.034C1.072 15.975 16.31.737 35.105.737c18.798 0 34.035 15.238 34.035 34.034z"
                        ></path>
                        <path
                          fill="#E76C26"
                          d="M29.224 58.95S9.834 48.086 26.06 29.11c0 0 3.024 1.65 2.566 4.033 0 0 13.476-14.208 6.509-22.55 0 0 14.667 2.291 9.166 28.692 0 0 3.667-1.008 3.667-3.483 0 0 8.158 8.525-4.126 22.367 0 0 1.376-5.134-1.466-8.617 0 0-.366 6.6-3.85 7.425 0 0-6.05-8.89.093-19.617 0 0-14.667 7.792-9.396 21.588"
                        ></path>
                      </g>
                    </svg>
                    <span>{{$t('燃气')}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="sectionC borderB"
        :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/10/079f9965526e6d217fb66dae76dbeed2.jpg)`}"
      >
        <div class="container">
          <div class="columns">
            <div class="column is-offset-5">
              <p class="caption has-text-centered">{{$t('鲜氧通风——新风系统')}}</p>
              <div
                class="subtitle has-text-centered is-size-6"
              >{{$t('氧气置换结合深层净化，带来每秒新鲜空气！持续送风让清新的空气充盈在每个角落，同时将脏空气挤出室外，并阻挡外部污染或灰尘进入，使室内空气变得无味、无菌、不闷有氧。具备快速除醛、净化雾霾、除尘抑菌、较少灰尘、去异味、恒氧清新等功能，还您一个清新的家。')}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">
            <p class="caption has-text-centered">{{$t('知冷暖 懂干湿——智能温湿度传感器')}}</p>
            <div
              class="subtitle has-text-centered is-size-6"
            >{{$t('您可以随时了解家中环境情况，通过预设OOMI智能场景联动智能电器节点设备，开启空调、电热器、加湿器、除湿机等设备，给您一个舒适的家居环境。')}}</div>
          </div>
        </div>
      </div>
      <div>
        <img :src="`${this.$store.state.cdn}/2018/10/29ce0aacb0a017b6f4b65d42e8b13b23.jpg`" alt>
      </div>
      <application-suit :suit="suit"></application-suit>
    </section>
  </main>
</template>
<style lang="stylus">
.application-features {
  font-weight: 600;
  color: #231815;

  .title {
    color: #3e3a39;
    font-size: 36px;
    margin: 50px auto;
  }

  .caption {
    color: #3e3a39;
    font-size: 36px;
    margin: 50px auto;

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
    font-weight: 600;
    color: #231815;
    margin-bottom: 47px;
  }

  .character {
    margin: 30px 0 50px;

    span {
      padding: 0 38px;
    }
  }

  .sectionA {
    min-height: 800px;
    overflow: hidden;
  }

  .marginT {
    margin-top: 67px;
  }

  .sectionB {
    background: #edf1f2;
    min-height: 738px;

    .group {
      margin-top: 120px;

      ul {
        display: flex;

        li {
          flex-direction: column;
          margin: 0 23px;
        }
      }
    }
  }

  .sectionC {
    min-height: 800px;
  }

  .borderB {
    border-bottom: 12px solid #edf1f2;
  }
}
</style>

<script>
import ApplicationHero from '~/components/ApplicationHero.vue'
import ApplicationSuit from '~/components/ApplicationSuit.vue'

export default {
  components: { ApplicationHero, ApplicationSuit },
  head() {
    return {
      title: '健康模式_丰唐物联_OOMI',
      meta: [
        {
          name: 'keywords',
          content:
            '健康模式,智能家居系统,OOMI智能家居,OOMI大宅系统,OOMI智能家居系统,丰唐物联'
        },
        {
          name: 'description',
          content:
            '丰唐物联技术（深圳）有限公司一直致力于智能家居产品及家居整体智能控制解决方案的研究与实践，提供智能家居整体解决方案，为您轻松打造舒适便利的智能家居生活环境。'
        }
      ]
    }
  },
  data() {
    return {
      hero: {
        bg: `${
          this.$store.state.cdn
        }/2019/03/3bf039a5448cd91712c9d87ee9c99775.jpg`,
        icon: `${
          this.$store.state.cdn
        }/2019/03/5bcca22e197aec90bb463341c7ee1ec4.svg`,
        title: this.$t('OOMI智能家居系统') + '--' + this.$t('健康模式'),
        align: 'has-text-centered',
        titcolor: 'has-text-white',
        subcolor: 'has-text-white',
        detail: this.$t(
          'OOMI智能健康系统能够实时、快速、高效监测家中空气质量,如：PM2.5、TVOC等有害气体的浓度，并可以联动家中新风系统、空调、空气净化器等空净设备，对空气质量进行优化，以此来控制温度、湿度之间的协调统一，为您提供一个“恒温、恒湿、恒氧、恒净”的家居环境。'
        ),
        detcolor: 'has-text-white'
      },
      suit: {
        title: this.$t('健康模式 套装选择'),
        subtitle: this.$t('健康模式套装选择（适用于有网络的小户型家庭）'),
        character: [
          this.$t('环境实时监测'),
          this.$t('空间急速净化'),
          this.$t('随心拓展配件')
        ],
        item: [
          {
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" width="42" height="49"><g fill="none" fill-rule="evenodd" stroke="#E76C26"><path d="M40.938 39.929c0 .934-.761 1.692-1.695 1.692H2.184c-.93 0-1.684-.758-1.684-1.692V2.872c0-.94.754-1.693 1.684-1.693h37.059c.934 0 1.695.754 1.695 1.693v37.057zM20.717 41.62v6.2m-20.217 0h40.438"/><path d="M34.94 21.4c0 7.859-6.364 14.222-14.228 14.222-7.854 0-14.217-6.363-14.217-14.222 0-7.854 6.363-14.222 14.217-14.222 7.864 0 14.229 6.368 14.229 14.222z"/><path d="M29.8 21.4c0 5.018-4.061 9.088-9.083 9.088-5.02 0-9.084-4.07-9.084-9.088 0-5.013 4.064-9.084 9.084-9.084A9.083 9.083 0 0 1 29.8 21.4z"/></g></svg>',
            title: `${this.$t('智能网关')}X1`
          },
          {
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" width="75" height="43"><g fill="none" fill-rule="evenodd" stroke="#E76C26"><path d="M1.067 41.585h72.458V1.415H1.067z"/><path d="M22.958 34.233h43.17V8.766h-43.17zM6.13 9.424h7.852M6.049 33.576h7.847m.085-12.079a3.926 3.926 0 1 1-7.852.001 3.926 3.926 0 0 1 7.853-.001z"/></g></svg>',
            title: `${this.$t('智能操控面板')}X1`
          },
          {
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><g fill="none" fill-rule="evenodd" stroke="#E76C26"><path d="M48.572 36.11c0 7.152-5.797 12.949-12.948 12.949H13.52C6.369 49.059.57 43.262.57 36.11V14.007c0-7.15 5.798-12.948 12.95-12.948h22.103c7.15 0 12.948 5.798 12.948 12.948V36.11z"/><path d="M42.99 25.059c0 10.172-8.246 18.418-18.418 18.418-10.172 0-18.418-8.246-18.418-18.418C6.154 14.887 14.4 6.64 24.572 6.64c10.172 0 18.418 8.246 18.418 18.418z"/></g></svg>',
            title: `${this.$t('智能六合一传感器')}X1`
          },
          {
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><g fill="none" fill-rule="evenodd" stroke="#E76C26"><path d="M48.572 36.11c0 7.152-5.797 12.949-12.948 12.949H13.52C6.369 49.059.57 43.262.57 36.11V14.007c0-7.15 5.798-12.948 12.95-12.948h22.103c7.15 0 12.948 5.798 12.948 12.948V36.11z"/><path d="M42.99 25.059c0 10.172-8.246 18.418-18.418 18.418-10.172 0-18.418-8.246-18.418-18.418C6.154 14.887 14.4 6.64 24.572 6.64c10.172 0 18.418 8.246 18.418 18.418z"/></g></svg>',
            title: `${this.$t('智能三合一传感器')}X1`
          },
          {
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52"><g fill="none" fill-rule="evenodd"><path stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round" d="M1.364 26.059c0-13.823 11.205-25.028 25.028-25.028 13.823 0 25.028 11.205 25.028 25.028 0 13.823-11.205 25.028-25.028 25.028-13.823 0-25.028-11.205-25.028-25.028z"/><path stroke="#E76C26" stroke-linecap="round" stroke-linejoin="round" d="M5.987 26.059c0-11.27 9.136-20.405 20.405-20.405 11.27 0 20.406 9.135 20.406 20.405 0 11.27-9.136 20.405-20.406 20.405S5.987 37.329 5.987 26.059z"/><path fill="#E76C26" d="M13.502 25.925h1.704c.518 0 .892-.096 1.131-.288.228-.19.353-.497.353-.919 0-.42-.125-.727-.364-.899-.239-.192-.612-.288-1.12-.288h-1.704v2.394zm1.791-3.285c1.628 0 2.441.69 2.441 2.078 0 1.398-.824 2.097-2.46 2.097h-1.772v2.662H12.46V22.64h2.834zM19.941 22.64l2.384 5.477h.028l2.375-5.477h1.235v6.836H24.92v-4.882h-.039l-2.096 4.882h-.901l-2.097-4.882h-.038v4.882h-1.043V22.64zM31.233 23.072c.412.383.622.87.622 1.475 0 .593-.228 1.128-.67 1.617-.267.278-.737.641-1.417 1.101-.737.488-1.178.92-1.321 1.293h3.419v.919h-4.712a2.6 2.6 0 0 1 .68-1.79c.249-.297.766-.709 1.542-1.245.46-.326.786-.584.976-.785.307-.345.47-.718.47-1.12 0-.383-.106-.671-.317-.861-.21-.192-.526-.288-.928-.288-.431 0-.757.142-.977.44-.23.287-.344.7-.363 1.255h-1.044c.01-.766.229-1.38.66-1.84.442-.497 1.034-.736 1.762-.736.65 0 1.197.181 1.618.564m2.962 5.238a.707.707 0 0 1 .21.517.734.734 0 0 1-.21.507.761.761 0 0 1-.508.191.67.67 0 0 1-.497-.19.692.692 0 0 1-.211-.508.67.67 0 0 1 .21-.517.64.64 0 0 1 .498-.2c.193 0 .364.066.508.2m5.823-5.669v.92h-3.275l-.201 1.972h.029c.21-.22.45-.373.727-.47.249-.105.537-.152.843-.152.64 0 1.168.21 1.57.631.402.422.614.996.614 1.733 0 .71-.27 1.283-.786 1.733-.49.403-1.073.604-1.752.604-.613 0-1.14-.173-1.58-.508-.49-.364-.757-.87-.804-1.503h1.024c.038.383.192.68.449.871.23.173.538.26.92.26.42 0 .776-.135 1.064-.393.286-.269.429-.613.429-1.053 0-.479-.124-.853-.373-1.12-.25-.269-.593-.403-1.053-.403-.306 0-.565.047-.794.163a1.193 1.193 0 0 0-.566.546h-.976l.374-3.83h4.117z"/></g></svg>',
            title: `${this.$t('智能有害气体传感器')}X1`
          },
          {
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" width="37" height="53"><g fill="none" fill-rule="evenodd" stroke="#E76C26"><path d="M32.244 51.617H3.996a3.45 3.45 0 0 1-3.45-3.45V18.074C.545 8.368 8.413.5 18.12.5c9.707 0 17.575 7.868 17.575 17.575v30.091a3.45 3.45 0 0 1-3.45 3.451z"/><path d="M3.765 17.897c0-7.928 6.428-14.355 14.355-14.355 7.929 0 14.356 6.427 14.356 14.355 0 7.928-6.427 14.355-14.356 14.355-7.927 0-14.355-6.427-14.355-14.355zM18.12 6.574v6.334m-6.852 5.505l4.479 4.479m9.227-4.48l-4.48 4.48"/></g></svg>',
            title: `${this.$t('智能空调红外转换器')}X1`
          },
          {
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="49"><g fill="none" fill-rule="evenodd" stroke="#E76C26" stroke-linecap="round"><path d="M47.582 34.05c0 7.439-6.03 13.467-13.47 13.467H14.13C6.693 47.517.662 41.489.662 34.05V14.072C.662 6.629 6.693.6 14.13.6h19.982c7.44 0 13.47 6.028 13.47 13.47V34.05zm-13.67-19.777v12.222M14.332 14.273v12.222"/><path d="M21.961 34.221v-2.14a2.162 2.162 0 1 1 4.323 0v2.14m-4.323 0h4.323"/></g></svg>',
            title: `${this.$t('智能插座')}X1`
          }
        ],
        img: `${
          this.$store.state.cdn
        }/2018/10/669ed31e72e08874e06472d8450a4d4e.png`,
        detail: this.$t('（*配件产品可以随心拓展，以上套装仅供参考）')
      }
    }
  }
}
</script>
