
const path = require("path")
const MiniCssExtractPlugin=require("mini-css-extract-plugin")
const HtmlWebpackPlugin=require("html-webpack-plugin")
module.exports={
    entry:"./src/index.tsx",
    output:{
        path: path.resolve(__dirname,"build"),
        filename:"bunble.js"
    },
    resolve:{
        extensions:[".ts",".tsx",".jsx",".json","js"]
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:"awesome-typescript-loader"
            },
            {enforce:"pre",test:/\.js$/,loader:"source-map-loader"},
            {
                test:/\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader","sass-loader"
                ]
            }
        ]
    },plugin:[
        new HtmlWebpackPlugin({
            template:"src/index.html"
        }),
        new MiniCssExtractPlugin("styles.css")
    ],
    devtool:"source-map"
}
