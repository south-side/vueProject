import Vue from 'vue'
import Homes from './views/Home/Home.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import 'wowjs/css/libs/animate.css'
import animated from 'animate.css'
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import  App from './App'


Vue.prototype.$video = Video
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.use(ElementUI)
Vue.use(animated)