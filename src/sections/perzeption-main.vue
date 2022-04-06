<template>
  <section class="perzeption-main">
    <perzeption-home />

    <img class="perzeption-demo-page__asset-left" src="../assets/contrast-l.svg"/>
    <img class="perzeption-demo-page__asset-right" src="../assets/contrast-r.svg"/>
    <perzeption-demo />

    <perzeption-product />

    <perzeption-difference />

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
import perzeptionHomeBg from '@/components/perzeption-home-bg.vue';
import perzeptionFooter from '@/components/perzeption-footer.vue';
import perzeptionDifference from './perzeption-difference.vue';

export default {
  name: 'perzeption-main',
  components: {
    perzeptionHomeBg,
    perzeptionFooter,
    perzeptionHome,
    perzeptionDemo,
    perzeptionProduct,
    perzeptionAbout,
    perzeptionDifference
  }
}
</script>

<style lang="scss">
@import '../styles/_base';

.perzeption-main {
    .perzeption-demo-page {
      &__asset-left {
        mix-blend-mode: overlay;
        position: absolute;
        left: 0;
      }

      &__asset-right {
        mix-blend-mode: overlay;
        position: absolute;
        right: 0;
      }
    }
}
</style>
