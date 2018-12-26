<template>
  <div class="container">
    <van-collapse v-model="activeName"  @change="onChange">
      <van-collapse-item title="如何注册" name="1">
        第一场使用。。。
      </van-collapse-item>
      <van-collapse-item title="如何充值" name="2">
        在新能源公众号内：，、点击．
        寻桩充电”菜单，进入地图首页 2 、点击左上角”钱包”图标，选择充值金额 3 、填写微信支付密码，完成账号充值如何充电？
      </van-collapse-item>
      <van-collapse-item title="如何充电" name="3">
        先从充电桩上把充电枪连接到汽车充电接口后回到在充电桩 L
        〔 O 屏幕上进行充电操作：（如果充电桩是多枪设备，请按照使用中的充电枪在桩体上的标示于 LEO 屏幕首页上选择 A 枪或 B 枪充电页面）使用充电服务有两个模式供用户选择：扫码充电： 1 、进入公众号，点击底部”扫码充电”菜单进入充电业务首页 2 、充电业务首页点击扫码图标，对准充电桩 LEO 屏幕扫描二维码进行身份鉴权认证。（或可直接打开微信首页“ + ”号使用二维码扫描功能进行扫描） 3 、完成鉴权后，点击’’开始”按钮，进行充电 4 、车辆充满后充电桩会自动停止充电，等待用户结束服务账单上传 5 、用户需要提前停止充电、或结束整个充电服务时，需要在手机操作页面点击”结束一后结束本次服务密码充电 1 、进入公众号，点击底部”密码充电”菜单，系统会推送你私人的固定充电密码（切记请勿告诉别人密码内容） 2 、点击充电桩屏幕的”密码充电’，输入专属的六位数密码点击确认，点击“开始充电” 3 、车辆充满后充电桩会自动停止充电，等待用户结束服务账单上传 4 、用户需要提前停止充电、或结束整个充电服务时，需要在充电桩屏幕点击密码充电，输入专属密码点击‘’停止充电．’结束本次充电最后用户拔枪把充电枪放回充电桩体上面，系统自动发送本次充电的账单到用户帐户里面，整个充电服务结束
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>

export default {
  data () {
    return {
      activeName: ["2"]
    }
  },


  methods: {
    onChange(e){
      this.activeName = [e.target["1"]];
    }
  },
  created(){
    // this.$http.get("m/me/getMe4m").then((d)=>{
    //   //输出请求数据
    //   console.log(d.data)
    //   //输出响应头
    //   console.log(d.header)
    // }).catch(err=>{
    //   console.log(err.status,err.message)
    // })

  }

}
</script>

<style scoped>
</style>
