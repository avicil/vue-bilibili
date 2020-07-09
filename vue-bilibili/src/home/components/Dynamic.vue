<template>
  <div id="Dynamic">
    <div class="col-1" style="height:430px;">
      <a href="#" class="user-head"></a>
      <div class="small-item">
        <div><a href="#" style="font-size:16px;color:#222;line-height:1.7em">茂职院计算机工程系</a></div>
        <div><a href="#" style="font-size:12px;padding-top:4px;color:#99a2aa">05-04</a></div>
        <div class="zhuanfa">
          愿中国青年都摆脱冷气，只是向上走，不必听自暴自弃者流的话。能做事的做事，能发声的发声。有一分热，发一分光，就令萤火一般，也可以在黑暗里发一点光，不必等候炬火。此后如竟没有炬火：我便是唯一的光。
        </div>
        <div class="vi-box" style="padding:0 20px;">
          <div class="vi-b-header">
            <a href="#" class="v-logo"></a>
            <a href="#" class="v-danmu">哔哩哔哩弹幕网</a><span class="sp1">的投稿视频</span>
            <button>关注</button>
          </div>
          <div class="vi-tit">
            “向你们致敬！”B站献给新一代的青年宣言片《后浪》正式发布。带上tag
            <a href="#">#奔涌吧后浪#</a>聊聊观后感吧～今晚18:48分CCTV1《新闻联播》前会播出特别版，和爸妈一起看B站吧~
          </div>
          <div class="video-container" style="margin-top:8px">
            <a href="JavaScript:;" class="cover-normal">
              <img src="@/assets/img/Dynamic_img/houlang.jpg" alt="加载失败">
              <span class="length" >投稿视频</span>
              <span class="i-watchlater"></span>
            </a>
            <a href="JavaScript:;" class="title" style="height:40px;margin-top:10px">bilibili献给新一代的演讲《后浪》</a>
            <div class="v-content">请查收，B站献给新一代的青年宣言片。国家一级演员何冰走上舞台，以青年宣言《后浪》为词，认可、赞美与寄语年轻一代。在UP主们的青春混剪中，属于年轻人的光芒正在闪耀。“你们有幸 遇见这样的时代 但时代更有幸 遇见这样的你们”
            联合发布媒体：央视新闻、光明日报、中国青年报、环球时报、新京报、澎湃新闻、观察者网</div>
            <div class="meta">
                <span class="play">
                    <i class="icon"></i>2753.5万
                </span>
                <span class="time">
                    <i class="el-icon-tickets"></i>25.8万
                </span>
            </div>
          </div>
        </div>
        <div class="card" style="position: absolute;bottom: 0px;left: 88px;">
          <div class="card-data">
            <span>
              <i class="fa fa-share-square-o" aria-hidden="true"></i>
              <span>1</span>
            </span>
          </div>
          <div class="card-data">
            <span>
              <i class="el-icon-chat-dot-square" aria-hidden="true"></i>
              <span>评论</span>
            </span>
          </div>
          <div class="card-data">
            <span>
              <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
              <span>8</span>
            </span>
          </div>
        </div>
      </div>
      <div class="r-icon">
          <el-tooltip content="举报" placement="bottom" style="cursor:pointer;">
            <el-button style="border:none;cursor:pointer;"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></el-button>
          </el-tooltip>
      </div>
    </div>

    <div class="col-1">
      <a href="#" class="user-head"></a>
      <div class="small-item">
        <div><a href="#" style="font-size:16px;color:#222;line-height:1.7em">茂职院计算机工程系</a></div>
        <div><a href="#" style="font-size:12px;padding-top:4px;color:#99a2aa">04-04</a></div>
        <div class="content-full" style="color:#222">深切悼念抗疫烈士和遇难同胞。</div>
        <div style="width:456px;">
          <ul class="zoom-list">
            <li class="zoom-img1"><div></div></li>
            <li class="zoom-img2"><div></div></li>
            <li class="zoom-img3"><div></div></li>
          </ul>
        </div>
        <div class="card">
          <div class="card-data">
            <span>
              <i class="fa fa-share-square-o" aria-hidden="true"></i>
              <span>转发</span>
            </span>
          </div>
          <div class="card-data">
            <span>
              <i class="el-icon-chat-dot-square" aria-hidden="true"></i>
              <span>评论</span>
            </span>
          </div>
          <div class="card-data">
            <span>
              <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
              <span>8</span>
            </span>
          </div>
        </div>
      </div>
      <div class="r-icon">
          <el-tooltip content="举报" placement="bottom" style="cursor:pointer;">
            <el-button style="border:none;cursor:pointer;"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></el-button>
          </el-tooltip>
      </div>
    </div>


    <div class="col-1" v-for="(item,index) in videosLisy_one" :key="index">
      <a href="#" class="user-head"></a>
      <div class="small-item">
        <div><a href="#" style="font-size:16px;color:#222;line-height:1.7em">茂职院计算机工程系</a></div>
        <div><a href="#" style="font-size:12px;padding-top:4px;color:#99a2aa">{{item.monthday}}</a></div>
        <div class="content-full">{{item.title1}}</div>
        <div class="video-container">
          <a href="JavaScript:;" class="cover-normal"  @mouseover="mouseover(item)" @mouseleave="mouseleave(item)">
            <img :src="item.imgUrl" alt="加载失败">
            <span class="length"  v-if="item.show">投稿视频</span>
            <span class="i-watchlater" v-else></span>
          </a>
          <a href="JavaScript:;" class="title">{{item.title}}</a>
          <div class="v-content">{{item.vtitle}}</div>
          <div class="meta">
              <span class="play">
                  <i class="icon"></i>{{item.view}}
              </span>
              <span class="time">
                  <i class="el-icon-tickets"></i>3
              </span>
          </div>
        </div>
        <div class="card">
          <div class="card-data">
            <span>
              <i class="fa fa-share-square-o" aria-hidden="true"></i>
              <span>转发</span>
            </span>
          </div>
          <div class="card-data">
            <span>
              <i class="el-icon-chat-dot-square" aria-hidden="true"></i>
              <span>评论</span>
            </span>
          </div>
          <div class="card-data">
            <span>
              <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
              <span>8</span>
            </span>
          </div>
        </div>
      </div>
      <div class="r-icon">
          <el-tooltip content="举报" placement="bottom" style="cursor:pointer;">
            <el-button style="border:none;cursor:pointer;"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></el-button>
          </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.css';

