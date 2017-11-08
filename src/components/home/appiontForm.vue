<template>
    <div>
        <div class="pe-body">
          <form>
            <p class="clearfix">
                <select id="province" class="pe-select pe-pro float-left" v-model="provinceValue">
                    <option :value="province.id" v-for="province in provinces" :key="province.id">{{province.name}}</option>
                </select>
                <select class="pe-select pe-ciy float-right" v-model="cityValue">
                    <option :value="city.id" v-for="city in citys" :key="city.id">{{city.name}}</option>
                </select>
            </p>
            <p class="clearfix">
                <select id="booked_map" class="pe-select pe-map float-left">
                    <option :value="shop.id" v-for="shop in shops" :key="shop.id">{{shop.company}}</option>
                </select>
            </p>
            <p class="pe-input">
                <input type="tel" id="booked_tel" placeholder="手机号码" v-model="appointForm.mobile">
                <span class="pe-del"></span>
            </p>
            <div class="pe-code clearfix">
                <p class="pe-input">
                    <input type="text" name="" placeholder="请输入短信验证码" v-model="appointForm.code">
                    <span class="pe-del"></span>
                </p>
                <button id="pe-send" type="button" @click="codeAction" :disabled="codeEnable">{{codeTitle}}</button>
            </div>
          </form>
        </div>
        <div class="warp-center-btn">
                <i class="center-btn-logo"></i>
                <div class="center-btn-submit">
                <el-button type="primary" @click="appointAction">预约装修</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import {appointmentRequest, getCode} from '../../config/country.js'

export default {
  props: {
    countryData: {}
  },
  data () {
    return {
      provinceIndex: 0,
      cityIndex: 0,
      provinceValue: 1,
      cityValue: 1,
      shopValue: 1,
      shopIndex: 0,
      citys: {},
      provinces: {},
      shops: [],
      codeEnable: false,
      codeTitle: '获取验证码',
      appointForm: {
        userName: '',
        mobile: '',
        code: '',
        province: 1,
        city: 1,
        experiencePavilionId: 1,
        provinceName: '',
        cityName: '',
        experiencePavilionName: ''
      }
    }
  },
  watch: {
    countryData: function (countryData) {
      // console.log(this.$store)
      console.log(countryData)
      this.provinces = countryData
      this.citys = this.provinces[this.provinceIndex].children
      this.shops = this.$store.getters.shops
      this.provinceValue = this.provinces[0].id
      this.cityValue = this.citys[0].id
      this.appointForm.experiencePavilionId = this.shops[0].id
      this.appointForm.experiencePavilionName = this.shops[0].company
    },
    provinceValue: function (newValue) {
      var values = this.provinces.map(function (item) {
        return item.id
      })
      var index = values.indexOf(newValue)
      this.provinceIndex = index
      console.log('provinceIndex === ', index)
      this.appointForm.provinceName = this.provinces[index].name
      this.appointForm.province = newValue
      // 需要对cityValue进行赋值 很重要！
      this.cityValue = this.citys[0].id
    },
    cityValue: function (newValue) {
      var values = this.citys.map(function (item) {
        return item.id
      })
      var index = values.indexOf(newValue)
      this.cityIndex = index
      this.appointForm.cityName = this.citys[index].name
      this.appointForm.city = newValue
      console.log('cityIndex === ', index)
    },
    shopValue: function (newValue) {
      var values = this.shops.map(function (item) {
        return item.id
      })
      var index = values.indexOf(newValue)
      this.shopIndex = index
      this.appointForm.experiencePavilionName = this.shops[index].company
      this.appointForm.experiencePavilionId = newValue
      console.log('shopIndex === ', index)
    }
  },
  methods: {
    settime: function () {
      var countdown = 60
      var that = this
      function settime () {
        if (countdown === 0) {
          that.codeEnable = false
          that.codeTitle = '获取验证码'
          countdown = 60
          return true
        } else {
          that.codeTitle = '重新发送(' + countdown + ')'
          countdown--
          setTimeout(function () {
            if (settime()) {
              clearTimeout()
            }
          }, 1000)
          return false
        }
      }
      settime()
    },
    codeAction: function (button) {
      console.log('发送验证码')
      var that = this
      if (this.codeEnable === false) {
        this.codeEnable = true
        getCode(FormData.mobile, function (code) {

        }, function (message) {
          that.$message({
            showClose: true,
            message: message,
            type: 'error'
          })
        })
        this.settime()
      }
    },
    appointAction: function (e) {
      console.log('免费预约')
      var that = this
      appointmentRequest(this.appointForm, function (json) {
        that.$notify({
          title: '预约成功',
          message: '恭喜您，预约成功！',
          type: 'success'
        })
      }, function (message) {
        that.$message({
          showClose: true,
          message: message,
          type: 'error'
        })
      })
    }
  },
  mounted: function () {
  }
}
</script>
<style lang="less">
.pe-body {
    width: 430px;
    form{
        width: 100%;
        p{
            width: 100%;
            margin-bottom: 4px;
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
            width: 100%;
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
                font-size: 16px;
                font-family: "microsoft yahei";
            }
        }
    }
}
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

.warp-center-btn {
    float: left;
    width: 135px;
    margin-left: 10px;
    padding-top: 22px;
    .center-btn-logo {
    display: inline-block;
    margin-top: -10px;
    width: 135px;
    height: 111px;
    background-image: url(../../../static/images/home/bottom-imgs.png);
    }
    .center-btn-submit {
    width: 135px;
    height: 30px;
    // background: url(../../../static/images/home/bottom-imgs.png) -17px 0px no-repeat;
    cursor: pointer;

    margin-top: 2px;
    .el-button--primary {
        background-color: #34cc34;
        color: #fff;
        border-color: #34cc34
    }
  }
}

</style>