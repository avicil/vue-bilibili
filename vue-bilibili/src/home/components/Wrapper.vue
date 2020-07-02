<template>
  <div id="Wrapper">
      <div class="Wrapper_header">
          <div class="Wrapper_header_img">
              <div class="Wrapper_header_logo">
                  <div class="h-avatar">
                      <img src="@/assets/img/Wrapper_img/logo.jpg" alt="加载失败" class="h-avatars">
                      <span title="机构认证" class="user-auth-subscript"></span>
                  </div>
                  <div class="h-basic">
                      <div class="h-basic-spacing">
                            <span class="h-name">茂职院计算机工程系</span>
                            <a href="JavaScript:;" target="_blank" lvl="2" class="level"></a>
                      </div>
                      <div>
                          <h4 class="h-sign">茂名职业技术学院计算机工程系官方账号修徳 强技 求实 创新</h4>
                      </div>
                  </div>
                  <div class="Wrapper_header_logo_bottom">
                        <el-button class="Wrapper_header_logo_bottom_el" style="background: #f25d8e;box-shadow: 0 0 0 1px #fff;">关注</el-button>
                        <el-button class="Wrapper_header_logo_bottom_el" style="background: rgba(0,0,0,.45);box-shadow: 0 0 0 1px hsla(0,0%,100%,.3);">发消息</el-button>
                    <el-dropdown>
                        <span class="el-icon-more icon"></span>
                        <el-dropdown-menu slot="dropdown" style="margin-top:0px;">
                            <el-dropdown-item>加入黑名单</el-dropdown-item>
                            <el-dropdown-item>悄悄关注</el-dropdown-item>
                            <el-dropdown-item>个人信息举报</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                  </div>
              </div>
          </div>
          <!--  /* 导航栏主页 动态 投稿 频道 收藏*/ -->
          <div class="wrappers">
              <div class="n-inner">
                  <div class="n-tab-links">
                    <a href="/488524310" class="n-btn n-index n-fans n-404 router-link-exact-active router-link-active active">
                        <i class="iconfont" style="color:#00c091;font-size:17px">&#xe61b;</i>
                        <span class="n-text">主页</span>
                    </a>
                    <a href="/488524310/dynamic" class="n-btn">
                        <i class="iconfont" style="color:#fb7299;font-size:17px">&#xe662;</i>
                        <span class="n-text">动态</span>
                    </a>
                    <a href="/488524310/video" class="n-btn">
                        <i class="iconfont" style="color:#02b5da;font-size:20px">&#xe615;</i>
                        <span class="n-text">投稿</span>
                        <span class="n-num">24</span>
                    </a>
                    <a href="/488524310/channel/index" class="n-btn">
                        <i class="iconfont" style="color:#23c9ed;font-size:17px">&#xe607;</i>
                        <span class="n-text">频道</span>
                        <span class="n-num">1</span>
                    </a>
                    <a href="/488524310/favlist" class="n-btn">
                        <i class="iconfont" style="color:#f3a034;font-size:22px">&#xe870;</i>
                        <span class="n-text">收藏</span>
                        <span class="n-num">3</span>
                    </a>
                  </div>
                  <div class="g-search">
                      <input type="text" placeholder="搜索视频" class="space_input">
                      <span class="icon search-btn"></span>
                  </div>
                  <div class="n-statistics">
                    <a href="/488524310/fans/follow" class="n-data" title="6">
                      <p class="n-data-k">关注数</p><p class="n-data-v">6</p>
                    </a>
                    <a href="/488524310/fans/fans" class="n-data" title="234">
                      <p class="n-data-k">粉丝数</p><p class="n-data-v">234</p>
                    </a>
                    <div title="视频、动态、专栏累计获赞275" class="n-data">
                        <p class="n-data-k">获赞数</p><p class="n-data-v">275</p>
                    </div>
                    <div title="截止昨天，播放数总计为4,593" class="n-data">
                        <p class="n-data-k">播放数</p><p class="n-data-v">4593</p>
                    </div>
                  </div>
              </div>
              <div class="n-cursor" style="width: 50px; left: 25px;"></div>
          </div>
      </div>
      <div class="clearfix">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
    name:'Wrapper',
    data () {
        return {
        }
    },
    methods:{
        handleSelect(key, keyPath) {
                console.log(key, keyPath);
        }
    }
}
</script>

