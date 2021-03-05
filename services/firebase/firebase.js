const firebaseAdmin = require('firebase-admin');
var serviceAccount = require('../../credentials/firebase/credential.json');

let database;

const connect = () => {
    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(serviceAccount),
        databaseURL: 'https://b2c-shop-a4502-default-rtdb.firebaseio.com'
    });
    database = firebaseAdmin.database();
}

const getDB = () => {
    if(database) return database;
    throw "Firebase is not found";
}

exports.connect = connect;
exports.getDB = getDB;

