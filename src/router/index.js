import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Live from '../views/Live.vue'
import Map from '../views/Map.vue'

const routes = [
  { path: '/', name: '首页', component: Home },
  { path: '/live/:id', name: '直播页', component: Live },
  { path: '/map', name: '地图全景', component: Map }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
