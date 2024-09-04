const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.config.common.js");

module.exports = (env) =>
  merge(common, {
    mode: "production",
    entry: {
      app: path.resolve(__dirname, "src", "index.tsx"),
    },
    output: {
      path: path.join(__dirname, "build"),
      filename: "bundle.js",
      publicPath: "/",
    },
    devtool: "inline-source-map",
    plugins: [
    ],
  });
