<template>
  <div>
    <div class="headerBox">
      <home-header></home-header>
    </div>
    <div class="home_main">
      <home-banner :imageLists="images"></home-banner>
    </div>
    <h1>{{message}}</h1>
    <div>
      <home-footer></home-footer>
    </div>
  </div>
</template>


<script>
import head from '@/components/header/head'
import footer from '@/components/footer/footer'
import banner from '@/components/banner/banner'
import a from '@/assets/banners/banner2.jpg'

export default {
  data () {
    return {
      message: '23333',
      images: [
        {
          url: a
        },
        {
          url: a
        },
        {
          url: a
        }
      ]
    }
  },
  components: {
    'home-header': head,
    'home-footer': footer,
    'home-banner': banner
  }
}
</script>
<style>
.headerBox{
  width: 100%;
}

</style>
