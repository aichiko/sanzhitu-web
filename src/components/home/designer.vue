<template>
  <div class="designer-contain">
    <!-- 默认第一个为大长图，后面的为竖排显示的两张图 -->
    
    <!-- <div class="shj_index_team_ag">
      <img src="http://www.shj.cn/statics/2017/images/ag.jpg" alt="" width="100%">
      <div class="shj_index_team_ag_hover">
        <div class="shj_index_team_ag_bg">
          <img src="http://www.shj.cn/statics/2017/images/agbg.png" alt="" class="shj_index_team_ag_bgimg" id="shj_team_bgimg1" style="left:0;"><img src="http://www.shj.cn/statics/2017/images/agbg.png" alt="" class="shj_index_team_ag_bgimg" id="shj_team_bgimg2" style="left:408px;"><img src="http://www.shj.cn/statics/2017/images/agbg2.png" alt="" class="shj_index_team_ag_bgimg" id="shj_team_bgimg3" style="left:0;"><img src="http://www.shj.cn/statics/2017/images/agbg2.png" alt="" class="shj_index_team_ag_bgimg" id="shj_team_bgimg4" style="left:407.5px;">
        </div>
        <div class="shj_index_team_ag_hover_text" @click="showVideo()">
            <div class="shj_index_team_ag_hover_bg"></div>
            <i class="shj_index_team_ag_hover_icon shj_index_team_ag_hover_icon_r"></i>
            <h5>视频介绍</h5>
        </div>
        <div class="shj_index_team_ag_video_box" style="display: block;">
            <video data-v="false" class="shj_index_team_ag_video" controls="controls" preload="auto">
            <source id="mp4" type="video/mp4" src="http://storage.shjmall.cn/attachment/video/dir/b0c5ef29e17c47fdb37c4b8782213923.mp4">
            <source id="webm" type="video/webm" src="http://storage.shjmall.cn/attachment/video/dir/b0c5ef29e17c47fdb37c4b8782213923.mp4">
            <source id="ogv" type="video/ogg" src="http://storage.shjmall.cn/attachment/video/dir/b0c5ef29e17c47fdb37c4b8782213923.mp4">
            </video>
            <div class="shj_index_team_ag_video_play"></div>
        </div>
      </div>
	  </div> -->
    <div class="">
      <ul class="shj_index_team_list">
        <li v-for="image in designers.images" :key="image.id">
          <a :href="image.href">
          <img :src="image.imageURL" alt="" class="shj_index_team_sjsimg">
          </a>
          <div class="shj_index_team_sjs_hover">
            <h3>{{image.name}}</h3>
            <h5>{{image.position}}</h5>
            <h6>{{image.description}}</h6>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {designers} from '../../config/users.js'

