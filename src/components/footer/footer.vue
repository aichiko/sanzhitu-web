<template>
<div class="alw-footer">
  <div class="alw-wrapper">
    <div class="alw-links">
      <dl>
        <dt>{{footerDl[0].title}}</dt>
        <dd class="link" v-for="(t, i) in footerDl[0].contents" :key="t">
          <a href="" target="_blank" data-tab="5">{{t}}</a>
        </dd>
      </dl>
      <dl>
        <dt>{{footerDl[1].title}}</dt>
        <dd class="link">
          <a href="" target="_blank" data-tab="5"  v-for="(t, i) in footerDl[1].contents" :key="t">{{t}}</a>
        </dd>
      </dl>
      <dl class="address-text-dl">
        <dd>
          <p>三只兔深圳研发中心</p>
          <p>地址：深圳市宝安区新安街道留仙二路汇聚创新园四楼</p>
        </dd>
        <dd>
          <p>三只兔佛山供应链中心</p>
          <p>地址：广东省佛山市顺德区乐从镇星光国际A2202</p>
        </dd>
        <dd>
          <p>三只兔武汉服务中心</p>
          <p>地址：湖北省武汉市东西湖区金银湖路金盛国际家居二楼</p>
        </dd>
      </dl>
      <div class="alw-QRcode">
        <div class="alw-pic">
          <p>下载app</p>
          <img src="../../assets/app.jpeg" alt="下载app"  style="width: 80px; height: 80px"/>
        </div>
        <div class="alw-pic">
          <p>关于我们</p>
          <img src="../../assets/weixin.jpeg" alt="关于我们" style="width: 80px; height: 80px"/>
        </div>
      </div>
    </div>
    <div class="alw-copyright">
      <span class="float-left">Copyright @2017 深圳市乐装家信息科技有限公司
        <a href="http://www.miitbeian.gov.cn/" target="_blan  k">粤ICP备16000141号-1</a>
        <a href="http://www.beian.gov.cn/portal/index" target="_blank">粤工商备P201709000844</a>
      </span>
      <a class="icon-guohui float-right" href="http://www.beian.gov.cn/portal/index" target="_blank">粤公网安备 44200002005004号</a>
    </div>
  </div>
</div>

</template>

<script>
export default {
  data () {
    return {
      footerDl: [
        {
          title: '关于我们',
          contents: ['公司简介'],
          href: []
        },
        {
          title: 'O2O体验馆',
          contents: [
            '华南地区',
            '华东地区',
            '华中地区',
            '西南地区',
            '华北地区',
            '西北地区'
          ],
          href: []
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.alw-footer {
    background: url(../../assets/szt_footer_bg.png) no-repeat center top;
    background-size: cover;
    // background-repeat: repeat-x\9;
    height: 290px;
    width: 100%;
}
.alw-wrapper {
    width: 100%;
    margin: 0 auto;
}
.alw-links {
    padding-top: 60px;
    height: 248px;
}
.alw-links dl {
    float: left;
    margin-right: 60px;
}
.alw-links dt {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 1;
    color: #fff;
}
.alw-links dd {
    color: #ccc;
}
.alw-links dd.link {
    width: 215px;
}
.alw-links dd a {
    display: inline-block;
    margin-right: 18px;
    font-size: 12px;
    color: #ccc;
    text-decoration: underline;
}
.alw-links dd a:hover {
    color: #FFE100;
}
.alw-links .alw-QRcode {
    float: right;
    text-align: center;
}
.alw-links .alw-QRcode .alw-pic {
    float: right;
    margin-left: 30px;
    margin-right: 20px;
}
.alw-links .alw-QRcode .alw-pic p {
    font-size: 14px;
    line-height: 1;
    margin-bottom: 16px;
    color: #FFFFFF;
}
 img {
    border: medium none;
    vertical-align: middle;
}
.alw-copyright {
    line-height: 40px;
    border-top: 1px solid rgba(255, 255, 255, .2);
    color: #ccc !important;
}
.alw-copyright span{
  color: #ccc !important;
}
.alw-copyright span a {
    margin-left: 30px;
}
.alw-copyright a {
    color: #ccc;
}
.alw-copyright a.icon-guohui {
    padding-left: 25px;
    background: url(../../assets/szt_icon_guohui.png) no-repeat left 10px;
}

.address-text-dl {
  dd {
    text-align: left;
    padding-bottom: 10px;
  }
}
</style>
