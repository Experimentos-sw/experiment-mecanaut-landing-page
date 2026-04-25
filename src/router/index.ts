import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'


import LandingView from '@/views/LandingView.vue'

const routes: RouteRecordRaw[] = [{ path: '/', name: 'Landing', component: LandingView }]

export default createRouter({
  history: createWebHistory(),
  routes,
})
