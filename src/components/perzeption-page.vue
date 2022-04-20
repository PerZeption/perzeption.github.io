<template>
    <div class="perzeption-page" data-aos="fade-up" data-aos-duration="2000">
        <slot />
    </div>
</template>

<script>
/**
 * Page component with scroll in animation and other important every page styling
 */

export default {
    name: "perzeption-page"
}
</script>

<style lang="scss">
@import '../styles/_base';

.perzeption-page {
    min-height: $perzeption-min-page-height;
    color: $perzeption-white;
}

</style>