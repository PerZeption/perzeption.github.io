<template>
    <div class="perzeption-navigation">
        <a to="/">Perzeption 👁</a>
        <a to="/link1">Link1</a>
        <a to="/link2">Link2</a>
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
        color: $perzeption-nav-color;
    }

    .nuxt-link-active {
        font-weight: 600;
    }
}
</style>