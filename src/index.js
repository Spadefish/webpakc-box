// 我们如何让 webpack 识别 css 呢，答案就在 webpack 给我们提供了 loader 机制，可以让我们通过 loader 将任意的文件转成 webpack 可以识别的文件
// const css = require('css-loader!./chapter01/index.css')
const css = import('css-loader!./index.css')

// 动态 import 加载原理
// 我们知道 import 跟 require 的区别是，import 是动态加载只有在用到的时候才会去加载，而 require 只要声明了就会加载，webpack 遇到了 require 就会把它当成一个模块加载到 bundle 的依赖里

// 动态加载打包结果
// 除了正常的 bundle 之外，我们还可以看见一个 0.boundle.js  0.boundle.js 就是我们的动态加载的 index.css 模块

// 如果用了import 就有0.boundle.js boundle.js
// 用require就只有boundle.js
const a = 100
console.log(a, css)
