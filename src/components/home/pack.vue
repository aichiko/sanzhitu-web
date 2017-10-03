<template>
  <div class="clearfix"> 
    <div class="pack_banner float-left">
      <div class="Alw398zhucaibao-banner-info"  >
        <p v-for="p in packbanner" :key="p" class="text-justify">{{ p }}</p >
      </div>
      <div class="AlwBao-banner-btn Alw398zhucaibao-banner-btn">
          <a href="javascript:void(0);" class="AlwBao-banner-orderBtn js-zhucaibao-yuyue" title="">免费预约</a>
          <a href="http://www.anlewo.com/packagepro.html" class="AlwBao-banner-knowBtn" title="" target="_blank">进一步了解</a>
      </div>
    </div>
    <div class="pack_content float-left">
      <ul class="fl">
        <li v-for="(li , index) in ul" :index="index" :key="index" @mouseover="liHoverAction(index)">
          <a href="#" target="_bank">{{ li }}</a>
        </li>
      </ul>
      <div class="float-left">
        <h1>
          <span class="one">{{packData[packIndex].title}}</span>
          <span class="two">{{packData[packIndex].subtitle}}</span>
        </h1>
        <p>{{packData[packIndex].desc}}</p>
        <div v-for="(img,index)  in packData[packIndex].images " :key="index">
          <img :src="img" alt="">
        </div>
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
    ul: {
      type: Array,
      default: function () {
        return ['518主材包', '木地板', '瓷砖', '橱柜', '室内门', '洁具卫浴', '卫浴五金', '集成吊顶']
      }
    }
  },
  data () {
    return {
      packIndex: 0,
      packData: [
        {
          title: '518主材包',
          subtitle: '  ——38项 （主材+辅材）一包搞定',
          desc: '汇集数十个国内外一线品牌，千款名品，包含地砖、木地板、橱柜、洁具卫浴、门、五金、集成吊顶等38项家庭装修必备主材，一站式购齐，让业主省时、省心、省力、省钱。',
          backgroundImage: '',
          images: ['', '', '']
        },
        {
          title: '木地板',
          subtitle: '',
          desc: '木地板仅限房屋使用面积的地面，含标配地脚线及防潮垫。',
          backgroundImage: '',
          images: [
            '../../assets/518/baigao.png',
            '../../assets/518/baigao.png',
            '../../assets/518/baigao.png'
          ]
        },
        {
          title: '',
          subtitle: '',
          desc: '',
          backgroundImage: '',
          images: ['', '', '']
        },
        {
          title: '',
          subtitle: '',
          desc: '',
          backgroundImage: '',
          images: ['', '', '']
        },
        {
          title: '',
          subtitle: '',
          desc: '',
          backgroundImage: '',
          images: ['', '', '']
        },
        {
          title: '',
          subtitle: '',
          desc: '',
          backgroundImage: '',
          images: ['', '', '']
        },
        {
          title: '',
          subtitle: '',
          desc: '',
          backgroundImage: '',
          images: ['', '', '']
        }
      ]
    }
  },
  methods: {
    liHoverAction: function (index) {
      this.packIndex = index
    }
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
    .text-justify {
      text-align: justify;
      text-justify: distribute-all-lines;
      text-align-last: justify;
      -moz-text-align-last: justify;
      -webkit-text-align-last: justify;
    }
    p{
      display: block;
      -webkit-margin-before: 1em;
      -webkit-margin-after: 1em;
      -webkit-margin-start: 0px;
      -webkit-margin-end: 0px;
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
  background: url(/static/images/szt398bao-bg.png) 0 0 no-repeat;
  ul.fl{
    float: left;
    width: 150px;
    height: 550px;
    padding-top: 40px;
    padding-bottom: 30px;
    li:nth-child(1) a{
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
      &:hover {
          background-color: #ffe100;
          color: #333;
          border-color: #ffe100;
      }
    }
    li a{
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
        background: url(../../assets/518/AlwBao-menu-btn.png) no-repeat;
        display: block;
        color: #333;
      }
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
