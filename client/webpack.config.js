const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
    "@": path.resolve(__dirname, "src"),
  },
  },

module: {
  rules: [
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader", "postcss-loader"],
    },
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: "babel-loader"
    },
    {
      test: /\.(png|jpe?g|gif|svg|webp)$/i,
      type: "asset/resource",
      generator: {
        filename: "assets/images/[name][ext]"
      }
    }
  ]
},

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],

devServer: {
  port: 3000,
  historyApiFallback: true,
  open: true,
  hot: true,
}
};