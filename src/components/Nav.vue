<template>
    <div id="nav">
        <div class="nav_title">草原资源智能化管理平台</div>
        <div class="menu">
            <div class="menu_box">
                <span class="menu_box_img_span menu_box_img_span1"></span>
                <span class="menu_box_text_span">首页</span>
            </div>
            <div class="menu_box">
                <span class="menu_box_img_span menu_box_img_span2"></span>
                <span class="menu_box_text_span">信息展示</span>
            </div>
            <div class="menu_box">
                <span class="menu_box_img_span menu_box_img_span3"></span>
                <span class="menu_box_text_span">三维模型</span>
            </div>
            <div class="menu_box">
                <span class="menu_box_img_span menu_box_img_span4"></span>
                <span class="menu_box_text_span">数据分析</span>
            </div>
            <div class="menu_box">
                <span class="menu_box_img_span menu_box_img_span5"></span>
                <span class="menu_box_text_span">综合态势</span>
            </div>
        </div>
        <div class="user"></div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
    width: 100%;
    height: 60px;
    background-color: #1c2531;
    color: white;
}

.nav_title {
    display: inline-block;
    height: 60px;
    line-height: 60px;
    margin-left: 60px;
    font-size: 20px;
    color: white;
}

.menu {
    cursor: pointer;
    position: absolute;
    left: 350px;
    top: 0;
    display: flex;
    width: 600px;
    height: 60px;
    line-height: 60px;
}

.menu_box {
    padding: 0 10px;
}

.menu_box:hover {
    background: rgba(255, 255, 255, 0.1);
    border-bottom: 2px solid white;
}

span.menu_box_img_span {
    display: inline-block;
    vertical-align: middle;
    width: 17px;
    height: 17px;
    margin-right: 8px;
}

span.menu_box_img_span1 {
    background-image: url(../assets/images/home.png);
    background-size: 100% 100%;
}

span.menu_box_img_span2 {
    background-image: url(../assets/images/information-display.png);
    background-size: 100% 100%;
}

span.menu_box_img_span3 {
    background-image: url(../assets/images/3Dmodel.png);
    background-size: 100% 100%;
}

span.menu_box_img_span4 {
    background-image: url(../assets/images/data-analysis.png);
    background-size: 100% 100%;
}

span.menu_box_img_span5 {
    background-image: url(../assets/images/comprehensive-situational.png);
    background-size: 100% 100%;
}


span.menu_box_text_span {
    vertical-align: middle;
}

.user {
    position: absolute;
    left: 1400px;
    top: 10px;
    width: 40px;
    height: 40px;
    background-image: url(../assets/images/user.png);
    background-size: 100% 100%;
}


</style>