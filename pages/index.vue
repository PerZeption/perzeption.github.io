<template>
  <!-- <Tutorial/> -->
  <section class="perzeption-home">

    <div class="perzeption-home__main">
      <perzeption-navigation />

      <div class="perzeption-navigation__content">
        <div class="perzeption-home__content--text">
          <h1>Keep an eye on your <span class="perzeption-home__vision">vision</span>.</h1>
          <p class="perzeption-home__desc">This is a paragraph with an explanation. These sentences are short, 
          and give a brief overview. It’s good to be a description.</p>

          <perzeption-button link="https://google.com">
            Call to action large button
          </perzeption-button>
        </div>

        <img class="perzeption-home__content--illust" src="../assets/perzeption-illust.svg"/>
      </div>
    </div>

      <div class="perzeption-home__demo">
        <h1>Try out our test</h1>
        <p>This short trial will show you what we’re all about. Get accurate results with just a few short questions.</p>
        <perzeption-button link="https://google.com">
            Let's go!
          </perzeption-button>

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

    <swiper class="swiper" :options="loopSwiper">
      <swiper-slide>
        <img src="../assets/acuity.png" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/color.png" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/contrast.png" />
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

    <div class="perzeption-home__about">
      <h1>About</h1>

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
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

import perzeptionNavigation from '@/components/perzeption-navigation.vue';
import perzeptionButton from '@/components/perzeption-button.vue';
import perzeptionHomeBg from '@/components/perzeption-home-bg.vue';
import perzeptionFooter from '@/components/perzeption-footer.vue';


export default {
  name: 'perzeption-home',
  components: {
    perzeptionNavigation,
    perzeptionButton,
    perzeptionHomeBg,
    perzeptionFooter,
    Swiper, 
    SwiperSlide,
  },
  data() {
      return {
        loopSwiper: {
          slidesPerView: 'auto',
          spaceBetween: 50,
          grabCursor: true,
          mousewheel: true,
          loop: true
        }
      }
    }
}
</script>

<style lang="scss">
@import '../styles/_base';

.perzeption-home {
  .swiper-slide {
    width: 30vw;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }


  &__main {
    @extend %fade-down-in-fast;
    @extend %perzeption-light-page;
  }

  &__content {
    min-width: 95vw;
    display: flex;
    flex-wrap: row wrap;
    justify-content: space-around;

      &--text {
        display: inline-block;
        width: 40vw;
      }

      &--illust {
        width: 500px;
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

  &__vision {
    color: $perzeption-active-color;
  }

  &__desc {
    margin-bottom: 80px;
  }
}

</style>
