<template>
    <div class="navbar">
        <div class="logo">
          <a href="" class="logo-brand">
            <img src="../assets/cnodejs_light.svg" alt="">
          </a>
        </div>
        <div class="container">
          <ul class="clearfix">
            <li><a href="">首页</a></li>
            <li><a href="">新手入门</a></li>
            <li class="API"><a href="">API</a></li>
            <li><a href="">关于</a></li>
            <li><a href="">注册</a></li>
            <li><a href="">登录</a></li>
          </ul>
        </div>
       
    </div>
</template>


<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  background: #444;
  color: #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 65PX;
  .logo {
      img {
        width: 120px;
        height: 34px;
      }
  }
  .container {
    li {
      float: left;
      padding: 10px 15px;
    }
    .API{
      margin-top: 2.5px;
    }
  }
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
</style>
