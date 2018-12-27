# 微信小程序基础框架

### mpvue 小程序框架 vant-weapp ui框架 网络请求框架 flyio

 [mpvue 文档链接](http://mpvue.com)

 [vant-weapp ui文档链接](https://youzan.github.io/vant-weapp/#/intro)

 [flyio文档链接](https://github.com/wendux/fly)

-----

###### 如何使用
######



```
git clone jianxin@192.168.1.252:newlife/newlife_yun_charing.git
cd newlife_yun_charing
npm install --registry=https://registry.npm.taobao.org
npm start 启动监听文件改动

```


-----


#### 小程序操作
1. 小程序工具更新最新
2. 导入newlife_yun_charin/dist
3. 开启 es6->es5
4. 关闭合法域名验证

#### vant ui 体验小程序
<img src="https://img.yzcdn.cn/vant-weapp/qrcode-201808101114.jpg" width="200" height="200" style="margin-top: 10px;" >

### 项目中发起请求

```
this.$http.get(url).then(e=>{})
```

~~### 添加公共样式~~
```
index.vue中 使用 @import @/static/assets/css/public.css
```


### 通过命令行方式创建页面(推荐)
```
cd newlife_yun_charing
node build/createTemplate.js -n '测试' -p test/test
-n xx 页面导航名字
-p test/test 页面将创建在/src/pages/test/test/ 下面
```

### master
master分支仅用于完成基本的组件封装，工具类的封装 ，再合并到其他分支

### 云充微信小程序
云充微信小程序 需要切换到 yun-charging 分支进行开发

### 跨页面监听与广播
```
this.$bus.emit('eventName',arg) 通知监听器
this.$bus.on('eventName',(v)=>{...})注册监听事件
```

### 缓存
```
this.$storage.setItem(key,val) val接受任何类型
this.$storage.getItem(key) 返回缓存值
this.$storage.clean(key) 删除缓存值
```

### 页面跳转
```
页面跳转采用 this.$nav.link(url,{})
mpvue承载了小程序的生命周期 可以采用小程序生命周期的方法
接受页面传值参数 采用onLoad(e){console.log(e)}
```


### 填写地理位置用途说明
```
app.json

 "permission": {
    "scope.userLocation": {
      "desc": "导航"
    }
```