// eslint-disable-next-line @typescript-eslint/no-var-requires
const { name } = require('./package')
const port = 8081

module.exports = {
  publicPath: `//localhost:${port}`,
  devServer: {
    port,
    headers: {
      // 允许被主应用跨域fetch请求到
      'Access-Control-Allow-Origin': '*'
    }
  },
  // 自定义webpack配置
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把子应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
}
