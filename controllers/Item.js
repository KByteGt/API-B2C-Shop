//const { rdb } = require('../services/firebase/firebase');

const Item = require('../models/Item');

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

    //console.log(req.body);
    //console.log(req.file);

    if(!imgIcon || name == '' || (cost || -1) <= 0 || (stock || -1) <= 0) 
        return res.status(402).json({message: 'Error al agregar el item'});
    
    const imgIconUrl = (imgIcon.path).replace(/public\\/, '').replace('\\','/');
    //console.log(imgIconUrl);

    const newItem = new Item(name, description, type, rarity, series, cost, imgIconUrl, imgIconUrl,avgStars,firstOccurrences, lastOccurrences, occurrences, isNew, stock);
    newItem.saveFirebase()
        .then( (response) => res.status(200).json(response))
        .catch( (error) => res.status(402).json({message: error}));
}

/**
 * GET
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * 
 * @returns JSON - list of items
 */
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