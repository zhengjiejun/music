<template>
  <!-- 导航 -->
    <div class="header">
      <div class="headermain">
        <ul>
          <li><a href="javascript:;" @click="toIndex">首页</a></li>
          <li><a href="javascript:;">歌手</a></li>
          <li><a href="javascript:;">新碟</a></li>
          <li><a href="javascript:;">排行榜</a></li>
          <li><a href="javascript:;">分类歌单</a></li>
          <li><a href="javascript:;">电台</a></li>
          <li><a href="javascript:;" @click="toMv">MV</a></li>
          <li><a href="javascript:;" @click="toAlbum">数字专辑</a></li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'headerTop',
  data() {
    return{

    }
  },
  methods: {
    toAlbum() {
      this.$router.push({path: '/Album'});
    },
    toIndex() {
      this.$router.push({path: '/'});
    },
    toMv() {
      this.$router.push({path: '/mv'});
    }
  }
}
</script>

<style>
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
</style>