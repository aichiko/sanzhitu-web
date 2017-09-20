import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import home from '@/pages/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // model: 'home',
      name: 'home',
      component: home
    }
  ]
})
