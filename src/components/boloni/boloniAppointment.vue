<template>
<div id="yiyuan-bg">
    <div class="yiyuan-box" @click="closeMyself"></div>
    <div class="yiyuan-form">
        <div class="yiyuan-com">
            <div class="yiyuan-title">免费预约<i id="yiyuan-close" @click="closeMyself">×</i></div>
            <div class="yiyuan-body">
                <dl class="yiyuan-list">
                    <dt>选择地区</dt>
                    <dd>
                        <select name="" class="yiyuan-pro"><option value="3">河北</option><option value="10">江苏</option><option value="11">浙江</option><option value="13">福建</option><option value="14">江西</option><option value="15">山东</option><option value="16">河南</option><option value="18">湖南</option><option value="19">广东</option><option value="20">广西</option><option value="22">重庆</option><option value="24" selected="true">贵州</option><option value="25">云南</option></select>
                        <select name="" class="yiyuan-ciy"><option value="410">铜仁地区</option><option value="414" selected="true">黔南布依族苗族自治州</option></select>
                    </dd>
                </dl>

                <dl class="yiyuan-list">
                    <dt>体验馆</dt>
                    <dd>
                        <div>
                        <select name="" class="yiyuan-map" id="booked_map"><option value="56" selected="true">都匀店</option></select>
                        </div>
                        <span class="yiyan-tips">*请选择体验店</span>
                    </dd>
                </dl>

                <dl class="yiyuan-list">
                    <dt>您的称呼</dt>
                    <dd class="yiyuan-yz">
                        <div class="yiyuan-input"><input type="text" id="booked_name" value=""></div>
                        <span class="yiyan-tips">*请填写您的称呼</span>
                    </dd>
                </dl>

                <dl class="yiyuan-list">
                    <dt>您的手机</dt>
                    <dd class="yiyuan-yz">
                        <div class="yiyuan-input"><input type="tel" id="booked_phone" value=""></div>
                        <span class="yiyan-tips">*请填写正确的手机号码</span>
                    </dd>
                </dl>

                <dl class="yiyuan-list">
                    <dt>滑动验证</dt>
                    <dd class="yiyuan-yz">
                      <div id="booked_order" class="slider"><div class="ui-draglock-wrap" style="width: 241px; height: 34px; background-color: rgb(232, 232, 232);"><div class="ui-draglock-text ui-draglock-no-select ui-draglock-textMsg" style="line-height: 34px; font-size: 12px; color: rgb(102, 102, 102);">请按住滑块，拖动到最右边</div><div class="ui-draglock-btn init ui-draglock-no-select" style="width: 34px; height: 34px; line-height: 34px;"></div><div class="ui-draglock-bg" style="height: 34px; background-color: rgb(122, 194, 60);"></div></div></div>
                    </dd>
                </dl>

                <dl class="yiyuan-list" id="yzm_code" style="display: none">
                    <dt>验证码</dt>
                    <dd class="yiyuan-code">
                        <div class="yiyuan-input"><input type="text" name="captcha" id="captcha" value=""></div>
                        <img src="http://www.anlewo.com/index.php?act=seccode&amp;op=makecode&amp;nchash=" name="codeimage" border="0" id="codeimage" class="fl ml5" style="cursor: pointer;height: 28px;">
                        <span class="yiyan-tips">*请填写验证码</span>
                    </dd>
                </dl>

                <dl class="yiyuan-list">
                    <dt>短信验证码</dt>
                    <dd class="yiyuan-code">
                        <div class="yiyuan-input booked_yzm"><input type="text" name="" id="booked_yzm" value=""></div>
                        <button id="yiyuan-send" class="disabled">发送验证码</button>
                        <span class="yiyan-tips">*请填写验证码</span>
                    </dd>
                </dl>

                <input type="hidden" id="booked_goods_id" value="">
                <input type="hidden" id="booked_goods_name" value="">
                <input type="hidden" id="booked_source" value="1">

                <div class="yiyan-tips" id="submit-tips"></div>
                <button class="yiyuan-submit">免费预约</button>

                <div class="yiyuan-explain">
                    免费预约后，系统将发送抢订口令到您的手机上，您可线下看样，出示口令即可享受优惠价格购买商品。
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    closeMyself () {
      this.$emit('on-close')
    }
  }
}
</script>

