const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    index: [
      './src/index.js'
    ]
  },

  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        exclude: /node_modules/,
        loader:  'file-loader?name=[name].[ext]',
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=[name]-[hash].[ext]'
      },
      {
        test: /\.elm$/i,
        exclude: [/elm-stuff/, /node_modules/],
        use: [
          'elm-webpack-loader?verbose=true&warn=true'
        ],
      },
      {
        test: /\.styl$/i,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader',
        ]
      },
    ],

    noParse: /\.elm$/,
  },

  plugins: [
    new CopyWebpackPlugin ([
      {
        from: './src/assets',
        to: path.resolve(__dirname + '/dist/assets')
      }
    ])
  ],

  devServer: {
    inline: true,
    stats: { colors: true },
  },
};
