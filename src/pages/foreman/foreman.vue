<template>
<div>
  <header>
    <web-header></web-header>
  </header>
	<div class="index_center">
    <div class="bx cra">
      <div class="title">
        <p>工长群</p>
        <div class="tl"></div>
        <div style="position:absolute; right:0; top:20px; background:#ebebeb;" id="GJtoggle">
          <span id="upGJ" class="itemgj" :class="{currentgj: page > 0}" @click="backPage(page)">&lt;</span>
          <span id="lextGJ" class="itemgj" :class="{currentgj: page <= this.newsList.total}" @click="addPage(page)">&gt;</span>
        </div>
      </div>
      <div class="wrap1">
        <ul class="crabody one oneGJArea" id="oneGJArea">
        <li v-for="(l, i) in newsList.rows" :key="i">
          <img :src="'http://sanztu.com/' + l.headPic">
          <div class="info">
            <h4>
              <el-tooltip class="item" effect="dark" :content="l.realName" placement="right-start">
                <span style="max-width: 80px; overflow: hidden; display: inline-block; height: 20px;">
                {{l.realName}}</span>
              </el-tooltip>
              <i :class="'w'+15*l.judge_score" class="class_i"></i>
            </h4>
            <p><span>工&nbsp;&nbsp;&nbsp;&nbsp;种：</span><strong>{{aDouble(l.work_type)}}</strong></p>
            <p><span>服务年限：</span><strong>{{l.work_age}}年</strong></p>
            <p><span>年&nbsp;&nbsp;&nbsp;龄：</span><strong>{{l.age}}</strong></p>
            <p><span>服务次数：</span><strong>{{l.service_times}}</strong></p>
          </div>
        </li>
        </ul>
      </div>
    </div>
    <img src="../../../static/images/foremans.gif" width="100%" alt="">
    <div class="bx logBox clearfix">
      <div class="float-left">
        <h1>我现在就要</h1>
        <h2>加入三只兔</h2>
        <p>已有<b>37518人</b>加入</p>
        <button>
          <a href="http://sanztu.com/home_yxal" style="color: #fff" target="_blank">查看工长案例</a>
        </button>
      </div>
      <div class="float-right">
        <p><span>我是工长</span><input type="text"  placeholder="账号/手机号"/></p>
        <p><span>我的密码</span><input type="password" placeholder="请输入密码" /></p>
        <p class="btnBox clearfix">
          <button>
            <a href="http://sanztu.com/portal_login_craftsman" target="_blank">注册</a>
          </button>
          <button>
            <a href="http://sanztu.com/portal_login_craftsman" target="_blank">登录</a>
          </button>
        </p>
      </div>
    </div>
  </div>
  <footer>
    <web-footer></web-footer>
  </footer>
  <!-- <transition name="el-fade-in-linear">
    <insDiv v-if="showIns" @closeIns=" showIns = false "></insDiv>
  </transition> -->
</div>
</template>

<script>
import webHeader from '@/components/header/head'
import webFooter from '@/components/footer/web-footer'
// import ins from '../../components/home/ins'
import $ from 'jquery'
export default {
  data () {
    return {
      showIns: true,
      newsList: {'page': 0, 'rows': [], 'total': 15480, 'totalPage': 0},
      page: 0
    }
  },
  components: {
    webHeader: webHeader,
    webFooter: webFooter
    // insDiv: ins
  },
  methods: {
    aDouble (val) {
      if (val === 1) {
        return '水电工'
      } else if (val === 2) {
        return '木工'
      } else if (val === 3) {
        return '泥瓦工'
      } else if (val === 4) {
        return '油漆工'
      } else if (val === 5) {
        return '布艺'
      } else if (val === 6) {
        return '安装工'
      } else if (val === 7) {
        return '配送工'
      } else if (val === 8) {
        return '搬运工'
      } else if (val === 9) {
        return '工长'
      } else {
        return '其他'
      }
    },
    pageTurn: function (page) {
      var that = this
      $.getJSON('http://sanztu.com/wz/puser/getGJBySubstation?user_type=1&size=9&offset=' + page + '&substation_id=0').then((res) => {
        console.log(res)
        that.newsList = res
      }, (err) => {
        console.log(err)
      })
    },
    backPage: function (page) {
      if (page > 0) {
        this.page -= 9
        this.pageTurn(this.page)
      }
    },
    addPage: function (page) {
      if (page < this.newsList.total) {
        this.page += 9
        this.pageTurn(this.page)
      }
    }
  },
  mounted: function () {
    var that = this
    $.getJSON('http://sanztu.com/wz/puser/getGJBySubstation?user_type=1&size=9&offset=0&substation_id=0', function (res) {
      console.log(res)
      that.newsList = res
    })
  }
}
</script>

