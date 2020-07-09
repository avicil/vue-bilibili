<template>
  <div id="Contribution">
      <div class="contribution-sidenav">
           <div class="contribution-list-container">
            <div class="favlist-title" @click="btn">
                <p>TA的创建</p>
                <i class="el-icon-arrow-up" :class="[rotate?'down':'up']"></i>
            </div>
            <el-menu default-active="1" class="el-menu-vertical-demo" v-show="isShow">
                <el-menu-item index="1" class="contribution-item" @click="videos">
                    <i class="el-icon-video-play"></i>
                    <span slot="title" class="text">默认收藏夹</span>
                    <span slot="title" class="num">4</span>
                </el-menu-item>
                <el-menu-item index="2" class="contribution-item" @click="schools">
                    <i class="el-icon-video-play"></i>
                    <span slot="title" class="text">校园</span>
                    <span slot="title" class="num">5</span>
                </el-menu-item>
                <el-menu-item index="3" class="contribution-item" @click="maomings">
                    <i class="el-icon-video-play"></i>
                    <span slot="title" class="text">茂名风光</span>
                    <span slot="title" class="num">4</span>
                </el-menu-item>
            </el-menu>
           </div>
      </div>
      <!-- 右边内容 -->
        <div class="main-content">
            <!-- ---------------------------------------------------------------------------------------------------------默认收藏夹 --------------------------------------------------------------------------------------------------------------->
            <div v-show="video">
                <div class="favList-info" >
                <div class="favInfo-box">
                    <a href="JavaScript:;" class="favInfo-cover">
                        <img src="@/assets/img/Collection_img/moren_one.jpg" alt="加载失败">
                        <i class="icon icon-favlist-info"></i>
                    </a>
                    <div class="favInfo-details">
                        <a href="JavaScript:;" class="fav-name">默认收藏夹</a>
                        <div class="fav-meta">
                            <span class="fav-up-name">创建者：茂职院计算机工程系</span>
                            <span>播放数：21</span>
                        </div>
                        <div class="fav-meta">
                            <span>4个内容</span>
                            <span class="dot">·</span>
                            <span>公开</span>
                        </div>
                        <div class="fav-options defaultFav">
                            <a href="JavaScript:;" class="fav-play">
                                <i class="el-icon-caret-right"></i>播放全部
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!--  -->
            <div class="fav-header-info">
                <div class="fav-info">
                    <div class="fav-filters">
                        <div class="filter-item">
                            <span class="texts">批量操作</span>
                        </div>
                            <el-dropdown trigger="click" placement='bottom' class="be-dropdown filter-item">
                                <span class="el-dropdown-link">
                                    最近收藏<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown" class="be-dropdown-menu filter-type menu-align">
                                    <el-dropdown-item >全部分区 4</el-dropdown-item>
                                    <el-dropdown-item >知识区   1</el-dropdown-item>
                                    <el-dropdown-item >舞蹈区   1</el-dropdown-item>
                                    <el-dropdown-item >纪录片区 1</el-dropdown-item>
                                    <el-dropdown-item >数码区   1</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        <el-dropdown trigger="click" class="be-dropdown filter-item" placement='bottom'>
                            <span class="el-dropdown-link">
                                最近收藏<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown" class="be-dropdown-menu menu-align">
                                <el-dropdown-item >最近收藏</el-dropdown-item>
                                <el-dropdown-item >最多播放</el-dropdown-item>
                                <el-dropdown-item >最新投稿</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    <div class="filter-item search">
                            <el-dropdown trigger="click" class="be-dropdown search-types" placement='bottom'>
                                <span class="el-dropdown-link">
                                    当前<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown" class="be-dropdown-menu">
                                    <el-dropdown-item >当前收藏夹</el-dropdown-item>
                                    <el-dropdown-item >全部收藏夹</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        <div class="search-input">
                            <input type="text" placeholder="输入关键词" class="search-fav-input">
                            <span title="点击搜索" class="icon icon-search"></span>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        <!--循环输出 -->
                <ul class="fav-video-list">
                   <li class="small-item" v-for="(item,index) in videoList" :key="index" @mouseover="mouseover(item)" @mouseleave="mouseleave(item)">
                       <a href="JavaScript:;" class="cover-normal">
                            <img :src="item.imgUrl" alt="加载失败">
                            <span class="length" v-show="item.show">{{item.times}}</span>
                            <span class="i-watchlater" v-show="item.noshow"></span>
                            <div class="meta-mask" v-show="item.noshow">
                                <div class="meta-info">
                                    <p class="view">{{item.view}}</p>
                                    <p class="favorite">{{item.like}}</p>
                                    <p class="author">{{item.up}}</p>
                                    <p class="pubdate">{{item.togao}}</p>
                                </div>
                            </div>
                            <!-- <div class="disabled-cover">
                                <div class="candle"></div>
                                <p>视频已失效</p>
                            </div> -->
                        </a>
                        <a href="JavaScript:;" class="title">{{item.title}}</a>
                        <div class="meta pubdate">{{item.time}}</div>
                        <div class="be-dropdown video-edit">
                            <div class="be-dropdown-trigger">
                                <i title="更多操作" class="el-icon-more icon-ic_more"></i>
                            </div>
                        <!-- <ul class="be-dropdown-menu menu-align-" style="left: 0px; top: 0px; transform-origin: center top 0px; display: none;">
                            <li class="be-dropdown-item">复制到</li>
                        </ul> -->
                        </div>
                        <!-- <div class="video-check-container" style="display: none;">
                            <div class="video-check icon"></div>
                        </div> -->
                    </li>
                </ul>
            </div>
            <!------------------------------------------------------------------------------------------------ 校园---------------------------------------------------->
            <div v-show="School">
                <div class="favList-info" >
                <div class="favInfo-box">
                    <a href="JavaScript:;" class="favInfo-cover">
                        <img src="@/assets/img/Homepage_Contribution_img/ta_favorites/fav_two.jpg" alt="加载失败">
                        <i class="icon icon-favlist-info"></i>
                    </a>
                    <div class="favInfo-details">
                        <a href="JavaScript:;" class="fav-name">默认收藏夹</a>
                        <div class="fav-meta">
                            <span class="fav-up-name">创建者：茂职院计算机工程系</span>
                            <span>播放数：21</span>
                        </div>
                        <div class="fav-meta">
                            <span>4个内容</span>
                            <span class="dot">·</span>
                            <span>公开</span>
                        </div>
                        <div class="fav-options defaultFav">
                            <a href="JavaScript:;" class="fav-play">
                                <i class="el-icon-caret-right"></i>播放全部
                            </a>
                           <div class="metas"><i class="el-icon-thumb icon-dianzan"></i><!----><span>1</span></div>
                            <div class="metas"><i class="el-icon-star-on icon-shoucang"></i><!----><span>1</span></div>
                            <div class="metas"><i class="el-icon-share icon-fenxiang"></i><span>分享</span><!----></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fav-header-info">
                <div class="fav-info">
                    <div class="fav-filters">
                        <div class="filter-item">
                            <span class="texts">批量操作</span>
                        </div>
                            <el-dropdown trigger="click" placement='bottom' class="be-dropdown filter-item">
                                <span class="el-dropdown-link">
                                    最近收藏<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown" class="be-dropdown-menu filter-type menu-align">
                                    <el-dropdown-item >全部分区 4</el-dropdown-item>
                                    <el-dropdown-item >知识区   1</el-dropdown-item>
                                    <el-dropdown-item >舞蹈区   1</el-dropdown-item>
                                    <el-dropdown-item >纪录片区 1</el-dropdown-item>
                                    <el-dropdown-item >数码区   1</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        <el-dropdown trigger="click" class="be-dropdown filter-item" placement='bottom'>
                            <span class="el-dropdown-link">
                                最近收藏<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown" class="be-dropdown-menu menu-align">
                                <el-dropdown-item >最近收藏</el-dropdown-item>
                                <el-dropdown-item >最多播放</el-dropdown-item>
                                <el-dropdown-item >最新投稿</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    <div class="filter-item search">
                            <el-dropdown trigger="click" class="be-dropdown search-types" placement='bottom'>
                                <span class="el-dropdown-link">
                                    当前<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown" class="be-dropdown-menu">
                                    <el-dropdown-item >当前收藏夹</el-dropdown-item>
                                    <el-dropdown-item >全部收藏夹</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        <div class="search-input">
                            <input type="text" placeholder="输入关键词" class="search-fav-input">
                            <span title="点击搜索" class="icon icon-search"></span>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        <!--循环输出 -->
                <ul class="fav-video-list">
                   <li class="small-item" v-for="(item,index) in schoolList" :key="index" @mouseover="mouseover(item)" @mouseleave="mouseleave(item)">
                       <a href="JavaScript:;" class="cover-normal">
                            <img :src="item.imgUrl" alt="加载失败">
                            <span class="length" v-show="item.show">{{item.times}}</span>
                            <span class="i-watchlater" v-show="item.noshow"></span>
                            <div class="meta-mask" v-show="item.noshow">
                                <div class="meta-info">
                                    <p class="view">{{item.view}}</p>
                                    <p class="favorite">{{item.like}}</p>
                                    <p class="author">{{item.up}}</p>
                                    <p class="pubdate">{{item.togao}}</p>
                                </div>
                            </div>
                            <!-- <div class="disabled-cover">
                                <div class="candle"></div>
                                <p>视频已失效</p>
                            </div> -->
                        </a>
                        <a href="JavaScript:;" class="title">{{item.title}}</a>
                        <div class="meta pubdate">{{item.time}}</div>
                        <div class="be-dropdown video-edit">
                            <div class="be-dropdown-trigger">
                                <i title="更多操作" class="el-icon-more icon-ic_more"></i>
                            </div>
                        <!-- <ul class="be-dropdown-menu menu-align-" style="left: 0px; top: 0px; transform-origin: center top 0px; display: none;">
                            <li class="be-dropdown-item">复制到</li>
                        </ul> -->
                        </div>
                        <!-- <div class="video-check-container" style="display: none;">
                            <div class="video-check icon"></div>
                        </div> -->
                    </li>
                </ul>
            </div>
            <!------------------------------------------------------------------------------------------------茂名风光----------------------------------------------------------------------------------------------  -->
            <div v-show="Maoming">
                <div class="favList-info" >
                <div class="favInfo-box">
                    <a href="JavaScript:;" class="favInfo-cover">
                        <img src="@/assets/img/Homepage_Contribution_img/ta_favorites/fav_three.jpg" alt="加载失败">
                        <i class="icon icon-favlist-info"></i>
                    </a>
                    <div class="favInfo-details">
                        <a href="JavaScript:;" class="fav-name">默认收藏夹</a>
                        <div class="fav-meta">
                            <span class="fav-up-name">创建者：茂职院计算机工程系</span>
                            <span>播放数：21</span>
                        </div>
                        <div class="fav-meta">
                            <span>4个内容</span>
                            <span class="dot">·</span>
                            <span>公开</span>
                        </div>
                        <div class="fav-options defaultFav">
                            <a href="JavaScript:;" class="fav-play">
                                <i class="el-icon-caret-right"></i>播放全部
                            </a>
                            <div class="metas"><i class="el-icon-thumb icon-dianzan"></i><!----><span>点赞</span></div>
                            <div class="metas"><i class="el-icon-star-on icon-shoucang"></i><!----><span>收藏</span></div>
                            <div class="metas"><i class="el-icon-share icon-fenxiang"></i><span>分享</span><!----></div>
                        </div>
                    </div>
                </div>
            </div>
            <!--  -->
            <div class="fav-header-info">
                <div class="fav-info">
                    <div class="fav-filters">
                        <div class="filter-item">
                            <span class="texts">批量操作</span>
                        </div>
                            <el-dropdown trigger="click" placement='bottom' class="be-dropdown filter-item">
                                <span class="el-dropdown-link">
                                    最近收藏<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown" class="be-dropdown-menu filter-type menu-align">
                                    <el-dropdown-item >全部分区 4</el-dropdown-item>
                                    <el-dropdown-item >知识区   1</el-dropdown-item>
                                    <el-dropdown-item >舞蹈区   1</el-dropdown-item>
                                    <el-dropdown-item >纪录片区 1</el-dropdown-item>
                                    <el-dropdown-item >数码区   1</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        <el-dropdown trigger="click" class="be-dropdown filter-item" placement='bottom'>
                            <span class="el-dropdown-link">
                                最近收藏<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown" class="be-dropdown-menu menu-align">
                                <el-dropdown-item >最近收藏</el-dropdown-item>
                                <el-dropdown-item >最多播放</el-dropdown-item>
                                <el-dropdown-item >最新投稿</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    <div class="filter-item search">
                            <el-dropdown trigger="click" class="be-dropdown search-types" placement='bottom'>
                                <span class="el-dropdown-link">
                                    当前<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown" class="be-dropdown-menu">
                                    <el-dropdown-item >当前收藏夹</el-dropdown-item>
                                    <el-dropdown-item >全部收藏夹</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        <div class="search-input">
                            <input type="text" placeholder="输入关键词" class="search-fav-input">
                            <span title="点击搜索" class="icon icon-search"></span>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        <!--循环输出 -->
                <ul class="fav-video-list">
                   <li class="small-item" v-for="(item,index) in MaomingList" :key="index" @mouseover="mouseover(item)" @mouseleave="mouseleave(item)">
                       <a href="JavaScript:;" class="cover-normal">
                            <img :src="item.imgUrl" alt="加载失败">
                            <span class="length" v-show="item.show">{{item.times}}</span>
                            <span class="i-watchlater" v-show="item.noshow"></span>
                            <div class="meta-mask" v-show="item.noshow">
                                <div class="meta-info">
                                    <p class="view">{{item.view}}</p>
                                    <p class="favorite">{{item.like}}</p>
                                    <p class="author">{{item.up}}</p>
                                    <p class="pubdate">{{item.togao}}</p>
                                </div>
                            </div>
                            <!-- <div class="disabled-cover">
                                <div class="candle"></div>
                                <p>视频已失效</p>
                            </div> -->
                        </a>
                        <a href="JavaScript:;" class="title">{{item.title}}</a>
                        <div class="meta pubdate">{{item.time}}</div>
                        <div class="be-dropdown video-edit">
                            <div class="be-dropdown-trigger">
                                <i title="更多操作" class="el-icon-more icon-ic_more"></i>
                            </div>
                        <!-- <ul class="be-dropdown-menu menu-align-" style="left: 0px; top: 0px; transform-origin: center top 0px; display: none;">
                            <li class="be-dropdown-item">复制到</li>
                        </ul> -->
                        </div>
                        <!-- <div class="video-check-container" style="display: none;">
                            <div class="video-check icon"></div>
                        </div> -->
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Collection',
    data () {
        return {
        rotate:false,
        isShow:true,
        // 校园
        // 默认收藏夹
        video:true,
        // 校园
        School:false,
        // 茂名风光
        Maoming:false,
        // ，默认收藏夹
        videoList: [
                    { 
                        id: '1',
                        imgUrl: require('@/assets/img/Collection_img/moren_one.jpg'),
                        title: '不用滤镜，如何调出高级的色调？分享从摄影小白如何到接单赚外快？',
                        view:'播放：2.3万',
                        like: '收藏：3735',
                        up:'UP主：一只记录西',
                        times:'04:40',
                        time:'收藏于：4小时前',
                        togao:'投稿：6-29',
                        show: true,
                        noshow:false
                    },
                     { 
                        id: '2',
                        imgUrl: require('@/assets/img/Collection_img/moren_two.jpg'),
                        title: '《入海》X 转场教程｜6种零后期超简单丝滑转场',
                        view:'播放：2万',
                        like: '收藏：3501',
                        up:'UP主：海蜇君_',
                        times:'04:58',
                        time:'收藏于：4小时前',
                        togao:'投稿：5-24',
                        show: true,
                        noshow:false
                    },
                     { 
                        id: '3',
                        imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_favorites/fav_one.jpg'),
                        title: '【帽子次元社】交织together',
                        view:'播放：1625',
                        like: '收藏：30',
                        up:'UP主：帽子次元社',
                        times:'04:46',
                        time:'收藏于： 3-13',
                        togao:'投稿：2018-6-10',
                        show: true,
                        noshow:false
                    },
                     { 
                        id: '4',
                        imgUrl: require('@/assets/img/Collection_img/moren_three.jpg'),
                        title: '「茂名」澳内渔民的幸福生活',
                        view:'播放：6787',
                        like: '收藏：14',
                        up:'UP主：HTFblog',
                        times:'02.39',
                        time:'收藏于： 3-13',
                        togao:'投稿：2018-11-27',
                        show: true,
                        noshow:false
                    },
                ],
                // 校园数据
                schoolList: [
                    { 
                        id: '1',
                        imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_favorites/fav_two.jpg'),
                        title: '【茂名职业技术学院】2018级军训宣传片《半月迷彩》',
                        view:'播放：689',
                        like: '收藏：15',
                        up:'UP主：镜记时代',
                        times:'03:46',
                        time:'收藏于： 3-13',
                        togao:'投稿：2019-1-20',
                        show: true,
                        noshow:false
                    },
                     { 
                        id: '2',
                        imgUrl: require('@/assets/img/Collection_img/scholList_two.jpg'),
                        title: '【短片】《讲个五零三的故事》之遇见，舍友之间的日常',
                        view:'播放：204',
                        like: '收藏：4',
                        up:'UP主：镜记时代',
                        times:'04:03',
                        time:'收藏于： 3-13',
                        togao:'投稿：2019-1-20',
                        show: true,
                        noshow:false
                    },
                     { 
                        id: '3',
                        imgUrl: require('@/assets/img/Collection_img/scholList_three.jpg'),
                        title: '茂名职业技术学院国旗护卫队进行升旗仪式',
                        view:'播放：485',
                        like: '收藏：35',
                        up:'UP主：哔站新闻搬运杰出青年',
                        times:'04:46',
                        time:'收藏于： 3-13',
                        togao:'投稿：2019-4-24',
                        show: true,
                        noshow:false
                    },
                     { 
                        id: '4',
                        imgUrl: require('@/assets/img/Collection_img/scholList_four.jpg'),
                        title: '【茂名职业技术学院】《如家饭堂》舌尖上的二饭~',
                        view:'播放：410',
                        like: '收藏：3',
                        up:'UP主：镜记时代',
                        times:'06：29',
                        time:'收藏于： 3-13',
                        togao:'投稿：2019-1-20',
                        show: true,
                        noshow:false
                    },
                     { 
                        id: '5',
                        imgUrl: require('@/assets/img/Collection_img/scholList_five.jpg'),
                        title: '茂名职业技术学院新校区2019年校运会',
                        view:'播放：395',
                        like: '收藏：2',
                        up:'UP主：一杰工作社',
                        times:'00：48',
                        time:'收藏于： 3-13',
                        togao:'投稿：2019-11-29',
                        show: true,
                        noshow:false
                    },
                ],
                // 茂名数据
                 MaomingList: [
                    { 
                        id: '1',
                        imgUrl: require('@/assets/img/Homepage_Contribution_img/ta_favorites/fav_three.jpg'),
                        title: '茂名年例游神',
                        view:'播放：987',
                        like: '收藏：6',
                        up:'UP主：棠花儿朵朵',
                        times:'06:17',
                        time:'收藏于：3-13',
                        togao:'投稿：2019-2-20',
                        show: true,
                        noshow:false
                    },
                     { 
                        id: '2',
                        imgUrl: require('@/assets/img/Collection_img/MaomingList_two.jpg'),
                        title: '厉害了我的国：广东茂名，私藏了亚洲能见度第一的潜水胜地！',
                        view:'播放：11.7万',
                        like: '收藏：887',
                        up:'UP主：央视财经',
                        times:'02:26',
                        time:'收藏于：3-13',
                        togao:'投稿：2017-8-26',
                        show: true,
                        noshow:false
                    },
                     { 
                        id: '3',
                        imgUrl: require('@/assets/img/Collection_img/MaomingList_three.jpg'),
                        title: '【为什么是茂名？丨航拍广东',
                        view:'播放：1.9万',
                        like: '收藏：351',
                        up:'UP主：广东共青团',
                        times:'01:11',
                        time:'收藏于： 3-13',
                        togao:'投稿：2019-9-20',
                        show: true,
                        noshow:false
                    },
                     { 
                        id: '4',
                        imgUrl: require('@/assets/img/Collection_img/MaomingList_four.jpg'),
                        title: '[延时摄影]My City -茂名',
                        view:'播放：484',
                        like: '收藏：13',
                        up:'UP主：一恒学长',
                        times:'00:58',
                        time:'收藏于： 3-13',
                        togao:'投稿：2018-9-29',
                        show: true,
                        noshow:false
                    },
                ]
            }
    },
    methods: {
       btn () {
            this.rotate = !this.rotate
            this.isShow = !this.isShow
       },
       // 默认收藏
          // 移入
            mouseover(item) {
                item.show = false
                item.noshow = true
        },
            // 移出
            mouseleave(item) {
                item.noshow = false
                item.show = true
        },
        // 默认收藏夹
        videos(){
            this.video = true
            this.School = false
            this.Maoming = false
        },
        // 校园
        schools(){
            this.video = false
            this.School = true
            this.Maoming = false
        },
        // 茂名
        maomings(){
            this.video = false
            this.School = false
            this.Maoming = true
        }
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
             width: 209px;
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
                .favlist-title{
                    width: 209px;
                    height: 44px;
                    padding-left: 19px;
                    line-height: px;
                    font-size: 14px;
                    color: #99a2aa;
                    padding-right: 11px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer; 
                }
                    .up{
                        transition: all .5s;
                    }
                    .down{
                        transform:rotate(-180deg);
                        transition: all .5s;
                    }
                    .el-icon-arrow-up{
                        margin-right: 29px;
                        width: 16px;
                        height: 20px;
                    }
                .el-menu-vertical-demo{
                    width: 209px;
                    font-size: 14px;
                    color: #222;
                }
                    .contribution-item{
                        height: 44px;
                        position: relative;
                        line-height: 44px;
                    }
                        .el-icon-video-play{
                            font-size: 22px;
                            vertical-align: middle;
                            color: #99a2aa;
                        }
                        .text{
                            padding-left: -10px;
                            font-weight: 500;
                            width: 115px;
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
                        .el-menu-item.is-active{
                            background-color: #00a2d1;
                            transition: all 1s;
                        }
                        .el-menu-item.is-active span{
                           color: #fff!important;
                        }
                        .el-menu-item.is-active i{
                            color: #fff!important;
                        }
        /*右边内容块 */
        .main-content{
            float: left;
            width: 1070px;
            min-height: 600px;
            border-left: 1px solid #eee;
            position: relative;
        }
            /* 默认收藏夹 */
            .favList-info{
                padding: 20px 0;
                margin: 0 20px;
                box-sizing: border-box;
                border-bottom: 1px solid #e5e9ef;
            }
                .favInfo-box{
                    height: 119px;
                    display: flex;
                }
                    .favInfo-cover{
                        width: 190px;
                        overflow: hidden;
                        position: relative;
                    }
                        .favInfo-cover img{
                            height: 119px;
                            object-fit: cover;
                            object-position: 50%;
                            border-radius: 4px;
                            border: 0;
                            outline: 0;
                        }
                        .icon-favlist-info{
                            width: 20px;
                            height: 20px;
                            background-image: url(../../assets/img/Collection_img/index.png);
                            position: absolute;
                            bottom: 4px;
                            right: 4px;
                            background-size: 100%;
                            display: inline-block;
                        }
                /* 默认收藏夹右边播放全部 */
                .favInfo-details{
                    margin-left: 18px;
                }
                    .fav-name{
                        display: block;
                        font-family: PingFangSC-Medium;
                        font-size: 14px;
                        color: #212121;
                        line-height: 17px;
                        margin-bottom: 14px;
                        width: 368px;
                        height: 17px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                        .fav-name:hover{
                            color: #00a1d6!important;
                            transition:all .2s;
                        }
                    .fav-meta{
                        color: #99a2aa;
                        font-size: 0;
                        letter-spacing: 0;
                        line-height: 16px;
                        margin-bottom: 6px;
                        font-weight: 400;
                    }
                        .dot{
                            margin: 0 8px;
                        }
                        .fav-up-name{
                            margin-right: 20px;
                        }
                        .fav-meta span{
                            display: inline-block;
                            font-size: 12px;
                            vertical-align: middle;
                        }
                    .defaultFav{
                        align-items: center;
                        margin-top: 16px;
                        display: flex;
                    }
                        .fav-play{
                            width: 120px;
                            height: 32px;
                            background: #00a1d6;
                            border-radius: 2px;
                            font-size: 14px;
                            color: #fff;
                            line-height: 32px;
                            text-align: center;
                            margin-right: 42px;
                            cursor: pointer;
                        }
                            .metas{
                                font-size: 13px;
                                color: #505050;
                                line-height: 16px;
                                margin-right: 48px;
                                cursor: pointer;
                                font-weight: 500;
                            }
                                .icon-dianzan{
                                    font-size: 22px;
                                    vertical-align: sub;
                                }
                                .icon-shoucang{
                                    font-size: 22px;
                                    vertical-align: sub;
                                }
                                .icon-fenxiang{
                                    font-size: 22px;
                                    vertical-align: sub;                                   
                                }
                            .el-icon-caret-right{
                                position: relative;
                                top: 5px;
                                font-size: 25px;                               
                            }
                             /*中间排量操作  */
            .fav-header-info{
                margin: 20px 20px 0;
            }
                .fav-info{
                    height: 30px;
                    margin-top: 15px;
                }
                    .fav-filters{
                        float: right;
                    }
                        .filter-item{
                            float: left;
                            line-height: 30px;
                            margin-right: 26px;
                            font-size: 14px;
                            color: #222;                           
                        }
                        .texts{
                            cursor: pointer;
                            font-weight: 400;
                        }
                    .be-dropdown{
                        float: left;
                        line-height: 30px;
                        margin-right: 26px;
                        font-size: 14px;
                        color: #222;
                        position: relative;
                        cursor: pointer;
                    } 
                    .search{
                        float: left;
                        line-height: 30px;
                        color: #222;
                        height: 28px;
                        margin: 0;
                        font-size: 0;
                        border: 1px solid #ccd0d7;
                        border-radius: 14px;
                    }
                        .search-types{
                            display: inline-block;
                            width: 57px;
                            line-height: 28px;
                            margin-left: 3px;
                            font-size: 12px;
                            color: #6d757a;
                            vertical-align: top;
                            text-align: center;
                            border-right: 1px solid #ccd0d7;
                            position: relative;
                            cursor: pointer;
                        }
                            .search-input{
                                position: relative;
                                display: inline-block;
                                width: 148px;
                                height: 28px;
                                margin: 0 9px 0 11px;
                                vertical-align: top;
                            }
                                .search-fav-input{
                                    border: none;
                                    outline: none;
                                    box-shadow: none;
                                    width: 120px;
                                    padding: 0;
                                    font-size: 12px;
                                    color: #222;
                                    line-height: 28px;
                                    height: 28px;
                                }
                                .icon-search{
                                    position: absolute;
                                    right: 0;
                                    top: 0;
                                    width: 18px;
                                    height: 28px;
                                    background-position: -1111px -82px;
                                    cursor: pointer;      
                                    background-repeat: no-repeat;
                                    display: inline-block;
                                    background-image: url(../../assets/img/public/icons.png);                              
                                }
                .fav-video-list{
                    margin: 20px 10px 50px;
                }
                    .small-item{
                        width: 190px;
                        padding: 0;
                        margin: 0 20px 20px 0;
                        border-radius: 4px;
                        border: 1px solid #fff;
                        box-sizing: border-box;
                        display: block;
                        float: left;
                        position: relative;
                    }
                        .cover-normal{
                            border-radius: 4px;
                            display: block;
                            overflow: hidden;
                            position: relative;
                            width: 190px;
                            height: 119px;
                        }
                            .cover-normal img{
                                border-radius: 4px;
                                display: block;
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                object-position: 50%;
                            }
                            .length{
                                font-size: 12px;
                                opacity: 1;
                                background: rgba(0,0,0,.5);
                                border-radius: 5px 0 0 0;
                                color: #fff;
                                line-height: 20px;
                                padding: 0 6px;
                                position: absolute;
                                right: 0;
                                bottom: 0;
                            }
                            /* 闹钟 */
                            .i-watchlater{
                                bottom: 14px;
                                position: absolute;
                                right: 6px;
                                width: 22px;
                                height: 22px;
                                z-index: 5;
                                background: url(../../assets/img/Homepage_Contribution_img/ta_videos/index.png) no-repeat;   
                            }
                            /* 小图片背景和文字 */
                            .meta-mask{
                                position: absolute;
                                top: 0;
                                left: 0;
                                z-index: 4;
                                width: 100%;
                                height: 100%;
                                opacity: 1;
                                background-color: rgba(0,0,0,.45);
                                color: #e5e9ef;
                            }
                                .meta-info{
                                position: absolute;
                                top: 50%;
                                left: 15px;
                                transform: translateY(-50%);
                                }
                                    .view{
                                        font-size: 12.3px;
                                        margin-top: 3px;
                                    }
                                    .favorite{
                                        font-size: 12.3px;
                                        margin-top: 3px;
                                    }
                                    .author{
                                        margin-top: 3px;
                                        font-size: 12.3px;
                                        width: 125px;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                    }
                                    .pubdate{
                                        margin-top: 3px;
                                        font-size: 12.3px;
                                    }
                        .title{
                            display: block;
                            line-height: 20px;
                            height: 38px;
                            margin-top: 6px;
                            overflow: hidden;
                            font-size: 12px;
                            color: #222222;
                        }
                            .title:hover{
                                transition:all .2s;
                                color: #00a1d6!important;
                        }
                        .meta{
                            color: #999;
                            white-space: nowrap;
                            margin-top: 6px;
                            height: 14px;
                            line-height: 14px;
                            font-size: 12px;                            
                        }
                        .video-edit{
                            position: absolute;
                            bottom: -5px;
                            right: -14px;
                            display: inline-block;
                            cursor: pointer;
                        }
                            .be-dropdown-trigger{
                                width: 24px;
                                height: 24px;
                                margin: auto;
                                text-align: center;                               
                            }
                                .icon-ic_more{
                                    display: block;
                                    line-height: 24px;
                                    font-size: 24px;
                                    color: #999;
                                    font-size: 12px;                                   
                                }
                                .icon-ic_more::before{
                                    line-height: 24px;
                                    font-size: 24px;
                                    color: #999;
                                }                                
</style>