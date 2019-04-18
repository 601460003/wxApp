<template>
  <div class="big-box">
    <div class="header">
      <!--logo-->
      <div class="logo">
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2955494591,2990420735&fm=26&gp=0.jpg"/>
        <span  v-if="mobile">{{mobile}}</span>
        <span @click="login" v-else="!mobile">登录/注册</span>
      </div>
    </div>
    <!--<div class="logo-right">-->
      <!--<img src="http://img4.imgtn.bdimg.com/it/u=430635927,4207059803&fm=26&gp=0.jpg"/>-->
    <!--</div>-->
    <!--导航栏-->
    <van-cell   is-link @click="allShop">
      <div slot="title"  class="icon-font">我的清单 </div>
      <div slot="icon" ><van-icon name="records" size="42rpx" /></div>
    </van-cell>
    <!--评价 导航-->
    <div class="top-top">
      <div class="van_icon" @click="allShopOne">
        <van-icon name="pending-payment"/>
        <div>
          全部
        </div>
      </div>
      <div class="van_icon" @click="allShopTow">
        <van-icon name="tosend"/>
        <div>
          待发货
        </div>
      </div>
      <div class="van_icon" @click=" allShopThree">
        <van-icon name="logistics"/>
        <div>
          已发货
        </div>
      </div>
      <div class="van_icon" @click="allShopFour">
        <van-icon name="records"/>
        <div>
          待评价
        </div>
      </div>
    </div>
    <!--分割-->
    <div class="spilt"></div>
    <!--我的积分-->
    <van-cell    is-link  @click="myIntegral">
      <div slot="title" class="icon-font">我的积分 </div>
      <div slot="icon" ><van-icon name="points" size="42rpx" /></div>
    </van-cell>
    <van-cell   is-link @click="myCoupons">
      <div slot="title" class="icon-font">我的优惠卷 </div>
      <div slot="icon" ><van-icon name="balance-list-o" size="42rpx" /></div>
    </van-cell>
    <van-cell  is-link @click="myService">
      <div slot="title" class="icon-font">在线客服 </div>
      <div slot="icon" ><van-icon name="service-o" size="42rpx" /></div>
    </van-cell>
    <van-cell   is-link @click="helpOther">
      <div slot="title" class="icon-font">帮助中心</div>
      <div slot="icon"><van-icon name="question-o" size="42rpx" /></div>
    </van-cell>
    <button class="over" v-if="mobile" @click="overEnter">退出登录</button>
    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
  import Dialog from '../../../static/vant/dialog/dialog';
  import Toast from '@/../static/vant/toast/toast';
  export default {
   onShow(){
      var user=this.$storage.getItem('user');
      if(user){
        this.mobile = JSON.parse(user).mobile;
        this.$http.get('me/getMember?mobile='+this.mobile)
          .then(res=>{
            this.mobile=res.data.data.mobile
          })
      }
    },

    data() {
      return {
        mobile:''
      };
    },
    methods:{
      // 路由到我的订单 5个方法
      allShop(){
        this.$nav.link('/pages/router/myOrder/main?activeName=0');
      },
      allShopOne(){
        this.$nav.link('/pages/router/myOrder/main?activeName=0');
      },
      allShopTow(){
        this.$nav.link('/pages/router/myOrder/main?activeName=1');
      },
      allShopThree(){
        this.$nav.link('/pages/router/myOrder/main?activeName=2');
      },
      allShopFour(){
        this.$nav.link('/pages/router/myOrder/main?activeName=3');
      },
      // 跳转到登录页面
      login(){
        this.$nav.link('/pages/router/login/main');
      },
      overEnter(){
        this.$storage.clean('user')
        this.mobile=''
      },
      helpOther(){
        this.$nav.link('/pages/router/helpother/main');
      },
      myService(){
        Dialog.alert({
          message: '客服热线：0760-22821552'
        })
      },
      myIntegral(){
        Dialog.alert({
          message: '你的积分为0'
        })
      },
      myCoupons(){
        Dialog.alert({
          message: '暂无优惠卷'
        })
      }
    },

  };
</script>

<style scoped>
  .icon-font{
    font-size: 32rpx;
    padding-left: 10rpx
  }
  .top-top{
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    font-size: 26rpx;
    padding: 15rpx 0;
  }
  van-icon{
    font-size: 46rpx;
  }
  .spilt{
    height: 20rpx;
    width: 100%;
    background: #f3f5f7;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }
  .header{
    background:blanchedalmond;
    height: 200rpx;
    width: 100%;
    position: relative;
  }
  .logo{
    padding: 50rpx 40rpx;
  }
  .logo span{
    font-size: 26rpx;
  }
  .logo img{
    width: 100rpx;
    height: 100rpx;
   vertical-align: middle;
    margin-right: 20rpx;
    border-radius: 60rpx;
  }
  .logo-right img{
    width: 80rpx;
    height: 80rpx;
    position: absolute;
    right: 30rpx;
    top: 60rpx;
  }
.over{
  margin-top: 80rpx;
  background: #f44;
  color: #fff;
}
</style>
