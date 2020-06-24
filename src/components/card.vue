<template>
  <div class="imagecard">
    <img :src="data.img" />
    <h4>{{data.name}}</h4>
    <p>{{data.author}}</p>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      default: {
        img: "",
        name: "",
        author: ""
      }
    }
  }
};
</script>

<style lang="less" scoped>
.imagecard {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 20px 60px;
  min-width: 400px;

  &::after {
    display: block;
    content: '';
    width: 100%;
    padding-top: 56%;
  }
}

img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h4, p {
  position: absolute;
  bottom: -30px;
  margin: 0;
  font-size: 1.6rem;
}

p {
  bottom: -54px;
}

</style>