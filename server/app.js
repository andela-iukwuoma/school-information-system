import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

// Setup Express App
const app = express();
app.use(express.static(path.join(__dirname, '../public')));


// Log requests to the console
app.use(logger('dev'));

// Parse incoming request data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Require our routes into the application
routes(app);


export default app;
