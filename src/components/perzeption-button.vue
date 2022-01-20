<template>
    <a class="perzeption-button" :href="link" target="_blank">
        <slot />
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
    max-width: fit-content;
    max-height: fit-content;
    border-radius: 10px;
    font-weight: 550;
    color: white;
    padding: 20px;
}

</style>