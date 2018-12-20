<template>
  <div>
    <van-tabs :active="active" @change="onSwitch">
      <van-tab title="基础图标" custom-class="demo-tab-pane">
        <van-col v-for="(item,index) in  basic" :key="index" custom-class="col" div="8">
          <van-icon :name="item" size="32px" custom-class="icon"/>
          <div class="text">{{ item }}</div>
        </van-col>
      </van-tab>
      <van-tab title="线框风格" custom-class="demo-tab-pane">
        <van-col v-for="(item,index) in   outline " :key="index" custom-class="col" div="8">
          <van-icon :name=" item " size="32px" custom-class="icon"/>
          <div class="text">{{ item }}</div>
        </van-col>
      </van-tab>
      <van-tab title="实底风格" custom-class="demo-tab-pane">
        <van-col v-for=" (item,index) in  filled " :key="index" custom-class="col" div="8">
          <van-icon :name=" item " size="32px" custom-class="icon"/>
          <div class="text">{{ item }}</div>
        </van-col>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
  import config from './config';
  const basic = config.basic.map(item => item.css);
  const outline = config.outline.map(item => item.css);
  const filled = config.filled.map(item => item.css);
  export default {
    data(){
      return {
        basic,
        outline,
        filled,
        active: 0
      }
    },
    methods:{
      onSwitch(event){
        this.active = event.detail.index
      }
    }
  }
</script>
<style>
  @import "main.css";
</style>
