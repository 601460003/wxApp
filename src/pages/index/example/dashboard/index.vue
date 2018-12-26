<template>
  <div class="container">
    <div class="title">
      <image class="logo" src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png"/>
      <diav class="title-text">Vant Weapp</diav>
    </div>
    <div class="desc">轻量、可靠的小程序 UI 组件库</div>

    <div v-for="(i,index) in catalog" :key="index">
      <div class="mobile-nav">
        <div class="mobile-nav__title">{{ i.groupName }}</div>
        <van-cell-group>
          <van-cell v-for="(k,itemIndex) in i.list" is-link :title=" k.title" :key="itemIndex"
                    :url="'/pages/index/example'+k.path+'/main'"/>
        </van-cell-group>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

    data() {
      return {
        catalog: [
          {
            groupName: "基础组件",
            list: [
              {
                path: "/button",
                title: "Button 按钮"
              },
              {
                path: "/cell",
                title: "Cell 单元格"
              },
              {
                path: "/icon",
                title: "Icon 图标"
              },
              // {
              //   path: "/col",
              //   title: "Layout 布局"
              // },
              // {
              //   path: "/popup",
              //   title: "Popup 弹出层"
              // },
              // {
              //   path: "/transition",
              //   title: "Transition 动画"
              // }
            ]
          },
          {
            groupName: "表单组件",
            list:
              [
                {
                  path: "/checkbox",
                  title: "Checkbox 复选框"
                },
                {
                  path: "/datetime-picker",
                  title: "DatetimePicker 时间选择"
                },
                {
                  path: "/field",
                  title: "Field 输入框"
                },
                // {
                //   path: "/picker",
                //   title: "Picker 选择器"
                // },
                {
                  path: "/radio",
                  title: "Radio 单选框"
                },
                // {
                //   path: "/rate",
                //   title: "Rate 评分"
                // },
                // {
                //   path: "/search",
                //   title: "Search 搜索"
                // },
                // {
                //   path: "/slider",
                //   title: "Slider 滑块"
                // },
                // {
                //   path: "/stepper",
                //   title: "Stepper 步进器"
                // },
                // {
                //   path: "/switch",
                //   title: "Switch 开关"
                // },
                // {
                //   path: "/switch-cell",
                //   title: "SwitchCell 开关单元格"
                // }
              ]
          }, {
            groupName: "反馈组件",
            list:
              [
                // {
                //   path: "/action-sheet",
                //   title: "ActionSheet 上拉菜单"
                // },
                // {
                //   path: "/dialog",
                //   title: "Dialog 弹出框"
                // },
                // {
                //   path: "/loading",
                //   title: "Loading 加载"
                // },
                // {
                //   path: "/notify",
                //   title: "Notify 消息通知"
                // },
                // {
                //   path: "/swipe-cell",
                //   title: "SwipeCell 滑动单元格"
                // },
                {
                  path: "/toast",
                  title: "Toast 轻提示"
                }
              ]
          }, {
            groupName: "展示组件",
            list:
              [
                {
                  path: "/collapse",
                  title: "Collapse 折叠面板"
                },
                // {
                //   path: "/notice-bar",
                //   title: "NoticeBar 通告栏"
                // },
                // {
                //   path: "/panel",
                //   title: "Panel 面板"
                // },
                // {
                //   path: "/progress",
                //   title: "Progress 进度条"
                // },
                // {
                //   path: "/steps",
                //   title: "Steps 步骤条"
                // },
                // {
                //   path: "/tag",
                //   title: "Tag 标记"
                // },
                // {
                //   path: "/tree-select",
                //   title: "TreeSelect 分类选择"
                // }
              ]
          }, {
            groupName: "导航组件",
            list:
              [
                // {
                //   path: "/badge",
                //   title: "Badge 徽章"
                // },
                {
                  path: "/nav-bar",
                  title: "NavBar 导航栏"
                },
                // {
                //   path: "/tab",
                //   title: "Tab 标签页"
                // },
                // {
                //   path: "/tabbar",
                //   title: "Tabbar 标签栏"
                // }
              ]
          }, {
            groupName: "业务组件",
            list:
              [
                // {
                //   path: "/area",
                //   title: "Area 省市区选择"
                // },
                {
                  path: "/card",
                  title: "Card 商品卡片"
                },
                // {
                //   path: "/submit-bar",
                //   title: "SubmitBar 提交订单栏"
                // },
                // {
                //   path: "/goods-action",
                //   title: "GoodsAction 商品导航"
                // }
              ]
          }
        ]

      };
    },
    created(){
    }

  };
</script>

<style >
  @import "main.css";

</style>
