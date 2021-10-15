const path = require("path")


module.exports = {
  target: "node",
  mode: "development",
  entry: path.resolve(__dirname, "src/app.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
    library: 'app',
  },
  resolve: {
    extensions: [".js", ".mjs", "cjs"],
  },
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.node$/,
        loader: "node-loader",
      },
    ],
  },
  devtool: "eval-source-map"
}
