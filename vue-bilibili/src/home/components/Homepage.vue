<template>
  <div id="Homepage">
      <div class="col-1">
          <div class="section video">
              <!-- 导航栏 -->
              <h3 class="section_titles">
                <router-link to="/contribution" tag="a" class="TA">TA的视频</router-link>
                <span class="count">20</span>
                <router-link to="/contribution" tag="a" class="more">更多</router-link>
                <div class="be-tab">
                    <ul class="be-tab-inner">
                        <li class="be-tab-item">最新发布</li>
                        <li class="be-tab-item">最多播放</li>
                        <li class="be-tab-item">最多收藏</li>
                    </ul>
                    <div class="be-tab-cursor" style="transform: translateX(0px); width: 48px;"></div> <!-- //蓝色导航栏下划线 -->
                </div>
              </h3>
              <!-- TA的视频 -->
            <div class="sectionss videos">
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
          <!-- TA的专栏 -->
          <div class="section article">
               <h3 class="section_titles">
                <router-link to="/contribution" tag="a" class="TA">TA的专栏</router-link>
            </h3>
          </div>
          <div class="sectionss channel column">
                <div class="content">
                    <div class="channel-item">
                        <div class="channel-title">
                            <a href="JavaScript:;" class="channel-name">学生作品-视频</a>
                            <span class="count">1</span>
                        <div class="section-right-options">
                            <span class="i-watchlater-channel operation">稍后再看</span>
                            <a href="JavaScript:;" class="mores">更多</a>
                        </div>
                    </div>
                    <div class="channel-video">
                        <div class="small-item">
                            <a href="JavaScript:;" class="cover-normal" @mouseover="mouseOver" @mouseleave="mouseLeave">
                                <img src="@/assets/img/Channel_img/img.jpg" alt="加载失败">
                                <span class="length" v-if="news">03:23</span>
                                <span class="i-watchlater" v-else></span>
                            </a>
                            <a href="JavaScript:;" class="title">【学生作品】16级数字媒体1班 陈佩璇——《逐流》</a>
                        <div class="meta">
                            <span class="play">
                                <i class="icon"></i>498
                            </span>
                            <span class="time">
                                <i class="icon"></i>3-13
                            </span>
                        </div>
                        <div title="=3=学生创作不易，请多多鼓励哦！" class="video-desc">=3=学生创作不易，请多多鼓励哦！</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
          <!-- TA的收藏夹 -->
          <div class="sectionss section_fav">
              <h3 class="section_titles">
                <router-link to="/contribution" tag="a" class="TA">TA的收藏夹</router-link>
                <span class="count">3</span>
                <router-link to="/contribution" tag="a" class="more">更多</router-link>
            </h3>
            <div class="favorites">
                <div class="fav-item" v-for="(item,index) in FavList" :key="index">
                    <a href="JavaScript:;" class="fav-covers">
                        <img :src="item.imgUrl" alt="加载失败">
                    </a>
                    <span class="fav-count">{{item.id}}</span>
                    <div>
                        <a href="JavaScript:;" class="names">{{item.title}}</a>
                    </div>
                </div>
            </div>
         </div>
          <!-- TA的相簿 -->
        <div class="albums">
            <h3 class="section_titles">
                 <router-link to="/contribution" tag="a" class="TA">TA的相簿</router-link>
                <span class="count">4</span>
                 <router-link to="/contribution" tag="a" class="more">更多</router-link>
            </h3>
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
      <!-- 右边 -->
      <div class="col-2">
          <div class="sections">
              <span class="auth-description">
                <a href="JavaScript:;" class="auth-icon"></a>
                bilibili机构认证：茂职计算机系官方账号
              </span>
          </div>
          <div class="sections">
              <h3 class="section-title">公告</h3>
              <div class="contents">
                =3=进来了不关注一下吗？
              </div>
          </div>
          <div class="sections">
            <h3 class="section-title">直播间</h3>
            <div class="i-live-fo">
                <span class="i-live-fo-btn">关注直播间</span>
                <span class="i-live-fo-count">234</span>
            </div>
            <div class="i-live-off-guest">
                <div class="i-live-unfod">
                    <p>主播不在，关注后就能在动态收到开播的通知哦~</p>
                    <a href="JavaScript:;" target="_blank">
                        前往TA的直播间
                       <span class="r-arrow icon i-live-arrow"></span>
                    </a>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Homepage',
    data () {
        return {
            news: true,
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
            // TA的收藏夹
             FavList: [
                {
                    id:'2',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_favorites/fav_one.jpg'),
                    title: '默认收藏',
                },
                {
                    id:'5',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_favorites/fav_two.jpg'),
                    title: '校园',
                },
                {
                    id:'4',
                    imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_favorites/fav_three.jpg'),
                    title: '茂名风光',
                },
            ]
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
    #Homepage{
        width: 1280px;
        position: relative;
    }
    /* 左边主页 */
        .col-1{
            width: 880px;
            background: #fff;
            border: 1px solid #eee;
            border-radius: 4px;
            float: left;
            padding: 15px 20px;
        }
        /* TA的视频 */
            .videos{
                max-height: 380px;
                overflow: hidden;
                display: block;
            }
                .fakeDanmu-item{
                    padding-left: 0;
                    display: block;
                    float: left;
                    width: 160px;
                    position: relative;
                    margin: 0 0 3px;
                    padding: 8px;
              }
                .coverss{
                    border-radius: 4px;
                    display: block;
                    width: 160px;
                    height: 100px;
                    overflow: hidden;
                    position: relative;
                }
                    .videos_title{
                        border-radius: 4px;
                        display: block;
                        width: 160px;
                        height: 100px;
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
        /* TA的专栏 */
            .article{
                border-bottom: 1px solid #eee;
                margin-bottom: 17px;
                position: relative;
            }
                .channel-item{
                    padding-bottom: 0;
                    margin-bottom: 0;
                    border-bottom: none;
                }
                    .channel-title{
                        position: relative;
                        height: 24px;
                        line-height: 24px;
                        font-size: 0;
                    }
                        .channel-name{
                            font-size: 20px;
                            color: #000;
                            display: inline-block;
                            vertical-align: middle;
                        }
                    .section-right-options{
                            float: right;
                            height: 24px;
                    }
                        .i-watchlater-channel{
                                margin-left: 10px;
                                padding: 0 7px 0 23px;
                                background-position: -404px -1172px;
                                cursor: pointer;
                        }
                        .operation{
                                display: inline-block;
                                background-image: url(../../assets/img/public/icons.png);
                                border: 1px solid #b8c0cc;
                                border-radius: 4px;
                                color: #6d757a;
                                font-size: 12px;
                                line-height: 22px;
                                transition: border .2s ease;
                        }
                            .operation:hover{
                                 color: #00a1d6;
                                 border: 1px solid #00a1d6;
                            }
                        .mores{
                            background-position: -310px -405px;
                            position: static;
                            top: auto;
                            right: auto;
                            margin-left: 10px;
                            display: inline-block;
                            background-image: url(../../assets/img/public/icons.png);
                            border: 1px solid #b8c0cc;
                            border-radius: 4px;
                            color: #6d757a;
                            font-size: 12px;
                            line-height: 22px;
                            transition: border .2s ease;
                            padding: 0 19px 0 10px;
                        }
                            .mores:hover{
                                 color: #00a1d6;
                                 border: 1px solid #00a1d6;
                            }
                .channel-video{
                        white-space: nowrap;
                        overflow: hidden;
                        font-size: 0;
                        display: block;
                }
                    .small-item{
                            padding-right: 0;
                            padding-left: 0;
                            width: 100%;
                            box-sizing: border-box;
                            float: none;
                            display: inline-block;
                            font-size: 12px;
                            position: relative;
                            margin: 0 0 3px;
                            padding: 10px 10px 10px 0px;
                    }
                        .cover-normal{
                            float: left;
                            border-radius: 4px;
                            display: block;
                            width: 160px;
                            height: 100px;
                            overflow: hidden;
                            position: relative;
                        }
                        /* 图片 */
                            .cover-normal img{
                                    border-radius: 4px;
                                    display: block;
                                    width: 160px;
                                    height: 100px;
                            }
                            /* img时间 */
                            .length{
                                    z-index: 5;
                                    background: rgba(0,0,0,.5);
                                    border-radius: 5px 0 0 0;
                                    color: #fff;
                                    line-height: 20px;
                                    padding: 0 6px;
                                    position: absolute;
                                    right: 0;
                                    bottom: 0;
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
                        height: 20px;
                        margin: 0 0 0 170px;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        display: block;
                        line-height: 20px;
                        overflow: hidden;
                        color: #000;
                    }
                    .title:hover{
                                 color: #00a1d6!important;
                            }
                            /* 最下面小图标 */
                .meta{
                    margin: 8px 0 0 170px;
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
                .time{
                    margin-right: 0;
                }
                    .time{
                        background-position: -280px -474px;
                        background-repeat: no-repeat;
                        display: inline-block;
                        background-image: url(../../assets/img/public/icons.png);
                        width: 16px;
                        height: 14px;
                        vertical-align: sub;
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
        /* TA的收藏夹 */
            .section_fav{
                display: block;
                width: 880px;
                height: 270px;
            }
            .favorites{
                display: block;
            }
                .fav-item{
                    position: relative;
                    float: left;
                    margin: 0 20px 28px 0;
                }
                    .fav-covers{
                        border: 1px solid #ccd0d7;
                        border-radius: 4px;
                        display: block;
                        width: 152px;
                        height: 152px;
                        margin-bottom: 11px;
                        overflow: hidden;
                    }
                        .fav-covers img {
                            width: 100%;
                            height: 152px;
                            object-fit: cover;
                            object-position: 50%;
                        }
                    .fav-count{
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        min-width: 12px;
                        padding: 0 9px;
                        line-height: 18px;
                        text-align: center;
                        font-family: Arial;
                        color: #fff;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        background: rgba(0,0,0,.5);
                        border-radius: 9px;
                    }
                    .names{
                        display: block;
                        font-size: 18px;
                        font-family: Microsoft Yahei UI Light,Microsoft Yahei Light;
                        line-height: 24px;
                        width: 7em;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        color: #000;
                    }
                        .names:hover {
                            color: #00a1d6;
                        }
        /* TA的相簿 */
        .albums{
            width: 880px;
            height: 255px;
            position: relative;
        }
            .album{
                max-height: 400px;
                overflow: hidden;
                display: block;
            }
                .album-wrapper{
                    margin-left: -20px;
                }
                    .album-item{
                        width: 160px;
                        height: auto;
                        display: inline-block;
                        margin-bottom: 20px;
                        margin-left: 20px;
                    }
                        .album-top{
                            display: block;
                            width: 100%;
                            height: 120px;
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
        /* 公共样式 */
            .sectionss{
                border-bottom: 1px solid #eee;
                margin-bottom: 17px;
                position: relative;
            }
            .section_titles{
                color: #000;
                font-size: 20px;
                font-weight: 400;
                line-height: 33px;
                padding: 0 0 15px;
                position: relative;
            }
                .TA{
                    display: inline-block;
                    vertical-align: middle;
                    color: inherit;
                }
                .count{
                    background: #f7f7f7;
                    border: 1px solid #ddd;
                    border-radius: 3px;
                    color: #777;
                    display: inline-block;
                    font-size: 12px;
                    line-height: 18px;
                    height: 20px;
                    margin-left: 8px;
                    padding: 0 5px;
                    position: relative;
                    vertical-align: middle;
                }
                .count::before{
                    background-image: url(../../assets/img/public/icons.png);
                    position: absolute;
                    background-position: -215px -340px;
                    content: "";
                    display: block;
                    left: -7px;
                    top: -3px;
                    height: 22px;
                    width: 10px;
                }
                .more{
                    background-position: -310px -405px;
                    border: 1px solid #b8c0cc;
                    border-radius: 4px;
                    color: #6d757a;
                    font-size: 12px;
                    line-height: 22px;
                    transition: border .2s ease;
                    padding: 0 19px 0 10px;
                    position: absolute;
                    top: 6px;
                    right: 0;
                    background-image: url(../../assets/img/public/icons.png);
                }
                .more:hover{
                    color: #00a1d6;
                    border: 1px solid #00a1d6;
                }
                 /* 公共样式end */
                .be-tab{
                    display: inline-block;
                    line-height: 18px;
                    vertical-align: middle;
                    margin-left: 10px;
                    position: relative;
                }
                    .be-tab-inner{
                        padding: 0;
                        margin: 0;
                    }
                        .be-tab-item{
                            padding: 0 0 3px;
                            margin-right: 15px;
                            font-size: 12px;
                            float: left;
                            line-height: 28px;
                            cursor: pointer;
                        }
                    .be-tab-cursor{
                        width: 48px;
                        position: absolute;
                        bottom: 0;
                        height: 0;
                        left: 0;
                        border-bottom: 1px solid #00a1d6;
                        transform: translateX(0);
                    }
                    .be-tab-cursor::after{
                        content: "";
                        left: 50%;
                        transform: translateX(-50%);
                        margin-left: -3px;
                        border-bottom: 3px solid #00a1d6;
                        border-top: 0;
                        border-left: 3px solid transparent;
                        border-right: 3px solid transparent;
                        position: absolute;
                        bottom: 0;
                        height: 0;
                        width: 0;

                    }
    /* 右边 bilibili机构认证：茂职计算机系官方账号*/
        .col-2{
            float: right;
            width: 350px;
        }
            .sections{
                background: #fff;
                border: 1px solid #eee;
                border-radius: 4px;
                padding: 15px 20px 18px;
                margin-bottom: 10px;
            }
                .auth-description{
                    width: 320px;
                    line-height: 20px;
                    display: inline-block;
                    font-size: 14px;
                    color: #222;
                    vertical-align: middle;
                }
                    .auth-icon{
                        background-position: -1px -50px;
                        display: inline-block;
                        width: 22px;
                        height: 23px;
                        background-image: url(//s1.hdslb.com/bfs/static/jinkela/space/asserts/user-auth.png);
                        background-repeat: no-repeat;
                        vertical-align: bottom;
                    }
                .section-title{
                    border-bottom: 1px solid #e5e9ef;
                    font-size: 14px;
                    font-weight: 700;
                    padding: 0;
                    margin: -15px 0 10px;
                    height: 45px;
                    line-height: 45px;
                    color: #000;
                }
                .contents{
                    position: relative;
                    max-height: 184px;
                    overflow: auto;
                    font-size: 12px;
                }
                .i-live-fo{
                    position: absolute;
                    top: 180px;
                    right: 20px;
                    display: block;
                }
                    .i-live-fo-btn{
                        color: #f25d8e;
                        border: 1px solid;
                        border-radius: 4px 0 0 4px;
                        cursor: pointer;
                        float: left;
                        line-height: 24px;
                        text-align: center;
                        width: 80px;
                        font-size: 12px;
                    }
                    .i-live-fo-count{
                        font-size: 12px;
                        border: 1px solid #dae0e9;
                        border-radius: 0 4px 4px 0;
                        color: #99a2aa;
                        float: left;
                        line-height: 24px;
                        text-align: center;
                        min-width: 50px;
                    }
                    .space-fans{
                        border: 1px solid #dae0e9;
                        border-left-width: 0;
                        border-radius: 0 4px 4px 0;
                        color: #99a2aa;
                        float: left;
                        line-height: 24px;
                        text-align: center;
                        min-width: 50px;
                    }
                .i-live-off-guest{
                    color: #99a2aa;
                    margin: 30px 0 15px;
                    text-align: center;
                }
                    .i-live-unfod p{
                        line-height: 16px;
                        font-size: 12px;
                    }
                    .i-live-unfod a{
                        display: block;
                        line-height: 16px;
                        margin-top: 6px;
                        color: #00a1d6;
                        font-size: 12px;
                    }
                    .r-arrow{
                        background-position: -477px -410px;
                        margin-left: 8px;
                        vertical-align: middle;
                        background-image: url(../../assets/img/public/icons.png);
                        display: inline-block;
                        width: 6px;
                        height: 11px;
                    }
</style>
