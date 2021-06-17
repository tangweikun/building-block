const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './components/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            [
              require.resolve('@babel/plugin-proposal-class-properties'),
              { loose: true },
            ],
            'babel-plugin-styled-components',
          ],
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    moduleIds: 'named',
    chunkIds: 'named',
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 5,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          reuseExistingChunk: true,
          priority: -10,
        },
      },
    },
  },
  externals: {
    react: 'react',
    'styled-components': 'styled-components',
  },
};
