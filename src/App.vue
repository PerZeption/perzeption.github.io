<template>
  <section id="app">
      <!-- TODO: make the navigation sticky -->
    <perzeption-navigation />

    <perzeption-home />

    <perzeption-demo />

    <perzeption-product />

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
