var path         = require('path');
var webpack      = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',

  context: path.resolve(__dirname, '..'),
  node: {
    __dirname: true
  },
  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom'],
    style: [
      'webpack-hot-middleware/client', // 在scss入口先添加热加载
      './src/style/main.scss'
    ],
    components: [
      'webpack-hot-middleware/client', // 在主逻辑入口先添加热加载
      './src/App.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../bundle'),
    filename: '[name].js',
    publicPath: '/bundle/',
    sourceMapFilename: 'map/[file].map'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react'],
              plugins: [['import', {libraryName: 'antd', style: 'css' }]]
            }
          }
        ]
      },

      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ]
              }
            }
          },
          'sass-loader'
        ]
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ]
              }
            }
          }
        ]
      },

      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },

  resolve: {
    extensions: ['.js', 'jsx']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor'),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new webpack.LoaderOptionsPlugin({
      // test: /\.xxx$/, // may apply this only for some modules
      minimize: false,
      debug: true
    })
  ],
}
