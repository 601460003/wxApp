<template>
  <div class="shop-container">
    <!--商品-->
   <div class="shop-bigBox">
     <div class="shop-img">
       <img :src="shopList.img"/>
     </div>
     <!--详情-->
     <div class="shop-content">
       <p><span class="shop-content-header">自营</span>{{shopList.describe}}</p>
     </div>
     <p><span class="shopping-time">此商品于2019-03-10,00点参加闪购特卖,</span></p>
     <div class="shopping-price-box">
       <span class="shopping-price">￥{{shopList.price}}</span>
       <span style="position: absolute;right: 10px;color: #e4393c">好评度98.7%</span>
     </div>
     <div class="shop-vip">
       <p><span>PLUS</span>开通会员，此商品立省￥4.00</p>
     </div>
   </div>
    <div class="spilt"></div>
    <!--尺寸 颜色 大小-->
   <div class="shop-bigBox"  >
     <div class="shop-count" v-if="color">
       <div class="shop-count-left">颜色：</div>
       <div class="shop-color" v-for="(item,index) in shopList.colors" :key="index"
            @click="isType(index)"
            :class="{'shop-color-acticon':isTypes===index}"
       >
         <span  >{{item.categoryName}}</span>
       </div>
     </div>
     <div class="shop-count" v-if="size">
       <div class="shop-count-left" >尺寸：</div>
       <div class="shop-color" v-for="(item,index) in shopList.sizes" :key="index"
            @click="isType2(index)"
            :class="{'shop-color-acticon':isTypes2===index}"
       >
         <span  >{{item.categoryName}}</span>
       </div>
     </div>
     <!--<div class="shop-count" v-for="(item,index) in shopList.categorys" :key="index" v-if="item.type===2">-->
       <!--<div class="shop-count-left">尺寸：</div>-->
       <!--<div class="shop-style">{{item.categoryName}}</div>-->
     <!--</div>-->
     <div class="shop-count">
       <div class="shop-count-left">数量：</div>
       <div><van-stepper  :value="count" @plus="addCount()" @minus="outCount"/></div>
     </div>
     <div>
   </div>
      <van-goods-action>
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o"  text="购物车"/>
        <van-goods-action-button text="加入购物车" type="warning" @click="getShopCar" />
        <van-goods-action-button text="立即购买" />
      </van-goods-action>
    </div>
    <van-toast id="van-toast"/>
  </div>
</template>

<script>
  import Toast from '@/../static/vant/toast/toast'
  export default {

    onLoad(op) {
        this.isTypes=0;
        this.isTypes2=0;
      this.shopList = {};
      // 获取商品的id信息
      this.$http.get("home/getGoodById?id=" + op.id)
        .then(res => {
          var shopList = res.data.data;
          var colors =[],sizes= [];
          shopList.categorys.forEach(item=>{
            if(item.type == 1){
              colors.push(item);
              console.log(colors)
            }
            else{
              sizes.push(item)
            }
          })

          shopList.colors = colors;
          shopList.sizes = sizes;

          this.shopList = shopList;
          this.size = this.__size();
          this.color = this.__color()
        });
      // 登录成功后获取用户id
      var user = this.$storage.getItem("user");
      if (user) {
        this.mobileID = JSON.parse(user).id;
      }
    },

    data() {
      return {
        shopList:{},
        count:1,
        isTypes:0,
        isTypes2:0,
        mobileID:'',
        shopType:{},
        size:true,
        color:true,
        colorType:[]
      };
    },
    methods:{
      isType(index){
        this.isTypes=index;
      },
      isType2(index){
        this.isTypes2=index
      },
      addCount(){
         this.count++;
      },
      outCount(){
        this.count--;
      },
      getShopCar(){
        var shopping = {
          goodId: this.shopList.id,
          amount: this.count,
          sessionId: this.mobileID
        };
      if(this.mobileID){
        this.$http.post('home/addCar',shopping)
          .then(res=>{
            Toast('添加购物车成功');
          })
      }else{
        Toast('你还没登录');
      }
      },
      __size(){
        if(!this.shopList.categorys){
          return false;
        }
        var arr = this.shopList.categorys.filter(e => e.type === 2);
        return arr == null || arr.length == 0 ? false : true;
      },
      __color(){
        if(!this.shopList.categorys){
          return false;
        }
        var arr = this.shopList.categorys.filter(e => e.type === 1);
        return arr == null || arr.length == 0 ? false : true;
      },
    },
  };
</script>

<style scoped>
  .shop-bigBox{
    margin: 0 20rpx;
  }
  .shop-img{
    text-align: center;
    margin: 20rpx 0;
  }
  .shop-img img{
   width: 400rpx;
   height: 400rpx;
 }
  .shop-content{
    font-size: 28rpx;
    color: #333;
  }
  .shop-content-header{
    background: #f44;
    color: #fff;
    padding: 2rpx;
    font-size: 24rpx;
    margin-right: 10rpx;
  }
  .shopping-time {
    font-size: 24rpx;
    color: #f44;
    margin-top: 60rpx;
  }
  .shopping-price-box{
    margin-top: 20rpx;
    font-size: 24rpx;
  }
  .shopping-price {
    color: #e4393c;
    font-size: 32rpx;
  }
  .shop-vip {
    background: #dee1e6;
    padding: 6rpx 6rpx;
    font-size: 24rpx;
    color: #999;
    border-radius: 6rpx;
    margin-top: 30rpx;
  }
  .shop-vip p {
    margin: 0;
    padding: 0;
    font-size: 24rpx;
  }
  .shop-vip span {
    background: #363634;
    color: #e5d790;
    margin-right: 6rpx;
    padding: 2rpx 6rpx;
    font-size: 24rpx;
    border-radius: 30rpx;
  }
  .shop-count{
    display: flex;
    align-items: center;
    margin-top: 40rpx;
  }
  .shop-count-left{
    color: #999;
    font-size: 28rpx;
  }
  .shop-style{
    background: #f44;
    color: #fff;
    padding: 4rpx;
    font-size: 32rpx;
    border-radius: 10rpx;
  }
  .shop-color{
    background: #f3f5f7;
    color: #333;
    padding: 6rpx;
    font-size: 26rpx;
    border-radius: 16rpx;
    margin-right: 20rpx;
  }
  .shop-color-acticon{
    background: #f44;
    color: #fff;
  }
  .spilt{
    margin: 60rpx auto;
    height: 20rpx;
    width: 100%;
    border-top: 0.02667rem solid rgba(7, 17, 27, 0.1);
    border-bottom: 0.02667rem solid rgba(7, 17, 27, 0.1);
    background: #f3f5f7;
  }
</style>
