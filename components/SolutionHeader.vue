<template>
  <section class="solution-header">
    <div class="container">
      <div class="columns is-mobile">
        <div class="column is-offset-one-third-desktop is-one-quarter-mobile has-text-centered">
          <nuxt-link :to="`${baseUrl}/solution/villa`" :class="{'nuxt-link-active': $route.path == '/solution'}">
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="49"><g fill="none" fill-rule="evenodd" stroke="#040000" stroke-linecap="round" stroke-linejoin="round"><path d="M11.566 3.067v15.017M4.082 27.191L26.593.246l23.869 26.209"/><path d="M7.027 47.951V33.963L27.33 11.289l20.187 22.233v14.429"/><path d="M21.988 47.951V33.374h10.568v14.577M.627 48.43h53.29"/></g></svg>
            <p>{{$t('智慧别墅')}}</p>
          </nuxt-link>
        </div>
        <div class="column is-one-quarter-mobile has-text-centered">
          <nuxt-link :to="`${baseUrl}/solution/hotel`">
            <svg xmlns="http://www.w3.org/2000/svg" width="57" height="48"><g fill="none" fill-rule="evenodd" stroke="#211613" stroke-linecap="round" stroke-linejoin="round"><path d="M6.673 46.235V4.787a3.39 3.39 0 0 1 3.39-3.389h24.801a3.389 3.389 0 0 1 3.39 3.389v41.597"/><path d="M15.462 47.039V29.7h13.257v17.397M38.7 12.123h9.273a3.389 3.389 0 0 1 3.389 3.389v30.723M.864 47.278h54.967M13.823 10.186h17.28m-17.28 9.236h17.28"/></g></svg>
            <p>{{$t('智慧酒店')}}</p>
          </nuxt-link>
        </div>
        <div class="column is-one-quarter-mobile has-text-centered">
          <nuxt-link :to="`${baseUrl}/solution/community`">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="49"><path fill="none" stroke="#211613" stroke-linecap="round" stroke-linejoin="round" d="M33.956 47.49h-22.57V3.332a2.312 2.312 0 0 1 2.311-2.313h17.946a2.312 2.312 0 0 1 2.313 2.313V47.49zm13.428 0h-13.22V20.271H44.58a2.805 2.805 0 0 1 2.805 2.805V47.49zm-46.413.166h54.105M17.608 12.97h10.124M17.609 24.255h10.124m9.46 5.477h7.593m-7.593 8.464h7.593M17.61 35.54h10.124M5.629 47.208v-7.196m3.227-5.352c0 2.908-1.445 5.265-3.227 5.265-1.782 0-3.227-2.357-3.227-5.265 0-2.908 1.445-5.265 3.227-5.265 1.782 0 3.227 2.357 3.227 5.265z"/></svg>
            <p>{{$t('智慧小区')}}</p>
          </nuxt-link>
        </div>
        <div class="column is-one-quarter-mobile has-text-centered">
          <nuxt-link :to="`${baseUrl}/solution/education`">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="49"><g fill="none" fill-rule="evenodd" stroke="#040000" stroke-linecap="round" stroke-linejoin="round"><path d="M28.5 31.489L.596 16.555 28.989 1.132l26.077 14.934z"/><path d="M11.107 22.185v18.61a6.748 6.748 0 0 0 6.748 6.749H39.91a6.748 6.748 0 0 0 6.747-6.748v-19.82m5.926-2.675v19.113"/></g></svg>
            <p>{{$t('智慧教育')}}</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="stylus">
.solution-header {
  padding: 50px 0;

  .columns {
    .column {
      a {
        padding-top: 25px;
        display: block;
        border-left: 1px solid #9a9b9b;

        &.is-active {
          color: #ef6f21;

          svg * {
            stroke: currentColor;
          }
        }

        p {
          margin-top: 15px;
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
  computed: {
    baseUrl() {
      return this.$store.state.locale == this.$store.state.fallbackLocale
        ? ''
        : `/${this.$store.state.locale}`
    }
  }
}
</script>