export default {
    name: 'Dynamic',
    data () {
        return {
            news: true,
            visible:false,
            videosLisy_one: [
                 {
                    id: '0',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_videos/1.png'),
                    title: '广东省高校心理剧大赛一等奖——《你值得真正的快乐》',
                    title1:'#校园##心理剧##青春#',
                    vtitle:'我系18级数媒3班的范晓瑜、罗丹妮、邹淑娟和施凯静同学在心理中心陈盈老师的指导下自编、自演了心理情景剧《你值得真正的快乐》，荣获2019年度广东省高校心理剧征集活动一等奖。',
                    view:'449',
                    like: '4-4',
                    monthday:'05-04',
                    time:'07:33',
                    show: true
                },
                 {
                    id: '1',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_videos/2.png'),
                    title: '【学生作品】18数媒3班   Made in China——《面具》',
                    vtitle:'=3=学生作品，创作不易，请多多鼓励！',
                    view:'175',
                    like: '4-3',
                    time:'03:27',
                    monthday:'05-04',
                    show: true
                },
                 {
                    id: '2',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_videos/3.png'),
                    title: '【学生作品】18数媒2班   皮蛋瘦肉组——《巨婴》',
                    vtitle:'=3=学生作品，创作不易，请多多鼓励！',
                    view:'55',
                    like: '4-2',
                    time:'03:08',
                    monthday:'05-04',
                    show: true
                },
                 {
                    id: '3',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_videos/4.png'),
                    title: '【学生作品】18数媒4班   红果果——《责任》',
                    vtitle:'=3=学生作品，创作不易，请多多鼓励！',
                    view:'170',
                    like: '4-1',
                    time:'03:26',
                    monthday:'05-04',
                    show: true
                },
                 {
                    id: '4',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_videos/5.png'),
                    title: '【学生作品】18数媒1班   PLMM——《远距离 近距离》',
                    vtitle:'=3=学生作品，创作不易，请多多鼓励！',
                    view:'158',
                    like: '3-31',
                    time:'03:17',
                    monthday:'05-04',
                    show: true
                },
                 {
                    id: '5',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_videos/6.png'),
                    title: '【学生作品】18数媒1班   PLMM——《远距离 近距离》',
                    vtitle:'=3=学生作品，创作不易，请多多鼓励！',
                    view:'31',
                    like: '3-30',
                    time:'02:24',
                    monthday:'05-04',
                    show: true
                },
                 {
                    id: '6',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_videos/7.png'),
                    title: '【学生作品】18数媒4班  响亮亮——《Dejavu（既视感）》',
                    vtitle:'=3=学生作品，创作不易，请多多鼓励！',
                    view:'7924',
                    like: '3-30',
                    time:'03:38',
                    monthday:'05-04',
                    show: true
                },
                 {
                    id: '7',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_videos/8.png'),
                    title: '【学生作品】18数媒4班  造物组——《荒芜国度》',
                    vtitle:'=3=学生作品，创作不易，请多多鼓励！',
                    view:'8991',
                    like: '3-26',
                    time:'03:51',
                    monthday:'05-04',
                    show: true
                },
                 {
                    id: '8',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_videos/9.png'),
                    title: '【学生作品】18数媒4班  高大上小组——《不用很多 足够爱你》',
                    vtitle:'=3=学生作品，创作不易，请多多鼓励！',
                    view:'9999',
                    like: '2-25',
                    time:'03:02',
                    monthday:'05-04',
                    show: true
                },
                 {
                    id: '9',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_videos/10.png'),
                    title: '【学生作品】18数媒3班 小艾工作室——《自律》',
                    vtitle:'=3=学生作品，创作不易，请多多鼓励！',
                    view:'183',
                    like: '3-25',
                    time:'07:36',
                    monthday:'05-04',
                    show: true
                },
            ],
        }
    },
    methods: {
        // TA的视频
          // 移入
            mouseover(item) {
                item.show = false
        },
            // 移出
            mouseleave(item) {
                item.show = true
        },

        // TA的专栏
            // 移入
            mouseOver() {
                this.news = false
        },
            // 移出
            mouseLeave() {
                this.news = true
        }
    },
}
</script>

