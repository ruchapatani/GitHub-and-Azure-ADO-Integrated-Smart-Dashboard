const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = ({ 
  
  optimization: {
    splitChunks: false,
  },

  resolve: {
    extensions: [".jsx", ".ts", ".js", ".tsx",".json"],
    modules: ["src", "node_modules"],
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
  },

  module: {
    rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
  },

  plugins: [  
    new HtmlWebPackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new Dotenv({
      // load this now instead of the ones in '.env'
      path: './enviroments/' + `${typeof process.env.NODE_ENV === 'undefined' ? 'local' : process.env.NODE_ENV}.env`,
      prefix: 'process.env.',
    }),
  ],
});
