const UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin;

module.exports = {
    entry: './src/index.js',
    output: {
        path: 'dist',
        filename: 'bundle.webpack.js'
    },
    plugins: [
        new UglifyJsPlugin({
            beautify: true,
            mangle: false,
            compress: {
                sequences: false,
                join_vars: false,
                warnings: false
            }
        })
    ]
};
