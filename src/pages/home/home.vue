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
                <p><img :src="'../../static/homebar-icons/icon-'+(i+1)+'.png'" alt="" width="50" height="50"></p>
                <p>{{ b }}</p>
              </a>
              <span v-if="i!=bar.length-1"><img src="../../../static/icons/right.jpg" height="37" width="14" alt=""></span>
            </li>
          </ul>
        </div>
        <div v-else-if="index==1" class="bx">
          <div class="alw-product-list clearfix">
            <a class="alw-zhucaibao" href="/packagepro" target="_blank">
                <div class="alw-product-box">
                    <!-- <div class="alw-product-name"><div class="alw-product-subName" style="color: #f09808;">518<span style="font-size:14px;">元/m²</span></div>豪装主材包</div> -->
                    <!-- <p class="alw-product-describe">品牌·环保·优质</p> -->
                </div>
            </a>
            <a class="alw-jiajubao" href="/packagepro" target="_blank">
                <div class="alw-product-box">
                    <!-- <div class="alw-product-name"><div class="alw-product-subName" style="color: #6a3821;">18件套</div>品牌家具包</div> -->
                    <!-- <p class="alw-product-describe">卓越大牌·匠心品质</p> -->
                </div>
            </a>
            <a class="alw-zhengzhuangbao" href="/packagepro" target="_blank">
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
    <insDiv></insDiv>
    <transition name="el-fade-in-linear">
      <cc-appointment v-if="showAppointment" @close="hideAppointmentView"></cc-appointment>
    </transition>
    <footer>
      <home-footer style="width: 100%"></home-footer>
    </footer>
    <transition name="appointBox">
      <div class="bottom-fixed-box" v-show="appointBoxS">
        <div class="bottom-fixed-bg"></div>
        <div class="no-filter">
          <div class="bottom-wrap-box bx">
            <div class="bottom-warp-left">
                <!-- <div class="warp-left-number">71</div> -->
            </div>
            <div class="bottom-warp-center clearfix">
              <appoint-form :countryData="countryData"></appoint-form>
            </div>
            <div class="bottom-warp-right">
              <div class="warp-right-app">
                <p class="right-app-title">下载App</p>
                <p class="right-app-img"></p>
              </div>
              <div class="bottom-warp-colse" @click="closeAppoint"></div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="appointIcon">
      <a class="bottom-fixed-show" @click="showAppointBox" v-show="appointIcon"><span class="bottom-fixed-title"></span></a>
    </transition>
    <insDiv></insDiv>
    <bar></bar>
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
import AppointForm from '@/components/home/appiontForm'
import ins from '../../components/home/ins'
// import {getCountry, getShops} from '../../config/country.js'
import bar from '../../components/home/bar'

export default {
  data () {
    return {
      appointIcon: true,
      appointBoxS: false,
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
      packbanner: ['装修必备主材', '7类38项一包搞定'],
      countryData: {}
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
    ccAppointment: ccAppointment,
    'appoint-form': AppointForm,
    insDiv: ins,
    bar
  },
  methods: {
    showAppointBox () {
      this.appointBoxS = true
      this.appointIcon = false
      this.countryData = this.$store.getters.countryData
    },
    closeAppoint () {
      this.appointBoxS = false
      this.appointIcon = true
    },
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
  },
  mounted: function () {
    // var that = this
    // getCountry(function (countryData) {
    //   console.log(that.$store)
    //   that.$store.commit('setCountryData', countryData.data.rows[0])
    // })
    // getShops(function (shops) {
    //   that.$store.commit('setShops', shops.data.lst)
    // })
  }
}
</script>
<style lang="less" scoped>
.appointIcon-enter-active {
  transition: all .8s ease .1s;
}
.appointIcon-leave-active {
  transition: all .8s ease;
}
.appointIcon-enter, .appointIcon-leave-to {
  transform: translateX(-138px);
  opacity: 0;
}
.appointBox-enter-active, .appointBox-leave-active {
  transition: all .8s ease;
}
.appointBox-enter, .appointBox-leave-to {
  transform: translateX(-150%);
  opacity: 0;
}
.headerBox {
  width: 100%;
}
.banner_area{
  width: 100%;
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
      img{
        vertical-align:baseline;
      }
    }
  }
}

// 设计师团队 样式
.designer-team {
  width: 1220px; height: 560px
}
/* 脚部预约 */
.bottom-fixed-show {
  position: fixed;
  bottom: 50px;
  left: 0px;
  width: 147px;
  height: 113px;
  background: url(../../../static/images/home/bottom_show.png);
  z-index: 9998;
  .bottom-fixed-title {
    position: relative;
    top: 68px;
    left: -16px;
    font-weight: 600;
    font-size: 17px;
    color: #ffe100;
    font-family: "Microsoft Yahei";
  }
}
.bottom-fixed-box{
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9998;
  width: 100%;
  height: 180px;
  .bottom-fixed-bg{
    position: absolute;
    bottom: 0;
    z-index: 5;
    width: 100%;
    height: 180px;
    background-color: #000;
    filter: alpha(opacity=70);
    opacity: 0.7;
    -moz-opacity: 0.7;
    -webkit-opacity: 0.7;
    -ms-opacity: 0.7;
  }
  .no-filter{
    position: absolute;
    bottom: 0;
    z-index: 5;
    width: 100%;
    height: 180px;
    .bottom-wrap-box{
      position: relative;
      width: 1200px;
      height: 180px;
      padding-top: 0;
      margin: 0 auto;
      .bottom-warp-left {
        float: left;
        position: relative;
        width: 568px;
        height: 240px;
        margin-top: -49px;
        background: url(../../../static/images/home/bottom_img_left.png) no-repeat;
        .warp-left-number {
          font-family: 'Microsoft Yahei', arial, helvetica;
          position: absolute;
          right: 60px;
          bottom: 44px;
          width: 109px;
          height: 58px;
          line-height: 58px;
          font-size: 50px;
          font-weight: 600;
          text-align: center;
          color: #fa5c5c;
        }
      }
      .bottom-warp-center {
        float: left;
        margin-left: 30px;
        .pe-body{
          float: left;
          width: 272px;
          padding-top: 22px;
          form{
            padding-top:10px;
            width: 272px;
            p{
              .pe-select {
                padding: 2px 10px;
                font-size: 16px;
              }
              .pe-pro,.pe-ciy{
                width: 122px;
              }
              &.pe-input {
                  height: 28px;
                  padding: 0 10px;
                  input{
                      line-height: 28px;
                      height: 28px;
                  }
              }
            }
            .pe-code{
                .pe-input{
                  width: 150px;
                }
                #pe-send {
                    height: 28px;
                    width: 110px;
                }
            }
            .pe-submit {
                height: 32px;
                width: 130px;
            }
          }
        }
      }
      .bottom-warp-right {
        float: right;
        width: 160px;
        .warp-right-app {
          float: left;
          width: 110px;
          height: 162px;
          padding-top: 22px;
          overflow: hidden;
          .right-app-title {
            font-size: 14px;
            color: #fff;
            text-align: center;
          }
          .right-app-img {
            display: inline-block;
            width: 110px;
            height: 110px;
            background: url(../../../static/images/home/bottom-app.jpeg) 0 0 no-repeat;
            margin-top: 10px;
          }
        }
        .bottom-warp-colse {
          float: right;
          width: 31px;
          height: 31px;
          background: url(../../../static/images/home/bottom-close.png) 0 0 no-repeat;
          margin-top: 74px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
