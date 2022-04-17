<template>
    <div id="search">
        <input type="text" id="search_input" />
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#search {
    position: absolute;
    left: 20px;
    top: 80px;
    width: 280px;
    border: 2px solid #0a8dfc;
}

input#search_input {
    width: 280px;
    height: 40px;
    opacity: 0.5;
    background-color: rgb(0,0,0,0.8);
}
</style>