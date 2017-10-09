<template>
  <div class="alw-bao-content clearfix">
    <div class="alw-bao-warp float-left">
      <div class="AlwBao-warp-bg" ref="warp" id="warp" :style="warpStyle">
        <div class="AlwBao-hd">
          <ul class="Alw-jiajubao-ul">
            <li v-for="(item , index) in lists" :index="index" :key="index" @mouseover="liHoverAction(index)">
              <a href="#" target="_bank">{{ item }}</a>
            </li>
          </ul>
        </div>
        <div class="AlwBao-bd float-left">
          <div class="AlwBao-sliderTxtbox-header">
            <h3 class="AlwBao-title">{{listData[packIndex].title}}</h3>
            <span class="AlwBao-smallTitle">{{listData[packIndex].subtitle}}</span>
          </div>
          <div class="AlwBao-sliderTxtbox-info">
            <p>{{listData[packIndex].desc}}</p>
          </div>
          <!-- 家具包 -->
          <div v-if="packIndex==0" class="AlwBao-sliderTxtbox-bannerText clearfix">
            <dl v-for="content in listData[packIndex].contents" :key="content.icon">
              <dt><i class="AlwBao-bannerText-icon" :class="content.icon"></i></dt>
              <dd>
                <h3>{{content.title}}</h3>
                <p>{{content.subtitle}}</p>
              </dd>
            </dl>
          </div>
          <!-- 其他栏目 -->
          <div v-else class="alw-jiajubao-styleBox">
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
          </div>
        </div>
      </div>
    </div>
    <div class="alw-bao-banner float-right">
      <div class="AlwBao-banner-btn">
        <a href="javascript:void(0);" class="AlwBao-banner-orderBtn js-jiajubao-yuyue" title="" @click="appointmentAction">免费预约</a>
        <a href="http://www.anlewo.com/furniture_package.html" class="AlwBao-banner-knowBtn" title="" target="_blank">进一步了解</a>
      </div>
    </div>
  </div>
</template>

<script>
// 家具包
export default {
  data () {
    return {
      packIndex: 0,
      lists: ['家具包', '客厅空间', '卧室空间', '餐厅空间'],
      listData: [
        {
          title: '家具包',
          subtitle: '  ——玩转私享空间',
          desc: '安乐窝18件大牌家具包，集客厅空间，餐厅空间、主卧空间及次卧空间等四大空间，主流家具风格，一品一包一风格，让家居更多选择，风格搭配从此不纠结。',
          contents: [
            {
              title: '大品牌',
              subtitle: '大有来头,   汇集国内家具大牌',
              icon: 'AlwBao-bannerText-icon5'
            },
            {
              title: '好品质',
              subtitle: '风格犀利,    打造全屋18件套',
              icon: 'AlwBao-bannerText-icon6'
            },
            {
              title: '高性价比',
              subtitle: '51800元,    让价格回归理性',
              icon: 'AlwBao-bannerText-icon7'
            }
          ]
        },
        {
          title: '客厅空间',
          subtitle: '',
          desc: '客厅空间，涵盖沙发、茶几、电视柜，从考虑到空间，完善家的功能，让您开启家的美妙旅程。',
          backgroundImage: '',
          contents: [
            {
              title: '欧瑞家具 摩卡系列 1.5米床+双床头柜 （W07T7+WTT17+RTD17+W01T1）',
              p_title: '宜家欧陆风风格全屋家具18件套',
              image: 'http://www.woimg.com/shop/store/goods/1/2017/01/1_05371029883490298.jpg@!product-240?1485326900'
            },
            {
              title: '四海美家 简欧风格 卧室小包 223床D(皮屏)+床头柜',
              p_title: '宜家欧陆风风格全屋家具18件套',
              image: 'http://www.woimg.com/shop/store/goods/1/2016/11/1_05336595867324659.jpg@!product-240?1485326900'
            },
            {
              title: '东方家庭 新中式 卧室小包套餐二  床+床头柜 1床2柜',
              p_title: '宜家欧陆风风格全屋家具18件套',
              image: 'http://www.woimg.com/shop/store/goods/1/2016/11/1_05336581421157780.jpg@!product-240?1485326900'
            }
          ]
        },
        {
          title: '卧室空间',
          subtitle: '',
          desc: '卧房空间，卧房是停留最长的地方，一张舒适的床，是梦开始的地方。',
          backgroundImage: '',
          contents: [
            {
              title: '崇雅家具 茶几C2283L00+电视柜 D2283L00',
              p_title: '宜家欧陆风风格全屋家具18件套',
              image: 'http://www.woimg.com/shop/store/goods/1/2017/01/1_05377293391451682.jpg@!product-240?1485327027'
            },
            {
              title: '四海美家 欧式 M08长几D+M08客厅矮柜 C2.0米',
              p_title: '宜家欧陆风风格全屋家具18件套',
              image: 'http://www.woimg.com/shop/store/goods/1/2016/11/1_05338208475204539.jpg@!product-240?1485327027'
            },
            {
              title: '欧瑞家具 摩卡系列 茶几WE313AS+WE313B 地柜WN13B',
              p_title: '宜家欧陆风风格全屋家具18件套',
              image: 'http://www.woimg.com/shop/store/goods/1/2017/01/1_05371001347072981.jpg@!product-240?1485327027'
            }
          ]
        },
        {
          title: '餐厅空间',
          subtitle: '',
          desc: '餐厅空间由餐桌与餐椅构成，辅以餐边柜、酒柜、吧台等家具，享受属于自己的温馨浪漫。',
          backgroundImage: '',
          contents: [
            {
              title: '崇雅家具 餐台A2283L00+餐椅B2265A00',
              p_title: '宜家欧陆风风格全屋家具18件套',
              image: 'http://www.woimg.com/shop/store/goods/1/2017/01/1_05377291499807663.jpg@!product-240?1485326656'
            },
            {
              title: '欧瑞家具 摩卡系列 WT502餐台+WY206餐椅',
              p_title: '宜家欧陆风风格全屋家具18件套',
              image: 'http://www.woimg.com/shop/store/goods/1/2017/01/1_05371044581999785.jpg@!product-240?1485326656'
            },
            {
              title: '四海美家 地中海风格 餐厅小包J02长餐台+J02餐椅',
              p_title: '宜家欧陆风风格全屋家具18件套',
              image: 'http://www.woimg.com/shop/store/goods/1/2016/11/1_05336595499862734.jpg@!product-240?1485326803'
            }
          ]
        }
      ],
      warpStyle: {
        background: 'url(/static/images/AlwJiaJuBao-bg.png) 0 0 no-repeat',
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
      var pointY = 480 * index
      this.$refs.warp.style.backgroundPositionY = -pointY + 'px'
    },
    appointmentAction: function () {
      console.log('---------')
      this.$emit('appointment')
    }
  }
}
</script>

<style lang="less">
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
        li:nth-child(1) a {
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
        padding-top: 40px;
        background: url(/static/images/AlwBao-menu-bg2.png) no-repeat;
        margin: 0 auto;
        .AlwBao-title {
          float: left;
          font-family: "Arial", "Microsoft YaHei";
          font-size: 28px;
          font-weight: bold;
          color: #ffe100;
          
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
          color: #ffe100;
        }
        .AlwBao-smallTitle {
          font-size: 20px;
          color: #fff;
          line-height: 20px;
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
  width: 280px;
  height: 480px;
  padding: 40px 50px;
  overflow: hidden;
  background: url(../../assets/518/jiajubao-banner.png) no-repeat;
  .AlwBao-banner-btn {
    width: 162px;
    margin-top: 300px;
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
