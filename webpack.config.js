var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader']
          })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ],
  resolve: {
    // modules: [ 'src', 'node_modules'],
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      'formik': path.resolve(__dirname, './node_modules/formik'),
      'react-apollo': path.resolve(__dirname, './node_modules/react-apollo'),
      'recompose': path.resolve(__dirname, './node_modules/recompose'),
      'react-apollo': path.resolve(__dirname, './node_modules/react-apollo')
    }
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    },
    formik: {
      commonjs: "formik",
      commonjs2: "formik",
      amd: "formik",
      root: "formik"
    },
    recompose: {
      commonjs: "recompose",
      commonjs2: "recompose",
      amd: "recompose",
      root: "recompose"
    },
    "react-apollo": {
      commonjs: "react-apollo",
      commonjs2: "react-apollo",
      amd: "react-apollo",
      root: "react-apollo"
    }
  }
};
