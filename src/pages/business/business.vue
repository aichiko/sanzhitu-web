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
          <div class="usLeft float-left">
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
            这里是很多的文字哦
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
        <ul class="news-cont clearfix">
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
          <li class="" v-for="s in six">
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
  </div>
</template>

<script>
import webHeader from '@/components/header/head'
import webFooter from '@/components/footer/web-footer'
export default {
  data () {
    return {
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
        p2: '供应链系统&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp经营管理系统'
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
    margin: 0 0 60px;
    clear: both;
    width: 825pt;
    li{
      background: #fff!important;
      display: inline-block;
      float: left;
      width: 518px;
      height: 218px;
      margin: 0;
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
        margin: 23px 25px 0;
        overflow:hidden;
      }
      p{
        display: inline-block;
        font-size: 14px;
        width: 468px;
        line-height: 24px;
        color: #999;
        height: 75px;
        margin: 0 25px;
        overflow:hidden;
        text-overflow:ellipsis;
        text-align: left;
        display: -webkit-box;
       -webkit-line-clamp:3 ;
       -webkit-box-orient:vertical;
       margin-bottom: 10px;
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
