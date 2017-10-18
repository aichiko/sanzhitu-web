<template>

  <div class="swiper-all">
    <div class="swiper-container">
      <!-- swiper -->
      <swiper :options="swiperOption" class="swiper-wrapper">
        <swiper-slide class="swiper-slide" v-for="(img, index) in imageLists" :key="index">
          <img :src="img.url" alt="loading" @click="clickBanner(img)">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination">
        </div>
      </swiper>
    </div>
    </div>
  </div>
</template>

<script>
// mount with component(can't work in Nuxt.js/SSR)
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import $ from 'jquery'

export default {
  data () {
    return {
      mark: 0,
      swiperOption: {
        pagination: '.swiper-pagination',
        // pagination: '',
        // paginationElement: 'li',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        imageLists: []
      }
    }
  },
  methods: {
    clickBanner: function (item) {
      console.log('image.url', item.url)
      window.open(item.url)
    }
  },
  mounted: function () {
    console.log('mounted', this)
    var that = this
    $.ajax({
      url: 'http://120.27.219.220:8080/banner/all',
      type: 'get'
    }).done(function (res) {
      console.log('---------', res)
      that.imageLists = res
    }).fail(function (res) {
      console.log('=========', res)
    })
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="less">
.swiper-all {
  width: 100%;
  position: relative;
  height: 550px;
}
.swiper-container {
  width: 100%;
  position: relative;
  height: 450px;
  .swiper-wrapper {
    width: 100%;
    height: 100%;
    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 450px;
      img {
        width: 100%;
        height: 100%;
      }
      button {
        width: 100%;
        height: 100%;
      }
    }
  }
  /*
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
  */
}

.firstPart-right-activity {
  width: 100%;
  height: 105px;
  .firstPart-right-activityImg {
    float: left;
    width: 820px;
    height: 105px;
    li{
      float: left;
      width: 270px;
      height: 105px;
      overflow: hidden;
      &.activityImg1 {
        width: 270px;
      }
    }
  }
  .firstPart-right-activityMore {
    display: inline-block;
    float: right;
    width: 110px;
    height: 105px;
    text-align: center;
    font-size: 12px;
    background-color: #fff;
    &:hover{
      span{
        color: #9e7300;
        background: url(../../assets/banners/alw-small-circle.png) -84px 0 #fff no-repeat;
        i{
          background: url(../../assets/banners/arrow-hover-icon.png) 0 0 no-repeat;
        }
      }
    }
    span {
      display: block;
      position: relative;
      top: 11px;
      width: 84px;
      height: 84px;
      line-height: 84px;
      padding-left: 3px;
      margin: 0 auto;
      background: url(../../assets/banners/alw-small-circle.png) 0 0 #fff no-repeat;
      cursor: pointer;
      .right-arrow {
        display: inline-block;
        width: 14px;
        height: 14px;
        vertical-align: middle;
        margin-top: 3px;
        background: url(../../assets/banners/alw-right-arrow.png) 0 0 no-repeat;
      }
    }
  }
}
</style>
