<template>
  <el-carousel :interval="4000" type="card">
    <el-carousel-item v-for="item in imagesbox" :key="item.id">
      <img :src="item.idView" class="image" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      imagesbox: [
        { id: 0, idView: require("../assets/images/01.png") },
        { id: 1, idView: require("../assets/images/02.jpeg") },
        { id: 2, idView: require("../assets/images/03.jpeg") }
      ]
    };
  }
};
</script>



<style>
.image {
  width: 50rem;
  height: 30rem;
  object-fit: cover;
}

.el-carousel__container {
  height: 30rem !important;
}

.el-carousel__item--card {
  display: flex !important;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent !important;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>