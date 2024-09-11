const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
  template: "src/index.html", // to import index.html file inside index.js
});

const outputPath = path.join(__dirname, "/public");

console.log({ outputPath });

module.exports = {
  entry: "./src/index.js",
  output: {
    path: outputPath, // the bundle output path
    filename: "bundle.js", // the name of the bundle
  },
  plugins: [htmlPlugin],
  devServer: {
    port: 3030, // you can change the port
    open: true, // Automatically open browser when server starts
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // styles files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  }, //fix error when file extension is .jsx
};
