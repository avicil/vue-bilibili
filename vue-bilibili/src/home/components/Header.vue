<template>
  <div class="header">
    <div class="header_home">
        <!-- /* 导航栏 */ -->
        <div class="header_left_one">
            <ul class="header_left_one_ul">
                <li>
                    <el-dropdown placement='bottom-start'>
                        <span class="el-dropdown-link">
                            <a href="JavaScript:;" >
                                <i class="iconfont">&#xe6c6;</i><span style="font-size:14px;color: #212121;">&nbsp;&nbsp;&nbsp;主站&nbsp;<i class="el-icon-arrow-down"></i></span>
                            </a>
                        </span>
                        <el-dropdown-menu slot="dropdown" class="channel-menu-mini">
                            <Header-Svgicon></Header-Svgicon>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
                <li class="nav-link-item"><span><a href="JavaScript:;">番剧</a></span></li>
                <!-- 游戏中心 -->
                <li class="nav-link-item">
                    <el-dropdown placement='bottom-start'>
                        <span class="el-dropdown-liank">
                         <a href="JavaScript:;">游戏中心</a>
                        </span>
                        <el-dropdown-menu slot="dropdown" class="clearfix" placement="bottom-end">
                            <div class="clearfix_left">
                                <div class="clearfix_left_banner">
                                    <a href="JavaScript:;">
                                        <img src="@/assets/img/Header_img/Game/one.jpg" alt="加载失败">
                                        <span>命运-冠位指定（Fate/GO）</span>
                                    </a>
                                </div>
                                <div class="clearfix_left_brief">
                                    <el-dropdown-item class="clearfix_left_brief_item" v-for="item in GameList" :key="item.id">
                                        <img :src="item.imgUrl" alt="加载失败">
                                        <span>{{item.title}}}</span>
                                    </el-dropdown-item>
                                </div>
                            </div>
                            <div class="clearfix_right">
                                <div class="all">
                                    <el-dropdown-item class="all-itme" v-for="(item,index) in Gamelist" :key="index">{{item.title}}</el-dropdown-item>
                                </div>
                            </div>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
                <!-- 直播 -->
                <li class="nav-link-item">
                    <el-dropdown  placement='bottom-start'>
                        <span class="el-dropdown-link">
                           <a href="JavaScript:;">直播</a>
                        </span>
                        <el-dropdown-menu slot="dropdown" class="broadcast">
                            <div class="broadcast_left">
                               <h3 style="font-size: 14px;color: #ea759f;">热门直播</h3>
                                <div class="room-list" >
                                    <a href="JavaScript:;" class="list-item" v-for="item in imgLive" :key="item.id">
                                        <img :src="item.imgUrl" alt="加载失败" class="face" >
                                        <div class="hover">
                                            <div class="lives"></div>
                                            LIVE
                                        </div>
                                        <p class="uname">{{item.title}}</p>
                                    </a>
                                </div>
                            </div>
                            <div class="broadcast_right">
                                <h3 class="title">热门活动</h3>
                                <div class="act-list">
                                    <a href="JavaScript:;" class="list-items">
                                        <img src="@/assets/img/Header_img/live/activity_right_one.jpg" alt="加载失败" class="banner">
                                    </a>
                                    <a href="JavaScript:;" class="list-items">
                                        <img src="@/assets/img/Header_img/live/activity_right_two.png" alt="加载失败" class="banner">
                                    </a>
                                </div>
                            </div>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>

                <li class="nav-link-item"><span><a href="JavaScript:;">会员购</a></span></li>
                <!-- 漫画 -->
                <li class="nav-link-item">
                 <el-dropdown placement='bottom-start'>
                        <span class="el-dropdown-link">
                             <a href="JavaScript:;">漫画</a>
                        </span>
                        <el-dropdown-menu slot="dropdown" class="dropdowns">
                            <div class="dropdowns_left">
                                <el-dropdown-item class="dropdowns_left_div" v-for="item in recommendList" :key="item.id">
                               <!-- 绑定图片 --><div class="dropdowns_left_div_img"  :style="{backgroundImage:'url(' + item.imgUrl + ')', backgroundRepeat:'no-repeat', backgroundSize: '100% 100%'}"></div> 
                                    <div class="dropdowns_left_div_span">{{item.title}}</div>
                                </el-dropdown-item>
                            </div>
                            <div class="dropdowns_right">
                                <span>人气漫画</span>
                                <el-dropdown-item v-for="items in recommendLists" :key="items.id">
                                    {{items.id}}. {{items.title}}
                                </el-dropdown-item>
                            </div>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
                <li class="nav-link-item"><span><a href="JavaScript:;">赛事</a></span></li>
                <!-- BW轮播 -->
                <li class="nav-link-item">
                    <a href="JavaScript:;" class="link loc-moveclip">
                        <div class="loc-mc-box">
                            <p class="bnj-txt">BW</p>
                            <img src="@/assets/img/Header_img/BW.png" alt="加载失败" class="bnj-gif">
                         </div>
                    </a>
                   
                </li>
                <!-- 下载app -->
                <li class="nav-link-item">
                    <span class="nav-link-item_span">
                        <el-dropdown placement='bottom'>
                        <span class="el-dropdown-link">
                            <i class="el-icon-mobile-phone"></i>
                            <a href="JavaScript:;">下载APP</a>
                        </span>
                        <el-dropdown-menu slot="dropdown" style="height:174px;width:210px;">
                            <img src="@/assets/img/Header_img/QR.png" alt="加载失败" style="height:200px;width:250px;margin-top:-9px;margin-left:-20px;">
                        </el-dropdown-menu>
                        </el-dropdown>
                    </span>
                </li>
            </ul>
        </div>
        <!-- 输入框 -->
        <div class="header_left_two">
            <input type="text" placeholder=" 请输入您要搜索的内容" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" class="icon-search"></el-button>
        </div>
            <div class="login">
                    <!-- 登录注册 -->
                <div class="header_right_two">
                    <div class="header_right_two_one">
                        <el-dropdown placement='bottom'>
                            <span class="el-dropdown-link">
                                <!-- 登录按钮 -->
                                <router-link to="/" tag="a" >
                                    <el-avatar   el-avatar src="http://static.hdslb.com/images/akari.jpg" alt="加载失败"></el-avatar>
                                    <span>登录</span>
                                </router-link>
                            </span>
                            <el-dropdown-menu slot="dropdown" class="vp-container">
                                <p class="titled">登录后你可以：</p>
                                <div class="img-panel">
                                    <img src="http://static.hdslb.com/images/danmu.png" alt="加载失败" style="left: 212px;" class="img-panels">
                                    <img src="http://static.hdslb.com/images/danmu.png" alt="加载失败" style="left: -109px;" class="img-panels">
                                </div>
                                <div class="btn-box">
                                    <router-link to="/" tag="a" class="btn reg-btn">注册</router-link>
                                    <router-link to="/" tag="a" class="btn">登录</router-link>
                                </div>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <div class="header_right_two_two">
                        <!-- 注册 -->
                        <router-link to="/" tag="a" >注册</router-link>
                    </div>
                </div>
                <!-- 投稿 -->
                <div class="header_right_one">
                     <el-dropdown>
                        <span class="el-dropdown-link">
                             <el-button type="danger" class="dangers">投稿</el-button>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-s-platform">专栏投稿</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-camera-solid">音频投稿</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-video-camera-solid">视频投稿</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-s-tools">投稿管理</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
    </div>
  </div>
