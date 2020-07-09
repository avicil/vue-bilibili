<template>
  <div id="Contribution">
      <div class="contribution-sidenav">
           <div class="contribution-list-container">
            <el-menu default-active="1" class="el-menu-vertical-demo">
                <el-menu-item index="1" class="contribution-item" @click="page_videos">
                    <span slot="title" class="text">视频</span>
                    <span slot="title" class="num">21</span>
                </el-menu-item>
                <el-menu-item index="2" class="contribution-item" @click="page_audios">
                    <span slot="title" class="text">音频</span>
                    <span slot="title" class="num">0</span>
                </el-menu-item>
                <el-menu-item index="3" class="contribution-item" @click="page_columns">
                    <span slot="title" class="text">专栏</span>
                    <span slot="title" class="num">0</span>
                </el-menu-item>
                <el-menu-item index="4" class="contribution-item" @click="page_albums">
                    <span slot="title" class="text">相簿</span>
                    <span slot="title" class="num">4</span>
                </el-menu-item>
            </el-menu>
           </div>
      </div>
        <div class="main-content">
            <!-- TA的视频 -->
            <div v-show="page_video">
             <div class="page-head">
                <div class="breadcrumb">
                    <p class="item-cur">TA的视频</p>
                </div>
                <div class="v-filter-line">
                    <div class="be-tab">
                        <ul class="be-tab-inner">
                            <li class="be-tab-item">
                                <input type="radio" name="be-tab-4" class="be-tab-input" value="pubdate">
                                <span style="color: #00a1d6;">最新发布</span>
                            </li>
                            <li class="be-tab-item">
                                <input type="radio" name="be-tab-4" class="be-tab-input" value="click">
                                <span>最多播放</span></li>
                            <li class="be-tab-item">
                                <input type="radio" name="be-tab-4" class="be-tab-input" value="stow">
                                <span>最多收藏</span>
                            </li>
                        </ul>
                        <div class="be-tab-cursor"></div><!-- 下划线 -->
                    </div>
                    <div class="item-style">
                        <span class="icon cube"></span>
                        <span class="icon list"></span>
                    </div>
                </div>
            </div>
            <div id="submit-video-type-filter">
                <a class="active">全部<span class="count">21</span></a>
                <a class="" style="margin-right: 30px;">动画<span class="count">17</span></a>
                <a class="">生活<span class="count">4</span></a>
            </div>
            <div class="submit-video-list">
                <div class="fakeDanmu-item" v-for="(item,index) in videosLisy_one" :key="index" @mouseover="mouseover(item)" @mouseleave="mouseleave(item)">
                    <a href="JavaScript:;" class="coverss">
                        <img :src="item.imgUrl" alt="加载失败" class="videos_title">
                        <span class="lengths" v-if="item.show">{{item.time}}</span>
                        <span class="i-watchlaters" v-else></span>
                    </a>
                    <a href="JavaScript:;" class="titless">{{item.title}}</a>
                    <div class="metas">
                        <span class="plays">
                            <i class="icons"></i>{{item.view}}
                        </span>
                        <span class="times">
                            <i class="icons"></i>{{item.like}}
                        </span>
                    </div>
                  </div>
              </div>
             </div>
             <!-- TA的音频 -->
             <div v-show="page_audio">
                <div class="page-head">
                    <div class="breadcrumb">
                        <p class="item-cur">TA的音频</p>
                    </div>
                    <div class="v-filter-line">
                        <div class="be-tab">
                            <ul class="be-tab-inner">
                                <li class="be-tab-item">
                                    <input type="radio" name="be-tab-4" class="be-tab-input" value="pubdate">
                                    <span style="color: #00a1d6;">最新发布</span>
                                </li>
                                <li class="be-tab-item">
                                    <input type="radio" name="be-tab-4" class="be-tab-input" value="click">
                                    <span>最多播放</span></li>
                                <li class="be-tab-item">
                                    <input type="radio" name="be-tab-4" class="be-tab-input" value="stow">
                                    <span>最多收藏</span>
                                </li>
                            </ul>
                            <div class="be-tab-cursor"></div><!-- 下划线 -->
                        </div>
                    </div>
                </div>
                <div class="audio_img"></div> <!-- 空间主人还没有发布过音频 -->
            </div>
            <!-- 专栏文章-->
            <div v-show="page_column">
                <div class="page-head">
                    <div class="breadcrumb">
                        <p class="item-cur">专栏文章</p>
                    </div>
                    <div class="v-filter-line">
                        <div class="be-tab">
                            <ul class="be-tab-inner">
                                <li class="be-tab-item">
                                    <input type="radio" name="be-tab-4" class="be-tab-input" value="pubdate">
                                    <span style="color: #00a1d6;">最新发布</span>
                                </li>
                                <li class="be-tab-item">
                                    <input type="radio" name="be-tab-4" class="be-tab-input" value="click">
                                    <span>最多阅读</span></li>
                                <li class="be-tab-item">
                                    <input type="radio" name="be-tab-4" class="be-tab-input" value="stow">
                                    <span>最多收藏</span>
                                </li>
                            </ul>
                            <div class="be-tab-cursor"></div><!-- 下划线 -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- TA的相簿 -->
            <div v-show="page_album">
                <div class="page-head">
                    <div class="breadcrumb">
                        <p class="item-cur">TA的相簿</p>
                    </div>
                </div>
                <div id="submit-video-type-filter">
                    <a class="active">全部<span class="count">4</span></a>
                    <a class="">日常<span class="count">4</span></a>
                </div>
                <!-- 小格子 -->
                <div class="album">
                <div class="album-wrapper">
                    <div class="album-item" v-for="(item,index) in AlbumList" :key="index">
                        <a href="JavaScript:;" class="album-top">
                            <img :src="item.imgUrl" alt="加载失败" class="album-img">
                            <div class="album-count">{{item.id}}</div>
                        </a>
                        <a href="JavaScript:;" class="album-title">{{item.title}}</a>
                        <div class="meta-col">
                            <span title="访问量" class="view">
                                <i class="icon"></i>{{item.view}}
                            </span>
                            <span title="喜欢数" class="like">
                                <i class="icon"></i>{{item.like}}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'Contribution',
    data () {
        return {
            // TA的视频
            page_video:true,
            // 音频
            page_audio:false,
            // 专栏
            page_column:false,
            // 相簿
            page_album:false,
            videosLisy_one: [
                 {
                    id: '0',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_videos/1.png'),
                    title: '广东省高校心理剧大赛一等奖——《你值得真正的快乐》',
                    view:'449',
                    like: '4-4',
                    time:'07:33',
                    show: true
                },
                 {
                    id: '1',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_videos/2.png'),
                    title: '【学生作品】18数媒3班   Made in China——《面具》',
                    view:'170',
                    like: '4-3',
                    time:'03:27',
                    show: true
                },
                 {
                    id: '2',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_videos/3.png'),
                    title: '【学生作品】18数媒2班   皮蛋瘦肉组——《巨婴》',
                    view:'54',
                    like: '4-2',
                    time:'03:08',
                    show: true
                },
                 {
                    id: '3',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_videos/4.png'),
                    title: '【学生作品】18数媒4班   红果果——《责任》',
                    view:'196',
                    like: '4-1',
                    time:'03:26',
                    show: true
                },
                 {
                    id: '4',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_videos/5.png'),
                    title: '【学生作品】18数媒1班   PLMM——《远距离 近距离》',
                    view:'157',
                    like: '3-31',
                    time:'03:17',
                    show: true
                },
                 {
                    id: '5',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_videos/6.png'),
                    title: '【学生作品】18数媒1班   PLMM——《远距离 近距离》',
                    view:'31',
                    like: '3-30',
                    time:'02:24',
                    show: true
                },
                 {
                    id: '6',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_videos/7.png'),
                    title: '【学生作品】18数媒4班  响亮亮——《Dejavu（既视感）》',
                    view:'7924',
                    like: '3-30',
                    time:'03:38',
                    show: true
                },
                 {
                    id: '7',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_videos/8.png'),
                    title: '【学生作品】18数媒4班  造物组——《荒芜国度》',
                    view:'8991',
                    like: '3-26',
                    time:'03:51',
                    show: true
                },
                 {
                    id: '8',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_videos/9.png'),
                    title: '【学生作品】18数媒4班  高大上小组——《不用很多 足够爱你》',
                    view:'9999',
                    like: '2-25',
                    time:'03:02',
                    show: true
                },
                 {
                    id: '9',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_videos/10.png'),
                    title: '【学生作品】18数媒3班 小艾工作室——《自律》',
                    view:'183',
                    like: '3-25',
                    time:'07:36',
                    show: true
                },
                {
                    id: '10',
                    imgUrl: require('@/assets/img/Channel_img/img.jpg'),
                    title: '【学生作品】16级数字媒体1班 陈佩璇——《逐流》',
                    view:'503',
                    like: '3-13',
                    time:'03:36',
                    show: true
                }
            ],
             // TA的相簿 
            AlbumList: [
                {
                    id: '3P',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_album/album_one.jpg'),
                    title: '深切悼念抗疫烈士和遇难同胞。',
                    view:'1936',
                    like: '912'
                },
                {
                    id: '9P',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_album/album_two.jpg'),
                    title: '【投稿】茂职院最美的秋天，随手一拍就是蔚蓝的天空！！[惊喜][惊喜][惊喜]（投稿人：计算机工程系18软件4班李灿欣）',
                    view:'90055',
                    like: '999'
                },
                {
                    id: '9P',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_album/album_three.jpg'),
                    title: '[tv_斜眼笑]多么有艺术气息的作业啊～',
                    view:'463',
                    like: '56'
                },
                {
                    id: '8P',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_album/album_four.png'),
                    title: '我已成为哔哩哔哩第68456571位转正会员，挑战转正答题考试获得74分，获得"学霸"挂件，有效期21天。',
                    view:'560',
                    like: '15'
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
        // TA的视频
        page_videos() {     
            this.page_video = true
            this.page_audio = false
            this.page_column = false
            this.page_album = false
        },
        // 音频
        page_audios() {
            this.page_video = false
            this.page_audio = true
            this.page_column = false
            this.page_album = false
        },
        // 专栏
        page_columns() {
            this.page_video = false
            this.page_audio = false
            this.page_column = true
            this.page_album = false
        },
        // 相簿
        page_albums() {
            this.page_video = false
            this.page_audio = false
            this.page_column = false
            this.page_album = true
        },
    }
}
</script>

<style scoped>
    #Contribution{
        margin: 0 auto;
        position: relative;
        background: #fff;
        box-shadow: 0 0 0 1px #eee;
        border-radius: 4px;
        display: block;
        display: flex; 
    }
        /* 左边导航栏 */
        .contribution-sidenav{
            position: relative;
            float: left;
            width: 210px;
            margin-right: -1px;
            font-size: 14px;
            color: #222;
            box-sizing: border-box;
        }
            .contribution-list-container{
                position: relative;
                max-height: 420px;
                margin: 10px 0 20px;
                overflow: hidden;
            }
                .el-menu-vertical-demo{
                    font-size: 14px;
                    color: #222;
                }
                    .contribution-item{
                        height: 44px;
                        position: relative;
                        white-space: nowrap;
                        overflow: hidden;
                        line-height: 44px;
                    }
                        .text{
                            padding-left: 10px;
                            font-weight: 500;
                            width: 130px;
                            display: inline-block;
                            line-height: 44px;
                            margin-right: 5px;
                            font-size: 14px;
                            vertical-align: middle;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        .num{
                            display: inline-block;
                            width: 32px;
                            font-size: 12px;
                            color: #99a2aa;
                            vertical-align: middle;
                            text-align: center;
                            font-family: Arial;
                        }
                        .el-menu-item.is-active {
                            background-color: #00a2d1;
                            transition: all 1s;
                        }
                        .el-menu-item.is-active span{
                           color: #fff!important;
                        }
        /*右边内容块 */
        .main-content{
            padding: 20px;
            width: 1070px;
            border-left: 1px solid #eee;
            border-bottom: none;
            margin-bottom: 0;
        }
        /* TA的视频 */
      .page-head{
            position: relative;
            display: block;
      }
        .breadcrumb{
            line-height: 24px;
        }
            .item-cur{
                color: #222;
                display: inline-block;
                font-size: 18px;
                vertical-align: middle;
            }
                .v-filter-line{
                    position: absolute;
                    top: 0;
                    right: 0;
                    display: block;
                }
                    .be-tab{
                        float: left;
                        position: relative;
                    }
                        .be-tab-inner{
                            display: block;             
                        }
                            .be-tab-item{
                                float: left;
                                font-size: 14px;
                                margin-right: 20px;
                                line-height: 28px;
                                cursor: pointer;
                                position: relative;
                            }
                                .be-tab-input{
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 100%;
                                    margin: 0;
                                    background: #ff3c3c;
                                    opacity: 0;
                                    cursor: pointer;
                                }
                        .be-tab-cursor{
                                transform: translateX(0px); 
                                width: 56px;
                                position: absolute;
                                bottom: 0;
                                height: 0;
                                left: 0;
                                border-bottom: 1px solid #00a1d6;
                        }
                                .be-tab-cursor::after{
                                    position: absolute;
                                    bottom: 0;
                                    height: 0;
                                    width: 0;
                                    content: "";
                                    left: 50%;
                                    transform: translateX(-50%);
                                    margin-left: -3px;
                                    border-bottom: 3px solid #00a1d6;
                                    border-top: 0;
                                    border-left: 3px solid transparent;
                                    border-right: 3px solid transparent;
                                }
                    .item-style{
                        margin-top: 6px;
                        float: left;
                        margin-left: 30px;
                    }
                        .icon{
                            cursor: pointer;
                            display: block;
                            float: left;
                            width: 18px;
                            height: 18px;
                            background-repeat: no-repeat;
                        }
                        .cube{
                            background-image: url(//s1.hdslb.com/bfs/static/jinkela/space/asserts/icons.png);
                            margin-right: 15px;
                            background-position: -469px -151px;
                        }
                        .list{
                            background-position: -341px -217px;
                            background-image: url(//s1.hdslb.com/bfs/static/jinkela/space/asserts/icons.png);
                        }
        #submit-video-type-filter{
            font-size: 12px;
            background: #edf2f9;
            border-radius: 4px;
            line-height: 36px;
            margin: 18px 0 10px;
            padding: 0 20px;
        }
            .active{
                display: inline-block;
                margin-right: 30px;
                cursor: pointer;
                color: #00a1d6;
            }
                .count{
                    color: #aaa;
                    margin-left: 8px;
                }
                /* TA的视频小格子代码 */
        .submit-video-list{
            margin-left: -10px;
            position: relative;
        }
            .videos{
                max-height: 380px;
                overflow: hidden;
                display: block;
            }
                .fakeDanmu-item{
                    display: block;
                    float: left;
                    width: 190px;
                    position: relative;
                    margin: 0 0 3px;
                    padding: 9px;
              }
                .coverss{
                    border-radius: 4px;
                    display: block;
                    width: 190px;
                    height: 119px;
                    overflow: hidden;
                    position: relative;
                }
                    .videos_title{
                        border-radius: 4px;
                        display: block;
                        width: 190px;
                        height: 119px;
                    }
                    /* 时间 */
                    .lengths{
                        z-index: 5;
                        background: rgba(0,0,0,.5);
                        border-radius: 5px 0 0 0;
                        color: #fff;
                        line-height: 20px;
                        padding: 0 6px;
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        font-size: 12px;
                    }
                    /* 小闹钟 */
                    .i-watchlaters{
                    /* display: none; */
                    position: absolute;
                    right: 6px;
                    bottom: 4px;
                    width: 22px;
                    height: 22px;
                    z-index: 5;
                    font-size: 12px;
                    background: url(../../assets/img/Homepage_Contribution_img/ta_videos/index.png) no-repeat;                       
                    }
                    /* 文字说明 */
                .titless{
                    display: block;
                    line-height: 20px;
                    height: 38px;
                    margin-top: 6px;
                    overflow: hidden;
                    font-size: 12px;
                    color: #000;
                }
                    .titless:hover{
                                 color: #00a1d6!important;
                            }
                /* 最下面小图标 */
                .metas{
                    color: #999;
                    white-space: nowrap;
                    font-size: 0;
                    margin-top: 6px;
                    height: 14px;
                    line-height: 14px;
                    font-size: 12px;
                }
                    .plays{
                        display: inline-block;
                        white-space: nowrap;
                        height: 14px;
                        line-height: 14px;
                        font-size: 12px;
                        overflow: hidden;
                        width: 72px;
                    }
                        .plays .icons{
                            width: 16px;
                            height: 14px;
                            vertical-align: sub;
                            background-position: -280px -25px;
                            background-repeat: no-repeat;
                            display: inline-block;
                            background-image: url(//s1.hdslb.com/bfs/static/jinkela/space/asserts/icons.png);
                        }
                    .times{
                        display: inline-block;
                        white-space: nowrap;
                        height: 14px;
                        line-height: 14px;
                        font-size: 12px;
                        overflow: hidden;
                    }
                       .times .icons{
                            width: 16px;
                            height: 14px;
                            vertical-align: sub;
                            background-position: -280px -474px;
                            background-repeat: no-repeat;
                            display: inline-block;
                            background-image: url(//s1.hdslb.com/bfs/static/jinkela/space/asserts/icons.png);
                        }
            /* ------------------TA的音频 */            
        .audio_img{
            width: 100%;
        }  
            .audio_img::after{
                background-image: url(//s1.hdslb.com/bfs/static/jinkela/space/asserts/nodata02.png);
                background-position: 50%;
                background-repeat: no-repeat;
                border-radius: 4px;
                color: #6d757a;
                content: "\7A7A\95F4\4E3B\4EBA\8FD8\6CA1\6709\53D1\5E03\8FC7\97F3\9891\54E6~~";
                /*  中文转换字符串utf-8*/
                display: block;
                font-size: 14px;
                height: 450px;
                overflow: hidden;
                line-height: 640px;
                text-align: center;
            }
          /*TA的相簿  */
        .album{
            max-height: 400px;
            overflow: hidden;
            display: block;
        }
            .album-wrapper{
                margin-left: -20px;
            }
                .album-item{
                    width: 190px;
                    height: 143px;
                    display: inline-block;
                    margin-bottom: 20px;
                    margin-left: 20px;
                }
                    .album-top{
                        display: block;
                        width: 100%;
                        height: 143px;
                        position: relative;
                        background: #d8d8d8;
                        cursor: pointer;
                    }
                        .album-img{
                            width: 100%;
                            height: 100%;
                            border-radius: 4px;
                        }
                        .album-count{
                            width: 40px;
                            height: 20px;
                            background: rgba(36,33,46,.3);
                            border-radius: 4px;
                            position: absolute;
                            bottom: 8px;
                            right: 8px;
                            text-align: center;
                            line-height: 20px;
                            font-size: 12px;
                            color: #fff;
                            font-weight: 540;
                        }
                    .album-title{
                        display: block;
                        width: 160px;
                        height: 35px;
                        font-size: 12px;
                        color: #222;
                        cursor: pointer;
                        overflow: hidden;
                        position: relative;
                        top: 5px;
                    }
                        .album-title:hover{
                                color: #00a1d6;
                        }
                    .meta-col{
                        margin-top: 10px;
                        height: 14px;
                        line-height: 14px;
                        white-space: nowrap;
                        color: #999;
                    }
                        .view{
                            margin-right: 45px;
                            display: inline-block;
                            font-size: 12px;
                            overflow: hidden;
                            height: 14px;
                            line-height: 14px;
                            white-space: nowrap;
                        }
                            .view .icon{
                                background-position: -345px -282px;
                                width: 16px;
                                height: 14px;
                                margin-right: 3px;
                                vertical-align: sub;
                                background-repeat: no-repeat;
                                display: inline-block;
                                background-image: url(../../assets/img/public/icons.png);
                            }
                        .like{
                            margin-right: 45px;
                            display: inline-block;
                            font-size: 12px;
                            overflow: hidden;
                            height: 14px;
                            line-height: 14px;
                            white-space: nowrap;
                        }
                            .like .icon{
                                background-position: -472px -282px;
                                width: 16px;
                                height: 14px;
                                margin-right: 3px;
                                vertical-align: sub;
                                background-repeat: no-repeat;
                                display: inline-block;
                                background-image: url(../../assets/img/public/icons.png);
                            }
</style>