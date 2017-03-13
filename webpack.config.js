const webpack  = require("webpack");
const path = require("path");

const config = {
    entry: [
        "react-hot-loader/patch",
        "webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/only-dev-server",
        "./app/index",
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js",
        publicPath: "/dist"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ["babel-loader"],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.less$/,
                loaders: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.css$/,
                loaders:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(otf|eot|png|svg|ttf|woff|woff2|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=8192"
            }
        ]
    }
};

module.exports = config;