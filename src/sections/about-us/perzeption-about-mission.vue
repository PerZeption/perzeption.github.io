<template>
    <perzeption-page>
        <section class="perzeption-about-mission">
            <div class="perzeption-about-mission__text">
                <h2>
                <span class="perzeption-about-mission__text--blue">Our mission</span> is to do something while ensuring another thing and continuing our promise to someone.
                </h2>

                <p>
                This is where we will describe how this will happen. Some of this will be our current progress, such as our ability to do practical user testing and ensure the wellbeing of others. This is our promise. Now we shift to talking about what we want to do in the future. 
                </p>

                <p>
                This could be making our product more accessible, whether through expanding our audience or through making our product easier to use. We love to help people. It’s who we are. This will end off with a little bit more text to really ensure that everyone understands our message
                </p>
            </div>
        </section>
    </perzeption-page>
</template>

<script>
import perzeptionPage from '@/components/perzeption-page.vue'


export default {
    name: 'perzeption-about-mission',
    components: {
        perzeptionPage,

    }
}
</script>

<style lang="scss">
@import '../../styles/_base';

.perzeption-about-mission {
    padding: $perzeption-page-padding;
    padding-top: unset;
    height: 95vh;
    background: no-repeat right url("../../assets/perzeption-about-mission.svg"),
        $perzeption-background-blue;

    &__text {
        width: 45vw;
        padding-top: 20vh;

        &--blue {
            color: $perzeption-illustration-blue;
        }
    }
}

</style>