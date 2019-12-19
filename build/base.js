const {findSync} = require('../lib')
const Config = require('webpack-chain')
const config = new Config()
const files = findSync('config')
const path = require('path')
const resolve = (src) => {
    return path.join(process.cwd(), src)
}


module.exports = () => {
    const map = new Map()

    files.map((item)=> {
        const name = item.split('/').pop().replace('.js', '')
        return map.set(name, require(item)(config, resolve))
    })

    map.forEach((val, key)=> {
        if (key === 'css') {
            val('css', /\.css$/)
        } else {
            val()
        }
    })

    return config
}
