<template>
  <no-ssr>
    <div class="video-player-box" 
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ready="onPlayerReady"
      @statechanged="onPlayerStateChanged($event)"
      v-video-player:myVideoPlayer="playOptions">
    </div>
  </no-ssr>
</template>

<script>
import Vue from 'vue'
import 'video.js/dist/video-js.css'
export default {
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    },
    playOptions() {
      let option = Object.assign({}, this.options)
      option.sources = option.source
      option.poster = option.source + option.poster
      return Object.assign(option, {
        fluid: true,
        playbackRates: [0.7, 1.0, 1.5, 2.0]
      })
    }
  },
  mounted() {
    if (process.browser) {
      const VueVideoPlayer = require('vue-video-player/dist/ssr')
      Vue.use(VueVideoPlayer)
    }
  },
  methods: {
    onPlayerReady(player) {},
    onPlayerPlay(player) {},
    onPlayerPause(player) {},
    onPlayerStateChanged(playerCurrentState) {}
  }
}
</script>