<template>
    <perzeption-page>
        <perzeption-demo-test-template 
        class="perzeption-demo-acuity-test"
        @back="$emit('back')"
        @update="$emit('update')"
        >
            <template #title>
                Acuity
            </template>

            <template #subtitle>
                Select the area of the outer ring where the 
                inner ring is open. Your goal should be to get a
                ray to the center of the ring.
            </template>
        </perzeption-demo-test-template>
    </perzeption-page>
</template>

<script>
/**
 * The second page in the demo sequence, Acuity demo.
 */

// Components
import perzeptionPage from '@/components/perzeption-page.vue';

import perzeptionDemoTestTemplate from './templates/perzeption-demo-test-template.vue';


export default {
    name: "perzeption-demo-acuity",
    components: {
        perzeptionDemoTestTemplate,
        perzeptionPage,
    }
}
</script>

<style lang="scss">
@import '../../styles/_base';

.perzeption-demo-acuity {
    background: no-repeat right/50% url("../../assets/acuity.gif");
}
</style>