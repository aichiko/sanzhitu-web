<template>
<div class="alw-footer">
  <div class="alw-wrapper">
    <div class="alw-links">
        <dl>
          <dt>{{footerDl[0].title}}</dt>
          <dd class="link" v-for="(t, i) in footerDl[0].contents">
            <a href="" target="_blank" data-tab="5">{{t}}</a>
          </dd>
        </dl>
        <dl>
          <dt>{{footerDl[1].title}}</dt>
          <dd class="link" v-for="(t, i) in footerDl[1].contents">
            <a href="" target="_blank" data-tab="5">{{t}}</a>
          </dd>
        </dl>
        <dl>
          <dt>联系我们</dt>
          <dd>
            <p>地址：广东省中山市东区富湾东路伊电园I栋</p>
            <p>电话：0760-87989999</p>
          </dd>
        </dl>
        <div class="alw-QRcode">
          <div class="alw-pic">
            <p>下载app</p>
            <img src="http://www.anlewo.com/templates/default/images/new-home/alw_footer_app.png" alt="下载app" />
          </div>
          <div class="alw-pic">
            <p>关于我们</p>
            <img src="http://www.anlewo.com/templates/default/images/new-home/alw_footer_weixin.png" alt="关于我们" />
          </div>
        </div>
    </div>
    <div class="alw-copyright">
      <span class="fl">Copyright @2016 广东安乐窝网络科技有限公司 版权所有
        <a href="" target="_blan  k">粤ICP备13031430号</a>
        <a href="" target="_blank">粤工商备P201709000844</a>
      </span>
      <a class="icon-guohui fr" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44200002005004" target="_blank">粤公网安备 44200002005004号</a>
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

<style>
.alw-footer {
    background: url(../../images/new-home/alw_footer_bg.png) no-repeat center top;
    background-size: cover;
    background-repeat: repeat-x\9;
    height: 290px;
}
.alw-wrapper {
    width: 1180px;
    margin: 0 auto;
}
.alw-links {
    padding-top: 85px;
    height: 163px;
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
    margin-left: 50px;
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
    color: #ccc;
}
.alw-copyright span a {
    margin-left: 30px;
}
.alw-copyright a {
    color: #ccc;
}
.alw-copyright a.icon-guohui {
    padding-left: 25px;
    background: url(../../images/new-home/alw_icon_guohui.png) no-repeat left 10px;
}
</style>
