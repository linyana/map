<template>
    <div>
        <Nav />
        <Search />
        <Pannel />
        <Show />
    </div>
</template>

<script>
import Nav from "./components/Nav";
import Search from "./components/Search";
import Pannel from "./components/Pannel";
import Show from "./components/Show";

export default {
    components: { Nav, Search, Pannel, Show },
};
</script>


<style>
* {
    padding: 0;
    margin: 0;
}

body,html {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    background-image: url(./assets/images/map.png);
    background-size: 100 100%;
}
</style>
