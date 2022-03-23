<template>
  <section id="app">

    <perzeption-navigation />

    <perzeption-home />

    <perzeption-demo />

    <perzeption-product />

    <div class="perzeption-transition">
      <img class="perzeption-transition--left" src="./assets/left_illust.svg" />
      <img class="perzeption-transition--right" src="./assets/right_illust.svg" />
    </div>

    <perzeption-about />

    <perzeption-footer />
  </section>
</template>

<script>

// Page sections
import perzeptionHome from '@/sections/perzeption-home.vue';
import perzeptionDemo from '@/sections/perzeption-demo.vue';
import perzeptionProduct from '@/sections/perzeption-product.vue';
import perzeptionAbout from '@/sections/perzeption-about.vue';


// Page components
import perzeptionNavigation from '@/components/perzeption-navigation.vue';
import perzeptionButton from '@/components/perzeption-button.vue';
import perzeptionHomeBg from '@/components/perzeption-home-bg.vue';
import perzeptionFooter from '@/components/perzeption-footer.vue';

export default {
  name: 'app',
  components: {
    perzeptionNavigation,
    perzeptionButton,
    perzeptionHomeBg,
    perzeptionFooter,
    perzeptionHome,
    perzeptionDemo,
    perzeptionProduct,
    perzeptionAbout
  }
}
</script>

<style lang="scss">
@import './styles/_base';

body { 
  background-color: $perzeption-dark-bg;

  .perzeption-transition {
    max-width: 100vw;
    height: 500px;

    &--left {
      width: 500px;
      position: absolute;
      left: 0;
    }

    &--right {
      width: 800px;
      position: absolute;
      right: 0;
    }
  }
}
</style>
