<template>
  <div class="mobile-box">
    <div class="mobile-title">手机号注册</div>
    <div class="mobile-input">
      <input type="text" placeholder="请输入手机号" maxlength="11" v-model="mobile">
      <div class="mobile-other" v-show="mobileFalse">你输入的格式不正确</div>
      <div>
        <van-cell-group>
          <van-field
            center
            clearable
            placeholder="请输入短信验证码"
            border="false "
            use-button-slot
          >
            <van-button slot="button" size="small" type="info">发送验证码</van-button>
          </van-field>
        </van-cell-group>
      </div>
      <!--<input type="text" placeholder="请输入短信验证码">-->
      <input type="text" placeholder="请输入密码">
    </div>
    <!--<button class="mobile-btn" :class="{action:mobileTrue}" :disabled="!mobileTrue">获取验证码</button>-->
    <div class="mobile-login-btn">
      <button @click="loginMobile" :disabled="!mobileTrue">注册</button>
    </div>
    <van-toast id="van-toast"/>
  </div>
</template>
<script>
  import Toast from '@/../static/vant/toast/toast'
  export default{
    data(){
      return{
        mobile:''
      }
    },
    methods:{
      loginMobile(){
        var p={mobile:this.mobile}
        this.$http.post("me/addMember",p)
          .then(res=>{
            if(res.data.code===100){
              Toast.success("注册成功");
              this.$storage.setItem("user",JSON.stringify(res.data.data));
               this.$nav.back(2)
            }else {
              Toast.fail("手机号码已存在");
            }
          })
      }
    },
    computed:{
      mobileTrue(){
        return /^1[3458]\d{9}$/.test(this.mobile)
      },
      mobileFalse(){
        return /^[0-9][124590]\d{9}$/.test(this.mobile)
      },
    }
  }
</script>

<style scoped>
  .mobile-box{
    margin: 40rpx;
  }
  .mobile-title{
    text-align: center;
    color:#333 ;
    font-size: 28rpx;
    margin-top: 25rpx;
    margin-bottom: 150rpx;
  }
  .mobile-input input{
    font-size: 26rpx;
    padding: 26rpx 0;
    border-bottom: 1px solid #dee1e6;
    margin-left: 29rpx;
  }
  .mobile-btn{
    width: 190rpx;
    height: 60rpx;
    line-height: 60rpx;
    font-size: 24rpx;
    background: #fff;
    border: 1px solid #dee1e6;
    color: #999;
    position: absolute;
    right: 50rpx;
    top: 320rpx;
  }
  /*.mobile-other{*/
    /*font-size: 28rpx;*/
    /*text-align: right;*/
    /*color: #333;*/
    /*margin-top: 40rpx;*/
    /*position: relative;*/
  /*}*/
  .mobile-other{
    font-size: 26rpx;
    color: #f44;
    padding-left: 28rpx;
  }
  .mobile-login-btn button{
    background:#1989FA;
    font-size: 29rpx;
    color: white;
    margin-top: 40rpx;
  }
  .action{
    color: red;
    border: 1px solid #f44;
  }
</style>
