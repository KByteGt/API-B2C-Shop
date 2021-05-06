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
    
    let imgIconUrl = (imgIcon.path).replace(/public\\/, '').replace('\\','/');
    if(process.env.NODE_ENV == 'production'){
        imgIconUrl = (imgIcon.path).replace(/public/,'').replace('\\','/');
    }

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
    const itemId = req.params.id;
    let imgUrl = "";

    const cost = parseFloat(req.body.cost);
    const img = req.file;
    const avgStars = parseFloat(req.body.avgStars);
    const occurrences = parseInt(req.body.occurrences);
    const isNew = (req.body.isNew == 'true');
    const stock = parseInt(req.body.stock);

    if(img){
        let imgPath = (img.path).replace(/public\\/, '').replace('\\','/');
        if(process.env.NODE_ENV == 'production'){
            imgPath = (img.path).replace(/public/,'').replace('\\','/');
        }
        req.body.imgIcon = imgPath
        req.body.imgFeatured = imgPath
        imgUrl = getDir +"/"+ img; 
    }

    req.body.cost = cost;
    req.body.avgStars = avgStars;
    req.body.occurrences = occurrences;
    req.body.isNew = isNew;
    req.body.stock = stock;

    const database = firebaseDB();

    database.ref('items').child(itemId).update({...req.body})
        .then( () => {
            if(req.body.imgIcon){
                req.body.imgIcon = imgUrl 
                req.body.imgFeatured = imgUrl
            }

            res.status(200).json({
                id: itemId,
                ...req.body
            })
        })
        .catch( (err) => {
            console.log(err)
            res.status(401).json({
                message: "Error al actualizar el Item [" + itemId +"]"
            })
        });
}

exports.deleteItem = (req, res, next) => {
    const itemId = req.params.id;

    const database = firebaseDB();

    database.ref('items').child(itemId).remove()
        .then( () => res.status(200).json({message: "Item eliminado con éxito!!!"}))
        .catch( () => res.status(401).json({message: "Error al eliminar el item ["+itemId+"]"}))
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
            id: itemId,
            cost: cost
        })
    });
}

exports.readItemPopular = (req, res, next) => {
    const itemId = req.params.id;
    
    const database = firebaseDB();
    //database.ref('items).OrderByChile('category').equalTo('Marvel').on()
    database.ref('items').limitToFirst(5).on('value', (snapshot) => {
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