const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let plugins = [];
let optimization = {};

// plugins.push(new BundleAnalyzerPlugin());

module.exports = {
    lintOnSave: false,
    configureWebpack: {
        plugins,
        optimization,
    },
};