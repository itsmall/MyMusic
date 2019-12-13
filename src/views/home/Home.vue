<template>
  <div>
    <div class="wrap">
      <!-- 播放器主体区域 -->
      <div class="play_wrap" id="player">
        <div class="search_bar">
          <img src="~assets/img/music/player_title.png" alt />
          <!-- 搜索歌曲 -->
          <input type="text" autocomplete="off" v-model="query" @keyup.enter="searchMusic" />
        </div>
        <div class="center_con">
          <!-- 搜索歌曲列表 -->
          <div class="song_wrapper">
            <ul class="song_list">
              <li v-for="(item,index) in musicList" :key="index">
                <a href="javascript:;" @click="playMusic(item.id,item.name)"></a>
                <b>{{item.name}}</b>
                <span v-if="item.mvid!=0" @click="playMv(item.mvid)">
                  <i></i>
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
            <img :src="musicCover" class="cover autoRotate" />
          </div>
          <!-- 评论容器 -->
          <div class="comment_wrapper">
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
          <!-- <audio
          ref="audio"
          @pause="pause"
          @play="play"
          :src="musicUrl"
          controls
          autoplay
          loop
          class="myaudio"
          ></audio>-->
          <aplayer
            autoplay
            :music="{
  title:title ,
  author: 'Hans Zimmer/Richard Harvey',
  url: musicUrl,
  pic: 'http://devtest.qiniudn.com/Preparation.jpg',
  lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
}"
          ></aplayer>
        </div>
        <div class="video_con" v-show="showVideo" style="display: none;">
          <video :src="mvUrl" controls autoplay />
          <div class="mask" @click="hideVideo"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Aplayer from "vue-aplayer";

import {
  // Music,
  getMusic,
  getMusicMv,
  getMusicUrl,
  getSearchHot,
  getMusicCover,
  getMusicComment
} from "network/music.js";

export default {
  components: { Aplayer },
  data() {
    return {
      isPlay: false,
      showVideo: false,
      query: "",
      title: "",
      author: "",
      lrc: "",
      mvUrl: "",
      musicUrl: "",
      musicCover: "",
      musicList: [],
      hotComments: []
    };
  },
  methods: {
    searchMusic() {
      getMusic(this.query)
        .then(res => {
          // this.musicList.push(...res.data.result.songs);
          this.musicList = res.data.result.songs;
        })
        .catch(err => {
          console.log(err);
        });
    },
    playMusic(musicId, title) {
      this.title = title;
      getMusicUrl(musicId)
        .then(res => {
          // console.log(res);
          this.musicUrl = res.data.data[0].url;
        })
        .catch(err => {
          console.log(err);
        });

      getMusicCover(musicId)
        .then(res => {
          console.log(res);
          // this.music.pic = res.data.songs[0].al.picUrl;
          this.musicCover = res.data.songs[0].al.picUrl;
          // console.log(res.data.songs[0].al.picUrl);
        })
        .catch(err => {
          console.log(err);
        });

      getMusicComment(0, musicId)
        .then(res => {
          this.hotComments = res.data.hotComments;
          // console.log(this.hotComments);
        })
        .catch(err => {
          console.log(err);
        });
    },
    playMv(mvid) {
      getMusicMv(mvid)
        .then(res => {
          this.mvUrl = res.data.data.url;
          this.showVideo = true;
        })
        .catch(err => {
          console.log(err);
        });
    },
    hideVideo() {
      this.showVideo = false;
    },
    //播放状态监听
    play() {
      this.isPlay = true;
    },
    pause() {
      this.isPlay = false;
    }
  }
};
</script>

<style  scoped>
@import "~assets/css/music/index.css";
</style>
