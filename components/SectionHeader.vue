<template>
  <section class="section-header" v-show="$store.state.showsupport">
    <div class="container" @mouseleave="HideHeader()">
      <div class="columns">
        <div v-for="(item, index) in secheader" :key="index" class="column is-2 has-text-centered" :class="item.class">
          <nuxt-link :to="`${baseUrl}/support/${item.link}`" :class="{'nuxt-link-active': item.active}">
            <span v-html="item.icon" class="center"></span>
            <p>{{item.title}}</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="stylus">
.section-header {
  width: 100%; 
  padding: 30px 0;
  position: fixed;
  top: 80px;
  z-index: 1; 
  background: #fff; 

  .columns {
    .column {
      &:nth-of-type(n+2) {
        border-left: 1px solid #9a9b9b;
      }
      
      a {
        display: block;

        span {
          height: 50px;
        }

        p {
          margin-top: 6px;
        }
      }

      &:first-child {
        a {
          border-left: none;
        }
      }
    }
  }
}
</style>

<script>
export default {
  props: {
    secheader: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      show: true
    }
  },
  computed: {
    baseUrl() {
      return this.$store.state.locale == this.$store.state.fallbackLocale
        ? ''
        : `/${this.$store.state.locale}`
    }
  },
  methods: {
    HideHeader() {
      this.$store.commit('HIDE_HEADER',!this.show)
    }
  }
}
</script>