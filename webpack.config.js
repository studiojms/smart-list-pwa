/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    minify: {
      html5: true,
      collapseWhitespace: true,
      removeComments: true,
    },
    template: path.join(__dirname, './index.html'),
    filename: 'index.html',
    inject: 'body',
    title: 'SmartList',
    favicon: path.join(__dirname, 'src/assets/images/list-16.png'),
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),
  new WebpackPwaManifest({
    name: 'SmartList',
    short_name: 'SmartList',
    description: 'SmartList - Supermarket Lists',
    background_color: '#ffffff',
    crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
    icons: [
      {
        src: path.resolve('src/assets/images/list-16.png'),
        size: '16x16',
      },
      {
        src: path.resolve('src/assets/images/list-20.png'),
        size: '20x20',
      },
      {
        src: path.resolve('src/assets/images/list-32.png'),
        size: '32x32',
      },
      {
        src: path.resolve('src/assets/images/list-48.png'),
        size: '48x48',
      },
      {
        src: path.resolve('src/assets/images/list-72.png'),
        size: '72x72',
      },
      {
        src: path.resolve('src/assets/images/list-96.png'),
        size: '96x96',
      },
      {
        src: path.resolve('src/assets/images/list-144.png'),
        size: '144x144',
      },
      {
        src: path.resolve('src/assets/images/list-192.png'),
        size: '192x192',
      },
      {
        src: path.resolve('src/assets/images/icon.png'),
        size: '192x192',
        purpose: 'any',
      },
    ],
  }),
  new CopyWebpackPlugin({ patterns: [{ from: 'i18n/locales/**/*' }] }),
  new webpack.DefinePlugin({
    version: JSON.stringify(process.env.npm_package_version),
  }),
];

const ENV = process.env.NODE_ENV || 'dev';
const VERSION = JSON.stringify(require('./package.json').version).replace(/["']/g, '');

const isProd = ENV != 'dev';

if (isProd) {
  plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
  plugins.push(new webpack.HashedModuleIdsPlugin());
  plugins.push(
    new WorkboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
      cleanupOutdatedCaches: true,
    }),
  );
}

module.exports = (env) => {
  console.log(
    `|******************* NODE_ENV: ${ENV.toUpperCase()} #### VERSION: ${VERSION} ***********************************|`,
  );

  return {
    context: path.join(__dirname, 'src'),
    entry: {
      application: './index.tsx',
      vendor: ['react', 'react-dom'],
    },
    output: {
      filename: '[name].[hash].js',
      path: path.join(__dirname, 'dist'),
    },

    mode: isProd ? 'production' : 'development',

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: ['.ts', '.tsx', '.js'],
    },

    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.css$|\.scss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: !isProd,
              },
            },
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
          },
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/octet-stream',
          },
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'image/svg+xml',
          },
        },
        {
          test: /\.(png|jpg|jpeg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
        },
      ],
    },
    plugins: plugins,
    optimization: {
      minimize: isProd,
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          reactVendor: {
            test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
            name: 'reactVendor',
          },
          // utilityVendor: {
          //   test: /[\\/]node_modules[\\/](lodash|moment)[\\/]/,
          //   name: 'utilityVendor',
          // },
          stylesVendor: {
            test: /[\\/]node_modules[\\/](semantic-ui-react|semantic-ui-css)[\\/]/,
            name: 'stylesVendor',
          },
          vendor: {
            test: /[\\/]node_modules[\\/](!semantic-ui-react)(!semantic-ui-css)(!moment)(!lodash)[\\/]/,
            name: 'vendor',
          },
        },
      },
      minimizer: isProd ? [new OptimizeCSSAssetsPlugin({})] : [],
    },
    devServer: {
      stats: 'minimal',
      host: '0.0.0.0',
      // https: true,
    },
  };
};
