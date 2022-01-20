<template>
    <section class="perzeption-home">
        <div class="perzeption-home__text">
        <h1>Keep an eye on your <span class="perzeption-home__vision">vision</span>.</h1>
        <p class="perzeption-home__desc">This is a paragraph with an explanation. These sentences are short, 
        and give a brief overview. It’s good to be a description.</p>

        <perzeption-button link="https://google.com">
        Call to action large button
        </perzeption-button>
    </div>

        <img class="perzeption-home__illust" src="../assets/perzeption-illust.svg"/>
    </section>
</template>

<script>
import perzeptionButton from '@/components/perzeption-button.vue';

export default {
    name: 'perzeption-home',
    components: {
        perzeptionButton,
    }
}
</script>

<style lang="scss">
@import '../styles/_base';

.perzeption-home {
    min-width: 95vw;
    min-height: 95vh;
    display: flex;
    flex-wrap: row wrap;
    justify-content: space-around;

    &__vision {
    color: $perzeption-active-color;
    }

    &__text {
    display: inline-block;
    width: 40vw;
    }
}
</style>