<style lang="less" scoped>
@-webkit-keyframes slidetounlock{
    0%{
        background-position:-200px 0;
    }
    100%{
        background-position:200px 0;
    }
}
#yiyuan-bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  .yiyuan-box {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000000;
    filter: alpha(opacity=55);
    -moz-opacity: 0.55;
    khtml-opacity: 0.55;
    opacity: 0.55;
  }
  .yiyuan-form {
    position: absolute;
    top: 15%;
    left: 50%;
    margin-left: -201px;
    width: 402px;
    height: auto;
    background-color: rgba(130, 130, 130, 0.75);
    padding: 8px;
    .yiyuan-com {
      background-color: #fff;
      width: 386px;
      height: auto;
      .yiyuan-title {
        background-color: #f4f4f4;
        height: 38px;
        border-bottom: 1px solid #FFFFFF;
        line-height: 38px;
        font-size: 16px;
        font-weight: 700;
        color: #444444;
        padding: 0 12px;
        #yiyuan-close {
          float: right;
          cursor: pointer;
          display: block;
          width: 20px;
          text-align: center;
          color: #666666;
        }
      }
      .yiyuan-body {
        border-top: 1px solid #dddddd;
        padding: 30px 35px 0 35px;
        .yiyuan-list {
          height: 34px;
          margin-bottom: 13px;
          dt{
            float: left;
            font-size: 14px;
            color: #999999;
            line-height: 34px;
            width: 74px;
          }
          dd{
            float: left;
            width: 241px;
            .yiyuan-pro,.yiyuan-ciy {
              padding: 8px 12px;
              border: 1px solid #D2D2D2;
              width: 115px;
              height: auto;
            }
            .yiyuan-map {
              width: 241px;
              height: auto;
              padding: 8px 12px;
              border: 1px solid #D2D2D2;
            }
            .yiyan-tips {
              color: #f00;
              display: none;
            }
            .yiyuan-input {
              height: 32px;
              border: 1px solid #d2d2d2;
              padding: 0 5px;
              width: 110px;
              &.booked_yzm{
                display: inline-block;
                margin-right: 9px;
                float: left;
              }
              input{
                border: 0;
                line-height: 30px;
                height: 30px;
                width: 100%;
                padding: 0px;
              }
            }
            .ui-draglock-wrap {
              background: #e8e8e8;
              position: relative;
              width: 241px;
              height: 34px;
              background-color: rgb(232, 232, 232);
              .ui-draglock-no-select.ui-draglock-textMsg {
                background: -webkit-gradient(linear,left top,right top,color-stop(0,#4d4d4d),color-stop(.4,#4d4d4d),color-stop(.5,#fff),color-stop(.6,#4d4d4d),color-stop(1,#4d4d4d));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                -webkit-animation: slidetounlock 3s infinite;
                -webkit-text-size-adjust: none;
              }
              .ui-draglock-btn {
                background: #fff url('../../assets/boloni/draglock.png') no-repeat center;
                position: absolute;
                top: 0;
                left: 0;
                cursor: move;
                text-align: center;
                border: 1px solid #ccc;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                -ms-box-sizing: border-box;
                -o-box-sizing: border-box;
                box-sizing: border-box;
              }
              .ui-draglock-bg {
                width: 0;
              }
            }
            .ml5 {
              margin-left: 5px!important;
            }
            #yiyuan-send {
              height: 33px;
              width: 102px;
              background-color: #eeeeef;
              border: 1px solid #adacac;
              cursor: pointer;
              float: right;
            }
          }
        }
        .yiyuan-submit {
          background-color: #ff9c00;
          color: #FFFFFF;
          font-size: 18px;
          border: 1px solid #ff7e00;
          font-weight: 600;
          font-family: "microsoft yahei";
          height: 43px;
          width: 100%;
          margin-bottom: 22px;
          margin-top: 15px;
        }
        .yiyuan-explain {
          font-size: 12px;
          color: #888888;
          border-top: 1px solid #e8e8e8;
          font-family: simsun;
          padding-top: 14px;
          padding-bottom: 14px;
        }
      }
    }
  }
}
</style>
