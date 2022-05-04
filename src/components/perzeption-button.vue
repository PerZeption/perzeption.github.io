<template>
    <div>
        <div 
        v-if="!link"
        class="perzeption-button"
        :class="this.type ? 'perzeption-button__' + this.type : ''"  
        @click="$emit('click')">
            <slot />

        </div>

        <a v-if="link"
        class="perzeption-button"
        :class="this.type ? 'perzeption-button__' + this.type : ''"  
        :href="link" :target="this.newTab ? '_blank' : '_self'">
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
            default: "",
        },
        /**
         * If the button's link should open in a new tab.
         */
        newTab: {
            type: Boolean,
            required: false,
            default: false,
        }
    }
}
</script>

<style lang="scss">
@import '../styles/_base';

.perzeption-button {
    cursor: pointer;
    border-radius: 10px;
    font-weight: 550;
    color: white;
    display: inline-flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding: 15px 30px;

    p {
        margin: unset;
    }


    &__default {
        background-color: $perzeption-primary-purple;
    }

    &__outline {
        border: solid;

        &:hover {
            transition: background-color 1s ease-in, color 1s;
            background-color: white;
            color: $perzeption-text-navy;
        }
    }
}

</style>