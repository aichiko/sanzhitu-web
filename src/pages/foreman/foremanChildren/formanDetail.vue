<template>
	<div class="box">
		<h2 class="asx graborder">我的资料</h2>
		<div class="infoms">
			<div class="inox1">
				<form id="fm" action="http://www.sanztu.com:80/puser/updateByAccountManage" method="post">
				  <input type="hidden" id="id" name="id" value="17256">
				  <input type="hidden" name="headPic" id="headPic">
				  <p><span>姓名:</span> 4</p>
				  <p><span>联系电话:</span>15236965325</p>
				  <p><span>地址:</span> </p>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
  }
</script>

<style lang="less" scoped>
.box {
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
				span {
			    display: inline-block;
			    width: 110px;
			    font-size: 14px;
				}
			}
		}
	}
}
</style>