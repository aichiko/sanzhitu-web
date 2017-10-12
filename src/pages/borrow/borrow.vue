<template>
  <div class="anjudai-content">
		<header>
      <web-header></web-header>
    </header>
		<div class="anjudai-banner"></div>
		<div class="anjudai-body">
			<div class="anjudai-address">
				<select class="anjudai-province" id="anjudaiProvince">
					<option value="" selected="selected">省/市</option>
										<option value="19">广东</option>
								</select>
				<select class="anjudai-city" id="anjudaiCity">
					<option value="" selected="selected">市/地区</option>
				</select>
			</div>
			<div class="anjudai-info">
				<img src="http://www.anlewo.com/templates/default/images/anjudai/img2.png?20161221">
				<h3 class="anjudai-title">三大银行五大亮点</h3>
				<ul class="anjudai-shuoming">
					<li>
						<h5>高额度</h5>
						<p>最高达50万</p>
					</li>
					<li>
						<h5>速度快</h5>
						<p>7天回复，<br>15天放款</p>
					</li>
					<li>
						<h5>范围广</h5>
						<p>含装修款，家具、<br>家电、家纺等</p>
					</li>
					<li>
						<h5>利率低</h5>
						<p>利息低至0元</p>
					</li>
					<li>
						<h5>VIP服务</h5>
						<p>专人服务，为您<br>省时、省心、省力</p>
					</li>
				</ul>

				<ul class="anjudai-buzhou">
					<li class="box1">
						<h6>申请条件：</h6>
						<p>1、贷款金额4~50万；</p>
						<p>2、具有良好的信用记录和还款意愿，在我行及其他金融机构贷款无不良记录；</p>
						<p>3、有稳定合法收入来源和按时足额偿还贷款本息的能力；</p>
						<p>4、申请人为中山本地上班人员，其房屋为中山房产。</p>
					</li><!--

			--><li class="box2">
						<h6>申请资料：</h6>
						<p>1、装修房产证明复印件（以下三选一）：房产证、买卖合同、备案登记证；</p>
						<p>2、夫妻双方身份证、结婚证、户口本复印件；</p>
						<p>3、单位收入证明；</p>
						<p>4、银行账户近六个月明细（代发工资流水）；</p>
						<p>5、其他财力证明：缴税证明，个人名下所有房产证明，社保证明，缴公积金证明等；</p>
						<p>6、签订的装修保合同以及主材包等合同（我司提供）。</p>
					</li><!--

			--><li class="box3">
						<h6>手续费率表（单位%）：</h6>
						<table>
							<tbody><tr>
								<th style="width: 80px;height: 33px;">期  数</th>
								<th style="width: 24px;">6期</th>
								<th style="width: 32px;">12期</th>
								<th style="width: 42px;">24期</th>
								<th style="width: 43px;">36期</th>
							</tr>
							<tr>
								<td>工行正常家装分期手续费率</td>
								<td>2%</td>
								<td>4%</td>
								<td>7.98%</td>
								<td>11.3%</td>
							</tr>
							<tr style="background-color: #f8c300;">
								<td>安乐窝客户<br>总手续费率</td>
								<td>0</td>
								<td>3%</td>
								<td>6.89%</td>
								<td>10.3%</td>
							</tr>
						</tbody></table>
						<p>注: 客户承担的手续费按月份收取，本贷款仅限在安乐窝消费才有此利率，不可在外消费。</p>
					</li><!--

			--><li class="box4">
						<h6>以贷款金额10万为例（单）</h6>
						<table>
							<tbody><tr>
								<th style="width: 50px;height: 33px;">期  数</th>
								<th style="width: 60px;">每月<br>还本金</th>
								<th style="width: 60px;">每月<br>还手续费</th>
								<th style="width: 50px;">合  计</th>
							</tr>
							<tr>
								<td>6</td>
								<td>16667</td>
								<td>0</td>
								<td>16667</td>
							</tr>
							<tr>
								<td>12</td>
								<td>8333</td>
								<td>250</td>
								<td>8583</td>
							</tr>
							<tr>
								<td>24</td>
								<td>4167</td>
								<td>287</td>
								<td>4454</td>
							</tr>
							<tr>
								<td>36</td>
								<td>2778</td>
								<td>286</td>
								<td>3064</td>
							</tr>
						</tbody></table>
					</li>
				</ul>
			</div>

			<div class="anjudai-button" @click="applyShow = true">
				<a class="anjudai-submit" href="javascript: void(0);"></a>
			</div>

		<!-- 马上申请start -->
			<div v-show="applyShow" class="apply-form">
				<div class="apply-bg"></div>
				<div class="apply-box">
					<div class="apply-header">
						马上申请
						<i class="close-icon" @click="applyShow = false"></i>
					</div>

					<div class="apply-line">
						<img src="http://www.anlewo.com/templates/default/images/anjudai/up-icon.jpg" class="up-icon">
					</div>

					<div class="apply-body">
						<ul>
							<li class="clearfix">
								<i class="apply-icon time-icon"></i>
								<input type="datetime" name="apply_time" id="apply_time" value="" style="color: rgb(204, 204, 204);">
							</li>
							<li class="clearfix">
								<i class="apply-icon houses-icon"></i>
								<input type="text" name="apply_houses" id="apply_houses" value="" style="color: rgb(204, 204, 204);">
							</li>
							<li class="clearfix">
								<i class="apply-icon name-icon"></i>
								<input type="text" name="apply_name" id="apply_name" value="" style="color: rgb(204, 204, 204);">
							</li>
							<li class="clearfix">
								<i class="apply-icon phone-icon"></i>
								<input type="tel" name="apply_phone" id="apply_phone" value="" style="color: rgb(204, 204, 204);">
							</li>
						</ul>
						<button type="button" class="apply-btn">确定</button>
					</div>
				</div>
			</div>
		<!-- 马上申请end -->
		</div> <!--anjudai-body-->
		<footer>
			<web-footer></web-footer>
		</footer>
	</div>
