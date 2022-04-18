<template>
    <div id="login">
        <div class="login_box">
            <div class="login_title">
                <span>登录</span>
                <span>注册</span>
            </div>
            <div class="login_content">
                <br>
                <div class="line">
                    <input type="text" placeholder="账户" class="login_input" />
                </div>

                <div class="line">
                    <input type="text" placeholder="密码" class="login_input" />
                </div>
                <div class="line">
                    <input type="checkbox" /> 记住我
                </div>
                <div class="line">
                    <button>登录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#login {
    position: relative;
    width: 100%;
    height: calc(100% - 60px);
}

.login_box {
    position: absolute;
    left: calc(50% + 200px);
    top: 100px;
    width: 350px;
    height: 390px;
    border: 1px solid black;
    box-shadow: 0 0 7px rgb(0, 0, 0, 0.2);
}

.login_title {
    display: flex;
    height: 60px;
    border-bottom: 1px solid black;
    box-shadow: 0 0 7px rgb(0, 0, 0, 0.2);
}

.login_title span {
    cursor: pointer;
    text-align: center;
    width: 50%;
    font-size: 20px;
    line-height: 60px;
}

.login_title span:hover {
    background-color: rgb(233, 231, 231);
}

.login_title span:nth-child(1) {
    border-right: 1px solid black;
}

.line {
  width: 80%;
  margin: 25px auto;
  font-size: 15px;
}

input.login_input {
  width: 100%;
  height: 40px;
  text-indent: 2em;
  font-size: 15px;
}

.line button {
  cursor: pointer;
  width: 100%;
  height: 40px;
  background-color: #5998dd;
  color: white;
  border: none;
  font-size: 20px;
}
</style>