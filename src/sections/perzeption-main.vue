<template>
  <section class="perzeption-main">
    <perzeption-home />

    <perzeption-demo />

    <perzeption-product />

    <perzeption-difference />

    <perzeption-about />
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
import perzeptionDifference from './perzeption-difference.vue';

export default {
  name: 'perzeption-main',
  components: {
    perzeptionHomeBg,
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
</style>
