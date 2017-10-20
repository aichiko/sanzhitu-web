
function contains (arr, obj) {
  var i = arr.length
  while (i--) {
    if (arr[i] === obj) {
      return true
    }
  }
  return false
}

var packData = [
  {
    title: '399主材包',
    subtitle: '主材+辅材  一站式服务',
    desc: '一线品牌，千款名品，包含地砖、木地板、橱柜、洁具卫浴、门、五金、集成吊顶等多项家庭装修必备主材，一站式购齐，让业主省时、省心、省力、省钱。',
    backgroundImage: '',
    images: [
      '/static/images/logos/01.png',
      '/static/images/logos/02.png',
      '/static/images/logos/03.png'
    ]
  },
  {
    title: '瓷砖',
    subtitle: '',
    desc: '不限室内地面面积，及厨房、卫生间墙面。',
    backgroundImage: '',
    images: [
      '/static/images/logos/04.png',
      '/static/images/logos/05.png',
      '/static/images/logos/06.png'
    ]
  },
  {
    title: '木地板',
    subtitle: '',
    desc: '不限地面面积，包标配地脚线及防潮垫。',
    backgroundImage: '',
    images: [
      '/static/images/logos/07.png',
      '/static/images/logos/08.png',
      '/static/images/logos/09.png'
    ]
  },
  {
    title: '橱柜',
    subtitle: '',
    desc: '包含吊柜、台面、地柜，标配拉手、铰链、踢脚线、洗菜盆+水龙头+下水器。',
    backgroundImage: '',
    images: [
      '/static/images/logos/10.png',
      '/static/images/logos/11.png',
      '/static/images/logos/12.png'
    ]
  },
  {
    title: '集成吊顶',
    subtitle: '',
    desc: '只用于厨房、卫生间，不包含其它区域。',
    backgroundImage: '',
    images: [
      '/static/images/logos/13.png',
      '/static/images/logos/14.png'
    ]
  },
  {
    title: '卫浴洁具',
    subtitle: '',
    desc: '全套4件套 浴室柜整套+马桶／蹲便器+淋浴花洒+面盆龙头',
    backgroundImage: '',
    images: [
      '/static/images/logos/15.png',
      '/static/images/logos/16.png',
      '/static/images/logos/17.png'
    ]
  },
  {
    title: '卫浴五金',
    subtitle: '',
    desc: '挂件4件套（浴巾架+毛衣杆+马桶杯／刷+纸巾盒）\n 小五金8件套（龙头1个+洗衣机地漏1个+普通地漏+下水器2个+角阀3个）',
    backgroundImage: '',
    images: [
      '/static/images/logos/18.png',
      '/static/images/logos/19.png',
      '/static/images/logos/20.png',
      '/static/images/logos/21.png'
    ]
  },
  {
    title: '室内门',
    subtitle: '',
    desc: '房间门、厨房门、卫生间门，含门扇、门框、门套线、合页、锁具及门吸等配件安装到位，不包含入户门和阳台门。',
    backgroundImage: '',
    images: [
      '/static/images/logos/20.png',
      '/static/images/logos/21.png',
      '/static/images/logos/22.png'
    ]
  },
  {
    title: '开关面板',
    subtitle: '',
    desc: '2室一厅一厨一卫35只（白／金色）\n 3室一厅一厨一卫55只（白／金色）',
    backgroundImage: '',
    images: [
      '/static/images/logos/23.png',
      '/static/images/logos/24.png',
      '/static/images/logos/25.png'
    ]
  }
]

var jiajubaoData = [
  {
    title: '家电包',
    subtitle: '  家电包  一套式',
    desc: '大牌家电，一套式；价格透明，售后有保障。',
    contents: [
      {
        title: '名牌正品',
        subtitle: '品牌授权  正品保障',
        icon: 'AlwBao-bannerText-icon5'
      },
      {
        title: '售后保障',
        subtitle: '跟踪到底  售后保障',
        icon: 'AlwBao-bannerText-icon6'
      },
      {
        title: '工厂直供',
        subtitle: '厂家采购  杜绝回扣',
        icon: 'AlwBao-bannerText-icon7'
      }
    ]
  },
  {
    title: '客厅空间',
    subtitle: '',
    desc: '客厅空间，涵盖沙发、茶几、电视柜，从考虑到空间，完善家的功能，让您开启家的美妙旅程。',
    backgroundImage: '',
    images: [
      '/static/images/logos/23.png',
      '/static/images/logos/24.png',
      '/static/images/logos/25.png'
    ],
    contents: [
      {
        title: '欧瑞家具 摩卡系列 1.5米床+双床头柜 （W07T7+WTT17+RTD17+W01T1）',
        p_title: '宜家欧陆风风格全屋家具18件套',
        image: 'http://www.woimg.com/shop/store/goods/1/2017/01/1_05371029883490298.jpg@!product-240?1485326900'
      },
      {
        title: '四海美家 简欧风格 卧室小包 223床D(皮屏)+床头柜',
        p_title: '宜家欧陆风风格全屋家具18件套',
        image: 'http://www.woimg.com/shop/store/goods/1/2016/11/1_05336595867324659.jpg@!product-240?1485326900'
      },
      {
        title: '东方家庭 新中式 卧室小包套餐二  床+床头柜 1床2柜',
        p_title: '宜家欧陆风风格全屋家具18件套',
        image: 'http://www.woimg.com/shop/store/goods/1/2016/11/1_05336581421157780.jpg@!product-240?1485326900'
      }
    ]
  },
  {
    title: '卧室空间',
    subtitle: '',
    desc: '卧房空间，卧房是停留最长的地方，一张舒适的床，是梦开始的地方。',
    backgroundImage: '',
    images: [
      '/static/images/logos/23.png',
      '/static/images/logos/24.png',
      '/static/images/logos/25.png'
    ],
    contents: [
      {
        title: '崇雅家具 茶几C2283L00+电视柜 D2283L00',
        p_title: '宜家欧陆风风格全屋家具18件套',
        image: 'http://www.woimg.com/shop/store/goods/1/2017/01/1_05377293391451682.jpg@!product-240?1485327027'
      },
      {
        title: '四海美家 欧式 M08长几D+M08客厅矮柜 C2.0米',
        p_title: '宜家欧陆风风格全屋家具18件套',
        image: 'http://www.woimg.com/shop/store/goods/1/2016/11/1_05338208475204539.jpg@!product-240?1485327027'
      },
      {
        title: '欧瑞家具 摩卡系列 茶几WE313AS+WE313B 地柜WN13B',
        p_title: '宜家欧陆风风格全屋家具18件套',
        image: 'http://www.woimg.com/shop/store/goods/1/2017/01/1_05371001347072981.jpg@!product-240?1485327027'
      }
    ]
  }
]

module.exports = {
  contains: contains,
  packData: packData,
  jiajubaoData: jiajubaoData
}
