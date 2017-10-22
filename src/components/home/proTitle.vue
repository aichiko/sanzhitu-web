<template>
  <div>
    <h3>
      <div>{{txt.h}}</div>
      <p>{{txt.P}}</p>
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    txt: {
      type: Object,
      default: function () {
        return {
          h: '特色产品',
          P: 'f2C模式，剩一半'
        }
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped  lang="less" scoped>
h3{
  padding: 54px 0 15px 0;
  div{
    margin: 0 auto;
    width: 200px;
    line-height: 32px;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid #999;
    color: #333;
    text-align: center;
  }
  p{
    font-size: 14px;
    line-height: 26px;
    color: #666;
    text-align: center;
  }
}

</style>
