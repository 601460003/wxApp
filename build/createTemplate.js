var program = require('commander');
var path = require('path')
var fs = require('fs')
program
  .version('0.0.1')
  .option('-n, --navname <s>', 'navname')
  .option('-p, --path <s>', 'file')
  .parse(process.argv);
if(!program.navname){
  console.log('请输入导航名字 -n xxx')
}
if(!program.path){
  console.log('请输入路径名字 -p x/x')
}
if(!program.navname||!program.path){
  return;
}
var filePath = program.path;
var name = program.navname;
//index.vue
//main.js
//main.json
var vueTemplate = `<template>
  <div class="container">
  </div>
</template>

<script>
  export default {
    data() {},
    methods:{},
  };
</script>

<style>
</style>
`
var mainJS = `import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()
`
var mainJSON=`{
  "navigationBarTitleText": "${name}",
  "usingComponents": {
    "van-cell": "/static/vant/cell/index",
    "van-cell-group": "/static/vant/cell-group/index"
  }
}
`

function __mkdirs(dirpath) {
  if (!fs.existsSync(path.dirname(dirpath))) {
    __mkdirs(path.dirname(dirpath));
  }
  fs.mkdirSync(dirpath);
}
let myPath = path.resolve(`src/pages/${filePath}`);
fs.existsSync(myPath) == false
&& __mkdirs(myPath)
fs.writeFile(`src/pages/${filePath}/index.vue`,vueTemplate,()=>{console.log('create index.vue')});
fs.writeFile(`src/pages/${filePath}/main.js`,mainJS,()=>{console.log('create main.js')});
fs.writeFile(`src/pages/${filePath}/main.json`,mainJSON,()=>{console.log('create main.json')});






