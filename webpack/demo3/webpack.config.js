// 让大象跳舞
// module 模块， node 内置的模块化机制 commonjs
  // module.exports + require
// es6   export default  import 
// webpack 升级我们处理静态资源从传统小作坊 -> 企业级开发
module.exports = {
    entry: './src/main.js',
    output: {
      filename: '[name].js'
    },
    /*每种类型的静态文件 代表某种资源， 提供一种解决方案 */
    module: {
      rules: [
        {
          test: /\.css$/ ,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
        mode: 'development',
        devServer: {
        // 项目构建后路径
        contentBase: resolve(__dirname, 'build'),
        // 启动 gzip 压缩
        compress: true,
        // 端口号
        port: 3000,
        // 自动打开浏览器
        open: true
        }
  }
  