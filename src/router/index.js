import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Job from '../views/Job/Job.vue'
import New from '../views/News/New.vue'
import AboutUs from '../views/AboutUs/AboutUs.vue'
import NewResearch from '../views/News/Newscomponents/NewResearch'
import NewCooperation from '../views/News/Newscomponents/NewCooperation'
import NewFinance from '../views/News/Newscomponents/NewFinance'
import Researches from '../views/News/Researches'
import Contact from '../views/Contact/contact'
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
    path: '/New',
    name: 'New',
    component: New,
    children:[
      {
        path: '/NewResearch',
        name: 'NewResearch',
        component: NewResearch,
      },
      {
        path: '/NewCooperation',
        name: 'NewCooperation',
        component: NewCooperation,
      },
      {
        path: '/NewFinance',
        name: 'NewFinance',
        component: NewFinance,
      }
    ]
  },
  {
    path: '/Researches/:id',
    name: 'Researches',
    component: Researches,
  },
    {
    path:'/AboutUs',
    name:'AboutUs',
    component: AboutUs
  },
  {
    path:'/Contact',
    name:'Contact',
    component: Contact
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
