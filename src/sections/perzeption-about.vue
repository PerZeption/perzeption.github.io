<template>

    <section class="perzeption-about">

      <perzeption-about-title />

      <perzeption-about-mission />

      <perzeption-about-founders />

      <perzeption-about-change />

    </section>

</template>

<script>
import perzeptionPage from '@/components/perzeption-page'
import perzeptionButton from '@/components/perzeption-button'
import perzeptionAboutTitle from './about-us/perzeption-about-title.vue'
import perzeptionAboutMission from './about-us/perzeption-about-mission.vue'
import perzeptionAboutFounders from './about-us/perzeption-about-founders.vue'
import perzeptionAboutChange from './about-us/perzeption-about-change.vue'

export default {
    name: 'perzeption-about',
    components: {
      perzeptionPage,
      perzeptionButton,
      perzeptionAboutTitle,
      perzeptionAboutMission,
      perzeptionAboutFounders,
      perzeptionAboutChange,
    }
}
</script>

<style lang="scss">
@import '../styles/_base';

</style>