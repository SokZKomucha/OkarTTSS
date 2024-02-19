const path = require("path");

module.exports = {
  module: {
    rules: [{
      test: /\.ts?$/,
      use: "ts-loader",
      exclude: /node_modules/
    }]
  },
  entry: "./src/index.ts",
  resolve: { extensions: [".ts", ".js"] },
  context: __dirname,
  output: {
    filename: "script.js",
    path: path.join(__dirname, "public")
  }
}