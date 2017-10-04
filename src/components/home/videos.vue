<template>
<div>
  <div class="index-vrqjjz">
    <ul class="clearfix">
      <li v-for="video in videos" :key="video.id">
        <div class="player">
          <video id="my-player" class="video-js" 
          controls preload="auto" 
          poster="//vjs.zencdn.net/v/oceans.png"> 
           <source :src="video.src" type="video/mp4"></source>
          </video>
        </div>
        <div class="video-title">
          <span style="color: green">&bull;</span><span style="margin: 0 5px 0 5px; color: #333">{{video.title}}</span><span style="color: green">&bull;</span>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
require('video.js')
import video from 'video.js'

export default {
  data () {
    return {
      videos: [
        {
          id: 0,
          title: 'video1',
          src: 'http://play.wasu.cn/ttsg.swf/ap/1/sv/1/recom/0/tgid/2041430'
        },
        {
          id: 1,
          title: 'video2',
          src: 'http://pgccdn.v.baidu.com/3582175135_3906201719_20170930103226.mp4?authorization=bce-auth-v1%2Fc308a72e7b874edd9115e4614e1d62f6%2F2017-09-30T02%3A32%3A48Z%2F-1%2F%2Fee3c5af7b6812cb3270a6b319402f2c7578ae6ec1252d093471417e387388933&responseCacheControl=max-age%3D8640000&responseExpires=Mon%2C+08+Jan+2018+10%3A32%3A48+GMT&xcode=dadf45d998a48b9e156aa3bde20e6a471c5f71f0848e68ff&time=1506840429&_=1506754032424'
        },
        {
          id: 2,
          title: 'video3',
          src: 'http://pgccdn.v.baidu.com/3582175135_3906201719_20170930103226.mp4?authorization=bce-auth-v1%2Fc308a72e7b874edd9115e4614e1d62f6%2F2017-09-30T02%3A32%3A48Z%2F-1%2F%2Fee3c5af7b6812cb3270a6b319402f2c7578ae6ec1252d093471417e387388933&responseCacheControl=max-age%3D8640000&responseExpires=Mon%2C+08+Jan+2018+10%3A32%3A48+GMT&xcode=dadf45d998a48b9e156aa3bde20e6a471c5f71f0848e68ff&time=1506840429&_=1506754032424'
        }
      ]
    }
  },
  mounted () {
    // console.log('this is current player instance object', this.player)
    setTimeout(() => {
      // console.log('dynamic change options', this.player)
      this.player.muted(false)
    }, 2000)
  },
  components: {
    video
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    playerOptions (video) {
      var option = {
        muted: true,
        language: 'zh-CN',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          // src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
          src: 'http://pgccdn.v.baidu.com/3582175135_3906201719_20170930103226.mp4?authorization=bce-auth-v1%2Fc308a72e7b874edd9115e4614e1d62f6%2F2017-09-30T02%3A32%3A48Z%2F-1%2F%2Fee3c5af7b6812cb3270a6b319402f2c7578ae6ec1252d093471417e387388933&responseCacheControl=max-age%3D8640000&responseExpires=Mon%2C+08+Jan+2018+10%3A32%3A48+GMT&xcode=dadf45d998a48b9e156aa3bde20e6a471c5f71f0848e68ff&time=1506840429&_=1506754032424'
        }],
        poster: '/static/images/author.jpg'
      }
      return option
    }
  }
}
</script>

<style lang="less">
.player {
  width: 380px; height: 220px;
  color: #fff
}
.index-vrqjjz ul {
  display: inline;
}
.index-vrqjjz li {
  border: 2px solid green; 
  float: left;
  position: relative;
  width: 380px;
  height: 290px;
  margin-left: 10px;
}

.vjs-custom-skin {
  background-color: #fff;
  width: 380px;
  height: 290px;
}

.video-js {
  width: 370px; height: 220px;
}

.video-title {
  line-height: 70px;
}

</style>
