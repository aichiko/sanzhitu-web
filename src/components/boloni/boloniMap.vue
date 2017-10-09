<template>
<div class="rm-dingwei ie" @click="closeMyself">
  <div class="dingwei-con" style="height: 800px; top: 30px;">
    <i class="icon-dingwei-c" id="close_dingwei" @click="closeMyself"></i>
    <div class="box">
      <div class="title">安乐窝体验馆地图导航</div>
      <baidu-map  class="map" :center="center" :zoom="zoom" @ready="handler" :scroll-wheel-zoom="true">
      	<bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
      	<bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE"></bm-marker>
      </baidu-map>
    </div>
  </div>
</div>

</template>
<script>

export default {
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 6
    }
  },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    },
    closeMyself () {
      console.log(111)
      this.$emit('on-close')
    }
  }
}
</script>
<style lang="less">

.rm-dingwei {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(33, 37, 44, 0.8);
  background-color: #000000;
  z-index: 9999;
  overflow-x: hidden;
  overflow-y: auto;
  visibility: visible;
  .dingwei-con {
	  position: relative;
	  background-color: #ffffff;
	  height: 800px;
	  width: 900px;
	  border: 1px solid #eeeeee;
	  top: 30px;
	  left: 50%;
	  margin-left: -500px;
	  overflow: hidden;
	  .icon-dingwei-c {
		  position: absolute;
		  right: 1px;
		  top: 1px;
		  height: 25px;
		  width: 25px;
		  background: url(http://www.anlewo.com/templates/default/images/sidebar/icon-dingwei-c.png) no-repeat;
		}
		.box {
	    width: 900px;
	    margin: 0 auto;
	    .title {
		    font-size: 18px;
		    padding: 25px 20px;
			}
			.map{
				overflow: hidden;
		    position: relative;
		    z-index: 0;
		    background-color: rgb(243, 241, 236);
		    color: rgb(0, 0, 0);
		    text-align: left;
		    width: 860px;
		    height: 707px;
		    overflow: hidden;
		    margin: 0 20px;
			}
		}
	}
}

</style>
