<template>
	<div class="box">
  <header>
    <my-header></my-header>
  </header>
		<div class="bx">
    <h2 class="asx graborder">我的订单</h2>
    <p class="telSel">电话号码：<input type="text" placeholder="输入电话号码查询" /></p>
    <div class="infoms">
      <div class="inox1">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="date"
            label="下单日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="类型"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="服务项目">
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </div>
    </div>
    </div>
    <footer>
      <web-footer></web-footer>
    </footer>
    <ins></ins>
	</div>
</template>

<script>
import ins from '@/components/home/ins'
import head from '@/components/header/head'
import webFooter from '@/components/footer/web-footer'
import $ from 'jquery'
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  components: {
    insMy: ins,
    myHeader: head,
    webFooter: webFooter
  },
  mounted () {
    $.ajax({
      type: 'get',
      url: 'http://sanztu.com/wz/order/my_noFinish_list?contact_phone=18986336761&size=10&offset=0&jsoncallback=?',
      dataType: 'jsonp',
      success: function (data) {
        console.log(data)
      },
      error: function (data) {
        console.log(data)
      }
    })
  }
}
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  min-height: 100%;
  .graborder {
    font-size: 22px;
    color: #0081c9;
    padding-left: 35px;
    line-height: 60px;
	}
  .telSel{
    text-align: left;
    padding:10px;
    input{
      border: 1px solid #dedede;
      height:30px;
      text-indent: 10px;
    }
  }
	.infoms {
    height: 650px;
	}
}
</style>