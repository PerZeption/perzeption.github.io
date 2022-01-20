<template>
    <section class="perzeption-demo">
        <h1>Try out our test</h1>
        <p>This short trial will show you what we’re all about. Get accurate results with just a few short questions.</p>
        <perzeption-button link="https://google.com">
            Let's go!
        </perzeption-button>
    </section>
</template>

<script>
import perzeptionButton from '@/components/perzeption-button.vue';

export default {
    name: 'perzeption-demo',
    components: {
        perzeptionButton,
    }
}
</script>

<style lang="scss">
@import '../styles/_base';

.perzeption-demo {
    @extend %perzeption-dark-page;
}
</style>