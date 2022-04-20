<template>
    <div 
    :class="'perzeption-button perzeption-button__' + this.type"  @click="$emit('click')">
        <slot v-if="!link"/>

            <a v-if="link"
            :href="link" target="_blank">
                <slot />
            </a>
    </div>
</template>

<script>
export default {
    name: 'perzeption-button',
    props: {
        /**
         * The URL the button will direct the user to.
         */
        link: {
            type: String,
            required: false,
            default: null,
        },
        /**
         * The type of style the button should have.
         */
        type: {
            type: String,
            required: false,
            default: "default",
        }
    }
}
</script>

<style lang="scss">
@import '../styles/_base';

.perzeption-button {
    cursor: pointer;
    max-width: fit-content;
    max-height: fit-content;
    border-radius: 10px;
    font-weight: 550;
    color: white;
    padding: 5px;

    p {
        padding: unset;
    }

    &__default {
        background-color: $perzeption-primary-purple;
    }

    &__outline {
        border: solid;
    }
}

</style>