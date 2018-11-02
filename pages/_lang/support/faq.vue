<template>
  <main class="main">
    <section class="faq">
      <section class="faq-list container">
        <div class="columns">
          <div class="column is-12 field has-addons has-addons-centered" v-if="faqs.length">
            <div class="control">
              <a class="button is-static">
                <i class="fa fa-search"></i>
              </a>
            </div>
            <div class="control">
              <input class="input searchfaq" type="text" v-model="keywords" placeholder="请输入关键字， 例如：Cube">
            </div>
          </div>
          <div class="column is-12">
            <h2 v-if="searchFaqs.length" class="title has-text-centered">搜索结果</h2>
          </div>  
        </div>
        <div class="columns">
          <div class="column is-one-quarter">
            <ul>
              <li v-for="(category, index) in categories" :key="index">
                <nuxt-link :to="`${baseUrl}/support/faq#${category.slug}`" :class="{'nuxt-link-active': category.active}">
                  {{category.title}}
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="column is-three-quarters">
            <faq-accordion v-if="searchFaqs.length" :items="searchFaqs"></faq-accordion>
            <faq-accordion v-else :items="currentFaqs"></faq-accordion>
          </div>
        </div>
      </section>
    </section>
    
  </main>
</template>

<style lang="stylus">
.faq {
  background: #edf1f2;
  padding :31px 0 47px 0;
  .searchfaq {
    width: 22rem;
  }
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
export default {
  components: {
    FaqAccordion
  },
  head() {
    return {
      title: this.$t('技术支持') +'-'+ this.title
    }
  },
  computed: {
    baseUrl() {
      return this.$store.state.locale == this.$store.state.fallbackLocale
        ? ''
        : `/${this.$store.state.locale}`
    },
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
      if (this.title == '常见问题FAQ' && this.faqs.length > 0) {
        let num , i
        for(i = 0; this.arr.length < 10; i++) {
          num = Math.floor(Math.random() * this.faqs.length)
          if(this.arr.indexOf(this.faqs[num]) == -1 ) {
            this.arr.push(this.faqs[num])
          }
        }
        return this.arr
      } else {
        return this.faq[this.title]
      }
    }
  },
  data()  {
    return {
      faq: {},
      faqs: [],
      arr: [],
      keywords: '',
      searchFaqs: [],
      categories: [
        {
          title: this.$t('Cube智能家庭网关'),
          name: 'Cube智能家庭网关',
          slug: 'cube'
        },
        {
          title: this.$t('Touch智能家庭控制平板'),
          name: 'Touch智能家庭控制平板',
          slug: 'touch'
        },
        {
          title: this.$t('智能传感器类'),
          name: '智能传感器类',
          slug: 'smart-sensor'
        },
        {
          title: this.$t('智能单火开关'),
          name: '智能单火开关',
          slug: 'smart-single-fire-switch'
        },
        {
          title: this.$t('智能零火开关'),
          name: '智能零火开关',
          slug: 'smart-zero-fire-switch'
        },
        {
          title: this.$t('智能嵌入式开关'),
          name: '智能嵌入式开关',
          slug: 'smart-embed-switch'
        },
        {
          title: this.$t('智能灯泡/灯带'),
          name: '智能灯泡/灯带',
          slug: 'smart-bulb-colorstrip'
        },
        {
          name: this.$t('智能插座/场景面板'),
          name: '智能插座/场景面板',
          slug: 'smart-plug-panel'
        },
        {
          title: this.$t('智能多功能警示器'),
          name: '智能多功能警示器',
          slug: 'smart-multi-fun-siren'
        },
        {
          title: this.$t('智能红外转换器'),
          name: '智能红外转换器',
          slug: 'smart-ir-switch'
        },
        {
          title: this.$t('智能窗帘电机'),
          name: '智能窗帘电机',
          slug: 'fantem-curtain-controller'
        },
        {
          title: this.$t('第三方产品'),
          name: '第三方产品',
          slug: 'third-party'
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
      `${this.$store.state.api}/sp_faq?per_page=100`
    )
    this.faqs = data
    this.categories.forEach(category => {
      const faqs = this.getFaqsByCategory(category.name)
      this.$set(this.faq, category.name, faqs)
    })
  },
  watch: {
    keywords: function(val) {
      this.searchFaqs = this.faqs.filter(item => {
        const title = item.title.rendered
        if (val) {
          let reg = new RegExp(val, 'i')
          if (title.search(reg) != -1) {
            return item
          }
        } else {
          return
        }
      })
    }
  }
}
</script>