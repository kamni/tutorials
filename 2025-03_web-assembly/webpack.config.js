const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { PyodidePlugin } = require("@pyodide/webpack-plugin");
const webpack = require("webpack");

module.exports = (_, argv) =>
  /** @type {import("webpack").Configuration} */ ({
    target: "web",
    mode: argv.mode || "development",
    devtool: false,
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "index.js",
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      compress: true,
      port: 9000,
    },
    plugins: [
      new PyodidePlugin(),
      new HtmlWebpackPlugin({template: 'src/index.html'}),
    ],
  });

module.exports.webpack = webpack;
