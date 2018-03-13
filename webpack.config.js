const path = require('path');
const projectClientPath = path.join(__dirname, '../src')

module.exports = {
  entry: './src/entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      helpers: path.join(projectClientPath, 'helpers'),
      components: path.join(projectClientPath, 'components'),
      containers: path.join(projectClientPath, 'containers'),
      reducers: path.join(projectClientPath, 'reducers'),
      epics: path.join(projectClientPath, 'epics'),
      actions: path.join(projectClientPath, 'actions'),
      lib: path.join(projectClientPath, 'lib'),
      store: path.join(projectClientPath, 'store'),
      styles: path.join(projectClientPath, 'styles'),
      selectors: path.join(projectClientPath, 'selectors'),
      static: path.join(__dirname, 'static')
    },
    extensions: ['.js', '.jsx']
  }
}
