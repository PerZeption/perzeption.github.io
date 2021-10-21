<template>
  <!-- <Tutorial/> -->
  <section class="perxeption-home">
    <div class="perzeption-home__main">
      <perzeption-navigation />
      <h1>Keep an eye on your <span class="perzeption-home__vision">vision</span>.</h1>
      <p>This is a paragraph with an explanation. These sentences are short, 
      and give a brief overview. It’s good to be a description.</p>

      <perzeption-button link="https://google.com">
        Call to action large button
      </perzeption-button>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import perzeptionNavigation from '../components/perzeption-navigation.vue';
import perzeptionButton from '../components/perzeption-button.vue';

export default Vue.extend({
  name: 'perzeption-home',
  components: {
    perzeptionNavigation,
    perzeptionButton
  }
})
</script>

<style lang="scss">
@import '../styles/_base';

.perzeption-home {

  &__main {
    @extend %fade-down-in-fast;
    background-color: white;
    margin: 50px 50px;
    max-width: 50vw;
  }

  &__vision {
    color: $perzeption-active-color;
  }
}

</style>
