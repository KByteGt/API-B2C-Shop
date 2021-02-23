const firebaseAdmin = require('firebase-admin');

var serviceAccount = require('../../credentials/firebase/credential.json');

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: 'https://b2c-shop-a4502-default-rtdb.firebaseio.com'
});

const firebaseDatabase = firebaseAdmin.database();

module.exports = {
    rdb: firebaseDatabase
}

