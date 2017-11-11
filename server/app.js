import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';
import routes from './routes';

dotenv.config();

// Setup Express App
const app = express();
app.use(express.static('client'));

// Log requests to the console
app.use(logger('dev'));

// Parse incoming request data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

// Require our routes into the application
routes(app);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

export default app;
