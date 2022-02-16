const path = require("path");

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
    output: {
        path:  path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    devServer: {
        port: 8080,
        static: path.resolve(__dirname, 'dist'),
        hot: true
    }
}