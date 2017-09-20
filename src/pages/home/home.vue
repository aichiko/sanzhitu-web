<template>
  <div>
    <div class="headerBox">
      <home-header></home-header>
    </div>
    <h1>{{message}}</h1>

  </div>
</template>


<script>
import head from '@/components/header/head'

export default {
  data () {
    return {
      message: '23333'
    }
  },
  components: {
    'home-header': head
  }
}
</script>
<style>
.headerBox{
  width: 100%;
}

</style>
