<template>
<div>
  <header class="head-box">
    <img src="../../assets/decoration/banner.png" alt="图片还在加载中">
  </header>
  <nav class="nav-box">
    <img src="../../assets/decoration/pc_1.jpg" alt="图片还在加载中">
    <form action="" id="b_form">
      <div class="box-item">
        <input type="text" name="ryname" placeholder="请输入你的姓名">
        <select>
          <option selected="">先生</option>
          <option>女士</option>
        </select>
      </div>
      <input type="text" name="area" placeholder="请输入你的房屋面积">
      <input type="text" name="ryphone" placeholder="我们将发送预算至你的手机" maxlength="11">

      <button type="button" onclick="baoming_sub('#b_form')">马上获取装修报价</button>
    </form>

  </nav>
  <figure class="fig">
    <img src="../../assets/decoration/pc_2.jpg" alt="图片还在加载中">
    <img src="../../assets/decoration/pc_3.jpg" alt="图片还在加载中">
    <img src="../../assets/decoration/pc_4.jpg" alt="图片还在加载中">
    <img src="../../assets/decoration/pc_5.jpg" alt="图片还在加载中">
    <div class="fig-box" @click="openZoosUrl('bchatwin');lr_hidemini();"></div>
    <div class="fig-box1" @click="openZoosUrl('bchatwin');lr_hidemini();"></div>
  </figure>
  <footer class="foot-box">
    <img src="../../assets/decoration/footer.jpg" alt="">
    <form action="" id="t_form">
      <h5>专业设计师创意参考比谁的设计更合意</h5>
      <input type="text" name="ryname" placeholder="请输入你的姓名">
      <input type="text" name="ryphone" placeholder="请输入你的手机号码" maxlength="11">
      <button type="button" onclick="baoming_sub('#t_form')">申请免费量房</button>
    </form>
  </footer>
</div>

</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="less">
.head-box {
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
.nav-box {
  width: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  #b_form {
    width: 20%;
    height: 50%;
    position: absolute;
    top: 34%;
    right: 18.5%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;
    .box-item {
      width: 90%;
      height: 20%;
      display: flex;
      justify-content: space-between;
      input{
        width: 60%;
        height: 100%;
        border: none;
        border-radius: 8px;
        font-size: 1.2rem;
        text-indent: 3em;
        background: url(../../assets/decoration/name.png) 10% -10% no-repeat white;
      }
      select {
        -webkit-appearance: menulist;
        box-sizing: border-box;
        align-items: center;
        white-space: pre;
        -webkit-rtl-ordering: logical;
        color: black;
        background-color: white;
        cursor: default;
        width: 35%;
        height: 100%;
        border: none;
        border-radius: 8px;
        font-size: 1.2rem;
        color: #000;
        padding: 0 0px 0 35px;
        box-sizing: border-box;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        option{
            border: none;
            border-radius: 8px;
        }
      }
    }
    input{
      width: 90%;
      height: 20%;
      border: none;
      border-radius: 8px;
      text-indent: 3rem;
      font-size: 1.2rem;
      background: url(../../assets/decoration/name.png) 10px -70px no-repeat white;
      &:nth-last-child(2) {
        background: url("../../assets/decoration/name.png") 10px -152px no-repeat white;
      }
    }
    button {
      width: 90%;
      height: 58px;
      border: none;
      border-radius: 8px;
      font: 1.3rem/58px "";
      text-shadow: 0 1px 20px #f1f1f1;
      box-shadow: 0 8px 15px #333;
      background: #f75a2f;
      color: white;
      letter-spacing: 0.1rem;
    }
  }
}
.fig {
  width: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .fig-box {
    position: absolute;
    bottom: 2.5%;
    right: 22%;
    width: 12.5%;
    height: 2%;
    border-radius: 10px;
  }
  .fig-box1 {
    position: absolute;
    top: 15.5%;
    right: 30.5%;
    width: 14%;
    height: 2%;
    border-radius: 10px;
  }
}
.foot-box {
  width: 100%;
  position: relative;
  img{
    width: 100%;
    height: 100%;
  }
  #t_form {
    width: 20%;
    height: 60%;
    position: absolute;
    top: 90px;
    right: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: baseline;
    h5{
      width: 90%;
      height: 10%;
      text-align: center;
      font: 1rem/calc(100% - 90%) "";
    }
    input{
      width: 90%;
      height: 20%;
      font: 1.2rem/58px "";
      text-indent: 3.5rem;
      border: none;
      border-radius: 8px;
      box-shadow: 0 0 5px 1px #ccc;
      background: url("../../assets/decoration/name.png") no-repeat 10px 10px;
      &:nth-child(3) {
        background: url("../../assets/decoration/name.png") no-repeat 10px -155px;
      }
    }
    button {
      width: 90%;
      height: 20%;
      color: white;
      background: linear-gradient(white,#eb1b2b 98%);
      letter-spacing: 0.2rem;
      font: bold 1.5rem/58px "";
      border: none;
      border-radius: 8px;
      box-shadow: 0 10px 10px #ccc;
    }
  }
}
</style>
