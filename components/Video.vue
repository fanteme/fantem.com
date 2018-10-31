<template>
  <div class="video-player-box" 
    @play="onPlayerPlay($event)"
    @pause="onPlayerPause($event)"
    @ready="onPlayerReady"
    @statechanged="onPlayerStateChanged($event)"
    v-video-player:myVideoPlayer="playOptions">
  </div>
</template>

<style lang="stylus">
.video-player-box
  .vjs-big-play-button
    top: 50%
    left: 50%
    margin-left: -1.5em
    margin-top: -1em
    background-color: rgba(0,0,0,.45)
    font-size: 3.5em
    height: 2em!important
    line-height: 2em!important
    margin-top: -1em!important
</style>

<script>
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
  methods: {
    onPlayerReady(player) {},
    onPlayerPlay(player) {},
    onPlayerPause(player) {},
    onPlayerStateChanged(playerCurrentState) {}
  }
}
</script>