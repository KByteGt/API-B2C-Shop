const express = require('express');
const bodyParser = require('body-parser');

const api = require('./web/api');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, DELETE, PUT, UPDATE');
    res.setHeader('Access-Control-Allow-Header','*');
})

// All API routes
app.use('/api', api);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port: '+ PORT));