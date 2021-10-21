<template>
    <a :href="link" target="_blank">
        <div class="perzeption-button">
            <div class="perzeption-button__content">
                <slot />
            </div>
        </div>
    </a>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
name: 'perzeption-button',
props: {
    link: {
        type: String,
        required: true,
        default: null,
    }
}
})

</script>

<style lang="scss">
@import '../styles/_base';

.perzeption-button {
    background-color: $perzeption-active-color;
    color: white;
    font-weight: 550;
    max-width: fit-content;
    border-radius: 10px;

    &__content {
        padding: 20px;
    }
}

</style>