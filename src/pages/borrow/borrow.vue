<template>
<div>
  <web-header></web-header>
  <img src="../../../static/images/borrow/borrow.jpg" height="720" width="1920" alt="">
  <div class="b_icons">
    <ul class="bx clearfix">
      <li v-for="(i, index) in b_icons">
        <img :src="'../../../static/images/borrow/b_icon0'+(index+1)+'.jpg'" alt="">
        <p>{{i.sup}}</p>
        <p>{{i.sub}}</p>
      </li>
    </ul>
  </div>
  <dec-title :title='{title: "贷款流程",sup:"五步搞定，最快当天拿钱"}'></dec-title>
  <div class="path">
    <div class="bx">
      <ul class="clearfix">
        <li v-for="(p, i) in path" class="clearfix">
          <div class="circle">
            <p><i class="icon iconfont" :class="p.icon"></i></p>
            <p>{{p.text}}</p>
            <p><span class="border"></span></p>
          </div>
          <div class="toR" v-if="i != 4">
            <img src="../../../static/images/borrow/toR.jpg" width="35" alt="">
          </div>
        </li>
      </ul>
      <img src="../../../static/images/borrow/tel.jpg" height="63" width="520" alt="" style="margin:52px 0 72px">
    </div>
  </div>
  <div class="yuyue">
    <div class="bx">
      <div class="pe-body">
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
        <p class="pe-input ">
            <input type="text" id="booked_name" placeholder="您的称呼">
            <span class="pe-del"></span>
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
        <button class="pe-submit" id="pe-send"></button>
      </form>
      </div>
    </div>
  </div>
  <web-footer></web-footer>
</div>
</template>
<script>
require('../../style/font/iconfont.css')
import webFooter from '@/components/footer/web-footer'
import head from '@/components/header/head'
import decTitle from '@/components/decoration/decTitle'
import {country} from '../../config/country.js'
export default {
  data () {
    return {
      countryData: country,
      provinceIndex: 0,
      cityIndex: 0,
      provinceValue: '10',
      cityValue: '11',
      b_icons: [
        {
          icon: '../../../static/images/borrow/b_icon01.jpg',
          sup: '额度高',
          sub: '最高100万'
        }, {
          icon: '../../../static/images/borrow/b_icon02.jpg',
          sup: '放款快',
          sub: '快至24小时到账'
        }, {
          icon: '../../../static/images/borrow/b_icon03.jpg',
          sup: '利率低',
          sub: '月利低至0.25%'
        }, {
          icon: '../../../static/images/borrow/b_icon04.jpg',
          sup: '保障高',
          sub: '专业金融服务人员'
        }, {
          icon: '../../../static/images/borrow/b_icon05.jpg',
          sup: '量身定制',
          sub: '为您提供VIP服务'
        }
      ],
      path: [
        {
          icon: 'icon-tijiaoshenqing',
          text: '提交申请'
        }, {
          icon: 'icon-renyuan',
          text: '提交材料'
        }, {
          icon: 'icon-woshou',
          text: '签订合同'
        }, {
          icon: 'icon-swipe-card-empty',
          text: '发放贷款'
        }, {
          icon: 'icon-yinhangqia',
          text: '轻松还贷'
        }]
    }
  },
  components: {
    webHeader: head,
    webFooter: webFooter,
    decTitle
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
.wrapper{
  width: 100%;
}
.b_icons{
  width: 100%;
  ul{
    padding-top: 35px;
    li{
      float: left;
      overflow: hidden;
      width: 20%;
      img{
        float: left;
        margin-right: 10px;
      }
      p{
        text-align: left;
        padding-top:5px;
        &:nth-child(2){
          font-size: 20px;
          line-height: 30px;
          color: #FE817F;
        }
        &:last-child{
          font-size: 14px;
          line-height: 22px;
          color: #000;
        }
      }
    }
  }
}
.path{
  ul{
    li{
      float: left;
      width: 20%;
      div{
        height:204px;
        float: left;
        &.circle{
          border: 2px solid #FF9494;
          border-radius: 50%;
          width: 204px;
          padding:40px 0 30px;
          text-align: center;
          p{
            color: #FF9494;
            i{
              font-size: 55px;
            }
            &:nth-child(2){
              line-height: 60px;
              font-size: 20px;
            }
            .border{
              display: inline-block;
              width: 35px;
              height: 0px;
              border-top: 3px solid #FF9494;
            }
          }
        }
        &.toR{
          line-height: 204px;
          width: 36px;
          img{
            vertical-align: middle;
          }
        }
      }
    }
  }
}
.yuyue{
  background-color: #FABF01;
  .bx{
    height:512px;
    background:url(../../../static/images/borrow/borrowBottom.jpg);
    position: relative;
  }
}
.pe-body {
    width: 330px;
    position: absolute;
    top:153px;
    right: 121px;
    form{
        width: 100%;
        p{
            width: 100%;
            margin-bottom: 12px;
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
        .pe-submit {
            border: 0;
            background: url('../../assets/appointment/pe-btn.png') center top no-repeat;
            height: 42px;
            width: 180px;
            background-size: 180px 42px;
            cursor: pointer;
            display: block;
            margin:30px auto 0;
        }
    }
}

</style>