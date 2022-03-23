<template>
    <div class="perzeption-navigation">
        <router-link to="/"><strong>PerZeption 👁</strong></router-link>
        <a to="/link1">Our Product</a>
        <router-link to="/publication">Our Publications</router-link>
        <a to="/link2">About</a>
        <a to="/link2">Contact</a>
    </div>
</template>

<style lang="scss">
@import '../styles/_base';

.perzeption-navigation {
    z-index: 1;
    position: sticky;
    top: 0;
    padding: 40px 60px;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    gap: 50px;
    background-color: $perzeption-dark-bg;

    a {
        color: $perzeption-text-color;
    }

    .nuxt-link-active {
        font-weight: 600;
    }
}
</style>