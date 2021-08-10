<template>
  <div class="index">

    <!-- 导航 -->
    <headerTop></headerTop>

    <!-- 轮播图 -->
    <div class="main">
      <div class="container">
        <a :style="{'left':calleft + 'px'}"><img v-for="item in indexImgSrc" :key="item.id" :src="item"></a>
      </div>
      <div class="btn left" @click="toleft">&lt;</div>
      <div class="btn right" @click="toright">&gt;</div>
    </div>


    <!-- 热门列表 -->
    <div class="hotlist">
      <div class="hotTop"><h2>热门歌单</h2></div>
      <div class="hotMain">
        <div v-for="item in hostList" :key="item.id" class="bigbox" @click="toSongDetail(item.id)">
          <div class="listTop">
            <img :src="item.coverImgUrl">
            <span>{{item.playCount}}</span> 
          </div>
          <span class="hotListName">{{item.name}}</span>
        </div>
      </div>
    </div>


    <!-- 热门歌手 -->
    <div class="box">
      <div class="hotMusicPerson">
        <div class="boxcenter">
          <img src="../assets/1.jpg">
        </div>
        <div class="hotTop"><h2>热门歌手</h2></div>
        <div class="hotMain">
          <div v-for="item in hotMusicPerson" :key="item.id" class="bigbox" @click="toPersonDetail(item.id)">
            <div class="personTop">
              <div class="imgbox"><img :src="item.picUrl"></div>
              <span class="personName">{{item.name}}</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import headerTop from '@/components/headerTop.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
