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
    background-color:$perzeption-text-navy;
    color: $perzeption-white;
    padding: 40px $perzeption-page-padding;
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
        margin-left: auto;
    }
}
</style>