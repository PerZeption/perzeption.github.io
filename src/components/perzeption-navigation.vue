<template>
    <div class="perzeption-navigation">
        <router-link to="/"><img src="../assets/perzeption-logo.svg"/></router-link>
        <router-link to="/publication">Our Publications</router-link>
        <router-link to="/about-us">About Us</router-link>
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
    align-items: center;
    gap: 50px;
    background-color: $perzeption-text-navy;

    a {
        color: $perzeption-white;
    }

    img {
        height: 36px;
        width: 100%;
    }

    .nuxt-link-active {
        font-weight: 600;
    }
}
</style>