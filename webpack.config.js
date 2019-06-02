const path = require('path')
const webpack = require('webpack')

const Autoprefixer = require('autoprefixer')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const NODE_MODULES = path.resolve(__dirname, 'node_modules')
const EXTERNALS = path.resolve(__dirname, 'externals')
const STORAGE = path.resolve(__dirname, '__storage__')
const EXCLUDE_DEFAULT = [NODE_MODULES, EXTERNALS, STORAGE]

const SRC = path.resolve(__dirname, 'src')
const DIST = path.resolve(__dirname, 'build/www')

const NODE_ENV = process.env.NODE_ENV
const MODE = NODE_ENV !== 'development' ? 'production' : 'development'
process.env.BABEL_ENV = MODE

const config = {
    mode: MODE,
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: { 'react-dom': '@hot-loader/react-dom' },
    },
    entry: [
        'core-js/stable',
        'regenerator-runtime/runtime',
        SRC,
    ],
    output: {
        path: DIST,
        publicPath: '/',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                include: SRC,
                exclude: EXCLUDE_DEFAULT,
                use: (() => {
                    if (MODE === 'development') {
                        return [
                            'style-loader',
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: () => ([Autoprefixer]),
                                },
                            },
                        ]
                    }
                    return [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => ([Autoprefixer]),
                            },
                        },
                    ]
                })(),
            },
            {
                test: /\.jsx?$/,
                include: SRC,
                exclude: EXCLUDE_DEFAULT,
                use: { loader: 'babel-loader' },
            },
        ],
    },
    plugins: [
        new webpack.WatchIgnorePlugin(EXCLUDE_DEFAULT),
        new HtmlWebpackPlugin({
            filename: DIST + '/index.html',
            template: SRC + '/index.ejs',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:4].css',
        }),
        new CopyWebpackPlugin(
            [
                {
                    from: SRC + '/assets/img/favicon.png',
                    to: DIST,
                },
                {
                    from: SRC + '/assets/img',
                    to: DIST + '/img',
                },
                {
                    from: SRC + '/assets/audio',
                    to: DIST + '/audio',
                },
            ],
            {
                ignore: ['.DS_Store'],
            },
        ),
    ],
}

if (MODE === 'production') {
    config.output.chunkFilename = '[name].[chunkhash:4].js'
    config.output.filename = '[name].[chunkhash:4].js'
    config.optimization = {
        splitChunks: { chunks: 'initial' },
        runtimeChunk: { name: 'manifest' },
    }
}

if (MODE === 'development') {
    config.devServer = {
        historyApiFallback: true,
        disableHostCheck: true,
        stats: 'errors-only',
        overlay: true,
        hotOnly: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
            ignored: EXCLUDE_DEFAULT,
        },
    }
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
