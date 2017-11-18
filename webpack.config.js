const path = require('path')
const Uglify = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        use: 'babel-loader'
      },
      {
        test: /.styl$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1
            }
          },
          { loader: 'stylus-loader' }
        ]
      }
    ]
  },
  plugins: [
    new Uglify()
  ]
}
