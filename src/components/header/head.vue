<template>
  <div class="szt_top">
    <div class="header_top clearfix">
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
    <div class="header_tabbar">
      <div class="szt-logo">
        <a href="#">
          <img src="http://www.woimg.com/shop/common/05338438199864045.png" alt="三只兔logo" title="三只兔" width="160" height="60">
        </a>
      </div>
      <div class="tabbar-items clearfix">
        <ul class="szt-items">
          <li v-for="title in titles" :key="title">
            <a href="#">{{title}}</a>
          </li>
        </ul>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      titles: ['首页', '装修', '主材包', '五星工长', 'DIY商城', '体验馆', '装修贷', '商学院']
    }
  }
}
</script>

<style>
.header_top {
  height: 30px;
  background-color: #232323
}

.szt_tel {
  float: left;
  margin-left: 5px;
}

.szt-QRcode-box {
  float: right;
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
  display: block
}

.header_tabbar {
  height: 80px;
  margin: 0;
  background-color: white
}

.header_tabbar .szt-logo {
  float: left;
  line-height: 80px;
}

.tabbar-items {
  float: left;
}

.szt-items ul {
  float: left;
}

.szt-items li {
  float: left;
  cursor: pointer;
  margin-left: 18px;
  margin-right: 5px;
  position: relative;
  z-index: 9999;
  text-decoration: none;
  color: #ddd;
}

</style>
