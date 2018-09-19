<template>
  <main class="main">
    <section class="hero">
      <div class="hero-content center" :style="{backgroundImage: `url(${$store.state.cdn}/fantem/news-banner.jpg)`}">
        <div class="container-fluid has-text-centered">
          <h1 class="title">
            {{$t('合作共赢 协同智能')}}
          </h1>
          <h2 class="subtitle">
            {{$t('虚位以待 丰唐物联期待与您携手')}}
          </h2>
        </div>
      </div>
    </section>
    <section class="container newsinner">
      <ul class="columns is-multiline is-mobile">
        <li class="column is-full-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd" v-for="(item, index) in news" :key="index">
          <nuxt-link :to="`/news/${item.id}`">
            <div class="newsinner-img-wrap">
              <div class="newsinner-img-mask">
                <figure>
                  <div class="newsinner-img-bg">
                    <img :src="item._embedded['wp:featuredmedia'][0].source_url" v-if="item._embedded['wp:featuredmedia']">
                    <img src="https://picsum.photos/640/400/?random" v-else>
                  </div>
                </figure>
              </div>
            </div>
            <p v-text="item.title.rendered"></p>
            <p v-html="item.excerpt.rendered"></p>
            <p>{{getDate(item.date)}}</p>
          </nuxt-link>
        </li>
      </ul>
      <nav class="pagination" role="navigation" aria-label="pagination">
        <nuxt-link class="pagination-previous button" :title="$t('上一页')" :to="currentPage <= 1 ? `?page=1`:`?page=${Number(currentPage)-1}`" :disabled="currentPage-1?false:true">{{$t('上一页')}}</nuxt-link>
        <nuxt-link class="pagination-next button" :title="$t('下一页')" :to="currentPage >= pageCount-1 ? `?page=${pageCount}`:`?page=${Number(currentPage)+1}`" :disabled="pageCount-currentPage?false:true">{{$t('下一页')}}</nuxt-link>
        <ul class="pagination-list">
          <li v-for="(i,index) in pageCount" :key="index">
            <nuxt-link class="pagination-link button" :class="isloading && currentPage == i? 'is-loading' : ''" :to="`?page=${i}`" v-text="i"></nuxt-link>
          </li>
        </ul>
      </nav>
    </section>
  </main>
</template>
<style lang="stylus" >
.newsinner {
  margin-top: 30px;

  &-img {
    &-wrap {
      overflow: hidden;
    }

    &-mask {
      position: relative;
      padding-top: 62%;

      figure {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
      }
    }

    &-bg {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      img {
        cursor: initial;
        transition: all 0.5s;
        transform: scale(1.5);

        &:hover {
          transform: scale(2);
        }
      }
    }
  }

  ul li {
    p {
      margin: 10px 0;
      color: #333;

      &:nth-child(2) {
        font-size: 18px;
      }

      &:nth-child(3) {
        font-size: 16px;
        color: #666;
      }

      &:nth-child(4) {
        font-size: 14px;
        color: #888;
      }
    }
  }

  .pagination-list {
    li {
      .pagination-link {
        &:focus {
          border-color: #f79f24;
        }

        &.nuxt-link-exact-active {
          background-color: #f79f24;
          border-color: #f79f24;
          color: #fff;
        }
      }

      &:nth-child(1) {
        .pagination-link:not(.nuxt-link-active) {
          background-color: #f79f24;
          border-color: #f79f24;
          color: #fff;
        }
      }
    }
  }

  .pagination-next, .pagination-previous {
    &:focus {
      border-color: #f79f24;
    }
  }

  .button {
    &:focus {
      &:not(:active) {
        box-shadow: none;
      }
    }
  }
}
</style>

<script>
export default {
  head() {
    return { title: this.$t('新闻动态') }
  },
  data() {
    return {
      news: [],
      currentPage: 1,
      pageCount: 1,
      isloading: false
    }
  },
  watch: {
    $route: async function(val) {
      this.isloading = true
      if (typeof val.query.page === 'undefined') {
        let { headers, data } = await this.$axios.get(
          `${
            this.$store.state.api
          }/posts?categories=news&per_page=12&page=1&_embed`
        )
        this.news = data
        this.currentPage = 1
        this.isloading = false
      } else {
        this.isloading = true
        this.currentPage = Number(val.query.page)
        let { headers, data } = await this.$axios.get(
          `${this.$store.state.api}/posts?categories=news&per_page=12&page=${
            val.query.page
          }&_embed`
        )
        this.news = data
        this.isloading = false
      }
    }
  },
  async mounted() {
    if (typeof location.search.split('=')[1] === 'undefined') {
      let { headers, data } = await this.$axios.get(
        `${
          this.$store.state.api
        }/posts?categories=news&per_page=12&page=1&_embed`
      )
      this.news = data
      this.pageCount = Number(headers['x-wp-totalpages'])
    } else {
      let { headers, data } = await this.$axios.get(
        `${this.$store.state.api}/posts?categories=news&per_page=12&page=${
          location.search.split('=')[1]
        }&_embed`
      )
      this.currentPage = location.search.split('=')[1]
      this.news = data
      this.pageCount = Number(headers['x-wp-totalpages'])
    }
  },
  methods: {
    getDate(val) {
      const date = new Date(val)
      const month =
        date.getMonth() + 1 > 9
          ? date.getMonth() + 1
          : '0' + `${date.getMonth() + 1}`
      const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
      return date.getFullYear() + '-' + month + '-' + day
    }
  }
}
</script>
