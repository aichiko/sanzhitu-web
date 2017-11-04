import $ from 'jquery'

export function getCountry () {
  // 跨域（可跨所有域名）
  $.getJSON('http://sanztu.com/wz/provinces/list', function (json) {
    console.log(json)
  })
}

export const country = {
  provinces: [
    {
      text: '广东',
      value: '10',
      citys: [
        {
          text: '深圳',
          value: '11',
          shops: [
            {
              text: '深圳总部',
              value: '111'
            }
          ]
        },
        {
          text: '佛山',
          value: '12',
          shops: [
            {
              text: '佛山分站',
              value: '121'
            },
            {
              text: '佛山办事处',
              value: '122'
            }
          ]
        }
      ]
    },
    {
      text: '广西',
      value: '20',
      citys: [
        {
          text: '南宁',
          value: '21',
          shops: [
            {
              text: '南宁分站',
              value: '211'
            }
          ]
        },
        {
          text: '梧州',
          value: '22',
          shops: [
            {
              text: '梧州分站',
              value: '221'
            }
          ]
        },
        {
          text: '钦州',
          value: '23',
          shops: [
            {
              text: '钦州分站',
              value: '231'
            }
          ]
        }
      ]
    },
    {
      text: '海南',
      value: '30',
      citys: [
        {
          text: '海口',
          value: '31',
          shops: [
            {
              text: '海口分站',
              value: '311'
            }
          ]
        }
      ]
    },
    {
      text: '福建',
      value: '40',
      citys: [
        {
          text: '福清',
          value: '41',
          shops: [
            {
              text: '福清分站',
              value: '411'
            }
          ]
        },
        {
          text: '泉州',
          value: '42',
          shops: [
            {
              text: '泉州分站',
              value: '421'
            }
          ]
        },
        {
          text: '漳州',
          value: '43',
          shops: [
            {
              text: '漳州分站',
              value: '431'
            }
          ]
        }
      ]
    },
    {
      text: '江苏',
      value: '50',
      citys: [
        {
          text: '泰州',
          value: '51',
          shops: [
            {
              text: '姜堰分站',
              value: '511'
            }
          ]
        },
        {
          text: '淮安',
          value: '52',
          shops: [
            {
              text: '淮安分站',
              value: '521'
            }
          ]
        },
        {
          text: '扬州',
          value: '53',
          shops: [
            {
              text: '扬州分站',
              value: '531'
            }
          ]
        },
        {
          text: '苏州',
          value: '54',
          shops: [
            {
              text: '苏州分站',
              value: '541'
            }
          ]
        },
        {
          text: '南京',
          value: '55',
          shops: [
            {
              text: '南京分站',
              value: '551'
            }
          ]
        },
        {
          text: '苏北',
          value: '55',
          shops: [
            {
              text: '运营中心',
              value: '551'
            }
          ]
        }
      ]
    },
    {
      text: '山西',
      value: '60',
      citys: [
        {
          text: '襄汾',
          value: '61',
          shops: [
            {
              text: '襄汾分站',
              value: '611'
            }
          ]
        }
      ]
    },
    {
      text: '安徽',
      value: '70',
      citys: [
        {
          text: '泗县',
          value: '71',
          shops: [
            {
              text: '泗县分站',
              value: '711'
            }
          ]
        },
        {
          text: '宿州',
          value: '72',
          shops: [
            {
              text: '宿州分站',
              value: '721'
            }
          ]
        },
        {
          text: '灵壁',
          value: '73',
          shops: [
            {
              text: '灵壁分站',
              value: '731'
            }
          ]
        },
        {
          text: '明光',
          value: '74',
          shops: [
            {
              text: '明光分站',
              value: '741'
            }
          ]
        }
      ]
    },
    {
      text: '浙江',
      value: '75',
      citys: [
        {
          text: '绍兴',
          value: '76',
          shops: [
            {
              text: '柯桥分站',
              value: '761'
            }
          ]
        }
      ]
    },
    {
      text: '湖北',
      value: '80',
      citys: [
        {
          text: '武汉',
          value: '81',
          shops: [
            {
              text: '服务中心',
              value: '811'
            }
          ]
        },
        {
          text: '红安',
          value: '82',
          shops: [
            {
              text: '红安分站',
              value: '821'
            }
          ]
        },
        {
          text: '荆州',
          value: '83',
          shops: [
            {
              text: '荆州分站',
              value: '831'
            }
          ]
        },
        {
          text: '恩施',
          value: '84',
          shops: [
            {
              text: '恩施分站',
              value: '841'
            }
          ]
        },
        {
          text: '咸宁',
          value: '85',
          shops: [
            {
              text: '咸宁分站',
              value: '851'
            }
          ]
        },
        {
          text: '襄阳',
          value: '86',
          shops: [
            {
              text: '襄阳分站',
              value: '861'
            }
          ]
        },
        {
          text: '利川',
          value: '87',
          shops: [
            {
              text: '利川分站',
              value: '871'
            }
          ]
        },
        {
          text: '鄂州',
          value: '88',
          shops: [
            {
              text: '鄂州分站',
              value: '881'
            }
          ]
        },
        {
          text: '宜昌',
          value: '89',
          shops: [
            {
              text: '宜昌分站',
              value: '891'
            }
          ]
        }
      ]
    },
    {
      text: '江西',
      value: '90',
      citys: [
        {
          text: '九江',
          value: '91',
          shops: [
            {
              text: '九江分站',
              value: '911'
            }
          ]
        }
      ]
    },
    {
      text: '河南',
      value: '92',
      citys: [
        {
          text: '安阳',
          value: '93',
          shops: [
            {
              text: '安阳分站',
              value: '931'
            }
          ]
        },
        {
          text: '鹤壁',
          value: '94',
          shops: [
            {
              text: '鹤壁分站',
              value: '941'
            }
          ]
        },
        {
          text: '南阳',
          value: '95',
          shops: [
            {
              text: '南阳分站',
              value: '951'
            }
          ]
        },
        {
          text: '郑州',
          value: '96',
          shops: [
            {
              text: '新郑市分站',
              value: '961'
            }
          ]
        }
      ]
    },
    {
      text: '四川',
      value: '100',
      citys: [
        {
          text: '成都',
          value: '101',
          shops: [
            {
              text: '成都分站',
              value: '1011'
            }
          ]
        }
      ]
    },
    {
      text: '重庆',
      value: '110',
      citys: [
        {
          text: '重庆',
          value: '111',
          shops: [
            {
              text: '潼南分站',
              value: '1111'
            },
            {
              text: '万州分站',
              value: '1112'
            },
            {
              text: '开县分站',
              value: '1113'
            },
            {
              text: '梁平分站',
              value: '1114'
            },
            {
              text: '云阳分站',
              value: '1115'
            },
            {
              text: '江北区分站',
              value: '1116'
            },
            {
              text: '长寿分站',
              value: '1117'
            },
            {
              text: '石柱分站',
              value: '1118'
            },
            {
              text: '铜梁分站',
              value: '1119'
            },
            {
              text: '城口分站',
              value: '1120'
            },
            {
              text: '忠县分站',
              value: '1121'
            },
            {
              text: '南川分站',
              value: '1122'
            }
          ]
        }
      ]
    },
    {
      text: '云南',
      value: '120',
      citys: [
        {
          text: '丽江',
          value: '121',
          shops: [
            {
              text: '丽江分站',
              value: '1211'
            }
          ]
        }
      ]
    },
    {
      text: '内蒙古',
      value: '125',
      citys: [
        {
          text: '呼和浩特',
          value: '126',
          shops: [
            {
              text: '呼和浩特分站',
              value: '1261'
            }
          ]
        },
        {
          text: '包头',
          value: '127',
          shops: [
            {
              text: '包头分站',
              value: '1271'
            }
          ]
        }
      ]
    },
    {
      text: '山西',
      value: '130',
      citys: [
        {
          text: '临汾',
          value: '131',
          shops: [
            {
              text: '临汾',
              value: '1311'
            }
          ]
        },
        {
          text: '太原',
          value: '132',
          shops: [
            {
              text: '太原分站',
              value: '1321'
            }
          ]
        },
        {
          text: '阳泉',
          value: '133',
          shops: [
            {
              text: '阳泉分站',
              value: '1331'
            }
          ]
        }
      ]
    },
    {
      text: '辽宁',
      value: '135',
      citys: [
        {
          text: '沈阳',
          value: '136',
          shops: [
            {
              text: '沈阳运营中心',
              value: '1361'
            }
          ]
        }
      ]
    },
    {
      text: '天津',
      value: '137',
      citys: [
        {
          text: '天津',
          value: '137',
          shops: [
            {
              text: '天津分站',
              value: '1371'
            }
          ]
        }
      ]
    }
  ]
}

