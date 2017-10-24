<template>
<div style="background:#fff;margin:0 auto;">
  <header class="head-box">
    <img src="../../assets/decoration/banner.png" alt="图片还在加载中">
  </header>
  <dec-title :title="titles[0]"></dec-title>
  <div class="design">
    <ul class="bx clearfix">
      <li v-for="(d, index) in design" :class="{odd:index%2==0,mt18:index > 1}">
        <img :src="d.img" alt="">
        <p class="opacity"></p>
        <p><span>{{ d.title }}</span></p>
      </li>
    </ul>
  </div>
  <dec-title :title="titles[1]"></dec-title>
  <div class="solve">
    <ul class="bx clearfix">
      <li v-for="(s, index) in solve" :class="{mr18: (index+1)%5 != 0,mt18:index > 4}">
        <img :src="'../../../static/images/decoration/solve'+ num( index ) +'.png'" >
        <p>{{ s }}</p>
      </li>
    </ul>
  </div>
  <div class="decApp">
    <img src="../../../static/images/decoration/decApp.jpg"  alt="图片还在加载中">
  </div>
  <dec-title :title="titles[2]"></dec-title>
  <div class="myChartBox">
    <div id="myChart" class="bx" style="width: 1000px;height:500px"></div>
  </div>
  <dec-title :title="titles[3]"></dec-title>
  <appo style="padding-bottom:100px"></appo>
</div>

</template>

<script>
import decTitle from '../../components/decoration/decTitle.vue'
import appo from '@/components/decoration/appo'
export default {
  data () {
    return {
      titles: [
        {
          title: '整居设计方案',
          sup: '多种搭配，多种选择，多种方案'
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
          title: '更多个性化服务',
          sup: '满足您的需求',
          sub: '更多个性化服务'
        }
      ],
      design: [
        {
          title: '地中海风格',
          img: '../../../static/images/decoration/desgin-1.png'
        },
        {
          title: '中式风格',
          img: '../../../static/images/decoration/desgin-3.png'
        },
        {
          title: '简约风格',
          img: '../../../static/images/decoration/desgin-2.png'
        },
        {
          title: '欧式风格',
          img: '../../../static/images/decoration/desgin-4.png'
        }
      ],
      solve: ['量房量不准', '设计图不全', '列项列不对', '算量算不准', '报价误差大', '订单全搞错', '线管乱如麻', '物料不对应', '施工总延迟', '装修不透明']
    }
  },
  components: {
    decTitle, appo
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
        &.opacity{
          background: rgb(254,0,0);
          filter: alpha(opacity=50);
          -moz-opacity: 0.5;
          opacity: 0.5;
        }
        span{
          color: #fff;
          font-size:24px;
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
        height: 58px;
        line-height: 58px;
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
