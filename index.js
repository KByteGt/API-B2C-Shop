const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

//Middlewares
const logger = require('./middleware/logger');

//Config
const config = require('./config');

//DB connections
//const mongoConnect = require('./services/mongodb/mongodb').connect;
const firebaseConnect = require('./services/firebase/firebase').connect;

//Routes
const api = require('./web/api');
const { Console } = require('console');

//Express
const app = express();

app.use(express.static(path.join(__dirname, '/client/build/')));

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(multer({storage: config.fileStorage, fileFilter: config.fileFilter}).single('imgIcon'));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, DELETE, PATCH, UPDATE');
    res.setHeader('Access-Control-Allow-Header','*');
    next();
})
app.use(logger.console);
app.use(express.static(path.join(__dirname, 'public')));

// All API routes
app.use('/api', api);

//Make DB connections
console.log(" ... Conecting FireBase ...")
firebaseConnect();
console.log(" ... Starting server ...")

app.get('/*', (req, res) => {
    //res.status(400).json({'msg': 'Invalid route'});
    res.sendFile(path.join(__dirname, '/client/build/index.html'))
});

app.listen(config.server.port, config.server.ip, () => console.log('Server start at: '+ config.server.domain+":"+config.server.port));

/*
mongoConnect( () => {
    console.log(" ... Conecting mongoDB ...")
    app.listen(config.server.port, config.server.ip, () => console.log('Server start at: '+ config.server.domain+":"+config.server.port));
});
*/

