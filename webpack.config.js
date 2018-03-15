const path = require('path');
const projectClientPath = path.join(__dirname, 'src')

module.exports = {
  entry: './src/entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
					{
						loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
						options: {
							babelrc: false,
							cacheDirectory: path.resolve('node_modules/.cache/babel-loader/client'),
							presets: [
								// A Babel preset that can automatically determine the Babel plugins and polyfills
								// https://github.com/babel/babel-preset-env

								// Experimental ECMAScript proposals
								// https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-
								'babel-preset-stage-2',

								// JSX
								// https://github.com/babel/babel/tree/master/packages/babel-preset-react
								'babel-preset-react'
							]
						}
					}
				]
      }
    ]
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
