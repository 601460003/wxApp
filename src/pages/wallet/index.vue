<template>
<div class="main">
  <div class="subjeck-box" v-for="(item,index) in shopList" :key="index">
    <!--头部-->
    <header class="subjeck-header">
      <img :src="item.portrait"/>
      <span>{{item.mobile}}</span>
    </header>
    <!--图片展示-->

    <section class="subjeck-shops">
      <img :src="item.img"/>
    </section>
    <!--评论-->
    <article >
      <div class="subjeck-name">{{item.name}}</div>
      <p class="subjeck-comment">{{item.comment}}</p>
    </article>
  </div>
</div>
</template>

<script>
export default {

  data () {
    return {
      shopList:[]
    }
  },
  onLoad(e){
  },
  created(){
    this.$http.get("subject/list")
      .then(res=>{
        this.shopList=res.data.data;
      })
  },

}
</script>

<style scoped>
  .main{
    background: #f3f5f7;
  }
.subjeck-box{
  font-size: 28rpx;
  margin-bottom: 20rpx;
  padding: 0 20rpx 20rpx;
  background: white;

}
.subjeck-header{
  padding: 20rpx 0;
}
  .subjeck-header img{
    width: 80rpx;
    height: 80rpx;
    border-radius: 50px;
    vertical-align: middle;
    margin-right: 8rpx;
  }
  .subjeck-shops{
    text-align: center;
    margin-bottom: 10rpx;
  }
  .subjeck-shops img{
    width: 180rpx;
    height: 180rpx;
    padding-bottom: 10rpx;
  }
  .subjeck-name{
    padding-bottom: 10rpx;
  }
  .subjeck-comment{
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    padding-right: 8px;
    color: #999;
    font-size: 12px;
  }


</style>
