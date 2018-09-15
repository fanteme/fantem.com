<template>
  <section id="section-news">
    <div class="container">
      <h2 class="caption has-text-centered">{{$t('新闻动态')}}</h2>
      <ul class="columns is-wrap is-mobile">
        <span class="btn btn-prev" :title="$t('前一页')" @click="prevNews">
          <svg width="49" height="49" viewBox="0 0 49 49" xmlns="http://www.w3.org/2000/svg"><path d="M28.2 14.4c.2-.2.5-.2.7 0 .2.2.2.5 0 .7l-9.3 9.2 9.3 9.2c.2.2.2.5 0 .7-.1.1-.2.1-.4.1-.1 0-.3 0-.4-.1l-9.7-9.5c-.1-.1-.1-.2-.1-.4s.1-.3.1-.4l9.8-9.5zm-3.6-13.7c13.2 0 24 10.8 24 24s-10.8 24-24 24-24-10.8-24-24 10.7-24 24-24zm0 47c12.7 0 23-10.3 23-23s-10.3-23-23-23-23 10.3-23 23 10.3 23 23 23z" fill-rule="nonzero" fill="#878787"/></svg>
        </span>
        <li class="column is-full-mobile is-one-third-tablet" v-for="(item, index) in currentNews" :key="index">
          <nuxt-link :to="`${$store.state.locale}/news/${item.id}`">
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
            <p>{{item.date | formatDate}}</p>
            <p v-text="item.title.rendered" :title="item.title.rendered"></p>
            <p v-html="item.excerpt.rendered"></p>
          </nuxt-link>
        </li>
        <span class="btn btn-next" :title="$t('后一页')" @click="nextNews">
          <svg width="49" height="49" viewBox="0 0 49 49" xmlns="http://www.w3.org/2000/svg"><path d="M20.8 14.4c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7l9.3 9.2-9.3 9.2c-.2.2-.2.5 0 .7.1.1.2.1.4.1.1 0 .3 0 .4-.1l9.7-9.5c.1-.1.1-.2.1-.4s-.1-.3-.1-.4l-9.8-9.5zm3.6-13.7c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.8 24-24-10.7-24-24-24zm0 47c-12.7 0-23-10.3-23-23s10.3-23 23-23 23 10.3 23 23-10.3 23-23 23z" fill-rule="nonzero" fill="#878787"/></svg>
        </span>
      </ul>
      <div class="more has-text-centered">
        <nuxt-link :to="`${$store.state.locale}/news`">
          {{$t('更多')}}
          <svg width="10" height="14" viewBox="0 0 10 14" xmlns="http://www.w3.org/2000/svg"><path d="M8.9 6.6l-7.1-6.2c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7l6.6 5.8-6.6 5.8c-.2.2-.2.5 0 .7.1.1.2.2.4.2.1 0 .2 0 .3-.1l7.1-6.2c.1-.1.2-.2.2-.4l-.2-.3z" fill-rule="nonzero" fill="#EE7623"></path></svg>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<style lang="stylus">
#section-news {
  background-color: #f0f4f5;

  .caption {
    font-size: 36px;
    line-height: 44px;
    padding: 50px 0 38px 0;

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

  .newsinner-img {
    &-wrap {
      overflow: hidden;
    }

    &-mask {
      position: relative;
      padding-top: 76%;

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

  ul {
    position: relative;

    .btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      &:hover {
        cursor: pointer;
      }

      &-prev {
        left: -66px;
      }

      &-next {
        right: -66px;
      }
    }

    li {
      a {
        display: block;
        background-color: #fff;
      }

      p {
        padding: 0 18px 20px;
        font-size: 16px;
        color: #3e3a39;

        &:nth-child(2) {
          margin-top: 22px;
          font-size: 16px;
        }

        &:nth-child(3) {
          font-size: 18px;
          font-weight: bold;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }

  .more {
    padding-bottom: 22px;

    a {
      color: #231815;
      font-size: 18px;
    }
  }
}
</style>

<script>
export default {
  props: {
    news: {
      type: Array,
      default: []
    }
  },
  data: () => ({
    currentPage: 0,
    perPage: 3
  }),
  computed: {
    currentNews() {
      return this.news.slice(
        this.perPage * this.currentPage,
        this.perPage * (this.currentPage + 1)
      )
    }
  },
  filters: {
    formatDate: d => {
      const date = new Date(d)
      const month =
        date.getMonth() + 1 > 9
          ? date.getMonth() + 1
          : '0' + `${date.getMonth() + 1}`
      const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
      return date.getFullYear() + '-' + month + '-' + day
    }
  },
  methods: {
    prevNews() {
      this.currentPage--
      if (this.currentPage == -1) {
        this.currentPage = this.news.length / this.perPage - 1
      }
    },
    nextNews() {
      this.currentPage++
      if (this.currentPage == this.news.length / this.perPage) {
        this.currentPage = 0
      }
    }
  }
}
</script>


