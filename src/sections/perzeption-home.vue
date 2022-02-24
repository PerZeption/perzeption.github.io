<template>
    <section class="perzeption-home">
        <div class="perzeption-home__content">
            <div class="perzeption-home__content--text">
                <h1>Keep an eye on your <span class="perzeption-home__vision">vision</span>.</h1>

                <p>This is a paragraph with an explanation. These sentences are short, 
                and give a brief overview. It’s good to be a description.</p>
            </div>
    </div>

        <img class="perzeption-home__illust" src="../assets/perzeption-illust.svg"/>
    </section>
</template>

<script>

export default {
    name: 'perzeption-home',
}
</script>

<style lang="scss">
@import '../styles/_base';

.perzeption-home {
    @extend %perzeption-light-page;
    display: flex;
    flex-wrap: row wrap;

    &__illust {
        position: absolute;
        right: 0;
        width: 700px;
        height: auto;
    }

    &__content {
        display: inline-block;
        width: 40vw;

        &--text {
            margin-bottom: 80px;
        }
    }

    &__vision {
        color: $perzeption-active-color;
    }
}
</style>