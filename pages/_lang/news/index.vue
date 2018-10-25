<template>
  <main class="main">
    <section class="newsinner">
      <section-banner :banner="banner"></section-banner>
      <div class="container">
        <h2 class="caption has-text-centered">{{$t('公司动态')}}</h2>
        <div class="columns hotnews" v-if="currentNews.length>0">
          <div class="column">
            <div class="columns is-multiline">
              <div class="column is-12-tablet is-7-desktop">
                <div class="newsinner-img-wrap">
                  <div class="newsinner-img-mask">
                    <figure>
                      <div class="newsinner-img-bg">
                        <img :src="currentNews[0]['_embedded']['wp:featuredmedia'][0]['source_url']" v-if="currentNews[0]['_embedded']['wp:featuredmedia']">
                        <img src="https://picsum.photos/640/400/?random" v-else>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
              <div class="column is-12-tablet is-5-desktop center">
                <div class="content-wrap">
                  <div>
                    <p v-text="currentNews[0].title.rendered"></p>
                    <p v-html="currentNews[0]['excerpt']['rendered']"></p>
                  </div>
                  <div class="stick-dots">
                    <span @click="getCurrentNews(0)" :class="{active: currentIndex == 0}"></span>
                    <span @click="getCurrentNews(1)" :class="{active: currentIndex == 1}"></span>
                    <span @click="getCurrentNews(2)" :class="{active: currentIndex == 2}"></span>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
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
      </div>  
    </section>
  </main>
</template>
<style lang="stylus" >
.newsinner {
  background-color: #edf1f2;
  padding-bottom: 47px;

  .caption {
    font-size: 36px;
    line-height: 44px;
    margin: 20px 0 30px;
  }
  .hotnews {
  }
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
  .column{
    background-color: #fff;
    background-clip: content-box;
    border-radius: 17px;  

    a {
      display: block;
      border-radius: 5px; 
      overflow: hidden; 
      background-color: #fff;
    }
    p {
      margin: 10px 9px;
      color: #3e3a39;

      &:nth-of-type(1) {
        font-size: 18px;
        line-height: 22px; 
      }

      &:nth-of-type(2) {
        font-size: 16px;
        line-height: 20px; 
      }

      &:nth-of-type(3) {
        font-size: 12px;
      }
    }
    .newsinner-img-mask {
      padding-top: 44%;
    }
    .center {
      align-items: stretch;
    }
    .content-wrap {
      padding: 91px 25px 20px 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between; 

      @media screen and (max-width: 1280px) {
        padding: 25px 25px 20px 10px;
      }
       
      .stick-dots {
        display: flex;
        justify-content: flex-end;
        align-items: stretch; 
        span {
          cursor: pointer;
          background-color: #eaeaea;
          border-radius: 50px;
          margin: 0 6px;
          width: 12px;
          height: 12px;
          &.active {
            background-color: #e76c26;
          }
        } 
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
import SectionBanner from '~/components/SectionBanner'
export default {
  head() {
    return { title: this.$t('新闻动态') }
  },
  data() {
    return {
      news: [],
      currentPage: 1,
      pageCount: 1,
      isloading: false,
      banner: {
        backgroundimg: '/2018/10/a876975db592cb60761b6d80506c8c04.jpg',
        parallax: false,
        height: '500px'
      },
      currentIndex: 0
    }
  },
  components: {
    SectionBanner
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
  computed: {
    hotnews() {
      return this.news.slice(0,3)
    },
    currentNews() {
      return this.hotnews.slice(this.currentIndex, this.currentIndex+1)
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
    },
    getCurrentNews(val) {
      this.currentIndex = val
    }
  }
}
</script>
