const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const sassResourceLoader = {
  //增加全局变量 resources
  loader: 'sass-resources-loader',
  options: {
    // Or array of paths
    resources: [
      resolve('src/styles/variable.scss'),
      resolve('src/styles/mixins.scss')
    ]
  }
}

const alias = {
  '@': resolve('src'),
  '@images': resolve('src/images'),
  '@router': resolve('src/router'),
  '@styles': resolve('src/styles'),
  '@utils': resolve('src/utils'),
  '@components': resolve('src/components'),
  '@pages': resolve('src/pages'),
  '@store': resolve('src/store')
}

module.exports = {
  alias,
  sassResourceLoader
}