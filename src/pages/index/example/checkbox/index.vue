<template>
  <div>
    <demo-block title="基本用法">
      <van-checkbox
        v-model="checkbox1"
        data-key="checkbox1"
        custom-class="demo-checkbox"
        @change="onChange">
        复选框
      </van-checkbox>
    </demo-block>

    <demo-block title="禁用状态">
      <van-checkbox
        disabled
        custom-class="demo-checkbox"
      >
        复选框
      </van-checkbox>
      <van-checkbox
        disabled
        custom-class="demo-checkbox"
      >
        复选框
      </van-checkbox>
    </demo-block>

    <demo-block title="自定义颜色">
      <van-checkbox
        v-model="checkbox2"
        data-key="checkbox2"
        checked-color="#4b0"
        custom-class="demo-checkbox"
        @change="onChange"
      >
        复选框
      </van-checkbox>
    </demo-block>

    <demo-block title="自定义图标">
      <van-checkbox
        use-icon-slot
        v-model="checkbox3"
        data-key="checkbox3"
        custom-class="demo-checkbox"
        @change="onChange"
      >
        自定义图标
        <image mode="widthFix" slot="icon" :src="checkbox3 ? icon.active : icon.normal" class="icon"/>
      </van-checkbox>
    </demo-block>

    <demo-block title="复选框组">
      <van-checkbox-group v-model="result" data-key="result" @change="onChange">
        <van-checkbox
          v-for="item in list"
          :key="index "
          :name=" item"
          custom-class="demo-checkbox"
        >
          复选框 {{ item }}
        </van-checkbox>
      </van-checkbox-group>
    </demo-block>

    <demo-block title="设置最大可选数">
      <van-checkbox-group v-model=" result2 " data-key="result2" max="2" @:change="onChange">
        <van-checkbox
          v-for="item in list"
          :key="index "
          :name="item"
          custom-class="demo-checkbox"
        >
          复选框 {{ item }}
        </van-checkbox>
      </van-checkbox-group>
    </demo-block>

    <demo-block title="搭配单元格组件使用">
      <van-checkbox-group v-model="result3" data-key="result3" @change="onChange">
        <van-cell-group>
          <van-cell
            v-for="item in list"
            :key="index "
            :title="'复选框'+ item "
            value-class="value-class"
            clickable
            :data-name=" item "
            @click="toggle"
          >
            <!--<van-checkbox catch:tap="noop" class="checkboxes-{{ item }}" name="{{ item }}" />-->
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
    </demo-block>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checkbox1: true,
        checkbox2: true,
        checkbox3: true,
        list: ["a", "b", "c"],
        result: ["a", "b"],
        result2: [],
        result3: [],
        icon: {
          normal:
            "https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png",
          active:
            "https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png"
        }
      }
    },
    methods: {
      onChange(event) {
        // const { key } = event.currentTarget.dataset;
        // this.setData({ [key]: event.detail });
      },

      onClick(event) {
        // const { value } = event.currentTarget.dataset;
        // this.setData({
        //   radio3: value
        // });
      },

      toggle(event) {
        // const { name } = event.currentTarget.dataset;
        // const checkbox = this.selectComponent(`.checkboxes-${name}`);
        // checkbox.toggle();
      },

      noop() {}
    }
  };
</script>
<style>
  @import "main.css";
</style>
