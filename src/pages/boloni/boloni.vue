<template>
  <div class="boloni">
    <header>
      <my-header></my-header>
    </header>
    <div class="countryBanner">
        <div class="bx">
          <a class="btn">加入三只兔</a>
        </div>
    </div>
    <div class="offline-frame bx">
      <h1 class="hall-title">三只图实体体验店</h1>
      <div class="slideTxtBox">
          <div class="hd">
              <ul>
                  <li class="" v-for="(tab, index) in shops.hd" :index="index" :key="'tab_'+index" @mouseover="changeSlide(index)" :class="{'on':index==nowIndex}">{{tab}}</li>
              </ul>
          </div>
          <div class="bd">
              <ul v-for="(areaItem, index) in shops.bd" :key="areaItem.area" :index="index" v-if="index==nowIndex">
                  <li  v-for="shopItem in areaItem.shop" :key="shopItem.id">
                      <a href="javascript:void(0)" class="clearfix iii" :data-lng="shopItem.lng" :data-lat="shopItem.lat" :data-id="shopItem.id" :data-type="shopItem.type" @click="mapClick">
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
    <boloniMap v-show="isShowMap" @on-close="closeMap"></boloniMap>
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
import {shops} from '../../config/country.js'
export default {
  data () {
    return {
      shops: shops,
      nowIndex: 0,
      isShowAppointment: false,
      isShowMap: false
    }
  },
  components: {
    insMy: ins,
    myHeader: head,
    appointment: appointment,
    boloniMap: boloniMap,
    webFooter: webFooter
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
    mapClick () {
      this.isShowMap = true
    },
    closeMap () {
      this.isShowMap = false
    }
  }
}
</script>
<style lang="less">
.countryBanner{
    width: 100%;
    height: 690px;
    background: url('../../assets/boloni/coutryBanner.png') center top no-repeat;
    .bx{
        height: 690px;
        position: relative;
        .btn{
            text-decoration: none;
            display: block;
            background-color: #ffc808;
            padding: 10px 55px;
            right: 260px;
            bottom: 24px;
            position: absolute;
            z-index: 10;
            font-size: 22px;
            color: #ffffff;
        }
    }
}
.offline-frame{
    .hall-title{
        height: 44px;
        line-height: 44px;
        font-size: 38px;
        color: #666;
        text-align: center;
        margin-top: 65px;
        margin-bottom: 65px;
    }
    .slideTxtBox{
        width: 100%;
        text-align: left;
        margin-bottom: 70px;
        .hd{
            height: 45px;
            line-height: 44px;
            position: relative;
            border-bottom: solid 1px #333;
            ul{
                float: left;
                position: absolute;
                left: 0px;
                top: -1px;
                height: 46px;
                border-right: 1px solid #ddd;
                li{
                    float: left;
                    padding: 0 33px;
                    cursor: pointer;
                    font-size: 16px;
                    border-top: solid 1px #ddd;
                    border-left: solid 1px #ddd;
                    background: #fafafa;
                    font-weight: bold;
                    color: #000;
                    &.on{
                        height: 47px;
                        background: #fff;
                        border: 1px solid #333;
                        border-bottom: 2px solid #fff;
                        margin-right: -1px;
                        position: relative;
                        z-index: 99;
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
                    border-right: solid 1px #ddd;
                    padding: 35px 19px 33px 18px;
                    margin-right: 18px;
                    height: 219px;
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
                                padding: 13px 14px;
                                font-size: 16px;
                                background-color: #ffe100;
                                border-radius: 3px;
                                line-height: 1;
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
