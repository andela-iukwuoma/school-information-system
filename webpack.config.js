import path from 'path';
import webpack from 'webpack';

export default {
    devtool: 'inline-source-map',
    entry: {
        app: [
            'webpack-hot-middleware/client?reload=true',
            'react-hot-loader/patch',
            './client/index'
            ]
    },
    output: {
        path: path.join(__dirname, 'client'),
        filename: 'bundle.js',
        publicPath: "/"
    },
    devServer: {
        hot: true
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                include: path.join(__dirname, 'client'),
                loaders: ['babel-loader']
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    node: {
        fs: 'empty',
        net: 'empty',
        dns: 'empty'
    }
};
