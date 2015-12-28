module.exports = {
  output: {
    library: 'cacheStorage',
    libraryTarget: 'umd',
    path: './dist',
    filename: 'cache-storage.js'
  },
  entry: {
    library: './src/cache-storage'
  }
}
