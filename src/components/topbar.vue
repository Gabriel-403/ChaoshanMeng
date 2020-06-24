<template>
  <el-header>
    <img class="logo" src="../assets/logo2.png" />

    <a class="active-item">首页</a>
    <a  class="active-item2">专栏</a>
    <a  class="active-item2" href="//sinochem-group-fontend.oss-cn-qingdao.aliyuncs.com">汉化组管理</a>
    
  </el-header>
</template>

<script>
export default {};
</script>

<style>
.el-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  height: 60px !important;
  line-height: 60px;
  background-color: palevioletred;
  color: #333;
}

.logo {
  height: 100px;
}

a {
  padding: 0 1em;
  margin: 0 8px;
}

.active-item {
  font-family: fz;
  border-bottom-style: solid;
  border-bottom-width: 2px;
}
.active-item2 {
  font-family: fz;
  border-bottom-width: 2px;
}
@font-face {
  font-family: fz;
  src: url("../assets/mainfont.ttf");
}
</style>