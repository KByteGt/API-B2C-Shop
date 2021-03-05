const { MongoClient } = require('mongodb');
const stringConnection = require('../../credentials/mongodb/credential.json');

let database;

const connect = (cb) => {
    MongoClient.connect(stringConnection.connection, { useUnifiedTopology: true})
        .then( client => {
            console.log("MongoDB connected...")
            database = client.db();
            cb();
        })
        .catch( error => {
            throw error;
        })
}

const getDB = () => {
    if(database) return database;
    throw "MongoDB is not found :'(";
}

exports.connect = connect;
exports.getDB = getDB;