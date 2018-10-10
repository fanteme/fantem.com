<template>
  <section class="application-header">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-2 is-2 has-text-centered">
          <nuxt-link :to="`${baseUrl}/application/security`" :class="{'nuxt-link-active': /\/application\/?$/.test($route.path)}">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="40" viewBox="0 0 36 40">
              <g fill="none" fill-rule="evenodd" stroke="#040000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".781" transform="translate(1)">
                <path d="M17.31.39C17.31.39 11.67 7.72.39 6L.39 24.81C.39 24.81.69 31.62 8.85 35.58 12.91 37.58 15.13 37.45 17.31 39.39M17.31.39C17.31.39 23 7.72 34.23 6L34.23 24.81C34.23 24.81 33.92 31.62 25.77 35.58 21.71 37.58 19.48 37.45 17.31 39.39"/>
                <path d="M8.57,19.2 L6.39,19.2 L17.31,10.3 L21.24,13.59 L24.23,16.05 L28.22,19.2 L26.05,19.2 M26.05,19.2 L26.05,27.55 C25.9818681,28.1506486 25.453088,28.5912987 24.85,28.55 L9.77,28.55 C9.16519834,28.5966294 8.63319762,28.1532955 8.57,27.55 L8.57,19.2"/>
              </g>
            </svg>
            <p>{{$t('安防模式')}}</p>
          </nuxt-link>
        </div>
        <div class="column is-2 has-text-centered">
          <nuxt-link :to="`${baseUrl}/application/ent`">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="41" viewBox="0 0 56 41">
              <g fill="none" fill-rule="evenodd" stroke="#040000" stroke-linecap="round" stroke-linejoin="round" transform="translate(0 1)">
                <path d="M43.7708,27.7072 L43.6078,27.7842 L43.3868,27.8892 C42.5588,28.2832 41.6728,28.4822 40.7538,28.4822 C38.7628,28.4822 36.9428,27.5732 35.7618,25.9882 L27.8568,15.4642 L20.0188,25.9892 C19.0178,27.3202 17.5538,28.1862 15.8988,28.4242 C15.6218,28.4632 15.3298,28.4822 15.0088,28.4822 C14.0968,28.4822 13.2138,28.2832 12.3848,27.8892 L12.0008,27.7072"/>
                <path d="M10.6182 26.6796L10.3382 26.3616C9.5382 25.4496 9.0222 24.3246 8.8462 23.1086 8.6182 21.4616 9.0432 19.8146 10.0432 18.4736L20.7852 4.1796 20.7952 4.1696 20.8342 4.1136 23.2962.8406C23.4602.6246 23.7112.4996 23.9852.4996 24.1712.4996 24.3492.5586 24.4982.6696L27.8862 3.2206 31.2762.6676C31.4222.5586 31.6002.4996 31.7862.4996 32.0612.4996 32.3122.6246 32.4772.8416L34.9592 4.1436 34.9852 4.1696 45.7292 18.4756C46.7282 19.8146 47.1532 21.4616 46.9252 23.1116 46.7502 24.3246 46.2332 25.4496 45.4332 26.3616L45.1542 26.6796M10.5723 26.6274L12.0913 27.7504M11.3096 27.1935L4.2246 36.6665M.5001 34.0407L7.7231 39.4837M44.5343 27.2099L51.6183 36.6829M55.3438 34.0568L48.1208 39.4998M43.7708 27.7072C43.7708 27.7072 44.2598 27.4932 45.1538 26.6792"/>
              </g>
            </svg>
            <p>{{$t('娱乐模式')}}</p>
          </nuxt-link>
        </div>
        <div class="column is-2 has-text-centered">
          <nuxt-link :to="`${baseUrl}/application/eco`">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="38" viewBox="0 0 40 38">
              <g fill="none" fill-rule="evenodd" stroke="#040000" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7.3991,27.4684 C7.3991,27.4684 15.5741,33.5544 25.7191,27.1784 C36.4051,20.4634 38.8221,0.6894 38.8221,0.6894 C38.8221,0.6894 16.0371,-0.7016 7.9211,4.0514 C2.8411,7.0264 -2.1669,14.6004 3.7471,24.6864"/>
                <path d="M23.8642,11.1229 C23.8642,11.1229 14.5142,10.7649 4.0942,25.1499 C0.4422,30.1929 0.50014503,37.4959 0.50014503,37.4959"/>
              </g>
            </svg>
            <p>{{$t('节能模式')}}</p>
          </nuxt-link>
        </div>
        <div class="column is-2 has-text-centered">
          <nuxt-link :to="`${baseUrl}/application/health`">
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="41" viewBox="0 0 43 41">
              <g fill="none" fill-rule="evenodd" stroke="#221714" transform="translate(0 1)">
                <path stroke-linecap="round" stroke-linejoin="round" d="M30.789,0.4999 C29.05,0.4999 27.3,0.9349 25.73,1.7659 C24.177,2.5819 22.784,3.7909 21.702,5.2539 L21.494,5.5349 L21.286,5.2539 C20.203,3.7909 18.81,2.5819 17.259,1.7659 C15.689,0.9349 13.94,0.4999 12.198,0.4999 C5.747,0.4999 0.5,6.2479 0.5,13.3129 C0.5,17.5409 2.4,20.5199 3.925,22.9159 C8.39,29.9199 19.638,38.6529 20.116,39.0199 C20.522,39.3339 20.999,39.4999 21.493,39.4999 C21.989,39.4999 22.466,39.3339 22.871,39.0199 C23.347,38.6529 34.587,29.9359 39.061,22.9159 C40.588,20.5199 42.486,17.5409 42.486,13.3129 C42.486,6.2479 37.24,0.4999 30.789,0.4999 Z"/>
                <polyline points="8.912 21.662 13.125 21.608 17.899 12.224 23.469 26.555 28.685 21.662 34.077 21.662"/>
              </g>
            </svg>
            <p>{{$t('健康模式')}}</p>
          </nuxt-link>
        </div>
        <div class="column is-2 has-text-centered">
          <nuxt-link :to="`${baseUrl}/application/scene`">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="40" viewBox="0 0 48 40">
              <g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <polygon stroke="#040000" points="30.661 23.887 20.354 31.167 20.354 23.887 20.354 16.608"/>
                <g stroke="#221714">
                  <polyline points="8.486 16.608 8.486 30.502 8.486 31.047 8.486 39.495 20.057 39.495 19.755 39.5 27.751 39.5 28.053 39.495 39.627 39.495 39.627 16.842"/>
                  <polyline points="47.61 23.084 24.058 .5 .5 23.084"/>
                </g>
              </g>
            </svg>
            <p>{{$t('场景模式')}}</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="stylus">
.application-header {
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