<style scoped>
    .Wrapper{
        padding: 0px;
        margin: 0px;
    }
        .Wrapper_header{
            width: 1280px;
            height: 266px;
            margin: 0 auto;
        }
            .Wrapper_header_img{
                width: 1280px;
                height: 200px;
                background: url(../../assets/img/Wrapper_img/background-img.png);
                background-size: cover;
            }
                .Wrapper_header_logo{
                    position: relative;
                    top: 115px;
                    height: 84px;
                    width: 1280px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    background-image: url(../../assets/img/Wrapper_img/background-imgs.png);
                    background-repeat: repeat-x;
                }
                /* 学校logo */
                    .h-avatar{
                        margin-left: 25px;
                        position: relative;
                        top:-8px;
                        float: left;
                        width: 64px;
                        height: 64px;
                        border: 2px solid hsla(0,0%,100%,.4);
                        border-radius: 52px;
                    }
                        .h-avatars{
                            width: 64px;
                            height: 64px;
                            background: #fff;
                            border-radius: 48px;
                        }
                        .user-auth-subscript{
                            background-position: -4px -53px;
                            display: block;
                            right: 0;
                            top: 44px;
                            width: 20px;
                            height: 20px;
                            position: absolute;
                            z-index: 9;
                            background-image: url(../../assets/img/Wrapper_img/user-auth.png);
                            background-repeat: no-repeat;
                        }
                    .h-basic{
                        float: left;
                        color: #fff;
                        font-size: 0;
                        margin: -5px 0 0 15px;
                    }
                        .h-name{
                            display: inline-block;
                            margin-right: 5px;
                            font-weight: 700;
                            line-height: 18px;
                            font-size: 18px;
                            vertical-align: middle; 
                        }
                        .level{
                            background-position: -21px -82px;
                            display: inline-block;
                            width: 28px;
                            height: 16px;
                            margin-right: 5px;
                            vertical-align: middle;
                            background-image: url(../../assets/img/Wrapper_img/lv.png);
                            background-repeat: no-repeat;  
                        }
                        .h-sign{
                            margin-top: 10px;
                            color: #d6dee4;
                            font-size: 12px;
                            line-height: 26px;
                            font-weight: 100;
                            width: 740px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                /* 关注和发信息按钮 */
                .Wrapper_header_logo_bottom{
                    margin-left: 205px;
                    margin-top: 20px;
                    padding-top: 18px;
                    height: 47px;
                    width: 222px;
                    display: flex;
                }
                    .Wrapper_header_logo_bottom_el{
                        color: #fff;
                        font-size: 14px;
                        text-align: center;
                        line-height: 2px;
                        margin-right: 7px;
                        width: 76px;
                        height: 33px;
                    }
                .icon{
                    color: #fff;
                    font-size: 25px;
                    line-height: 30px;
                }
                /* 导航栏*/
            .wrappers{
                width: 1280px;
                margin: 0 auto;
                position: relative;
            }
            /* 主页 动态 投稿 频道 收藏 搜索栏 粉丝*/
                .n-inner{
                    height: 65px;
                    background: #fff;
                    box-shadow: 0 0 0 1px #eee;
                    border-radius: 0 0 4px 4px;
                    padding: 0 20px;
                    font-size: 0;
                    display: block;
                    display: flex;
                    align-items: center;
                }
                /* 主页 动态 投稿 频道 收藏 */
                    .n-tab-links{
                        display: inline-block;              
                    }
                        .n-btn{
                            display: inline-block;
                            font-size: 0;
                            line-height: 60px;
                            margin-right: 16px;
                            position: relative;
                            padding-right: 15px;
                            vertical-align: middle; 
                            
                        }
                            .iconfont {
                                display: inline-block;
                                width: 20px;
                                margin-right: 4px;
                                vertical-align: middle;
                            }
                            .n-text{
                                color: #222;
                                font-size: 13px;
                                vertical-align: middle;
                            }
                                .n-num{
                                    margin-left: 2px;
                                    font-size: 12px;
                                    color: #99a2aa;
                                    font-family: Arial;
                                    vertical-align: middle;
                                }
                    /* 输入框 */
                    .g-search{
                        position: relative;
                        display: inline-block;
                        width: 100px;
                        height: 30px;                    
                    }
                        .space_input{
                            position: absolute;
                            height: 30px;
                            width: 100px;
                            padding: 0 29px 0 10px;
                            line-height: 30px;
                            color: #222;
                            font-size: 12px;
                            border: 1px solid #ccd0d7;
                            border-radius: 15px;
                            box-shadow: none;
                            box-sizing: border-box
                        }
                        .search-btn{
                            position: absolute;
                            right: 8px;
                            top: 0;
                            width: 18px;
                            height: 30px;
                            background-position: -1111px -81px;
                            display: inline-block;
                            background-repeat: no-repeat;
                            background-image: url(//s1.hdslb.com/bfs/static/jinkela/space/asserts/icons.png);  
                        }
                            /* 关注 粉丝 */
                    .n-statistics{
                        margin-left: 460px;
                        height: 66px; 
                    }
                        .n-statistics a{
                            text-decoration: none;
                        }
                        .n-data{
                            display: flex;
                            flex-direction: column;
                            -ms-flex-pack: center;
                            justify-content: center;
                            float: left;
                            width: 58px;
                            height: 66px;
                            padding: 10px 0;
                            text-align: center;
                            box-sizing: border-box;
                        }
                            .n-data-k{
                                line-height: 14px;
                                font-size: 12px;
                                color: #99a2aa; 
                            }
                            .n-data-v{
                                line-height: 16px;
                                margin-top: 5px;
                                color: #222;
                                font-size: 12px;   
                            }
                /*蓝色下划线  */
                .n-cursor{
                    margin-left: -5px;
                    width: 50px;
                    background: #00a1d6;
                    height: 3px;
                    position: absolute;
                    bottom: -1px;
                }
        /* 其他页面 */
        .clearfix{
            width: 1280px;
            margin: 0 auto;
            border: 1px solid fuchsia;
            margin-top: 14px;
        }
</style>