import webpack from 'webpack'
  import { buildOptions } from './types/config';

export function buildResolve (options:buildOptions):webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [options.paths.src, 'node_modules'],
        alias:{},
        preferAbsolute:true,
        mainFiles: ['index'],
      }
}
