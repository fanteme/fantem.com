<template>
  <div class="progress" :class="{active: active}">
    <div class="progress-linear" v-if="type=='linear'">
      <div class="fill" :style="active?{ width: `${percent}%`}:''"></div>
    </div>
    <div class="progress-circle" v-if="type=='circle'">
      <svg :width="radius" :height="radius" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradientBase">
            <stop id="stop2" offset="1" stop-color="#f79f24" />
          </linearGradient>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1" xlink:href="#gradientBase" gradientTransform="rotate(-40)" />
        </defs>
        <circle class="progress-background" r="6" cx="8" cy="8" fill="transparent" />
        <circle class="progress-bar" r="6" cx="8" cy="8" fill="transparent" :stroke-dasharray="dashArray" :stroke-dashoffset="dashOffset"/>
      </svg>
    </div>
  </div>
</template>

<style lang="stylus">
.progress {
    position: relative;
    padding: 0 10px;
    line-height: 0;

    &-linear {
        float: left;
        display: inline-block;
        width: 40px;
        height: 4px;
        border-radius: 0;
        background: rgba(255, 255, 255, 0.9);
    }

    &-circle {
        circle {
            stroke-width: 2px;
            stroke: #999;
        }
    }

    &.active {
        .fill {
            height: 100%;
            background: #f26f21;
        }

        .progress-circle {
            text-align: center;

            circle {
                stroke-width: 2px;
                transform-origin: center;

                &.progress-background {
                    stroke: #999;
                }

                &.progress-bar {
                    transform: rotate(-90deg);
                    stroke: url('#gradient');
                }
            }
        }
    }
}
</style>

<script>
export default {
  name: 'progressBar',
  props: {
    type: {
      type: String,
      default: 'linear'
    },
    active: {
      type: Boolean,
      default: false
    },
    radius: {
      type: Number,
      default: 16
    },
    percent: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      dashArray: Math.PI * this.radius
    }
  },
  computed: {
    dashOffset() {
      return (1 - this.percent / 100) * this.dashArray
    }
  }
}
</script>