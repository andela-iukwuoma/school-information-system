import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

// Setup Express App
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

// Log requests to the console
app.use(logger('dev'));

// Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Require our routes into the application
// routes(app);

// Setup default route that sends back a welcome message
// app.get('*', (req, res) => {
//     res.render('index', { title: 'Express' });
//     // res.sendFile(path.join(__dirname, '../client/index.html'));
// });

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to my web application',
}));

export default app;
