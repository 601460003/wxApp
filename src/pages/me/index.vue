<template>
  <div>
    <van-cell title="充电密码自动锁定" icon="location">
      <van-switch :check="checked" @change="onChange"/>
    </van-cell>

    <van-cell title="充电记录" icon="location" is-link/>
    <van-cell title="意见反馈" icon="location" is-link/>
    <van-cell title="客服电话" icon="location" is-link/>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        checked: true
      };
    },
    method:{
      onChange() {
        this.checked = this.checked ? false : true;
      }
    }

  };
</script>

<style>
</style>
