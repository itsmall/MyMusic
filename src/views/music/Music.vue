<template>
  <div class="box">
    <el-container>
      <el-header height="6vh">
        <muisc-nav-bar @searchMusic="searchMusic" @titleClick="titleClick" />
      </el-header>
      <el-container>
        <el-aside width="15vw">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
      <el-footer height="10vh">footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import MuiscNavBar from "./childComps/MuiscNavBar";
export default {
  components: {
    MuiscNavBar
  },
  data() {
    return {
      query: "", //搜索
      currentType: "" //类型
    };
  },
  methods: {
    searchMusic(query) {
      this.query = query;
    },
    titleClick(index) {
      // 推荐
      // 推荐mv(图片轮播)  http://39.108.182.125:3000/personalized/mv
      // 推荐歌单(9条)  http://39.108.182.125:3000/personalized?limit=9
      // 推荐新音乐(10条)  http://39.108.182.125:3000/personalized/newsong
      // 推荐电台（6条）  http://39.108.182.125:3000/personalized/djprogram
      // 最新专辑（12条）  http://39.108.182.125:3000/album/newest

      // 排行榜
      
      // 歌单

      // 歌手

      // MV
      switch (index) {
        case value:
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");

.box {
  width: 80vw;
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
/* .top-bar {
  display: flex;
  align-items: center;
  height: 100px;
} */
/* .el-header {
  min-width: 80vw;

  position: relative;
} */
.el-footer {
  background-color: hsl(212, 19%, 85%);
  color: #333;
  padding-left: 0;
  /* text-align: center; */
  /* height: 10vh;
  line-height: 10px; */
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 84vh;
  /* line-height: 200px; */
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

/* .el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
} */
</style>