</template>

<script>
import webFooter from '@/components/footer/web-footer'
import head from '@/components/header/head'
export default {
  data () {
    return {
      applyShow: false
    }
  },
  components: {
    webHeader: head,
    webFooter: webFooter
  }
}
</script>
<style lang="less">
.anjudai-content {
	min-width: 1200px;
	font-family: "microsoft yahei";
	.anjudai-banner {
		width: 100%;
		min-width: 1200px;
		height: 505px;
		background: url('../../assets/borrow/img1.png') top center #3a81b7 no-repeat;
	}
	.anjudai-body {
		width: 100%;
		min-width: 1200px;
		height: 975px;
		background-color: #eaeaea;
		text-align: center;
		.anjudai-address {
			padding-top: 60px;
			.anjudai-province, .anjudai-city {
				width: 230px;
				height: 35px;
				line-height: 35px;
				text-indent: 20px;
				border: 0 none;
				background-color: #fff;
				margin-right: 10px;
				font-family: "microsoft yahei";
				font-size: 16px;
			}
		}
		.anjudai-info {
			padding-top: 50px;
			.anjudai-title {
			    margin: 55px 0 50px 0;
			    line-height: 52px;
			    font-size: 45px;
			    background: url('../../assets/borrow/img3.png') center center no-repeat;
			    font-weight: bold;
			    text-align: center;
			    color: #3a81b7;
			}
			.anjudai-shuoming {
			    margin-bottom: 50px;
			    li{
			    	overflow: hidden;
				    display: inline-block;
				    margin: 0 9px;
				    width: 185px;
				    height: 164px;
				    background: url(../../assets/borrow/img4.png) center center no-repeat;
				    h5{
				    	margin: 33px 0 20px 0;
					    font-size: 25px;
					    font-weight: bold;
					    color: #af251c;
					    text-align: center;
				    }
				    p{
				    	padding: 0 10px;
					    font-size: 16px;
					    line-height: 1.8;
					    font-weight: bold;
					    color: #555;
				    }
			    }
			}
			.anjudai-buzhou{
				li{
					display: inline-block;
				    padding: 0 24px;
				    height: 271px;
				    border-right: 1px dashed #666;
				    overflow: hidden;
				    &.box1 {
					    width: 205px;
					    background: url('../../assets/borrow/title1.png') top center no-repeat;
					}
					&.box2 {
					    width: 299px;
					   	background: url('../../assets/borrow/title2.png') top center no-repeat;
					}
					&.box3 {
					    width: 271px;
					    background: url('../../assets/borrow/title3.png') top center no-repeat;
					}
					&.box4 {
					    border-right: none;
					    width: 270px;
					    background: url('../../assets/borrow/title4.png') top center no-repeat;
					}
					&.box3,&.box4{
						table{
							border: 1px solid #ddd;
						    text-align: center;
						    line-height: 1.4;
						    padding: 7px 0;
						    color: #333;
						    margin-bottom: 5px;
						    background-color: #fff;
						    border-collapse: collapse;
						    th,td{
						    	border: 1px solid #ddd;
							    text-align: center;
							    line-height: 1.4;
							    padding: 7px 0;
							    color: #333;
							    font-size:12px;
							    font-weight:500;
						    }
						}
					}
					h6{
						padding: 24px 0;
					    text-align: left;
					    line-height: 1;
					    font-weight: bold;
					    text-indent: 35px;
					    font-size: 14px;
					    color: #fff;
					}
					p{
						margin-left: 20px;
					    font-size: 12px;
					    text-align: left;
					    text-indent: -20px;
					    text-align: Justify;
					    text-justify: inter-ideograph;
					    color: #333;
					}
				}
			}
		}
		.anjudai-button {
			padding-top: 30px;
			.anjudai-submit{
				display: inline-block;
			    width: 220px;
			    height: 51px;
			    width: 220px;
			    height: 51px;
			    background: url(../../assets/borrow/button.png?20161221) top center no-repeat;
			}
		}
		.apply-form {
		    position: fixed;
		    top: 0;
		    right: 0;
		    bottom: 0;
		    left: 0;
		    z-index: 9999;
		    .apply-bg {
			    position: absolute;
			    top: 0;
			    right: 0;
			    bottom: 0;
			    left: 0;
			    background-color: #000;
			    filter: alpha(opacity=30);
			    -moz-opacity: 0.3;
			    -webkit-opacity: 0.3;
			    opacity: 0.3;
			}
			.apply-box {
			    position: absolute;
			    top: 15%;
			    left: 50%;
			    width: 470px;
			    height: 510px;
			    margin-left: -235px;
			    background-color: #444;
			    border-radius: 10px;
			    .apply-header {
				    text-align: center;
				    font-size: 30px;
				    color: #fff;
				    padding: 20px 10px 20px 10px;
				    height: 70px;
				    .close-icon {
					    position: absolute;
					    top: 23px;
					    right: 30px;
					    width: 18px;
					    height: 18px;
					    background: url(../../assets/borrow/close-icon.png) no-repeat;
					    cursor: pointer;
					}
				}
				.apply-line {
				    position: relative;
				    width: 100%;
				    height: 7px;
				    background: url(../../assets/borrow/line.jpg) top center repeat-x;
				    margin-top: 10px;
				    .up-icon {
					    position: absolute;
					    left: 50%;
					    top: -13px;
					    width: 31px;
					    height: 20px;
					    margin-left: -15.5px;
					}
				}
				.apply-body {
				    padding: 30px 35px;
				    ul{
				    	li{
				    		width: 400px;
						    height: 62px;
						    margin: 0 auto;
						    background-color: #d4d4d4;
						    border: 1px solid #e4e4e4;
						    border-radius: 2px;
						    margin-bottom: 10px;
						    i{
						    	display: inline-block;
							    float: left;
							    width: 34px;
							    height: 34px;
							    background: url(../../assets/borrow/icon.png) no-repeat;
							    background-position: 0 0;
							    margin-top: 15px;
							    margin-left: 15px;
							    &.houses-icon {
								    background-position: 0 -68px;
								}
								&.name-icon {
								    background-position: 0 -148px;
								}
								&.phone-icon {
								    background-position: 0 -218px;
								}
						    }
						    input{
						    	display: inline-block;
							    float: right;
							    width: 298px;
							    height: 60px;
							    line-height: 60px;
							    background-color: #fff;
							    color: #333;
							    font-family: "microsoft yahei";
							    font-size: 18px;
							    border: 0 none;
							    padding: 0 20px;
						    }
				    	}
				    }
				    .apply-btn {
						width: 400px;
						height: 65px;
						line-height: 65px;
						background-color: #fe0000;
						color: #fff;
						font-family: "microsoft yahei";
						font-size: 30px;
						text-align: center;
						border: 0 none;
						border-radius: 10px;
						cursor: pointer;
					}
				}
			}
		}
	}
}
</style>
