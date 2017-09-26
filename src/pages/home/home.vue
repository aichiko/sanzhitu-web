<template>
  <div>
    <div class="headerBox">
      <home-header></home-header>
    </div>    
    <div class="banner_area">
        <div class="bx clearfix">
            <div class="fl">
                <div class="firstPart-left-desc">
                  <p id="txtLocation">全国<i>&nbsp;95&nbsp;</i>家</p>
                </div>
                <div class="firstPart-left-header">
                    <div class="firstPart-left-img">
                        <img src="http://www.woimg.com/mobile/map_img/05186925711668653.jpg" id="museumImg">
                    </div>
                    <div class="firstPart-left-imgBg"></div>
                    <p class="firstPart-left-name" id="museumTitle">保山隆阳标准店</p>
                    <ul class="firstPart-nav" id="firstPart-nav"><li class="on"></li></ul>
                </div>
                <div class="firstPart-left-body">
                    <p><label>营业时间：</label><span class="firstPart-left-time" id="museumHour">9:00-19:30</span></p>
                    <p><label>电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话：</label><span class="firstPart-left-phone" id="museumPhone">400-626-1688</span></p>
                    <p class="museumHour-adress"><label>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：</label><span class="firstPart-left-adress" id="museumAddress" title="云南省保山市隆阳区义乌国际商贸城">云南省保山市隆阳区义乌国际商贸城</span></p>

                    <a class="firstPart-left-btn" href="http://www.anlewo.com/exp_map.html" target="_blank">寻找身边体验馆</a>
                </div>
            </div>
            <div class="fr">
                <!--banner-->
                <div class="alw-home-banner" id="home-banner">
                    <home-banner :imageLists="images"></home-banner>
                </div>
            </div>
        </div>
    </div>
    <div >
      <div class="bx">
        <home-pro-title></home-pro-title>
        <div class="alw-product-list clearfix">
            <a class="alw-zhucaibao" href="http://www.anlewo.com/packagepro.html" target="_blank">
                <div class="alw-product-box">
                    <div class="alw-product-name"><div class="alw-product-subName" style="color: #f09808;">518<span style="font-size:14px;">元/m²</span></div>豪装主材包</div>
                    <p class="alw-product-describe">品牌·环保·优质</p>
                </div>
            </a>
            <a class="alw-jiajubao" href="http://www.anlewo.com/furniture_package.html" target="_blank">
                <div class="alw-product-box">
                    <div class="alw-product-name"><div class="alw-product-subName" style="color: #6a3821;">18件套</div>品牌家具包</div>
                    <p class="alw-product-describe">卓越大牌·匠心品质</p>
                </div>
            </a>
            <a class="alw-zhengzhuangbao" href="http://www.anlewo.com/ready_package.html" target="_blank">
                <div class="alw-product-box">
                    <div class="alw-product-name"><div class="alw-product-subName" style="color: #2d446f;">百变</div>整装包</div>
                    <p class="alw-product-describe">家居魔方·百变组合</p>
                </div>
            </a>
        </div>
      </div>
    </div>
    <div >
      <div class="bx">
        <home-pro-title :txt="txts[1]"></home-pro-title>
        <ul class="alw-service-bar clearfix">
          <li v-for="(b, i) in bar" :key="i">
              <a href="javascript: ;" class="js-yuyue">
                  <span class="alw-service-name">{{ b }}</span>
                  <div class="alw-service-icon">
                      <i :class="i" :style="'background: url(static/icons/icon-'+(i + 1)+'.png) no-repeat center'"></i>
                  </div>
              </a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="bx">
        <home-pro-title></home-pro-title>
        <home-pack :packbanner="packbanner" :ul="ul" :box="box"></home-pack>
      </div>
    </div>
    <div>
      <div class="bx">
        <echartsChina></echartsChina>
      </div>
    </div>
    <div>
      <home-footer></home-footer>
    </div>
  </div>
</template>


<script>
import head from '@/components/header/head'
import footer from '@/components/footer/footer'
import banner from '@/components/banner/banner'
import a from '@/assets/banners/banner2.jpg'
import proTitle from '../../components/home/proTitle'
import pack from '../../components/home/pack'
import echartsChina from '../../components/home/echartsChina'

