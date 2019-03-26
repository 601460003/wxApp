<template>
  <div class="container">
    <van-collapse v-model="activeName"  @change="onChange">
      <van-collapse-item title="如何注册" name="1">
        <van-button type="primary" class="demo-margin-right" @click="goto">vant weapp ui 展示页面</van-button>
      </van-collapse-item>
      <van-collapse-item title="如何充值" name="2">
      </van-collapse-item>
      <van-collapse-item title="如何充电" name="3">
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>

export default {
  data () {
    return {
      activeName: [1],
    }
  },
  methods: {
    onChange(e){
      this.activeName = [e.target["1"]];
    },
    goto(){
      // <a href="/pages/index/example/dashboard/main" class="go-to">去vant weapp ui 展示页面</a>
      this.$nav.link('/pages/index/example/dashboard/main',);
    },
  },
  created(){
  },
}
</script>

<style >

</style>
