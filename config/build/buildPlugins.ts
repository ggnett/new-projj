import HtmlWebpackPlugin from "html-webpack-plugin";
import  webpack  from "webpack";
import  path from 'path'
import { buildOptions } from "./types/config";

export function buildPlugins ({paths}:buildOptions):webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
      }),
        new webpack.ProgressPlugin(),]
}