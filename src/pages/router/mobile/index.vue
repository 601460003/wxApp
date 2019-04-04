<template>
  <div class="mobile-box">
    <div class="mobile-title">手机号登录</div>
    <div class="mobile-input">
      <input type="text" placeholder="请输入手机号" maxlength="11" v-model="mobile">
      <div class="mobile-other" v-show="mobileFalse">你的输入有误，请从新输入</div>
    <!--<input type="text" placeholder="请输入短信验证码">-->
      <div>
        <van-cell-group>
          <van-field
            center
            clearable
            placeholder="请输入登录密码"
            border="false "
            use-button-slot
          >
            <!--<van-button slot="button" size="small" type="primary">发送验证码</van-button>-->
          </van-field>
        </van-cell-group>
      </div>
    </div>
    <!--<button class="mobile-btn" :class="{action:mobileTrue}" :disabled="!mobileTrue">获取验证码</button>-->
    <!--<div class="mobile-other" >使用密码验证登录</div>-->
      <div class="mobile-login-btn " :class="{'order-active':mobileTrue}" >
      <button @click="enterMobile" :disabled="!mobileTrue" >登录</button>
    </div>
    <van-toast id="van-toast"/>
  </div>
</template>
<script>
  import Toast from '@/../static/vant/toast/toast'
  export default{
    data(){
      return{
        mobile:'',
        aa:true
      }
    },
    methods:{
      enterMobile(){
        this.$http.get('me/getMember?mobile='+this.mobile)
          .then(res=>{
            console.log(this.mobile)
         if(res.data.data===null){
           Toast.fail('你输入的手机不存在');
         }else {
           if(res.data.code===100){
             if(this.mobile===res.data.data.mobile){
               Toast("登录成功");
               this.$storage.setItem('user',JSON.stringify(res.data.data))
               this.$nav.back(2)
             }
           }
         }
          })
      }
    },
    computed:{
      mobileTrue(){
        return /^1[3458]\d{9}$/.test(this.mobile)
      },
      mobileFalse(){
        return /^[0-9][125940]\d{9}$/.test(this.mobile)
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
    padding: 20rpx 0;
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
  .mobile-other{
    font-size: 26rpx;
    color: #f44;
    padding-left: 28rpx;
  }
  .hid{
    display: none;
  }
  .mobile-login-btn button{
    background:#1989fa ;
    font-size: 29rpx;
    color: white;
    margin-top: 40rpx;
  }
  .action{
    color: red;
    border: 1px solid #f44;
  }
  .order-active button{
    background: #1989fa;
    color: #ffffff;
  }
</style>
