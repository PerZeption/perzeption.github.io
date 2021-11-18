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

        <swiper 
        :direction="'horizontal'" 
        :slidesPerView="3" 
        :freeMode="true" 
        :scrollbar="true" 
        :mousewheel="true" 
        class="mySwiper">
          <swiper-slide>
            Slide 1
          </swiper-slide>
        </swiper>
        </div>


        <div>
          <h2>Inform</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

    </div>

    <div>


    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import perzeptionNavigation from '../components/perzeption-navigation.vue';
import perzeptionButton from '../components/perzeption-button.vue';
import perzeptionHomeBg from '../components/perzeption-home-bg.vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
  import 'swiper/css';

// import Swiper core and required modules
import SwiperCore, {
  FreeMode,Scrollbar,Mousewheel
} from 'swiper';

// install Swiper modules
SwiperCore.use([FreeMode,Scrollbar,Mousewheel]);

export default Vue.extend({
  name: 'perzeption-home',
  components: {
    perzeptionNavigation,
    perzeptionButton,
    perzeptionHomeBg,
    Swiper,
    SwiperSlide,
  }
})
</script>

<style lang="scss">
@import '../styles/_base';

.perzeption-home {

  &__main {
      background-image: url("./assets/perzep-bg.svg");

    &--half {
      position: relative;
      background-color: white;
      color: $perzeption-text-color;
      width: 50vw;
      min-height: 100vh;
      margin: 50px 0;
      padding: 30px;
      padding-right: 100px;
      padding-left: 120px;
      z-index: 1;
    }
  }

  &__demo {
    min-height: 100vh;
    background-color: $perzeption-background-color;
  }

  &__product {
    margin: 60px;
    min-height: 100vh;
    background-color: white;
    color: $perzeption-text-color;
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
