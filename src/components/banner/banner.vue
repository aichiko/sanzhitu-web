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
  height: 20rem;
  .swiper-wrapper {
      width: 100%;
      height: 100%;
  }
  .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 100%;
      img {
          width: 100%;
          height: 100%;
      }
  }
  .swiper-pagination-bullet {
      width: 0.833rem;
      height: 0.833rem;
      display: inline-block;
      background: #7c5e53;
  }
  .active {
      background: red;
  }
}
</style>
