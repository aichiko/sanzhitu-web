<template>
<div>
  <header>
    <web-header></web-header>
  </header>
	<div class="index_center" v-if="!$route.meta.isChildren">
	  <div class="urser clearfix">
			<div class="urserLf">
				<h2 class="asx">
					<a href="http://www.sanztu.com:80/grzx" style="">个人中心</a>
				</h2>
				<ul id="left" class="perleftmenu">
					<li><router-link to="foremanOrder" tag="a">我的订单</router-link></li>
					<li>
						<router-link to="foremanDetail" tag="a">我的资料</router-link>
					</li>
					<li><a href="http://www.sanztu.com:80/portal/logout">退出</a></li>
				</ul>
			</div>
			<div class="userRt">
			  <router-view></router-view>
			</div>
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
    }
  },
  components: {
    webHeader: webHeader,
    webFooter: webFooter
  }
}
</script>
<style lang="less" scoped>
.index_center {
  background: #fff;
  width: 990px;
  margin: 0 auto;
  .urser{
    border: 1px solid #dedede;
    background: #fff;
    margin-top: 15px;
    .urserLf {
	    float: left;
	    border-right: 1px solid #dedede;
	    width: 185px;
	    height: 690px;
	    min-height: 690px;
	    .asx {
		    font-size: 22px;
		    color: #0081c9;
		    padding-left: 35px;
		    line-height: 60px;
		    text-align: left;
			}
			ul{
				li{
				  font-size: 14px;
				  line-height: 35px;
				  text-align: left;
				  a{
				  	color: #333333;
    				padding-left: 35px;
				  }
				}
			}
		}
		.userRt {
	    float: left;
	    width: 792px;
	    min-height: 850px;
		}
	}
}
</style>
