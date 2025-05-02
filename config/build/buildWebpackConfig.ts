import webpack from 'webpack';

import { buildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolve } from './buildResolve';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options:buildOptions):webpack.Configuration {
    const { paths, mode, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(options.isDev),
        },
        resolve: buildResolve(options),
        plugins: buildPlugins(options),
        output: {
            filename: 'bundle.js',
            path: paths.build,
        },
        devtool: isDev? 'inline-source-map' : undefined,
        devServer: isDev? buildDevServer(options) : undefined,
    };
}
