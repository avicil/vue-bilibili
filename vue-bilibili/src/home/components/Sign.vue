<template>
    <div id="sign">
        <slot name="username"><input type="text" v-model.lazy="username" placeholder="你的手机号/邮箱：" class="input1"></slot>
        <slot name="pwd"><input type="password" v-model.lazy="pwd" placeholder="密码：" class="input1"></slot>
        <slot name="comfirmPwd"></slot>
        <!-- <slot name="code"><input type="text" v-model.lazy="code" placeholder="验证码：" class="code input1"></slot> -->
        <!-- <slot name="pcode"><RandomCode v-if="showCode"></RandomCode></slot> -->
        <div class="remember">
          <div class="remember-tool">
            <label class="remember-check"><input type="checkbox" class="input-checkbox"></label>记住我
            <span>不是自己的电脑上不要勾选此项</span>
          </div>
          <div>
            <a href="#">无法验证？</a>
            <a href="#">忘记密码？</a>
          </div>
        </div>
        <div class="clearfix">
          <slot name="sub"><input type="button" value="登录" class="sub input1" @click="subHandle"></slot>
          <slot name="sub1">
            <router-link to="/register" tag="a" class="btn reg-btn">
              <input type="button" value="注册" class="sub1 input1">
            </router-link>
          </slot>
        </div>
        <div class="sns">
          <a href="#"><i class="fa fa-weibo i1" aria-hidden="true" style="background-color:rgb(245,55,70);border:1px solid rgb(183,31,8);"></i>微博账号登录</a>
          <a href="#"><i class="fa fa-qq i2" aria-hidden="true" style="background-color:rgb(0,130,204);border:1px solid rgb(0,103,185);margin-left:20px"></i>QQ账号登录</a>
        </div>
    </div>
</template>

<script>
import RandomCode from "@/home/components/RandomCode"
import 'font-awesome/css/font-awesome.css';

export default {
    name:"Sign",
    data() {
        return {
            username:'',
            pwd:'',
            code:'',
            showCode:true
        }
    },
    components:{
        RandomCode
    },
    methods: {
        changeCode(){
            this.showCode = false;
            // 在修改数据之后立即使用这个方法，获取更新后的DOM
            this.$nextTick(()=>{
                this.showCode = true;
            })
        },
        subHandle(){
            //
            // let pcode = sessionStorage.getItem('pcode');
            // if(this.code != pcode){
            //     // console.log('你的验证码错误！');
            //     alert('你的验证码错误！');
            //     this.code = '';
            //     // console.log('验证码要刷新！');
            //     this.changeCode();
            // }else{
            //     //验证码正确
                if(this.username == '' | this.pwd == ''){
                    // console.log('用户名和密码都不能为空');
                    alert('用户名和密码都不能为空')
                    this.username = '';
                    this.pwd = '';
                    // this.code = '';
                    // this.changeCode();
                }else{
                    let sql_name = localStorage.getItem('1'+this.username);
                    let sql_pwd = localStorage.getItem('0'+this.username);
                    if(this.username != sql_name){
                        //用户名没有注册
                        // console.log('没注册，转去注册页面')
                        alert(this.username+'该用户没有注册，转去注册页面');
                        this.$router.replace('/register');
                    }else{
                        //用户名已存在，判断账号密码是否正确
                        if(this.username == sql_name && this.pwd == sql_pwd){
                            //登录成功
                            // console.log('登录成功，跳转到首页，并且存一个标记，代表用户已经登录')
                            this.$router.replace('/home');
                            localStorage.setItem('login',this.username);
                        }else{
                            //用户名,密码,验证码清空
                            //验证码刷新
                            alert('密码错误');
                            // this.username = '';
                            this.pwd = '';
                            // this.code = '';
                            // this.changeCode();
                        }
                    }
                }
            }
        }
    // },
}
</script>

<style scoped>
    *{
      margin:0;
      padding: 0;
    }
    .clearfix::after{
    display: block;
    content: '';
    clear: both;
  }
    #sign{
        margin:20px auto;
        width:414px;
        /* border:1px solid yellow; */
        background-color: #fff;
    }
    #sign .input1{
        display: inline-block;
        padding: 10px;
        box-sizing: border-box;
        margin-bottom: 20px;
        width:414px;
        height:40px;
        font:14px/40px "微软雅黑";
        outline: none;
        border:none;
        border: 1px solid #ddd;
        /* background-color: rgb(232, 240, 252); */
        border-radius: 4px;
    }
    #sign input.code{
        width:300px;
    }
    #sign input.sub{
        float: left;
        width:184px;
        padding:0;
        height:36px;
        background-color:#00a7de;
        border:1px solid #0381aa;
        font:14px/38px "微软雅黑";
        color:#fff;
        border-radius: 4px;
    }
    #sign input.sub1{
        float:right;
        width:184px;
        padding:0;
        height:36px;
        background-color:#fff;
        border:1px solid #ccc;
        font:14px/38px "微软雅黑";
        color:#555;
        border-radius: 4px;
    }
    .remember{
      margin:10px 0;
      color:#717171;
      width: 410px;
      font-size: 12px;
      height: 16px;
    }
    .remember-tool{
      display: flex;
      align-items: center;
      cursor: pointer;
      justify-content: flex-start;
      width: 236px;
      float: left;
    }
    .remember-check{
      width: 14px;
      height: 14px;
      margin-right: 8px;
    }
    .input-checkbox{
      width: 14px;
      height: 14px;
      display: inline-block;
      margin-right: 8px;
      /* background-color: #fff; */
    }
    .remember span{
      color: #bbb;
      margin-left: 10px;
      font-size: 12px;
    }
    .remember a{
      color: #00a1d6;
      float: right;
    }
    .sns{
      /* padding:12px 0; */
      font-size: 12px;
      /* border:1px solid red; */
      height: 21px;
    }
    .sns a{
      display: inline-block;
      /* float: left; */
      color: #717171;
    }
    .sns .i1, .i2{
      width: 21px;
      height: 21px;
      line-height: 21px;
      display: inline-block;
      margin-right: 5px;
      color: #fff;
      text-align: center;
      vertical-align: middle;
      border-radius: 3px;
    }
</style>
