<template>
  <div class="person">

    <!-- 导航 -->
    <headerTop></headerTop>


    <div class="mainTop">
      <div class="main-img">
        <img :src="musicList.picUrl">
        <h1 style="margin:20px auto">{{musicList.name}}</h1>
        <span class="personDec">{{musicList.briefDesc}}</span>
        <div class="join">+关注歌手</div>
      </div>
      <img :src="musicList.picUrl" class="bgimg">
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
            <div class="song-name">{{item.name}}</div>
            <div class="song-singer">{{item.ar[0].name}}</div>
            <div class="song-belongs">{{item.al.name}}</div>
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
  name: 'personDetail',
  components: {
    headerTop
  },
  data() {
    return{
      musicList:[],
      hotSongs:[]
    }
  },
  methods:{
    toAlbum() {
      this.$router.push({path: '/Album'});
    }
  },
  mounted() {
    // console.log(this.$route.query.id);
    var _id = this.$route.query.id;

    const url4 = '/artists?id=' + _id;
    axios(url4,{
      method:'get'
    }).then(res => {
      // console.log(res.data.artist);
      console.log(res.data.hotSongs);
      var _list = res.data.artist
      this.musicList = _list;

      var hotSongList = res.data.hotSongs;  
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
li{
  list-style: none;
  float: left;
}
a{
  text-decoration: none;
  color: #000;
}
body{
  background-color: #FFFFFF;
}
.personDec{
  margin-top:10px;
  overflow:hidden;
  display: inline-block;
  width: 1200px;
	text-overflow:ellipsis;
	white-space:nowrap;
  overflow: hidden;
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
.main-img{
  width: 1200px;
  height: 200px;
  margin: auto;
  /* background-color: skyblue; */
  margin-top: 50px;
  text-align: center;
}
.main-img img{
  width: 130px;
  height: 130px;
  border-radius: 50%;
}
.join{
  width: 120px;
  height: 40px;
  background-color: #E2165B;
  color: white;
  text-align: center;
  line-height: 40px;
  border-radius: 40px;
  margin: auto;
  cursor: pointer;
  margin-top: 20px;
}
.boxMainContainer{
  width: 100%;
  background-color: white;
}
.mainContainer{
  padding-top: 50px;
  width: 1200px;
  margin: auto;
  /* background-color: skyblue; */
}
.songBody{
  color: black;
}
.containerList{
  width: 100%;
  /* background-color: red; */
}
.containerListTop{
  width: 100%;
  height: 80px;
  display: flex;
  padding-left: 30px;
  /* background-color: beige; */
}
.song-index{
  width: 10%;
  /* background-color: #2f282a; */
}
.song-name{
  width: 40%;
  /* background-color: #bfaeb3; */
}
.song-singer{
  width: 20%;
  /* background-color: #2c0914; */
}
.song-belongs{
  width: 30%;
  /* background-color: #e9d6dc; */
}
.songtop{
  line-height: 80px;
  color: #9999A6;
}
.songbody{
  line-height: 80px;
  padding-left: 30px;
}
.songbody:hover{
  background-color: #F2F2F2;
}
</style>