import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import decoration from '@/pages/decoration/decoration'
import foreman from '@/pages/foreman/foreman'
import DIYstore from '@/pages/DIY_store/DIY_store'
import boloni from '@/pages/boloni/boloni'
import borrow from '@/pages/borrow/borrow'
import business from '@/pages/business/business'
import packagepro from '@/pages/packagepro/packagepro'

Vue.use(Router)

const routes = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/home',
      // model: 'home',
      name: 'home',
      component: home,
      meta: {
        title: '首页'
      }
    },
    // '装修'
    {
      path: '/decoration',
      name: 'decoration',
      component: decoration,
      meta: {
        title: '装修'
      }
    },
    // '主材包'
    {
      path: '/packagepro',
      name: 'packagepro',
      component: packagepro,
      meta: {
        title: '主材包'
      }
    },
    // '五星工长'
    {
      path: '/foreman',
      name: 'foreman',
      component: foreman,
      meta: {
        title: '五星工长'
      }
    },
    // 'DIY 商城'
    {
      path: '/diystore',
      name: 'DIY_store',
      component: DIYstore,
      meta: {
        title: 'DIY商城'
      }
    },
    // '体验馆'
    {
      path: '/boloni',
      name: 'boloni',
      component: boloni,
      meta: {
        title: '体验馆'
      }
    },
    // '装修贷'
    {
      path: '/borrow',
      name: 'borrow',
      component: borrow,
      meta: {
        title: '装修贷'
      }
    },
    // '商学院'
    {
      path: '/business',
      name: 'business',
      component: business,
      meta: {
        title: '商学院'
      }
    }
  ]
})

export default routes

routes.beforeEach((to, from, next) => {
  document.title = to.meta.title || '三只兔'
  next()
})
