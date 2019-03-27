<template>
  <div class="shopCar-box">
    <!--头部-->
  <header class="shopCar-title">
    <span>8小时内快速发货</span>
    <span>30天内无忧退货</span>
    <span>48小时内快速退货</span>
  </header>
    <!--购物车空空如也/判断是否有商品-->
    <article class="shopCar-car" v-if="shopCarList.length<1">
      <img src="http://img3.imgtn.bdimg.com/it/u=4214290751,1455904856&fm=26&gp=0.jpg"/>
      <p>购物车空空如也，去逛逛吧～</p>
    </article>
    <!--当有商品的时候-->
    <figure class="shopList-box" v-for="(shop,index) in shopCarList" :key="index">
      <!--选择-->
      <div class="boxRadio">
        <van-checkbox  :value="shop.checked" checked-color="#f44" @change="onceCheck(shop)"  size="100px"  @toggle="onceCheck(shop)"></van-checkbox>
      </div>
      <!--图片-->
      <div class="box-img">
        <img :src="shop.img" >
      </div>
      <!--内容-->
      <div class="box-content">
        <!--文字-->
        <div class="box-describe">
          <p>{{shop.describe}}</p>
        </div>
        <!--价格-->
        <div class="box-price price-flex">
          <span>￥{{shop.price}}</span>
          <span><van-stepper  :value="shop.amount"  @plus="addCount(shop)" @minus="outCount(shop)"/></span>
        </div>
      </div>
    </figure>
    <div class="spilt"></div>
    <!--下单-->
    <footer v-if="shopCarList.length>0">
      <van-submit-bar
        button-text="下单"
        @submit="buyShopOrder"
      >
       <div class="boxRadio-a" >
         <van-checkbox :value="isAllCheck" checked-color="#f44" @change="allCheck"></van-checkbox>
       </div>
        <span class="order-all">全选</span>
        <div class="order-price">
          <span>合计：</span>
          <span class="box-price">￥{{totalMoney}}</span>
        </div>
      </van-submit-bar>
      <van-toast id="van-toast"/>
    </footer>
  </div>
</template>

<script>
  import Toast from '@/../static/vant/toast/toast'
  export default {
    data() {
      return{
        shopCar:false,
        checked: true,
        isAllCheck:false,
        shopCarList:[],
        totalMoney:0,
        isAllChecked:0,
        mobileID:''
      }
    },
    onShow(){
      // 登录成功后获取用户id
      this.shopCarList=[];
      var user = this.$storage.getItem('user');
      if(user){
        this.mobileID = JSON.parse(user).id;
        //获取购物车信息
        this.$http.get('home/getAllCar?sessionId='+this.mobileID)
          .then(res=>{
            this.shopCarList=res.data.data
            this.isAllCheck=false
            this.totalMoney=0
          })
      }else {
        this.shopCarList=[]
      }

    },
    methods:{
      // 购物车增加数量和减少数量的方法
      addCount(a){
        a.amount++;
        this. getTotalMoney()
      },
      outCount(a){
        a.amount--;
        this. getTotalMoney()
      },
      //在购物车直接下单
      buyShopOrder(){
        var carList=[];
        this.shopCarList.forEach(shop => {
          if (shop.checked) {
            carList.push(shop.id)
          }
        });
        let shopMess={
          "carIds":carList,
          "type":2,
          "sessionId":this.mobileID
        };
        this.$http.post('home/addOrder',shopMess)
          .then(res=>{
            Toast('下单成功');
            if(res.data.code===100){
              this.$http.get('home/getAllCar?sessionId='+this.mobileID)
                .then(res=>{
                  this.shopCarList=res.data.data
                  this.isAllCheck=false
                  this.totalMoney=0
                })
            }
          })
      },
      // 第一个方法全选
      allCheck(){
        this.isAllCheck=!this.isAllCheck;
        this.shopCarList.forEach(shop=>{
          if(!shop.checked){
            this.$set(shop,'checked',shop.checked)
          }
          shop.checked=!shop.checked
          if(this.isAllCheck){
            shop.checked=true
          }
        })
        this.getTotalMoney();
      },
      //k控制单个商品
      onceCheck(shop){
        this.$set(shop,'checked',this.checked=!this.checked)
        this.getTotalMoney();
        this.__isAllChecke();
      },
      //计算总价格
      getTotalMoney(){
        let totalMoney=0;
        this.shopCarList.forEach(shop=>{
          if(shop.checked){
            totalMoney+=shop.price*shop.amount
          }
        })
        this.totalMoney=totalMoney
      },
      __isAllChecke() {
        let isAllChecked = 0;
        this.shopCarList.forEach(shop => {
          if (shop.checked) {
            isAllChecked++;
          }
        });
        // 利用列表的长度来定义是否长度一样，来判断是否全部选中
        if (isAllChecked ===this.shopCarList.length) {
          this.isAllCheck = true
        } else {
          this.isAllCheck =false
        }
      },

    }
  };
</script>

<style scoped>
  /*头部*/
  .shopCar-box{
    font-size: 27rpx;
  }
  .shopCar-title{
    padding: 18rpx;
    background: #f44;
    color: #fff;
    font-size: 27rpx;
  }
  .shopCar-title span{
    padding-left: 38rpx;
  }
  /*购物车空*/
  .shopCar-car{
    background: #f3f5f7;
    text-align: center;
    height: 350rpx;
  }
  .shopCar-car img{
    width: 200rpx;
    height: 200rpx;
    padding-bottom: 10rpx;
    padding-top: 40rpx;
    border-radius: 50%;
  }
  .shopCar-car p{
    color: #999;
  }
  /*购物车别表*/
  .shopList-box{
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 25rpx solid #F3F5F7;
  }
  .boxRadio{
    flex: 1;
    padding-left: 30rpx;
  }
  .boxRadio-a{
    padding-left: 32rpx;
    position: relative;
  }
  .box-img{
    flex: 3;
  }
  .box-img img{
    width: 200rpx;
    height: 200rpx;
    padding: 30rpx 0;
  }
  .box-content{
    flex: 8;
    padding: 0 20rpx;
    line-height: 40rpx;
  }
  .box-price{
    margin-top: 30rpx;
    color: #f44;
  }
  .spilt{
    height: 40rpx;
  }
  .order-all{
    color: #999;
    margin-left: 20rpx;
  }
  .order-price{
    position: absolute;
    right: 250rpx;
  }
  .box-describe p{
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price-flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
