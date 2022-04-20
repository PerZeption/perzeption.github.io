<template>
    <perzeption-page>
        <section class="perzeption-difference">
            <h1 class="perzeption-difference__title">
                The <img src="../assets/perzeption-logo.svg" /> Difference
            </h1>

            <div class="perzeption-difference__content">
                <div class="perzeption-difference__content--column">
                    <div class="perzeption-difference__content--item">
                        <img src="../assets/perzeption-duration.svg" />
                        <p>
                            Reduced test duration and administration costs for patients.
                        </p>
                    </div>
                    <div class="perzeption-difference__content--item">
                        <img src="../assets/perzeption-progression.svg" />
                        <p>
                            More frequent examination means better progression, remediation, and detection.
                        </p>
                    </div>
                    <div class="perzeption-difference__content--item">
                        <img src="../assets/perzeption-access.svg" />
                        <p>
                            Improved access to vision testing among underserved populations.
                        </p>
                    </div>
                </div>

                <div class="perzeption-difference__content--column">
                    <div class="perzeption-difference__content--item">
                        <img src="../assets/perzeption-expand.svg" />
                        <p>
                            Traditional vision testing contains 39% of the tests PerZeption offers.
                        </p>
                    </div>
                    <div class="perzeption-difference__content--item">
                        <img src="../assets/perzeption-reduced-test.svg" />
                        <p>
                            Reduced test duration and administration costs for patients.
                        </p>
                    </div>

                    <perzeption-button type="outline">
                        <span>
                            <p>
                                <strong>FDA certified</strong>
                            </p>
                            <p>Learn More</p>
                        </span>
                        <img src="../assets/perzeption-arrow.svg" />
                    </perzeption-button>
                </div>
            </div>
        </section>
    </perzeption-page>
</template>

<script>
import perzeptionPage from '@/components/perzeption-page'
import perzeptionButton from '../components/perzeption-button.vue'

export default {
    name: 'perzeption-difference',
    components: {
        perzeptionPage,
        perzeptionButton,
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
            width: 50%;
            gap: 40px;
        }

        &--item {
            display: flex;
            flex-flow: row wrap;

            img {
                width: 96px;
                margin-right: 50px;
            }

            p {
                width: 50%;
            }
        }
    }
}
</style>