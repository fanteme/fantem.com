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
              <input
                class="input searchfaq"
                type="text"
                v-model="keywords"
                placeholder="请输入关键字， 例如：Cube"
              >
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
                <nuxt-link
                  :to="`${baseUrl}/support/faq#${category.slug}`"
                  :class="{'nuxt-link-active': category.active}"
                >{{ $t(category.name) }}</nuxt-link>
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
  padding: 31px 0 47px 0;

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
      title: '常见问题_丰唐物联_OOMI',
      meta: [
        {
          name: 'keywords',
          content:
            '智能家居系统,OOMI智能家居,OOMI大宅系统,OOMI智能家居系统,丰唐物联'
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
      faqs: [],
      keywords: '',
      searchFaqs: [],
      categories: [],
      randomFaqs: []
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
        let cat = this.categories.find(category => {
          return category.slug == this.$route.hash.substr(1)
        })
        if (cat) {
          return cat.name
        }
      } else {
        return this.$t('常见问题')
      }
    },
    currentFaqs() {
      if (this.title == this.$t('常见问题') && this.faqs.length > 0) {
        let num, i
        for (i = 0; this.randomFaqs.length < 10; i++) {
          num = Math.floor(Math.random() * this.faqs.length)
          if (this.randomFaqs.indexOf(this.faqs[num]) == -1) {
            this.randomFaqs.push(this.faqs[num])
          }
        }
        return this.randomFaqs
      } else {
        const cat = this.categories.find(category => {
          return category.name == this.title
        })
        if (cat) {
          return cat.faqs
        }
        return []
      }
    }
  },
  watch: {
    keywords(val) {
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
  },
  methods: {
    async getFaqs() {
      const { data } = await this.$axios.get(
        `${this.$store.state.api}/faq?per_page=100`
      )
      this.faqs = data
    },
    async getFaqCategories() {
      let { data } = await this.$axios.get(
        `${this.$store.state.api}/faq_cat?per_page=20`
      )
      this.categories = data.sort((x, y) =>
        Number(x.description) > Number(y.description) ? 1 : -1
      )
    },
    getFaqsByCategory(category) {
      return this.faqs.filter(element => {
        return element['faq_cat'].includes(category.id)
      })
    }
  },
  async created() {
    await this.getFaqCategories()
    await this.getFaqs()
    this.categories.forEach(category => {
      const faqs = this.getFaqsByCategory(category)
      this.$set(category, 'faqs', faqs)
    })
  }
}
</script>