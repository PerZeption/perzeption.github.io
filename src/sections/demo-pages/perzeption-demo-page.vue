<template>
    <section class="perzeption-demo-page">
        <div class="perzeption-demo-page__text">
            <h1>Try out our test</h1>
            <p>This short trial will show you what we’re all about. Get accurate results with just a few short questions.</p>
            <perzeption-button class="perzeption-demo-page__button" type="outline" @click="$emit('update')">
                Let's go!
            </perzeption-button>
        </div>
    </section>
</template>

<script>
import perzeptionButton from '@/components/perzeption-button.vue';

export default {
    name: 'perzeption-demo-page',
    components: {
        perzeptionButton,
    }
}
</script>

<style lang="scss">
@import '../../styles/_base';

.perzeption-demo-page {
    padding: $perzeption-page-padding;
    height: 90vh;
    background-blend-mode: overlay, normal;
    background: no-repeat right/50% url("../../assets/perzeption-contrast.svg"),
    no-repeat right/50% url("../../assets/perzeption-eye.svg");

    &__text {
        margin-top: 25vh;
        width: 38vw;

        h1 {
            margin-bottom: unset;
        }
    }
}
</style>