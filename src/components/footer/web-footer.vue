<template>
  <div id="footer" class="wrapper">
    <p>
      <span v-for="(bar, index) in footerData.bartitles" :key="bar.title">
        <a :href="bar.href">{{bar.title}}</a>
        &nbsp;<span v-if="index != footerData.bartitles.length-1">|</span>&nbsp;
      </span>
    </p>
    <p style="padding: 0">
      {{footerData.name}}&nbsp;&nbsp;&nbsp;地址：{{footerData.address}}
      <br/>
      <span>电话：{{footerData.phoneNum}}&nbsp;</span>
      <a href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备16000141号-1</a>
    </p>
    <p style="padding:5px 0;" class="lastfooter">
			<a target="_blank" href="http://www.beian.gov.cn/portal/index" style="display:inline-block;height:20px;line-height:20px;">
				<img src="../../assets/szt_icon_guohui.png" style="vertical-align: top;">
				<span style="margin: 0px 0px 0px -2px; padding: 0; color:#939393;">粤公网安备 44200002005004号</span>
			</a>
		</p>
  </div>
</template>

<script>
// 网站默认 footer
export default {
  data () {
    return {
      footerData: {
        name: '深圳市乐装家信息科技有限公司',
        address: '深圳市宝安区新安街道留仙二路汇聚创新园四楼',
        phoneNum: '400-833-1153',
        bartitles: [{title: '首页', href: 'home'}, {title: '联系我们', href: '#'}, {title: '关于我们', href: '#'}, {title: '装修攻略', href: '#'}, {title: '申请加盟', href: '#'}, {title: '商家登陆', href: '#'}]
      }
    }
  }
}
</script>

<style lang="less" scoped>
#footer {
  font-size: 12px !important;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 10px;
  overflow: hidden;
  width: 100%;
  p {
    color: #666;
    word-spacing: 5px;
    padding: 10px 0;
    a {
      color: #666;
      text-decoration: none;
      &:link, &:visited, &:active {
        text-decoration: none;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
.lastfooter {
  a{
    display: inline-block;
    height: 20px;
    line-height: 20px;
    img {
      border: medium none;
      vertical-align: middle;
    }
  }
}
</style>

