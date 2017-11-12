<template>
  <div class="clearfix szt-bao-content"> 
    <div class="pack_banner float-left">
      <div class="Alw398zhucaibao-banner-info"  >
        <!-- <p v-for="p in packbanner" :key="p" class="text-justify">{{ p }}</p > -->
      </div>
      <div class="AlwBao-banner-btn Alw398zhucaibao-banner-btn">
          <a href="javascript:void(0);" class="AlwBao-banner-orderBtn js-zhucaibao-yuyue" title="" @click="appointmentAction">免费预约</a>
          <!-- <a href="/packagepro" class="AlwBao-banner-knowBtn" title="" target="_blank">进一步了解</a> -->
          <router-link to="packagepro" target="_blank" class="AlwBao-banner-knowBtn">
            进一步了解
          </router-link>
      </div>
    </div>
    <div class="pack_content float-left" :style="contentStyle" ref="content">
      <ul class="fl">
        <li v-for="(li , index) in packData" :index="index" :key="index" @mouseover="liHoverAction(index)">
          <a href="#" target="_bank" :class="index == 0 ? 'first_a': 'other_a'">{{ li.title }}</a>
        </li>
      </ul>
      <!-- zhucaibao -->
      <div class="float-left" v-if="packIndex === 0">
        <div class="header-info">
          <h3 class="title">{{packData[packIndex].title}}</h3>
          <span class="subtitle">{{packData[packIndex].subtitle}}</span>
        </div>
        <hr style="height:1px;border:none;border-top:1px solid #fff; width: 670px;" />
        <p>{{packData[packIndex].desc}}</p>
        <div style="width: 400px; height: 150px" class="icon-content">
          <div class="szt-icon-title float-left" v-for="(list, index) in zhucaibaoList" :key="list.h5_text">
          <div class="icon float-left" :style="'background: url(/sztwz/static/images/zhucaibao/zhucaibao-icon-' + (index+1) + '.png) 0 0 no-repeat;'"></div>
            <h3>{{list.h3_text}}</h3>
            <h5>{{list.h5_text}}</h5>
          </div>
        </div>
      </div>
      <div class="float-left"  v-else>
        <div class="header-info">
          <h3 class="title">{{packData[packIndex].title}}</h3>
          <span class="subtitle">{{packData[packIndex].subtitle}}</span>
        </div>
        <hr style="height:1px;border:none;border-top:1px solid #fff; width: 670px;" />
        <p>{{packData[packIndex].desc}}</p>
        <div class="image-lists" v-for="(img,index)  in packData[packIndex].images " :key="index">
          <img :src="img" alt="sanztu">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {packData} from '../../config/utils.js'
export default {
  props: {
    ul: {
      type: Array,
      default: function () {
        return ['399主材包', '瓷砖', '木地板', '橱柜', '集成吊顶', '卫浴洁具', '卫浴五金', '室内门', '开关面板']
      }
    }
  },
  data () {
    return {
      zhucaibaoList: [
        {
          icon: '/sztwz/static/icons/icon-1.png',
          h3_text: '名牌正品',
          h5_text: '品牌授权 正品保障'
        },
        {
          icon: '/sztwz/static/icons/icon-2.png',
          h3_text: '实体看样',
          h5_text: '线下体验 验收付款'
        },
        {
          icon: '/sztwz/static/icons/icon-3.png',
          h3_text: '工厂直供',
          h5_text: '厂家采购 杜绝回扣'
        },
        {
          icon: '/sztwz/static/icons/icon-4.png',
          h3_text: '配送安装',
          h5_text: '五星工长 安装无忧'
        }
      ],
      packIndex: 0,
      packData: packData,
      contentStyle: {
        background: 'url(/sztwz/static/images/zhucaibao/zhucaibao-bg-1.png) 0 0 no-repeat'
      }
    }
  },
  methods: {
    liHoverAction: function (index) {
      this.packIndex = index
      this.$refs.content.style.background = 'url(/sztwz/static/images/zhucaibao/zhucaibao-bg-' + (index + 1) + '.png) 0 0 no-repeat'
    },
    appointmentAction: function () {
      console.log('---------')
      this.$emit('appointment')
    }
  }
}
</script>
<style scoped  lang="less" scoped>
.pack_banner{
  width: 300px;
  height: 480px;
  padding: 20px 50px;
  overflow: hidden;
  position: relative;
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
    width: 162px;
    margin: 0 auto;
    margin-bottom: 20px;
    bottom: 0;
    left: 70px;
    position: absolute;
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
  float: right;
  overflow: hidden;
  .fl{
    float: left;
    width: 150px;
    height: 550px;
    padding-top: 20px;
    padding-bottom: 30px;
    .first_a {
      display: block;
      width: 148px;
      height: 48px;
      line-height: 48px;
      text-align: center;
      color: #50e63c;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
      font-family: "Arial","Microsoft YaHei";
      border: 1px solid transparent;
      background: none;
      &:hover {
          background-color: #50e63c;
          color: #333;
          border-color: #50e63c;
      }
    }
    .other_a {
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
    .header-info {
      width: 670px;
      height: 82px;
      line-height: 15px;
      padding-top: 150px;
      padding-bottom: 30px;
      margin: 0 auto;
      .title {
        float: left;
        font-family: "Arial", "Microsoft YaHei";
        font-size: 38px;
        font-weight: bold;
        color: #50e63c;
      }
      h3 {
        display: block;
        font-size: 1.17em;
        -webkit-margin-before: 1em;
        -webkit-margin-after: 1em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
        font-weight: bold;
        padding: 0;
        margin: 0;
      }
      span{
        float: left;
        font-family: "Arial", "Microsoft YaHei";
        font-size: 28px;
        font-weight: bold;
        color: #50e63c;
      }
      .subtitle {
        margin-left: 30px;
        font-size: 20px;
        color: #fff;
        line-height: 20px;
      }
    }
    .icon-content {
      margin-left: 30px;
      margin-top: 30px;
      .szt-icon-title {
        width: 180px;
        height: 50px;
        float: left;
        .icon{
          width: 34px;
          height: 40px;
          margin-right: 20px;
          background: url(/sztwz/static/icons/alw-banner-icon.png) -136px 0 no-repeat;
        }
        h3 {
          margin-left: 10px;
          font-size: 14px;
          line-height: 20px;
          color: #50e63c;
          text-align: left;
          font-weight: bold;
        }
        h5 {
          margin-left: 10px;
          font-size: 13px;
          line-height: 13px;
          color: #fff;
          text-align: left;
          font-weight: bold;
        }
      }
    }
    p{
      width: 670px;
      min-height: 44px;
      margin: 0 auto;
      margin-top: 30px;
      text-align: left;
      font-size: 14px;
      color: #fff;
      line-height: 22px;
    }
    .image-lists {
      position: relative;
      width: 600px;
      margin-left: 30px;
      img {
        float: left;
        margin: 10px;
      }
    }
  }
}
</style>
