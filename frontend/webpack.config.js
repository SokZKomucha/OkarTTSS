const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [{
      test: /\.ts?$/,
      use: "ts-loader",
      exclude: /node_modules/
    }]
  },
  resolve: { extensions: [".tsx", ".ts", ".js"] },
  context: __dirname,
  output: {
    filename: "script.js",
    path: path.join(__dirname, "public")
  }
}