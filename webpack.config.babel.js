import HtmlWebPackPlugin from "html-webpack-plugin";

export default  {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: "Joes Jobs cooking",
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
