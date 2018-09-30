<template>
  <section class="application-hero">
    <div class="hero">
      <div class="hero-content center" :style="{backgroundImage: `url(${hero.bg})`}">
        <div class="container has-text-centered has-text-white">
          <h1>
            {{ hero.title }}
          </h1>
          <h2>
            {{ hero.subtitle }}
          </h2>
          <p>
            {{ hero.detail }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="stylus">
.application-hero {
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

