<template>
    <el-header style="text-align: left; font-size:1.5em  ;height: 70px;">   
      <div> <img  class="logo" src="../assets/logo2.png"> 
     
          
        <a class="active-item">首页</a>
     <a class="active-item2">汉化组管理</a>     
      </div>

 
    </el-header>
</template>

<script>
export default {

}
</script>

<style>
.logo{
  float: left;
}

.el-header {
    
    background-color:palevioletred;
    color: #333;
    line-height: 50px;
    
    
    
    
  }
.active-item{   
  float: left;
    font-family:fz;
    
    border-bottom-style: solid;
    align-self: flex-end;
    margin: 0 0 -2px;
    padding: .7em 1.14285714em;
    border-bottom-width: 2px;
    border-radius: 0;
    position: relative;
  left: 0%;
  bottom: 10%; 
    
 }
 .active-item2{   
   float: left;
 font-family:fz;

    align-self: flex-end;
  
    padding: .7em 1.14285714em;
    border-bottom-width: 2px;
    border-radius: 0;
    position: relative;
  left: 0%;
  top: 20%; 
    
 }
 @font-face {
	font-family:fz;
	src: url('../assets/mainfont.ttf');
}

</style>