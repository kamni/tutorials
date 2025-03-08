/**
 * Copyright (C) J Leadbetter <j@jleadbetter.com>
 * License: MIT
 **/

const path = require('path');
const { PyodidePlugin } = require("@pyodide/webpack-plugin");

module.exports = {
  plugins: [new PyodidePlugin()],
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'js'),
  },
};
