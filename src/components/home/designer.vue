<template>
  <div class="designer-contain">
    <!-- 默认第一个为大长图，后面的为竖排显示的两张图 -->
    <div class="shj_index_team_ag">
      <img src="http://www.shj.cn/statics/2017/images/ag.jpg" alt="" width="100%">
      <div class="shj_index_team_ag_hover" data-v="close">
        <div class="shj_index_team_ag_bg">
          <img src="http://www.shj.cn/statics/2017/images/agbg.png" alt="" class="shj_index_team_ag_bgimg" id="shj_team_bgimg1" style="left: 0px;"><img src="http://www.shj.cn/statics/2017/images/agbg.png" alt="" class="shj_index_team_ag_bgimg" id="shj_team_bgimg2" style="left: 407.5px;"><img src="http://www.shj.cn/statics/2017/images/agbg2.png" alt="" class="shj_index_team_ag_bgimg" id="shj_team_bgimg3" style="left: 0px;"><img src="http://www.shj.cn/statics/2017/images/agbg2.png" alt="" class="shj_index_team_ag_bgimg" id="shj_team_bgimg4" style="left: 407.5px;">
        </div>
      </div>
		</div>
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
export default {
  props: {
    designers: {
      type: Object,
      default: function () {
        return {
          mainImage: {
            imageURL: 'http://www.shj.cn/statics/2017/images/ag.jpg'
          },
          images: [
            {
              id: 0,
              imageURL: 'http://www.shj.cn/uploadfile/2017/12/20170412022145162.jpg',
              name: '金权',
              position: '生活家装饰-主任设计师',
              description: '作品：10套   经验：8年',
              href: 'http://wh.shj.cn/shejishi/1659.html'
            },
            {
              id: 0,
              imageURL: 'http://www.shj.cn/uploadfile/2017/04/20170604111812545.jpg',
              name: '包巍',
              position: '生活家装饰-首席设计师',
              description: '作品：14套   经验：10年',
              href: 'http://wh.shj.cn/shejishi/1535.html'
            },
            {
              id: 0,
              imageURL: 'http://www.shj.cn/uploadfile/2017/04/20170604112222574.png',
              name: '陈杰',
              position: '生活家装饰-首席设计师',
              description: '作品：186套   经验：8年',
              href: 'http://wh.shj.cn/shejishi/812.html'
            },
            {
              id: 0,
              imageURL: 'http://www.shj.cn/uploadfile/2017/23/20170323054554746.jpg',
              name: '易 华',
              position: '生活家装饰-首席设计师',
              description: '作品：5套   经验：12年',
              href: 'http://wh.shj.cn/shejishi/1645.html'
            },
            {
              id: 0,
              imageURL: 'http://www.shj.cn/uploadfile/2017/25/20170325035612698.jpg',
              name: '翟从武',
              position: '生活家装饰-主任设计师',
              description: '作品：10套   经验：10年',
              href: 'http://wh.shj.cn/shejishi/1651.html'
            },
            {
              id: 0,
              imageURL: 'http://www.shj.cn/uploadfile/2017/09/20170309112459745.jpg',
              name: '冯岚',
              position: '生活家装饰-设计总监',
              description: '作品：56套   经验：15年',
              href: 'http://wh.shj.cn/shejishi/1581.html'
            }
          ]
        }
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    go () {
      let img1 = document.getElementById('shj_team_bgimg1')
      let img2 = document.getElementById('shj_team_bgimg2')
      let img3 = document.getElementById('shj_team_bgimg3')
      let img4 = document.getElementById('shj_team_bgimg4')
      setInterval(() => {
        if (parseFloat(img1.style.left) > -407.5) {
          img1.style.left = parseFloat(img1.style.left) - 0.25 + 'px'
        } else {
          img1.style.left = '407.5px'
        }
        if (parseFloat(img2.style.left) > -407.5) {
          img2.style.left = parseFloat(img2.style.left) - 0.25 + 'px'
        } else {
          img2.style.left = '407.5px'
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
    }
  },
  mounted () {
    this.go()
  }
}
</script>

<style lang="less">
.esigner-contain {
  width: inherit;
  height: 100%;
  padding: 30px 0;
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
        &#shj_team_bgimg2,&#shj_team_bgimg4{
          left: 407.5px;
        }
      }
    }
  }
}

.shj_index_team_list {
  width: 820px;
  height: 510px;
  float: left;
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
  li:nth-child(4), li:nth-child(5), li:nth-child(6) {
    margin-top: 22px;
  }
}

</style>


