<template>
    <section class="perzeption-product">
        <div class="perzeption-product__content">
            <div>
                <h1>
                    Our Product
                </h1>
            </div>

            <div class="perzeption-product__features">
                <swiper class="swiper" 
                :options="swiperOption"
                @click="nextSlide()">
                    <swiper-slide>
                    <img src="../assets/acuity.png" />
                    </swiper-slide>
                    <swiper-slide>
                    <img src="../assets/color.png" />
                    </swiper-slide>
                    <swiper-slide>
                    <img src="../assets/contrast.png" />
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>

                <div v-if="currSlide == 0">
                    <h2>Find 1</h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div v-if="currSlide == 1">
                    <h2>Find 2</h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div v-if="currSlide == 2">
                    <h2>Find 3</h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
    name: 'perzeption-product',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            currSlide: 0,
            swiperOption: {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
        }
    },
    methods: {
        /**
         * Sets the current index to the index of the slide in the gallery
         */
        nextSlide() {
            this.currSlide += 1;
            if (this.currSlide >= 3)
                this.currSlide = 0;
        }
    }

}
</script>

<style lang="scss">
@import '../styles/_base';

.perzeption-product {
    @extend %perzeption-light-page;
    margin-bottom: 40px;

    &__content {
        display: flex;
    }

    &__features {
        background-color: $perzeption-card-bg;
        width: 500px;
    }

    .swiper-slide {
        img {
            z-index: -1;
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>