<template>
  <div class="packagepro">
    <header>
      <my-header></my-header>
    </header>
    <div class="p1"></div>
    <dec-title :title=title[0]></dec-title>
    <div class="p2">
      <div class="bx">
        <div class="float-left" >
          <img src="../../../static/images/package/p2.png" height="552" width="718" alt="">
        </div>
        <div class="custom float-right">
          <template v-for="c in custom">
            <h1><span>{{c.title[0]}}</span><span>{{c.title[1]}}</span></h1>
            <div>
              <p v-for="cc in c.content">{{cc}}</p>
            </div>
          </template>
        </div>
        <div>
          <ul class="clearfix">
            <li v-for="(p, i) in perPro">
              <img :src="'/sztwz/static/images/package/pb'+i+'.png'" height="158" width="160" alt="">
              <p v-for="text in p.content">{{text}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <dec-title :title=title[1]></dec-title>
    <div style="background-color:#fff;">
      <div class="bx">
        <img src="../../../static/images/package/p3.png" style="vertical-align:top" height="860" width="1200" alt="">
      </div>
    </div>
    <dec-title :title=title[2] ></dec-title>
    <appo style="padding-bottom:100px"></appo>
    <transition name="el-fade-in-linear">
      <!-- <insDiv v-if="showIns" @closeIns=" showIns = false "></insDiv> -->
    </transition>
    <footer>
      <web-footer></web-footer>
    </footer>
  </div>
</template>

<script>
import ins from '../../components/home/ins'
import head from '@/components/header/head'
import footer from '@/components/footer/web-footer'
import decTitle from '@/components/decoration/decTitle'
import appo from '@/components/decoration/appo'
export default {
  data () {
    return {
      showIns: true,
      title: [{
        title: '七大空间配置',
        sup: '100%属于您的私人定制'
      }, {
        title: '享受工厂价',
        sup: '至少比市场低32-55%之间'
      }, {
        title: '满足您的需求',
        sup: '给您不一样的体验和感受'
      }],
      custom: [{
        title: ['5全免', '0费用'],
        content: [
          '免费量房',
          '免设计效果图',
          '免管理费',
          '免成品保护费',
          '垃圾清理费'
        ]
      }, {
        title: ['5不限', '0增项'],
        content: [
          '地板面积不限',
          '厨房地砖/墙砖面积不限',
          '橱柜长度不限',
          '内门樘数不限',
          '厨房吊顶面积不限'
        ]
      }],
      perPro: [{
        content: ['踢脚线']
      }, {
        content: ['踢脚线', '墙砖', '地砖', '大地砖']
      }, {
        content: ['坐便器', '喷淋花洒', '龙头', '浴室柜下柜', '浴室柜台面', '浴室柜下盆', '浴室柜镜面']
      }, {
        content: ['吊顶扣板', '配套灯', '浴霸']
      }, {
        content: ['地柜', '上柜', '台面', '抽屉', '拉手', '厨房水槽', '水龙头']
      }, {
        content: ['门套', '门锁', '门扇', '门吸', '合页']
      }, {
        content: ['毛巾架', '置物架', '厕纸架', '马桶刷', '洗衣机地漏', '防臭地漏']
      }]
    }
  },
  components: {
    insDiv: ins,
    myHeader: head,
    webFooter: footer,
    decTitle,
    appo
  }
}
</script>
<style lang="less" scoped>
.p1 {
  height: 720px;
  background: url('../../../static/images/pack399.png') center top no-repeat;
}
.p2{
  background-color: #fff;
  .bx{
    div{
      &.float-left{
        width: 813px;
        height: 571px;
        img{
          float: left;
        }
      }
      &.float-right{
        width: 387px;
        height: 571px;
        padding-top:45px;
        h1{
          width: 250px;
          height:50px;
          line-height: 50px;
          border: 1px solid #FE0000;
          padding:0 25px;
          span{
            font-size: 30px;
            font-weight: 900;
            color: #FE0000;
            &:first-child{
              margin-right: 25px;
            }
          }
        }
        div{
          padding:10px 0;
          p{
            font-size:16px;
            line-height: 34px;
            padding-left: 16px;
            text-align: left;
            font-family: "黑体";
          }
        }
      }
      ul{
        li{
          float: left;
          margin-right: 12px;
          &:last-child{
            margin-right: 0;
          }
          p{
            width: 119px;
            height:33px;
            line-height: 33px;
            margin-left: 20px;
            border: 1px solid #FE0000;
            margin-top: 10px;
            font-family: "黑体"
          }
        }
      }
    }
  }
}
</style>
