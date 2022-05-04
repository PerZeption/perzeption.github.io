<template>
<perzeption-page>
    <section class="perzeption-demo-home">
        <div class="perzeption-demo-home__text">
            <h1>Try out our test</h1>
            <p>This short trial will show you what we’re all about. Get accurate results with just a few short questions.</p>
        </div>
        <perzeption-button type="outline" @click="$emit('update')">
                <p>Let me try it!</p>
        </perzeption-button>
    </section>
</perzeption-page>
</template>

<script>
import perzeptionButton from '@/components/perzeption-button.vue';
import perzeptionPage from '@/components/perzeption-page.vue';

export default {
    name: 'perzeption-demo-home',
    components: {
        perzeptionButton,
        perzeptionPage,
    }
}
</script>

<style lang="scss">
@import '../../styles/_base';

.perzeption-demo-home {
    padding: $perzeption-page-padding;
    height: 90vh;
    background-blend-mode: overlay, normal;
    background: no-repeat right/50% url("../../assets/perzeption-contrast.svg"),
    no-repeat right/50% url("../../assets/perzeption-eye.svg"),
    $perzeption-text-navy;

    &__text {
        margin-top: 25vh;
        margin-bottom: 100px;
        width: 38vw;

        h1 {
            margin-bottom: unset;
        }
    }
}
</style>