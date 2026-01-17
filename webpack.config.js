//run npm install --save-dev webpack webpack-cli 
//also run npm install --save-dev html-webpack-plugin
//also run npm install --save-dev style-loader css-loader
//also run npm install --save-dev webpack-dev-server
//also run npm install --save-dev html-loader if you need images

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};