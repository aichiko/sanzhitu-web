<template>
  <div class="packagepro">
    <header>
      <my-header></my-header>
    </header>
    <div class="p1">
      <div class="package_common">
        <div class="package_title">
          <h1>品牌厂商F2C战略直供<br>至少比市场价底30%-50%</h1>
          让业主装修在家就能享受工厂价  至少比市场低32-55%之间<br>
        </div>
      </div>
    </div>
    <div class="p3">
        <appointment></appointment>
    </div>
    <insDiv></insDiv>
    <footer>
      <web-footer></web-footer>
    </footer>
  </div>
</template>

<script>
import appointment from '../../components/home/appointment'
import ins from '../../components/home/ins'
import head from '@/components/header/head'
import footer from '@/components/footer/web-footer'

export default {
  data () {
    return {
    }
  },
  components: {
    appointment,
    insDiv: ins,
    myHeader: head,
    webFooter: footer
  }
}
</script>
<style lang="less">
.p1 {
    height: 730px;
    background: url('../../assets/packagePro/pe-bg1.jpg') center top no-repeat;
    .package_common {
        width: 1200px;
        margin: 0 auto;
        .package_title {
            text-align: center;
            padding: 50px 0 80px 0;
            color: #777;
            font-size: 16px;
            line-height: 26px;
            h1 {
                font-size: 54px;
                color: #333;
                margin-bottom: 20px;
                line-height: 60px;
            }
        }
    }
}
.p3{
    height: 679px;
    background: url('') center top no-repeat;
    padding-top: 100px;
}
</style>
