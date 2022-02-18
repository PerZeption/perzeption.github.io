<template>
    <div class="perzeption-navigation">
        <a to="/"><strong>Perzeption 👁</strong></a>
        <a to="/link1">Our Publications</a>
        <a to="/link2">About</a>
        <a to="/link2">Contact</a>
    </div>
</template>

<style lang="scss">
@import '../styles/_base';

.perzeption-navigation {
    margin-left: 60px;
    margin-top: 40px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    max-width: 60vw;

    a {
        color: $perzeption-text-color;
    }

    .nuxt-link-active {
        font-weight: 600;
    }
}
</style>