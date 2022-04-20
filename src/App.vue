<template>
  <section id="app">
    <perzeption-navigation />
    <router-view />
    <perzeption-footer />
  </section>
</template>

<script>
import perzeptionNavigation from '@/components/perzeption-navigation.vue';
import perzeptionFooter from './components/perzeption-footer.vue';

export default {
  name: 'app',
  components: {
    perzeptionNavigation,
    perzeptionFooter
  }
}
</script>

<style lang="scss">
@import './styles/_base';

body { 
  background-color: $perzeption-text-navy;
}
</style>
