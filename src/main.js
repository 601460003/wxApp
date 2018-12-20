import Vue from "vue";
import App from "./App";
//配置flyio
var Fly = require("flyio/dist/npm/wx");
var fly = new Fly;
//添加拦截器
fly.interceptors.request.use((config,promise)=>{
  //给所有请求添加自定义header
  config.headers["auths"]="NDM0IyMxMTYxNDhERjVENDg4MDgyRDM1MEMxNEMzRTBCMjI3RiMjbWVtYmVyX2lkOg==";
  return config;
})
//配置请求基地址
//
fly.config.baseURL = process.env.BASE_URL;
Vue.prototype.$http = fly;

Vue.config.productionTip = false;
App.mpType = "app";

const app = new Vue(App);
app.$mount();
