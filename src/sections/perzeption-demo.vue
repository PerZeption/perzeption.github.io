<template>
    <section class="perzeption-demo">
        <div class="perzeption-demo__content">
            <h1>Try out our test</h1>
            <p>This short trial will show you what we’re all about. Get accurate results with just a few short questions.</p>
            <perzeption-button type="outline" link="https://google.com">
                Let's go!
            </perzeption-button>
        </div>

        <img class="perzeption-home__illust" src="../assets/perzeption-test.svg"/>
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
    display: flex;
    flex-wrap: row wrap;
    justify-content: space-around;
}
</style>