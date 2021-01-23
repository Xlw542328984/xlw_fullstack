// 与 parcel 的不同   配置繁琐
// npm run build webpack -- mode=development
// 一定会去根目录找到 webpack.config.js配置文件
// module node 模块化 common.js module.exports
//import exports es6 export default
module.exports = {
    entry: './main.js',
    output: {
      filename: 'bundle.js'
    }
}
