<template>
<div>
  <header>
    <web-header></web-header>
  </header>
	<router-view></router-view>
  <footer>
    <web-footer></web-footer>
  </footer>
</div>
</template>

<script>
import webHeader from '@/components/header/head'
import webFooter from '@/components/footer/web-footer'
export default {
  data () {
    return {
    }
  },
  components: {
    webHeader: webHeader,
    webFooter: webFooter
  }
}
</script>

<style lang="less" scoped>

</style>
