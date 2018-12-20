<template>
  <div>
    <div class="container">
      <demo-block title="基础用法">
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          :thumb="imageURL"
        />
      </demo-block>

      <demo-block title="没有商品图片">
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
        />
      </demo-block>

      <demo-block title="高级用法">
        <van-card
          num="2"
          tag="标签"
          price="2.00"
          origin-price="3.00"
          desc="描述信息"
          title="商品标题"
          :thumb="imageURL"
        >
          <!--<div slot="tags">-->
          <!--<van-tag plain type="danger">满减</van-tag>-->
          <!--</div>-->
          <!--<div slot="footer" class="van-card__footer">-->
          <!--<van-button size="mini" round custom-class="button">按钮</van-button>-->
          <!--<van-button size="mini" round>按钮</van-button>-->
          <!--</div>-->
        </van-card>
      </demo-block>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imageURL: "//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg"
      };
    }
  };
</script>
<style>
  @import "main.css";
</style>
