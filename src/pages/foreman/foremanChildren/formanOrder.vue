<template>
	<div class="box">
    <header>
      <my-header></my-header>
    </header>
		<div class="bx">
      <h2 class="title">我的订单</h2>
      <p class="telSel">联系电话：<input type="text" placeholder="输入电话号码查询" v-model="tel" /><button class="btn" @click="pageTurn">查询</button></p>
      <div class="infoms">
        <div class="inox1">
          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="order_time"
              label="下单日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="orderTypeName"
              label="类型"
              width="180">
            </el-table-column>
            <el-table-column
              prop="title"
              label="服务项目">
            </el-table-column>
            <el-table-column
              prop="contact"
              label="联系人">
            </el-table-column>
            <el-table-column
              prop="contact_phone"
              label="联系电话">
            </el-table-column>
            <el-table-column
              prop="place"
              label="服务地址">
            </el-table-column>
            <el-table-column
              prop="statusName"
              label="订单状态">
            </el-table-column>
            <el-table-column
              prop="substation_name"
              label="所属分站">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini">详细</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="cus-center" id="page"><ul class="pagination cus-center" style="cursor: pointer;"><li><a pageno="0" :class="{gray:page <= 0}" @click="back">«</a></li><li><a pageno="1" @click="add" :class="{gray:(this.page + 1) >= (this.total / 10)}">»</a></li></ul></div>
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
      tableData: [],
      tel: '',
      page: 0,
      total: 1
    }
  },
  components: {
    insMy: ins,
    myHeader: head,
    webFooter: webFooter
  },
  methods: {
    pageTurn: function () {
      var that = this
      $.getJSON('http://sanztu.com/wz/order/my_noFinish_list?contact_phone=' + that.tel + '&size=10&offset=' + that.page).then((res) => {
        console.log(res)
        that.tableData = res.data.lst
        that.total = res.data.total
      }, (err) => {
        console.log(err)
      })
    },
    add () {
      if ((this.page + 1) < (this.total / 10)) {
        this.page++
        this.pageTurn()
      }
    },
    back () {
      if (this.page > 0) {
        this.page--
        this.pageTurn()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  .bx{
    .title {
      font-size: 22px;
      color: #0081c9;
      line-height: 60px;
      height:60px;
      white-space:nowrap;
      text-align: center;
      width: 100%;
    }
    .telSel{
      text-align: left;
      width: 100%;
      padding:10px;
      input{
        border: 1px solid #dedede;
        height:30px;
        text-indent: 10px;
      }
      .btn{
        color: #fff;
        background-color: #5cb85c;
        font-size: 14px;
        padding:6px 38px;
        border-radius: 4px;
        vertical-align:top;
        margin-left: 10px;
      }
    }
    .infoms {
      .cus-center {
        text-align: center;
        .cus-center {
          text-align: center;
          display: inline-block;
          padding-left: 0;
          margin: 20px 0;
          border-radius: 4px;
          li{
            display: inline;
            a{
              position: relative;
              float: left;
              padding: 6px 12px;
              margin-left: -1px;
              line-height: 1.42857143;
              color: #337ab7;
              text-decoration: none;
              background-color: #fff;
              border: 1px solid #ddd;
              &.gray{
                background-color: #e9e9e9;
              }
            }
            &:first-child>a{
              margin-left: 0;
              border-top-left-radius: 4px;
              border-bottom-left-radius: 4px;
            }
          }
        }
      }
    }
  }
}
</style>