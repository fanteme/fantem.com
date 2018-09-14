<template>
  <div class="progress" :class="{active: active}">
    <div class="progress-linear">
      <div class="fill" :style="active?{ width: `${percent}%`}:''"></div>
    </div>
  </div>
</template>

<style lang="stylus">
.progress {
  position: absolute;
  left: calc(100% - 15px);
  bottom: calc(50% - 20px);
  transform: rotate(-90deg);
  transform-origin: 0% 100%;
  padding: 0 10px;
  line-height: 0;

  &-linear {
    float: left;
    display: inline-block;
    width: 40px;
    height: 4px;
    border-radius: 0;
    background: #dadbdb;
  }

  &.active {
    .fill {
      height: 100%;
      background: #ed7422;
    }
  }
}
</style>

<script>
export default {
  name: 'progressBar',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    percent: {
      type: Number,
      default: 0
    }
  }
}
</script>