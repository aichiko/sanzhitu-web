<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
import {getCountry, getShops} from './config/country.js'
export default {
  name: 'app',
  mounted: function () {
    var that = this
    getCountry(function (countryData) {
      console.log(that.$store)
      that.$store.commit('setCountryData', countryData.data.rows[0])
    })
    getShops(function (shops) {
      that.$store.commit('setShops', shops.data.lst)
    })
  }
}
</script>

<style>
@import './style/common.css';
#app {
  font-family: "黑体";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
