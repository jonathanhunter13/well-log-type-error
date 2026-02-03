const rules = require("./webpack.rules");
const plugins = require("./webpack.plugins");
const webpack = require("webpack");

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});
rules.push({
  test: /\.(png|jpg)$/,
  use: [{ loader: "url-loader" }],
});

module.exports = {
  module: {
    rules,
  },
  plugins: [
    ...plugins,
    new webpack.DefinePlugin({
      "process.env.HOME": JSON.stringify(process.env.HOME),
      "process.env.PWD": JSON.stringify(process.env.PWD),
    }),
  ],
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
    fallback: {
      path: require.resolve("path-browserify"),
    },
  },
};
