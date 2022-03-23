<template>
  <perzeption-page>
    <section class="perzeption-about">
    <h1>About</h1>

    <div class="perzeption-about__people">
      <img src="../assets/peter.png" />

      <span>
        <h2>Peter Bex</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </span>
    </div>

    <div class="perzeption-about__people">
      <span>
        <h2>Jan Skerswetat</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </span>

        <img src="../assets/jan.png" />
    </div>
      </section>
  </perzeption-page>
</template>

<script>
import perzeptionPage from '@/components/perzeption-page'

export default {
    name: 'perzeption-about',
    components: {
      perzeptionPage
    }
}
</script>

<style lang="scss">
@import '../styles/_base';

.perzeption-about {
  padding: $perzeption-page-padding;
  padding-top: unset;

  &__people {
    margin: 0 5vw;
    max-width: 80vw;
    display: inline-flex;
    flex-direction: row;

    span {
      width: 50vw;

      &:nth-child(even) {
        margin-left: 200px;
      }

      &:nth-child(odd) {
        text-align: right;
        margin-right: 200px;
      }
    }
  }
}
</style>