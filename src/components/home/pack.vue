<template>
  <div class="clearfix"> 
    <div class="pack_banner float-left">
      <div class="Alw398zhucaibao-banner-info" v-for="p in packbanner" :key="p" >
        <p v-if="packbanner">{{ p }}</p >
      </div>
      <div class="AlwBao-banner-btn Alw398zhucaibao-banner-btn">
          <a href="javascript:void(0);" class="AlwBao-banner-orderBtn js-zhucaibao-yuyue" title="">免费预约</a>
          <a href="http://www.anlewo.com/packagepro.html" class="AlwBao-banner-knowBtn" title="" target="_blank">进一步了解</a>
      </div>
    </div>
    <div class="pack_content float-left">
      <ul class="fl">
        <li class="first">518主材包</li>
        <li v-for="( li , index) in ul" :index="index" :key="index">{{ li }}</li>
      </ul>
      <div class="float-left" v-for="(x, index) in box" :key="index">
        <h1>
          <span class="one">518主材包</span>
          <span class="two">  ——38项 （主材+辅材）一包搞定</span>
        </h1>
        <p>汇集数十个国内外一线品牌，千款名品，包含地砖、木地板、橱柜、洁具卫浴、门、五金、集成吊顶等38项家庭装修必备主材，一站式购齐，让业主省时、省心、省力、省钱。</p>
        <div v-for="(img,index)  in x.imgs " :key="index">
          <img :src="img" alt="">
        </div>
      </div>
      <div class="float-left" v-for="( x , index ) in box" :key="index" >
        <h1>{{ x.h1 }}</h1>
        <p>{{ x.P }}</p>
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    packbanner: {
      type: Array,
      default: function () {
        return []
      }
    },
    ul: Array,
    box: Array
  },
  data () {
    return {
      index: 1
    }
  },
  methods: {
  }
}
</script>
<style scoped  lang="less">
.pack_banner{
  width: 280px;
  height: 480px;
  padding: 40px 50px;
  overflow: hidden;
  background: url(../../assets/518/zhucaibao-banner.png) no-repeat;
  .Alw398zhucaibao-banner-info{
    font-size: 17px;
    color: #584f1e;
    margin-top: 210px;
    line-height: 23px;
    p{
      text-align: justify;
    }
  }
  .Alw398zhucaibao-banner-btn {
    margin-top: 45px;
    width: 162px;
    margin: 0 auto;
    .AlwBao-banner-orderBtn {
      display: block;
      width: 160px;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      color: #ffe100;
      background-color: #222;
      border: 1px solid #222;
      margin-bottom: 10px;
      text-align: center;
      &:hover {
          color: #fff;
          background-color: #9e7300;
          border: 1px solid #9e7300;
          text-decoration: none;
      }
    }
    .AlwBao-banner-knowBtn {
      display: block;
      width: 160px;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      color: #333;
      border: 1px solid #222;
      text-align: center;
      &:hover {
          color: #9e7300;
          border: 1px solid #9e7300;
          text-decoration: none;
      }
    }
  }
  p{
    font-size: 14px;
    line-height: 26px;
    color: #666;
    text-align: center;
  }
}
.pack_content{
  width: 880px;
  height: 480px;
  overflow: hidden;
  background: url(../../assets/518/alw398bao-bg.png) 0 0 no-repeat;
  ul.fl{
    float: left;
    width: 150px;
    height: 550px;
    padding-top: 40px;
    padding-bottom: 30px;
    li{
      display: block;
      width: 100px;
      height: 40px;
      line-height: 40px;
      margin: 0 auto;
      margin-bottom: 10px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      background: url(../../assets/518/AlwBao-menu-bg.png) no-repeat;
      &:hover{
        background-color: #E2C707;
        color: #333;
      }
    }
    li.first{
      width: 148px;
      height: 48px;
      line-height: 48px;
      text-align: center;
      color: #ffe100;
      font-size: 18px;
      font-weight: bold;
      font-family: "Arial","Microsoft YaHei";
      border: 1px solid transparent;
      background: none;
    }
    
  }
  .float-left{
    position: relative;
    width: 730px;
    height: 480px;
    h1{
      width: 670px;
      height: 42px;
      line-height: 15px;
      padding-top: 40px;
      margin: 0 auto;
      span{
        float: left;
        font-family: "Arial", "Microsoft YaHei";
        font-size: 28px;
        font-weight: bold;
        color: #ffe100;
      }
      span.two{
        font-size: 20px;
        color: #fff;
        line-height: 20px;
      }
    }
    p{
      width: 670px;
      min-height: 44px;
      margin: 0 auto;
      margin-top: 50px;
      text-align: left;
      font-size: 14px;
      color: #fff;
      line-height: 22px;
    }
    div{
      width: 550px;
      margin-left: 30px;
      margin-top: 90px;
      img{
        float: left;
        width: 160px;
        height: 100px;
        margin-right: 10px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
