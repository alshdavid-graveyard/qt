const path = require("path")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin

const mode = process.argv.includes("--prod") ? "production" : "development"
if (mode === "production") {
  process.env.NODE_ENV = "'production'"
}

const statsPlugin = process.argv.includes("--stats")
  ? [new BundleAnalyzerPlugin()]
  : []

module.exports = {
  entry: path.join(__dirname, "/src/main.tsx"),
  mode,
  output: {
    filename: "app/index.js",
    path: path.join(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [...statsPlugin],
  externals: {
    // 'preact': 'preact',
    // 'preact/hooks': 'preact/hooks',
    // 'rxjs': 'rxjs',
    // 'rxjs/operators': 'rxjs/operators'
  },
  resolve: {
    alias: {
      '@pangular/core': path.resolve(__dirname, 'lib/core'),
      '@pangular/compiler': path.resolve(__dirname, 'lib/compiler'),
    },
    extensions: [".tsx", ".ts", ".js"]
  }
}
