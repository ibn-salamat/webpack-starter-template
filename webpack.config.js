const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["babel-loader", "ts-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.jsx?$/,
                use: ["babel-loader"],
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        importsFields: ['pages'],
        alias: {
            pages: path.resolve(__dirname, './src/pages'),
        },
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
}

module.exports =  (env, argv) => {
    if (argv.mode === 'development') {
        console.log('dev');
        config.devtool = "source-map"
    }
    
    return config; 
}