<template>
    <div>
        <a 
        :class="'perzeption-button perzeption-button__' + this.type" 
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
            required: true,
            default: null,
        },
        /**
         * The type of style the button should have.
         */
        type: {
            type: String,
            required: true,
            default: "default",
        }
    },
}
</script>

<style lang="scss">
@import '../styles/_base';

.perzeption-button {
    max-width: fit-content;
    max-height: fit-content;
    border-radius: 10px;
    font-weight: 550;
    color: white;
    padding: 20px;

    &__default {
        background-color: $perzeption-active-color;
    }

    &__outline {
        border: 3px solid white;
    }
}

</style>