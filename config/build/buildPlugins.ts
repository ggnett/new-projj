import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import  webpack  from "webpack";
import { buildOptions } from "./types/config";

export function buildPlugins ({paths}:buildOptions):webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
      }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
        }) ,
        new webpack.HotModuleReplacementPlugin(),       
    ]
}