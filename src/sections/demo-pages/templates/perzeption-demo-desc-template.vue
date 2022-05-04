<template>
        <section class="perzeption-demo-desc-template">
            <div class="perzeption-demo-desc-template__text">
                <h2>
                    <slot name="title" />
                </h2>
                <p>
                    <slot name="subtitle" />
                </p>

                <perzeption-button type="outline" @click="$emit('update')">
                    <p>
                        <slot name="button-label" />
                    </p>
                </perzeption-button>
            </div>
        </section>
</template>

<script>
/**
 * The template for all demo instruction pages with slots.
 */

import perzeptionButton from '@/components/perzeption-button.vue';



export default {
    name: "perzeption-demo-desc-template",
    components: {
        perzeptionButton,
    }
}
</script>

<style lang="scss">
@import '../../../styles/_base';

.perzeption-demo-desc-template {
    padding: $perzeption-page-padding;
    height: 90vh;
    display: flex;
    flex-flow: row wrap;

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