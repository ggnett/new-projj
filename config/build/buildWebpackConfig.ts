import webpack from 'webpack'
import path from 'path'

import { buildOptions } from "./types/config";
import { buildLoaders } from './buildLoaders';
import { buildResolve } from './buildResolve';
import { buildPlugins } from './buildPlugins';


export function buildWebpackConfig (options:buildOptions):webpack.Configuration {

    const {paths, mode} = options

    return {
        mode,
        entry: paths.entry,
        module: {
          rules: buildLoaders()
        },
        resolve: buildResolve(),
        plugins: buildPlugins(options),
        output: {
          filename: 'bundle.js',
          path: paths.build,
        },
      };
}