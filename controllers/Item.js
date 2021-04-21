const { getDir } = require('../config');
const firebaseDB = require('../services/firebase/firebase').getDB;
const Item = require('../models/Item');

/**
 * CRUD - Items Create, Read, Update & Delete
 * 
 */

 /**
  * CREATE ITEM
  * @param {*} req 
  * @param {*} res 
  * @param {*} next 
  */

exports.createItem = (req, res, next) => {
    const name = req.body.name;
    const description = req.body.description;
    const type = req.body.type;
    const rarity = req.body.rarity;
    const series = (req.body.series == 'null') ? null : req.body.series;
    const cost = parseFloat(req.body.cost);
    const imgIcon = req.file;
    //const imgFeatured = req.body.imgFeatured;
    const avgStars = parseFloat(req.body.avgStars);
    const firstOccurrences = req.body.firstOccurrences;
    const lastOccurrences = req.body.lastOccurrences;
    const occurrences = parseInt(req.body.occurrences);
    const isNew = (req.body.isNew == 'true');
    const stock = parseInt(req.body.stock);

    if(!imgIcon || name == '' || (cost || -1) <= 0 || (stock || -1) <= 0) 
        return res.status(404).json({message: 'Error al agregar el item'});
    
    const imgIconUrl = (imgIcon.path).replace(/public\\/, '').replace('\\','/');

    const newItem = new Item(name, description, type, rarity, series, cost, imgIconUrl, imgIconUrl,avgStars,firstOccurrences, lastOccurrences, occurrences, isNew, stock);
    newItem.saveFirebase()
        .then( (response) => res.status(200).json(response))
        .catch( (error) => res.status(402).json({message: error}));
}

exports.readItem = (req, res, next) => {
    const itemId = req.params.id;
    
    const database = firebaseDB();
    
    database.ref('items').child(itemId).once('value', (snapshot) => {
        let item = snapshot.val();

        if(item){
            item.imgFeatured = getDir +"/"+ item.imgFeatured
            item.imgIcon = getDir +"/"+ item.imgIcon

            item = {id: itemId, ...item}
        }

        res.status(200).json({
            item
        })
    });
}

exports.updateItem = (req, res, next) => {
    res.status(200).json({"message": "Update Item method"});
}

exports.deleteItem = (req, res, next) => {
    res.status(200).json({"message": "Delete Item method"});
}

exports.getItems = (req, res, next) => {
    
    const database = firebaseDB();
    
    database.ref('items').once('value', (snapshot) => {
        let items = snapshot.val();

        if(items){
            items = Object.keys(items).map( key => {
                items[key].imgFeatured = getDir +"/"+ items[key].imgFeatured
                items[key].imgIcon = getDir +"/"+ items[key].imgIcon

                return ({id: key, ...items[key]})
            })
        } 

        items = items || [];
        res.status(200).json({
            items
        })
    });
}

exports.getPrice = (req, res, next) => {
    const itemId = req.params.id;

    const database = firebaseDB();

    database.ref('items').child(itemId).once('value', (snapshot) => {
        item = snapshot.val();
        cost = 0;

        if(item) cost = item.cost

        res.status(200).json({
            item: {
                id: itemId,
                cost: cost
            }
        })
    });
}

/*
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
*/

/*
db.collection('mounted')
  .get()
  .then( snapshot => {
    
  })
  .catch( error => console.log(error))
*/