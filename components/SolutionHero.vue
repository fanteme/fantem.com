<template>
  <section class="solution-hero">
    <div class="hero">
      <div class="hero-content center" :style="{backgroundImage: `url(${hero.bg})`}">
        <div class="container has-text-centered has-text-white">
          <p v-html="hero.svg"></p>
          <h1>
            {{ hero.title }}
          </h1>
        </div>
      </div>
    </div>
    <div class="container description">
      {{hero.description}}
    </div>
  </section>
</template>

<style lang="stylus">
.solution-hero {
  .hero {
    height: 490px;

    h1 {
      font-size: 44px;
    }

    h2 {
      font-size: 20px;
      padding: 30px 0;
    }

    &-content {
      background-position: 50% 33%;
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-size: cover;
    }

    &+.description {
      color: #3e3a39;
      line-height: 2;
      padding: 100px 0;
    }
  }
}
</style>

<script>
export default {
  props: {
    hero: {
      type: Object,
      required: true
    }
  }
}
</script>