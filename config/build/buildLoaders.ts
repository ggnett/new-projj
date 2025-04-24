import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { buildOptions } from './types/config'

export function buildLoaders (option:buildOptions):webpack.RuleSetRule[] {

    const fileLoader = {
      test: /\.(png|jpe?g|gif|woff2|woff)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    }

    const svgLoader = {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          option.isDev? 'style-loader' : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              modules: {
                namedExport: false,
              },
            },},
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }

    //esli ne ispol'zuem typescript nujen babel-loader
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }

    return [
        fileLoader,
        svgLoader,
        typeScriptLoader,
        cssLoader
      ]
}
