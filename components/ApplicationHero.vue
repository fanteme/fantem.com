<template>
  <section class="application-hero">
    <div class="hero">
      <div class="hero-content center" :style="{backgroundImage: `url(${hero.bg})`}">
        <div class="container">
          <div class="columns">
            <div class="column" :class="hero.align">
              <img :src="hero.icon">
              <h1 :class="hero.titcolor">{{ hero.title }}</h1>
              <h2 :class="hero.subcolor">{{ hero.subtitle }}</h2>
              <p :class="hero.detcolor">{{ hero.detail }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="stylus">
.application-hero {
  .hero {
    height: 720px;

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

      p {
        margin: 0 auto;
        max-width: 800px;
      }

      .dark {
        color: #231815;
      }
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

