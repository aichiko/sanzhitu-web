<template>
  <div class="pe-body float-left">
    <h1>已有266028人预约</h1>
    <p>输入姓名和电话号码，预约到店体验</p>
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
          <select id="booked_map" class="pe-select pe-map float-left" v-model="shopValue">
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
      <button class="subAppiont" id="pe-send" type="button" @click="appointAction">免费预约</button>
    </form>
  </div>
</template>


<script>
import {getCode, appointmentRequest, getCountry, getShops, getShopsWith} from '../../config/country.js'
export default {
  data () {
    return {
      provinceIndex: 0,
      cityIndex: 0,
      provinceValue: 1,
      cityValue: 1,
      shopValue: null,
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
      this.citys = this.provinces[this.provinceIndex].children
      this.cityValue = this.citys[0].id
      var that = this
      getShopsWith(newValue, function (res) {
        let arr = res.data.lst
        if (arr.length > 0) {
          that.shops = res.data.lst
          that.shopIndex = 0
          that.appointForm.experiencePavilionName = that.shops[0].company
          that.appointForm.experiencePavilionId = that.shops[0].id
          that.shopValue = that.shops[0].id
        } else {
          var shops = that.$store.getters.shops
          console.log('arr.length === 0', shops)
          that.shops = shops
          that.shopIndex = 0
          that.appointForm.experiencePavilionId = that.shops[0].id
          that.appointForm.experiencePavilionName = that.shops[0].company
          that.shopValue = that.shops[0].id
        }
      })
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
      var that = this
      getShopsWith(newValue, function (res) {
        let arr = res.data.lst
        if (arr.length > 0) {
          that.shops = res.data.lst
          that.shopIndex = 0
          that.appointForm.experiencePavilionName = that.shops[0].company
          that.appointForm.experiencePavilionId = that.shops[0].id
          that.shopValue = that.shops[0].id
        } else {
          var shops = that.$store.getters.shops
          console.log('arr.length === 0', shops)
          that.shops = shops
          that.shopIndex = 0
          that.appointForm.experiencePavilionId = that.shops[0].id
          that.appointForm.experiencePavilionName = that.shops[0].company
          that.shopValue = that.shops[0].id
        }
      })
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
        getCode(this.appointForm.mobile, function (code) {

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
  computed: {
  },
  mounted: function () {
    console.log('22233333', this.$store)
    // this.countryData = this.$store.getters.countryData
    // this.provinceValue = this.provinces[0].id
    // this.cityValue = this.citys[0].id
    // var shops = this.$store.getters.shops
    // this.shops = shops
    // this.appointForm.experiencePavilionId = this.shops[0].id
    // this.appointForm.experiencePavilionName = this.shops[0].company
    var that = this
    getCountry(function (countryData) {
      console.log(that.$store)
      console.log('========= ', countryData)
      that.$store.commit('setCountryData', countryData.data.rows[0].children)
      that.provinces = countryData.data.rows[0].children
      that.citys = that.provinces[that.provinceIndex].children
      that.provinceValue = that.provinces[0].id
      that.cityValue = that.citys[0].id
    })
    getShops(function (shops) {
      that.shops = shops.data.lst
      that.$store.commit('setShops', shops.data.lst)
      that.appointForm.experiencePavilionId = that.shops[0].id
      that.appointForm.experiencePavilionName = that.shops[0].company
    })
  }
}
</script>

<style lang="less" scoped>
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
</style>

