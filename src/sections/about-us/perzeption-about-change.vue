<template>
    <perzeption-page>
        <section class="perzeption-about-change">
            <h1>
                Making a change with Perzeption
            </h1>
        </section>
    </perzeption-page>
</template>

<script>
import perzeptionPage from '@/components/perzeption-page.vue'

export default {
    name: 'perzeption-about-change',
    components: {
        perzeptionPage,
    }
}
</script>

<style lang="scss">

@import '../../styles/_base';

.perzeption-about-change {
    padding: $perzeption-page-padding;
}

</style>