const path = require('path');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

const mode = process.argv.includes('--prod') ? 'production' : 'development'
if (mode === 'production') {
    process.env.NODE_ENV="'production'"
}

const statsPlugin = process.argv.includes("--stats")
  ? [new BundleAnalyzerPlugin()]
  : []

module.exports = {
    entry: path.join(__dirname, '/src/main.tsx'),
    mode,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    output: {
        filename: 'app/index.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        ...statsPlugin
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};