<style lang="less" scoped>
.w0{
  width: 0px;
}
.w15{
  width: 15px;
}
.w30{
  width: 30px;
}
.w45{
  width: 45px;
}
.w60{
  width: 60px;
}
.w75{
  width: 75px;
}
.index_center {
  background: #F5F5F5;
  padding-top: 20px;
  .cra{
    position: relative;
    .title{
      overflow: hidden;
      margin-bottom: 40px;
      position: relative;
      p {
        float: left;
        font-size: 30px;
        line-height: 68px;
        text-align: center;
        width: 158px;
        height: 68px;
        border: 1px solid #cdcdcd;
        background: #ebebeb;
      }
      .tl {
        width: 100%;
        padding-top: 33px;
        border-bottom: 1px solid #cdcdcd;
      }
      div{
        .itemgj {
          display: inline-block;
          width: 24px;
          height: 24px;
          text-align: center;
          line-height: 24px;
          color: white;
          background: #c7c7c7;
        }
        .currentgj {
          background: #5dbef0;
        }
      }
    }
    .wrap1 {
      position: relative;
      height: 670px;
      width: 1200px;
      overflow: hidden;
      .one {
        top: 0;
        left: 0;
      }
      .crabody {
        overflow: hidden;
        margin-right: -30px;
        width: 1230px;
        position: absolute;
        li {
          text-align: left;
          float: left;
          width: 380px;
          height: 190px;
          padding: 20px;
          padding-left: 150px;
          margin: 0 30px 20px 0;
          background: white;
          position: relative;
          img {
            position: absolute;
            top: 20px;
            left: 20px;
            width: 100px;
            height: 150px;
          }
          div{
            h4 {
              font-weight: 900;
              border-bottom: 1px dashed #35afed;
              font-size: 16px;
              padding-bottom: 5px;
              margin-bottom: 10px;
              background: url(../../../static/icons/iconfont-v.png) no-repeat 76px 5px;
              .class_i {
                display: inline-block;
                height: 15px;
                background: url(../../../static/icons/star_1.png) repeat-x;
                float: right;
                margin-right: 40px;
              }
            }
            p {
              font-size: 0;
              line-height: 24px;
              span {
                display: inline-block;
                font-weight: bold;
                font-size: 14px;
                width: 80px;
                overflow:hidden;
              }
              strong {
                font-weight: normal;
                font-size: 14px;
                display: inline-block;
                width: 130px;
                vertical-align: top;
              }
            }
          }
        }
      }
    }
	}
  .logBox{
    text-align: left;
    background: #F5F5F5;
    .float-left{
      padding:50px 100px 84px;
      width: 530px;
      h1{
        font-size: 40px;
        color: #000;
        font-weight: border;
      }
      h2{
        font-size: 34px;
        margin-top: 15px;
        color: #FE3D3E;
        font-weight: border;
      }
      p{
        font-size: 20px;
        height:40px;
        line-height: 40px;
        color: #000;
        b{
          color: #FE3D3E;
        }
      }
      button{
        padding: 3px 22px;
        background-color:#FE3D3E;
        color: #fff;
        font-size: 20px;
        border-radius:30px;
      }
    }
    .float-right{
      width: 670px;
      padding-top:50px;
      p{
        margin-bottom: 10px;
        &.btnBox{
          width: 100%;
          padding-right: 293px;
          text-align: right;
          a{
            float: right;
            width: 77px;
            text-align: center;
            height:37px;
            line-height: 37px;
            font-size: 18px;
            background-color:#fff;
            display: inline-block;
            margin-right: 10px;
          }
        }
        span{
          width: 117px;
          text-align: center;
          height:37px;
          line-height: 37px;
          font-size: 18px;
          background-color:#fff;
          display: inline-block;
          margin-right: 5px;
        }
        input{
          width: 245px;
          background-color:#fff;
          height:37px;
        }
      }
    }
  }
}
</style>
