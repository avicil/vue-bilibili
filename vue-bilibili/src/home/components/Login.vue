<template>
  <div class="login">
    <Home-Header></Home-Header>
    <div style="background-color:#fff">
      <div class="top_banner">
        <img src="@/assets/img/Login_img/login.png" alt="">
      </div>
      <div class="title_line">
        <span class="tit">登录</span>
      </div>
      <div class="login_box clearfix">
        <div class="login_left">
            <div>
              <img src="@/assets/img/Login_img/login_ewm.png" alt="">
            </div>
            <div class="login_left_footer">
              <p class="txt">扫描二维码登录</p>
              <p class="app_link">请使用
                <a href="#">哔哩哔哩客户端</a><br>
                扫码登录<br>
                或扫码下载APP
                </p>
            </div>
        </div>
        <div class="login_right">
          <div class="form_login">
            <div class="type_tab">
              <span style="color:#02a7de;margin-right:20px">密码登录</span>
              <span>短信登录</span>
            </div>
            <Sign></Sign>
          </div>
        </div>
      </div>
      <p class="xieyi">
        登录即代表你同意
        <a href="#">用户协议</a>和
        <a href="#">隐私政策</a>
      </p>
    </div>
    <div class="login_footer clearfix">
      <ul>
        <li style="border-right:1px solid #ddd">
          <div class="tip">bilibili</div>
          <div class="cards"><a href="#">关于我们</a></div>
          <div class="cards"><a href="#">联系我们</a></div>
          <div class="cards"><a href="#">加入我们</a></div>
          <div class="cards"><a href="#">友情链接</a></div>
          <div class="cards"><a href="#">bilibili认证</a></div>
          <div class="cards"><a href="#">Investor Relations</a></div>
        </li>
        <li style="padding-left:40px;border-right:1px solid #ddd">
          <div class="tip">传送门</div>
          <div class="cards"><a href="#">帮助中心</a></div>
          <div class="cards"><a href="#">高级弹幕</a></div>
          <div class="cards"><a href="#">活动专题页</a></div>
          <div class="cards"><a href="#">侵权申诉</a></div>
          <div class="cards"><a href="#">活动中心</a></div>
          <div class="cards"><a href="#">用户反馈论坛</a></div>
          <div class="cards"><a href="#">壁纸站</a></div>
          <div class="cards"><a href="#">名人堂</a></div>
          <div class="cards"><a href="#">专车号服务中心</a></div>
        </li>
        <li style="padding-left:24px;width:280px">
          <div class="login_foo_right">
            <el-dropdown placement='top'>
              <a href="#" class="el-dropdown-link">
                <div class="box">
                  <div class="pic pic1"></div>
                  <em>客户端</em>
                </div>
              </a>
              <el-dropdown-menu slot="dropdown" style="height:132px;width:122px;">
                  <img src="@/assets/img/Login_img/ewm1.png" alt="加载失败" style="height:132px;width:132px;margin-left:1px;">
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown placement='top'>
              <a href="#" class="el-dropdown-link">
                <div class="box">
                  <div class="pic pic2"></div>
                  <em>新浪微博</em>
                </div>
              </a>
              <el-dropdown-menu slot="dropdown" style="height:132px;width:130px;">
                  <img src="@/assets/img/Login_img/ewm1.png" alt="加载失败" style="height:132px;width:132px;margin-left:1px;">
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown placement='top'>
              <a href="#" class="el-dropdown-link">
                <div class="box">
                  <div class="pic pic3"></div>
                  <em>官方微信</em>
                </div>
              </a>
              <el-dropdown-menu slot="dropdown" style="height:154px;width:150px;">
                  <img src="@/assets/img/Login_img/ewm2.png" alt="加载失败" style="height:154px;width:264px;margin-left:-110px;">
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </li>
      </ul>
    </div>
    <div class="login_bottom clearfix">
      <div class="login_bottom_left">
        <img src="@/assets/img/Login_img/bottom.jpg" alt="">
      </div>
      <div class="login_bottom_right">
        <p>广播电视节目制作经营许可证：（沪）字第1248号 | 网络文化经营许可证：沪网文[2016]2296-134号 | 信息网络传播视听节目许可证：0910417 | 互联网ICP备案：</p>
        <p>沪ICP备13002172号-3 沪ICP证：沪B2-20100043 | 违法不良信息举报邮箱：help@bilibili.com | 违法不良信息举报电话：4000233233转3 | 营业执照</p>
        <p> 上海互联网举报中心 |12318 全国文化市场举报网站 | 沪公网安备 31011002002436号 |儿童色情信息举报专区</p>
        <p>网上有害信息举报专区： 中国互联网违法和不良信息举报中心</p>
        <p>亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。</p>
        <p>公司名称：上海宽娱数码科技有限公司 | 公司地址：上海市杨浦区政立路485号 | 电话：021-25099888</p>
      </div>
    </div>
  </div>
</template>
<script>
import HomeHeader from '@/home/components/Header'
import Sign from "@/home/components/Sign.vue"

export default {
  name:"Login",
  components:{
    Sign,
    HomeHeader,
  },
}
</script>

