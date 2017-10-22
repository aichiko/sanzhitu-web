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
          <img :src="'../../../static/images/boloni/4-'+(i+1)+'.png'" height="112" width="150" alt="">
          <div class="content">
            <h3>{{ f.title }}</h3>
            <p v-for="p in f.content">{{p}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="sliderBox">
      <div class="bx clearfix">
        <div class="pe-body float-left">
          <h1>已有266028人预约</h1>
          <p>输入姓名和电话号码，预约到店体验</p>
          <form>
            <p class="clearfix">
                <select id="province" class="pe-select pe-pro float-left" v-model="provinceValue">
                    <option :value="province.value" v-for="province in provinces" :key="province.value">{{province.text}}</option>
                </select>
                <select class="pe-select pe-ciy float-right" v-model="cityValue">
                    <option :value="city.value" v-for="city in citys" :key="city.value">{{city.text}}</option>
                </select>
            </p>
            <p class="clearfix">
                <select id="booked_map" class="pe-select pe-map float-left">
                    <option :value="shop.value" v-for="shop in shops" :key="shop.value">{{shop.text}}</option>
                </select>
            </p>
            <p class="pe-input">
                <input type="tel" id="booked_tel" placeholder="手机号码">
                <span class="pe-del"></span>
            </p>
            <div class="pe-code clearfix">
                <p class="pe-input">
                    <input type="text" name="" placeholder="请输入短信验证码">
                    <span class="pe-del"></span>
                </p>
                <button id="pe-send">发送验证码</button>
            </div>
            <button class="subAppiont" id="pe-send">免费预约</button>
          </form>
        </div>
        <div class="float-right swiper-container">
          <swiper :options="swiperOption" class="swiper-wrapper">
            <swiper-slide class="swiper-slide">
              <img src="../../../static/images/boloni/slider-1.png" height="432" width="773" alt="">
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <img src="../../../static/images/boloni/slider-2.png" height="432" width="773" alt="">
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <img src="../../../static/images/boloni/slider-3.png" height="432" width="773" alt="">
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
                            <i :data-city-id="shopItem.cityId" :data-tiy-id="shopItem.tiyId" class="exp-yuyue-btn" @click.stop="appointmentClick">免费预约</i>
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
    <ins-my></ins-my>
    <appointment v-show="isShowAppointment" @close="closeAppointment"></appointment>
    <boloniMap :lat="lat" lng="lng" v-show="isShowMap" @on-close="closeMap"></boloniMap>
    <footer>
      <web-footer></web-footer>
    </footer>
</div>
</template>

<script>
import ins from '../../components/home/ins'
import head from '@/components/header/head'
import appointment from '@/components/appointment/cc_appointment'
import boloniMap from '@/components/boloni/boloniMap'
import webFooter from '@/components/footer/web-footer'
import {country, shops} from '../../config/country.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
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
      countryData: country,
      shopData: shops,
      provinceIndex: 0,
      cityIndex: 0,
      provinceValue: '10',
      cityValue: '11',
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
    insMy: ins,
    myHeader: head,
    appointment: appointment,
    boloniMap: boloniMap,
    webFooter: webFooter,
    swiper,
    swiperSlide
  },
  methods: {
    changeSlide (index) {
      this.nowIndex = index
    },
    appointmentClick () {
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
  },
  watch: {
    provinceValue: function (newValue) {
      var values = this.provinces.map(function (item) {
        return item.value
      })
      var index = values.indexOf(newValue)
      this.provinceIndex = index
      console.log('provinceIndex === ', index)
      // 需要对cityValue进行赋值 很重要！
      this.cityValue = this.citys[0].value
    },
    cityValue: function (newValue) {
      var values = this.citys.map(function (item) {
        return item.value
      })
      var index = values.indexOf(newValue)
      this.cityIndex = index
      console.log('cityIndex === ', index)
    }
  },
  computed: {
    provinces: function () {
      return this.countryData.provinces
    },
    citys: function () {
      return this.provinces[this.provinceIndex].citys
    },
    shops: function () {
      return this.citys[this.cityIndex].shops
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
.pe-body {
    width: 414px;
    height:432px;
    display: inline-block;
    padding:55px 40px 0px;
    text-align:left;
    background-color:#EDEDED;
    h1{
      font-size: 20px;
      color: #000;
    }
    p{
      font-size: 16px;
      height:55px;
      line-height: 55px;
    }
    form{
        width: 100%;
        p{
            width: 100%;
            height:auto;
            margin-bottom: 12px;
            line-height: 1.5;
            select {
                -webkit-appearance: menulist;
                box-sizing: border-box;
                align-items: center;
                white-space: pre;
                -webkit-rtl-ordering: logical;
                color: black;
                background-color: white;
                cursor: default;
                border: 1px solid;
            }
            .pe-select {
                padding: 5px 10px;
                border: 1px solid #262626;
                font-size: 16px;
                font-family: "microsoft yahei";
            }
            .pe-pro,.pe-ciy{
                width: 148px;
            }
            .pe-map {
                width: 100%;
                box-sizing: border-box;
            }
            &.pe-input {
                height: 33px;
                border: 1px solid #262626;
                background-color: #FFFFFF;
                padding: 0 10px;
                position: relative;
                &.pe-error{
                    border-color: #fe3c3c;
                    .pe-del {
                        display: block;
                    }
                }
                input{
                    border: 0;
                    line-height: 33px;
                    height: 33px;
                    width: 100%;
                    font-size: 16px;
                    font-family: "microsoft yahei";
                }
                .pe-del {
                    position: absolute;
                    top: 15px;
                    right: 10px;
                    height: 18px;
                    width: 18px;
                    background: url('../../assets/appointment/pe-del.png') center top no-repeat;
                    z-index: 99;
                    cursor: pointer;
                    display: none;
                }
            }

        }
        .pe-code{
            margin-bottom: 13px;
            width: 100%;
            .pe-input{
                width: 164px;
                float: left;
                margin-bottom: 0;
            }
            #pe-send {
                background-color: #eaeaea;
                border: 1px solid #262626;
                height: 33px;
                width: 160px;
                float: right;
                cursor: pointer;
                font-size: 18px;
                font-family: "microsoft yahei";
            }
        }
        .subAppiont {
            height: 37px;
            width: 174px;
            font-size: 18px;
            line-height: 37px;
            color: #fff;
            background-color:#FE0000;
            cursor: pointer;
            display: block;
            margin:30px auto 0;
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
