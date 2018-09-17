<template>
  <div class="agile" :class="{'agile--fade': settings.fade}">
    <div class="agile__list">
      <div class="agile__track" :style="{width: width.track + 'px', transform: 'translate(-' + transform + 'px)', transition: 'transform ' + settings.timing + ' ' + transitionDelay + 'ms'}">
        <slot></slot>
      </div>
      <div class="agile__indicate is-hidden-touch">
        <div class="container agile__indicate__wrap">
          <div class="columns has-text-centered">
            <div class="item column" v-for="(slide, index) in slides" :key="index" :class="{'active': index==currentSlide}" @mouseover="selectSlide(index)">
              <div class="number-container" v-html="slide.icon"></div>
              <h3 v-text="slide.title"></h3>
              <progress-bar :percent="percent" :active="index==currentSlide"></progress-bar>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import progressBar from '~/components/Progress.vue'
export default {
  name: 'agile',
  components: {
    progressBar
  },
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    slides: {
      type: Array,
      default: []
    },
    autoplaySpeed: {
      type: Number,
      default: 5000
    },
    fade: {
      type: Boolean,
      default: true
    },
    infinite: {
      type: Boolean,
      default: true
    },
    mobileFirst: {
      type: Boolean,
      default: true
    },
    options: {
      type: Object,
      default: function() {
        return null
      }
    },
    pauseOnHover: {
      type: Boolean,
      default: false
    },
    responsive: {
      type: Object,
      default: function() {
        return null
      }
    },
    speed: {
      type: Number,
      default: 800
    },
    timing: {
      type: String,
      default: 'ease-in-out' // linear, ease-in, ease-out, ease-in-out
    }
  },
  data() {
    return {
      el: {
        list: null,
        track: null,
        slides: null
      },
      slidesCount: 0,
      autoplayStatus: false,
      autoplayTimeout: null,
      allSlidesCount: 0,
      currentSlide: 0,
      elapsed: 0,
      interval: 0,
      step: 50,
      pauseDuration: 2000,
      mouseDown: false,
      dragStartX: 0,
      dragStaryY: 0,
      dragDistance: 0,
      swipeDistance: 50,
      transform: 0,
      transitionDelay: 0,
      width: {
        document: 0,
        container: 0,
        slide: 0,
        track: 0
      },
      slidesToShow: 1,
      defaultSettings: {
        autoplay: this.autoplay,
        autoplaySpeed: this.autoplaySpeed,
        fade: this.fade,
        infinite: this.infinite,
        mobileFirst: this.mobileFirst,
        pauseOnHover: this.pauseOnHover,
        responsive: this.responsive,
        speed: this.speed,
        timing: this.timing
      },
      settings: {}
    }
  },

  beforeMount() {
    // Read settings from options object
    if (this.options) {
      for (let key in this.options) {
        this.defaultSettings[key] = this.options[key]
      }
    }

    // Sort breakpoints
    if (this.defaultSettings.responsive) {
      this.defaultSettings.responsive.sort(this.compare)
    }

    // Set first load settings
    Object.assign(this.settings, this.defaultSettings)
  },

  mounted() {
    // Prepare list
    this.el.list = this.$el.getElementsByClassName('agile__list')[0]

    // Prepare slides
    this.el.slides = this.$el.getElementsByClassName('agile__track')[0].children
    this.slidesCount = this.el.slides.length

    for (let i = 0; i < this.slidesCount; ++i) {
      this.el.slides[i].classList.add('agile__slide')

      // Prepare slides for fade mode
      if (this.settings.fade) {
        this.el.slides[i].style.transition =
          'opacity ' + this.timing + ' ' + this.speed + 'ms'
      }
    }

    // Prepare track
    this.el.track = this.$el.getElementsByClassName('agile__track')[0]

    // Windows resize listener
    window.addEventListener('resize', this.getWidth)

    // Get width on start
    this.getWidth()

    // Mouse and touch events
    if ('ontouchstart' in window) {
      this.el.track.addEventListener('touchstart', this.handleMouseDown)
      this.el.track.addEventListener('touchend', this.handleMouseUp)
      this.el.track.addEventListener('touchmove', this.handleMouseMove)
    } else {
      this.el.track.addEventListener('mousedown', this.handleMouseDown)
      this.el.track.addEventListener('mouseup', this.handleMouseUp)
      this.el.track.addEventListener('mousemove', this.handleMouseMove)
    }
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.getWidth)

    if ('ontouchstart' in window) {
      this.el.track.removeEventListener('touchstart', this.handleMouseDown)
      this.el.track.removeEventListener('touchend', this.handleMouseUp)
      this.el.track.removeEventListener('touchmove', this.handleMouseMove)
    } else {
      this.el.track.removeEventListener('mousedown', this.handleMouseDown)
      this.el.track.removeEventListener('mouseup', this.handleMouseUp)
      this.el.track.removeEventListener('mousemove', this.handleMouseMove)
    }

    this.disableAutoplayMode()
  },
  computed: {
    percent() {
      if (this.autoplay) {
        return Math.min(
          Math.floor(100 * this.elapsed / this.autoplaySpeed),
          100
        )
      } else {
        return 100
      }
    }
  },
  methods: {
    getWidth() {
      this.width = {
        document:
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth,
        container: this.el.list.clientWidth,
        slide: this.el.list.clientWidth / this.slidesToShow
      }
    },

    compare(a, b) {
      if (a.breakpoint < b.breakpoint) {
        return this.defaultSettings.mobileFirst ? -1 : 1
      } else if (a.breakpoint > b.breakpoint) {
        return this.defaultSettings.mobileFirst ? 1 : -1
      } else {
        return 0
      }
    },

    handleMouseDown(e) {
      if (!e.touches) {
        e.preventDefault()
      }

      this.mouseDown = true
      this.dragStartX =
        'ontouchstart' in window ? e.touches[0].clientX : e.clientX
      this.dragStartY =
        'ontouchstart' in window ? e.touches[0].clientY : e.clientY
    },

    handleMouseMove(e) {
      let positionX =
        'ontouchstart' in window ? e.touches[0].clientX : e.clientX
      let positionY =
        'ontouchstart' in window ? e.touches[0].clientY : e.clientY

      let dragDistanceX = Math.abs(positionX - this.dragStartX)
      let dragDistanceY = Math.abs(positionY - this.dragStartY)

      if (dragDistanceX > 3 * dragDistanceY) {
        this.dragDistance = positionX - this.dragStartX
        this.disableScroll()
      }
    },

    handleMouseUp() {
      this.mouseDown = false
      this.enableScroll()
    },

    enableInfiniteMode() {
      if (
        !this.settings.fade &&
        !this.el.list.getElementsByClassName('agile__slide--cloned')[0]
      ) {
        let firstSlide = this.el.track.firstChild.cloneNode(true)
        let lastSlide = this.el.track.lastChild.cloneNode(true)

        firstSlide.classList.add('agile__slide--cloned')
        lastSlide.classList.add('agile__slide--cloned')

        this.el.track.insertBefore(lastSlide, this.el.track.firstChild)
        this.el.track.appendChild(firstSlide)
      }

      this.countSlides()
    },

    disableInfiniteMode() {
      let clonedSlides = this.el.list.getElementsByClassName(
        'agile__slide--cloned'
      )

      while (clonedSlides[0]) {
        clonedSlides[0].parentNode.removeChild(clonedSlides[0])
      }

      this.countSlides()
    },

    enableAutoplayMode() {
      // Protection against contradictory settings
      if (this.settings.autoplay) {
        this.settings.infinite = true
      }

      // Autoplay
      if (this.settings.pauseOnHover) {
        this.el.track.addEventListener('mouseover', this.stopAutoplay)
        this.el.track.addEventListener('mouseout', this.startAutoplay)
      }

      this.autoplayStatus = true
      this.startAutoplay()
    },

    disableAutoplayMode() {
      if (this.settings.pauseOnHover) {
        this.el.track.removeEventListener('mouseover', this.stopAutoplay)
        this.el.track.removeEventListener('mouseout', this.startAutoplay)
      }

      this.autoplayStatus = false
      this.stopAutoplay()
    },

    countSlides() {
      if (this.settings.infinite && !this.settings.fade) {
        this.allSlidesCount = this.slidesCount + 2
      } else {
        this.allSlidesCount = this.slidesCount
      }
    },

    disableScroll() {
      document.ontouchmove = function(e) {
        e.preventDefault()
      }
    },

    enableScroll() {
      document.ontouchmove = function(e) {
        return true
      }
    },

    addActiveClass(i) {
      this.el.slides[i].classList.add('agile__slide--active')
    },
    startAutoplay() {
      this.interval = setInterval(this.playing, this.step)
    },
    stopAutoplay() {
      clearInterval(this.interval)
    },
    playing() {
      this.elapsed += this.step
      if (this.elapsed === this.autoplaySpeed + this.pauseDuration) {
        this.elapsed = 0
        this.setSlide(this.currentSlide + 1)
        if (this.currentSlide === this.slidesCount.length) {
          this.setSlide(0)
        }
      }
    },
    resetPlay() {
      clearInterval(this.interval)
      this.elapsed = 0
      this.autoplaySpeed = 5000
      this.startAutoplay()
    },
    selectSlide(n) {
      this.elapsed = 0
      this.setSlide(n)
    },
    setSlide(n, transition = true) {
      if (this.settings.fade) {
        // Disable transition for initial slide
        if (transition === false) {
          this.el.slides[n].style.transition = '0ms'

          setTimeout(() => {
            this.el.slides[n].style.transition =
              'opacity ' + this.timing + ' ' + this.speed + 'ms'
          }, 10)
        }

        for (let i = 0; i < this.allSlidesCount; ++i) {
          this.el.slides[i].classList.remove('agile__slide--expiring')
        }

        if (this.settings.infinite && n < 0) {
          n = this.slidesCount - 1
        } else if (n >= this.slidesCount) {
          n = 0
        }

        // Set current slide as expiring
        let e = this.currentSlide
        this.el.slides[e].classList.add('agile__slide--expiring')

        setTimeout(() => {
          this.el.slides[e].classList.remove('agile__slide--expiring')
        }, this.settings.speed)

        this.transform = 0
      } else {
        this.transform = n * this.width.slide
      }

      for (let i = 0; i < this.allSlidesCount; ++i) {
        this.el.slides[i].classList.remove('agile__slide--active')
      }

      if (this.settings.infinite && !this.settings.fade) {
        this.transform += this.width.slide
        this.addActiveClass(n + 1)
      } else {
        this.addActiveClass(n)
      }

      if (!transition) {
        this.transitionDelay = 0
      } else {
        this.transitionDelay = this.speed
      }

      if (this.settings.infinite && n < 0) {
        this.currentSlide = this.slidesCount - 1

        setTimeout(() => {
          this.setSlide(this.slidesCount - 1, false)
        }, this.speed)
      } else if (this.settings.infinite && n >= this.slidesCount) {
        this.currentSlide = 0

        setTimeout(() => {
          this.setSlide(0, false)
        }, this.settings.speed)
      } else {
        this.currentSlide = n
      }
    },

    nextSlide() {
      this.elapsed = 0
      this.setSlide(this.currentSlide + 1)
    },
    prevSlide() {
      this.elapsed = 0
      this.setSlide(this.currentSlide - 1)
    }
  },
  watch: {
    width() {
      // Responsive
      if (this.defaultSettings.responsive) {
        let responsiveSettings = {}
        Object.assign(responsiveSettings, this.defaultSettings)

        responsiveSettings.responsive.forEach(responsive => {
          if (this.defaultSettings.mobileFirst) {
            if (responsive.breakpoint < this.width.document) {
              for (let key in responsive.settings) {
                responsiveSettings[key] = responsive.settings[key]
              }
            }
          } else {
            if (responsive.breakpoint > this.width.document) {
              for (let key in responsive.settings) {
                responsiveSettings[key] = responsive.settings[key]
              }
            }
          }
        })

        Object.assign(this.settings, responsiveSettings)
      }

      // Check infinity mode status and enable/disable
      if (this.settings.infinite) {
        this.enableInfiniteMode()
      } else {
        this.disableInfiniteMode()
      }

      // Check autoplay mode status and enable/disable
      if (this.settings.autoplay && !this.autoplayStatus) {
        this.enableAutoplayMode()
      }

      if (!this.settings.autoplay && this.autoplayStatus) {
        this.disableAutoplayMode()
      }

      // Actions on document resize
      for (let i = 0; i < this.allSlidesCount; ++i) {
        this.el.slides[i].style.width = this.width.container + 'px'

        // Prepare slides for fade mode
        if (this.settings.fade) {
          this.el.slides[i].style.transform =
            'translate(-' + i * this.width.slide + 'px)'
        }
      }

      // Prepare track
      this.width.track = this.width.container * this.allSlidesCount
      this.setSlide(this.currentSlide, false, false)
    },

    dragDistance() {
      if (!this.mouseDown) {
        return
      }

      if (this.dragDistance > this.swipeDistance) {
        if (!this.settings.infinite && this.currentSlide === 0) {
          return
        }

        this.prevSlide()
        this.handleMouseUp()
      }

      if (this.dragDistance < -1 * this.swipeDistance) {
        if (
          !this.settings.infinite &&
          this.currentSlide === this.slidesCount - 1
        ) {
          return
        }

        this.nextSlide()
        this.handleMouseUp()
      }
    }
  }
}
</script>

