<template>
    <perzeption-page>
        <section class="perzeption-demo-test-template">
            <div class="perzeption-demo-test-template__row">
                <perzeption-button @click="$emit('back')">
                    <img class="perzeption-demo-test-template__help" src="../../../assets/perzeption-help.svg" />
                </perzeption-button>
            </div>


            <div class="perzeption0-demo-test-template__content">
                <div class="perzeption-demo-test-template__text">
                    <h2>
                        <slot name="title" />
                    </h2>
                    <p>
                        <slot name="subtitle" />
                    </p>
                </div>

                <div class="perzeption-demo-test-template__test">
                    <!-- the test will go here -->
                </div>
            </div>

            <div class="perzeption-demo-test-template__row">
                <perzeption-button @click="$emit('update')">
                    <p>
                        Try the next test
                    </p>
                    <img class="perzeption-demo-test-template__arrow" src="../../../assets/perzeption-right-arrow.svg" />
                </perzeption-button>
            </div>
        </section>
    </perzeption-page>
</template>

<script>
import perzeptionButton from '@/components/perzeption-button.vue'

export default {
    name: 'perzeption-demo-test-template',
    components: {
        perzeptionButton,
    }
}
</script>

<style lang="scss">
@import '../../../styles/_base';

.perzeption-demo-test-template {
    padding: $perzeption-page-padding;
    height: 90vh;

    &__text {
        margin-top: 25vh;
        margin-bottom: 100px;
        width: 38vw;

        h1 {
            margin-bottom: unset;
        }
    }

    &__content {
        display: flex;
        flex-flow: row wrap;
    }

    &__row {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

    }

    &__help {
        width: 50px;
    }

    &__arrow {
        width: 50px;
        margin-left: 30px;
    }
}
</style>
