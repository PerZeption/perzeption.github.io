<template>
        <section class="perzeption-demo-page">
            <img class="perzeption-demo-page__asset-left" src="../../assets/contrast-l.svg"/>
            <img class="perzeption-demo-page__asset-right" src="../../assets/contrast-r.svg"/>
                <h1>Try out our test</h1>
                <p>This short trial will show you what we’re all about. Get accurate results with just a few short questions.</p>
                <perzeption-button class="perzeption-demo-page__button" type="outline" @click="$emit('update')">
                    Let's go!
                </perzeption-button>
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
    text-align: center;
    display: flex;
    flex-flow: column;

    &__asset-left {
        mix-blend-mode: overlay;
        position: absolute;
        left: 0;
    }

    &__asset-right {
        mix-blend-mode: overlay;
        position: absolute;
        right: 0;
    }

    &__button {
        display: block;
        margin: 0 auto;
    }
}
</style>