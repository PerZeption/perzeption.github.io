<template>
    <perzeption-page>
        <section class="perzeption-about-title">
            <h1>
            Bringing virtual vision testing to eye care providers and beyond
            </h1>

            <perzeption-button class="perzeption-about-title__button">
                <p>Learn more about us</p>
            </perzeption-button>
        </section>
    </perzeption-page>
</template>

<script>
import perzeptionPage from '@/components/perzeption-page'
import perzeptionButton from '@/components/perzeption-button';


export default {
    name: 'perzeption-about-title',
    components: {
        perzeptionPage,
        perzeptionButton
    }
}
</script>

<style lang="scss">
@import '../../styles/_base';

.perzeption-about-title {
    padding: $perzeption-page-padding;
    padding-bottom: unset;
    height: 95vh;
    background: no-repeat right url("../../assets/perzeption-about-us-title.svg");
}

</style>