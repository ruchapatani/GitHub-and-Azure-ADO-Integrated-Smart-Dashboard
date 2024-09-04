const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.config.common.js");
const deps = require("./package.json").dependencies;

module.exports = (env) =>
  merge(common, {
    mode: "none",
 
    output: {
      publicPath: "http://localhost:3000/",
    },

    
    plugins: [
    ],
  });
