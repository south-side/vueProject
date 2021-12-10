import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Job from '../views/Job/Job.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Job',
    name: 'Job',
    component: Job,
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
