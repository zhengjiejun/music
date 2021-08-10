<template>
  <div class="songListDetalis">
    <!-- 导航 -->
    <headerTop></headerTop>

    <div class="mainTop">
      <div class="mainImg">
        <img :src="playlist.coverImgUrl" style="margin-left:40px">
        <div class="mainTopContainer">
          <h1>{{playlist.name}}</h1>
          <span style="margin-top:50px">播放量：{{playlist.playCount}}</span>
          <!-- <span style="margin-top:10px">标签：{{playlist.tags[0]}}</span> -->
          <span style="margin:10px 0">简介：{{playlist.description}}</span>
          <div class="getlike">
            <div class="player">立即播放</div>
          </div>
        </div>
      </div>
      <img :src="playlist.coverImgUrl" class="bgimg">
    </div>



    <div class="boxMainContainer">
      <div class="mainContainer">
        <h2>热门单曲</h2>
        <div class="containerList">

          <div class="containerListTop" style="margin-bottom:20px">
            <div class="song-index songtop">&nbsp;</div>
            <div class="song-name songtop">歌曲</div>
            <div class="song-singer songtop">歌手</div>
            <div class="song-belongs songtop">专辑</div>
          </div>

          <div class="containerListTop songbody" v-for="(item,index) in hotSongs" :key="index">
            <div class="song-index" style="color:#9999A6">{{index + 1}}</div>
            <div class="song-name">{{item.nickname}}</div>
            <!-- <div class="song-singer">{{item.ar[0].name}}</div> -->
            <!-- <div class="song-belongs">{{item.al.name}}</div> -->
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerTop from '@/components/headerTop.vue'
import axios from 'axios'
export default {
  name:'songListDetails',
  components: {
    headerTop
  },
  data() {
    return{
      playlist:[],
      hotSongs:[]
    }
  },
  methods:{
    toAlbum() {
      this.$router.push({path: '/Album'});
    }
  },
  mounted(){
    var _id = this.$route.query.id;

    const url1 = 'playlist/detail?id=' + _id;
    axios(url1,{
      method:'get'
    }).then(res => {
      // console.log(res.data.artist);
      // console.log(res.data.playlist);
      var _list = res.data.playlist
      this.playlist = _list;


      console.log(res.data.playlist.subscribers)
      var hotSongList = res.data.playlist.subscribers;  
      for(var i = 0;i<hotSongList.length;i++) {
        this.hotSongs.push(hotSongList[i]);
      }
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>





<style>
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  color: #000;
}
body{
  background-color: #F5F5F5;
}
.header{
  width: 100%;
  /* background: red; */
  background-color: white;
  box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
}
.headermain{
  width: 1200px;
  height: 50px;
  margin: auto;
  /* background-color: skyblue; */
}
.headermain ul{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.headermain ul li{
  height: 100%;
  /* background-color: bisque; */
  float: left;
  list-style: none;
  line-height: 50px;
  text-align: center;
}

.mainTop{
  width: 100%;
  height: 350px;
  position: relative;
}
.bgimg{
  z-index: -1;
  margin: auto;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  filter:blur(2em) opacity(.3);
}
.mainImg{
  /* width: 1200px; */
  /* height: 200px; */
  /* background-color: skyblue; */
  margin-top: 50px;
  display: flex;
  flex-direction: row;
}
.mainImg img {
  width: 300px;
  height: 300px;
}
.mainTopContainer{
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}
.player{
  width: 120px;
  height: 40px;
  background-color: #E2165B;
  color: white;
  text-align: center;
  line-height: 40px;
  border-radius: 40px;
  cursor: pointer;
  margin-top: 20px;
}
</style>