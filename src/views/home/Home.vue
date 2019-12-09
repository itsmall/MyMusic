<template>
  <div class="wrap">
    <div class="play_wrap" id="player">
      <div class="search_bar">
        <img src="~assets/img/music/player_title.png" alt />
        <!-- 搜索歌曲 -->
        <input type="text" autocomplete="off" v-model="query" @keyup.enter="searchMusic();" />
      </div>
      <div class="center_con">
        <!-- 搜索歌曲列表 -->
        <div class="song_wrapper" ref="song_wrapper">
          <ul class="song_list">
            <li v-for="(item,index) in musicList" :key="index">
              <!-- 点击放歌 -->
              <a href="javascript:;" @click="playMusic(item.id)"></a>
              <b>{{item.name}}</b>
              <span>
                <i @click="playMv(item.mvid)" v-if="item.mvid!=0"></i>
              </span>
            </li>
          </ul>
          <img src="~assets/img/music/line.png" class="switch_btn" alt />
        </div>
        <!-- 歌曲信息容器 -->
        <div class="player_con" :class="{playing:isPlay}">
          <img src="~assets/img/music/player_bar.png" class="play_bar" />
          <!-- 黑胶碟片 -->
          <img src="~assets/img/music/disc.png" class="disc autoRotate" />
          <!-- <img :src="coverUrl==''?'~assets/img/music/cover.png':coverUrl" class="cover autoRotate" /> -->
        </div>
        <!-- 评论容器 -->
        <div class="comment_wrapper" ref="comment_wrapper">
          <h5 class="title">热门留言</h5>
          <div class="comment_list">
            <dl v-for="(item,index) in hotComments" :key="index">
              <dt>
                <img :src="item.user.avatarUrl" alt />
              </dt>
              <dd class="name">{{item.user.nickname}}</dd>
              <dd class="detail">{{item.content}}</dd>
            </dl>
          </div>
          <img src="~assets/img/music/line.png" class="right_line" />
        </div>
      </div>
      <div class="audio_con">
        <audio
          ref="audio"
          @play="play"
          @pause="pause"
          :src="musicUrl"
          controls
          autoplay
          loop
          class="myaudio"
        ></audio>
      </div>
      <div class="video_con" v-show="showVideo">
        <video ref="video" :src="mvUrl" controls="controls"></video>
        <div class="mask" @click="closeMv"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMusic } from "network/music.js";
export default {
  data() {
    return {
      isPlay: false,
      query: { type: String, default: "" },
      musicList: { type: Array, default: [] },
      hotComments: { type: Array, default: [] }
    };
  },
  created() {
    getMusic()
      .then(res => {
        this.musicList = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style  scoped>
@import "~assets/css/music/index.css";
</style>
