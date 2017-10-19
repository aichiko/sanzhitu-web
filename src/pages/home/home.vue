<template>
  <div>
    <header class="headerBox">
      <home-header></home-header>
    </header>
    <div class="banner_area">
      <div class="fr">
        <!--banner-->
        <div class="alw-home-banner" id="home-banner">
          <home-banner></home-banner>
        </div>
      </div>
    </div>
    <div>
      <div  v-for="(txt, index) in titles" :key="txt.p">
        <home-pro-title :title="txt"></home-pro-title>
        <div v-if="index==0" class="bx">
          <ul class="alw-service-bar clearfix">
            <li v-for="(b, i) in bar" :key="i">
              <a href="javascript: ;" class="js-yuyue">
                <p><img src="" alt="" width="50" height="50"></p>
                <p>{{ b }}</p>
              </a>
              <span v-if="i!=bar.length-1"><img src="../../../static/icons/right.jpg" height="37" width="14" alt=""></span>
            </li>
          </ul>
        </div>
        <div v-else-if="index==1" class="bx">
          <div class="alw-product-list clearfix">
            <a class="alw-zhucaibao" href="http://www.anlewo.com/packagepro.html" target="_blank">
                <div class="alw-product-box">
                    <!-- <div class="alw-product-name"><div class="alw-product-subName" style="color: #f09808;">518<span style="font-size:14px;">元/m²</span></div>豪装主材包</div> -->
                    <!-- <p class="alw-product-describe">品牌·环保·优质</p> -->
                </div>
            </a>
            <a class="alw-jiajubao" href="http://www.anlewo.com/furniture_package.html" target="_blank">
                <div class="alw-product-box">
                    <!-- <div class="alw-product-name"><div class="alw-product-subName" style="color: #6a3821;">18件套</div>品牌家具包</div> -->
                    <!-- <p class="alw-product-describe">卓越大牌·匠心品质</p> -->
                </div>
            </a>
            <a class="alw-zhengzhuangbao" href="http://www.anlewo.com/ready_package.html" target="_blank">
                <div class="alw-product-box">
                    <!-- <div class="alw-product-name"><div class="alw-product-subName" style="color: #2d446f;">百变</div>整装包</div> -->
                    <!-- <p class="alw-product-describe">家居魔方·百变组合</p> -->
                </div>
            </a>
          </div>
          <div style="margin-top:40px">
            <home-pack :packbanner="packbanner" :ul='ul' v-on:appointment="showAppointmentView"></home-pack>
          </div>
          <div style="margin-top:40px">
            <jiajubao-pack  @appointment="showAppointmentView"></jiajubao-pack>
          </div>
        </div>
        <div v-else-if="index==2">
          <home-designer class="designer-team bx"></home-designer>
          <img src="../../../static/images/home.png" width="100%" alt="">
          <div class="bx">
            <router-link to="boloni" target='_blank'>
              <echartsChina></echartsChina>
            </router-link>
          </div>
        </div>
        <div v-else-if="index==3" class="bx">
          <home-videos></home-videos>
        </div>
      </div>
    </div>
    <transition name="el-fade-in-linear">
      <cc-appointment v-if="showAppointment" @close="hideAppointmentView"></cc-appointment>
    </transition>
    <footer>
      <home-footer style="width: 100%"></home-footer>
    </footer>
  </div>
</template>

<script>
import head from '@/components/header/head'
import footer from '@/components/footer/footer'
import banner from '@/components/banner/banner'
import proTitle from '../../components/decoration/decTitle.vue'
import pack from '../../components/home/pack'
import videos from '@/components/home/videos'
import echartsChina from '../../components/home/echartsChina'
import homePack from '@/components/home/homePack'
import designer from '@/components/home/designer'
import ccAppointment from '@/components/appointment/cc_appointment'

export default {
  data () {
    return {
      message: '23333',
      showAppointment: false,
      icons: [],
      titles: [
        {
          title: '装修流程',
          sup: '一站式服务，安心无忧'
        },
        {
          title: '精选产品',
          sup: '多种选择，多彩生活'
        },
        {
          title: '设计团队',
          sup: '因为专业，所有值得'
        },
        {
          title: '最新视频',
          sup: '有我陪伴，生活更好'
        }
      ],
      bar: ['在线预约', '实景体验', '签约下定', '装修方案', '施工控制', '服务评价'],
      ul: ['399主材包', '木地板', '瓷砖', '橱柜', '室内门', '洁具卫浴', '卫浴五金', '集成吊顶'],
      packbanner: ['装修必备主材', '7类38项一包搞定']
    }
  },
  components: {
    'home-header': head,
    'home-footer': footer,
    'home-banner': banner,
    'home-pro-title': proTitle,
    'home-pack': pack,
    'echartsChina': echartsChina,
    homeDesigner: designer,
    homeVideos: videos,
    jiajubaoPack: homePack,
    ccAppointment: ccAppointment
  },
  methods: {
    iconHover: function (index, e) {
      console.log(e)
      var icon = 'static/icons/icon-' + (index + 1) + '-hover' + '.png'
      var style = 'background: url(' + icon + ') no-repeat center'
      e.toElement.style = style
    },
    serviceIcon: function (index) {
      var icon = 'static/icons/icon-' + (index + 1) + '.png'
      return 'background: url(' + icon + ') no-repeat center'
    },
    showAppointmentView: function () {
      this.showAppointment = true
    },
    hideAppointmentView: function () {
      this.showAppointment = false
    }
  }
}
</script>
<style lang="less" scoped>
.headerBox {
  width: 100%;
}

.banner_area{
  width: 100%;
  height: 450px;
  .bx{
    position: relative;
    width: 1180px;
    height: 450px;
    margin-top: 20px;
    .fl{
      float: left;
      width: 230px;
      height: 450px;
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
      background: url(../../assets/pro/szt_product_1.png) no-repeat center;
    }
    &.alw-jiajubao {
        margin: 0 20px;
        background: url(../../assets/pro/szt_product_2.png) no-repeat center;
    }
    &.alw-zhengzhuangbao {
        background: url(../../assets/pro/szt_product_3.png) no-repeat center;
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
  li{
    float: left;
    text-align: center;
    a{
      display: inline-block;
      border: 2px solid #B9B9B9;
      width: 125px;
      height: 125px;
      color: #B9B9B9;
      padding-top: 25px;
      border-radius:22px;
      vertical-align:top;
      &:hover{
        border: 2px solid #FE0000;
        p{
          color: #FE0000;
        }
      }
      p{
        font-size: 14px;
        height:50px;
        line-height: 50px;
        color: #B4B4B4;
      }
    }
    span{
      display: inline-block;
      width: 74px;
      height:125px;
      font-size: 37px;
      text-align: center;
      line-height: 125px;
    }
  }
}

// 设计师团队 样式
.designer-team {
  width: 1220px; height: 560px
}

</style>
