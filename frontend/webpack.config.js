const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
  template: "src/index.html", // to import index.html file inside index.js
});

const outputPath = path.join(__dirname, "/public");

const isDevelopment = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3030;

console.log({ outputPath });

module.exports = {
  entry: "./src/index.js",
  output: {
    path: outputPath, // the bundle output path
    filename: "bundle.js", // the name of the bundle
  },
  plugins: [htmlPlugin],
  devServer: {
    port: port,
    open: true, // Automatically open browser when server starts
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
  },
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader", //change to ts-loader
        },
      },
      {
        test: /\.(css|scss)$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx",".ts", ".tsx"],
  }, //fix error when file extension is .jsx
};
