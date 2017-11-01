<template>
  <div class="alw-bao-content clearfix">
    <div class="alw-bao-warp float-left">
      <div class="AlwBao-warp-bg" ref="warp" id="warp" :style="warpStyle">
        <div class="AlwBao-hd">
          <ul class="Alw-jiajubao-ul">
            <li v-for="(item , index) in lists" :index="index" :key="index" @mouseover="liHoverAction(index)">
              <a href="#" target="_bank" :class="index == 0 ? 'first_a': 'other_a'">{{ item }}</a>
            </li>
          </ul>
        </div>
        <div class="AlwBao-bd float-left" v-if="packIndex === 0">
          <div class="AlwBao-sliderTxtbox-header">
            <h3 class="AlwBao-title">{{listData[packIndex].title}}</h3>
            <span class="AlwBao-smallTitle">{{listData[packIndex].subtitle}}</span>
          </div>
          <hr style="height:1px;border:none;border-top:1px solid #fff; width: 670px;" />
          <div class="AlwBao-sliderTxtbox-info">
            <p>{{listData[packIndex].desc}}</p>
          </div>
          <!-- 家具包 -->
          <div style="width: 400px; height: 150px" class="icon-content">
            <div class="szt-icon-title float-left" v-for="(list, index) in listData[packIndex].contents" :key="list.title">
              <div class="icon float-left" :style="'background: url(/static/images/jiajubao/jiajubao-icon-' + (index + 1) + '.png) 0 0 no-repeat;'"></div>
              <h3>{{list.title}}</h3>
              <h5>{{list.subtitle}}</h5>
            </div>
          </div>
        </div>
        <div v-else class="AlwBao-bd float-left">
          <div class="AlwBao-sliderTxtbox-header">
            <h3 class="AlwBao-title">{{listData[packIndex].title}}</h3>
            <span class="AlwBao-smallTitle">{{listData[packIndex].subtitle}}</span>
          </div>
          <hr style="height:1px;border:none;border-top:1px solid #fff; width: 670px;" />
          <div class="AlwBao-sliderTxtbox-info">
            <p>{{listData[packIndex].desc}}</p>
          </div>
          <!-- 其他栏目 -->
          <div class="image-lists" v-for="(img,index)  in listData[packIndex].images " :key="index">
            <img :src="img" alt="sanztu">
          </div>
        </div>
      </div>
    </div>
          <!-- <div class="alw-jiajubao-styleBox">
            <div class="alw-jiajubao-styleMove">
              <a href="http://www.anlewo.com/cate-463-0-0-0-0-0-0-0-0.html" title="" target="_blank">更多<i class="alw-more-icon"></i></a>
            </div>
            <div class="alw-jiajubao-styleList">
              <ul class="clearfix">
                <li v-for="content in listData[packIndex].contents" :key="content.title">
                  <a href="/#" target="_blank" :title="content.title">
                    <div class="alw-jiajubao-styleImg">
                        <img :src="content.image" alt="">
                    </div>
                    <p class="alw-jiajubao-styleInfo" :title="content.p_title">{{content.title}}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div> -->
    <div class="alw-bao-banner float-right">
      <div class="AlwBao-banner-btn">
        <a href="javascript:void(0);" class="AlwBao-banner-orderBtn js-jiajubao-yuyue" title="" @click="appointmentAction">免费预约</a>
        <a href="/packagepro" class="AlwBao-banner-knowBtn" title="" target="_blank">进一步了解</a>
      </div>
    </div>
  </div>
</template>

<script>
import {jiajubaoData} from '../../config/utils.js'
// 家具包
export default {
  data () {
    return {
      packIndex: 0,
      lists: ['家电包', '全屋家电', '全屋厨电'],
      listData: jiajubaoData,
      warpStyle: {
        background: 'url(/static/images/jiajubao/jiajubao-bg-1.png) 0 0 no-repeat',
        display: 'block',
        padding: 0,
        margin: 0,
        'background-position': '0 0'
      }
    }
  },
  methods: {
    liHoverAction: function (index) {
      this.packIndex = index
      this.$refs.warp.style.background = 'url(/static/images/jiajubao/jiajubao-bg-' + (index + 1) + '.png) 0 0 no-repeat'
    },
    appointmentAction: function () {
      console.log('---------')
      this.$emit('appointment')
    }
  }
}
</script>

