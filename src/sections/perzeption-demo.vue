<template>
    <section class="perzeption-demo" id="demo">
        <component 
        :is="currentComponent()" 
        @back="prevStep()" 
        @update="nextStep()" />
    </section>
</template>

<script>
/**
 * The second section on the landing page.
 * Will contain the different states of the demo section (e..a Acuity, Color Match, etc.)
 * Different sections for this page can be found in `./demo-pages`
 */

// Components
import perzeptionButton from '@/components/perzeption-button.vue';

// Sections
import perzeptionDemoHome from './demo-pages/perzeption-demo-home.vue';
import perzeptionDemoAcuity from './demo-pages/perzeption-demo-acuity.vue';
import perzeptionDemoAcuityTest from './demo-pages/perzeption-demo-acuity-test.vue';

export default {
    name: 'perzeption-demo',
    components: {
        perzeptionButton,
        perzeptionDemoHome,
        perzeptionDemoAcuity,
        perzeptionDemoAcuityTest,
        
    },
    data() {
        return {
            demoStep: 0,
        }
    },
    methods: {
        /**
         * Decrements the step counter to return to the previous state
         */
        prevStep() {
            this.demoStep--;
        },

        /**
         * Increments the step counter to proceed to the next state
         */
        nextStep() {
            this.demoStep++;
        },

        /**
         * Indicates which component (within `./demo-page`)
         * should be displayed depending on `demoStep`
         */
        currentComponent() {
            switch(this.demoStep) {
                case 1:
                    return "perzeptionDemoAcuity";
                case 2:
                    return "perzeptionDemoAcuityTest";
                default:
                    return "perzeptionDemoHome";
            }
        }
    }
}
</script>