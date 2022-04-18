<template>
    <div id="map">
        <Search />
        <Pannel />
        <Show />
    </div>
</template>

<script>
import Search from "../components/Search";
import Pannel from "../components/Pannel";
import Show from "../components/Show";

export default {
    components: { Search, Pannel, Show },
};
</script>

<style scoped>
body,html {
    height: 100%;
}

#map {
    height: 100%;
    width: 100%;
    background-image: url(../assets/images/map.png);
    background-size: 100 100%;
}

</style>