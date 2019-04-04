<template>
 <div class="container" >
   <!--头部搜索框-->
   <header>
     <van-search
       placeholder="搜索商品，快去选购吧"
       use-action-slot
       input-align="center"
       shape="round"
     >
       <view slot="action" >搜索</view>
     </van-search>
   </header>
  <!--轮播图-->
   <article class="banner">
     <!--<swiper autoplay interval="3000" circular indicator-dots>-->
       <!--<swiper-item >-->
         <!--<image   src="http://t1.aixinxi.net/o_1d625hkgb1d8k1ulmr2gue8jgna.jpg-w.jpg" style="width: 100%;height:400rpx"></image>-->
       <!--</swiper-item>-->
     <!--</swiper>-->
     <img src="http://t1.aixinxi.net/o_1d625hkgb1d8k1ulmr2gue8jgna.jpg-w.jpg" />
   </article>
   <!--8小时快速发货-->
   <article class="banner-title">
     <span>8小时内快速发货</span>
     <span>30天内无忧退货</span>
     <span>48小时内快速退货</span>
   </article>
   <!--商品区-->
   <div >
    <ul class="shop-container">
      <li style="display: flex">
        <div class="shop-box" v-for="(shop,index) in hotList" :key="index" @click="shopList(shop.id)">
          <div class="shop-img">
            <img :src="shop.img"/>
          </div>
          <div class="shop-content">
            <p ><span class="shop-name">{{shop.name}}</span>{{shop.describe}}</p>
          </div>
          <div class="shop-price">
            ￥{{shop.price}} <span>满减</span>
          </div>
        </div>
      </li>
    </ul>
   </div>
   <!--人气推介-->
   <header class="hot-title">
     <h2>人气推荐</h2>
     <span>更多 ></span>
   </header>
   <figure class="people-shop" v-for="(list,index) in peopleList " :key="index" @click="shopList(list.id)">
     <!--商品图片-->
     <div class="people-img">
       <img :src="list.img"/>
     </div>
     <!--内容-->
     <div class="people-content">
       <h1>{{list.name}}</h1>
       <p>{{list.describe}}</p>
       <span>￥{{list.price}}</span>
     </div>
   </figure>
    <!--专题-->
   <article class="subject-container">
     <header class="hot-title">
       <h2>专题精选</h2>
       <span>更多 ></span>
     </header>
     <figure class="subject-img">
       <img :src="subjectList.poster" />
     </figure>
     <article class="subject-content">
       <h3>{{subjectList.title}}</h3>
       <p>{{subjectList.content}}</p>
     </article>
   </article>
 </div>
</template>

<script>
  export default {
    /**
     * 获取借口
     */
    created(){
    this.$http.get("home/getHotGoods")
      .then(res=>{
        this.hotList=res.data.data
      });
      this.$http.get("home/getChoice")
        .then(res=>{
          this.peopleList=res.data.data
        });
      this.$http.get("home/getSponsor")
        .then(res=>{
          this.subjectList=res.data.data
        })
    },
    data() {
      return{
        hotList:[],
        peopleList:[],
        subjectList:{}
      }
    },
    methods:{
      // 跳转详情页面
      shopList(shop){
        this.$nav.link('/pages/shoplist/main?id='+shop);
      },
    },
  };
</script>

<style scoped>
  .container {
    background-color: #f3f5f7;
  }
/*轮播图*/
  .banner{
    margin: 0 10rpx;
  }
  .banner img {
    width: 100%;
    height: 360rpx;
  }
  .banner-title {
    padding: 18rpx;
    background: white;
    color: rgb(162, 49, 62);
    font-size: 26rpx;
    margin-top: 10rpx;
  }
  .banner-title span{
    padding-left: 30rpx;
  }
  /*商品*/
  .shop-container{
    display: flex;
    flex-wrap: nowrap;
    margin-top: 18rpx;
    overflow: auto;
    padding-left: 15rpx;
  }
  .shop-box{
    font-size: 24rpx;
    background: white;
    margin-right: 20rpx;
    width: 360rpx;
    border-radius: 5rpx;
  }
  .shop-img{
    text-align: center;
  }
  .shop-img img{
    width: 220rpx;
    height: 220rpx;
    padding: 20rpx 0;
  }
  .shop-box p{
    color: #999;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    letter-spacing: 2rpx;
    line-height: 30rpx;
  }
  .shop-name{
    background: #f44;
    color: #fff;
    margin-right: 6rpx;
  }
  .shop-price{
    color: #f44;
    padding-bottom: 20rpx;
  }
  .shop-price span{
    border: 2rpx solid #f44;
    font-size: 20rpx;
    background: white;
  }
  /*人气推荐*/
  .hot-title{
    font-weight: normal;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20rpx;
    padding:  20rpx 20rpx;
    background: white;
    color: #333;
    font-size: 28rpx;
    border-bottom: 2rpx solid #F4F0EA;
  }
  .hot-title span{
    font-size: 24rpx;
  }
  .people-shop{
    display: flex;
    border-bottom: 1px solid #F4F0EA;
    background: white;
  }
  .people-img img{
    width: 110px;
    height: 110px;
    margin: 15px 10px;
    padding-right: 5px;
  }
  .people-content{
    padding-top: 15px;
    font-weight: normal;
    line-height: 20px;
  }
  .people-content h1{
    font-size: 14px;
    color: #333;
    padding-bottom: 10px;
  }
  .people-content p{
    font-size: 12px;
    color: #999;
    padding-bottom: 5px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .people-content span{
    font-size: 13px;
    color: #f44;
  }

  .subject-container {
    background: white;
  }
  .subject-img img{
    width: 100%;
    height: 200px;
  }

  .subject-content h3{
    font-size: 13px;
    margin-bottom: 5px;
    padding-left: 20rpx;
  }
  .subject-content p{
    color: #999;
    font-size: 13px;
    text-indent: 24px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    padding:0 20rpx;
  }

</style>
