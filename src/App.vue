<template>
    <div>
        <Nav />
        <Search />
        <Pannel />
    </div>
</template>

<script>
import Nav from "./components/Nav";
import Search from "./components/Search";
import Pannel from "./components/Pannel"

export default {
    components: { Nav, Search, Pannel },
};
</script>


<style>
* {
    padding: 0;
    margin: 0;
}

body {
    background-image: url(./assets/images/map.png);
    background-size: 100 100%;
}
</style>