</template>
<script>
import HeaderSvgicon from './Svgicon'
export default {
    name: 'Header',
    components:{
        HeaderSvgicon
    },
    data () {
        return {
            // 漫画的数据
        recommendList: [
            {
                id: '1',
                imgUrl: require('@/assets/img/Header_img/cartoon_one.png'),
                title: '辉夜大小姐想让我...',
            },
            {
                id: '2',
                imgUrl: require('@/assets/img/Header_img/cartoon_two.jpg'),
                title: '天官赐福',
            },
            {
                id: '3',
                imgUrl: require('@/assets/img/Header_img/cartoon_three.png'),
                title: '鬼灭之刃',
            },
            {
                id: '4',
                imgUrl: require('@/assets/img/Header_img/cartoon_four.jpg'),
                title: '一拳超人',
            }],
             recommendLists:[
           {
                id: '1',
                title: '辉夜大小姐想让我...',
            },{
                id: '2',
                title: '天官赐福',
            },{
                id: '3',
                title: '租借女友',
            },{
                id: '4',
                title: '鬼灭之刃',
            },{
                id: '5',
                title: '我的守护女友',
            },{
                id: '6',
                title: '反派初始化',
            }
        ],
        // 直播的数据
        imgLive:[
           {
                id: '1',
                imgUrl: require('@/assets/img/Header_img/live/one.jpg'),
                title: '小猫咪',
            },{
                id: '2',
                imgUrl: require('@/assets/img/Header_img/live/two.jpg'),
                title: '米莱',
            },{
                id: '3',
                imgUrl: require('@/assets/img/Header_img/live/three.jpg'),
                title: '咔咔苏',
            },{
                id: '4',
                imgUrl: require('@/assets/img/Header_img/live/four.jpg'),
                title: '米夏',
            },{
                id: '5',
                imgUrl: require('@/assets/img/Header_img/live/five.jpg'),
                title: '小兔兔',
            },{
                id: '6',
                imgUrl: require('@/assets/img/Header_img/live/five.jpg'),
                title: '苗苗蜜',
            }
        ],
        // 游戏中心
       GameList: [
                    {
                        id: '1',
                        imgUrl: require('@/assets/img/Header_img/Game/two.jpg'),
                        title: '公主连结',
                    },
                    {
                        id: '2',
                        imgUrl: require('@/assets/img/Header_img/Game/three.png'),
                        title: '碧蓝航线',
                    },
                    {
                        id: '3',
                        imgUrl: require('@/assets/img/Header_img/Game/four.jpg'),
                        title: '双生视界',
                    },
                ],
        Gamelist: [
                    {
                        id: '1',
                        title: '复苏的魔女',
                    },
                    {
                        id: '2',
                        title: '奥奇传说',
                    },
                    {
                        id: '3',
                        title: '心罪爱丽丝',
                    },
                    {
                        id: '4',
                        title: '糖豆人：终极淘汰赛',
                    },
                    {
                        id: '5',
                        title: '最终幻想：勇气启示录 幻影战争',
                    },
                    {
                        id: '6',
                        title: '魔法纪录  魔法少女小圆外传',
                    },
                    {
                        id: '7',
                        title: '代号：Onmyoji Idol Project',
                    },
               ]
        }
    },
    methods:{

    }
}
</script>

