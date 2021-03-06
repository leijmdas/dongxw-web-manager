// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: false,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: true,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: 80,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/api': {
                 //target: 'http://120.78.136.63:10080',
                  target: 'http://localhost:10080',

                changeOrigin: true, // 如果接口跨域，需要进行这个参数配置,
                pathRewrite: {
                    '^/api': '/'   // 重写接口 www.akunlong.work
                }
            },
            '/dongxw': {
                //target: 'http://120.78.136.63:10081/dongxw', // 接口的域名
                target: 'http://localhost:10081/dongxw', // 接口的域名

                secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true, // 如果接口跨域，需要进行这个参数配置,
                pathRewrite: {
                    '^/dongxw': '/'   // 重写接口
                }
            },
            '/ipark': {
                 //target: 'http://120.77.172.83:8085/ipark', // 接口的域名
                  target: 'http://localhost:8085/ipark', // 接口的域名
                // secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true, // 如果接口跨域，需要进行这个参数配置,
                pathRewrite: {
                    '^/ipark': '/'   // 重写接口
                }
            },

            '/hongld': {
                // target: 'http://120.78.136.63:10081/dongxw', // 接口的域名
                target: 'http://localhost:880/hongld', // 接口的域名
                // secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true, // 如果接口跨域，需要进行这个参数配置,
                pathRewrite: {
                    '^/hongld': '/'   // 重写接口
                }
            },
        },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
}