export default {
  props: {
    designers: {
      type: Object,
      default: function () {
        return {
          mainImage: {
            imageURL: 'http://www.shj.cn/statics/2017/images/ag.jpg'
          },
          images: designers
        }
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    /*
    go () {
      let img1 = document.getElementById('shj_team_bgimg1')
      let img2 = document.getElementById('shj_team_bgimg2')
      let img3 = document.getElementById('shj_team_bgimg3')
      let img4 = document.getElementById('shj_team_bgimg4')
      setInterval(() => {
        if (parseFloat(img1.style.left) > -408) {
          img1.style.left = parseFloat(img1.style.left) - 0.25 + 'px'
        } else {
          img1.style.left = '407.75px'
        }
        if (parseFloat(img2.style.left) > -408) {
          img2.style.left = parseFloat(img2.style.left) - 0.25 + 'px'
        } else {
          img2.style.left = '407.75px'
        }
        if (parseFloat(img3.style.left) > -407.5) {
          img3.style.left = parseFloat(img3.style.left) - 0.5 + 'px'
        } else {
          img3.style.left = '407.5px'
        }
        if (parseFloat(img4.style.left) > -407.5) {
          img4.style.left = parseFloat(img4.style.left) - 0.5 + 'px'
        } else {
          img4.style.left = '407.5px'
        }
      }, 5)
    },
    showVideo () {
      let shj = document.getElementsByClassName('shj_index_team_ag_hover')[0]
      let shjText = document.getElementsByClassName('shj_index_team_ag_hover_text')[0]
      if (shj.className.indexOf('open') < 0) {
        shj.className = 'shj_index_team_ag_hover open'
        shjText.getElementsByTagName('i')[0].className = 'shj_index_team_ag_hover_icon shj_index_team_ag_hover_icon_r'
      } else {
        shj.className = 'shj_index_team_ag_hover close'
        shjText.getElementsByTagName('i')[0].className = 'shj_index_team_ag_hover_icon'
      }
    }
    */
  },
  mounted () {
    // this.go()
  }
}
</script>

<style lang="less" scoped>
.esigner-contain {
  width: inherit;
  height: 100%;
  padding: 30px 0;
}
@keyframes open{
from {height: 90px;}
to {height: 313px;}
}
@keyframes close{
from {height: 313px;}
to {height: 90px;}
}
.shj_index_team_ag {
    width: 400px;
    height: 510px;
    float: left;
    position: relative;
  img {
    width: 100%;
    border: medium none;
    vertical-align: middle;
  }
  .shj_index_team_ag_hover {
    width: 400px;
    height: 90px;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    overflow: hidden;
    &.open {
      animation:open 0.5s forwards;
    }
    &.close {
      animation:close 0.5s forwards;
    }
    .shj_index_team_ag_bg {
      width: inherit;
      height: inherit;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      font-size: 0;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width:408px;
        height:313px;
        vertical-align:bottom;
        border:none;
        &#shj_team_bgimg2{
          left: 408px;
        }
        &#shj_team_bgimg4{
          left: 407.5px;
        }
      }
    }
    .shj_index_team_ag_hover_text {
        width: inherit;
        height: 50px;
        cursor: pointer;
        position: relative;
        .shj_index_team_ag_hover_bg {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 99;
        }
        .shj_index_team_ag_hover_icon {
            background: url('../../assets/icon.png') no-repeat;
            background-position: -51px -868px;
            width: 21px;
            height: 14px;
            display: block;
            margin: 40px 0 5px 189.5px;
            &.shj_index_team_ag_hover_icon_r {
                transition: transform 0.5s linear 0s;
                -webkit-transition: -webkit-transform 0.5s linear 0s;
                -moz-transition: -moz-transform 0.5s linear 0s;
                -o-transition: -o-transform 0.5s linear 0s;
                transform: rotate(180deg);
                -moz-transform: rotate(180deg);
                -webkit-transform: rotate(180deg);
                -o-transform: rotate(180deg);
            }
        }
        h5 {
            color: #fff;
            font-weight: 400;
            font-size: 15px;
            font-family: "微软雅黑",tahoma,arial,sans-serif;
        }
    }
    .shj_index_team_ag_video_box {
        width: 366px;
        height: 203px;
        margin: 0px 17px;
        background: #fff;
        position: relative;
        display: none;
        .shj_index_team_ag_video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
        }
        .shj_index_team_ag_video_play {
            width: 60px;
            height: 60px;
            background: url('../../assets/icon.png') no-repeat;
            background-position: -19px -473px;
            position: absolute;
            top: 71.5px;
            left: 153px;
            cursor: pointer;
        }
    }
  }
}

.shj_index_team_list {
  width: 100%;
  height: 510px;
  float: left;
  margin-left: 30px;
  .shj_index_team_sjs_hover {
    width: inherit;
    height: 0px;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    background: rgba(20,118,86,0.9);
    overflow: hidden;
    transition: height 0.5s;
    -moz-transition: height 0.5s;
    -webkit-transition: height 0.5s;
    -o-transition: height 0.5s;
    color: #fff;
    line-height: 20px;
    h3{margin: 20px 0 8px; color: #fff;}
    h5{font-size: 14px; color: #fff;}
    h6 {color: #fff;}
  }
  li:hover .shj_index_team_sjs_hover {
     height: 105px;
  }
  li {
    width: 261px;
    height: 244px;
    float: left;
    position: relative;
    margin-left: 12.33px;
    cursor: pointer;
    overflow: hidden;
  }
  img {
    transition: transform 0.5s;
    -moz-transition: -moz-transform 0.5s;
    -webkit-transition: -webkit-transform 0.5s;
    -o-transition: -o-transform 0.5s;
    width: 262px;
    height: 245px;
  }
  .slide-trans-enter-active {
  transition: all .5s;
  }
  .slide-trans-enter {
    transform: translateX(900px);
  }
  .slide-trans-old-leave-active {
    transition: all .5s;
    transform: translateX(-900px);
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  li:hover .shj_index_team_sjs img{
    transform: scale(1.1,1.1);
    -moz-transform: scale(1.1,1.1);
    -webkit-transform: scale(1.1,1.1);
    -o-transform: scale(1.1,1.1);
  }
  li:nth-child(5), li:nth-child(6), li:nth-child(7), li:nth-child(8) {
    margin-top: 22px;
  }
}

</style>