<style scoped>
    .header{
        width: 100%;
        height: 56px;
        position: relative;
        background: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    }
        .header_home{
            width: 100%;
            box-sizing: border-box;
            height: 56px;
            padding: 0px 24px;
            line-height: 30px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        /* 导航栏 */
        .header_left_one{
            width: 635px;
        }
            .header_left_one_ul{
                width: 635px;
                height: 56px;
                display: flex;
            }
                .header_left_one_ul li{
                    margin-left: 12px;
                    line-height: 56px;
                }
                /* 主站 */
                .channel-menu-mini{
                    margin-top: 0px;
                    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
                    width: 670px;
                    height: 350px;
                }
                /* 结束 */
             .iconfont{
                    font-size: 32px;
                    color: #00a1d6;
                    vertical-align: middle;
                    margin-right: 5px;
                }
                .el-icon-arrow-down{
                    font-size: 12px;
                    font-weight: bolder;
                    color: #999;
                    margin-left: -3px;
                }
                .nav-link-item span a{
                    font-size: 14px;
                    color: #212121;
                }
                .nav-link-item_span{
                        line-height: 35px;
                }
                    .nav-link-item_span a{
                        font-size: 35px;
                    }
                        .el-icon-mobile-phone{
                            font-size: 20px;
                            color: 	DeepSkyBlue;
                        }
                .broadcast{
                    display: flex;
                    margin-top: 0px;
                    width: 504px;
                    padding: 20px 0 5px 20px;
                    border-radius: 0 0 4px 4px;
                    box-shadow: 1px 1px 3px rgba(0,0,0,.4);
                    background: #fff;
                }
                /* 游戏中心 */
                .clearfix{
                    width: 466px;
                    height: 230px;
                    margin-top: 0px;
                    border-radius: 0 0 4px 4px;
                    box-shadow: 1px 1px 3px rgba(0, 0, 0, .4);
                    position: relative;
                    background: #fff;
                    display: flex;
                }
                    .clearfix_left{
                        width: 265px;
                        float: left;
                    }
                        .clearfix_left_banner{
                            width: 240px;
                            height: 128px;
                            margin-left: 12px;
                        }
                            .clearfix_left_banner a{
                                width: 240px;
                                height: 128px;
                                display: block;
                                position: relative;
                            }
                              .clearfix_left_banner a img{
                                    width: 240px;
                                    height: 128px;
                                    border-radius: 4px;
                              }
                              .clearfix_left_banner a span{
                                    width: 220px;
                                    padding: 0 10px;
                                    border-radius: 4px;
                                    position: absolute;
                                    bottom: 0px;
                                    left: 0px;
                                    font-size: 12px;
                                    line-height: 30px;
                                    text-shadow: 1px 1px 1px #000;
                                    color: #fff;
                                    background: url(//static.biligame.net/biligametop/img/shadow.png) repeat-x;
                              } 
                        .clearfix_left_brief_item{
                            width: 64px;
                            height: 104px;
                            padding: 6px 12px 0;
                            display: block;
                            float: left;
                            overflow: hidden;
                        }
                            .clearfix_left_brief_item img{
                                width: 64px;
                                height: 64px;
                                border-radius: 12px;
                            }
                            .clearfix_left_brief_item span{
                                width: 4em;
                                height: 14px;
                                display: block;
                                font-size: 14px;
                                line-height: 1;
                                text-align: center;
                                color: #222;
                                overflow: hidden;
                            }
                    .clearfix_right{
                        width: 201px;
                        min-height: 234px;
                        float: left;
                        background: url(//static.biligame.net/biligametop/img/line.png) no-repeat;
                    }
                        .all{
                            padding: 35px 0 0 6px;
                            background: url(//static.biligame.net/biligametop/img/title.png) no-repeat;
                        }
                        .all-itme{
                                width: 156px;
                                overflow: hidden;
                                padding-left: 16px;
                                display: block;
                                font-size: 12px;
                                line-height: 28px;
                                color: #222;
                                white-space:nowrap;
	                            text-overflow: ellipsis;
                        }
                        /* 直播 */
                    .broadcast_left{
                        width: 504px;
                        margin-left: -20px;
                        padding: 0px 0 20px 20px;
                        border-radius: 0 0 4px 4px;
                        background: #fff;
                    }
                    .broadcast_left_div{
                        float: left;
                        width: 254px;
                    }
                        .room-list{
                            font-size: 12px;
                            margin-top: 5px;
                        }
                            .list-item{
                                position: relative;
                                display: inline-block;
                                margin: 10px 17px 0 0;
                                width: 64px;
                                height: auto;
                            }
                                .hover{
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 64px;
                                    height: 64px;
                                    line-height: 64px;
                                    text-indent: 22px;
                                    border-radius: 50%;
                                    opacity: 0;
                                    background: rgba(0,0,0,.5);
                                    font-size: 15px;
                                    color: #fff;
                                    font-weight: 700;  
                                    transition: all .2s cubic-bezier(.22,.58,.12,.98); 
                                }   
                                    .lives{
                                        position: absolute;
                                        top: 27px;
                                        left: 10px;
                                        height: 10px;
                                        width: 10px;
                                        background: #ff699e;
                                        border-radius: 50%;
                                    }
                                .face{
                                    width: 64px;
                                    height: 64px;
                                    border-radius: 50%;
                                }
                                .hover:hover {
                                  opacity:1;
                                }
                                .uname{
                                        margin: 3px 0 0;
                                        text-align: center;
                                        color: #000;
                                        width: 100%;
                                }
                    .broadcast_right{
                        width: 229px;
                    }
                        .broadcast_right_div{
                            margin:0 auto;
                            height: 100px;
                            width: 212px;
                        }
                            .title{
                                font-size: 14px;
                                color: #ea759f;
                                margin: 0;
                            }
                            .act-list{
                                font-family: Helvetica,Tahoma,Arial,Microsoft YaHei,\5FAE软雅黑,sans-serif;
                            }
                            .list-items{
                                display: block;
                                padding: 10px 21px;
                                margin-left: -21px;
                                width: 208px;
                                height: 80px;
                                border-left: 1px solid #9999;
                            }
                            .banner{
                                display: block;
                                width: 100%;
                                height: 100%;
                                border-radius: 3px;
                            }
                            .list-items:hover {
                                background-color: #F4F4F4;
                            }
                        /* 漫画 */
                .dropdowns{
                    display: flex;
                    margin-top:0px;
                    width: 520px;
                    height: 240px;
                    padding: 20px 0 20px 20px;
                    background-color: #fff;
                    border-radius: 0 0 4px 4px;
                }
                    .dropdowns_left{
                        width: 330px;
                        height: 260px;
                        border-right: 1px solid #E4E7ED;
                        display: flex;
                        flex-wrap: wrap ;
                    }
                        .dropdowns_left_div{
                            margin-left: 5px;
                            height: 120px;
                            width: 150px;
                            padding: 0;
                        }
                            .dropdowns_left_div_img{
                                margin-left: 8px;
                                margin-top: 5px;
                                width: 136px;
                                height: 77px;
                                border-radius: 2px;
                            }
                            .dropdowns_left_div_span{
                               margin-left: 8px;
                                max-width: 136px;
                                font-size: 13px;
                                color: rgba(0,0,0,.87);
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                    .dropdowns_right{
                        width: 190px;
                        height: 260px;
                    }
                        .dropdowns_right span{
                                margin-left: 20px;
                                font-size: 16px;
                                color: #1c1d1f;
                            }
                        .dropdowns_right el-dropdown-item{
                            color: #1c1d1f;
                            font-size: 14px;
                        }
                        /* Bw */
                        .link{
                            color: #212121;
                            text-shadow: none;
                            font-size: 14px;
                            white-space: nowrap;
                            display: flex;
                        }
                            .loc-moveclip{
                                margin-top: 10px;
                                width: 54px;
                                height: 36px;
                                overflow: hidden;
                            }
                            .bnj-gif{
                                position: absolute;
                                left: 0;
                                top: 36px;
                                width: 54px;
                                height: 36px;
                            }
                                .bnj-txt{
                                    line-height: 36px;
                                    text-align: center;
                                    width: 100%;
                                }
                                .loc-mc-box{
                                    width: 54px;
                                    height: 72px;
                                    overflow: hidden;
                                    position: relative;
                                    animation: locmoveclipslider 5s infinite ease-out;
                                    animation-delay: 4.5s;
                                }
                                @keyframes locmoveclipslider{
                                    0%{
                                        transform: translateY(36px);
                                    }
                                    25%{
                                        transform: translateY(0px);
                                    }
                                    50%{
                                        transform: translateY(0px);
                                    }
                                    75%{
                                        transform: translateY(-36px);
                                    }
                                    100%{
                                        transform: translateY(-36px);
                                    }
                                }
            /* <!-- 输入框 --> */
        .header_left_two{
            height: 36px;
            width: 500px;
            transition: 0.3s width;
            display: flex;
            background: #F4F4F4;
            border: 1px solid #E7E7E7;;
        }
            .input-with-select{
                margin-left: 10px;
                overflow: hidden;
                width: 100%;
                height: 34px;
                border: none;
                background-color: transparent;
                box-shadow: none;
                color: #999;
                font-size: 14px;
                line-height: 34px;
                transition: all 0.2s;
                cursor: pointer;
            }
            .icon-search{
                height: 36px;
                width: 48px;
                border: none;
                background: #E7E7E7;
            }
            /* 登录注册投稿 */
            .login{
                display: flex;
            }
            /* <!-- 登录注册 --> */
                .header_right_two{
                    height: 40px;
                    width: 120px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                    .header_right_two_one a{
                        display: flex;
                        margin-top: 10px;
                        height: 32px;
                        width: 65px;
                        color: #212121;
                        font-size: 14px;
                    }
                    .vp-container{
                        width: 350px;
                        padding: 16px 20px 12px 20px;
                        display: flex;
                        flex-direction: column;
                        border: 1px solid #F4F4F4;
                        box-sizing: border-box;
                    }
                        .titled{
                            font-size: 14px;
                            color: #212121;
                            margin-bottom: 15px;
                        }
                        .img-panel{
                                position: relative;
                                width: 320px;
                                height: 200px;
                                overflow: hidden;
                                background: url(//static.hdslb.com/images/base/danmu.png) no-repeat center;
                                display: flex;
                        }
                        /* css3循环 */
                            .img-panels{
                                -webkit-animation: 10s rowup linear infinite normal;
                                animation: 10s panels linear infinite normal;                              
                                }
                                @keyframes panels{
                                    0% {
                                        -webkit-transform: translateX(0, 0, 0);
                                        transform: translateX(0, 0, 0);
                                    }
                                    100% {
                                        -webkit-transform: translateX(-320px);
                                        transform: translateX(-320px);
                                        display: none;
                                    }}
                        .btn-box{
                            display: flex;
                            justify-content: space-between;
                        }
                            .btn{
                                display: inline-block;
                                cursor: pointer;
                                width: 48%;
                                height: 38px;
                                line-height: 38px;
                                text-align: center;
                                background-color: #00A1D6;
                                color: #FFFFFF;
                                font-size: 14px;
                                border-radius: 2px;
                                margin-top: 16px;
                                transition: 0.3s ease;
                                border: 1px solid #00A1D6;
                            }
                            .reg-btn{
                                background-color: #fff;
                                color: #00b5e5;
                            }
                .header_right_two_two{
                        height: 32px;
                        width: 28px;
                        margin-left: 10px;
                }
                    .header_right_two_two a{
                        color: #212121;
                        font-size: 14px;
                    }
                    .header_right_two_two a:hover{
                        color: #00a1d6;
                    }
                    .el-avatar{
                        width: 32px;
                        height: 32px;
                        margin-right: 5px;
                        border: 1px solid #C0C0C0;
                    }
                    /* <!-- 投稿 --> */
                .header_right_one{
                    width: 100px;
                    height: 36px;
                    margin-right: 30px;
                }
                    .dangers{
                        cursor: pointer;
                        color: #fff;
                        font-size: 14px;
                        width: 100px;
                        height: 36px;
                        text-align: center;
                        background: #FB7299;
                        border-radius: 2px;
                        margin-left: 14px;
                    }
</style>