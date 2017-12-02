<template>
  <div>
    <header>
      <web-header></web-header>
    </header>
    <div class="headImg"><img src="../../../static/images/business/headImg.png" width="100%" alt=""></div>
    <div class="aboutUs">
      <div class="usTop">
        <div class="bx">
          <div class="usLeft">
            <span>关于三只兔</span>
            <p>ABOUT US</p>
          </div>
        </div>
      </div>
      <div class="usBottom">
        <div class="bx clearfix">
          <div class="usLeft float-left" style="text-align:left;">
            &nbsp&nbsp&nbsp&nbsp三只兔是深圳市乐装家信息科技有限公司旗下专业从事五星工长装修、安装、维修、保养和消费者价值深度挖掘的共享平台，同时承接线上天猫、京东等网上建材家居销售最后一公里的服务工作，为消费者提供快速、可靠、透明、经济、高效的平台服务；三只兔在全国各地已经建立千家服务站和数百家线下体验馆，开创行业先河的共享装修模式正在形成中国特色DIY模式；三只兔致力于以100%五星级服务，追求消费者的最大满意。<br>
    &nbsp&nbsp&nbsp&nbsp三只兔很好的把“家、工长/工匠、材料、服务”四者有机的结合起来，无论是装修还是安装、维修、保养服务的全过程，三只兔倡导的“服务九步走+7张过程照片，让消费者家装的每个细节都被三只兔APP系统如实同步的记录下来，客户坐在电脑旁就能感受三只兔服务的工匠精神”。
          </div>
          <img class="float-right" src="../../../static/images/business/man.png" alt="">
        </div>
      </div>
    </div>
    <div class="imgsBox">
      <div class="bx">
        <div class="borderBox clearfix">
          <div>
            <img class="mr7" src="../../../static/images/business/imgs_1.png" height="497" width="741" alt="">
            <img src="../../../static/images/business/imgs_2.png" height="246" width="387" alt="">
            <img class="mt7" src="../../../static/images/business/imgs_3.png" height="245" width="387" alt="">
          </div>
          <div style="width:364px" class="mt7 mr7">
            <img src="../../../static/images/business/imgs_4.png" height="236" width="364" alt="">
            <img class="mt5" src="../../../static/images/business/imgs_7.png" height="219" width="364" alt="">
          </div>
          <img  class="mt7 mr7" src="../../../static/images/business/imgs_5.png" height="459" width="353" alt="">
          <div style="width:364px"  class="mt7">
            <img src="../../../static/images/business/imgs_6.png" height="244" width="400" alt="">
            <img class="mt7" src="../../../static/images/business/imgs_8.png" height="208" width="400" alt="">
          </div>
        </div>
      </div>
    </div>
    <div style="width:100%;">
      <div class="container bx">
        <h4><span>商学院动态</span><p>NEWS INFORMATION</p></h4>
        <ul class="news-cont clearfix"  v-if="sztNews.length > 0">
          <li v-for="newItem in sztNews" :key="newItem.id">
            <a :href="'http://sanztu.com/gongjiang/sztwx/html/infodetail.html?id=' + newItem.id" target="_blank">
            <h3>{{ newItem.title }}</h3>
            <p>{{ getDate(newItem.createDate)}}</p>
            <img :src="'http://sanztu.com/' + newItem.pic" class="news-image">
          </a>
         </li>
        </ul>
        <ul class="news-cont clearfix" v-else>
          <li :class="newItem.className" v-for="newItem in news" :key="newItem.className">
            <a :href="newItem.href" target="_blank">
            <h3>{{ newItem.title }}</h3>
            <p>{{ newItem.content }}</p>
            <div class="log">
              <img :src="newItem.img">
              <div>
                <img :src="newItem.icon" alt="" />
                {{ newItem.data }}
              </div>
            </div>
            <div>
              <h5></h5>
            </div>
          </a>
         </li>
       </ul>
      </div>
    </div>
    <div style="width:100%;" class="six">
      <div class="bx">
        <h4><span>六大共享 保您放心</span></h4>
        <ul class="clearfix">
          <li class="" v-for="s in six" :key="s">
            <a>
              <h3>{{ s.title }}</h3>
              <p>{{ s.p1 }}</p>
              <p>{{ s.p2 }}</p>
            </a>
         </li>
       </ul>
      </div>
    </div>
    <div style="width:100%;">
      <div class="container bx">
        <h4><span>关于团队</span><p>ABOUT TEAM</p></h4>
        <img src="../../../static/images/business/mans.png" height="862" width="1200" alt="">
        <img src="../../../static/images/borrow/tel.jpg" height="63" width="520" alt="" style="margin:52px 0 72px">
      </div>
    </div>
    <footer>
      <web-footer></web-footer>
    </footer>
    <!-- <transition name="el-fade-in-linear">
      <insDiv v-if="showIns" @closeIns=" showIns = false "></insDiv>
    </transition> -->
  </div>
