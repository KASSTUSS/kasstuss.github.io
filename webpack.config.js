const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


const mode = process.env.NODE_ENV;

module.exports = {
    
    mode: mode,
    devtool: false,
    entry: {
        login: path.resolve(__dirname, 'src/login', 'index.js'),
        reg: path.resolve(__dirname, 'src/reg', 'index.js'),
      },
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/login', 'index.html'),
            filename: './login/index.html',
            chunks: ['login']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/reg', 'index.html'),
            filename: './reg/index.html'
        }),
        new MiniCssExtractPlugin ({
            filename: '[name].[contenthash].css'
        }),

    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.css$/i,
                use: [
                    (mode === 'development') ? 'style-loader' : {
                        loader: MiniCssExtractPlugin.loader,
                        options: {

                        }
                    },
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                          postcssOptions: {
                            plugins: [
                              [
                                "postcss-preset-env"
                              ],
                            ],
                          },
                        },
                      },
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
          new CssMinimizerPlugin({
            test: /\.css$/i,
          }),
        ],
        minimize: (mode === 'production'), 
      },
}