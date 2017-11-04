<template>
  <div style="padding-top:100px">
    <div id="myChart" style="width: 1200px;height:750px"></div>
  </div>
</template>

<script>
import {mapData, seriesData1, seriesData2, seriesData3} from '../../config/mapData.js'
export default {
  data () {
    return {
      data: mapData,
      option: {
        title: {
          text: ['三只兔', '{a|·跑中国}'].join(''),
          subtext: [['{b|  }', '{c|家体验店}'].join('\t\t'), '{d|\t\t}'].join('\n'),
          x: 'center',
          itemGap: 20,
          textStyle: {
            color: '#000000',
            fontSize: 45,
            rich: {
              a: {
                color: 'red',
                fontSize: 45,
                fontWeight: 'bold'
              }
            }
          },
          subtextStyle: {
            rich: {
              b: {
                color: '#fff',
                fontSize: 45,
                fontWeight: 'bold',
                verticalAlign: 'bottom',
                backgroundColor: {
                  image: '../../../static/images/home/81.png'
                }
              },
              c: {
                color: '#000000',
                fontSize: 25,
                verticalAlign: 'bottom',
                fontWeight: 'bold'
              },
              d: {
                fontSize: 35,
                backgroundColor: {
                  image: '../../../static/images/home/subtext.jpg'
                }
              }
            }
          }
        },
        // 视觉映射组件
        visualMap: {
          // show: true,
          min: 0,
          max: 1500,
          left: '-100%',
          top: 'bottom',
          text: ['High', 'Low'],
          seriesIndex: [1],
          inRange: {
            color: ['#b6f4ac', '#63e151', '#3b8531']
          },
          calculable: false
        },
        geo: {
          // show: false,
          // 'China': '中国',
          map: 'china',
          // 是否开启鼠标缩放和平移漫游。
          // roam: 'move',
          label: {
            normal: {
              // show: true,
              // 文字颜色
              textStyle: {
                color: 'rgba(0,0,0,0.6)'
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis: {
              // 默认为黄色 选中和hover的颜色
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        series: [seriesData1, seriesData2, seriesData3]
      }
    }
  },
  methods: {
    convertData (data) {
      var res = []
      for (var i = 0; i < data.length; i++) {
        let geoCoord = data[i].value
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].name),
            seriesName: data[i].seriesName
          })
        }
      }
      return res
    }
  },
  mounted () {
    this.option.series[0].data = this.convertData(this.data)
    console.log(this.convertData(this.data))
    let myChart = this.$echarts.init(document.getElementById('myChart'))
    myChart.setOption(this.option)
  }
}
</script>
