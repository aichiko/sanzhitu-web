<template>
  <div class="szt_top">
    <div class="header_top_box">
      <div class="header_top bx clearfix">
        <div class="szt_tel">
          <span style="color: #ddd">客服热线电话：</span><span style="color: #ffe100">400-833-1153</span>
        </div>
        <div class="szt-QRcode-box clearfix">
          <ul class="szt-QRcode-menu">
            <li><i class="icon iconfont icon-shoujiapp"></i> <span>APP</span><div>
              <p>扫一扫下载三只兔APP</p>
              <img src="../../../static/images/home/bottom-app.jpeg" alt="">
            </div></li>
            <li><i class="icon iconfont icon-gongzhonghao"></i> <span>公众号</span><div>
              <p>欢迎关注三只兔微信号</p>
              <img src="../../../static/images/home/weixin.jpeg" alt="">
            </div></li>
            <li><a href="" style="color:#fff"><i class="icon iconfont icon-shigongjindu"></i> 施工进度</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header_tabbar_box">
      <div class="header_tabbar bx">
        <div class="szt-logo">
          <a href="home">
            <img src="../../assets/szt_logo.png" alt="三只兔logo" title="三只兔" width="160" height="60">
          </a>
        </div>
        <div class="tabbar-items clearfix">
          <ul class="szt-items clearfix">
            <li v-for="(content, index) in contents" :key="index" :class="index == selectedindex? 'selected-item': ''">
              <router-link :to="content.path" :target="index === 0 ? '_parent' : '_blank' " replace>
                <a>{{content.title}}</a>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {contains} from '../../config/utils.js'
require('../../style/font/iconfont.css')
export default {
  data () {
    return {
      paths: ['home', 'decoration', 'packagepro', 'foreman', 'diystore', 'boloni', 'borrow', 'business'],
      contents: [
        {
          title: '首页',
          path: '/home'
        },
        {
          title: '装修',
          path: '/decoration'
        },
        {
          title: '主材包',
          path: '/packagepro'
        },
        {
          title: '五星工长',
          path: '/foreman'
        },
        {
          title: 'DIY商城',
          path: '/diystore'
        },
        {
          title: '体验馆',
          path: '/boloni'
        },
        {
          title: '装修贷',
          path: '/borrow'
        },
        {
          title: '商学院',
          path: '/business'
        }
      ]
    }
  },
  methods: {
  },
  computed: {
    selectedindex: function () {
      console.log('path:', this.$route.path)
      var currentPath = this.$route.path
      for (var i = 0; i < this.paths.length; i++) {
        var arr = currentPath.split('/')
        console.log('arr:', arr)
        var path = this.paths[i]
        if (contains(arr, path)) {
          return i
        }
      }
      return 0
    }
  }
}
</script>

<style scoped>
.header_top_box{
  width: 100%;
  background-color: #232323;
}
.header_top {
  height: 30px;
  background-color: #232323;
}

.szt_tel {
  float: left;
  margin-left: 5px;
  height: 30px;
  line-height: 30px;
}

.szt-QRcode-box {
  float: right;
  height: 30px;
  line-height: 30px;
}
.szt-QRcode-box ul {
  height: 30px;
}

.szt-QRcode-menu {
    float: right;
}
.szt-QRcode-menu li{
  float: left;
  cursor: pointer;
  margin-left: 18px;
  margin-right: 5px;
  position: relative;
  z-index: 9999;
  text-decoration: none;
  color: #ddd;
  position: relative;
}
.szt-QRcode-menu li:hover div{
  display: block;
}
.szt-QRcode-menu li div{
  position: absolute;
  top: 30px;
  left: 50%;
  -webkit-transform: translate(-50%,0);
     -moz-transform: translate(-50%,0);
      -ms-transform: translate(-50%,0);
       -o-transform: translate(-50%,0);
          transform: translate(-50%,0);
  padding:10px 20px;
  display: inline-block;
  background: #fff;
  border: 1px solid #e4e4e4;
  display: none;
}
.szt-QRcode-menu li div p{
  color: #FE0000;
  font-size: 12px;
  line-height: 16px;
}
.szt-QRcode-menu li div img{
  width: 110px;
  height:110px;
}
.clearfix {
  display: block;
}
.header_tabbar_box{
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #ddd;
}
.header_tabbar {
  height: 80px;
  line-height: 80px;
  margin: 0 auto;
  background-color: white;
}

.header_tabbar .szt-logo {
  float: left;
}
.header_tabbar .szt-logo a{
  display:inline-block;
}
.tabbar-items {
  float: left;
}

.szt-items{
  margin-left:20px;
}

.szt-items li{
  float: left;
}
.szt-items li a{
  cursor: pointer;
  display: block;
  height: 81px;
  line-height: 81px;
  padding: 0 20px;
  font-size: 15px;
  color: #333;
  text-decoration: none;
}
.szt-items .selected-item a{
  background-color: #ffe100;
  border-bottom: 3px solid #ffe100;
}
.szt-items li a:hover{
  border-bottom: 3px solid #ffe100;
}
</style>
