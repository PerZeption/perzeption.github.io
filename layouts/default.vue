<template>
  <v-app>
    <section class="perzeption-app">
      <perzeption-home />
    </section>
  </v-app>
</template>

<script>
import PerzeptionHome from '../pages/index.vue'
export default {
  name: 'perzeption-app',
  components: {
    PerzeptionHome
  }
}
</script>

<style lang="scss">
.perzeption-app {
  margin: 30px;
}
</style>
