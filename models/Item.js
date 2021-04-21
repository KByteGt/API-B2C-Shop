const { getDir } = require('../config');
//const mongo = require('mongodb');
//const mongoDB = require('../services/mongodb/mongodb').getDB;
const firebaseDB = require('../services/firebase/firebase').getDB;

 /**
 * MODEL: Item
 * @class Item
 */

module.exports = class Item {
    /*
    static getAllMongo(){
        const database = mongoDB();
        return new Promise( (resolve, reject) => {
            database.collection('items')
                .find()
                .toArray()
                .then( items => {
                    if(items) items = items.map( (item) => ( {
                        id: item['_id'],
                        name: item.name,
                        description: item.description,
                        type: item.type,
                        rarity: item.rarity,
                        series: item.series,
                        cost: item.cost,
                        imgIcon: getDir + item.imgIcon,
                        imgFeatured: getDir + item.imgFeatured,
                        avgStars: item.avgStars,
                        firstOccurrences: item.firstOccurrences,
                        lastOccurrences: item.lastOccurrences,
                        occurrences: item.occurrences,
                        isNew: item.isNew
                    } ));

                    items = items || [];
                    resolve( {message: "Success", items: items} );
                });
        });
    }

    static getByIdMongo(){

    }
    */

    /**
     * 
     * @param {*} name 
     * @param {*} description 
     * @param {*} type 
     * @param {*} rarity 
     * @param {*} series 
     * @param {*} cost 
     * @param {*} imgIcon 
     * @param {*} imgFeatured 
     * @param {*} avgStars 
     * @param {*} firstOccurrences 
     * @param {*} lastOccurrences 
     * @param {*} occurrences 
     * @param {*} isNew 
     * @param {*} stock 
     * @param {*} id 
     */
    constructor(name, description, type, rarity, series, cost, imgIcon, imgFeatured, avgStars, firstOccurrences, lastOccurrences, occurrences, isNew, stock, id){
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
        this.stock = stock;
        this.id = id;
    }

    /*
    saveMongo(){
        const database = mongoDB();

        return new Promise( (resolve, reject) => {
            database.collection('items').insertOne({
                name = this.name,
                description = this.description,
                type = this.type,
                rarity = this.rarity,
                series = this.series,
                cost = this.cost,
                imgIcon = this.imgIcon,
                imgFeatured = this.imgFeatured,
                avgStars = this.avgStars,
                firstOccurrences = this.firstOccurrences,
                lastOccurrences = this.lastOccurrences,
                occurrences = this.occurrences,
                isNew = this.isNew,
            })
        }).then( result => {
            const imgIcon = getDir + "/img/" + this.imgIcon;
            resolve({
                message: 'Item agregado correctamente',
                item: {
                    id: result.insertedId,
                    name: this.name,
                    description: this.description,
                    type: this.type,
                    rarity: this.rarity,
                    series: this.series,
                    cost: this.cost,
                    imgIcon: imgIcon,
                    imgFeatured: null,
                    avgStars: this.avgStars,
                    firstOccurrences: this.firstOccurrences,
                    lastOccurrences: this.lastOccurrences,
                    occurrences: this.occurrences,
                    isNew: this.isNew
                }
            })
        }).catch( error => {
            reject('Error al agregar el item en MongoDb');
        });
    }

    updateMongo(){

    }

    deleteMongo(){

    }
*/
    saveFirebase(){
        const database = firebaseDB();

        return new Promise( (resolve, reject) => {
            database.ref('items').push({
                name: this.name,
                description: this.description,
                type: this.type,
                rarity: this.rarity,
                series: this.series,
                cost: this.cost,
                imgIcon: this.imgIcon,
                imgFeatured: this.imgFeatured,
                avgStars: this.avgStars,
                firstOccurrences: this.firstOccurrences,
                lastOccurrences: this.lastOccurrences,
                occurrences: this.occurrences,
                isNew: this.isNew,
                stock: this.stock
            }).then( result => {
                const imgIcon = getDir +"/"+ this.imgIcon;
                const imgFeatured = getDir +"/"+ this.imgFeatured;

                resolve({
                    message: 'Item agregado correctamente',
                    item: {
                        id: result.key,
                        name: this.name,
                        description: this.description,
                        type: this.type,
                        rarity: this.rarity,
                        series: this.series,
                        cost: this.cost,
                        imgIcon: imgIcon,
                        imgFeatured: imgFeatured,
                        avgStars: this.avgStars,
                        firstOccurrences: this.firstOccurrences,
                        lastOccurrences: this.lastOccurrences,
                        occurrences: this.occurrences,
                        isNew: this.isNew,
                        stock: this.stock
                    }
                })
            }).catch( error => {
                reject(error);
            });
        });
    }


    getAllFirebase(){
        const database = firebaseDB();

        return new Promise( (resolve, reject) => {
            database.ref('items').once('value', (snapshot) => {
                let items = snapshot.val();
                if(items) items = Object.keys(items).map( key => {
                        items[key].imgIcon = getDir + "/" + items[key].imgIcon;
                        items[key].imgFeatured = getDir + "/" + items[key].imgFeatured;
                        return ({ id: key, ...products[key] })
                });
                
                items = items || [];
                res.status(200).json({
                    items
                });
            });

            /*
            rdb.ref('items')
                .once('value', (snapshot) => {
                    let items = snapshot.val();

                //Transform object in to array
                items = Object.keys(items).map(key => ({id: key, ...items[key]}));

                res.status(200).json({
                    items
                })
            });
            */
        });
    }

}

