<template>
  <div class="nav-bar">
    <nav-bar>
      <div slot="left" class="left"></div>
      <div slot="center" class="title center">
        <div
          v-for="(item,index) in titles"
          :key="index"
          class="title-item"
          @click="titleClick(index)"
          :class="{active:index==currentIndex}"
        >
          <span>{{item}}</span>
        </div>
      </div>
      <div slot="right" class="right">
        <div class="input">
          <input type="text" placeholder="桥边姑娘" v-model="query" @keydown.enter="enter(query)" />
        </div>
        <div class="member">
          <span>登录</span> |
          <span>注册</span>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["推荐", "排行榜", "歌单", "歌手",  "MV"],
      currentIndex: 0,
      query: ""
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    enter() {
      this.$emit("searchMusic", this.query);
    }
  }
};
</script>

<style scoped>
.left {
  height: 6vh;
  background: url("~assets/img/logo/logo.svg") no-repeat center;
  /* background-size: cover; */
  /* background-size: contain; */
  background-size: 95%;
  width: 250px;
  text-align: left;
}
.input {
  /* display: flex; */
  margin: 0 1vw;
}
.member {
  width: 175px;
}
.right {
  height: 6vh;
  line-height: 6vh;
  /* text-align: right; */
  display: flex;
  right: 0;
}
.input input {
  height: 25px;
  width: 12vw;
}
.center {
  width: 25vw;
  flex: 1;
  line-height: 6vh;
  padding-right: 15vw;
}

.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: #ff5777;
}

@import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");
</style>
