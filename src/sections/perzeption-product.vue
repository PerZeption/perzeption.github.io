<template>
    <section class="perzeption-product">
        <div class="perzeption-product--content">
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
            loopSwiper: {
                slidesPerView: 'auto',
                spaceBetween: 50,
                grabCursor: true,
                mousewheel: true,
                loop: true
            }
        }
    },

}
</script>

<style lang="scss">
@import '../styles/_base';

.perzeption-product {
    @extend %perzeption-light-page;
    margin-bottom: 40px;

    .swiper-slide {
    width: 30vw;
        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>