<template>
  <main class="main products">
    <section>
      <div class="container">
        <div class="tabs is-toggle is-small is-medium">
          <ul>
            <li :class="{'is-active': isOomiProduct}" @click="switchToOomi">
              <a>
                <span class="icon">
                  <i class="fa fa-home" aria-hidden="true"></i>
                </span>
                <span>OOMI {{$t('产品')}}</span>
              </a>
            </li>
            <li :class="isOomiProduct?'':'is-active'" @click="switchToThird">
              <a>
                <span class="icon"><i class="fa fa-cubes" aria-hidden="true"></i></span>
                <span>{{$t('第三方产品')}}</span>
              </a>
            </li>
          </ul>
        </div>
        <div v-if="isOomiProduct" class="oomiProducts">
          <nav class="breadcrumb is-medium" aria-label="breadcrumbs" v-if="products.length">
            <ul>
              <li v-for="(category, index) in categories" :key="index">
                <a :href="`#${category.slug}`">{{category.name}}</a>
              </li>
            </ul>
          </nav>
          <section v-for="(category, index) in categories" :key="index">
            <div class="title" v-if="products.length" :id="category.slug">{{category.name}}</div>
            <div class="columns is-multiline">
              <div class="product-preview">
              </div>
              <div class="column is-full-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd" v-for="(product, index) in product[`${category.name}`]" :key="index">
                <div class="item" @click="previewProduct(product)">
                  <img :src="product._embedded['wp:featuredmedia'][0].source_url" v-if="product._embedded['wp:featuredmedia']">
                  <img src="https://picsum.photos/640/400/?random" v-else>
                  <p class="has-text-centered">
                    {{product.title.rendered.split(' ')[0]}}
                  </p>
                  <p class="has-text-centered">
                    {{ getName(product.title.rendered) }}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="columns is-multiline thirdProducts" v-else>
            <div class="column is-full-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd" v-for="(product, index) in thirdProducts" :key="index">
              <div class="item is-vertical-center">
               <img :src="product._embedded['wp:featuredmedia'][0].source_url" v-if="product._embedded['wp:featuredmedia']">
               <img src="https://picsum.photos/640/400/?random" v-else>
              </div>
            </div>
        </div>
      </div>
    </section>
    <section class="previewProduct">
      <div class="modal" :class="{'is-active': isActive}">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title" v-text="currentProduct.title.rendered"></p>
            <button class="delete" aria-label="close" @click="closeModal"></button>
          </header>
          <section class="modal-card-body">
            <img v-if="currentProduct.image" class="productImage" :src="`${$store.state.cdn}/${currentProduct.image}`">
            <div class="specification" v-html="currentProduct.content.rendered">
            </div>
          </section>
          <footer class="modal-card-foot">
          </footer>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="stylus">
.products {
  .tabs.is-toggle li.is-active a {
    background-color: #f79f24;
    border-color: #f79f24;
  }

  .oomiProducts {
    .breadcrumb a {
      color: #4a4a4a;
    }

    .title {
      margin-top: 5rem;
    }

    .column {
      .item {
        cursor: pointer;
      }
    }
  }

  .thirdProducts {
    .column {
      .item {
        min-height: 10.5625rem;
      }
    }
  }

  .previewProduct {
    .modal-card-body {
      .productImage {
        height: 12rem;
        box-shadow: 1px 1px 5px #ccc;
      }
    }
  }
}
</style>

<script>
export default {
  head() {
    return { title: this.$t('产品中心') }
  },
  data() {
    return {
      isActive: false,
      isOomiProduct: true,
      product: {},
      products: [],
      categories: [
        {
          name: this.$t('网关类'),
          slug: 'gateway'
        },
        {
          name: this.$t('开关类'),
          slug: 'switch'
        },
        {
          name: this.$t('传感类'),
          slug: 'sensor'
        },
        {
          name: this.$t('辅助类'),
          slug: 'auxiliary'
        }
      ],
      currentProduct: {
        title: {},
        content: {}
      },
      thirdProducts: []
    }
  },
  async mounted() {
    let { data } = await this.$axios.get(
      `${
        this.$store.state.api
      }/posts?categories=39&per_page=50&_embed&order=asc`
    )
    this.products = data
    this.categories.forEach(category => {
      const products = this.getProductsByCategory(category)
      this.$set(this.product, category.name, products)
    })
    this.initSmoothScroll()
  },
  methods: {
    getProductsByCategory(category) {
      return this.products.filter(element => {
        return element._embedded['wp:term'][0][1]['name'] === category.name
      })
    },
    initSmoothScroll() {
      new SmoothScroll('a[href*="#"]', {
        header: 'header'
      })
    },
    switchToOomi() {
      this.isOomiProduct = true
    },
    async switchToThird() {
      if (!this.thirdProducts.length) {
        let { data } = await this.$axios.get(
          `${
            this.$store.state.api
          }/posts?categories=44&per_page=40&_embed&order=asc`
        )
        this.thirdProducts = data
      }
      this.isOomiProduct = false
    },
    previewProduct(product) {
      this.currentProduct = product
      this.openModal()
    },
    openModal() {
      this.isActive = true
    },
    closeModal() {
      this.isActive = false
    },
    getName(val) {
      let name = ''
      let arryName = val.split(' ')
      for (var i = 1; i < arryName.length; i++) {
        name = name + ' ' + arryName[i]
      }
      return name
    }
  }
}
</script>
