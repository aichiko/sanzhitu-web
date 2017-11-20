<template>
  <div class="boloni">
    <header>
      <my-header></my-header>
    </header>
    <div class="countryBanner">
      <img src="../../../static/images/boloni/banner.png" alt="">
    </div>
    <div class="four">
      <ul class="bx clearfix">
        <li v-for="(f, i) in four">
          <img :src="'/sztwz/static/images/boloni/4-'+(i+1)+'.png'" height="112" width="150" alt="">
          <div class="content">
            <h3>{{ f.title }}</h3>
            <p v-for="p in f.content">{{p}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="sliderBox">
      <div class="bx clearfix">
        <boloni-appointment></boloni-appointment>
        <div class="float-right swiper-container">
          <swiper :options="swiperOption" class="swiper-wrapper">
            <swiper-slide class="swiper-slide">
              <img src="http://oxux1itze.bkt.clouddn.com/boloni/banner-1.png" height="432" width="773" alt="">
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <img src="http://oxux1itze.bkt.clouddn.com/boloni/banner-2.png" height="432" width="773" alt="">
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <img src="http://oxux1itze.bkt.clouddn.com/boloni/banner-3.png" height="432" width="773" alt="">
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <div class="offline-frame bx">
      <h1 class="hall-title">三只兔全国线下体验馆</h1>
      <div class="slideTxtBox">
          <div class="hd">
              <ul>
                  <li class="" v-for="(tab, index) in shopData.hd" :index="index" :key="'tab_'+index" @mouseover="changeSlide(index)" :class="{'on':index==nowIndex}">{{tab}}</li>
              </ul>
          </div>
          <div class="bd">
              <ul v-for="(areaItem, index) in shopData.bd" :key="areaItem.area" :index="index" v-if="index==nowIndex">
                  <li  v-for="(shopItem, i) in areaItem.shop" :key="shopItem.id" :class="{noborder: i%2 != 0}">
                      <a href="javascript:void(0)" class="clearfix iii" :data-lng="shopItem.lng" :data-lat="shopItem.lat" :data-id="shopItem.id" :data-type="shopItem.type" @click="mapClick(shopItem.lng, shopItem.lat)">
                          <img :src="shopItem.imgSrc">
                          <h3>
                            <span class="exp-name">{{shopItem.name}}</span>
                            <i class="exp-yuyue-btn" @click.stop="appointmentClick">免费预约</i>
                          </h3>
                          <p>地址：{{shopItem.adress}}</p>
                          <p>电话：{{shopItem.phone}}</p>
                          <p>状态：{{shopItem.flag}}</p>
                      </a>
                  </li>
              </ul>
          </div>
      </div>
    </div>
    <!-- <ins-my></ins-my> -->
    <transition name="el-fade-in-linear">
      <appointment v-if="isShowAppointment" @close="closeAppointment"></appointment>
    </transition>
    <boloniMap :lat="lat" :lng="lng" v-show="isShowMap" @on-close="closeMap"></boloniMap>
    <footer>
      <web-footer></web-footer>
    </footer>
</div>
</template>

<script>
// import ins from '../../components/home/ins'
import head from '@/components/header/head'
import appointment from '@/components/appointment/cc_appointment'
import boloniAppointment from '@/components/boloni/boloni_appointment'
import boloniMap from '@/components/boloni/boloniMap'
import webFooter from '@/components/footer/web-footer'
import {shops} from '../../config/country.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      shopData: shops,
      nowIndex: 0,
      isShowAppointment: false,
      isShowMap: false,
      lat: '',
      lng: '',
      four: [
        {
          title: '装修样本间',
          content: ['软硬装全配', '感知完美装修']
        }, {
          title: '专属客服经理',
          content: ['为您全面解答', '装修的各类问题']
        }, {
          title: '装修材料展示',
          content: ['看得见，摸得着', '选起来更放心']
        }, {
          title: '施工工艺展示',
          content: ['APP可视系统', '随时查看施工']
        }
      ],
      mark: 0,
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 1500,
        autoplayDisableOnInteraction: false,
        autoplayStopOnLast: false,
        loop: true,
        paginationBulletRender: function (swiper, index, a) {
          return '<span style="border-radius:0 !important;display: inline-block;width: 16px;    height:2px;background-color: #fff;margin-right: 10px;" class="' + a + '"></span>'
        }
      }
    }
  },
  components: {
    // insMy: ins,
    myHeader: head,
    appointment: appointment,
    boloniMap: boloniMap,
    webFooter: webFooter,
    swiper,
    swiperSlide,
    boloniAppointment
  },
  methods: {
    changeSlide (index) {
      this.nowIndex = index
    },
    appointmentClick () {
      console.log('--------')
      this.isShowAppointment = true
    },
    closeAppointment () {
      this.isShowAppointment = false
    },
    mapClick (a, b) {
      this.isShowMap = true
      this.lng = a
      this.lat = b
    },
    closeMap () {
      this.isShowMap = false
    }
  }
}
</script>

