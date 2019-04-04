import Vue from "vue";
import App from "@/App";
import vueBus from 'vue-bus'
import storage from '@/storage'
import Navigate from '@/nav'
//配置flyio
var Fly = require("flyio/dist/npm/wx");
var fly = new Fly;
//添加拦截器
//配置请求基地址
fly.config.baseURL = process.env.BASE_URL;
Vue.prototype.$http = fly;


Vue.config.productionTip = false;
Vue.use(vueBus);
Vue.prototype.$storage = new storage();
Vue.prototype.$nav = new Navigate();
const app = new Vue({
  mpType: 'app',
  ...App
})
app.$mount();
