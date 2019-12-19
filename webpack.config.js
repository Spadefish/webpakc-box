// const path = require('path')
// const rimraf = require('rimraf')
//
// // 删除dist目录
// rimraf.sync('dist')
//
// // webpack配置
//
// module.exports = {
//     entry: './src/index',
//     mode: process.env.NODE_ENV,
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     }
// }






// 使用 webpack-chain 重写配置
/*
官方解释:
webpack-chain 尝试通过提供可链式或顺流式的 API 创建和修改 webpack 配置。API 的 Key 部分可以由用户指定的名称引用，这有助于跨项目修改配置方式的标准化。
 */
const path = require('path')
const rimraf = require('rimraf')
const Config = require('webpack-chain')
const config = new Config()
const resolve = src => {
    return path.join(process.cwd(), src)
}

rimraf.sync('dist')

config
// 入口
.entry('src/index')
    .add(resolve('src/index.js'))
    .end()
// 模式
// .mode(process.env.NODE_ENV) 等价下面
.set('mode', process.env.NODE_ENV)
// 出口
.output
    .path(resolve('dist'))
    .filename('[name].bundle.js')

config.module
    .rule('css')
    .test(/\.css$/)
        .use('css')
        .loader('css-loader')

module.exports = config.toConfig()





















