import path from "path";
import { Configuration } from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const outputDir = './checkout-ui-custom'
const src = './checkout/react'

const config: Configuration = {
  entry: {
    'checkout6-custom': `${src}/index.js`,
    // 'checkout6-custom.css': `${src}/index.scss`,
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, outputDir),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        use:[MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        test:/.(css|sass|scss)$/,
      },
      {
        type:"asset",
        test:/\.(png|svg|jpg|jpeg|gif)$/i,
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: "checkout6-custom.css",
      chunkFilename: "[id].css",
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};

export default config;