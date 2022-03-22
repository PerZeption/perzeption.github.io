<template>
    <perzeption-page>
        <section class="perzeption-demo">
            <component :is="currentComponent()" @update="nextStep()"></component>
        </section>
    </perzeption-page>
</template>

<script>
import perzeptionButton from '@/components/perzeption-button.vue';
import perzeptionPage from '@/components/perzeption-page.vue';

import perzeptionDemoPage from './demo-pages/perzeption-demo-page.vue';
import perzeptionDemoStart from './demo-pages/perzeption-demo-start.vue';

export default {
    name: 'perzeption-demo',
    components: {
        perzeptionButton,
        perzeptionPage,
        perzeptionDemoStart,
        perzeptionDemoPage
    },
    data() {
        return {
            demoStep: 0,
        }
    },
    methods: {
        nextStep() {
            this.demoStep++;
        },

        currentComponent() {
            switch(this.demoStep) {
                case 1:
                    return "perzeptionDemoStart";
                default:
                    return "perzeptionDemoPage";
            }
        }
    }
}
</script>