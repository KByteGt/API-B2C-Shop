const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

//Middlewares
const logger = require('./middleware/logger');

//Config
const config = require('./config');

//DB connections
const mongoConnect = require('./services/mongodb/mongodb').connect;
const firebaseConnect = require('./services/firebase/firebase').connect;

//Routes
const api = require('./web/api');

//Express
const app = express();

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(multer({storage: config.fileStorage, fileFilter: config.fileFilter}).single('image'));
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

app.use('/', (req, res) => {
    res.status(400).json({'msg': 'Invalid route'});
})

//Make DB connections
firebaseConnect();

mongoConnect( () => {
    app.listen(config.server.port, config.server.ip, () => console.log('Server start at: '+ config.server.domain+":"+config.server.port));
});

