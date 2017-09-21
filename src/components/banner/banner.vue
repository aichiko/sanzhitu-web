<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(img, index) in imageLists" :key="index" :style="{ backgroundImage: 'url(' + img.url + ')' }"></div>
    </div>
    <div class="swiper-pagination swiper-pagination-white">
      <span class="swiper-pagination-bullet" v-for="(item, index) in imageLists.length" :key="index" :class="{'active':index===mark}"></span>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  props: ['imageLists'],
  data () {
    return {
      mark: 0
    }
  },
  mounted () {
    console.log('mounted', this)
    console.log(Swiper)
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      loop: true,
      speed: 600,
      autoplay: 4000,
      onTouchEnd: function () {
          // swiper.startAutoplay()
      }
    })
    console.log(swiper)
  }
}
</script>

<style lang="less">
.swiper-container {
  width: 100%;
  position: relative;
  height: 320px;
  .swiper-wrapper {
    width: 100%;
    height: 100%;
    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 930px;
      height: 320px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .swiper-pagination{
    position: absolute;
    width: 100%;
    z-index: 1;
    bottom: 0;
    left: 0;
    height: 26px;
    line-height: 26px;
    text-align: center;
    .swiper-pagination-bullet {
      cursor: pointer;
      display: inline-block;
      zoom: 1;
      width: 28px;
      height: 6px;
      margin: 0 5px;
      overflow: hidden;
      line-height: 9999px;
      background-color: #000;
      filter: alpha(opacity=65);
      opacity: .56;
      border-radius:0;
      &.active {
        background-color: #FFE100;
        filter: alpha(opacity=100);
        opacity: 1;
      }
    }
  }
}
</style>
