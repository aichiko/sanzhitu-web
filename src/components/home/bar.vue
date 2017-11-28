<template>
  <div>
    <ul>
      <li><a href=""><i class="icon iconfont icon-people"></i><p>在线客服</p></a></li>
      <li><a href=""><i class="icon iconfont icon-baojia"></i><p>电话咨询</p></a></li>
      <li><a href=""><i class="icon iconfont icon-shoujiapp"></i><p>手机APP</p></a><div>
              <p>扫一扫下载三只兔APP</p>
              <img src="../../../static/images/home/bottom-app.jpeg" alt="">
            </div></li>
      <li><a href=""><i class="icon iconfont icon-gongzhonghao"></i><p>公众号</p></a>
        <div>
          <p>欢迎关注三只兔微信号</p>
          <img src="../../../static/images/home/weixin.jpeg" alt="">
        </div>
      </li>
      <li style="display:none"><a href=""><i class="icon iconfont icon-tijiaoshenqing"></i><p>施工进度</p></a></li>
      <li style="display:none"><a href="" style="border-bottom: 1px solid #efefef;"><i class="icon iconfont icon-jiameng"></i><p>加盟咨询</p></a></li>
    </ul>
  </div>
</template>

<script>
require('../../style/font/iconfont.css')
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
ul{
  position: fixed;
  z-index: 99;
  top:50%;
  right: 10px;
  -webkit-transform: translate(0,-50%);
     -moz-transform: translate(0,-50%);
      -ms-transform: translate(0,-50%);
       -o-transform: translate(0,-50%);
          transform: translate(0,-50%);
  background-color: #fff;
    li{
      position: relative;
      &:hover{
        background-color: #ffe100;
        border-color: #ffe100;
        div{
            display: block;
        }
      }
      a{
        display: inline-block;
        width: 52px;
        padding:10px 0;
        border: 1px solid #efefef;
        border-bottom: 0;
        font-size: 12px;
        color: #666;
        &:hover{
            background-color: #ffe100;
            border-color: #ffe100;
        }
        i{
            font-size: 35px;
        }
      }
      div{
          position: absolute;
          top: 0;
          left: 0;
          -webkit-transform: translate(-100%, 0);
             -moz-transform: translate(-100%, 0);
              -ms-transform: translate(-100%, 0);
               -o-transform: translate(-100%, 0);
                  transform: translate(-100%, 0);
          padding:10px 20px;
          display: inline-block;
          background: #fff;
          border: 1px solid #e4e4e4;
          display: none;
          p{
            color: #FE0000;
            font-size: 12px;
            line-height: 16px;
          }
          img{
            width: 110px;
            height:110px;
          }
      }
    }
}
</style>