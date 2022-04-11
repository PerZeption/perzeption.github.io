<template>
    <perzeption-page>
        <section class="perzeption-publication">
            <h1>
                Publications
            </h1>

            <div class="perzeption-publication__content">
                <perzeption-expandable>
                    <template #title>
                        2022
                    </template>
                    <template #content>
                        Insert text here.
                    </template>
                </perzeption-expandable>
            </div>
        </section>
    </perzeption-page>
</template>

<script>
import perzeptionPage from '@/components/perzeption-page';
import perzeptionExpandable from '@/components/perzeption-expandable.vue';

export default {
    name: 'perzeption-publication',
    components: {
        perzeptionPage,
        perzeptionExpandable,
    }
}
</script>

<style lang="scss">
@import '../styles/_base';

.perzeption-publication {
    padding: $perzeption-page-padding;

    h1 {
        margin: unset;
    }

    &__content {
        margin-top: 50px;
    }
}
</style>