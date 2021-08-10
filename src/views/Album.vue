<template>
  <div class="Album">
    <headerTop></headerTop>

    <div class="boxTop"><h2>数字专辑</h2></div>
    <div class="AlbumContainer">
      <div class="AlbumContainerItem" v-for="item in hotSongs" :key="item.albumId">
        <img :src="item.coverUrl">
        <span style="margin-top:10px">{{item.albumName}}</span>
        <span style="margin-top:10px;color:#9FA19F">{{item.artistName}}</span>
        <div class="buyAlbum">￥{{item.price}}  立即购买</div>
      </div>
    </div>
  </div>
</template>


<script>
import headerTop from '@/components/headerTop.vue'
import axios from 'axios' 
export default {
  name:'Album',
  components: {
    headerTop
  },
  data() {
    return{
      hotSongs:[]
    }
  },
  mounted(){
    // /album/songsaleboard?type=year&year=2020&albumType=0

    const url1 = '/album/songsaleboard?type=year&year=2021&albumType=0&realIP=116.25.146.177';
    axios(url1,{
      method:'get'
    }).then(res => {
      console.log(res.data.products)
      var hotSongList = res.data.products;  
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
body{
  background-color: white;
}
.boxTop{
  width: 1200px;
  /* background-color: skyblue; */
  margin: 30px auto;
}
.AlbumContainer{
  width: 1200px;
  /* background-color: aquamarine; */
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.AlbumContainerItem:nth-child(5n+0){
  margin-right: 0px;  
}
.AlbumContainerItem{
  margin-top: 20px;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
}
.AlbumContainerItem img{
  width: 200px;
  height: 200px;
  border-radius: 10px;
}
.buyAlbum{
  width: 150px;
  height: 50px;
  /* background-color: antiquewhite; */
  line-height: 50px;
  text-align: center;
  border-radius: 30px;
  border: 1px solid #666666;
  color: #666666;
  margin: 10px auto;
}
</style>