const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./middleware/logger');

const api = require('./web/api');

const app = express();

// Middlewares
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, DELETE, PUT, UPDATE');
    res.setHeader('Access-Control-Allow-Header','*');
    next();
})

app.use(logger.console);

// All API routes
app.use('/api', api);

app.use('/', (req, res) => {
    res.status(400).json({'msg': 'Invalid route'});
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port: '+ PORT));

//npm install --save firebase-admin