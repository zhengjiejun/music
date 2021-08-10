import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import personDetail from '../views/personDetail.vue'
import songListDetails from '../views/songListDetails.vue'
import Album from '../views/Album.vue'
import mv from '../views/mv.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/personDetail',
    name: 'personDetail',
    component: personDetail
  },
  {
    path: '/songListDetails',
    name: 'songListDetails',
    component: songListDetails
  },
  {
    path: '/Album',
    name: 'Album',
    component: Album
  },
  {
    path: '/mv',
    name: 'mv',
    component: mv
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
