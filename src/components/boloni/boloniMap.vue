<template>
<div class="rm-dingwei ie">
<div class="bg" @click="closeMyself"></div>
  <div class="dingwei-con" style="height: 800px; top: 30px;">
    <i class="icon-dingwei-c" id="close_dingwei" @click="closeMyself"></i>
    <div class="box">
      <div class="title">安乐窝体验馆地图导航</div>
      <baidu-map  class="map" :center="center" :zoom="zoom" :scroll-wheel-zoom="true">
      	<bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
      	<bm-marker :position="{lng: lng, lat: lat}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE"></bm-marker>
      </baidu-map>
    </div>
  </div>
</div>
</div>
</template>
<script>

export default {
  props: {
    lat: {
      type: String,
      default: ''
    },
    lng: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      center: {lng: this.lng, lat: this.lat},
      zoom: 18
    }
  },
  methods: {
    closeMyself () {
      this.$emit('on-close')
    }
  },
  watch: {
    lng: function () {
      this.center.lng = this.lng
      this.center.lat = this.lat
      this.zoom = 18
    },
    lat: function () {
      this.center.lng = this.lng
      this.center.lat = this.lat
      this.zoom = 18
    }
  }
}
</script>
<style lang="less" scoped>
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
  .bg{
    width:100%;
    height:100%;
  }
  .dingwei-con {
	  position: absolute;
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