</template>

<script>
import webHeader from '@/components/header/head'
import webFooter from '@/components/footer/web-footer'
// import ins from '../../components/home/ins'
import {getNews} from '../../config/country.js'
/*
{
  "id": 169,
  "newsType": 0,
  "type": 1,
  "title": "499元/平米套餐--全屋主材包4号",
  "createDate": 1511579961000,
  "userId": 372,
  "userName": "三只兔",
  "content": "<p><span style=\"margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 1.6; box-sizing: border-box !important; word-wrap: break-word !important;\"><span style=\"margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-family: Helvetica, sans-serif;\">&nbsp; &nbsp; &nbsp; &nbsp; 499</span><span style=\"margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-family: 宋体;\">元/平米套餐</span></span><span style=\"margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); line-height: 1.6; font-family: Helvetica, sans-serif; box-sizing: border-box !important; word-wrap: break-word !important;\">（</span><span style=\"margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); line-height: 1.6; font-family: 宋体; box-sizing: border-box !important; word-wrap: break-word !important;\">九牧厨卫、箭牌卫浴、圣象地板、世友地板、东鹏瓷砖，箭牌瓷砖、</span></p><p><span style=\"margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); line-height: 1.6; font-family: 宋体; box-sizing: border-box !important; word-wrap: break-word !important;\">方太厨电、皮阿诺橱柜、高博前置过滤、三只兔挂件小五金、奥普吊顶，飞雕开关，</span></p><p><span style=\"margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); line-height: 1.6; font-family: 宋体; box-sizing: border-box !important; word-wrap: break-word !important;\">梦天康E木门、豪客家电动晾衣架等</span><span style=\"margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); line-height: 25.6px; font-family: Helvetica, sans-serif; box-sizing: border-box !important; word-wrap: break-word !important;\">）。</span></p><p>&nbsp; &nbsp;三只兔共享装修平台，帮你准备好所有硬装主材，一次购买全部主材，完全省去了选材</p><p>搭配的繁琐前期功课，以及为单个选材而多花费的沉重开支，同时，根据选购主材，提供</p><p>全景VR可视化设计，工匠施工过程采用三只兔独立研发的APP系统，业主可以通过PC/微信端</p><p>查询工程进度。</p><p>&nbsp; &nbsp;三只兔共享装修平台主材包4号（499元套餐）为您量身打造温馨个人世界，只为那个追求</p><p>梦想家园的你。</p><p><img src=\"/upload/image/20171125/1511579862392061731.jpg\" title=\"1511579862392061731.jpg\" alt=\"主页.jpg\"/>&nbsp;</p><p><img src=\"/upload/image/20171125/1511579905392082260.jpg\" title=\"1511579905392082260.jpg\" alt=\"客餐厅+卧室.jpg\"/></p><p>客餐厅/卧室地面瓷砖、木地板不限地面平方；地面瓷砖、木地板自由组合，我的地盘我做主！室内门限2扇。</p><p><img src=\"/upload/image/20171125/1511579922407045558.jpg\" title=\"1511579922407045558.jpg\" alt=\"厨房.jpg\"/></p><p>厨房地面、墙面瓷砖不限平方，厨房铝扣板吊顶不限平方。</p><p><img src=\"/upload/image/20171125/1511579933798052614.jpg\" title=\"1511579933798052614.jpg\" alt=\"卫浴间.jpg\"/></p><p>卫生间地面、墙面瓷砖不限平方，卫生间铝扣板吊顶不限平方，限一个卫生间。</p><p><img src=\"/upload/image/20171125/1511579945079062351.jpg\" title=\"1511579945079062351.jpg\" alt=\"阳台+全屋.jpg\"/></p><p>阳台地面瓷砖不限平方，墙面瓷砖限高90公分，限一个阳台。</p><p>主材包除瓷砖外含配送安装，瓷砖配送至楼下。</p><p><img src=\"/upload/image/20171125/1511579956642023787.png\" title=\"1511579956642023787.png\" alt=\"二维码.png\"/></p><p>扫一扫我，看你家的VR全景图（佛山样板间）</p><p>点击二维码 / 放大后长按二维码 / 识别图中二维码</p><p>不一样的体验就在你的眼前</p><p><br/></p>",
  "url": "",
  "isShow": "0",
  "pic": "upload/20171125111613主页.jpg;"
},
*/
export default {
  data () {
    return {
      showIns: true,
      sztNews: [],
      news: [
        {
          title: '2017年中国互联网+中小企业创新大会优秀中小企业获奖名单',
          content: '在2017(第二届)中国互联网+中小企业创新大会-优秀中小企业奖，积木家互联网装修荣获企业奖',
          img: 'http://p.jimujiazx.com/jimujia/images/news-xb.1b7da9f8.png',
          href: 'http://special.ccidnet.com/170508-1/',
          className: 'right',
          icon: 'http://p.jimujiazx.com/jimujia/images/clock.abd819f3.png',
          data: '2017年7月14'
        },
        {
          title: '【聚焦动能转换 新业态】“互联网装修”与“蒜泥孵化器”的故事',
          content: '之所以选择名为“积木家”的公司来装修，就是看重公司推出的“互联网+装修”的新型装修服务。这样，他在北京上班，只需通过手机就能实时监测西安房子的装修进展情况',
          img: 'http://p.jimujiazx.com/jimujia/images/news-tx.91571ff5.png',
          href: 'http://news.cnwest.com/content/2017-04/05/content_14680287.htm',
          className: '',
          icon: 'http://p.jimujiazx.com/jimujia/images/clock.abd819f3.png',
          data: '2017年6月23'
        },
        {
          title: '【聚焦动能转换 新业态】“互联网装修”与“蒜泥孵化器”的故事',
          content: '之所以选择名为“积木家”的公司来装修，就是看重公司推出的“互联网+装修”的新型装修服务。这样，他在北京上班，只需通过手机就能实时监测西安房子的装修进展情况',
          img: 'http://p.jimujiazx.com/jimujia/images/news-hs.778e29f9.png',
          href: 'http://news.cnwest.com/content/2017-04/05/content_14680287.htm',
          className: 'right top',
          icon: 'http://p.jimujiazx.com/jimujia/images/clock.abd819f3.png',
          data: '2017年6月23'
        },
        {
          title: '【聚焦动能转换 新业态】“互联网装修”与“蒜泥孵化器”的故事',
          content: '之所以选择名为“积木家”的公司来装修，就是看重公司推出的“互联网+装修”的新型装修服务。这样，他在北京上班，只需通过手机就能实时监测西安房子的装修进展情况择名为“积木家”的公司来装修，就是看重公司推出的“互联网+装修”的新型装修服务。这样，他在北京上班，只需通过手机就能实时监测西安房子的装修进展情况',
          img: 'http://p.jimujiazx.com/jimujia/images/news-fh.a5c5f1e9.png',
          href: 'http://news.cnwest.com/content/2017-04/05/content_14680287.htm',
          className: 'top',
          icon: 'http://p.jimujiazx.com/jimujia/images/clock.abd819f3.png',
          data: '2017年6月23'
        }
      ],
      six: [{
        title: '共享理念',
        p1: '文化理念：客户的满意是我们最大的追求',
        p2: '产品理念：提供高品质低价格的精致产品'
      }, {
        title: '共享品牌',
        p1: '互联网建材家居服务平台',
        p2: '互联网共享装修平台'
      }, {
        title: '共享产品',
        p1: '共享设计 共享供应链 共享管理',
        p2: '共享施工标准 共享服务 共享客户'
      }, {
        title: '共享系统',
        p1: 'APP可视化系统 销售转化系统',
        p2: '供应链系统 经营管理系统'
      }, {
        title: '共享团队',
        p1: '公司员工，多为80、90后，年轻有为',
        p2: '公司管理层均为从事多年建材、装修行业'
      }, {
        title: '共享未来',
        p1: '共享合伙人',
        p2: '共享老板'
      }]
    }
  },
  components: {
    webHeader: webHeader,
    webFooter: webFooter
    // insDiv: ins
  },
  methods: {
    getDate: function (timestamp) {
      // 简单的一句代码
      var date = new Date(timestamp) // 获取一个时间对象
      /**
       1. 下面是获取时间日期的方法，需要什么样的格式自己拼接起来就好了
      2. 更多好用的方法可以在这查到 -> http://www.w3school.com.cn/jsref/jsref_obj_date.asp
      */
      /*
      date.getFullYear();  // 获取完整的年份(4位,1970)
      date.getMonth();  // 获取月份(0-11,0代表1月,用的时候记得加上1)
      date.getDate();  // 获取日(1-31)
      date.getTime();  // 获取时间(从1970.1.1开始的毫秒数)
      date.getHours();  // 获取小时数(0-23)
      date.getMinutes();  // 获取分钟数(0-59)
      date.getSeconds();  // 获取秒数(0-59)
      */
      let Y = date.getFullYear() + '年'
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
      let D = date.getDate()
      // let h = date.getHours();
      // let m = date.getMinutes();
      // let s = date.getSeconds();
      return Y + M + '月' + D + '日'
    }
  },
  mounted: function () {
    var that = this
    getNews(function (news) {
      let arr = news.data.result.rows
      if (arr.length > 0) {
        that.sztNews = news.data.result.rows
        // let date = Date()
      }
    })
  }
}
</script>

