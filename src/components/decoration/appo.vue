<template>
<div>
  <div class="bx clearfix">
    <img class="float-left" src="../../../static/images/decoration/appo.png" height="415" width="640" alt="" >
    <div class="float-right pe-body">
      <p class="package-title"><i>·</i><span class="p-titleInfo1">免费量房</span><i>·</i><span class="p-titleInfo2">免费设计</span><i>·</i><span class="p-titleInfo3">线上预约</span><i>·</i></p>
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
            <button class="pe-submit" id="pe-send"></button>
          </form>
    </div>
  </div>
</div>
</template>
<script>
import {country} from '../../config/country.js'
export default {
  data () {
    return {
      countryData: country,
      provinceIndex: 0,
      cityIndex: 0,
      provinceValue: '10',
      cityValue: '11'
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
div{
//   background-color:#fff;
  .bx{
    img{
      vertical-align:top;
    }
    .pe-body{
      width: 560px;
      height:415px;
      padding:0 36px;
      background-color:#FE0000;
      font-size: 26px;
      .package-title{
        height:70px;
        line-height: 70px;
        color: #fff;
        font-weight: 900;
        font-family: "黑体";
        i{
          margin: 0 5px;
        }
      }
      form{
        width: 100%;
        padding: 0 40px;
        box-sizing:border-box;
        p{
            width: 100%;
            margin-bottom: 13px;
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
                padding: 10px 20px;
                border: 1px solid #262626;
                font-size: 18px;
                font-family: "microsoft yahei";
            }
            .pe-pro,.pe-ciy{
                width: 198px;
            }
            .pe-map {
                width: 100%;
                box-sizing: border-box;
            }
            &.pe-input {
                height: 48px;
                border: 1px solid #262626;
                background-color: #FFFFFF;
                padding: 0 20px;
                position: relative;
                &.pe-error{
                    border-color: #fe3c3c;
                    .pe-del {
                        display: block;
                    }
                }
                input{
                    border: 0;
                    line-height: 48px;
                    height: 48px;
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
            width: 100%;background-color:transparent;
            .pe-input{
                width: 214px;
                float: left;
                margin-bottom: 0;
            }
            #pe-send {
                background-color: #eaeaea;
                border: 1px solid #262626;
                height: 50px;
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
            height: 62px;
            width: 430px;
            text-indent: -100em;
            cursor: pointer;
            display: block;
        }
    }
    }
  }
}
</style>