<style scoped>
    #Dynamic{
        width: 1280px;
        position: relative;
    }
    /* 左边主页 */
    .col-1{
        width: 912px;
        /* height: 300px; */
        background: #fff;
        border: 1px solid #eee;
        margin-bottom: 10px;
        border-radius: 4px;
        float: left;
        padding-top: 27px;
        position:relative;
    }
    /* 头像logo样式 */
    .user-head{
        background-image: url(../../assets/img/Dynamic_img/logo1.png);
        border-radius: 50%;
        display: block;
        position: absolute;
        width: 48px;
        height: 48px;
        top: 24px;
        left: 30px;

    }
    /* 头像logo样式 */

    /* logo右边top的样式 */
    .small-item{
        width: 600px;
        margin-left:88px;
        font-size: 12px;
    }
    /* logo右边top的样式 */

    /* 内容样式 */
    .zhuanfa{
      width: 500px;
      font-size: 14px;
      line-height: 24px;
      margin: 10px 0;
      position: relative;
    }
    .content-full{
        width: 100%;
        word-break: break-word;
        word-wrap: break-word;
        color: rgb(94, 189, 223);
        padding-right: 10px;
        font-size: 14px;
        height: 30px;
        line-height: 30px;
    }
    /* 内容样式 */

    /* 内容video样式 */
    .vi-box{
      width: 500px;
      height: 250px;
      /* text-align: center; */
      position: absolute;
      left: 70px;
      bottom: 50px;
      background-color: rgb(244,245,247);
    }
    .vi-b-header{
      width:100%;
      position: relative;
      margin-top: 10px;
    }
    .vi-b-header .v-logo{
      display: inline-block;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-image:url(../../assets/img/Dynamic_img/logo.jpg);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      line-height: 22px;
    }
    .v-danmu{
      display: inline-block;
      font-size: 14px;
      color: #00a1d6;
      line-height: 24px;
      vertical-align: top;
      padding:0 8px;
    }
    .vi-b-header .sp1{
      display: inline-block;
      font-size: 12px;
      color:#99a2aa;
      vertical-align: top;
      padding-top: 1px;
      line-height: 22px;
    }
    .vi-b-header button{
      position: absolute;
      right: 0;
      top: 0;
      width: 48px;
      height: 24px;
      color: #00a1d6;
      line-height: 24px;
      border:1px solid #00a1d6;
      border-radius: 4px;
      background: transparent;
    }
    .vi-tit{
      width: 100%;
      word-break: break-word;
      word-wrap: break-word;
      line-height: 22px;
      font-size: 14px;
      letter-spacing: 0.5px;
    }
    .vi-tit a{
      cursor: pointer;
      color: #00a1d6;
    }
    .video-container{
        width: 500px;
        height: 127px;
        position: relative;
        overflow: hidden;
        z-index: 1;
        text-align: left;
        border-radius: 4px;
        font-size: 14px;
        color: #222;
        border:1px solid #e5e9ef;
        background-color: #fff;
    }
    .zoom-list{
      text-align: left;
      vertical-align: top;
      margin: 4px 0 0 -4px;
    }
    .zoom-list li{
      width: 104px;
      height: 104px;
      display: inline-block;
      vertical-align: top;
      overflow: hidden;
      border-radius: 4px;
      background-size:cover;
      background-repeat: no-repeat;
      background-position: center center;
    }
    .zoom-img1{
        background-image:url(../../assets/img/Dynamic_img/zoom1.png);
    }
    .zoom-img2{
        background-image:url(../../assets/img/Dynamic_img/zoom2.png);
    }
    .zoom-img3{
        background-image:url(../../assets/img/Dynamic_img/zoom3.png);
    }
    /* 内容video样式 */

    /* 转发 评论 点赞样式 */
    .card{
        width:100%;
        height: 44px;
        line-height: 44px;
        color: #99a2aa;
    }
    .card .card-data{
        display: inline-block;
        width: 92px;
        line-height: 44px;
        font-size: 12px;
        cursor: pointer;
    }

    /* 转发 评论 点赞样式 */

    /* 右边的图标 */
    .r-icon{
        position: absolute;
        top: 33px;
        right: 20px;
        color: #a4aca7;
    }
    .r-icon:hover{
        color: rgb(94, 189, 223);
    }
    /* 右边的图标 */

    .cover-normal{
        float: left;
        border-radius: 4px;
        display: block;
        width: 203px;
        height: 127px;
        overflow: hidden;
        position: relative;
    }
    /* 图片 */
    .cover-normal img{
        border-radius: 4px;
        display: block;
        width: 203px;
        height: 127px;
    }
    /* img时间 */
    .length{
        z-index: 5;
        background: rgb(251,114,153);
        border-radius: 3px;
        color: #fff;
        line-height: 20px;
        padding: 0 6px;
        position: absolute;
        right: 8px;
        top: 8px;
        font-size: 12px;
    }
    /*  img时钟图标*/
    .i-watchlater{
        position: absolute;
        right: 6px;
        bottom: 4px;
        width: 22px;
        height: 22px;
        z-index: 5;
        background: url(../../assets/img/Homepage_Contribution_img/ta_videos/index.png) no-repeat;
    }
    .title{
        margin: 0 0 0 215px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient: vertical;
        display: block;
        line-height: 20px;
        overflow: hidden;
        color: #222;
    }
    .v-content{
        font-size: 12px;
        margin: 0 0 0 215px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient: vertical;
        line-height: 20px;
        overflow: hidden;
        color: #666;
    }
    /* 最下面小图标 */
    .meta{
        margin: 8px 0 0 222px;
        color: #999;
        white-space: nowrap;
        font-size: 0;
        height: 14px;
        line-height: 14px;
    }
    .meta span{
        display: inline-block;
        white-space: nowrap;
        height: 14px;
        line-height: 14px;
        font-size: 12px;
        overflow: hidden;
    }
    .play{
        width: auto;
        margin-right: 30px;
    }
    .play .icon{
        width: 16px;
        height: 14px;
        vertical-align: sub;
        background-position: -280px -25px;
        background-repeat: no-repeat;
        display: inline-block;
        background-image: url(../../assets/img/public/icons.png);
        }
    .video-desc{
        height: 36px;
        line-height: 18px;
        color: #99a2aa;
        overflow: hidden;
        display: block;
        margin: 6px 0 0 170px;
        white-space: normal;
    }

</style>
