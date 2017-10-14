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
						<li><a href="http://www.sanztu.com:80/porders/list/my">我的订单</a></li>
					<li>
						<a href="http://www.sanztu.com:80/grzx_personal_info">我的资料</a>
					</li>
					<li><a href="http://www.sanztu.com:80/grzx_update_pwd">密码修改</a></li> 
					<li><a href="http://www.sanztu.com:80/portal/logout">退出</a></li>
				</ul>
			</div>
			<div class="userRt">
			   <h2 class="asx graborder">我的资料</h2>
			   <div class="infoms">
			  	<div class="inox1">
			      <form id="fm" action="http://www.sanztu.com:80/puser/updateByAccountManage" method="post">
			      	  <input type="hidden" id="id" name="id" value="17256">
			      	  <input type="hidden" name="headPic" id="headPic">
			          <p><lable>姓名: </lable>4</p>
			          <p><lable>联系电话: </lable>15236965325</p>
			          <p><lable>地址: </lable></p>
			       </form>
			      </div>
			   </div>
			</div>
		</div>
	</div>
	<div  v-if="!$route.meta.isChildren">
		<span>jdafkjkafjkaf</span>
		<router-link :to="{ path: 'foreman/foreLogin' }" tag="a" active-class="active">foreLogin</router-link>
		<router-link :to="{ path: 'foreman/foreRegister' }" tag="a" active-class="active">foreRegister</router-link>
	</div>
	<router-view></router-view>
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
<style lang="less">
.index_center {
  background: #efefef;
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
	    .graborder {
		    border-bottom: 1px solid #dedede;
		    font-size: 22px;
		    color: #0081c9;
		    padding-left: 35px;
		    line-height: 60px;
			}
			.inox1 {
		    margin: 20px 0px 0px 50px;
		    form {
			    margin-bottom: 60px;
			    margin-top: 30px;
			    input {
				    border-radius: 2px;
				    -moz-border-radius: 2px;
				    -webkit-border-radius: 2px;
				    padding: 2px;
				    color: #666;
					}
					p{
						padding: 8px 0px;
						text-align:left;
						lable {
					    display: inline-block;
					    width: 110px;
					    font-size: 14px;
						}
					}
				}
			}
		}
	}
}
</style>
