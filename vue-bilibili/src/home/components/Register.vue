<template>
  <div class="register">
    <Home-Header></Home-Header>
    <div style="background-color:#fff">
      <div class="top_banner">
        <img src="@/assets/img/Login_img/login.png" alt="">
      </div>
      <div class="title_line">
        <span class="tit">注册</span>
      </div>
      <div class="register_box">
        <form>
          <div class="el-input">
            <div class="form_group">
              <input type="text" v-model.lazy="username" placeholder="手机号或邮箱：" class="el-input__inner" style="margin-bottom: 40px;">
            </div>
          </div>
           <div class="el-input">
            <div class="form_group">
              <input type="password" v-model.lazy="pwd" placeholder="密码：" class="el-input__inner" style="margin-bottom: 40px;">
            </div>
          </div>
           <div class="el-input">
            <div class="form_group">
              <input type="password" v-model.lazy="comfirmPwd" placeholder="确认密码：" class="el-input__inner" style="margin-bottom: 40px;">
            </div>
          </div>
          <div class="el-input">
            <div class="form_group">
                <input  type="text" v-model.lazy="code" placeholder="验证码：" class="code el-input__inner">
                <span><RandomCode v-if="showCode"></RandomCode></span>
            </div>
          </div>
          <div style="margin:0 auto;font-size:12px;width:420px;height:40px;line-height:40px;">
            <div style="position:relative">
              <label style="width:14px;height:14px;margin-right:20px"><input type="checkbox" class="input-checkbox"></label>我已同意
              <a href="#" style="color:#00a1d6">《哔哩哔哩弹幕网用户使用协议》</a>和
              <a href="#" style="color:#00a1d6">《哔哩哔哩隐私政策》</a>
            </div>
          </div>
          <div class="el-input">
            <div class="form_group">
                <input type="button" value="注册"  @click="registerHandle" class="el-input__inner" style="background-color:#00a1d6;color:#fff">
            </div>
          </div>
          <div style="margin:0 auto;font-size:12px;text-align:right;width:420px;height:40px;line-height:40px;">
            <div>
              <a href="#" style="color:#00a1d6">已有账号，直接登录></a>
            </div>
          </div>
        </form>
      </div>
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
import Sign from "@/home/components/Sign"
import RandomCode from "@/home/components/RandomCode"

export default {
  name:"Register",
  components:{
    Sign,
    RandomCode,
    HomeHeader
  },
  data() {
      return {
          username:'',
          pwd:'',
          comfirmPwd:'',
          code:'',
          showCode:true
      }
  },
  methods: {
      changeCode(){
          this.showCode = false;
          // 在修改数据之后立即使用这个方法，获取更新后的DOM
          this.$nextTick(()=>{
              this.showCode = true;
          })
      },
      registerHandle(){
          const pcode = sessionStorage.getItem('pcode');
          if(this.code != pcode){
              alert('验证码错误！');
              this.code = '';
              this.changeCode();
          }else{
              //验证码正确，判断用户名和密码
              if(this.username == '' || this.pwd == '' || this.comfirmPwd == ''){
                  //用户名或密码为空
                  alert('用户名和密码都不能为空！');
                  this.changeCode();
                  this.code = ''
              }else{
                  //用户名和密码都不为空
                  //判断密码是否一致
                  if(this.pwd != this.comfirmPwd){
                      //密码不一致
                      alert('密码和确认密码不一致');
                      this.pwd = '';
                      this.comfirmPwd = '';
                      this.code = '';
                      this.changeCode();
                  }else{
                      //密码和确认密码一致,判断用户名是否已经注册
                      const sql_name = localStorage.getItem('1'+ this.username);
                      if(sql_name != null){
                          //说明数据库中已有该用户信息，所以跳转去登录界面
                          alert('你已经注册过，请登录！')
                          this.$router.repalce('/login');
                      }else{
                          //说明满足注册条件
                          localStorage.setItem('1'+this.username,this.username);
                          localStorage.setItem('0'+this.username,this.pwd);
                          alert('注册成功，请登录')
                          this.$router.replace('/login')
                      }

                  }
              }
          }
      }
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

    /* register的注册线部分 */
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
    /* register的注册线部分 */

    /* register的中间部分 */
    .register_box{
      width: 980px;
      margin:0 auto;
      padding:60px 0;
    }
    .register_box form{
      width: 980px;
      height: 400px;
      margin: 0 auto;
    }
    .register_box .form_group{
      width: 420px;
      font-size: 12px;
      margin:0 auto;
      position: relative;
    }
    .register_box .form_group span{
      position: absolute;
      right: 1px;
      top: 1px;
      border-radius: 4px;
    }
    .register_box .el-input__inner{
      color: #606266;
      padding-left: 20px;
    }
    .register_box .el-input{
      position: relative;
    }
    .input-checkbox{
      width: 14px;
      height: 14px;
      border:1px solid red;
      position: absolute;
      top: 12px;
    }
    /* register的中间部分 */


    /* login的尾部 */
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
    /* login的尾部 */
</style>
