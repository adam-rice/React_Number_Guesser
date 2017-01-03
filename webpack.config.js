module.exports = {
  entry: {
    main: ['babel-polyfill', './lib/index.js'],
    test: ['babel-polyfill', 'mocha!./test/index.js'],
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' },
    ],
  },
  resolve: {
    root: __dirname,
    alias: {
      Application: 'lib/Components/Application',
      Controls: 'lib/Components/Controls.jsx',
      Input: 'lib/Components/Input',
      Instructions: 'lib/Components/Instructions',
      Styles: 'lib/CSS/styles',
      randomNumber: 'lib/helpers/random-number',
      enableClearBtn: 'lib/helpers/enableClearBtn',
      enableResetBtn: 'lib/helpers/enableResetBtn',
      enableGuessBtn: 'lib/helpers/enableGuessBtn'
    },
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css'],
  },
};
