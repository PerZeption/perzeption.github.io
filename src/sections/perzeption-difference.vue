<template>
  <perzeption-page>
    <section class="perzeption-difference">
        <h1 class="perzeption-difference__title">
            The <img src="../assets/perzeption-logo.svg" /> Difference
        </h1>

        <div class="perzeption-difference__content">
            <div class="perzeption-difference__content--column">

            </div>

            <div class="perzeption-difference__content--column">
                
            </div>
        </div>
    </section>
  </perzeption-page>
</template>

<script>
import perzeptionPage from '@/components/perzeption-page'

export default {
    name: 'perzeption-difference',
    components: {
        perzeptionPage
    }
}
</script>

<style lang="scss">
@import '../styles/_base';

.perzeption-difference {
    margin: 0 80px;

    &__title {
        font-weight: 200;
        display: flex;
        justify-items: flex-start;
        align-items: center;

        img {
            height: 96px;
            padding: 0 30px;
        }
    }

    &__content {
        display: inline-flex;
        flex-flow: row wrap;

        &--column {
            display: flex;
            flex-flow: column wrap;
        }
    }
}
</style>