/*

*/
export const shops = {
  hd: [
    '华南地区',
    '华东地区',
    '华中地区',
    '西南地区',
    '华北地区',
    '西北地区'
  ],
  bd: [
    {
      /* 华南片区 */
      area: 'southern',
      /* 实体店 */
      shop: [
        {
          lng: '116.23',
          lat: '39.54',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '深圳研发中心',
          cityId: '306',
          tiyId: '18',
          adress: '深圳市宝安区新安街道留仙二路汇聚创新园四楼',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '116.23',
          lat: '39.54',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E4%BD%9B%E5%B1%B1.jpg',
          name: '广东佛山供应链',
          cityId: '306',
          tiyId: '18',
          adress: '广东省佛山市顺德区乐从镇星光国际A2202',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '116.23',
          lat: '39.54',
          id: '18',
          type: '1',
          imgSrc: '',
          name: '广东佛山分站',
          cityId: '306',
          tiyId: '18',
          adress: '广东省佛山市金海创意中心16楼',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '113.470551',
          lat: '22.572647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E5%8D%97%E5%AE%81.jpg',
          name: '广西南宁分站',
          cityId: '306',
          tiyId: '18',
          adress: '广西省南宁市西乡塘区安吉大道47-2号大商汇国际建材城A16栋',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '116.404',
          lat: '39.915',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '广西梧州分站',
          cityId: '306',
          tiyId: '18',
          adress: '广西省梧州市两广市场C区11号',
          phone: '400-833-1153',
          flag: '筹划中'
        },
        {
          lng: '116.404',
          lat: '39.915',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '广西钦州分站',
          cityId: '306',
          tiyId: '18',
          adress: '广西省钦州市钦州湾大道鸿发市场',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '113.470551',
          lat: '22.572647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E6%B5%B7%E5%8D%97%E6%B5%B7%E5%8F%A3.jpg',
          name: '海南海口分站',
          cityId: '306',
          tiyId: '18',
          adress: '海南省海口市金盛达家居建材国际商场',
          phone: '400-833-1153',
          flag: '营业中'
        }
      ]
    },
    {
      /* 华东片区 */
      area: 'East',
      /* 实体店 */
      shop: [
        {
          lng: '116.404',
          lat: '39.915',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '苏北运营中心',
          cityId: '306',
          tiyId: '18',
          adress: '江苏省淮安市淮阴区翔宇北道99号红星美凯龙四楼',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '113.470551',
          lat: '22.572647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E5%A7%9C%E5%A0%B0.jpg',
          name: '泰州姜堰分站',
          cityId: '306',
          tiyId: '18',
          adress: '江苏省泰州市姜堰区家居广场三只兔建材馆',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '113.470551',
          lat: '22.572647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '江苏南京分站',
          cityId: '306',
          tiyId: '18',
          adress: '江苏省南京市雨花台区板桥弘阳装饰城A1区',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '116.404',
          lat: '39.915',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '江苏南京浦建分站',
          cityId: '306',
          tiyId: '18',
          adress: '江苏省南京市浦口区中海万锦熙岸',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '116.404',
          lat: '39.915',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '江苏淮安分站',
          cityId: '306',
          tiyId: '18',
          adress: '江苏省淮安市翔宇红星美凯龙',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '116.404',
          lat: '39.915',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '江苏扬州分站',
          cityId: '306',
          tiyId: '18',
          adress: '江苏省扬州市邗江区祥园路166号',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '116.404',
          lat: '39.915',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '江苏宿迁分站',
          cityId: '306',
          tiyId: '18',
          adress: '江苏省宿迁市义乌商贸城',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '116.404',
          lat: '39.915',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '江苏南通分站',
          cityId: '306',
          tiyId: '18',
          adress: '江苏省海安县长江中路111-10号',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '116.404',
          lat: '39.915',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '浙江绍兴柯桥分站',
          cityId: '306',
          tiyId: '18',
          adress: '浙江省绍兴市柯桥区红星美凯龙',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '116.404',
          lat: '39.915',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '浙江温州分站',
          cityId: '306',
          tiyId: '18',
          adress: '浙江省温州市瓯海双堡西路188号泰恒建材城H幢',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '116.404',
          lat: '39.915',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '福建漳州分站',
          cityId: '306',
          tiyId: '18',
          adress: '福建省漳州市明发商业广场',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '113.470551',
          lat: '22.572647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E7%A6%8F%E6%B8%85.jpg',
          name: '福建福清分站',
          cityId: '306',
          tiyId: '18',
          adress: '福建省福清市音西街道东桥自然村60-15店面',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '116.404',
          lat: '39.915',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '安徽合肥分站',
          cityId: '306',
          tiyId: '18',
          adress: '安徽省合肥瑶海区铜陵路',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '116.404',
          lat: '39.915',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '安徽明光分站',
          cityId: '306',
          tiyId: '18',
          adress: '安徽省明光市体育路140号甚泰服装厂进门右侧',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '116.404',
          lat: '39.915',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '安徽阜阳分站',
          cityId: '306',
          tiyId: '18',
          adress: '安徽省阜阳市农资建材市场A3-10',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '113.470551',
          lat: '22.572647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E6%B3%97%E5%8E%BF.jpg',
          name: '安徽泗县分站',
          cityId: '306',
          tiyId: '18',
          adress: '安徽省泗县泗州国际装饰城B16栋',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '113.470551',
          lat: '22.572647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E5%AE%BF%E5%B7%9E.jpg',
          name: '安徽宿州分站',
          cityId: '306',
          tiyId: '18',
          adress: '安徽省宿州市墉桥区意邦国际家居品牌中心15栋',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '113.470551',
          lat: '22.572647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '安徽灵壁分站',
          cityId: '306',
          tiyId: '18',
          adress: '安徽省宿州市灵 璧县南都商街北物业对面',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '116.404',
          lat: '39.915',
          id: '18',
          type: '1',
          imgSrc: '',
          name: '山东青岛分站',
          cityId: '306',
          tiyId: '18',
          adress: '山东省青岛市李沧区黑龙江路',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '116.404',
          lat: '39.915',
          id: '18',
          type: '1',
          imgSrc: '',
          name: '山东济南分站',
          cityId: '306',
          tiyId: '18',
          adress: '山东省济南市槐荫区腊山河东路',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '116.404',
          lat: '39.915',
          id: '18',
          type: '1',
          imgSrc: '',
          name: '山东潍坊分站',
          cityId: '306',
          tiyId: '18',
          adress: '山东省诸城市龙都建材城南门口北',
          phone: '400-833-1153',
          flag: '装修中'
        }
      ]
    },
    {
      /* 华中片区 */
      area: 'Central',
      /* 实体店 */
      shop: [
        {
          lng: '112.410551',
          lat: '21.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E6%AD%A6%E6%B1%89.jpg',
          name: '武汉服务中心',
          cityId: '306',
          tiyId: '18',
          adress: '湖北省武汉市东西湖区金银湖路金盛建材家居2楼',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '武汉江岸区分站',
          cityId: '306',
          tiyId: '18',
          adress: '湖北省江岸区竹叶山红旗家居1楼',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: '',
          name: '湖北武昌分站',
          cityId: '306',
          tiyId: '18',
          adress: '湖北省武汉市武昌区友谊大道18号金盛家居建材广场2楼',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: '',
          name: '湖北黄陂分站',
          cityId: '306',
          tiyId: '18',
          adress: '湖北省武汉市黄陂区汉口北五洲国际建材城9号馆1楼',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '112.410551',
          lat: '21.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E8%8D%86%E5%B7%9E.jpg',
          name: '湖北荆州分站',
          cityId: '306',
          tiyId: '18',
          adress: '湖北省荆州市沙市区银湖科技工业园F区6栋',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '112.410551',
          lat: '21.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E7%BA%A2%E5%AE%89.jpg',
          name: '湖北红安分站',
          cityId: '306',
          tiyId: '18',
          adress: '湖北省红安县沃尔玛建材家居城三只兔展馆',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '112.410551',
          lat: '21.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E6%81%A9%E6%96%BD.jpg',
          name: '湖北恩施分站',
          cityId: '306',
          tiyId: '18',
          adress: '湖北省恩施市舞阳街道办事处金桂大道8号武陵国际装饰城B02栋',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '112.410551',
          lat: '21.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E5%92%B8%E5%AE%81.jpg',
          name: '湖北咸宁分站',
          cityId: '306',
          tiyId: '18',
          adress: '湖北省咸宁市贺胜路航天花园1幢1层101',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '112.410551',
          lat: '21.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E8%A5%84%E9%98%B3.jpg',
          name: '湖北襄阳市宜城分站',
          cityId: '306',
          tiyId: '18',
          adress: '湖北省宜城市一阳街日丰管专卖店',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '112.410551',
          lat: '21.532647',
          id: '18',
          type: '1',
          imgSrc: '',
          name: '湖北利川分站',
          cityId: '306',
          tiyId: '18',
          adress: '湖北省利川市左岸利川土苗风情街A区16号',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '112.410551',
          lat: '21.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E8%A5%84%E9%98%B3.jpg',
          name: '湖北枣阳分站',
          cityId: '306',
          tiyId: '18',
          adress: '湖北省枣阳市光彩市场',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '湖北鄂州分站',
          cityId: '306',
          tiyId: '18',
          adress: '湖北省鄂州市华容区葛洪大道80号',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '湖北宜昌分站',
          cityId: '306',
          tiyId: '18',
          adress: '湖北省宜昌市伍家岗区伍临路38号',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '112.410551',
          lat: '21.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E5%AE%89%E9%98%B3%E6%9E%97%E5%B7%9E.jpg',
          name: '河南安阳分站',
          cityId: '306',
          tiyId: '18',
          adress: '河南省安阳市林州市义乌商贸城八号楼一层126号',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '112.410551',
          lat: '21.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E6%B2%B3%E5%8D%97%E5%8D%97%E9%98%B3.jpg',
          name: '河南南阳分站',
          cityId: '306',
          tiyId: '18',
          adress: '河南省南阳市张衡路与独山大道交叉口中泰国际大厦',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '112.410551',
          lat: '21.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E5%AE%89%E5%BE%BD%E9%B9%A4%E5%A3%81.jpg',
          name: '河南鹤壁分站',
          cityId: '306',
          tiyId: '18',
          adress: '河南省鹤壁市新区天泰建材城一区外环50号',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '112.410551',
          lat: '21.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E9%83%91%E5%B7%9E.jpg',
          name: '河南郑州新郑市分站',
          cityId: '306',
          tiyId: '18',
          adress: '河南省郑州市新郑市龙湖华南城4B-1-106',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '河南卢氏分站',
          cityId: '306',
          tiyId: '18',
          adress: '河南省卢氏县党校对面环保局楼',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '河南许昌分站',
          cityId: '306',
          tiyId: '18',
          adress: '河南省许昌市东城区万洲大都会',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '江西南昌分站',
          cityId: '306',
          tiyId: '18',
          adress: '江西省南昌市洪城路6号国贸广场巨豪峰26楼',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '江西九江分站',
          cityId: '306',
          tiyId: '18',
          adress: '江西省九江市华东3期B5栋121-123',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '江西鹰潭分站',
          cityId: '306',
          tiyId: '18',
          adress: '江西省鹰潭南站路建材市场A栋',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '江西景德镇分站',
          cityId: '306',
          tiyId: '18',
          adress: '江西省景德镇豪德建材市场8街',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '湖南长沙分站',
          cityId: '306',
          tiyId: '18',
          adress: '湖南省长沙市天心区中意二路',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '湖南醴陵分站',
          cityId: '306',
          tiyId: '18',
          adress: '湖南省醴陵市左权北路',
          phone: '400-833-1153',
          flag: '装修中'
        }
      ]
    },
    {
      /* 西南片区 */
      area: 'southwest',
      /* 实体店 */
      shop: [
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E6%88%90%E9%83%BD.jpg',
          name: '四川成都分站',
          cityId: '306',
          tiyId: '18',
          adress: '四川省成都市武侯区洗面桥街20号新博新美连锁一楼',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E9%87%8D%E5%BA%86%E6%BD%BC%E5%8D%97.jpg',
          name: '重庆潼南分站',
          cityId: '306',
          tiyId: '18',
          adress: '重庆市潼南区欧鹏中央公园2一12号',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E9%87%8D%E5%BA%86%E4%B8%87%E5%B7%9E.jpg',
          name: '重庆万州分站',
          cityId: '306',
          tiyId: '18',
          adress: '重庆市万州区龙宝机电城15栋',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E9%87%8D%E5%BA%86%E5%BC%80%E5%8E%BF.jpg',
          name: '重庆开县分站',
          cityId: '306',
          tiyId: '18',
          adress: '重庆开州平桥车站旁尚好建材城',
          phone: '400-833-1153',
          flag: '正在筹划中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E9%87%8D%E5%BA%86%E5%B8%82%E6%A2%81%E5%B9%B3%E5%8C%BA.jpg',
          name: '重庆梁平分站',
          cityId: '306',
          tiyId: '18',
          adress: '重庆市梁平去邑品观邸',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E9%87%8D%E5%BA%86%E4%BA%91%E9%98%B3.jpg',
          name: '重庆云阳分站',
          cityId: '306',
          tiyId: '18',
          adress: '重庆市云阳千科建材批发城',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '重庆江北区分站',
          cityId: '306',
          tiyId: '18',
          adress: '重庆市江北区石马街道松石大道江北金果园小区',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '重庆长寿分站',
          cityId: '306',
          tiyId: '18',
          adress: '重庆市长寿区菩提印象131',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '重庆铜梁分站',
          cityId: '306',
          tiyId: '18',
          adress: '重庆市铜梁迎春东街108号',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '重庆城口分站',
          cityId: '306',
          tiyId: '18',
          adress: '重庆市城口县亿联商城A栋-5',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '重庆忠县分站',
          cityId: '306',
          tiyId: '18',
          adress: '重庆市忠县金天门购物城金牛管业门市',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '重庆南川分站',
          cityId: '306',
          tiyId: '18',
          adress: '重庆市南川美佳美建材市场',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '110.410551',
          lat: '24.532647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '云南丽江分站',
          cityId: '306',
          tiyId: '18',
          adress: '云南省丽江市丽江嘉和城建材城',
          phone: '400-833-1153',
          flag: '装修中'
        }
      ]
    },
    {
      /* 华北片区 */
      area: 'southwest',
      /* 实体店 */
      shop: [
        {
          lng: '114.410551',
          lat: '22.532847',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E5%86%85%E8%92%99%E5%8F%A4.jpg',
          name: '内蒙古呼和浩特分站',
          cityId: '306',
          tiyId: '18',
          adress: '内蒙古呼和浩特市回民区县府街西口筑家小区9#2-501',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '114.410551',
          lat: '22.532847',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '包头分站',
          cityId: '306',
          tiyId: '18',
          adress: '内蒙古包头市金荣建材城',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '114.410551',
          lat: '22.532847',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E6%B2%88%E9%98%B3%E8%BF%90%E8%90%A5%E4%B8%AD%E5%BF%83.jpg',
          name: '沈阳运营中心',
          cityId: '306',
          tiyId: '18',
          adress: '辽宁省沈阳市皇姑区黄河北大街147号',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '114.410551',
          lat: '22.532847',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '山西临汾分站',
          cityId: '306',
          tiyId: '18',
          adress: '山西省临汾市尧都区南外环华强家具城',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '114.410551',
          lat: '22.532847',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '山西太原分站',
          cityId: '306',
          tiyId: '18',
          adress: '山西省太原市尖草坪区和平北路289号',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '114.410551',
          lat: '22.532847',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '山西省晋城市',
          cityId: '306',
          tiyId: '18',
          adress: '山西省晋城市城区黄华街交叉口金丰小区',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '114.410551',
          lat: '22.532847',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '山西阳泉分站',
          cityId: '306',
          tiyId: '18',
          adress: '山西省阳泉市开发区大连东路红星美凯龙',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '113.470551',
          lat: '22.572647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E8%A5%84%E6%B1%BE.jpg',
          name: '山西襄汾分站',
          cityId: '306',
          tiyId: '18',
          adress: '山西省临汾市襄汾县振兴路中段路西天泽家居二楼',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '114.410551',
          lat: '22.532847',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '天津分站',
          cityId: '306',
          tiyId: '18',
          adress: '天津市北辰区北仓朝阳路美亚钢材市场',
          phone: '400-833-1153',
          flag: '装修中'
        }
      ]
    },
    {
      /* 西北片区 */
      area: 'northwest',
      /* 实体店 */
      shop: [
        {
          lng: '113.499551',
          lat: '22.539647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E8%A5%BF%E5%AE%89.png',
          name: '西安市运营中心',
          cityId: '306',
          tiyId: '18',
          adress: '陕西省西安市太华南路东方美居建材灯饰城二楼',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '113.499551',
          lat: '22.539647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/%E9%AB%98%E9%99%B5.jpg',
          name: '西安高陵分站',
          cityId: '306',
          tiyId: '18',
          adress: '陕西省西安市高陵区鹿苑大道九境城东门',
          phone: '400-833-1153',
          flag: '营业中'
        },
        {
          lng: '113.499551',
          lat: '22.539647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '乌鲁木齐分站',
          cityId: '306',
          tiyId: '18',
          adress: '新疆乌鲁木齐市新市区美居物流园B座4楼',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '113.499551',
          lat: '22.539647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '陕西咸阳分站',
          cityId: '306',
          tiyId: '18',
          adress: '陕西省咸阳迎宾大道成国右岸小区',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '113.499551',
          lat: '22.539647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '甘肃兰州分站',
          cityId: '306',
          tiyId: '18',
          adress: '甘肃兰州西固月星家居1楼3号门',
          phone: '400-833-1153',
          flag: '装修中'
        },
        {
          lng: '113.499551',
          lat: '22.539647',
          id: '18',
          type: '1',
          imgSrc: 'http://oxux1itze.bkt.clouddn.com/boloni/default.png',
          name: '库尔勒分站',
          cityId: '306',
          tiyId: '18',
          adress: '新疆库尔勒市华凌市场洁具C区21-22号',
          phone: '400-833-1153',
          flag: '装修中'
        }
      ]
    }
  ]
}