<style lang="less" scoped>
.aboutUs{
  .usTop{
    padding-top:50px;
    background-color: #fff;
    .usLeft{
      width: 660px;
      padding:28px 0 14px;
      span{
        font-weight: bold;
        display: inline-block;
        border: 3px solid #FF0020;
        color:  #FF0020;
        padding: 17px 75px;
        font-size: 36px;
      }
      p{
        line-height: 55px;
        font-size: 30px;
        color: #787878;
      }
    }
  }
  .usBottom{
    background-color: #F3F3F3;
    height:526px;
    font-size: 0;
    .bx{
      height:526px;
      font-size: 0;
      position: relative;
      padding:30px 0;
      .usLeft{
        font-size: 18px;
        line-height: 40px;
        width: 660px;
        display: inline-block;
        color: #797979;
      }
      img{
        position: absolute;
        right: 0;
        bottom:0;
      }
    }
  }
}
.imgsBox{
  padding-top:50px;
  .bx{
    .borderBox{
      border: 13px solid #F3F3F3;
      padding:16px 17px;
      .mr7{
        margin-right: 7px;
      }
      .mt7{
        margin-top: 7px;
      }
      .mt5{
        margin-top: 5px;
      }
      img{
        float: left;
      }
      div{
        float: left;
      }
    }
  }
}
.container {
  display: block;
  width: 1210px;
  margin: 0 auto;
  h4{
    margin: 48px 0;
    text-align: center;
    span{
      font-weight: bold;
      display: inline-block;
      font-size: 38px;
      color: #FE0002;
      padding:13px 38px;
      border-bottom: 4px solid #FE0002;
    }
    p{
      line-height: 55px;
      font-size: 30px;
      color: #797979;
    }
  }
  ul{
    // margin: 0 0 60px;
    display: block;
    width: 1000px;
    clear: both;
    margin: 0 auto;
    li{
      display:inline-block;
      background: #fff!important;
      display: inline-block;
      float: left;
      width: 418px;
      height: 288px;
      margin-right: 50px;
      margin-top: 20px;
      margin-left: 25px;
      border: 1px solid #e8e8e8;
      position: relative;
      box-shadow: 0 0 0 hsla(0,0%,52%,.15);
      transition: all .5s;
      &:hover{
        box-shadow: 0 10px 20px rgba(0,0,0,.1);
        -webkit-transform: translate(0, -3px);
        transform: translate(0, -3px);
        border-color: #f0f0f0;
      }
      &.right{
        margin-right: 56px;
      }
      &.top{
        margin-top: 30px;
      }
      h3{
        font-size: 18px;
        height: 42px;
        line-height: 42px;
        text-align: justify;
        font-weight: 100;
        color: #333;
        margin: 10px 25px 0;
        overflow:hidden;
      }
      p{
        display: inline-block;
        font-size: 14px;
        width: 468px;
        line-height: 24px;
        color: #999;
        margin: 0 25px;
        overflow:hidden;
        text-overflow:ellipsis;
        text-align: left;
        display: -webkit-box;
       -webkit-line-clamp:3 ;
       -webkit-box-orient:vertical;
       margin-bottom: 10px;
      }
      .news-image {
        width: 320px;
        height: 183px;
        position: relative;
        margin: auto;
        top: 0;
        bottom: 20px;
        display: block;
      }
      .log{
        border-top: 1px solid #f0f0f0;
        width: 100%;
        height: 68px;
        position: relative;
        img{
          position: absolute;
          margin: auto;
          top: 0;
          bottom: 0;
          left: 25px;
          display: block;
        }
        div{
          height: 18px;
          line-height: 18px;
          display: block;
          position: absolute;
          margin: auto;
          color: #999;
          top: 0;
          bottom: 0;
          right: 25px;
          img{
            position: static;
            display: inline-block;
          }
        }
      }
    }
  }
}
.six{
  h4{
    margin: 48px 0;
    text-align: center;
    span{
      font-weight: bold;
      display: inline-block;
      font-size: 38px;
      color: #FE0002;
      padding:13px 38px;
    }
  }
  ul{
    li{
      float: left;
      width: 380px;
      background-color: #F3F3F3;
      padding:35px 0;
      margin-right: 20px;
      margin-top: 20px;
      &:nth-child(3n){
        margin-right: 0;
      }
      h3{
        font-size: 18px;
        line-height: 35px;
        color: #FE0002;
      }
      p{
        line-height: 36px;
        font-size: 14px;
        color: #777777;
      }
    }
  }
}
</style>
