<template>
	<div class="box">
		<h2 class="asx graborder">我的订单</h2>
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
</template>

<script>
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
  mounted () {
    this.$http.get('http://sanztu.com/puser/getGJBySubstation?user_type=1&size=100&offset=0&substation_id=0').then((res) => {
      console.log(res)
    }, (err) => {
      console.log(err)
    })
    $.ajax({
      type: 'get',
      url: 'http://sanztu.com/puser/getGJBySubstation?user_type=1&size=100&offset=0&substation_id=0&jsoncallback=?',
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
  
	}
}
</style>