<template>
  <div class="szt_top">
    <div class="header_top_box">
      <div class="header_top bx clearfix">
        <div class="szt_tel">
          <span style="color: #ddd">客服热线电话：</span><span style="color: #ffe100">400-626-1688</span>
        </div>
        <div class="szt-QRcode-box clearfix">
          <ul class="szt-QRcode-menu">
            <li>app</li>
            <li>公众号</li>
            <li>业主群</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header_tabbar_box">
      <div class="header_tabbar bx">
        <div class="szt-logo">
          <a href="#">
            <img src="http://www.woimg.com/shop/common/05338438199864045.png" alt="三只兔logo" title="三只兔" width="160" height="60">
          </a>
        </div>
        <div class="tabbar-items clearfix">
          <ul class="szt-items clearfix">
            <li v-for="(content, index) in contents" :key="index">
              <router-link :to="content.path" :target="index === 0 ? '_parent' : '_blank' ">
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
export default {
  data () {
    return {
      contents: [
        {
          title: '首页',
          path: 'home'
        },
        {
          title: '装修',
          path: 'decoration'
        },
        {
          title: '主材包',
          path: 'packagepro'
        },
        {
          title: '五星工长',
          path: 'foreman'
        },
        {
          title: 'DIY商城',
          path: 'diystore'
        },
        {
          title: '体验馆',
          path: 'boloni'
        },
        {
          title: '装修贷',
          path: 'borrow'
        },
        {
          title: '商学院',
          path: 'business'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style>
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
.szt-QRcode-menu li {
    float: left;
    cursor: pointer;
    margin-left: 18px;
    margin-right: 5px;
    position: relative;
    z-index: 9999;
    text-decoration: none;
    color: #ddd;
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
  margin-top: 10px;
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
.szt-items li:first-child a{
  background-color: #ffe100;
  border-bottom: 3px solid #ffe100;
}
.szt-items li a:hover{
  border-bottom: 3px solid #ffe100;
}
</style>