<style lang="less" scoped>
body{
  background-color:#fff;
}
.countryBanner{
    width: 100%;
}
.four{
  width: 100%;
  padding:36px 0;
  ul{
    li{
      border: 2px solid #E0E0E0;
      padding: 6px 7px;
      overflow: hidden;
      margin-right: 20px;
      width: 284px;
      float: left;
      text-align: left;
      &:last-child{
        margin-right: 0;
      }
      img{
        float: left;
        margin-right:20px;
      }
      .content{
        padding-top:20px;
        h3{
          font-size: 16px;
          height:35px;
          line-height: 35px;
          color: #000;
        }
        p{
          font-size: 12px;
          line-height: 20px;
          color: #838383;
        }
      }
    }
  }
}
.sliderBox{
  .bx{
    .swiper-container{
      height:432px;
      width:773px;
      overflow:hidden;
      .swiper-pagination{
        position: absolute;
        bottom:20px;
        left: 50%;
        margin-left: -32px;
        span.a{
          border-radius:0 !important;
          display: inline-block;
          width: 16px;
          height:2px;
          background-color: #fff;
          margin-right: 10px;
          &:last-child{
            margin-right: 0;
          }
          &.swiper-pagination-bullet-active{
            background-color:#FE0000;
          }
        }
      }
    }
  }
}
.offline-frame{
    .hall-title{
        height: 44px;
        line-height: 44px;
        font-size: 38px;
        color: #F00200;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 30px;
    }
    .slideTxtBox{
        width: 100%;
        text-align: left;
        margin-bottom: 70px;
        .hd{
            height: 45px;
            line-height: 44px;
            position: relative;
            width: 100%;
            ul{
                height: 40px;
                margin:0 auto;
                width: auto;
                text-align: center;
                li{
                    display: inline-block;
                    padding: 0 20px;
                    cursor: pointer;
                    font-size: 20px;
                    border: solid 1px #000;
                    background: #fff;
                    color: #000;
                    margin-right: 12px;
                    &:last-child{
                      margin-right: 0;
                    }
                    &.on{
                        background: #E1E1E1;
                    }
                }
            }
        }
        .bd{
            width: 1200px;
            overflow: hidden;
            ul{
                //display: none;
                padding: 20px 0 0 0px;
                zoom: 1;
                overflow: hidden;
                margin-right: -20px;
                li{
                    position: relative;
                    float: left;
                    width: 591px;
                    border-right: solid 2px #787878;
                    padding: 20px 19px 33px 18px;
                    margin-right: 18px;
                    height: 219px;
                    &.noborder{
                      border-right:0;
                    }
                    a{
                        display: block;
                        text-decoration: none;
                        img{
                            float: left;
                            margin-right: 24px;
                            width: 200px;
                            height: 150px;
                        }
                        h3{
                            font-size: 20px;
                            color: #000;
                            height: 46px;
                            line-height: 46px;
                            margin-bottom: 15px;
                            span{
                                float: left;
                            }
                            i{
                                float: right;
                                padding: 7px 15px;
                                font-size: 16px;
                                background-color: #FD0100;
                                border-radius: 5px;
                                line-height: 1;
                                color: #fff;
                            }
                        }
                        p{
                            color: #666;
                            font-size: 14px;
                            margin-bottom: 4px;
                        }
                    }
                }
            }
        }
    }

}

</style>
