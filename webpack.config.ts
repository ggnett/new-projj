import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { buildPaths } from './config/build/types/config';


const mode = 'development';
const isDev = mode === 'development'


const paths:buildPaths = {
    entry: path.resolve(__dirname,'src','index.ts'),
    build: path.resolve(__dirname, 'build'),
    html:path.resolve(__dirname, 'public', 'index.html'),
}

const config:webpack.Configuration = buildWebpackConfig({
    mode: 'development',
    paths,
    isDev
})

export default config