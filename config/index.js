// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var fileExt = {
  template: "wxml",
  script: "js",
  style: "wxss",
  platform: "wx"
};

module.exports = {
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, `../dist`),
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
    fileExt: fileExt
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    // 在小程序开发者工具中不需要自动打开浏览器
    autoOpenBrowser: false,
    assetsRoot: path.resolve(__dirname, `../dist`),
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false,
    fileExt: fileExt
  }
}
