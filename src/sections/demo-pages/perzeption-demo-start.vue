<template>
    <section>
        <div class="perzeption-demo__content">
            <h1>Try out our test</h1>
            <p>This short trial will show you what we’re all about. Get accurate results with just a few short questions.</p>
            <perzeption-button type="outline" link="https://google.com">
                Let's go!
            </perzeption-button>
        </div>

        <img class="perzeption-home__illust" src="../../assets/acuity.gif"/>

                <perzeption-button type="outline" @click="this.demoStep = this.demoStep + 1">
            Let's go!
        </perzeption-button>
    </section>
</template>

<script>
export default {
    name: ""
}
</script>