const path = require('path')
//exports是由s的。
module.exports = {
  mode: 'production',
  entry: {
    index: './lib/index.tsx'
  },
  output: {
    //__dirname不需要引号
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'T-UI',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
}