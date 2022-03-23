<template>
    <div class="perzeption-footer">
        <h2>PerZeption</h2>
        <p>
            (888) 888-8888 | help@perzeption.vision
        </p>
    </div>
</template>

<script>
export default {
    name: 'perzeption-footer'
}
</script>

<style lang="scss">
@import '../styles/_base';

.perzeption-footer {
    background-color:$perzeption-dark-bg;
    color: $perzeption-text-color;
    padding: 40px $perzeption-page-padding;
    display: inline-flex;
    align-items: center;
    gap: 50vw;
}
</style>