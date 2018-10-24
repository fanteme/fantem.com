<template>
  <main class="main">
    <section-header :secheader="secheader"></section-header>
    <section class="guide">
      <section class="guide-list">
        <div class="container">
          <h2 class="caption has-text-centered">
            {{$t('产品使用手册')}}
          </h2>
          <div class="columns is-multiline is-mobile" >
            <div class="column is-full-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd" v-for="(category, index) in categories" :key="index">
              <h2 class="subtitle">
                {{category.title}}
              </h2>
              <ul>
                <li v-for="(guide, index) in guide[`${category.name}`]" :key="index">
                  <div class="accordion">
                    <a target="_blank" :href="guide.content.rendered" class="accordion-header">
                      <i>
                        <iframe :src="guide.excerpt.rendered" width="30" height="25"></iframe>
                      </i>{{guide.title.rendered}}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>  
  </main>
</template>

<style lang="stylus">
.guide {
  background: #edf1f2;
  &-list {
    padding: 30px 0;
  }
  .caption {
    font-size: 36px;
    line-height: 44px;
    margin: 42px 0;
  }
  .subtitle {
    font-size: 24px;
    line-height: 24px; 
    padding: 34px 0 22px 32px;
    margin-bottom: 0;
  }
  .accordion {
    border-radius: 4px;
    padding: 8px 0px;
    overflow: hidden;

    &-header {
      cursor: pointer;

      i {
        padding-right: 10px;
        vertical-align: super;
        iframe {
          vertical-align: -webkit-baseline-middle;
        }
      }
    }
  }
  .column {
    background: #fff;
    background-clip: content-box; 
    &:nth-of-type(4n+1) {
      h2 {
        border-top: 1px solid #f8ce7c;
      }
    }
    &:nth-of-type(4n+2) {
      h2 {
        border-top: 1px solid #b6d673  ;
      }
    }
    &:nth-of-type(4n+3) {
      h2 {
        border-top: 1px solid #ee8379 ;
      }
    }
    &:nth-of-type(4n) {
      h2 {
        border-top: 1px solid #7dc5e9;
      }
    }
  }
  ul{
    padding: 0 0 32px 32px; 
  }  
}
</style>

