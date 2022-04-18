<template>
    <div id="app">
        <Nav />
        <router-view></router-view>
    </div>
</template>

<script>
import Nav from "./components/Nav";

export default {
    components: { Nav },
};
</script>


<style>
* {
    padding: 0;
    margin: 0;
}

body,
html {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
}

#app {
    height: calc(100% - 60px);
}
</style>
