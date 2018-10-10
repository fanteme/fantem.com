<template>
  <section class="application-hero">
    <div class="hero">
      <div class="hero-content center" :style="{backgroundImage: `url(${hero.bg})`}">
        <div class="container">
          <div class="columns">
            <div class="column" :class="[hero.isnum, hero.isoffset]">
              <h1 :class="[hero.titalign, hero.titcolor]">
                {{ hero.title }}
              </h1>
              <h2 :class="[hero.subalign, hero.subcolor]">
                {{ hero.subtitle }}
              </h2>
              <p :class="[hero.detalign, hero.detcolor]">
                {{ hero.detail }}
              </p>
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

      .dark {
        color: #231815
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

