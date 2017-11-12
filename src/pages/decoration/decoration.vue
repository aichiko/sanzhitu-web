<template>
<div style="background:#fff;margin:0 auto;">
  <header>
    <web-header></web-header>
  </header>
  <header class="head-box">
    <img src="../../assets/decoration/banner.png" alt="图片还在加载中">
  </header>
  <dec-title :title="titles[0]"></dec-title>
  <div class="design">
    <ul class="bx clearfix">
      <li v-for="(d, index) in design" :class="{odd:index%2==0,mt18:index > 1}" :key="index">
        <swiper :options="swiperOption" class="swiper-wrapper">
          <swiper-slide class="swiper-slide" v-for="img in d.imgs" :key="img">
            <img :src="img" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <p class="opacity"></p>
        <p><span>{{ d.title }}</span></p>
      </li>
    </ul>
  </div>
  <dec-title :title="titles[1]"></dec-title>
  <div class="bx clearfix">
    <img src="/sztwz/static/images/decoration/pic_hd.jpg" alt="" style="width: 100%">
  </div> 
  <dec-title :title="titles[2]"></dec-title>
  <div class="solve">
    <ul class="bx clearfix">
      <li v-for="(s, index) in solve" :class="{mr18: (index+1)%5 != 0,mt18:index > 4}" :key="index">
        <img :src="'/sztwz/static/images/decoration/solve'+ num( index ) +'.png'" >
        <p>{{ s }}</p>
      </li>
    </ul>
  </div>
  <div class="decApp">
    <img src="../../../static/images/decoration/decApp.jpg"  alt="图片还在加载中">
  </div>
  <dec-title :title="titles[3]"></dec-title>
  <div class="myChartBox">
    <div id="myChart" class="bx" style="width: 1000px;height:500px"></div>
  </div>
  <dec-title :title="titles[4]"></dec-title>
  <appo style="padding-bottom:100px" ></appo>
  <footer>
    <web-footer></web-footer>
  </footer>
  <insDiv></insDiv>
</div>

</template>

<script>
import decTitle from '../../components/decoration/decTitle.vue'
import appo from '@/components/decoration/appo'
import webHeader from '@/components/header/head'
import webFooter from '@/components/footer/web-footer'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ins from '../../components/home/ins'
export default {
  data () {
    return {
      titles: [
        {
          title: '整居设计方案',
          sup: '多种搭配，多种选择，多种方案'
        },
        {
          title: '一站式共享装修',
          sup: '给您一个精致的品质家'
        },
        {
          title: '专业解决问题',
          sup: '我们致力于为您解决以下问题'
        },
        {
          title: '五年质保',
          sup: '超出您对美好生活的期待'
        },
        {
          title: '满足您的需求',
          sup: '给您不一样的体验与感受'
        }
      ],
      design: [
        {
          title: '地中海风格',
          imgs: ['/sztwz/static/images/decoration/desgin1-1.png', '/sztwz/static/images/decoration/desgin1-2.png', '/sztwz/static/images/decoration/desgin1-3.png']
        },
        {
          title: '中式风格',
          imgs: ['/sztwz/static/images/decoration/desgin2-1.png', '/sztwz/static/images/decoration/desgin2-2.png', '/sztwz/static/images/decoration/desgin2-3.png']
        },
        {
          title: '简约风格',
          imgs: ['/sztwz/static/images/decoration/desgin3-1.png', '/sztwz/static/images/decoration/desgin3-2.png', '/sztwz/static/images/decoration/desgin3-3.png']
        },
        {
          title: '欧式风格',
          imgs: ['/sztwz/static/images/decoration/desgin4-1.png', '/sztwz/static/images/decoration/desgin4-2.png', '/sztwz/static/images/decoration/desgin4-3.png']
        }
      ],
      solve: ['量房量不准', '设计图不全', '列项列不对', '算量算不准', '报价误差大', '订单全搞错', '线管乱如麻', '物料不对应', '施工总延迟', '装修不透明'],
      swiperOption: {
        // autoplay: 1500,
        // effect: 'cube',
        loop: true,
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30
      }
    }
  },
  components: {
    decTitle,
    appo,
    webHeader,
    webFooter,
    swiper,
    swiperSlide,
    insDiv: ins
  },
  methods: {
    num (index) {
      return (index + 1) > 9 ? (index + 1) : ('0' + (index + 1))
    }
  },
  mounted () {
    let myChart = this.$echarts.init(document.getElementById('myChart'))
    let goverStandard = [3, 3, 1, 1, 1, 1, 1]
    let sztStandard = [5, 5, 3, 3, 3, 3, 3]
    myChart.setOption({
      tooltip: {},
      legend: {
        data: ['国家标准', '三只兔标准']
      },
      xAxis: {
        type: 'category',
        data: ['防水\n工程', '水电\n工程', '墙面\n瓷砖', '木门\n橱柜', '抽油\n烟机', '卫浴\n套装', '结构\n墙面'],
        axisLabel: {
          showMinLabel: true,
          borderWidth: 1,
          borderColor: '#757374',
          color: '#595758',
          padding: [5, 11]
        },
        axisTick: {
          show: false
        }
      },
      yAxis: [{
        name: '年',
        min: 0,
        max: 7,
        axisTick: {
          inside: true
        },
        splitLine: {
          show: false
        }
      }],
      series: [{
        name: '国家标准',
        type: 'bar',
        data: goverStandard,
        barCategoryGap: '40%',
        itemStyle: {
          normal: {
            show: true,
            color: '#F08300',
            barBorderRadius: 15,
            borderWidth: 0,
            borderColor: '#333'
          }
        }
      }, {
        name: '三只兔标准',
        type: 'bar',
        data: sztStandard,
        barCategoryGap: '40%',
        itemStyle: {
          normal: {
            show: true,
            color: '#E70012',
            barBorderRadius: 15,
            borderWidth: 0,
            borderColor: '#333'
          }
        }
      }]
    })
  }
}
</script>
<style lang="less" scoped>
.swiper-button-prev{display: none;}

.swiper-button-next{display: none;}
.swiper-container:hover .swiper-button-prev{
  display: block;
}
.swiper-container:hover .swiper-button-next{
  display: block;
}
.head-box,.decApp {
  width: 100%;
  img {
    width: 100%;
  }
}
.mt18{
  margin-top: 18px;
}
.mr18{
  margin-right: 18px;
}
.design{
  .bx{
    li{
      width:591px;
      height:373px;
      float: left;
      position: relative;
      &.odd{
        margin-right: 18px;
      }
      img{
        outline:0;
      }
      p{
        display: inline-block;
        width:191px;
        height: 49px;
        position: absolute;
        top:50%;
        right: 0;
        margin-top: -24.5px;
        text-align: center;
        line-height: 49px;
        z-index: 1;
        &.opacity{
          background: #000;
          filter: alpha(opacity=50);
          -moz-opacity: 0.5;
          opacity: 0.5;
        }
        span{
          color: #fff;
          font-size:24px;
          z-index: 2;
        }
      }
    }
  }
}
.solve{
  padding-bottom:70px;
  .bx{
    li{
      float: left;
      width: 225px;
      img{
        width: 225px;
        height: 203px;
        vertical-align:top;
      }
      p{
        background-color: #FE0000;
        width:225px;
        height: 48px;
        line-height: 48px;
        overflow:hidden;
        word-wrap: nowrap;
        text-overflow:ellipsis;
        font-size:25px;
        color: #fff;
      }
    }
  }
}
</style>
