<template>
  <div class="appointment-bg">
    <div class="appointment-box"></div>
    <div class="form">
      <div class="content">
        <div class="title">免费预约<i id="close" style="font-size: 16px" @click="close">X</i></div>
        <div class="body">
          <el-form label-position="left" label-width="80px">
            <el-form-item label="选择地区" class="list">
              <select id="province" v-model="provinceValue" class="select-province">
                  <option :value="province.value" v-for="province in provinces" :key="province.value">{{province.text}}</option>
              </select>
              <select v-model="cityValue" class="select-city">
                  <option :value="city.value" v-for="city in citys" :key="city.value">{{city.text}}</option>
              </select>
            </el-form-item>
            <el-form-item label="体验馆" class="list">
              <select id="booked_map" class="select-shop">
                  <option :value="shop.value" v-for="shop in shops" :key="shop.value">{{shop.text}}</option>
              </select>
            </el-form-item>
            <el-form-item label="您的称呼" prop="name" class="list">
              <el-input v-model="appointForm.name" placeholder="输入您的称呼"></el-input>
            </el-form-item>
            <el-form-item label="您的手机" prop="phoneNum" class="list">
              <el-input v-model="appointForm.phoneNum" placeholder="输入您的手机"></el-input>
            </el-form-item>
            <el-form-item label="短信验证码" prop="code" class="list">
              <el-input v-model.number="appointForm.code" placeholder="验证码" class="code-input"></el-input>
              <el-button class="code-button" @click="codeAction" :disabled="appointForm.codeEnable">{{appointForm.codeTitle}}</el-button>
            </el-form-item>
          </el-form>
          <el-button class="appointment-button" size="large" @click="appointAction">免费预约</el-button>
        </div>
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
      cityValue: '11',
      appointForm: {
        name: '',
        phoneNum: '',
        code: '',
        codeEnable: false,
        codeTitle: '获取验证码',
        province: '',
        city: '',
        boloni: ''
      }
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
  },
  methods: {
    settime: function () {
      var countdown = 60
      var that = this
      function settime () {
        if (countdown === 0) {
          that.appointForm.codeEnable = false
          that.appointForm.codeTitle = '获取验证码'
          countdown = 60
          return true
        } else {
          that.appointForm.codeTitle = '重新发送(' + countdown + ')'
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
    close: function (e) {
      console.log('关闭视图')
      this.$emit('close')
    },
    codeAction: function (button) {
      console.log('发送验证码')
      console.log(button)
      if (this.appointForm.codeEnable === false) {
        this.appointForm.codeEnable = true
        this.settime()
      }
    },
    appointAction: function (e) {
      console.log('免费预约')
    }
  }
}
</script>

<style lang="less" scoped>
.appointment-bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  .appointment-box {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000000;
    filter: alpha(opacity=55);
    -moz-opacity: 0.55;
    khtml-opacity: 0.55;
    opacity: 0.55;
  }
  .form {
    position: absolute;
    top: 15%;
    left: 50%;
    margin-left: -201px;
    width: 402px;
    height: auto;
    background-color: rgba(130, 130, 130, 0.75);
    padding: 8px;
    .content {
      background-color: #fff;
      width: 386px;
      height: auto;
      .title {
        background-color: #f4f4f4;
        height: 38px;
        border-bottom: 1px solid #FFFFFF;
        line-height: 38px;
        font-size: 16px;
        font-weight: 700;
        color: #444444;
        padding: 0 12px;
        text-align: left;
      }
      #close {
        float: right;
        cursor: pointer;
        display: block;
        width: 20px;
        text-align: center;
        color: #666666;
      }
    }
  }
}

.body {
  border-top: 1px solid #dddddd;
  padding: 30px 35px 0 35px;
  .select-province {
    padding: 8px 12px;
    border: 1px solid #D2D2D2;
    width: 115px;
    height: auto;
  }
  .select-city {
    padding: 8px 12px;
    border: 1px solid #D2D2D2;
    width: 112px;
    height: auto;
    margin-left: 3px;
  }
  .select-shop {
    margin-left: 3px;
    width: 230px;
    height: auto;
    padding: 8px 12px;
    border: 1px solid #D2D2D2;
  }
  .list {
    // height: 36px;
    margin-bottom: 13px;
  }
  input {
    width: 230px;
  }
  label {
    padding-right: 0;
  }
  .code-input {
    input {
      width: 110px;
    }
    width: 116px;
    float: left;
  }
  .appointment-button {
    background-color: #ff9c00;
    color: #FFFFFF;
    font-size: 18px;
    border: 1px solid #ff7e00;
    font-weight: 600;
    // font-family: "microsoft yahei";
    height: 43px;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 30px;
  }
}

</style>

