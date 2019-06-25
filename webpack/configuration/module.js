export default {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: "babel-loader"
    },
    {
      test: /\.scss$/, // Can be: .scss or .styl or .less
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader"

        },
        {
          loader: "sass-loader" 
        }
      ]
    }
  ]
};
