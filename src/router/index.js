import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import decoration from '@/pages/decoration/decoration'
import foreman from '@/pages/foreman/foreman'
import foremanDetail from '@/pages/foreman/foremanChildren/formanDetail'
import foremanOrder from '@/pages/foreman/foremanChildren/formanOrder'
import DIYstore from '@/pages/DIY_store/DIY_store'
import boloni from '@/pages/boloni/boloni'
import borrow from '@/pages/borrow/borrow'
import business from '@/pages/business/business'
import packagepro from '@/pages/packagepro/packagepro'
import NotFoundComponent from '@/components/Hello'
import login from '@/pages/login/login'
import backstage from '@/pages/login/backstage'
import bannerSetter from '@/pages/login/banner_setter'

Vue.use(Router)

const routes = new Router({
  // mode: 'history',
  base: '/sztwz',
  routes: [
    { path: '*', component: NotFoundComponent },
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
      component: foreman
    },
    {
      path: '/foremanDetail',
      component: foremanDetail
    },
    {
      path: '/formanOrder',
      name: 'foremanOrder',
      component: foremanOrder
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
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: 'Sign in to Sanztu'
      }
    },
    {
      path: '/user/:name',
      name: 'user',
      component: backstage,
      meta: {
        title: '后台管理'
      },
      children: [
        {
          props: true,
          path: '/user/ash/banner',
          name: 'banner',
          component: bannerSetter,
          meta: {
            title: '设置banner'
          }
        },
        {
          path: '/user/ash/other',
          name: 'other',
          component: backstage,
          meta: {
            title: 'other'
          }
        }
      ]
    }
  ]
})

export default routes

routes.beforeEach((to, from, next) => {
  document.title = to.meta.title || '三只兔'
  next()
})