<style lang="less" scoped>
.alw-bao-warp {
  width: 880px;
  height: 480px;
  overflow: hidden;
  .AlwBao-warp-bg {
    width: 880px;
    height: 480px;
    .AlwBao-hd {
      float: left;
      width: 150px;
      height: 480px;
      .Alw-jiajubao-ul {
        padding-top: 140px;
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
    }
    .AlwBao-bd {
      position: relative;
      width: 730px;
      height: 480px;
      float: left;
      display: block;
      .alw-jiajubao-styleBox {
        height: 285px;
        margin-top: 20px;
        .alw-jiajubao-styleMove {
          width: 670px;
          height: 20px;
          text-align: right;
          font-size: 12px;
          color: #fff;
          margin: 0 auto;
          .alw-more-icon {
            display: inline-block;
            width: 10px;
            height: 9px;
            margin-left: 5px;
            background: url(/static/icons/more-icon.png) no-repeat;
            vertical-align: middle;
          }
          a {
            font-size: 12px;
            color: #fff;
            &:hover {
              text-decoration: none;
            }
            &:link {
              text-decoration: none;
            }
          }
        }
        .alw-jiajubao-styleList {
          margin-top: 5px;
          ul {
            display: block;
            width: 690px;
            margin: 0 auto;
            li {
              float: left;
              width: 210px;
              height: 260px;
              margin-left: 10px;
              margin-right: 10px;
              background-color: #fff;
              a {
                display: inline-block;
                width: 100%;
                height: 100%;
                .alw-jiajubao-styleImg {
                  width: 210px;
                  height: 210px;
                  padding: 10px 10px;
                  overflow: hidden;
                  cursor: pointer;
                  img {
                    width: 190px;
                    height: 190px;
                    border: medium none;
                    vertical-align: middle;
                  }
                }
                .alw-jiajubao-styleInfo {
                  display: block;
                  height: 40px;
                  padding: 0 10px;
                  font-size: 13px;
                  color: #333;
                  text-align: center;
                  line-height: 20px;
                  overflow: hidden;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
      .AlwBao-sliderTxtbox-bannerText {
        width: 550px;
        margin-left: 30px;
        margin-top: 45px;
        display: block;
        dl {
          float: left;
          margin-right: 40px;
          margin-bottom: 40px;
          dt {
            display: block;
            float: left;
          }
          dd {
            padding-left: 54px;
            h3 {
              font-size: 20px;
              color: #ffe100;
              font-weight: bold;
              display: block;
              font-size: 1.17em;
              -webkit-margin-before: 1em;
              -webkit-margin-after: 1em;
              -webkit-margin-start: 0px;
              -webkit-margin-end: 0px;
              padding: 0px;
              margin: 0px;
              text-align: left;
            }
            p {
              font-size: 14px;
              color: #fff;
              padding: 0px;
              margin: 0px;
              display: block;
            }
          }
        }
        .AlwBao-bannerText-icon {
          display: block;
          width: 34px;
          height: 40px;
          i {
            font-style: normal;
          }
        }
        .AlwBao-bannerText-icon5 {
          background: url(/static/icons/alw-banner-icon.png) -136px 0 no-repeat;
        }
        .AlwBao-bannerText-icon6 {
          background: url(/static/icons/alw-banner-icon.png) -204px 0 no-repeat;
        }
        .AlwBao-bannerText-icon7 {
          background: url(/static/icons/alw-banner-icon.png) -170px 0 no-repeat;
        }
      }
      .AlwBao-sliderTxtbox-header {
        width: 670px;
        height: 82px;
        line-height: 15px;
        padding-top: 150px;
        padding-bottom: 30px;
        margin: 0 auto;
        .AlwBao-title {
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
        .AlwBao-smallTitle {
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
            background: url(/static/icons/alw-banner-icon.png) -136px 0 no-repeat;
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
      .image-lists {
        position: relative;
        width: 600px;
        margin-left: 30px;
        img {
          float: left;
          margin: 10px;
        }
      }
      .AlwBao-sliderTxtbox-info {
        width: 670px;
        min-height: 64px;
        margin: 0 auto;
        margin-top: 17px;
        font-size: 14px;
        color: #fff;
        line-height: 22px;
        display: list-item;
        text-align: -webkit-match-parent;
        display: block;
        p {
          display: block;
          text-align: left;
          -webkit-margin-before: 1em;
          -webkit-margin-after: 1em;
          -webkit-margin-start: 0px;
          -webkit-margin-end: 0px;
          padding: 0;
          margin: 0;
        }
      }
    }
  }
}

.alw-bao-banner {
  width: 300px;
  height: 480px;
  padding: 40px 50px;
  overflow: hidden;
  background: url(../../assets/518/jiajubao-banner.png) no-repeat;
  position: relative;
  .AlwBao-banner-btn {
    width: 162px;
    margin-top: 300px;
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
      a {
        color: #333;
        text-decoration: none;
        outline: medium none;
        -webkit-transition-property: color;
        -webkit-transition-duration: 0.3s;
        -webkit-transition-timing-function: ease;
      }
      a:link, a:visited, a:active {
        text-decoration: none;
      }
      a:-webkit-any-link {
        color: -webkit-link;
        cursor: auto;
        text-decoration: underline;
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
        color: #fff;
        background-color: #9e7300;
        border: 1px solid #9e7300;
        text-decoration: none;
      }
      a {
        color: #333;
        text-decoration: none;
        outline: medium none;
        -webkit-transition-property: color;
        -webkit-transition-duration: 0.3s;
        -webkit-transition-timing-function: ease;
      }
      a:link, a:visited, a:active {
        text-decoration: none;
      }
      a:-webkit-any-link {
        color: -webkit-link;
        cursor: auto;
        text-decoration: underline;
      }
    }
  }
}

</style>
