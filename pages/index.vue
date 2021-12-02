<template>
  <!-- <Tutorial/> -->
  <section class="perzeption-home">
    <div class="perzeption-home__main">
      <div class="perzeption-home__main--half">
        <perzeption-navigation />
        <div class="perzeption-home__content">
          <h1>Keep an eye on your <span class="perzeption-home__vision">vision</span>.</h1>
          <p class="perzeption-home__desc">This is a paragraph with an explanation. These sentences are short, 
          and give a brief overview. It’s good to be a description.</p>

          <perzeption-button link="https://google.com">
            Call to action large button
          </perzeption-button>
        </div>
      </div>
      <!-- <perzeption-home-bg /> -->

      <div class="perzeption-home__demo">
        <h1>Try out our test</h1>
        <p>This short trial will show you what we’re all about. Get accurate results with just a few short questions.</p>
        <perzeption-button link="https://google.com">
            Let's go!
          </perzeption-button>

      </div>

    </div>

    <div class="perzeption-home__product">
      <div class="perzeption-home__product--content">
        <h1>
          Our Product
        </h1>

        <div>
          <h2>Find</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <carousel 
          navigation-enabled>
          <slide>
            <img src="../assets/acuity.png" />
          </slide>
          <slide>
            <img src="../assets/color.png" />
          </slide>
          <slide>
            <img src="../assets/contrast.png" />
          </slide>
        </carousel>
        
        </div>


        <div>
          <h2>Inform</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <carousel 
          navigation-enabled>
          <slide>
            <img src="../assets/acuity.png" />
          </slide>
          <slide>
            <img src="../assets/color.png" />
          </slide>
          <slide>
            <img src="../assets/contrast.png" />
          </slide>
        </carousel>
        </div>
      </div>
    </div>

    <div class="perzeption-home__about">
      <h1>About</h1>

      <carousel>
          <slide>
            <img src="../assets/acuity.png" />
          </slide>
          <slide>
            <img src="../assets/color.png" />
          </slide>
          <slide>
            <img src="../assets/contrast.png" />
          </slide>
        </carousel>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>

    <perzeption-footer />
  </section>
</template>

<script>
import perzeptionNavigation from '@/components/perzeption-navigation.vue';
import perzeptionButton from '@/components/perzeption-button.vue';
import perzeptionHomeBg from '@/components/perzeption-home-bg.vue';
import perzeptionFooter from '@/components/perzeption-footer.vue';
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'perzeption-home',
  components: {
    perzeptionNavigation,
    perzeptionButton,
    perzeptionHomeBg,
    perzeptionFooter,
    Carousel,
    Slide,
  }
}
</script>

<style lang="scss">
@import '../styles/_base';

.perzeption-home {

  &__main {
      background-image: url("./assets/perzep-bg.svg");
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

    &--half {
      @extend %perzeption-light-page;
      position: relative;
      width: 50vw;
      margin: 50px 0;
      padding: 30px;
      padding-right: 100px;
      padding-left: 120px;
      z-index: 1;
    }
  }

  &__demo {
    @extend %perzeption-dark-page;
  }

  &__about {
    @extend %perzeption-dark-page;
  }

  &__product {
    @extend %perzeption-light-page;
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
