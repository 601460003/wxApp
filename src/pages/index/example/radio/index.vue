<template>
  <div>


<demo-block title="基本用法" padding>
  <van-radio-group
    value=" radio1 "
    data-key="radio1"
    custom-class="demo-radio-group"
    @change="onChange"
  >
    <van-radio name="1" custom-class="demo-radio">单选框 1</van-radio>
    <van-radio name="2" custom-class="demo-radio">单选框 2</van-radio>
  </van-radio-group>
</demo-block>

<demo-block title="禁用状态" padding>
  <van-radio-group
    disabled
    value=" radio2 "
    data-key="radio2"
    custom-class="demo-radio-group"
    bind:change="onChange"
  >
    <van-radio name="1" custom-class="demo-radio">单选框 1</van-radio>
    <van-radio name="2" custom-class="demo-radio">单选框 2</van-radio>
  </van-radio-group>
</demo-block>

<demo-block title="自定义颜色" padding>
  <van-radio
    name="1"
    value="1"
    custom-class="demo-radio"
    checked-color="#4b0"
  >
    单选框
  </van-radio>
</demo-block>

<demo-block title="与 Cell 组件一起使用">
  <van-radio-group value=" radio3 ">
    <van-cell-group>
      <van-cell title="单选框 1" clickable data-value="1" @click="onClick">
        <van-radio name="1" />
      </van-cell>
      <van-cell title="单选框 2" clickable data-value="2" @click="onClick">
        <van-radio name="2" />
      </van-cell>
    </van-cell-group>
  </van-radio-group>
</demo-block>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        radio1: '1',
        radio2: '2',
        radio3: '1'
      }
    },
    methods:{
      onChange(event) {
        const { value } = event.currentTarget.dataset;
        this.radio1 = value
      },

      onClick(event) {
        const { value } = event.currentTarget.dataset;
        this.radio3 = value
      }
    }
  }
</script>
<style>
  @import "main.css";
</style>
