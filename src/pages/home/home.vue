<template>
  <div>
    <div class="headerBox">
      <home-header></home-header>
    </div>
    <h1>{{message}}</h1>
    <div>
      <footer></footer>
    </div>
  </div>
</template>


<script>
import head from '@/components/header/head'
import footer from '@/components/footer/footer'

export default {
  data () {
    return {
      message: '23333'
    }
  },
  components: {
    'home-header': head,
    'home-footer': footer
  }
}
</script>
<style>
.headerBox{
  width: 100%;
}

</style>
