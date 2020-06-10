<template>
  <div>
    <div class="textBox">
      <transition name="slide">
        <p class="text" :key="text.id">
        <el-tag type="warning">{{text.val.tag}}</el-tag>
            {{text.val.title}}</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  
  data () {
    return {
      textArr: [
        {tag:'进度公告',title:'D.S.-Dal Segno翻译正在制作中'},
         {tag:'活动公告',title:'Summer Pockets群周年活动将在sprb发售日举办'},
        {tag:'汉化公告',title:'向日葵，天空下的鹅卵石官方中文版已上架steam，欢迎体验'},
        {tag:'本站公告',title:'这里是恰饭萌，galgame及汉化交流同好会，汉化进度控制台'},
        {tag:'本站公告',title:'需要使用恰饭萌汉化控制台，请联系本站站长第一萝莉程序员萌田薰子酱'},
      ],
      number: 0
    }
  },
  computed: {
    text () {
      return {
        id: this.number,
        val: this.textArr[this.number]
      }
    }
  },
  mounted () {
    this.startMove()
  },
  methods: {
    startMove () {
      // eslint-disable-next-line
      let timer = setTimeout(() => {
        if (this.number === this.textArr.length) {
          this.number = 0;
        } else {
          this.number += 1;
        }
        this.startMove();
      }, 4000); 
    }
  }
}
</script>

<style scoped>
  .textBox {
    width: 100%;
    height: 50px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    text-align: center;
  }
  .text {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 0.5s linear;
  }
  .slide-enter{
    transform: translateY(20px) scale(1);
    opacity: 1;
  }
  .slide-leave-to {
    transform: translateY(-20px) scale(0.8);
    opacity: 0;
  }
</style>