export default {
  name: 'Home',
  components: {
    headerTop
  },
  data() {
    return{
      imgsrc:[],
      name:[],
      indexImgSrc:[],
      calleft:0,
      hostList:[],
      hotMusicPerson:[]
    }
  },
  methods: {
    addcount(count) {
      this.$store.commit('jiacount',count)
    },
    jia() {
      this.$store.commit('upadd')
    },
    jian() {
      this.$store.commit('jianadd')
    },
    toright(res) {
      // var left = this.calleft;
      this.calleft -= 810
      if(this.calleft < -7200) {
        this.calleft = 0
      }
    },
    toleft(res) {
      // var left = this.calleft;
      this.calleft += 810
      if(this.calleft > 0) {
        this.calleft = -7200
      }
    },
    toPersonDetail(res) {
      this.$router.push({
        // 第一种写法：
        // path: '/personDetail?id='+ res

        // 第二种写法：
        path: '/personDetail',
        query: {
          id:res
        }
      });
      console.log(res);
    },
    toSongDetail(res) {
      this.$router.push({path: '/songListDetails?id=' + res})
    },
    toAlbum() {
      this.$router.push({path: '/Album'});
    }
  },
  mounted() {

    // const _cookie = encodeURIComponent('__csrf=53b7918b857b629af8fad6b4301d61ce; Max-Age=1296010; Expires=Sat, 17 Jul 2021 03:46:15 GMT; Path=/;;MUSIC_U=dc6632faa97d514f088c653b3084435b7eb061a21dd34d70fd41a0ad0d94687c33a649814e309366; Max-Age=1296000; Expires=Sat, 17 Jul 2021 03:46:05 GMT; Path=/;;__remember_me=true; Max-Age=1296000; Expires=Sat, 17 Jul 2021 03:46:05 GMT; Path=/;')
    // console.log(_cookie);

    const url1 = '/toplist/artist&realIP=116.25.146.177';
    axios.get(url1).then(res =>{
      // console.log(res)
    })
    axios(url1,{
      method: 'get'
      // headers: {
      //   'Content-Type':'application/x-www-form-urlencoded'
      // },
      // params: {
      //   type: 'detail',
      //   id:1827600686
      // }
    }).then(response => {
      //在操作数组的时候，要用push 或者 splice 等 可以改变这种方法改变原数组。
      //而不是用下标 this.mydata[0] = '改变的值'。这样也会引起不渲染。
      // console.log(response);
      // let imgSrcList = response.data.list.artists;
      // for(let i = 0;i<imgSrcList.length;i++) {
      //   this.imgsrc.push(imgSrcList[i].picUrl);
      // }
      // console.log(this.imgsrc);
    }).catch(err => {
      console.log(err);
    })

    const url2 = '/banner?type=0&realIP=116.25.146.177';
    axios(url2,{
      method:'get'
    }).then(res => {
      // console.log(res.data.banners);
      var src = res.data.banners;
      // console.log(src);
      for(let i = 0;i<src.length;i++) {
        this.indexImgSrc.push(src[i].imageUrl);
      }
    }).catch(err => {
      console.log(err);
    })

    
    const url3 = '/top/playlist?limit=10&order=hot&realIP=116.25.146.177';
    axios(url3,{
      method:'get'
    }).then(res => {
      console.log(res.data.playlists);
      var list = res.data.playlists;
      for(var i = 0;i<list.length;i++) {
        this.hostList.push(list[i]);
      }
      // console.log(this.hostList);
      // console.log('类型：'+typeof(hostList));
    }).catch(err => {
      console.log(err);
    })

    const url4 = '/top/artists?offset=0&limit=10&realIP=116.25.146.177';
    axios(url4,{
      method:'get'
    }).then(res => {
      console.log(res.data.artists);
      var list = res.data.artists;
      for(var i = 0;i<list.length;i++) {
        this.hotMusicPerson.push(list[i]);
      }
    }).catch(err => {
      console.log(err);
    })

    // const url5 = '/playlist/detail?id=24381616';
    // axios(url5,{
    //   method:'get',
    //   params:{
    //     cookie: encodeURIComponent("__csrf=53b7918b857b629af8fad6b4301d61ce; Max-Age=1296010; Expires=Sat, 17 Jul 2021 03:46:15 GMT; Path=/;;MUSIC_U=dc6632faa97d514f088c653b3084435b7eb061a21dd34d70fd41a0ad0d94687c33a649814e309366; Max-Age=1296000; Expires=Sat, 17 Jul 2021 03:46:05 GMT; Path=/;;__remember_me=true; Max-Age=1296000; Expires=Sat, 17 Jul 2021 03:46:05 GMT; Path=/;")
    //   }
    // }).then(res => {
    //   console.log(res);
    //   // for(var i = 0;i<list.length;i++) {
    //   //   this.hotMusicPerson.push(list[i]);
    //   // }
    // }).catch(err => {
    //   console.log(err);
    // })

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



.container{
  width: 810px;
  height: 300px;
  /* background-color: skyblue; */
  margin: auto;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  position: relative;
  overflow: hidden;
}
.container a img{
  width: 100%;
  height: 100%;
}
.container a{
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
  position: absolute;
  left: 0px;
  transition: all 0.5s;
}
.main{
  width: 100%;
  /* background-color: skyblue; */
  position: relative;
}
.btn{
  width: 60px;
  height: 60px;
  /* background-color: red; */
  /* background-color: cornsilk; */
  line-height: 60px;
  text-align: center;
  position: absolute;
  cursor:pointer;
  color: white;
  border-radius: 50%;
  background-color: black;
  opacity: 0.1;
}
.left{
  left: 200px;
  top: 125px;
}
.right{
  right: 200px;
  top: 125px;
}
.hotlist{
  width: 1200px;
  margin: auto;
  /* background-color: white; */
  display: flex;
  flex-direction: column;
  margin-bottom: 200px;
}
.hotTop{
  width: 100%;
  height: 100px;
  line-height: 100px;

}
.hotMain{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.listTop{
  width: 200px;
  height: 200px;
  /* background-color: bisque; */
  position: relative;
  cursor: pointer;
}
.bigbox{
  margin-right: 15px;

}
.bigbox:nth-child(5n+0){
  margin-right: 0px;  
}

.listTop img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  border-radius: 10px;
}
.listTop span {
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: black;
  opacity: 0.4;
  color: white;
  position: absolute;
  right: 10px;
  top: 10px;
  border-radius: 30px;
}
.hotListName{
  display: block;
  width: 200px;
  overflow: hidden;
  text-overflow:ellipsis;
	white-space:nowrap;
  margin: 25px 0;
}


/* 热门歌手 */
.box{
  width: 100%;
  background-color: white;
  padding-bottom: 50px;
}
.hotMusicPerson{
  padding-top: 200px;
  width: 1200px;
  margin: auto;
  position: relative;
  /* background-color: red;s */
}
.boxcenter{
  width: 1200px;
  margin: auto;
  position: absolute;
  top: -150px;
}
.boxcenter img{
  width: 1200px;
  height: 300px;
}
.personTop{
  width: 200px;
  height: 200px;
  background-color: #F8F8F8;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
}
.personTop img {
  width:150px;
  height: 150px;
  /* border-radius: 50%; */
  transition:all .3s linear;
  overflow: hidden;
}
.personTop:hover img{
  transform:scale(1.1);
}
.personName{
  margin-top: 5px;
  color: #999999;
}
.personName:hover{
  color: #E91E63;
}
.imgbox{
  margin-top: 10px;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
}

</style>