export default {
  data () {
    return {
      message: '23333',
      images: [
        {
          url: a
        },
        {
          url: a
        },
        {
          url: a
        }
      ],
      txts: [
        {
          h: '特色产品',
          P: 'f2C模式，剩一半'
        },
        {
          h: '服务流程',
          P: '一体化服务，选材乐无忧'
        },
        {
          h: '518主材包',
          P: '品牌  环保  优质'
        },
        {
          h: '家具包',
          P: '玩转私享空间'
        },
        {
          h: '百变整装包',
          P: '家居魔方 百变组合'
        },
        {
          h: '装修效果图',
          P: '制定专属家居风格'
        },
        {
          h: '装修窝视野',
          P: '一窝看尽时下新资讯'
        },
        {
          h: '线下体验馆',
          P: '安乐窝·在中国'
        }
      ],
      bar: [
        '在线预约',
        '实景体验',
        '签约下定',
        '装修方案',
        '施工控制',
        '服务评价'
      ],
      packbanner: [
        '装修必备主材',
        '7类38项一包搞定'
      ],
      ul: [
        '木地板',
        '瓷砖',
        '橱柜',
        '室内门',
        '洁具卫浴',
        '卫浴五金',
        '集成吊顶'
      ],
      box: [
        {
          h1: '木地板',
          P: '地板仅限房屋使用面积的地面，含标配地脚线及防潮垫。',
          imgs: [
            '../../assets/518/baigao.png',
            '../../assets/518/baigao.png',
            '../../assets/518/baigao.png'
          ]
        },
        {
          h1: '木地板',
          P: '木地板仅限房屋使用面积的地面，含标配地脚线及防潮垫。',
          imgs: [
            '../../assets/518/baigao.png',
            '../../assets/518/baigao.png'
          ]
        },
        {
          h1: '木地板',
          P: '木地板仅限房屋使用面积的地面，含标配地脚线及防潮垫。',
          imgs: [
            '../../assets/518/baigao.png',
            '../../assets/518/baigao.png',
            '../../assets/518/baigao.png',
            '../../assets/518/baigao.png'
          ]
        },
        {
          h1: '木地板',
          P: '木地板仅限房屋使用面积的地面，含标配地脚线及防潮垫。',
          imgs: [
            '../../assets/518/baigao.png',
            '../../assets/518/baigao.png',
            '../../assets/518/baigao.png'
          ]
        },
        {
          h1: '木地板',
          P: '木地板仅限房屋使用面积的地面，含标配地脚线及防潮垫。',
          imgs: [
            '../../assets/518/baigao.png',
            '../../assets/518/baigao.png',
            '../../assets/518/baigao.png'
          ]
        },
        {
          h1: '木地板',
          P: '木地板仅限房屋使用面积的地面，含标配地脚线及防潮垫。',
          imgs: [
            '../../assets/518/baigao.png',
            '../../assets/518/baigao.png',
            '../../assets/518/baigao.png'
          ]
        },
        {
          h1: '木地板',
          P: '木地板仅限房屋使用面积的地面，含标配地脚线及防潮垫。',
          imgs: [
            '../../assets/518/baigao.png',
            '../../assets/518/baigao.png',
            '../../assets/518/baigao.png'
          ]
        }
      ]
    }
  },
  components: {
    'home-header': head,
    'home-footer': footer,
    'home-banner': banner,
    'home-pro-title': proTitle,
    'home-pack': pack,
    'echartsChina': echartsChina
  }
}
</script>
<style lang="less">
.banner_area{
  width: 100%;
  height:426px;
  .bx{
    position: relative;
    width: 1180px;
    height: 426px;
    margin-top: 20px;
    .fl{
      float: left;
      width: 230px;
      height: 425px;
      position: relative;
      .firstPart-left-desc{
        position: absolute;
        top: 8px;
        left: -6px;
        width: 84px;
        height: 48px;
        background: url('../../assets/banners/home-mueum-desc.png') no-repeat;
        font-size: 12px;
        color: #fff;
        z-index: 2;
        padding-top: 5px;
        padding-left: 9px;
        p{
          line-height: 15px;
          i{
            font-size: 12px;
            font-weight: 600;
          }
        }
      }
      .firstPart-left-header {
        position: relative;
        width: 230px;
        height: 216px;
        text-align: center;
        overflow: hidden;
        .firstPart-left-img {
          width: 124px;
          height: 124px;
          margin: 0 auto;
          margin-top: 30px;
          img{
              width: 124px;
              height: 124px;
          }
        }
        .firstPart-left-imgBg {
          position: absolute;
          top: 0;
          left: 0;
          width: 230px;
          height: 216px;
          background: url(../../assets/banners/home-fristPart-bg.png) no-repeat;
          z-index: 1;
        }
        .firstPart-left-name {
          position: absolute;
          width: 230px;
          max-height: 40px;
          font-size: 16px;
          color: #333;
          overflow: hidden;
          margin-top: 8px;
          font-weight: bold;
          left: 0;
          z-index: 6;
        }
        .firstPart-nav {
          position: absolute;
          right: 0;
          left: 0;
          bottom: 8px;
          height: 18px;
          z-index: 6;
          text-align: center;
          li {
            cursor: pointer;
            display: inline-block;
            zoom: 1;
            width: 8px;
            height: 8px;
            margin: 0 5px;
            background: url(../../assets/banners/firstPart-nav.png) left top no-repeat;
            vertical-align: middle;
            overflow: hidden;
            &.on{
              background-position: right top;
            }
          }
        }
      }
      .firstPart-left-body {
        width: 230px;
        height: 210px;
        background-color: #fff;
        font-size: 12px;
        color: #333;
        padding: 20px 20px;
        p{
          display: inline-block;
          line-height: 17px;
          label{
            float: left;
          }
          span{
            float: left;
            width: 130px;
            max-height: 70px;
            overflow: hidden;
            text-align:left;
          }
          &.museumHour-adress {
            min-height: 70px;
          }
        }
        .firstPart-left-btn {
          display: block;
          width: 160px;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          color: #333;
          border-radius: 5px;
          text-align: center;
          margin: 0 auto;
          background-color: #ffe100;
          margin-top: 10px;
        }
      }
    }
    .fr{
      float: right;
      width: 930px;
      height: 395px;
      .alw-home-banner {
        position: relative;
        width: 930px;
        height: 425px;
        overflow: hidden;
        .bd{
          position: relative;
          z-index: 0;
        }
      }
      .firstPart-right-activity {
        width: 930px;
        height: 105px;
        .firstPart-right-activityImg {
          float: left;
          width: 820px;
          height: 105px;
          li{
            float: left;
            width: 270px;
            height: 105px;
            overflow: hidden;
            &.activityImg1 {
              width: 280px;
            }
          }
        }
        .firstPart-right-activityMore {
          display: inline-block;
          float: right;
          width: 110px;
          height: 105px;
          text-align: center;
          font-size: 12px;
          background-color: #fff;
          &:hover{
            span{
              color: #9e7300;
              background: url(../../assets/banners/alw-small-circle.png) -84px 0 #fff no-repeat;
              i{
                background: url(../../assets/banners/arrow-hover-icon.png) 0 0 no-repeat;
              }
            }
          }
          span {
            display: block;
            position: relative;
            top: 11px;
            width: 84px;
            height: 84px;
            line-height: 84px;
            padding-left: 3px;
            margin: 0 auto;
            background: url(../../assets/banners/alw-small-circle.png) 0 0 #fff no-repeat;
            cursor: pointer;
            .right-arrow {
              display: inline-block;
              width: 14px;
              height: 14px;
              vertical-align: middle;
              margin-top: 3px;
              background: url(../../assets/banners/alw-right-arrow.png) 0 0 no-repeat;
            }
          }
        }
      }
    }
  }
}
.alw-product-list{
  a{
    float: left;
    width: 380px;
    height: 220px;
    cursor: pointer;
    overflow: hidden;
    text-align: left;
    &.alw-zhucaibao{
      background: url(../../assets/pro/alw_product_1.png?20170310) no-repeat center;
    }
    &.alw-jiajubao {
        margin: 0 20px;
        background: url(../../assets/pro/alw_product_2.png?20170310) no-repeat center;
    }
    &.alw-zhengzhuangbao {
        background: url(../../assets/pro/alw_product_3.png?20170310) no-repeat center;
    }
    .alw-product-box {
      margin: 64px 0 0 40px;
      display: inline-block;
      .alw-product-name {
        margin-bottom: 6px;
        font-family: "SimSun","STSong","NSimSun";
        font-size: 28px;
        font-weight: 600;
        line-height: 36px;
        text-align: center;
        border-bottom: 1px solid #222;
        color: #222;
        .alw-product-subName {
          font-size: 28px;
          line-height: 28px;
          span{
            font-size: 14px;
          }
        }
      }
      .alw-product-describe {
        margin-bottom: 18px;
        height: 32px;
        overflow: hidden;
        font-size: 14px;
        line-height: 1.2;
        color: #222;
        text-align: justify;
        text-justify: distribute-all-lines;
        text-align-last: justify;
        -moz-text-align-last: justify;
        -webkit-text-align-last: justify;
      }
    }
  }
  
}
.alw-service-bar{
  margin-top: 42px;
  padding: 0 2px;
  border-top: 2px solid #9e7300;
  li{
    position: relative;
    top: -42px;
    float: left;
    a{
      display: inline-block;
      margin: 0 52px;
      width: 90px;
      height: 148px;
      color: #666;
      text-decoration: none;
      background: url(../../assets/bar/alw_service.png) no-repeat center 35px;
      &:hover{
        span{
          color: #9e7300;
        }
        background: url(../../assets/bar/alw_service_hover.png) no-repeat center 35px;
      }
      .alw-service-name {
        display: block;
        font-size: 16px;
        text-align: center;
      }
      .alw-service-icon {
        cursor: pointer;
        margin: 38px auto 0 auto;
        width: 90px;
        height: 90px;
        background: url(../../assets/bar/alw_service_bg.png) no-repeat center;
        text-align: center;
        vertical-align: middle;
        i{
          display: block;
          width: 90px;
          height: 90px;
        }
      }
    }
  }
}


</style>
