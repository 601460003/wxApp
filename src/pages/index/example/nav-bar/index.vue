<template>
  <div>
    <demo-block title="基础用法">
      <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </demo-block>

    <demo-block title="高级用法">
      <van-nav-bar title="标题" left-text="返回" left-arrow>
        <van-icon name="search" slot="right" custom-class="icon"/>
      </van-nav-bar>
    </demo-block>
  </div>
</template>
<script>
  export default {
    methods:{
      onClickLeft() {
        wx.showToast({ title: '点击返回', icon: 'none' });
      },

      onClickRight() {
        wx.showToast({ title: '点击按钮', icon: 'none' });
      }
    }
  }
</script>
<style>
  @import "main.css";
</style>
