<template>
  <section class="perzeption-main">
    <perzeption-home />

    <perzeption-demo />

    <perzeption-product />

    <perzeption-difference />

    <perzeption-founders />

  </section>
</template>

<script>
/**
 * The landing page for the PerZeption website
 * which contains the different sections of content.
 */

// Page sections
import perzeptionHome from '@/sections/perzeption-home.vue';
import perzeptionDemo from '@/sections/perzeption-demo.vue';
import perzeptionProduct from '@/sections/perzeption-product.vue';


// Page components
import perzeptionHomeBg from '@/components/perzeption-home-bg.vue';
import perzeptionDifference from './perzeption-difference.vue';
import perzeptionFounders from './perzeption-founders.vue';

export default {
  name: 'perzeption-main',
  components: {
    perzeptionHomeBg,
    perzeptionHome,
    perzeptionDemo,
    perzeptionProduct,
    perzeptionDifference,
    perzeptionFounders,
  }
}
</script>

<style lang="scss">
@import '../styles/_base';
</style>
