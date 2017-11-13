<template>
<div>
  <web-header></web-header>
  <img src="../../../static/images/borrow/borrow.jpg" height="auto" width="100%" alt="">
  <div class="b_icons">
    <ul class="bx clearfix">
      <li v-for="(i, index) in b_icons">
        <img :src="'/sztwz/static/images/borrow/b_icon0'+(index+1)+'.jpg'" alt="">
        <p>{{i.sup}}</p>
        <p>{{i.sub}}</p>
      </li>
    </ul>
  </div>
  <dec-title :title='{title: "贷款流程",sup:"五步搞定，最快当天拿钱"}'></dec-title>
  <div class="path">
    <div class="bx">
      <ul class="clearfix">
        <li v-for="(p, i) in path" class="clearfix">
          <div class="circle">
            <p><i class="icon iconfont" :class="p.icon"></i></p>
            <p>{{p.text}}</p>
            <p><span class="border"></span></p>
          </div>
          <div class="toR" v-if="i != 4">
            <img src="../../../static/images/borrow/toR.jpg" width="35" alt="">
          </div>
        </li>
      </ul>
      <img src="../../../static/images/borrow/tel.jpg" height="63" width="520" alt="" style="margin:52px 0 72px">
    </div>
  </div>
  <borrow-appointment></borrow-appointment>
  <web-footer></web-footer>
  <transition name="el-fade-in-linear">
		<insDiv v-if="showIns" @closeIns=" showIns = false "></insDiv>
	</transition>
</div>
</template>
<script>
require('../../style/font/iconfont.css')
import webFooter from '@/components/footer/web-footer'
import head from '@/components/header/head'
import decTitle from '@/components/decoration/decTitle'
import {country} from '../../config/country.js'
import borrowAppointment from '@/pages/borrow/borrow_appointment'
import ins from '../../components/home/ins'
export default {
  data () {
    return {
      showIns: true,
      countryData: country,
      provinceIndex: 0,
      cityIndex: 0,
      provinceValue: '10',
      cityValue: '11',
      b_icons: [
        {
          icon: '/sztwz/static/images/borrow/b_icon01.jpg',
          sup: '额度高',
          sub: '最高100万'
        }, {
          icon: '/sztwz/static/images/borrow/b_icon02.jpg',
          sup: '放款快',
          sub: '快至24小时到账'
        }, {
          icon: '/sztwz/static/images/borrow/b_icon03.jpg',
          sup: '利率低',
          sub: '月利低至1.35%'
        }, {
          icon: '/sztwz/static/images/borrow/b_icon04.jpg',
          sup: '保障高',
          sub: '专业金融服务人员'
        }, {
          icon: '/sztwz/static/images/borrow/b_icon05.jpg',
          sup: '量身定制',
          sub: '为您提供VIP服务'
        }
      ],
      path: [
        {
          icon: 'icon-tijiaoshenqing',
          text: '提交申请'
        }, {
          icon: 'icon-renyuan',
          text: '提交材料'
        }, {
          icon: 'icon-woshou',
          text: '签订合同'
        }, {
          icon: 'icon-swipe-card-empty',
          text: '发放贷款'
        }, {
          icon: 'icon-yinhangqia',
          text: '轻松还贷'
        }]
    }
  },
  components: {
    webHeader: head,
    webFooter: webFooter,
    decTitle,
    insDiv: ins,
    borrowAppointment
  },
  watch: {
    provinceValue: function (newValue) {
      var values = this.provinces.map(function (item) {
        return item.value
      })
      var index = values.indexOf(newValue)
      this.provinceIndex = index
      console.log('provinceIndex === ', index)
      // 需要对cityValue进行赋值 很重要！
      this.cityValue = this.citys[0].value
    },
    cityValue: function (newValue) {
      var values = this.citys.map(function (item) {
        return item.value
      })
      var index = values.indexOf(newValue)
      this.cityIndex = index
      console.log('cityIndex === ', index)
    }
  },
  computed: {
    provinces: function () {
      return this.countryData.provinces
    },
    citys: function () {
      return this.provinces[this.provinceIndex].citys
    },
    shops: function () {
      return this.citys[this.cityIndex].shops
    }
  }
}
</script>

<style lang="less" scoped>
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
.wrapper{
  width: 100%;
}
.b_icons{
  width: 100%;
  ul{
    padding-top: 35px;
    li{
      float: left;
      overflow: hidden;
      width: 20%;
      img{
        float: left;
        margin-right: 10px;
      }
      p{
        text-align: left;
        padding-top:5px;
        &:nth-child(2){
          font-size: 20px;
          line-height: 30px;
          color: #FE817F;
        }
        &:last-child{
          font-size: 14px;
          line-height: 22px;
          color: #000;
        }
      }
    }
  }
}
.path{
  ul{
    li{
      float: left;
      div{
        height:204px;
        float: left;
        &.circle{
          border: 2px solid #FF9494;
          border-radius: 50%;
          width: 204px;
          padding:40px 0 30px;
          text-align: center;
          p{
            color: #FF9494;
            i{
              font-size: 55px;
            }
            &:nth-child(2){
              line-height: 60px;
              font-size: 20px;
            }
            .border{
              display: inline-block;
              width: 35px;
              height: 0px;
              border-top: 3px solid #FF9494;
            }
          }
        }
        &.toR{
          line-height: 204px;
          width: 36px;
          img{
            vertical-align: middle;
          }
        }
      }
    }
  }
}
</style>
