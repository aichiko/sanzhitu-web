<template>
<div>
  <div class="bx">
    <h1  v-if="title.sub" class="sub"><span><i class="left"></i>{{ title.sub }}</span></h1>
    <h1><span><i class="left" v-if="!title.sub"></i>{{ title.title }}<i class="right"></i></span></h1>
    <p>{{ title.sup }}</p>
    <p><img src="../../assets/decoration/titleDown.png"></p>
  </div>
</div>
</template>
<script>
export default {
  props: {
    title: ''
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
div{
  width:100%;
  background-color: #fff;
  .bx{
    padding:50px 0 20px;
    text-align: center;
    h1{
      height: 74px;
      line-height: 74px;
      &.sub{
        height: 33px;
        line-height: 63px;
        span{
          font-size: 18px;
          padding: 0 120px;
          font-weight:500;
          color: #000;
        }
      }
      span{
        font-size: 40px;
        padding: 0 60px;
        display: inline-block;
        color:#FE0000;
        font-weight: 900;
        position: relative;
      }
      i{
        position: absolute;
        display:inline-block;
        width: 26px;
        height:31px;
        &.left{
          top: 18px;
          left: 0;
          background: url("../../assets/decoration/titleL.png")
        }
        &.right{
          right:0;
          bottom:10px;
          background: url("../../assets/decoration/titleR.png")
        }
      }
    }
    p{
      height:42px;
      line-height:42px;
      color: #000;
      font-size:24px;
    }
  }
}
</style>