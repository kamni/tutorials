/**
 * Copyright (C) J Leadbetter <j@jleadbetter.com>
 * License: MIT
 **/

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
