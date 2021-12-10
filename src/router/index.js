import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Job from '../views/Job/Job.vue'
import AboutUs from '../views/AboutUs/AboutUs.vue'
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
  {
    path:'/AboutUs',
    name:'AboutUs',
    component: AboutUs
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
