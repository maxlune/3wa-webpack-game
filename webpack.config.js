const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/dist",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["styles-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Mon application",
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  devServer: {
    static: {
      // directory: path.join(__dirname, "dist"),
      directory: __dirname + "dist",
    },
    compress: true,
    port: 9000,
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: "css-loader",
  //     },
  //     {
  //       test: /\.scss$/,
  //       use: ["style-loader", "css-loader", "sass-loader"],
  //     },
  //   ],
  // },
};
