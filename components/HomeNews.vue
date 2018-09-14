<template>
  <section id="section-news">
    <div class="container">
      <ul class="columns is-wrap is-mobile">
        <span class="prev-btn">
          <svg width="49" height="49" viewBox="0 0 49 49" xmlns="http://www.w3.org/2000/svg"><path d="M28.2 14.4c.2-.2.5-.2.7 0 .2.2.2.5 0 .7l-9.3 9.2 9.3 9.2c.2.2.2.5 0 .7-.1.1-.2.1-.4.1-.1 0-.3 0-.4-.1l-9.7-9.5c-.1-.1-.1-.2-.1-.4s.1-.3.1-.4l9.8-9.5zm-3.6-13.7c13.2 0 24 10.8 24 24s-10.8 24-24 24-24-10.8-24-24 10.7-24 24-24zm0 47c12.7 0 23-10.3 23-23s-10.3-23-23-23-23 10.3-23 23 10.3 23 23 23z" fill-rule="nonzero" fill="#878787"/></svg>
        </span>
        <li class="column is-full-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen" v-for="(item, index) in news" :key="index">
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
            <p v-text="item.title.rendered"></p>
            <p v-html="item.excerpt.rendered"></p>
          </nuxt-link>
        </li>
        <span class="next-btn">
          <svg width="49" height="49" viewBox="0 0 49 49" xmlns="http://www.w3.org/2000/svg"><path d="M20.8 14.4c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7l9.3 9.2-9.3 9.2c-.2.2-.2.5 0 .7.1.1.2.1.4.1.1 0 .3 0 .4-.1l9.7-9.5c.1-.1.1-.2.1-.4s-.1-.3-.1-.4l-9.8-9.5zm3.6-13.7c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.8 24-24-10.7-24-24-24zm0 47c-12.7 0-23-10.3-23-23s10.3-23 23-23 23 10.3 23 23-10.3 23-23 23z" fill-rule="nonzero" fill="#878787"/></svg>
        </span>
      </ul>
    </div>
  </section>
</template>

<style lang="stylus">
#section-news {
  background-color: #f0f4f5;

  .newsinner-img {
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

  ul {
    position: relative;

    .prev-btn {
      position: absolute;
      left: -66px;
      top: 50%;
      transform: translateY(-50%);
    }

    .next-btn {
      position: absolute;
      right: -66px;
      top: 50%;
      transform: translateY(-50%);
    }

    li {
      p {
        margin: 10px 0;
        font-size: 16px;
        color: #3e3a39;

        &:nth-child(2) {
          font-size: 16px;
        }

        &:nth-child(3) {
          font-size: 18px;
          font-weight: bold;
        }
      }
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
  }
}
</script>


