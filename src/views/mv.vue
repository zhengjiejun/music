<template>
  <div class="mv">
    <headerTop></headerTop>
    <div class="Mvcontainer">
      <div class="Mvcontainer-top">
        <h2>MV</h2>
      </div>
      <div class="Mvcontainer-body">
        <div class="Mvcontainer-item" v-for="item in mvList" :key="item.id">
          <img :src="item.cover">
          <div style="display:flex;flex-direction: column;">
            <span class="itemName">{{item.name}}</span>
            <span style="color:#8B8B8B">{{item.artistName}}</span>
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
  data() {
    return{
      mvList:[]
    }

  },
  components: {
    headerTop
  },
  mounted() {
    const url1 = '/top/mv?limit=30&realIP=116.25.146.177';
    axios(url1,{
      method:'get'
    }).then(res => {
      console.log(res.data.data)
      var _mvlist = res.data.data;  
      for(var i = 0;i<_mvlist.length;i++) {
        this.mvList.push(_mvlist[i]);
      }
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>


<style>
body{
  /* background-color: #18181C;   */
}
.itemName{
  text-overflow:ellipsis;
	white-space:nowrap;
  overflow: hidden;
}
.Mvcontainer{
  width: 1200px;
  margin: auto;
  /* background-color: antiquewhite; */
  /* color: #E1E1E1; */
}
.Mvcontainer-top{
  margin-top: 50px;
  width: 100%;
}
.Mvcontainer-body{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.Mvcontainer-item:nth-child(6n+0){
  margin-right: 0;
}
.Mvcontainer-item{
  width: 180px;
  height: 150px;
  margin-right: 20px;
}
.Mvcontainer-item img{
  width: 100%;
  height: 100px;
}
</style>