<style scoped>
  *{
    margin:0;
    padding:0;
  }
  a{
    text-decoration: none;
  }
  /* 清除浮动 */
  .clearfix::after{
    display: block;
    content: '';
    clear: both;
  }
  /* 清除浮动 */

  /* login的top部分 */
  .top_banner{
    text-align: center;
    background-color: #00a0d8;
    height: 86px;
    margin-bottom: 20px;
  }
  .top_banner img{
    text-align:center;
  }
  /* login的top部分 */

  /* login的登录线部分 */
  .title_line{
    width: 980px;
    height: 28px;
    margin: 0 auto;
    border-bottom: 1px solid #ddd;
    margin-bottom: 40px;
    text-align: center;
  }
  .title_line .tit{
    height: 56px;
    line-height: 56px;
    margin:0 auto;
    padding:0 20px;
    background: #fff;
    text-align: center;
    font-size: 40px;
  }
  /* login的登录线部分 */

  /* login的登录内容部分 */
  .login_box{
    position: relative;
    width: 980px;
    margin:0px auto;
    /* border:1px solid red; */
    background: #fff;
  }
  /* login的登录左边部分 */
  .login_left{
    width:489px;
    float: left;
    border-right:1px solid #ddd;
    text-align: center;
  }
  .login_left img{
    width: 204px;
    height: 186px;
    /* margin-left: 35px; */
  }
  .login_left_footer{
    width: 489px;
    height: 155px;
    background: url(../../assets/img/Login_img/login1.png)0 -7px no-repeat;
  }
  .login_left_footer .txt{
    padding-top: 20px;
    text-align: center;
    color: #222;
    font-size: 18px;
    letter-spacing: 3px;
    margin-bottom: 5px;
  }
  .login_left_footer .app_link{
    font-size: 14px;
    color: #717171;
  }
  .login_left_footer .app_link a{
    color: #00a1d6;
  }
  /* login的登录左边部分 */

  /* login的登录右边部分 */
  .login_right{
    width: 489px;
    float: right;
    padding-right: 45px;
    box-sizing: border-box;
    /* border:1px solid red; */
  }
  .login_right .form_login{
    width: 425px;
    height: 288px;
    margin-left: 40px;
    margin-top: 40px;
  }
  .login_right .type_tab{
    cursor: pointer;
    margin-bottom: 12px;
    padding-left: 8px;
    font-size: 14px;
  }

  /* login的登录右边部分 */

  /* 协议 */
  .xieyi{
    margin:24px auto 0;
    width: 980px;
    font-size: 12px;
    color: #99a2aa;
    text-align: center;
    line-height: 16px;
    padding-bottom: 20px;
  }
  .xieyi a{
    color: #00a1d6;
  }

  .login_footer{
    width:1140px;
    margin:0 auto;
    margin-top: 40px;
  }
  .login_footer ul{
    list-style: none;
    margin:0 auto;
    float: left;
    margin-bottom: 30px;
  }
  .login_footer ul li{
    width: 348px;
    float: left;
    text-align: left;
    height: 130px;
    padding-right: 30px;
    font-size: 14px;
    display: list-item;
    /* border:1px solid red; */
  }
  .login_footer ul li .tip{
    margin-bottom: 22px;
    text-align: left;
    font-size: 14px;
    color:#99a2aa;
  }
  .login_footer ul li .cards{
    float: left;
    width: 116px;
    position: relative;
    margin-bottom: 12px;
    font-size: 14px;
  }
  .login_footer ul li .cards a{
    color: #222;
    outline: none;
    white-space: nowrap;
    font-size: 14px;
  }
  .login_footer ul li .cards a:hover{
    color: #00a1d6;
  }
  .login_foo_right{
    width: 280px;
    float: right;
  }
  .login_foo_right a{
    color: #222;
    margin-left: 23px;
    display: inline-block;
    /* border:1px solid red; */
  }
  .login_foo_right a:hover{
    color: #00a1d6;
  }
  .login_foo_right .box{
    width: 60px;
    height: 80px;
    position: relative;
    float: left;
    /* border:1px solid red; */
  }
  .login_foo_right .pic{
    width: 60px;
    height: 60px;
    /* margin-left: 11px; */
    position: relative;
    /* text-align: center; */
  }
  .login_foo_right .pic1{
    background:url(../../assets/img/Login_img/icons.png)no-repeat -1024px -194px;
  }
  .login_foo_right .pic2{
    background:url(../../assets/img/Login_img/icons.png)no-repeat -1024px -322px;
  }
  .login_foo_right .pic3{
    background:url(../../assets/img/Login_img/icons.png)no-repeat -1024px -66px;
  }
  .login_foo_right em{
    width: 60px;
    line-height: 14px;
    position: absolute;
    bottom: 0;
    left: 0;
    float: left;
    text-align: center;
    font-style: normal;
  }
  .login_bottom{
    width: 1160px;
    margin:0 auto;
  }
  .login_bottom .login_bottom_left img{
    width: 108px;
    float: left;
    margin-right: 20px;
  }
  .login_bottom p{
    line-height: 24px;
    color:#99a2aa;
    font-size: 12px;
    margin-bottom: 5px;
  }
</style>
