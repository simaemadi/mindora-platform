const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

module: {
  rules: [
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: "babel-loader"
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
  hot: true,
  static: "./dist",
  open: true
}
};