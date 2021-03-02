const db = require('../Items');
const { rdb } = require('../services/firebase/firebase');

/**
 * CRUD - Items
 * 
 */

 /**
  * CREATE ITEM
  * @param {*} req 
  * @param {*} res 
  * @param {*} next 
  */

exports.createItem = (req, res, next) => {
    const newItem = {
        "name": req.body.name,
        "description": req.body.description,
        "type": req.body.type,
        "rarity": req.body.rarity,
        "series": req.body.series,
        "cost": parseFloat(req.body.cost),
        "imgIcon": req.body.imgIcon,
        "imgFeatured": req.body.imgFeatured,
        "avgStars": 0,
        "firstOccurrences": "",
        "lastOccurrences": "",
        "occurrences": 0,
        "isNew": true
    }

    rdb.ref('items').push(newItem)
        .then( (ref) => {
            res.status(201).json({
                msg: 'Producto agregado',
                item: { id: ref.key, ...newItem}
            });
        })
}

/**
 * GET
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * 
 * @returns JSON - list of items
 */
exports.readItem = (req, res, next) => {
    const itemId = req.params.itemId;
    rdb.ref('items').child(itemId).once('value', (snapshot) => {
        let item = snapshot.val();
        if(item != null){
            item = { id: itemId, ...snapshot.val() }
        }

        res.status(200).json({
            item: { ... item}
        })
    })
}

exports.getItems = (req, res, next) => {
    rdb.ref('items')
       .once('value', (snapshot) => {
        let items = snapshot.val();

        //Transform object in to array
        items = Object.keys(items).map(key => ({id: key, ...items[key]}));

        res.status(200).json({
            items
        })
    });
}


/*
db.collection('mounted')
  .get()
  .then( snapshot => {
    
  })
  .catch( error => console.log(error))
*/