<script>
import SectionHeader from '~/components/SectionHeader'
export default {
  components: {
    SectionHeader
  },
  data() {
    return {
      guides: [],
      categories: [
      {
         title: this.$t('网关类'),
         name: '网关类'
      },
      {
        title: this.$t('零火开关'),
        name: '零火开关'
      },
      {
        title: this.$t('单火开关'),
        name: '单火开关'
      },
      {
        title: this.$t('嵌入式开关'),
        name: '嵌入式开关'
      },
      {
        title: this.$t('智能传感器'),
        name: '智能传感器'
      },
      {
        title: this.$t('智能多功能警示器'),
        name: '智能多功能警示器'
      },
      {
        title: this.$t('智能电机'),
        name: '智能电机'
      },
      {
        title: this.$t('智能灯泡/灯带'),
        name: '智能灯泡/灯带'
      },
      {
        title: this.$t('智能插座/场景面板'),
        name: '智能插座/场景面板'
      },
      {
        title: this.$t('智能红外传感器'),
        name: '智能红外传感器'
      },
      {
        title: this.$t('智能辅助类'),
        name: '智能辅助类'
      }
    ],
      guide: {},
      secheader: [
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="50"><path fill="none" stroke="#211613" stroke-linecap="round" stroke-linejoin="round" stroke-width=".882" d="M12 1.7C5.842 1.7.85 6.692.85 12.85S5.842 24 12 24h11.12V12.84A11.13 11.13 0 0 0 12 1.7m35.76 11.14a11.12 11.12 0 1 0-22.23 0V24h11.12c6.143-.011 11.116-4.997 11.11-11.14M.87 37.56a11.12 11.12 0 1 0 22.23 0V26.42H12A11.13 11.13 0 0 0 .88 37.56m35.8-11.14H25.6v11.14c.033 6.111 5.008 11.042 11.12 11.02 6.111-.022 11.05-4.988 11.04-11.1-.011-6.111-4.969-11.06-11.08-11.06"/></svg>',
          title: `${this.$t('服务体系')}`,
          link: 'service',
          class: 'is-offset-2',
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="29" height="50"><g fill="none" fill-rule="evenodd" stroke="#221714" stroke-linecap="round" stroke-linejoin="round" transform="translate(0 1)"><rect width="27.52" height="48" x=".82" y=".2" rx="2.88"/><path d="M17 43.1a2.42 2.42 0 1 1-4.84 0 2.42 2.42 0 0 1 4.84 0zM5.17 5.68H24v32.09H5.17z"/></g></svg>',
          title: `${this.$t('APP下载')}`,
          link: 'download'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="40"><g fill="none" fill-rule="evenodd" stroke="#231815" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.154"><path d="M5.72 10.24l3.2-8.34m5.48 8.34l3.2-8.55m5.48 8.55l3.21-8.54m5.47 8.54l3.21-8.54m5.47 8.54l3.21-8.54m-32.02-.37h35.12a1.56 1.56 0 0 1 1.37 1.73v34.3a1.55 1.55 0 0 1-1.37 1.71H2.6a1.56 1.56 0 0 1-1.35-1.71v-36l10.38-.03z"/><path d="M20.45 30.68V17.89l8.47 6.39zM1.25 10.71h46.87"/></g></svg>',
          title: `${this.$t('视频中心')}`,
          link: 'videos'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="49" height="49"><g fill="none" fill-rule="evenodd" transform="translate(1)"><ellipse cx="23.51" cy="24.2" stroke="#221714" stroke-linecap="round" stroke-linejoin="round" stroke-width=".979" rx="23.5" ry="23.49"/><path fill="#221714" fill-rule="nonzero" d="M28.12 14.92a5.49 5.49 0 0 1 1.63 4.19 5.7 5.7 0 0 1-1.12 3.42c-.36.43-1.15 1.19-2.39 2.34a6.26 6.26 0 0 0-1.55 1.73 4.34 4.34 0 0 0-.64 2.33v.88H22.2v-.88a5.32 5.32 0 0 1 .55-2.43 10.89 10.89 0 0 1 2.79-3.3 16.77 16.77 0 0 0 1.42-1.46 4.22 4.22 0 0 0 .94-2.57 4.3 4.3 0 0 0-1.12-3.1 4.54 4.54 0 0 0-3.33-1.15 4.27 4.27 0 0 0-3.65 1.61 6.3 6.3 0 0 0-1.12 3.79h-1.82a7.52 7.52 0 0 1 1.7-5 6.14 6.14 0 0 1 5-2.06 6.29 6.29 0 0 1 4.56 1.66zm-3.89 17.83c.31.276.478.676.46 1.09a1.45 1.45 0 0 1-.46 1.09 1.54 1.54 0 0 1-1.09.43 1.63 1.63 0 0 1-1.55-1.52 1.34 1.34 0 0 1 .49-1.09 1.36 1.36 0 0 1 1.06-.42 1.45 1.45 0 0 1 1.09.42z"/></g></svg>',
          title: `${this.$t('常见问题')}`,
          link: 'faq'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="38" height="49"><g fill="none" fill-rule="evenodd" stroke="#221714" stroke-linecap="round" stroke-linejoin="round" stroke-width=".979"><path d="M4.66.7a3.47 3.47 0 0 0-3.37 3.72V44c0 1.69 1.35 3.72 3.37 3.72h28.73A3.47 3.47 0 0 0 36.77 44V12.87L23.25.7H4.66z"/><path d="M34.3 14H22.48V3.51s11.15 9.81 11.82 10.48M6.46 19.47h24.95m-24.95 7.9h24.95m-24.95 7.9h24.95"/></g></svg>',
          title: `${this.$t('使用手册')}`,
          link: 'guide'
        }
      ]  
    }
  },
  methods: {
    getUserGuidesByCategory(category) {
      return this.guides.filter(element => {
        return element.category.indexOf(category.name)!=-1
      })
    }
  },
  async mounted() {
    let { data } = await this.$axios.get(
      'http://api.fantem.cn/wp-json/wp/v2/posts?categories=user-guide&per_page=30'
    )
    this.guides = data
    this.categories.forEach(category => {
      const guides = this.getUserGuidesByCategory(category)
      this.$set(this.guide, category.name, guides)
    })
  }
}
</script>
