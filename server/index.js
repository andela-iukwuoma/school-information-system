import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';
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

routes(app);

const port = process.env.PORT || 5000;

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(port, () => {
    console.log('express app started on port', `${port}`);
});

export default app;

