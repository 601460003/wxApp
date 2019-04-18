<template>
  <div style="background:#f3f5f7 ; min-height: 100vh">
    <van-tabs :active="activeName">
      <!--//全部商品-->
      <van-tab title="全部">
       <div class="container" v-for="(shop,index) in allShops" :key="index" v-if="mobileID">
         <!--订单号-->
         <header class="order-number" >
           <span class="order-number-left">商品号：</span>
           <span class="order-number-right">{{shop.num}}</span>
           <span class="order-number-state"></span>
         </header>
         <!--内容盒子-->
         <div class="order-box" v-for="(o,item) in shop.list" :key="item" >
           <!--左边商品图-->
           <div class="order-img">
             <img :src="o.img" />
           </div>
           <!--右边商品信息-->
           <div class="order-content">
             <!--第一栏-->
             <div class="order-header">
               <span>{{o.name}}</span>
               <span>￥{{o.price}}</span>
             </div>
             <!--第二栏-->
             <div class="order-main">
               <p class="order-main-left">{{o.describe}}</p>
               <p class="order-main-right">x{{o.amount}}</p>
             </div>
             <!--第三栏-->
           </div>
         </div>
         <div class="order-footer">
           <span>共{{shop.list.length}}件商品 合计：￥{{shop.totalPrice}}</span>
         </div>
       </div>
      </van-tab>
      <!--待发货-->
      <!--待发货-->
      <!--待发货-->
      <!--待发货-->
      <van-tab title="待发货">
        <div class="container" v-for="(shop,index) in stayShop" :key="index" v-if="mobileID" >
          <!--订单号-->
          <header class="order-number" >
            <span class="order-number-left">订单号：</span>
            <span class="order-number-right">{{shop.num}}</span>
            <span class="order-number-state">待发货</span>
          </header>
          <!--内容盒子-->
          <div class="order-box" v-for="(o,item) in shop.list" :key="item" >
            <!--左边商品图-->
            <div class="order-img">
              <img :src="o.img" />
            </div>
            <!--右边商品信息-->
            <div class="order-content">
              <!--第一栏-->
              <div class="order-header">
                <span>{{o.name}}</span>
                <span>￥{{o.price}}</span>
              </div>
              <!--第二栏-->
              <div class="order-main">
                <p class="order-main-left">{{o.describe}}</p>
                <p class="order-main-right">x1</p>
              </div>
              <!--第三栏-->
            </div>
          </div>
          <div class="order-footer">
            <span>共{{shop.list.length}}件商品 合计：￥{{shop.totalPrice}}</span>
          </div>
        </div>
      </van-tab>
      <!--已发货-->
      <!--已发货-->
      <!--已发货-->
      <van-tab title="已发货">
        <div class="container" v-for="(shop,index) in alreadyShop" :key="index" v-if="mobileID" >
          <!--订单号-->
          <header class="order-number" >
            <span class="order-number-left">订单号：</span>
            <span class="order-number-right">{{shop.num}}</span>
            <span class="order-number-state">已发货</span>
          </header>
          <!--内容盒子-->
          <div class="order-box" v-for="(o,item) in shop.list" :key="item" >
            <!--左边商品图-->
            <div class="order-img">
              <img :src="o.img" />
            </div>
            <!--右边商品信息-->
            <div class="order-content">
              <!--第一栏-->
              <div class="order-header">
                <span>{{o.name}}</span>
                <span>￥{{o.price}}</span>
              </div>
              <!--第二栏-->
              <div class="order-main">
                <p class="order-main-left">{{o.describe}}</p>
                <p class="order-main-right">x1</p>
              </div>
              <!--第三栏-->
            </div>
          </div>
          <div class="order-footer">
            <span>共{{shop.list.length}}件商品 合计：￥{{shop.totalPrice}}</span>
          </div>
        </div>
      </van-tab>
      <!--待评价-->
      <van-tab title="待评价">
       <div style="text-align: center;color: #999;margin-top: 100rpx"> 暂无评价~</div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        activeName:0,
        mobileID:'',
        allShops:[],
        stayShop:[],
        alreadyShop:[]
      }
    },
    onLoad(op){
      this.activeName=op.activeName
    },
    onShow(){
      let user=this.$storage.getItem('user');
      if (user) {
        this.mobileID=JSON.parse(user).id
        this.$http.get('home/getOrderList?'+'&sessionId='+ this.mobileID)
          .then(res=>{
            this.allShops=res.data.data
          })
      }else {
        this.allShops=''
      }
      //待发货订单信息
    if(user){
      this.$http.get('home/getOrderList?status=1'+'&sessionId='+ this.mobileID)
        .then(res=>{
          this.stayShop=res.data.data
        })
    }else {
      this.stayShop=''
    }
      //已经发货信息
      if(user){
        this.$http.get('home/getOrderList?status=2'+'&sessionId='+ this.mobileID)
          .then(res=>{
            this.alreadyShop=res.data.data
          })
      }else {
        this.alreadyShop=''
      }
    },

    // 新订单排序
    // computed:{
    //   __allShops() {
    //     return this.allShops.sort((a,b)=>a.id-b.id);//新订单排第头
    //   }
    // },



  }
</script>
<style scoped>
  .container{
    background: white;
    margin:20rpx 20rpx 30rpx 20rpx;
    border-radius: 30rpx;
  }
  .order-number{
    border-bottom: 1px solid #F4F0EA;
    display: flex;
    align-items: center;
    padding: 15rpx 0;

  }
  .order-number-state{
    flex: 1;
    font-size: 24rpx;
    color: #f44;
  }
  .order-number-left{
    background: #1989fa;
    color: #fff;
    font-size: 24rpx;
    border-radius:20rpx;
    font-weight: 700;
    flex: 1;
    padding-left: 10rpx;
    margin-left: 10rpx;
  }
  .order-number-right{
    padding-left: 20rpx;
    font-size: 28rpx;
    color: #333;
    flex: 5;
  }
  .order-box{
    display: flex;
    margin-top: 40rpx;

    padding-right: 30rpx;
  }
  .order-img{
    flex: 1;
  }
  .order-img img{
    width: 220rpx;
    height: 200rpx;
    padding:0 10rpx;

  }
  .order-content{
    font-size: 28rpx;
    color: #333;
  }
  .order-header{
    display: flex;
    justify-content: space-between;
    font-size: 30rpx;
  }
  .order-main{
    font-size: 26rpx;
    color: #999;
    margin-top: 30rpx;
    display: flex;
  }
  .order-main-left{
    padding-right: 30rpx;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap:break-word;
    flex: 10;
  }
  .order-main-right{
    flex: 1;
    font-size: 28rpx;
    color: #999;
  }
  .order-footer{
    text-align: right;
    font-size: 28rpx;
    padding-bottom: 30rpx;
    margin-right: 30rpx;
  }
  .order-active{
    background: #1989fa;
    color: #ffffff;
  }
</style>
