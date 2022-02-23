const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: 'public/index.html',
          }),
    ],
    output: {
        path:  path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true
    },
    devServer: {
        port: 8080,
        static: path.resolve(__dirname, 'public'),
        compress: true,
        hot: true
    },
    devtool: 'source-map', 
}