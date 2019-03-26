<template>
  <div>
    <div>
      <div class="title" >按钮类型222</div>
      <div class="row">
        <van-button type="primary" class="demo-margin-right" @click="clickMy">主要按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
      </div>
      <van-button class="demo-margin-right">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
    </div>

    <div>
      <div class="title">朴素按钮</div>
      <van-button type="primary" plain class="demo-margin-right">朴素按钮</van-button>
      <van-button type="danger" plain>朴素按钮</van-button>
    </div>
    <div>
      <div class="title">禁用状态</div>
      <van-button type="primary" disabled class="demo-margin-right">禁用状态</van-button>
      <van-button type="danger" disabled>禁用状态</van-button>
    </div>
    <div>
      <div class="title">加载状态</div>
      <van-button loading type="primary" class="demo-margin-right" loading-class="loading"/>
      <van-button loading type="danger" loading-class="loading"/>
    </div>
    <div>
      <div class="title">按钮形状</div>
      <van-button type="primary" square class="demo-margin-right">方形按钮</van-button>
      <van-button type="danger" round>圆形按钮</van-button>
    </div>
    <div>
      <div class="title">按钮尺寸</div>
      <van-button size="large" block custom-class="demo-margin-bottom">大号按钮</van-button>
      <van-button class="demo-margin-right">普通按钮</van-button>
      <van-button size="small" class="demo-margin-right">小型按钮</van-button>
      <van-button size="mini">迷你按钮</van-button>
    </div>
  </div>
</template>
<script>
  export default {
    created(){

      this.$bus.$emit('AeventName', {
        test: 'test'
      })
    },
    method:{
      clickMy(){
        alert("asd")
      }
    }
  }
</script>
<style>
  @import "main.css";
</style>
