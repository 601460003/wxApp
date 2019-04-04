<template>
  <div class="login-box">
    <div class="login-img">
      <img src="https://ww1.sinaimg.cn/large/007i4MEmgy1g1f1sfb86pj30ao06z3yq.jpg"/>
    </div>
    <!--<div class="login-type active">微信登录</div>-->
    <!--<div class="login-type">邮箱账号登录</div>-->
    <div class="login-type active" @click="enterMobile">手机用户一键登录</div>
    <div class="login-footer " @click="loginMobile">手机快捷注册 </div>
  </div>
</template>
<script>
  export  default {
    methods:{
      loginMobile(){
        this.$nav.link('/pages/router/mobileLogin/main');
      },
      enterMobile(){
        this.$nav.link('/pages/router/mobile/main');
      }
    }
  }
</script>

<style scoped>
  .login-box{
    margin: 30rpx;
  }
  .login-img{
    margin-top: 50rpx;
  }
  .login-img img{
    width: 100%;
    height: 400rpx;
    border-radius: 15rpx;
  }
  .login-type{
    border: 1px solid #BB3343;
    color: #BB3343;
    text-align: center;
    padding: 20rpx 0;
    font-size: 29rpx;
    margin-top: 30rpx;
    border-radius: 10rpx;
  }
  .login-footer{
    text-align: center;
    font-size: 29rpx;
    color: #333;
    margin-top: 35rpx;
  }
  .active{
    color: #FFFFFF;
    background:#1D82FE ;
    border: 1px solid #1D82FE;
  }
</style>
