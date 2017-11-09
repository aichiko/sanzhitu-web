export const mapData = [{
  name: ['{e|\t9}', '家分店\n', '{f|华北地区}'].join(''),
  value: [116.46, 39.92]
}, {
  name: ['{e|13}', '家分店\n', '{f|西南地区}'].join(''),
  value: [103.31, 34.19]
}, {
  name: ['{e|\t6}', '家分店\n', '{f|西北地区}'].join(''),
  value: [88, 37.0]
}, {
  name: ['{e|25}', '家分店\n', '{f|华中地区}'].join(''),
  value: [114.31, 30.52]
}, {
  name: ['{e|\t7}', '家分店\n', '{f|华南地区}'].join(''),
  value: [106.54, 24.44]
}, {
  name: ['{e|21}', '家分店\n', '{f|华东地区}'].join(''),
  value: [121.76, 31.05]
}]

export const seriesData1 = {
  name: 'city',
  type: 'scatter',
  symbol: 'image:///sztwz/static/images/home/mapPoint.png',
  coordinateSystem: 'geo',
  data: '',
  // 标注的大小
  symbolSize: [90, 90],
  symbolOffset: ['-50%', '-50%'],
  // 标注的图形
  // symbol: 'image:///static/images/szt_icon_museumBg.png',
  // symbol: 'path://M35.025,17.608c-5.209-4.786-11.483-2.301-15.303-4.281v-1.482c0-0.41-0.333-0.743-0.743-0.743c-0.411,0-0.743,0.333-0.743,0.743v24.682c-1.855,0.104-3.261,0.59-3.261,1.175c0,0.661,1.793,1.197,4.005,1.197c2.21,0,4.003-0.536,4.003-1.197c0-0.585-1.405-1.071-3.261-1.175V26.151C24.575,24.573,28.408,17.166,35.025,17.608z',
  // 标记的旋转角度
  symbolRotate: 0,
  // symbolOffset: ['50%', '-100%'],
  // 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
  label: {
    normal: {
      formatter: '{b}',
      position: 'top',
      distance: '-65',
      show: true,
      textStyle: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
        rich: {
          e: {
            fontSize: 37,
            fontWeight: 'bold',
            color: '#FF0000'
          },
          f: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000'
          }
        }
      }
    },
    emphasis: {
      show: false
    }
  },
  // 旗子的颜色
  itemStyle: {
    normal: {
      color: '#343434'
    },
    emphasis: {
      // borderWidth: 10
      borderType: 'dashed'
    }
  }
}

export const seriesData3 = {
  type: 'scatter',
  name: 'header',
  symbol: 'image:///sztwz/static/images/home/mapPoint2.png',
  symbolSize: [50, 70],
  symbolOffset: [0, '-50%'],
  coordinateSystem: 'geo',
  data: [{name: '{g|深圳\n总部}', value: [113.46, 22.27]}],
  label: {
    normal: {
      formatter: '{b}',
      position: 'top',
      distance: '-35',
      show: true,
      textStyle: {
        color: '#57bb49',
        fontSize: 14,
        rich: {
          g: {
            color: '#E40011'
          }
        }
      }
    }
  },
  itemStyle: {
    normal: {
      color: '#343434'
    },
    emphasis: {
      borderType: 'dashed'
    }
  }
}

export const seriesData2 = {
  name: '个人会员数量',
  type: 'map',
  map: 'china',
  geoIndex: 0,
  itemStyle: {
    normal: {
      color: 'orange',
      label: {show: false}
    }
  },
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
}
