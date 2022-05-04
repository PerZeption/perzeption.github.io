<template>
    <perzeption-page>
        <perzeption-demo-desc-template 
        class="perzeption-demo-acuity"
        @update="$emit('update')"
        >
            <template #title>
                How to take the Acuity  test
            </template>

            <template #subtitle>
                Select the area of the outer ring where the 
                inner ring is open. Your goal should be to get a
                ray to the center of the ring.
            </template>

            <template #button-label>
                Let's go!
            </template>
        </perzeption-demo-desc-template>
    </perzeption-page>
</template>

<script>
/**
 * The second page in the demo sequence, Acuity demo.
 */

// Components
import perzeptionPage from '@/components/perzeption-page.vue';

import perzeptionDemoDescTemplate from './templates/perzeption-demo-desc-template.vue';


export default {
    name: "perzeption-demo-acuity",
    components: {
        perzeptionDemoDescTemplate,
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