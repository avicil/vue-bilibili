<template>
  <div id="Wrapper">
      <div class="Wrapper_header">
          <div class="Wrapper_header_img">
              <div class="Wrapper_header_logo">
                  <div class="Wrapper_header_logo_img">
                      <img src="@/assets/img/Wrapper_img/logo.jpg" alt="加载失败">
                      <!-- <i class="iconfont">&#xe659;</i> -->
                  </div>
                  <div class="Wrapper_header_logo_massege">
                      <div class="Wrapper_header_logo_massege_one">
                         茂职院计算机工程系<img src="@/assets/img/Wrapper_img/lv.png" alt="加载失败" class="gender">
                      </div>
                      <div class="Wrapper_header_logo_massege_two">
                          茂名职业技术学院计算机工程系官方账号 修徳 强技 求实 创新 
                      </div>
                  </div>
                  <div class="Wrapper_header_logo_bottom">
                        <el-button class="Wrapper_header_logo_bottom_el" style="background: #f25d8e;box-shadow: 0 0 0 2px #fff;">关注</el-button>
                        <el-button class="Wrapper_header_logo_bottom_el" style="background: rgba(0,0,0,.45);box-shadow: 0 0 0 2px hsla(0,0%,100%,.3);">发信息</el-button>
                         <el-dropdown>
                        <span class="el-icon-more icon">
                        </span>
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
          <div class="Wrapper_header_Navigation">
              <!-- 动态 投稿 频道 收藏 -->
              <div class="navigation">
                <el-menu :default-active="$router.path" router class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#00a1d6" text-color="#222">
                    <el-menu-item index="/"><i class="el-icon-house" style="color: #00c091;font-size:20px;"></i>主页</el-menu-item>
                    <el-menu-item index="/dynamic"><i class="el-icon-star-off" style="color: #fb7299;font-size:20px;"></i>动态</el-menu-item>
                    <el-menu-item index="/contribution"><i class="el-icon-edit" style="color: #02b5da;font-size:20px;"></i>投稿 24</el-menu-item>
                    <el-menu-item index="/channel"><i class="el-icon-video-camera" style="color: #23c9ed;font-size:20px;"></i>频道 1</el-menu-item>
                    <el-menu-item index="/collection"><i class="el-icon-paperclip" style="color: #f3a034;font-size:20px;"></i>收藏 3</el-menu-item>
                </el-menu>
              </div>
              <!-- 搜索框 -->
              <div class="search">
                <el-input placeholder="搜索视频" suffix-icon="el-icon-search"  size="small ">
                </el-input>
              </div>
              <!-- 关注 粉丝 -->
              <div class="follow">
                  <ul class="follow_ul">
                    <li>
                        <a href="JavaScript:;">
                            <p style="line-height: 30px;font-size: 12px;color: #99a2aa;">关注数</p>
                            <p style="line-height: 16px;color: #222;font-size: 12px;">6</p>
                        </a>
                    </li>
                    <li>
                        <a href="JavaScript:;">
                            <p style="line-height: 30px;font-size: 12px;color: #99a2aa;">粉丝数</p>
                            <p style="line-height: 16px;color: #222;font-size: 12px;">231</p>
                         </a>
                    </li>
                    <li>
                        <p style="line-height: 30px;font-size: 12px;color: #99a2aa;">获赞数</p>
                        <p style="line-height: 16px;color: #222;font-size: 12px;">264</p>
                    </li>
                    <li>
                        <p style="line-height: 30px;font-size: 12px;color: #99a2aa;">播放数</p>
                        <p style="line-height: 16px;color: #222;font-size: 12px;">4550</p>
                    </li>
                  </ul>
              </div>
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
                 /*  学校logo图片*/
                    .Wrapper_header_logo_img{
                        height: 64px;
                        widows: 64px;
                        margin-left: 20px;
                    }
                    .Wrapper_header_logo_img img{
                        height: 64px;
                        width: 64px;
                        border-radius: 30px;
                    }
                    /* .iconfont{
                        position: absolute;
                        top: 50px;
                        left:70px;
                        background: #fff;
                        border-radius:100%;
                        font-size: 19px;
                        color: #1296db;
                    } */
                    /* 计算机工程系文字 */
                        .Wrapper_header_logo_massege_one{
                                font-weight: 700;
                                font-size: 18px;
                                color: #fff;
                                vertical-align: middle;
                                height: 20px;
                                width: 740px;
                            
                        }
                            .gender{
                                margin-left: 5px;
                                width: 28px;
                                height: 15px;
                                border-radius: 5px;
                            }
                        .Wrapper_header_logo_massege_two{
                                color: #d6dee4;
                                font-size: 12px;
                                line-height: 40px;
                                height: 26px;
                                width: 740px;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                               
                        }
                .Wrapper_header_logo_massege{
                    margin-left: 20px;
                    height: 54px;
                    width: 740px;
                }
                /* 关注和发信息按钮 */
                .Wrapper_header_logo_bottom{
                    margin-left: 220px;
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
                        line-height: 5px;
                        margin-right: 7px;
                        width: 76px;
                        height: 30px;
                    }
                .icon{
                    color: #fff;
                    font-size: 25px;
                    line-height: 30px;
                }
                /* 导航栏主页 动态 投稿 频道 收藏*/
            .Wrapper_header_Navigation{
                width: 1280px;
                height: 66px;
                display: flex;
                align-items: center;
                background: #fff;
            }
            /* 导航栏 */
                .navigation{
                    height: 66px;
                    width: 450px;
                }
                   .el-menu-item{
                       height: 66px;
                       width: 88.88px;
                       padding-left:10px;
                       font-size: 12px;
                       font-weight: 400;
                    }
                    .el-menu-item:hover{
                        color: #00a1d6!important;
                        border-bottom:2px solid  #00a1d6!important;
                    }
            /* 搜索框 */
            .search{
                width: 100px;
                height: 30px;
                margin-left: 10px;
            }
            /* 关注 粉丝 */
            .follow{
                margin-left: 450px;
                height: 66px;
            }
                 .follow_ul{
                     display: flex;
                 }
                    .follow_ul li{
                        margin-left: 5px;
                        width: 58px;
                        height: 66px;
                        padding: 10px 0;
                        text-align: center;
                        box-sizing: border-box;
                    } 
                    /* 滑过有bug过后在调 */
                    .follow_ul li :hover{
                         color: #00a1d6!important;
                    }
        .clearfix{
            width: 1280px;
            margin: 0 auto;
            border: 1px solid fuchsia;
            margin-top: 14px;
        }
</style>