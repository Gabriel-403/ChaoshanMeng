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
    <div class="cardlayout">
      <card v-for="(item, index) in works" :key="index" :data="item"></card>
    </div>
    <div class="clear"></div>
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
import buttombar from "./../components/buttombar";

import img1 from "../assets/images/01.png";
import img2 from "../assets/images/02.jpeg";
import img3 from "../assets/images/03.jpeg";

export default {
  components: {
    topbar,
    headbar,
    carousel,
    bulletboard,
    card,
    buttombar
  },
  data() {
    return {
      works: [
        {
          img: img1,
          name: "SummerPocket Steam版",
          author: "萌田薰子汉化组"
        },
        {
          img: img2,
          name: "SummerPocket Steam版",
          author: "萌田薰子汉化组"
        },
        {
          img: img3,
          name: "SummerPocket Steam版",
          author: "萌田薰子汉化组"
        },
        {
          img: img1,
          name: "SummerPocket Steam版",
          author: "萌田薰子汉化组"
        },
        {
          img: img3,
          name: "SummerPocket Steam版",
          author: "萌田薰子汉化组"
        },
      ]
    };
  }
};
</script>

<style >
.main-layout {
  background-color: palevioletred;
}
.carousel {
  margin: 50px;
}
.bulletin-board {
  top: 10px;
}
.cardlayout {
  padding: 0 40px;
  display: flex !important;
  flex-direction: row;
  flex-wrap: wrap;
}
.buttombar {
  background: palevioletred;
}
.clear {
  clear: both;
}
</style>