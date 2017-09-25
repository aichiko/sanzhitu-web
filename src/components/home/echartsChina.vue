<template>
  <div>
      <div id="myChart" style="width: 600pxheight:400px"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      china: [
        {name: '海门', value: 9},
        {name: '鄂尔多斯', value: 12},
        {name: '招远', value: 12},
        {name: '舟山', value: 12},
        {name: '齐齐哈尔', value: 14},
        {name: '盐城', value: 15},
        {name: '赤峰', value: 16},
        {name: '青岛', value: 18},
        {name: '乳山', value: 18},
        {name: '金昌', value: 19},
        {name: '泉州', value: 21},
        {name: '莱西', value: 21},
        {name: '日照', value: 21},
        {name: '胶南', value: 22},
        {name: '南通', value: 23},
        {name: '拉萨', value: 24},
        {name: '云浮', value: 24},
        {name: '梅州', value: 25},
        {name: '文登', value: 25},
        {name: '上海', value: 25},
        {name: '攀枝花', value: 25},
        {name: '威海', value: 25},
        {name: '承德', value: 25},
        {name: '厦门', value: 26},
        {name: '汕尾', value: 26},
        {name: '潮州', value: 26},
        {name: '丹东', value: 27},
        {name: '太仓', value: 27},
        {name: '曲靖', value: 27},
        {name: '烟台', value: 28},
        {name: '福州', value: 29},
        {name: '瓦房店', value: 30},
        {name: '即墨', value: 30},
        {name: '抚顺', value: 31},
        {name: '玉溪', value: 31},
        {name: '张家口', value: 31},
        {name: '阳泉', value: 31},
        {name: '莱州', value: 32},
        {name: '湖州', value: 32},
        {name: '汕头', value: 32},
        {name: '昆山', value: 33},
        {name: '宁波', value: 33},
        {name: '湛江', value: 33},
        {name: '揭阳', value: 34},
        {name: '荣成', value: 34},
        {name: '连云港', value: 35},
        {name: '葫芦岛', value: 35},
        {name: '常熟', value: 36},
        {name: '东莞', value: 36},
        {name: '河源', value: 36},
        {name: '淮安', value: 36},
        {name: '泰州', value: 36},
        {name: '南宁', value: 37},
        {name: '营口', value: 37},
        {name: '惠州', value: 37},
        {name: '江阴', value: 37},
        {name: '蓬莱', value: 37},
        {name: '韶关', value: 38},
        {name: '嘉峪关', value: 38},
        {name: '广州', value: 38},
        {name: '延安', value: 38},
        {name: '太原', value: 39},
        {name: '清远', value: 39},
        {name: '中山', value: 39},
        {name: '昆明', value: 39},
        {name: '寿光', value: 40},
        {name: '盘锦', value: 40},
        {name: '长治', value: 41},
        {name: '深圳', value: 41},
        {name: '珠海', value: 42},
        {name: '宿迁', value: 43},
        {name: '咸阳', value: 43},
        {name: '铜川', value: 44},
        {name: '平度', value: 44},
        {name: '佛山', value: 44},
        {name: '海口', value: 44},
        {name: '江门', value: 45},
        {name: '章丘', value: 45},
        {name: '肇庆', value: 46},
        {name: '大连', value: 47},
        {name: '临汾', value: 47},
        {name: '吴江', value: 47},
        {name: '石嘴山', value: 49},
        {name: '沈阳', value: 50},
        {name: '苏州', value: 50},
        {name: '茂名', value: 50},
        {name: '嘉兴', value: 51},
        {name: '长春', value: 51},
        {name: '胶州', value: 52},
        {name: '银川', value: 52},
        {name: '张家港', value: 52},
        {name: '三门峡', value: 53},
        {name: '锦州', value: 54},
        {name: '南昌', value: 54},
        {name: '柳州', value: 54},
        {name: '三亚', value: 54},
        {name: '自贡', value: 56},
        {name: '吉林', value: 56},
        {name: '阳江', value: 57},
        {name: '泸州', value: 57},
        {name: '西宁', value: 57},
        {name: '宜宾', value: 58},
        {name: '呼和浩特', value: 58},
        {name: '成都', value: 58},
        {name: '大同', value: 58},
        {name: '镇江', value: 59},
        {name: '桂林', value: 59},
        {name: '张家界', value: 59},
        {name: '宜兴', value: 59},
        {name: '北海', value: 60},
        {name: '西安', value: 61},
        {name: '金坛', value: 62},
        {name: '东营', value: 62},
        {name: '牡丹江', value: 63},
        {name: '遵义', value: 63},
        {name: '绍兴', value: 63},
        {name: '扬州', value: 64},
        {name: '常州', value: 64},
        {name: '潍坊', value: 65},
        {name: '重庆', value: 66},
        {name: '台州', value: 67},
        {name: '南京', value: 67},
        {name: '滨州', value: 70},
        {name: '贵阳', value: 71},
        {name: '无锡', value: 71},
        {name: '本溪', value: 71},
        {name: '克拉玛依', value: 72},
        {name: '渭南', value: 72},
        {name: '马鞍山', value: 72},
        {name: '宝鸡', value: 72},
        {name: '焦作', value: 75},
        {name: '句容', value: 75},
        {name: '北京', value: 79},
        {name: '徐州', value: 79},
        {name: '衡水', value: 80},
        {name: '包头', value: 80},
        {name: '绵阳', value: 80},
        {name: '乌鲁木齐', value: 84},
        {name: '枣庄', value: 84},
        {name: '杭州', value: 84},
        {name: '淄博', value: 85},
        {name: '鞍山', value: 86},
        {name: '溧阳', value: 86},
        {name: '库尔勒', value: 86},
        {name: '安阳', value: 90},
        {name: '开封', value: 90},
        {name: '济南', value: 92},
        {name: '德阳', value: 93},
        {name: '温州', value: 95},
        {name: '九江', value: 96},
        {name: '邯郸', value: 98},
        {name: '临安', value: 99},
        {name: '兰州', value: 99},
        {name: '沧州', value: 100},
        {name: '临沂', value: 103},
        {name: '南充', value: 104},
        {name: '天津', value: 105},
        {name: '富阳', value: 106},
        {name: '泰安', value: 112},
        {name: '诸暨', value: 112},
        {name: '郑州', value: 113},
        {name: '哈尔滨', value: 114},
        {name: '聊城', value: 116},
        {name: '芜湖', value: 117},
        {name: '唐山', value: 119},
        {name: '平顶山', value: 119},
        {name: '邢台', value: 119},
        {name: '德州', value: 120},
        {name: '济宁', value: 120},
        {name: '荆州', value: 127},
        {name: '宜昌', value: 130},
        {name: '义乌', value: 132},
        {name: '丽水', value: 133},
        {name: '洛阳', value: 134},
        {name: '秦皇岛', value: 136},
        {name: '株洲', value: 143},
        {name: '石家庄', value: 147},
        {name: '莱芜', value: 148},
        {name: '常德', value: 152},
        {name: '保定', value: 153},
        {name: '湘潭', value: 154},
        {name: '金华', value: 157},
        {name: '岳阳', value: 169},
        {name: '长沙', value: 175},
        {name: '衢州', value: 177},
        {name: '廊坊', value: 193},
        {name: '菏泽', value: 194},
        {name: '合肥', value: 229},
        {name: '武汉', value: 273},
        {name: '大庆', value: 279}
      ],
      data: [{
        name: '2256',
        value: 2256
      }, {
        name: '578',
        value: 578
      }, {
        name: '744',
        value: 744
      }, {
        name: '806',
        value: 806
      }, {
        name: '336',
        value: 336
      }, {
        name: '325',
        value: 325
      }, {
        name: '487',
        value: 487
      }, {
        name: '343',
        value: 343
      }, {
        name: '432',
        value: 432
      }, {
        name: '273',
        value: 273
      }, {
        name: '1055',
        value: 1055
      }, {
        name: '590',
        value: 590
      }, {
        name: '319',
        value: 319
      }, {
        name: '349',
        value: 349
      }, {
        name: '126',
        value: 126
      }, {
        name: '97',
        value: 97
      }, {
        name: '201',
        value: 201
      }, {
        name: '398',
        value: 398
      }, {
        name: '795',
        value: 795
      }, {
        name: '655',
        value: 655
      }, {
        name: '295',
        value: 295
      }, {
        name: '311',
        value: 311
      }, {
        name: '993',
        value: 993
      }, {
        name: '601',
        value: 601
      }, {
        name: '275',
        value: 275
      }, {
        name: '317',
        value: 317
      }, {
        name: '1000',
        value: 1000
      }, {
        name: '186',
        value: 186
      }, {
        name: '261',
        value: 261
      }, {
        name: '132',
        value: 132
      }, {
        name: '18',
        value: 18
      }, {
        name: '11',
        value: 11
      }],
      geoCoordMap: {
        '2256': [116.46, 39.92],
        '578': [121.29, 31.14],
        '744': [117.2, 39.13],
        '806': [106.32, 29.32],
        '336': [126.41, 45.45],
        '325': [125.19, 43.52],
        '487': [123.24, 41.50],
        '343': [111.48, 40.49],
        '432': [114.28, 38.02],
        '273': [112.34, 37.52],
        '1055': [117, 36.38],
        '590': [113.42, 34.48],
        '319': [108.54, 34.16],
        '349': [103.49, 36.03],
        '126': [106.16, 38.20],
        '97': [101.45, 36.38],
        '201': [87.36, 43.48],
        '398': [117.18, 31.51],
        '795': [118.50, 32.02],
        '655': [120.09, 30.14],
        '295': [113, 28.11],
        '311': [115.52, 28.41],
        '993': [114.21, 30.37],
        '601': [104.05, 30.39],
        '275': [106.42, 26.35],
        '317': [119.18, 26.05],
        '1000': [113.15, 23.08],
        '186': [110.20, 20.02],
        '261': [108.20, 22.48],
        '132': [102.41, 25],
        '18': [91.10, 29.40],
        '11': [114.10, 22.18]
      },
      option: {
        title: {
          text: '全国会员分布',
          subtext: '（单位/人）',
          x: 'center',
          textStyle: {
            color: '#424242'
          }
        },
        tooltip: {
          show: false
        },
        visualMap: {
          min: 0,
          max: 1500,
          left: '-100%',
          top: 'bottom',
          text: ['High', 'Low'],
          seriesIndex: [1],
          inRange: {
            color: ['#e0ffff', '#006edd']
          },
          calculable: false
        },
        geo: {
          map: 'china',
          roam: 'move',
          // scaleLimit:{
          //   max:'1.2',
          //   min:'0.7'
          // },
          label: {
            normal: {
              show: true,
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
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        series: [{
          type: 'scatter',
          coordinateSystem: 'geo',
          data: '',
          symbolSize: 20,
          symbol: 'path://M35.025,17.608c-5.209-4.786-11.483-2.301-15.303-4.281v-1.482c0-0.41-0.333-0.743-0.743-0.743c-0.411,0-0.743,0.333-0.743,0.743v24.682c-1.855,0.104-3.261,0.59-3.261,1.175c0,0.661,1.793,1.197,4.005,1.197c2.21,0,4.003-0.536,4.003-1.197c0-0.585-1.405-1.071-3.261-1.175V26.151C24.575,24.573,28.408,17.166,35.025,17.608z',
          symbolRotate: 0,
          symbolOffset: ['50%', '-100%'],
          label: {
            normal: {
              formatter: '{b}',
              position: 'top',
              show: false,
              textStyle: {
                color: '#000000',
                fontSize: 16
              }
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: '#F06C00'
            }
          }
        }, {
          name: '个人会员数量',
          type: 'map',
          geoIndex: 0,
          tooltip: {
            show: true
          },
          data: [{
            name: '北京',
            value: 2256
          }, {
            name: '天津',
            value: 744
          }, {
            name: '上海',
            value: 578
          }, {
            name: '重庆',
            value: 806
          }, {
            name: '河北',
            value: 432
          }, {
            name: '河南',
            value: 590
          }, {
            name: '云南',
            value: 132
          }, {
            name: '辽宁',
            value: 487
          }, {
            name: '黑龙江',
            value: 336
          }, {
            name: '湖南',
            value: 295
          }, {
            name: '安徽',
            value: 398
          }, {
            name: '山东',
            value: 1055
          }, {
            name: '新疆',
            value: 201
          }, {
            name: '江苏',
            value: 795
          }, {
            name: '浙江',
            value: 655
          }, {
            name: '江西',
            value: 311
          }, {
            name: '湖北',
            value: 993
          }, {
            name: '广西',
            value: 261
          }, {
            name: '甘肃',
            value: 349
          }, {
            name: '山西',
            value: 273
          }, {
            name: '内蒙古',
            value: 343
          }, {
            name: '陕西',
            value: 319
          }, {
            name: '吉林',
            value: 325
          }, {
            name: '福建',
            value: 317
          }, {
            name: '贵州',
            value: 275
          }, {
            name: '广东',
            value: 1000
          }, {
            name: '青海',
            value: 97
          }, {
            name: '西藏',
            value: 18
          }, {
            name: '四川',
            value: 601
          }, {
            name: '宁夏',
            value: 126
          }, {
            name: '海南',
            value: 186
          }, {
            name: '台湾',
            value: 0
          }, {
            name: '香港',
            value: 11
          }, {
            name: '澳门',
            value: 0
          }]
        }]
      }
    }
  },
  methods: {
    convertData (data) {
      var res = []
      for (var i = 0; i < data.length; i++) {
        let geoCoord = this.geoCoordMap[data[i].name]
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          })
        }
      }
      return res
    }
  },
  mounted () {
    this.option.series.data = this.convertData(this.data)
    let myChart = this.$echarts.init(document.getElementById('myChart'))
    console.log(myChart)
    myChart.setOption(this.option)
    console.log(myChart)
  }
}
</script>
