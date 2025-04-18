import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';

const config:webpack.Configuration = {
  mode:`development`,
  entry: path.resolve(__dirname,'src','index.ts'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
  }),
    new webpack.ProgressPlugin(),],
};

export default config