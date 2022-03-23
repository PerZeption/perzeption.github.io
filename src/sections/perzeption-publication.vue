<template>
    <perzeption-page>
        <section class="perzeption-publication">
            <h1>
                Publications
            </h1>

            <div>
                
            </div>
    </section>
    </perzeption-page>
</template>

<script>
import perzeptionPage from '@/components/perzeption-page';

export default {
    name: 'perzeption-publication',
    components: {
        perzeptionPage,
    }
}
</script>

<style lang="scss">
@import '../styles/_base';

.perzeption-publication {
    h1 {
        margin: unset;
    }
}
</style>