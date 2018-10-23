<template>
  <main class="main">
    <section-header :secheader="secheader"></section-header>
    <section class="faq">
      <section class="faq-list container">
        <div class="columns">
          <div class="column is-one-quarter">
            <ul>
              <li v-for="(category, index) in categories" :key="index">
                <nuxt-link :to="`/support/faq#${category.slug}`" :class="{'nuxt-link-active': category.active}">
                  {{category.name}}
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="column is-three-quarters">
            <faq-accordion :items="currentFaqs"></faq-accordion>
          </div>
        </div>
      </section>
    </section>
    
  </main>
</template>

<style lang="stylus">
.faq {
  background: #edf1f2
  padding :31px 0 47px 0;
  .faq-list {
    ul {
      background: #fff;
      padding: 20px 0; 
      li {
        line-height: 45px;
        padding-left: 51px;

        a {
          display: block;

          i {
            margin-right: 20px;
            vertical-align: middle;
          }

          &.nuxt-link-exact-active svg * {
            stroke: #DB683A;
          }
        }
      }
    }
  }
}

</style>

<script>
import FaqAccordion from '~/components/Accordion'
import SectionHeader from '~/components/SectionHeader'
export default {
  components: {
    FaqAccordion,SectionHeader
  },
  head() {
    return {
      title: this.$t('技术支持') +' '+ this.title
    }
  },
  computed: {
    title() {
      if (this.$route.hash) {
        let faq = this.categories.find(category => {
          return category.slug == this.$route.hash.substr(1)
        })
        return faq.name
      } else {
        return '常见问题FAQ'
      }
    },
    currentFaqs() {
      if (this.title == '常见问题FAQ') {
        return this.faqs
      } else {
        return this.faq[this.title]
      }
    }
  },
  data()  {
    return {
      faq: {},
      faqs: [],
      categories: [
        {
          name: this.$t('Cube智能家庭网关'),
          slug: 'cube',
          active: true
        },
        {
          name: this.$t('Touch智能家庭控制平板'),
          slug: 'touch'
        },
        {
          name: this.$t('智能传感器类'),
          slug: 'smart-sensor'
        },
        {
          name: this.$t('智能单火开关'),
          slug: 'smart-single-fire-switch'
        },
        {
          name: this.$t('智能零火开关'),
          slug: 'smart-zero-fire-switch'
        },
        {
          name: this.$t('智能嵌入式开关'),
          slug: 'smart-embed-switch'
        },
        {
          name: this.$t('智能灯泡/灯带'),
          slug: 'smart-bulb-colorstrip'
        },
        {
          name: this.$t('智能插座/场景面板'),
          slug: 'smart-plug-panel'
        },
        {
          name: this.$t('智能多功能警示器'),
          slug: 'smart-multi-fun-siren'
        },
        {
          name: this.$t('智能红外转换器'),
          slug: 'smart-ir-switch'
        },
        {
          name: this.$t('智能窗帘电机'),
          slug: 'fantem-curtain-controller'
        },
        {
          name: this.$t('第三方产品'),
          slug: 'third-party'
        }
      ],
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
    getFaqsByCategory(category) {
      return this.faqs.filter(element => {
        return element['category'] === category
      })
    }
  },
  async mounted() {
    let { data } = await this.$axios.get(
      'http://api.fantem.cn/wp-json/wp/v2/sp_faq?per_page=100'
    )
    this.faqs = data
    this.categories.forEach(category => {
      const faqs = this.getFaqsByCategory(category.name)
      this.$set(this.faq, category.name, faqs)
    })
  }
}
</script>