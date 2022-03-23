<template>
  <section id="app">
    <perzeption-navigation />
    <router-view />
  </section>
</template>

<script>
import perzeptionNavigation from '@/components/perzeption-navigation.vue';

export default {
  name: 'app',
  components: {
    perzeptionNavigation
  }
}
</script>

<style lang="scss">
@import './styles/_base';

body { 
  background-color: $perzeption-dark-bg;
}
</style>
