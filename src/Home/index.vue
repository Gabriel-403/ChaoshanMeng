<template>
  <div class="more-layout">
    <div class="main-layout">
      <topbar></topbar>
      <headbar></headbar>
    </div>
    <div class="carousel">
      <carousel></carousel>
    </div>
    <div class="bulletin-board">
      <bulletboard />

    </div>
    <h1 style="font-size: 3em;">相关作品</h1>
    <div class="cardlayout"><center>
      <card style="float: left; margin:15px"></card>
      <card2 style="float: left;  margin:15px"></card2>
      <card3 style="float: left;  margin:15px"></card3></center>
    </div>  
    <div class="clear" ></div> 
    <div class="buttombar">
    <buttombar></buttombar>
    </div>
  </div>
</template>

<script>
import topbar from "./../components/topbar";
import headbar from "./../components/headbar";
import carousel from "./../components/carouusel";
import bulletboard from "./../components/bulletin-board";
import card from "./../components/card";
import card2 from "./../components/card2";
import card3 from "./../components/card3";
import buttombar from "./../components/buttombar";
export default {
  components: {
    topbar,
    headbar,
    carousel,
    bulletboard,
    card,
    card2,
    card3,
    buttombar
  }
};
</script>

<style >
.main-layout {
  background-color: palevioletred;
  height: 500px;
}
.carousel {
  margin: 50px;
}
.bulletin-board {
  top: 10px;
}
.cardlayout {
 margin-left:10% ;
}
.buttombar{
background: palevioletred;

}
.clear{ clear:both} 









</style>