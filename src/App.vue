<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <homeMy></homeMy>
  </div>
</template>

<script>
import homeMy from './pages/home/home'
export default {
  components: {
    homeMy
  }
}
</script>

<style>
@import './style/common.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  margin: 0
}
</style>
