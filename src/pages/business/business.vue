<template>
  <div>
    <header>
      <web-header></web-header>
    </header>
    <div style="width:100%;">
      <div class="container bx">
        <h4>媒体报道</h4>
        <ul class="news-cont clearfix">
          <li :class="newItem.className" v-for="newItem in news">
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
      ]
    }
  },
  components: {
    webHeader: webHeader,
    webFooter: webFooter
  }
}
</script>

<style lang="less">
.container {
  display: block;
  width: 1210px;
  margin: 0 auto;
  h4{
    margin: 60px 0 50px;
    font-size: 34px;
    color: #333;
    text-align: center;
    font-weight: 400;
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
</style>
