const db = require('../Items');
const { rdb } = require('../services/firebase/firebase');

/**
 * GET
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * 
 * @returns JSON - list of items
 */

exports.getItems = (req, res, next) => {
    rdb.ref('products').once('value', (snapshot) => {
        let items = snapshot.val();

        //Transform object in to array
        items = Object.keys(items).map(key => ({id: key, ...items[key]}));

        res.status(200).json({
            items
        })
    });
}

exports.createItem = (req, res, next) => {
    const newItem = {}

    rdb.ref('items').push(newItem)
        .then( (ref) => {
            res.status(201).json({
                msg: 'Producto agregado',
                item: { id: ref.key, ...newItem}
            });
        })
}