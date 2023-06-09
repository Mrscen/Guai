const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const resolve = dir => path.join(__dirname,dir)

module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  lintOnSave: false,

  // @重定位到src文件夹
  runtimeCompiler: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  
  devServer:{
    proxy:{
      '/xg':{
        target:'http://47.113.145.33:3000',
        changeOrigin: true,
        pathRewiter: {'^/xg': ""},
      }
  }
}
})
