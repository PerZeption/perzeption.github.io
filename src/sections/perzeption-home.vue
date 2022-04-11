<template>
    <perzeption-page>
        <section class="perzeption-home">
            <div class="perzeption-home__content">
                <h1>Keep an eye on your <span class="perzeption-home__vision">vision</span></h1>

                <p>This is a paragraph with an explanation. These sentences are short, 
                and give a brief overview. It’s good to be a description.</p>
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
    }

    &__vision {
        color: $perzeption-active-color;
    }
}
</style>