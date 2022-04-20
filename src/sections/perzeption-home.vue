<template>
    <perzeption-page>
        <section class="perzeption-home">
            <div class="perzeption-home__content">

                <div class="perzeption-home__content--title">
                    <h1>Keep an eye on your <span class="perzeption-home__vision">vision</span></h1>

                    <p><strong>Bringing virtual vision testing to eyecare providers and beyond...</strong></p>
                </div>

                <p>PerZeption aims to make vision tests accessible to everyone. Our tests are self-administrable, rapid, and meaningful. Take our exam preview appointment-free to learn more about your eyes. </p>
            </div>
        </section>
    </perzeption-page>
</template>

<script>
import perzeptionPage from '@/components/perzeption-page.vue'

export default {
    name: 'perzeption-home',
    components: {
        perzeptionPage,
    }
}
</script>

<style lang="scss">
@import '../styles/_base';

.perzeption-home {
    padding: $perzeption-page-padding;
    background: no-repeat center/100% url("../assets/perzeption-home-bg.svg");

    &__illust {
        position: absolute;
        top: 0;
        right: 0;
        width: 800px;
        height: auto;
    }

    &__content {
        display: block;
        margin: 0 auto;
        text-align: center;
        width: 600px;

        &--title {
            margin-bottom: 80px;

            h1 {
                margin-bottom: unset;
            }
        }

    }

    &__vision {
        color: $perzeption-primary-purple;
    }
}
</style>