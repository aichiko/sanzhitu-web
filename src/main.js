// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import echarts from 'echarts'
import 'echarts/map/js/china.js'
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// starting with version 2.6.0, you need to manually introduce swiper's css
require('swiper/dist/css/swiper.css')
// mount with global
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
