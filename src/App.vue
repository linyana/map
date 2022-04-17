<template>
    <div>
        <Nav />
        <Search />
    </div>
</template>

<script>
import Nav from "./components/Nav";
import Search from "./components/Search";

export default {
    components: { Nav, Search },
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
