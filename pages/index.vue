<template>
  <!-- <Tutorial/> -->
  <section class="perzeption-home">
    <div class="perzeption-home__main">
      <perzeption-navigation />
      <div class="perzeption-home__content">
        <h1>Keep an eye on your <span class="perzeption-home__vision">vision</span>.</h1>
        <p class="perzeption-home__desc">This is a paragraph with an explanation. These sentences are short, 
        and give a brief overview. It’s good to be a description.</p>

        <perzeption-button link="https://google.com">
          Call to action large button
        </perzeption-button>
      </div>
      <!-- <perzeption-home-bg /> -->
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import perzeptionNavigation from '../components/perzeption-navigation.vue';
import perzeptionButton from '../components/perzeption-button.vue';
import perzeptionHomeBg from '../components/perzeption-home-bg.vue';

export default Vue.extend({
  name: 'perzeption-home',
  components: {
    perzeptionNavigation,
    perzeptionButton,
    perzeptionHomeBg
  }
})
</script>

<style lang="scss">
@import '../styles/_base';

.perzeption-home {
  min-height: 95vh;
  color: $perzeption-text-color;
  background-image: url("./assets/perzep-bg.svg");

  &__main {
    position: relative;
    background-color: $perzeption-background-color;
    width: 50vw;
    min-height: 95vh;
    margin: 50px 50px 50px 0;
    padding: 30px;
    padding-right: 100px;
    padding-left: 120px;
    z-index: 1;
  }

  &__content {
    @extend %fade-down-in-fast;
    margin-top: 120px;
    width: 38vw;
  }

  &__vision {
    color: $perzeption-active-color;
  }

  &__desc {
    margin-bottom: 80px;
  }
}

</style>
