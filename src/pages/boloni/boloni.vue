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
      <h1 class="hall-title">三只兔实体体验店</h1>
      <div class="slideTxtBox">
          <div class="hd">
              <ul>
                  <li class="" v-for="(tab, index) in slideTxtBox.hd" :index="index" :key="'tab_'+index" @mouseover="changeSlide(index)" :class="{'on':index==nowIndex}">{{tab}}</li>
              </ul>
          </div>
          <div class="bd">
              <ul v-for="(areaItem, index) in slideTxtBox.bd" :key="areaItem.area" :index="index" v-if="index==nowIndex">
                  <li  v-for="shopItem in areaItem.shop" :key="shopItem.id">
                      <a href="javascript:void(0)" class="clearfix iii" data-lng="shopItem.lng" data-lat="shopItem.lat" data-id="shopItem.id" data-type="shopItem.type">
                          <img :src="shopItem.imgSrc">
                          <h3>
                            <span class="exp-name">{{shopItem.name}}</span>
                            <i data-city-id="shopItem.cityId" data-tiy-id="shopItem.tiyId" class="exp-yuyue-btn">免费预约</i>
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
    <footer>
      <web-footer></web-footer>
    </footer>
</div>
</template>

<script>
import ins from '../../components/home/ins'
import head from '@/components/header/head'
import webFooter from '@/components/footer/web-footer'
export default {
  data () {
    return {
      slideTxtBox: {
        hd: [
          '华南地区',
          '华东地区',
          '华中地区',
          '西南地区',
          '华北地区',
          '西北地区'
        ],
        bd: [
          {
            /* 华南片区 */
            area: 'southern',
            /* 实体店 */
            shop: [
              {
                lng: '113.410551',
                lat: '22.532647',
                id: '18',
                type: '1',
                imgSrc: 'http://www.woimg.com/mobile/map_img/05150873486596193.jpg',
                name: '中山店',
                cityId: '306',
                tiyId: '18',
                adress: '广东省中山市东区富湾东路伊电园E栋',
                phone: '400-626-1688',
                flag: '营业中'
              },
              {
                lng: '113.410551',
                lat: '22.532647',
                id: '18',
                type: '1',
                imgSrc: 'http://www.woimg.com/mobile/map_img/05150873486596193.jpg',
                name: '中山店',
                cityId: '306',
                tiyId: '18',
                adress: '广东省中山市东区富湾东路伊电园E栋',
                phone: '400-626-1688',
                flag: '营业中'
              }
            ]
          },
          {
            /* 华东片区 */
            area: 'East',
            /* 实体店 */
            shop: [
              {
                lng: '113.410551',
                lat: '22.532647',
                id: '18',
                type: '1',
                imgSrc: 'http://www.woimg.com/mobile/map_img/05150873486596193.jpg',
                name: '中山店',
                cityId: '306',
                tiyId: '18',
                adress: '广东省中山市东区富湾东路伊电园E栋',
                phone: '400-626-1688',
                flag: '营业中'
              }
            ]
          },
          {
            /* 华中片区 */
            area: 'Central',
            /* 实体店 */
            shop: [
              {
                lng: '113.410551',
                lat: '22.532647',
                id: '18',
                type: '1',
                imgSrc: 'http://www.woimg.com/mobile/map_img/05150873486596193.jpg',
                name: '中山店',
                cityId: '306',
                tiyId: '18',
                adress: '广东省中山市东区富湾东路伊电园E栋',
                phone: '400-626-1688',
                flag: '营业中'
              }
            ]
          },
          {
            /* 西南片区 */
            area: 'southwest',
            /* 实体店 */
            shop: [
              {
                lng: '113.410551',
                lat: '22.532647',
                id: '18',
                type: '1',
                imgSrc: 'http://www.woimg.com/mobile/map_img/05150873486596193.jpg',
                name: '中山店',
                cityId: '306',
                tiyId: '18',
                adress: '广东省中山市东区富湾东路伊电园E栋',
                phone: '400-626-1688',
                flag: '营业中'
              }
            ]
          },
          {
            /* 华北片区 */
            area: 'southwest',
            /* 实体店 */
            shop: [
              {
                lng: '113.410551',
                lat: '22.532647',
                id: '18',
                type: '1',
                imgSrc: 'http://www.woimg.com/mobile/map_img/05150873486596193.jpg',
                name: '中山店',
                cityId: '306',
                tiyId: '18',
                adress: '广东省中山市东区富湾东路伊电园E栋',
                phone: '400-626-1688',
                flag: '营业中'
              }
            ]
          },
          {
            /* 西北片区 */
            area: 'northwest',
            /* 实体店 */
            shop: [
              {
                lng: '113.410551',
                lat: '22.532647',
                id: '18',
                type: '1',
                imgSrc: 'http://www.woimg.com/mobile/map_img/05150873486596193.jpg',
                name: '中山店',
                cityId: '306',
                tiyId: '18',
                adress: '广东省中山市东区富湾东路伊电园E栋',
                phone: '400-626-1688',
                flag: '营业中'
              }
            ]
          }
        ]
      },
      nowIndex: 0
    }
  },
  components: {
    insMy: ins,
    myHeader: head,
    webFooter: webFooter
  },
  methods: {
    changeSlide (index) {
      this.nowIndex = index
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
