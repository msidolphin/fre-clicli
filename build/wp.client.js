const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const VueClientPlugin = require('vue-server-renderer/client-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


const baseConfig = require('./wp.base')
const isDev = process.env.NODE_ENV === 'development'

module.exports = merge(baseConfig, {
  entry: {
    app: './client/client-entry.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: true
        }
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: true
  },
  plugins: [
    new VueClientPlugin(),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    compress: true,
    port: 2333,
    proxy: {
    }
  }
})

// MiniCssExtractPlugin 暂不支持 ssr，暂时移除，坐等更新
// https://github.com/webpack-contrib/mini-css-extract-plugin/issues/90

// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// const isDev = process.env.NODE_ENV === 'development'

// new MiniCssExtractPlugin({
//   filename: "../css/[name].css",
//   chunkFilename: "css/[id].css"
// }),
// new HtmlWebpackPlugin({
//   template: path.join(__dirname, 'template.html')
// }),
