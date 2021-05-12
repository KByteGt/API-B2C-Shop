const axios = require('axios').default;
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

const itemsData = require('./data');

itemsData.data.forEach( item => {

    console.log("loadding item: "+ item.name);

    let fd = new FormData();

    fd.append('name', item.name);
    fd.append('description', item.description);
    fd.append('type', item.type);
    fd.append('rarity', item.rarity);
    fd.append('series', item.series);
    fd.append('cost', item.cost);
    fd.append('avgStars', item.avgStars);
    fd.append('firstOccurrences', item.firstOccurrences);
    fd.append('lastOccurrences', item.lastOccurrences);
    fd.append('occurrences', item.occurrences);
    fd.append('stock', item.stock);
    fd.append('isNew', item.isNew);
    fd.append('imgIcon', fs.createReadStream(item.imgIcon), path.basename(item.imgIcon));

    axios.post(
        'http://localhost:2500/api/item',
        fd,
        {'accept': 'application/json', headers: fd.getHeaders()}
    ).then( res => {
        console.log(res.data);
    }).catch( err => {
        console.log("\n** Error: \n"+ err);
    })
});