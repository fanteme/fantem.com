<template>
  <section class="faq-accordion">
    <div class="faq-accordion-wrapper">
      <transition name="accordion-fade-slide" mode="out-in">
        <div class="accordion">
          <div
            class="accordion__item"
            v-for="(item, i) in items"
            :key="`accordion-item-${i}`"
          >
            <div class="accordion__title" @click="makeActive(i)">
              <p class="accordion__title-text">{{ item.title.rendered }}</p>
              <button :class="generateButtonClasses(i)"></button>
            </div>
              <collapse-transition>
                <div class="accordion__value_wrap" v-if="i === activeQuestionIndex">
                  <p class="accordion__value" v-html="item.content.rendered">
                  </p>
                </div>
              </collapse-transition>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import { CollapseTransition } from 'vue2-transitions'
export default {
  name: 'Accordion',
  components: {
    CollapseTransition
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    }
  },
  data: () => ({
    activeQuestionIndex: null
  }),
  methods: {
    makeActive(itemIndex) {
      this.activeQuestionIndex === itemIndex
        ? (this.activeQuestionIndex = null)
        : (this.activeQuestionIndex = itemIndex)
    },
    generateButtonClasses(buttonIndex) {
      return [
        'accordion__toggle-button',
        this.activeQuestionIndex === buttonIndex
          ? 'accordion__toggle-button_active'
          : null
      ]
    }
  }
}
</script>

<style lang="stylus">
ol{
  li{
    margin-left: 18px
  }
}

$active-color = #f79f24;
$border-color = #dfdfdf;

button {
  border: none;
  background: none;
  outline: none;
}

.faq-accordion {
  padding: 15px 0;
  background: #fff;
}

.accordion-fade-slide {
  &-enter-active, &-leave-active {
    transition: all 0.3s;
  }

  &-enter {
    transform: translateY(-25px);
    opacity: 0;
  }

  &-leave-to {
    transform: translateY(25px);
    opacity: 0;
  }
}

.accordion {

  &__item {
   

    &:last-child {
      border-bottom: none;
    }
  }

  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5px 15px 9px;
    margin: 0 28px; 
    border-bottom: 1px solid $border-color;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: $active-color;

      .accordion__toggle-button {
        &::before, &::after {
          background: $active-color;
        }
      }
    }

    &-text {
      margin-right: 10px;
    }
  }
  &__value_wrap {
    background: #f7f7f7;
    padding: 20px 28px; 
  }
  &__value {
    padding: 0 10px 0px 10px;
    font-size: 14px;
    
  }
  &__toggle-button {
    position: relative;
    width: 16px;
    height: 16px;
    transition: all 0.3s;
    transform-origin: 50% 50%;
    padding-left: 16px;
    cursor: pointer;

    &_active {
      transform: rotate(45deg);
    }

    &::before, &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      transition: all 0.3s;
      background: black;
    }

    &::before {
      transform: rotate(90deg);
    }
  }
}
</style>