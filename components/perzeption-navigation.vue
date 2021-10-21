<template>
    <div class="perzeption-navigation">
        <NuxtLink to="/">Perzeption 👁</NuxtLink>
        <NuxtLink to="/link1">Link1</NuxtLink>
        <NuxtLink to="/link2">Link2</NuxtLink>
    </div>
</template>

<style lang="scss">
@import '../styles/_base';

.perzeption-navigation {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    max-width: 35vw;

    a {
        color: black;
    }

    .nuxt-link-active {
        font-weight: 600;
    }
}
</style>