<style lang="stylus">
.agile {
  &, * {
    &:focus, &:active {
      outline: none;
    }
  }

  &__list {
    display: block;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  &__track {
    align-items: center;
    display: flex;
    justify-content: flex-start;
  }

  &__indicate {
    background: #f0f4f5;
    height: 90px;

    &__wrap {
      position: absolute;
      left: 50%;
      bottom: 11px;
      transform: translateX(-50%);
      background: rgb(255, 255, 255) none repeat scroll 0% 0%;
      z-index: 1;
      box-shadow: 0 5px 12px -8px;

      .item {
        position: relative;
        padding: 65px 45px 25px;

        .number-container {
          position: relative;
          height: 23.5px;
          font-size: 0px;

          svg {
            position: absolute;
            left: 50%;
            height: 47px;
            transform: translateX(-50%) translateY(0px);
            transition: all 0.3s linear 0s;

            path {
              transition: all 0.3s linear 0s;
            }
          }
        }

        h3 {
          position: relative;
          padding-top: 23.5px;
          font-size: 20px;
          color: #3e3a39;
          background: rgb(255, 255, 255) none repeat scroll 0% 0%;
          z-index: 1;
        }

        &.active svg {
          transform: translateX(-50%) translateY(-23px);

          path {
            fill: #ed7422;
          }
        }
      }
    }
  }

  &__slide {
    display: block;

    .agile--fade & {
      opacity: 0;
      position: relative;
      z-index: 0;

      &--active {
        opacity: 1;
        z-index: 2;
      }

      &--expiring {
        opacity: 1;
        transition-duration: 0s;
        z-index: 1;
      }
    }
  }
}
</style>
