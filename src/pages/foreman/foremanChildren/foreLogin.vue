<template>
<div class="login">
    <div class="login_img">
        <img src="http://www.sanztu.com:80/gongjiang/images/工匠pic.png">
    </div>
    <form id="loginForm" action="http://www.sanztu.com:80/portal/login" method="post">
    <div class="login_content">
        <!--<div class="login_way">-->
            <!--<div class="login_way_content">验证登录</div>-->
            <!--<div class="login_way_content">账号登录</div>-->
        <!--</div>-->
        
        <div class="login_title">工匠登录</div>
        
          <input class="login_input hastips" type="text" name="mobileNo" id="mobileNo" placeholder="账户名/手机号" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
          <span id="mobileNo_warn" class="action_validate" style="display: none;">
        			<span class="action_validate_top" style="font-color:red;font-size:10px;">请输入您的手机号码</span>
        			<span class="action_validate_bot"></span>
        	</span> 
          <input class="login_input hastips" type="password" name="pwd" id="pwd" placeholder="密码" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
          <span class="action_validate" style="display: none;">
        			<span class="action_validate_top" style="font-color:red;font-size:10px;">请输入您的密码</span>
        			<span class="action_validate_bot"></span>
        	</span> 
        	<input type="hidden" name="user_type" id="user_type" value="1">
          <div class="login_button" onclick="login();">登录</div>
          <span class="login_register"><!--<a href="http://www.sanztu.com:80/download/download_gj_app">app下载</a>--> &nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.sanztu.com:80/portal_regist/craftsman">免费注册</a></span>
        <!--<div class="login_other"></div>-->
    
    </div>
   </form>
</div>
</template>

<script type="ecmascript-6">
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped rel="stylesheet">
.login {
  height: 330px;
  margin: 120px 0 120px 195px;
  .login_img {
    float: left;
    width: 445px;
    height: 100%;
    overflow: hidden;
    img {
	    width: 100%;
		}
	}
	form {
    margin-bottom: 60px;
    margin-top: 30px;
    float: left;
    .login_content {
	    width: 330px;
	    height: 240px;
	    padding: 0 20px;
	    border: 1px solid white;
	    /* background: white; */
	    margin-left: 50px;
	    margin-top: 50px;
	    .login_title {
		    width: 100%;
		    height: 50px;
		    border-bottom: 1px solid #ebebeb;
		    line-height: 60px;
		    font-size: 20px;
		    text-align: left;
		    color: #0095e6;
			}
			.login_input {
		    width: 286px;
		    height: 32px;
		    padding: 5px 5px;
		    border: 2px solid #ebebeb;
		    margin-top: 15px;
			}
			input {
		    border-radius: 2px;
		    -moz-border-radius: 2px;
		    -webkit-border-radius: 2px;
		    padding: 2px;
		    color: #666;
		    background-color: white;
			}
			.login_button {
		    width: 290px;
		    height: 25px;
		    margin-top: 30px;
		    background-color: #ffaf31;
		    color: #fff;
		    line-height: 25px;
		    text-align: center;
			}
			.login_register {
		    float: right;
		    margin-top: 10px;
		    font-size: 12px;
		    a {
				  color: gray;
				}
			}
		}
	}
}
</style>