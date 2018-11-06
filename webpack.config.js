const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './components/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs',
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
  externals: {
    react: 'react',
    'styled-components': 'styled-components',
  },
}
