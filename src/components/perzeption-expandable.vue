<template>
    <div class="perzeption-expandable" @click="expand()">
        <div class="perzeption-expandable__row">
            <h2 class="perzeption-expandable__title">
                <slot name="title" />
            </h2>
            <img 
            class="perzeption-expandable__arrow"
            :class="isExpanded ? 'perzeption-expandable__arrow--expanded' :''" 
            src="../assets/perzeption-arrow.svg"/>
        </div>


        <div v-if="isExpanded" class="perzeption-expandable__content">
            <p data-aos="fade" data-aos-easing="ease-in">
                <slot name="content" />
            </p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'perzeption-expandable',
    data() {
        return {
            isExpanded: false,
        }
    },
    methods: {
        expand() {
            this.isExpanded = !this.isExpanded;
        }
    }

}
</script>

<style lang="scss">
@import '../styles/_base';

.perzeption-expandable {
    background-color: $perzeption-background-blue;
    cursor: pointer;
    padding: 50px;
    width: 90%;
    border-radius: 25px;
    overflow: hidden;

    &__row {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
    }

    &__title {
        font-size: 36pt;
        margin: unset;
    }

    &__arrow {
        width: 80px;
        margin-left: auto;

        &--expanded {
            transform: rotate(180deg);
        }
    }
}

</style>