import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.withCredentials = true;
Vue.use(VueAxios,axios);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

axios({
  url:'http://152.136.185.210:7878/api/m5/home/data?type=sell&page=1',
  method: 'get'
}).then(res => {
  console.log(res);
})