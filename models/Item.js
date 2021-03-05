const { server } = require('../config');
const mongo = require('mongodb');
const mongoDB = require('../services/mongodb/mongodb').getDB;
const firebaseDB = require('../services/firebase/firebase').getDB;

 /**
 * MODEL: Item
 * @class Item
 */
class Item {
    static getAllMongo(){

    }

    static getByIdMongo(){

    }

    constructor(name, description, type, rarity, series, cost, imgIcon, imgFeatured, avgStars, firstOccurrences, lastOccurrences, occurrences, isNew, id){
        this.name = name;
        this.description = description;
        this.type = type;
        this.rarity = rarity;
        this.series = series;
        this.cost = cost;
        this.imgIcon = imgIcon;
        this.imgFeatured = imgFeatured;
        this.avgStars = avgStars;
        this.firstOccurrences = firstOccurrences;
        this.lastOccurrences = lastOccurrences;
        this.occurrences = occurrences;
        this.isNew = isNew;
        this.id = id;
    }

    saveMongo(){

    }

    updateMongo(){

    }

    deleteMongo(){

    }

    saveFirebase(){

    }

    updateFirebase(){

    }    

    getByIdFirebase(){

    }
    
    getAllFirebase(){

    }

    deleteFirebase(){
        
    }

}

exports.Item = Item;

